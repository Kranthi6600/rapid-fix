import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const API_BASE_URL = process.env.API_BASE_URL || 'https://wehoware-saas.vercel.app';
const API_CLIENT_ID = process.env.API_CLIENT_ID || 'fce75c6e-733c-4f25-a0dd-bf067cdb6bcb';

export async function GET(req, { params }) {
  try {
    const { slug } = params;
    const apiUrl = `${API_BASE_URL}/api/public/blogs/${encodeURIComponent(slug)}?clientId=${API_CLIENT_ID}`;

    const res = await fetch(apiUrl, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: 'Blog not found' },
        { status: res.status }
      );
    }

    const result = await res.json();
    const blogData = result.blog || result.data || result;
    return NextResponse.json({ success: true, data: blogData });
  } catch (error) {
    console.error('Blog detail API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
