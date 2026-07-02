import ServiceDetailClient from "@/components/ServiceDetailClient";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { fetchServiceBySlug } from "@/lib/servicesApi";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const result = await fetchServiceBySlug(slug);
  const service = result?.service || result?.data || result;
  const canonical =
    service?.canonical_url || `${SITE_URL}/services/${slug}`;

  const fallbackTitle = slug
    ? slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "Service";

  return {
    title: service?.meta_title || service?.title || fallbackTitle,
    description: service?.meta_description || service?.description || undefined,
    keywords: service?.meta_keywords || undefined,
    robots: service?.robots_meta || undefined,
    alternates: {
      canonical,
    },
    openGraph: {
      url: canonical,
      title:
        service?.open_graph_title ||
        service?.meta_title ||
        service?.title ||
        fallbackTitle,
      description:
        service?.open_graph_description ||
        service?.meta_description ||
        service?.description ||
        undefined,
      images: service?.open_graph_image
        ? [service.open_graph_image]
        : service?.thumbnail
        ? [service.thumbnail]
        : undefined,
    },
    twitter: {
      title:
        service?.twitter_title || service?.meta_title || service?.title || undefined,
      description:
        service?.twitter_description ||
        service?.meta_description ||
        undefined,
      images: service?.twitter_image
        ? [service.twitter_image]
        : undefined,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = params;
  const result = await fetchServiceBySlug(slug);
  const service = result?.service || result?.data || result;

  return (
    <>
      {/* Schema.org JSON-LD */}
      <JsonLd
        data={[
          result?.service_schema,
          result?.breadcrumb_schema,
          service?.faq_schema,
        ]}
      />
      <ServiceDetailClient />
    </>
  );
}
