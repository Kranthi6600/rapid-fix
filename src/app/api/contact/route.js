import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

const SHOPMONKEY_API_BASE = process.env.SHOPMONKEY_API_BASE || 'https://api.shopmonkey.cloud/v3';

// Best-effort dedupe + create a lead customer in Shopmonkey.
// Attribution (gclid/UTMs) is stored on the customer record so the ad click
// can be tied back to the eventual order/payment inside Shopmonkey.
async function createShopmonkeyLead({ name, email, phone, service, date, time, message, attribution }) {
  const apiKey = process.env.SHOPMONKEY_API_KEY;
  if (!apiKey) return { skipped: true };

  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  const trimmed = (name || '').trim();
  const firstSpace = trimmed.indexOf(' ');
  const firstName = firstSpace === -1 ? trimmed : trimmed.slice(0, firstSpace);
  const lastName = firstSpace === -1 ? '(web lead)' : trimmed.slice(firstSpace + 1).trim();

  const summary = [
    service && service !== 'Choose' ? `Service: ${service}` : null,
    date ? `Preferred: ${date}${time ? ` ${time}` : ''}` : null,
    attribution?.utm_source ? `Source: ${attribution.utm_source}${attribution.utm_medium ? `/${attribution.utm_medium}` : ''}` : null,
    attribution?.utm_campaign ? `Campaign: ${attribution.utm_campaign}` : null,
    attribution?.gclid ? 'Google Ads click (gclid captured)' : null,
    message ? `Notes: ${message}` : null,
  ].filter(Boolean).join(' | ');

  // Dedupe: reuse an existing customer matched by email when possible.
  let customerId = null;
  try {
    const searchRes = await fetch(`${SHOPMONKEY_API_BASE}/customer/search-by-email`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email }),
    });
    if (searchRes.ok) {
      const searchData = await searchRes.json();
      customerId = searchData?.data?.[0]?.id || null;
    }
  } catch {
    // Fall through to create
  }

  if (customerId) return { customerId, existing: true };

  const createRes = await fetch(`${SHOPMONKEY_API_BASE}/customer`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      firstName: firstName || 'Website',
      lastName: lastName || 'Lead',
      email,
      phone,
      note: summary,
      custom: {
        leadSource: 'rapidfixauto.ca',
        gclid: attribution?.gclid,
        gbraid: attribution?.gbraid,
        wbraid: attribution?.wbraid,
        utm_source: attribution?.utm_source,
        utm_medium: attribution?.utm_medium,
        utm_campaign: attribution?.utm_campaign,
        utm_term: attribution?.utm_term,
        utm_content: attribution?.utm_content,
        landingPage: attribution?.landingPage,
        requestedService: service !== 'Choose' ? service : undefined,
        preferredDate: date || undefined,
        preferredTime: time || undefined,
        leadMessage: message,
      },
    }),
  });

  if (!createRes.ok) {
    const text = await createRes.text();
    throw new Error(`Shopmonkey create customer failed (${createRes.status}): ${text}`);
  }

  const created = await createRes.json();
  return { customerId: created?.data?.id || null };
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, service, date, time, message, attribution } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Check if env vars are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
      return NextResponse.json(
        { success: false, message: 'Server configuration error: Email credentials not set.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const appointmentInfo = [];
    if (phone) appointmentInfo.push(`Phone: ${phone}`);
    if (service && service !== 'Choose') appointmentInfo.push(`Service: ${service}`);
    if (date) appointmentInfo.push(`Date: ${date}`);
    if (time) appointmentInfo.push(`Time: ${time}`);

    const attributionLines = [];
    if (attribution?.utm_source) attributionLines.push(`Source: ${attribution.utm_source}${attribution.utm_medium ? ` / ${attribution.utm_medium}` : ''}`);
    if (attribution?.utm_campaign) attributionLines.push(`Campaign: ${attribution.utm_campaign}`);
    if (attribution?.utm_term) attributionLines.push(`Keyword: ${attribution.utm_term}`);
    if (attribution?.gclid) attributionLines.push(`Google Ads click: yes`);
    if (attribution?.landingPage) attributionLines.push(`Landing page: ${attribution.landingPage}`);

    const mailOptions = {
      from: `"RapidFix Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        ...appointmentInfo,
        ...(attributionLines.length ? ['', '--- Ad Attribution ---', ...attributionLines] : []),
        '',
        `Message:`,
        message,
      ].join('\n'),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${service && service !== 'Choose' ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        ${date ? `<p><strong>Preferred Date:</strong> ${date}</p>` : ''}
        ${time ? `<p><strong>Preferred Time:</strong> ${time}</p>` : ''}
        ${attributionLines.length ? `<hr/><p><strong>Ad Attribution:</strong><br/>${attributionLines.join('<br/>')}</p>` : ''}
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // Send notification email + push the lead into Shopmonkey in parallel.
    // Email is the source of truth; Shopmonkey failure never blocks the lead.
    const [emailResult, shopmonkeyResult] = await Promise.allSettled([
      transporter.sendMail(mailOptions),
      createShopmonkeyLead({ name, email, phone, service, date, time, message, attribution }),
    ]);

    if (emailResult.status === 'rejected') {
      throw emailResult.reason;
    }
    if (shopmonkeyResult.status === 'rejected') {
      console.error('Shopmonkey lead push failed:', shopmonkeyResult.reason);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully!',
        shopmonkey: shopmonkeyResult.status === 'fulfilled' ? shopmonkeyResult.value : { error: true },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
