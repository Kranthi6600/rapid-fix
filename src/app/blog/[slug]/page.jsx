import { blogs } from "@/data/blogs";
import BlogDetailContent from "@/components/BlogDetailContent";
import Breadcrumb from "@/components/Breadcrumb";
import FooterArea from "@/components/FooterArea";
import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
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
        <Header />
        <Breadcrumb title="Blog Not Found" img="/assets/img/blog/blog-1.jpg" />
        <div className="container space-top space-extra-bottom text-center">
          <h2>Post not found</h2>
        </div>
        <FooterArea />
      </>
    );
  }

  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumb title={blog.title} img="/assets/img/blog/blog-1.jpg" />
      <BlogDetailContent blog={blog} />
      <Subscribe />
      <FooterArea />
    </>
  );
};

export default BlogSlugPage;
