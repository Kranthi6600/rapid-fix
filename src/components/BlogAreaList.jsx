"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  const mainRef = useRef(null);
  const needHelpRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) setBlogs(result.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    const needHelp = needHelpRef.current;
    const placeholder = placeholderRef.current;
    if (!main || !needHelp || !placeholder) return;

    let pinned = false;
    let rafId = null;

    const setFixedPos = () => {
      const rect = placeholder.getBoundingClientRect();
      needHelp.style.left = `${rect.left}px`;
      needHelp.style.width = `${rect.width}px`;
    };

    const tick = () => {
      const placeRect = placeholder.getBoundingClientRect();
      const mainRect = main.getBoundingClientRect();
      const offset = 100;
      const needHelpHeight = needHelp.offsetHeight;
      const buffer = 50;

      const shouldRelease = mainRect.bottom <= needHelpHeight + offset + 20;
      const shouldPin = !shouldRelease && placeRect.top <= offset;
      const shouldUnpin = pinned && placeRect.top > offset + buffer;

      if ((shouldUnpin || shouldRelease) && pinned) {
        pinned = false;
        placeholder.style.height = "0px";
        needHelp.style.position = "static";
        needHelp.style.top = "auto";
        needHelp.style.left = "auto";
        needHelp.style.width = "auto";
        needHelp.style.zIndex = "auto";
      } else if (shouldPin && !pinned) {
        pinned = true;
        placeholder.style.height = `${needHelpHeight}px`;
        setFixedPos();
        needHelp.style.position = "fixed";
        needHelp.style.top = `${offset}px`;
        needHelp.style.zIndex = "auto";
      }
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => { rafId = null; tick(); });
    };

    const onResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => { rafId = null; tick(); });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
      if (pinned) {
        placeholder.style.height = "0px";
        needHelp.style.position = "static";
        needHelp.style.top = "auto";
        needHelp.style.left = "auto";
        needHelp.style.width = "auto";
        needHelp.style.zIndex = "auto";
      }
    };
  }, [blogs, loading]);

  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginated = blogs.slice(start, start + POSTS_PER_PAGE);

  return (
    <section className="blog-area space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-40">
          <div className="col-xxl-8 col-lg-7" ref={mainRef}>
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
                      <Link href="/blog"><i className="fas fa-user" /> By RapidFix Team</Link>
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

          <div className="col-xxl-4 col-lg-5 d-flex flex-column">
            <aside className="sidebar-area" style={{ flex: "0 0 auto" }}>
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

            {/* Need Help — JS fixed with permanent placeholder */}
            <div className="flex-grow-1" style={{ position: "relative" }}>
              <div ref={placeholderRef} style={{ width: "100%" }} />
              <div
                className="widget bg-smoke rounded-4 p-30"
                ref={needHelpRef}
                style={{ position: "relative" }}
              >
                <div className="text-center mb-20">
                  <i className="fas fa-headset fa-3x text-theme" />
                </div>
                <h4 className="widget-title mb-15 text-center">Need Help?</h4>
                <p className="text-dark mb-20 text-center">
                  Have questions? Our team is ready to assist you.
                </p>
                <div className="contact-info mb-20">
                  <div className="d-flex align-items-center gap-2 mb-10">
                    <i className="fas fa-phone text-theme" />
                    <Link href="tel:4378364848" className="text-decoration-none fw-semibold need-help-link">(437) 836-4848</Link>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-10">
                    <i className="fas fa-envelope text-theme" />
                    <Link href="mailto:support@rapidfix.com" className="text-decoration-none fw-semibold need-help-link">support@rapidfix.com</Link>
                  </div>
                  <div className="d-flex align-items-start gap-2">
                    <i className="fas fa-clock text-theme mt-1" />
                    <span className="text-dark small fw-semibold">Mon - Sat: 8:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <Link href="/contact" className="btn style2 w-100">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaList;
