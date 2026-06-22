import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const API_BASE_URL = process.env.API_BASE_URL || 'https://wehoware-saas.vercel.app';
const API_CLIENT_ID = process.env.API_CLIENT_ID || 'fce75c6e-733c-4f25-a0dd-bf067cdb6bcb';

export async function GET(req) {
  try {
    const apiUrl = `${API_BASE_URL}/api/public/services?clientId=${API_CLIENT_ID}&page=1&limit=100`;

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
    const services = data.data || [];

    const categoriesMap = new Map();
    services.forEach((service) => {
      const cats = service.wehoware_service_categories;
      const catList = Array.isArray(cats) ? cats : cats ? [cats] : [];
      catList.forEach((cat) => {
        if (cat?.id && !categoriesMap.has(cat.id)) {
          categoriesMap.set(cat.id, {
            id: cat.id,
            name: cat.name,
            slug: cat.slug,
            serviceSlug: service.slug,
          });
        }
      });
    });

    return NextResponse.json({
      success: true,
      data: Array.from(categoriesMap.values()),
    });
  } catch (error) {
    console.error('Categories API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
