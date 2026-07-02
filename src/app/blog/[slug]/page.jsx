import BlogDetailClient from "@/components/BlogDetailClient";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { fetchBlogBySlug } from "@/lib/blogsApi";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const result = await fetchBlogBySlug(slug);
  const blog = result?.blog || result?.data || result;
  const canonical = blog?.canonical_url || `${SITE_URL}/blog/${slug}`;

  const fallbackTitle = slug
    ? slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "Blog Post";

  return {
    title: blog?.meta_title || blog?.title || fallbackTitle,
    description: blog?.meta_description || blog?.excerpt || undefined,
    keywords: blog?.meta_keywords || undefined,
    robots: blog?.robots_meta || undefined,
    alternates: {
      canonical,
    },
    openGraph: {
      url: canonical,
      title:
        blog?.open_graph_title ||
        blog?.meta_title ||
        blog?.title ||
        fallbackTitle,
      description:
        blog?.open_graph_description ||
        blog?.meta_description ||
        blog?.excerpt ||
        undefined,
      images: blog?.open_graph_image
        ? [blog.open_graph_image]
        : blog?.thumbnail
        ? [blog.thumbnail]
        : undefined,
    },
    twitter: {
      title:
        blog?.twitter_title || blog?.meta_title || blog?.title || undefined,
      description:
        blog?.twitter_description || blog?.meta_description || undefined,
      images: blog?.twitter_image ? [blog.twitter_image] : undefined,
    },
  };
}

export default async function BlogSlugPage({ params }) {
  const { slug } = params;
  const result = await fetchBlogBySlug(slug);
  const blog = result?.blog || result?.data || result;

  return (
    <>
      {/* Schema.org JSON-LD */}
      <JsonLd
        data={[
          result?.blog_schema,
          result?.breadcrumb_schema,
          blog?.faq_schema,
        ]}
      />
      <BlogDetailClient />
    </>
  );
}
