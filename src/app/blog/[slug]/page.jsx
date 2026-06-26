import BlogDetailClient from "@/components/BlogDetailClient";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const canonical = `${SITE_URL}/blog/${slug}`;

  return {
    title: slug
      ? slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")
      : "Blog Post",
    alternates: {
      canonical,
    },
    openGraph: {
      url: canonical,
    },
  };
}

export default function BlogSlugPage() {
  return <BlogDetailClient />;
}
