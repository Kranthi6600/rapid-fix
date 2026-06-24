"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useServices } from "@/context/ServicesContext";

const bgImages = [
  "/assets/img/services/service-8.jpg",
  "/assets/img/services/service-9.jpg",
  "/assets/img/services/service-10.jpg",
];

const iconList = [
  "assets/img/icon/service-icon_1-1.svg",
  "assets/img/icon/service-icon_1-2.svg",
  "assets/img/icon/service-icon_1-3.svg",
];

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "");
};

const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

const ServiceArea = () => {
  const router = useRouter();
  const { services: allServices, loading } = useServices();
  const services = allServices.slice(0, 3);

  return (
    <div className="service-area-2 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center" data-aos="fade-up">
              <h2 className="sec-title">
                Expert Auto & Diesel Repair – Built for Reliability
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="RapidFix"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {loading ? (
            <div className="col-12 text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            services.map((service, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={service.id || index}
                data-aos="fade-up"
                data-aos-delay={`${(index + 1) * 100}`}
              >
                <div
                  className="service-card style2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (service.slug) {
                      router.push(`/services/${service.slug}`);
                    }
                  }}
                >
                  <div
                    className="service-card_content"
                    style={{
                      backgroundImage: `url(${service.thumbnail || bgImages[index % bgImages.length]})`,
                    }}
                  >
                    <div>
                      <div className="service-card_icon">
                        <img
                          src={iconList[index % iconList.length]}
                          alt={service.title}
                        />
                      </div>
                      <h4 className="service-card_title h5">
                        <Link href={`/services/${service.slug}`}>
                          {service.title}
                        </Link>
                      </h4>
                      <p className="service-card_text">
                        {truncateText(stripHtml(service.description), 120)}
                      </p>
                    </div>
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

export default ServiceArea;
