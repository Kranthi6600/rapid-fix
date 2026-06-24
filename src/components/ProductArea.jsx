"use client";
import Link from "next/link";
import { useServices } from "@/context/ServicesContext";

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "");
};

const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

const ProductArea = () => {
  const { services, loading } = useServices();
  const items = services.filter((s) => s.slug);
  console.log("ProductArea services count:", services.length, "items:", items.length);

  return (
    <div className="product-area-1 space-top bg-smoke overflow-hidden">
      <div className="container">
        <div className="title-area text-center mb-20" data-aos="fade-up">
          <h3 className="sec-title">Our Services</h3>
          <p className="sec-text">
            From routine oil changes to complex diesel overhauls, we've got you covered.
          </p>
        </div>
        <div className="row gy-30 gx-30">
          {loading ? (
            <div className="col-12 text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : items.length === 0 ? (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No services available at the moment.</p>
            </div>
          ) : (
            items.map((service, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={service.id || service.slug || index}
                data-aos="flip-left"
                data-aos-delay={`${(index % 3) * 100 + 100}`}
                data-aos-duration="800"
              >
                <div className="product-card service-card h-100">
                  <div className="product-content text-center">
                    <h3 className="product-title">
                      <Link href={`/services/${service.slug}`}>
                        {service.wehoware_service_categories?.name || service.title}
                      </Link>
                    </h3>
                    <p className="service-desc">
                      {truncateText(stripHtml(service.description), 120)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductArea;
