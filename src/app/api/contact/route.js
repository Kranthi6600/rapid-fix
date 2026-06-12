import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, service, date, time, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
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

    const mailOptions = {
      from: `"Rapid Fix Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        ...appointmentInfo,
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
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
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
