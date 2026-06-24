"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const sanitizeHtml = (html) => {
  if (!html) return "";
  let cleaned = html;
  // Loop until no more empty tags are found
  let prev;
  do {
    prev = cleaned;
    // Remove tags that are empty or contain only whitespace / &nbsp; / &#160; / <br> / <br/>
    cleaned = cleaned.replace(
      /<([a-z][a-z0-9]*)[^>]*>([\s\u00A0]|&nbsp;|&#160;|<br\s*\/?>)*<\/\1>/gi,
      ""
    );
  } while (cleaned !== prev);
  return cleaned;
};

const stripFirstParagraph = (html) => {
  if (!html) return "";
  const lower = html.toLowerCase();
  const startIdx = lower.indexOf("<p");
  if (startIdx === -1) return html;
  const endIdx = lower.indexOf("</p>", startIdx);
  if (endIdx === -1) return html;
  // Remove everything from the first <p to the matching </p>
  const result = html.slice(0, startIdx) + html.slice(endIdx + 4);
  return result;
};

const stripHtml = (html) => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#160;/gi, " ")
    .trim();
};

const BlogDetailContent = ({ blog }) => {
  const [recentPosts, setRecentPosts] = useState([]);
  const mainRef = useRef(null);
  const needHelpRef = useRef(null);
  const placeholderRef = useRef(null);

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
    };
  }, [blog]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) setRecentPosts(result.data.slice(0, 4));
      })
      .catch(() => {});
  }, []);

  const {
    title,
    thumbnail,
    thumbnail_alt,
    tags,
    content,
    excerpt,
    read_time,
    published_at,
    created_at,
    wehoware_blog_categories,
    faqs,
    related_services,
    cta_heading,
    cta_body,
    cta_button_text,
    cta_button_url,
  } = blog;

  const category = wehoware_blog_categories?.name;
  const dateStr = formatDate(published_at || created_at);

  return (
    <section className="blog-area space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-40">
          <div className="col-xxl-8 col-lg-7" ref={mainRef}>
            <div className="blog-details-card">
              {thumbnail && (
                <div className="blog-thumb">
                  <img src={thumbnail} alt={thumbnail_alt || title} />
                  <div className="blog-meta">
                    <span>
                      <i className="far fa-user" /> By RapidFix Team
                    </span>
                    {category && (
                      <span>
                        <i className="far fa-folder" /> {category}
                      </span>
                    )}
                    {read_time && (
                      <span>
                        <i className="far fa-clock" /> {read_time} min read
                      </span>
                    )}
                  </div>
                </div>
              )}
              <div className="blog-content">
                <h2 className="blog-title h3">{title}</h2>
                {dateStr && (
                  <p className="text-muted mb-25">
                    <i className="far fa-calendar" /> {dateStr}
                  </p>
                )}
                {excerpt && (
                  <p className="lead mb-30">{stripHtml(excerpt)}</p>
                )}
                {content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(stripFirstParagraph(content)),
                    }}
                  />
                )}
              </div>

              {tags?.length > 0 && (
                <div className="share-links clearfix">
                  <span className="share-links-title">Tags:</span>
                  <div className="tagcloud">
                    {tags.map((tag, i) => (
                      <Link key={i} href="/blog">{tag}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* FAQs */}
            {faqs?.length > 0 && (
              <div className="faq-area mb-50">
                <h3 className="blog-inner-title mb-30">Frequently Asked Questions</h3>
                <div className="accordion" id="blogFaq">
                  {faqs.map((faq, idx) => (
                    <div className="accordion-item border-0 mb-3" key={faq.id || idx}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${idx === 0 ? "" : "collapsed"} bg-smoke fw-semibold rounded-3`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#blog-faq-${faq.id || idx}`}
                          aria-expanded={idx === 0 ? "true" : "false"}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        id={`blog-faq-${faq.id || idx}`}
                        className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                        data-bs-parent="#blogFaq"
                      >
                        <div className="accordion-body text-muted">{faq.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            {(cta_heading || cta_body || cta_button_text) && (
              <div className="cta-box bg-primary rounded-4 p-5 text-center mb-50">
                {cta_heading && <h3 className="text-white mb-15">{cta_heading}</h3>}
                {cta_body && <p className="text-white opacity-75 mb-25">{cta_body}</p>}
                {cta_button_text && (
                  <Link href={cta_button_url || "/contact"} className="btn style2">
                    {cta_button_text}
                  </Link>
                )}
              </div>
            )}

          </div>

          <div className="col-xxl-4 col-lg-5 d-flex flex-column">
            <aside className="sidebar-area" style={{ flex: "0 0 auto" }}>
              {/* Search */}
              <div className="widget widget_search">
                <h3 className="widget_title">Search</h3>
                <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Search articles..." />
                  <button type="submit"><i className="fas fa-search" /></button>
                </form>
              </div>

              {/* Recent Posts */}
              {recentPosts.length > 0 && (
                <div className="widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    {recentPosts.map((post) => {
                      const pDate = formatDate(post.published_at || post.created_at);
                      return (
                        <div className="recent-post" key={post.id}>
                          <div className="media-img">
                            <Link href={`/blog/${post.slug}`}>
                              <img
                                src={post.thumbnail || "/assets/img/blog/blog-1.jpg"}
                                alt={post.title}
                              />
                            </Link>
                          </div>
                          <div className="media-body">
                            <h4 className="post-title">
                              <Link className="text-inherit" href={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h4>
                            <div className="recent-post-meta">
                              <Link href={`/blog/${post.slug}`}>{pDate}</Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Related Services */}
              {related_services?.length > 0 && (
                <div className="widget">
                  <h3 className="widget_title">Related Services</h3>
                  <div className="recent-post-wrap">
                    {related_services.map((svc) => (
                      <div className="recent-post" key={svc.id}>
                        <div className="media-img">
                          <Link href={`/services/${svc.slug}`}>
                            <img
                              src={svc.thumbnail || "/assets/img/services/service-1.jpg"}
                              alt={svc.title}
                            />
                          </Link>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <Link className="text-inherit" href={`/services/${svc.slug}`}>
                              {svc.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tags?.length > 0 && (
                <div className="widget widget_tag_cloud">
                  <h3 className="widget_title">Tags</h3>
                  <div className="tagcloud">
                    {tags.map((tag, i) => (
                      <Link key={i} href="/blog">{tag}</Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Services CTA */}
              <div className="widget bg-smoke rounded-4 p-30 text-center">
                <div className="service-cta-icon mb-15">
                  <i className="fas fa-wrench fa-3x text-primary" />
                </div>
                <h4 className="widget-title mb-15">Need Auto Repair?</h4>
                <p className="text-muted mb-20">
                  Get expert diagnostics and repairs from certified technicians.
                </p>
                <Link href="/services" className="btn style2 w-100 mb-10">
                  View Services
                </Link>
                <Link href="/contact" className="btn style-border2 w-100">
                  Book Appointment
                </Link>
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

export default BlogDetailContent;
