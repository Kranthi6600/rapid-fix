import { blogs } from "@/data/blogs";
import BlogDetailContent from "@/components/BlogDetailContent";
import Breadcrumb from "@/components/Breadcrumb";
import FooterAreaFour from "@/components/FooterAreaFour";
import HeaderFive from "@/components/HeaderFive";
import SubscribeOne from "@/components/SubscribeOne";
import Preloader from "@/helper/Preloader";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | Rapid Fix Blog`,
    description: blog.excerpt,
  };
}

const BlogSlugPage = ({ params }) => {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <>
        <Preloader />
        <HeaderFive />
        <Breadcrumb title="Blog Not Found" img="/assets/img/blog/blog-1.jpg" />
        <div className="container space-top space-extra-bottom text-center">
          <h2>Post not found</h2>
        </div>
        <FooterAreaFour />
      </>
    );
  }

  return (
    <>
      <Preloader />
      <HeaderFive />
      <Breadcrumb title={blog.title} img="/assets/img/blog/blog-1.jpg" />
      <BlogDetailContent blog={blog} />
      <SubscribeOne />
      <FooterAreaFour />
    </>
  );
};

export default BlogSlugPage;
