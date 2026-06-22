"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const iconList = [
  "/assets/img/icon/service-icon_1-1.svg",
  "/assets/img/icon/service-icon_1-2.svg",
  "/assets/img/icon/service-icon_1-3.svg",
  "/assets/img/icon/service-icon_1-4.svg",
  "/assets/img/icon/service-icon_1-5.svg",
  "/assets/img/icon/service-icon_1-6.svg",
];

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "");
};

const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

const ServiceAreaTwo_multi_img = ({ category = "" }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/services");
        const result = await res.json();
        if (result.success) {
          setServices(result.data);
        } else {
          setError(result.message || "Failed to load services");
        }
      } catch (err) {
        setError("Failed to load services");
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const filteredServices = category
    ? services.filter((s) => {
        const cats = s.wehoware_service_categories;
        const catList = Array.isArray(cats) ? cats : cats ? [cats] : [];
        return catList.some((c) => c.slug === category);
      })
    : services;

  if (loading) {
    return (
      <div className="service-area-1 space overflow-hidden">
        <div className="container text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="service-area-1 space overflow-hidden">
        <div className="container text-center py-5">
          <p className="text-danger">{error}</p>
        </div>
      </div>
    );
  }

  if (filteredServices.length === 0) {
    return (
      <div className="service-area-1 space overflow-hidden">
        <div className="container text-center py-5">
          <p>{category ? "No services found for this category." : "No services available at the moment."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="service-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {filteredServices.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={service.id || index}
              data-aos="fade-up"
              data-aos-delay={`${(index % 3) * 100 + 100}`}
              data-aos-duration="800"
            >
              <div className="service-card style-shadow h-100">
                <div className="service-card_content">
                  <div className="service-card_icon">
                    <img
                      src={iconList[index % iconList.length]}
                      alt={service.title}
                    />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                  </h4>
                  <p className="service-card_text">
                    {truncateText(stripHtml(service.description), 200)}
                  </p>
                </div>
                <div className="service-card_img">
                  <img
                    src={
                      service.thumbnail || "/assets/img/services/service-1.jpg"
                    }
                    alt={service.thumbnail_alt || service.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaTwo_multi_img;
