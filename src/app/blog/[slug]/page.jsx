"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import BlogDetailContent from "@/components/BlogDetailContent";
import Breadcrumb from "@/components/Breadcrumb";
import FooterArea from "@/components/FooterArea";
import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
import Preloader from "@/helper/Preloader";

const BlogSlugPage = () => {
  const params = useParams();
  const slug = params?.slug;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        const result = await res.json();
        if (result.success && result.data) {
          setBlog(result.data);
        } else {
          setError(result.message || "Blog not found");
        }
      } catch (err) {
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Preloader />
        <Header />
        <div className="space-top space-extra-bottom text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <FooterArea />
      </>
    );
  }

  if (error || !blog) {
    return (
      <>
        <Preloader />
        <Header />
        <Breadcrumb title="Blog Not Found" img="/assets/img/blog/blog-1.jpg" />
        <div className="container space-top space-extra-bottom text-center">
          <h2 className="mb-20">Post Not Found</h2>
          <p className="text-muted mb-30">{error || "The blog post you are looking for does not exist."}</p>
          <Link href="/blog" className="btn style2">Back to Blog</Link>
        </div>
        <FooterArea />
      </>
    );
  }

  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumb title={blog.title} img={blog.thumbnail || "/assets/img/blog/blog-1.jpg"} />
      <BlogDetailContent blog={blog} />
      <Subscribe />
      <FooterArea />
    </>
  );
};

export default BlogSlugPage;
