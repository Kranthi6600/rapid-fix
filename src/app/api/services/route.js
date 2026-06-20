import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const API_BASE_URL = process.env.API_BASE_URL || 'https://wehoware-saas.vercel.app';
const API_CLIENT_ID = process.env.API_CLIENT_ID || 'fce75c6e-733c-4f25-a0dd-bf067cdb6bcb';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '100';

    const apiUrl = `${API_BASE_URL}/api/public/services?clientId=${API_CLIENT_ID}&page=${page}&limit=${limit}`;

    const res = await fetch(apiUrl, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: 'Failed to fetch services' },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json({
      success: true,
      data: data.data || [],
      pagination: data.pagination,
    });
  } catch (error) {
    console.error('Services API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
