"use client";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import FooterArea from "@/components/FooterArea";
import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
import Preloader from "@/helper/Preloader";
import ServiceAreaTwo_multi_img from "@/components/ServiceAreaTwo_multi_img";
import Link from "next/link";
import { useParams } from "next/navigation";

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "");
};

const ServiceDetailPage = () => {
  const params = useParams();
  const slug = params?.slug;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCategory, setIsCategory] = useState(false);

  useEffect(() => {
    if (!slug) return;
    const fetchService = async () => {
      try {
        const res = await fetch(`/api/services/${slug}`);
        const result = await res.json();
        if (result.success && result.data) {
          setData(result.data);
        } else {
          // Not a service — check if it's a category
          const allRes = await fetch("/api/services");
          const allResult = await allRes.json();
          if (allResult.success && allResult.data) {
            const hasCategory = allResult.data.some((s) => {
              const cats = s.wehoware_service_categories;
              const catList = Array.isArray(cats) ? cats : cats ? [cats] : [];
              return catList.some((c) => c.slug === slug);
            });
            if (hasCategory) {
              setIsCategory(true);
            } else {
              setError(result.message || "Service not found");
            }
          } else {
            setError(result.message || "Service not found");
          }
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

  if (isCategory) {
    return (
      <>
        <Preloader />
        <Header />
        <Breadcrumb title={"Service"} img={"/assets/img/services/service-1.jpg"} />
        <ServiceAreaTwo_multi_img category={slug} />
        <Subscribe />
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
      <section className="service-details-area space-top space-extra-bottom overflow-hidden">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-xl-8 col-lg-7">
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
            <div className="col-xl-4 col-lg-5">
              <div className="service-sidebar ps-xl-30">
                {/* Related Blogs */}
                {related_blogs?.length > 0 && (
                  <div
                    className="widget mb-40"
                  >
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

                {/* Quick Contact */}
                <div className="widget bg-smoke rounded-4 p-30">
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
