"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const POSTS_PER_PAGE = 3;

const getDateParts = (iso) => {
  if (!iso) return { day: "", month: "", full: "" };
  const d = new Date(iso);
  return {
    day: d.getDate().toString().padStart(2, "0"),
    month: d.toLocaleString("en-US", { month: "short" }),
    full: d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
};

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "");
};

const BlogAreaList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) setBlogs(result.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginated = blogs.slice(start, start + POSTS_PER_PAGE);

  return (
    <section className="blog-area space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-40">
          <div className="col-xxl-8 col-lg-7">
            {loading && (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {!loading && blogs.length === 0 && (
              <div className="text-center py-5">
                <p>No blog posts available at the moment.</p>
              </div>
            )}

            {paginated.map((blog, index) => {
              const date = getDateParts(blog.published_at || blog.created_at);
              return (
                <div className="blog-single-card" key={blog.id || index}>
                  <div className="blog-thumb">
                    <img
                      src={blog.thumbnail || "/assets/img/blog/blog-1.jpg"}
                      alt={blog.thumbnail_alt || blog.title}
                    />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link href="/blog"><i className="fas fa-user" /> By Rapid Fix Team</Link>
                      {blog.wehoware_blog_categories?.name && (
                        <Link href="/blog"><i className="fas fa-tag" /> {blog.wehoware_blog_categories.name}</Link>
                      )}
                    </div>
                    <h3 className="blog-title">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    <p className="blog-text">{stripHtml(blog.excerpt)}</p>
                    <Link href={`/blog/${blog.slug}`} className="btn style-border2">
                      READ MORE <i className="fas fa-arrow-right" />
                    </Link>
                    <div className="blog-date">
                      <Link href="/blog">
                        <span>{date.day}</span>
                        {date.month}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pagination justify-content-center">
              <ul>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <li key={page} className={currentPage === page ? "active" : ""}>
                    <button
                      onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    >
                      <Link href="#" onClick={(e) => e.preventDefault()} className={currentPage === page ? "active" : ""}>{page}</Link>
                    </button>
                  </li>
                ))}
                {currentPage < totalPages && (
                  <li>
                    <button
                      onClick={() => { setCurrentPage((p) => p + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    >
                      <Link href="#" onClick={(e) => e.preventDefault()}><i className="fas fa-angle-right" /></Link>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="col-xxl-4 col-lg-5" data-aos="fade-left" data-aos-duration="900">
            <aside className="sidebar-area">
              <div className="widget widget_search" data-aos="fade-up" data-aos-delay="100">
                <h3 className="widget_title">Search</h3>
                <form className="search-form">
                  <input type="text" placeholder="Search" />
                  <button type="submit"><i className="fas fa-search" /></button>
                </form>
              </div>

              <div className="widget widget_categories" data-aos="fade-up" data-aos-delay="200">
                <h3 className="widget_title">Category</h3>
                <ul>
                  <li><Link href="/blog">Auto Repair <span>(3)</span></Link></li>
                  <li><Link href="/blog">Diesel Repair <span>(2)</span></Link></li>
                  <li><Link href="/blog">Diagnostics <span>(4)</span></Link></li>
                  <li><Link href="/blog">Fleet Services <span>(2)</span></Link></li>
                  <li><Link href="/blog">Maintenance Tips <span>(5)</span></Link></li>
                </ul>
              </div>

              <div className="widget" data-aos="fade-up" data-aos-delay="300">
                <h3 className="widget_title">Popular Posts</h3>
                <div className="recent-post-wrap">
                  {blogs.slice(0, 3).map((post, i) => {
                    const pDate = getDateParts(post.published_at || post.created_at);
                    return (
                      <div className="recent-post" key={post.id || i}>
                        <div className="media-body">
                          <h4 className="post-title">
                            <Link className="text-inherit" href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h4>
                          <div className="recent-post-meta">
                            <Link href="/blog">{pDate.full}</Link>
                          </div>
                        </div>
                        <div className="media-img">
                          <Link href={`/blog/${post.slug}`}>
                            <img src={post.thumbnail || "/assets/img/blog/blog-1.jpg"} alt={post.title} />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="widget widget_tag_cloud" data-aos="fade-up" data-aos-delay="400">
                <h3 className="widget_title">Tags</h3>
                <div className="tagcloud">
                  <Link href="/blog">Auto Repair</Link>
                  <Link href="/blog">Diesel</Link>
                  <Link href="/blog">Brakes</Link>
                  <Link href="/blog">Oil Change</Link>
                  <Link href="/blog">Fleet</Link>
                  <Link href="/blog">Diagnostics</Link>
                  <Link href="/blog">SSC</Link>
                  <Link href="/blog">Maintenance</Link>
                  <Link href="/blog">Truck Repair</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaList;
