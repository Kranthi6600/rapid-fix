"use client";
import { useEffect, useRef, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import FooterArea from "@/components/FooterArea";
import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
import Preloader from "@/helper/Preloader";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useServices } from "@/context/ServicesContext";

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "");
};

const ServiceDetailPage = () => {
  const params = useParams();
  const slug = params?.slug;
  const { services } = useServices();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
  }, [data]);

  useEffect(() => {
    if (!slug) return;
    const fetchService = async () => {
      try {
        const res = await fetch(`/api/services/${slug}`);
        const result = await res.json();
        if (result.success && result.data) {
          setData(result.data);
        } else {
          setError(result.message || "Service not found");
        }
      } catch (err) {
        setError("Failed to load service details");
      } finally {
        setLoading(false);
      }
    };
    fetchService();
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

  if (error || !data) {
    return (
      <>
        <Preloader />
        <Header />
        <div className="space-top space-extra-bottom text-center">
          <h2 className="mb-20">Service Not Found</h2>
          <p className="text-muted mb-30">{error || "The service you are looking for does not exist."}</p>
          <Link href="/services" className="btn style2">Browse All Services</Link>
        </div>
        <FooterArea />
      </>
    );
  }

  const {
    title,
    content,
    thumbnail,
    thumbnail_alt,
    faqs,
    related_blogs,
    cta_heading,
    cta_body,
    cta_button_text,
    cta_button_url,
  } = data;

  return (
    <>
      <Preloader />
      <Header />
      <Breadcrumb
        title={title}
        img={thumbnail || "/assets/img/services/service-1.jpg"}
      />

      {/* Service Detail */}
      <section className="service-details-area space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-xl-8 col-lg-7" ref={mainRef}>
              {/* Thumbnail */}
              {thumbnail && (
                <div className="service-thumb mb-40">
                  <img
                    src={thumbnail}
                    alt={thumbnail_alt || title}
                    className="w-100 rounded-4"
                    style={{ objectFit: "cover", maxHeight: "500px" }}
                  />
                </div>
              )}

              {/* Title */}
              <div>
                <h2 className="service-title mb-20">{title}</h2>
              </div>

              {/* Full Content */}
              {content && (
                <div
                  className="service-content mb-50"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}

              {/* FAQs */}
              {faqs?.length > 0 && (
                <div className="faq-area mb-50">
                  <h3 className="faq-title mb-30">Frequently Asked Questions</h3>
                  <div className="accordion" id="serviceFaq">
                    {faqs.map((faq, idx) => (
                      <div className="accordion-item border-0 mb-3" key={faq.id || idx}>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${idx === 0 ? "" : "collapsed"} bg-smoke fw-semibold rounded-3`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq-${faq.id || idx}`}
                            aria-expanded={idx === 0 ? "true" : "false"}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`faq-${faq.id || idx}`}
                          className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                          data-bs-parent="#serviceFaq"
                        >
                          <div className="accordion-body text-muted">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              {(cta_heading || cta_body || cta_button_text) && (
                <div
                  className="cta-box bg-primary rounded-4 p-5 text-center mb-50"
                >
                  {cta_heading && (
                    <h3 className="text-white mb-15">{cta_heading}</h3>
                  )}
                  {cta_body && (
                    <p className="text-white opacity-75 mb-25">{cta_body}</p>
                  )}
                  {cta_button_text && (
                    <Link
                      href={cta_button_url || "/contact"}
                      className="btn style2"
                    >
                      {cta_button_text}
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-xl-4 col-lg-5 d-flex flex-column">
              <div className="service-sidebar ps-xl-30" style={{ flex: "0 0 auto" }}>
                {/* Services List */}
                <div className="widget mb-40">
                  <h4 className="widget-title mb-25">Our Services</h4>
                  {services.length === 0 ? (
                    <p className="text-muted small">Loading services...</p>
                  ) : (
                    <ul className="list-unstyled mb-0">
                      {services.map((s) => {
                        const isActive = s.slug === slug;
                        return (
                          <li key={s.id || s.slug} className="mb-2">
                            <Link
                              href={`/services/${s.slug}/`}
                              className="d-flex align-items-center gap-2 p-2 rounded-3 text-decoration-none"
                              style={{
                                backgroundColor: isActive
                                  ? "var(--theme-color, #E8092E)"
                                  : "#f5f5f5",
                                color: isActive ? "#fff" : "#171717",
                                transition: "all 0.2s ease",
                                fontSize: "15px",
                                fontWeight: isActive ? 600 : 400,
                              }}
                              onMouseEnter={(e) => {
                                if (!isActive) {
                                  e.currentTarget.style.backgroundColor =
                                    "var(--theme-color, #E8092E)";
                                  e.currentTarget.style.color = "#fff";
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isActive) {
                                  e.currentTarget.style.backgroundColor =
                                    "#f5f5f5";
                                  e.currentTarget.style.color = "#171717";
                                }
                              }}
                            >
                              <span className="flex-grow-1">{s.title}</span>
                              {isActive && (
                                <i className="fas fa-chevron-right small" />
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>

                {/* Related Blogs */}
                {related_blogs?.length > 0 && (
                  <div className="widget mb-40">
                    <h4 className="widget-title mb-25">Related Articles</h4>
                    <div className="related-posts">
                      {related_blogs.map((blog) => (
                        <div
                          className="related-post d-flex gap-3 mb-20"
                          key={blog.id}
                        >
                          {blog.thumbnail && (
                            <div className="related-thumb flex-shrink-0">
                              <img
                                src={blog.thumbnail}
                                alt={blog.title}
                                className="rounded-3"
                                style={{
                                  width: "80px",
                                  height: "80px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          )}
                          <div className="related-content">
                            <h6 className="related-title h6 mb-5">
                              <Link href={`/blog/${blog.slug}`}>
                                {blog.title}
                              </Link>
                            </h6>
                            {blog.excerpt && (
                              <p className="text-muted small mb-0">
                                {stripHtml(blog.excerpt).substring(0, 80)}...
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Need Help — JS fixed with permanent placeholder */}
              <div className="ps-xl-30 flex-grow-1" style={{ position: "relative" }}>
                <div ref={placeholderRef} style={{ width: "100%" }} />
                <div
                  className="widget bg-smoke rounded-4 p-30"
                  ref={needHelpRef}
                  style={{ position: "relative" }}
                >
                  <h4 className="widget-title mb-20">Need Help?</h4>
                  <p className="text-muted mb-20">
                    Have questions about this service? Our team is ready to assist.
                  </p>
                  <Link href="/contact" className="btn style2 w-100">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
      <FooterArea />
    </>
  );
};

export default ServiceDetailPage;
