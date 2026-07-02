import { cache } from "react";

const API_BASE_URL =
  process.env.API_BASE_URL || "https://wehoware-saas.vercel.app";
const API_CLIENT_ID =
  process.env.API_CLIENT_ID || "fce75c6e-733c-4f25-a0dd-bf067cdb6bcb";

export const fetchServicesList = cache(async () => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/public/services?clientId=${API_CLIENT_ID}&limit=100`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("fetchServicesList error:", error);
    return null;
  }
});

export const fetchServiceBySlug = cache(async (slug) => {
  if (!slug) return null;
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/public/services/${encodeURIComponent(
        slug
      )}?clientId=${API_CLIENT_ID}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("fetchServiceBySlug error:", error);
    return null;
  }
});
