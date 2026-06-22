"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

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
          <div className="col-xxl-8 col-lg-7">
            <div className="blog-details-card">
              {thumbnail && (
                <div className="blog-thumb">
                  <img src={thumbnail} alt={thumbnail_alt || title} />
                  <div className="blog-meta">
                    <span>
                      <i className="far fa-user" /> By Rapid Fix Team
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

          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
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

              {/* Quick Contact */}
              <div className="widget bg-smoke rounded-4 p-30">
                <h4 className="widget-title mb-20">Need Help?</h4>
                <p className="text-muted mb-20">
                  Have questions? Our team is ready to assist you.
                </p>
                <Link href="/contact" className="btn style2 w-100">
                  Contact Us
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailContent;
