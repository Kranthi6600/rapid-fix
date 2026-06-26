import ServiceDetailClient from "@/components/ServiceDetailClient";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const canonical = `${SITE_URL}/services/${slug}`;

  return {
    title: slug
      ? slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")
      : "Service",
    alternates: {
      canonical,
    },
    openGraph: {
      url: canonical,
    },
  };
}

export default function ServiceDetailPage() {
  return <ServiceDetailClient />;
}
