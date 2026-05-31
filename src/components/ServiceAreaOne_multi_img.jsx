import Link from "next/link";

const services = [
  {
    icon: "/assets/img/icon/service-icon_1-1.svg",
    img: "/assets/img/service/service-3.jpg",
    title: "Auto Repair",
    text: "Complete auto repair for all makes and models — brakes, suspension, steering, and more.",
  },
  {
    icon: "/assets/img/icon/service-icon_1-2.svg",
    img: "/assets/img/service/service-2.jpg",
    title: "Diesel Repair",
    text: "Specialized diesel engine diagnostics, repair, and maintenance for trucks and equipment.",
  },
  {
    icon: "/assets/img/icon/service-icon_1-3.svg",
    img: "/assets/img/service/service-4.jpg",
    title: "Diagnostics",
    text: "State-of-the-art computer diagnostics to pinpoint issues fast and accurately.",
  },
  {
    icon: "/assets/img/icon/service-icon_1-4.svg",
    img: "/assets/img/service/service-5.jpg",
    title: "Maintenance",
    text: "Preventative maintenance services including oil changes, tune-ups, and fluid flushes.",
  },
  {
    icon: "/assets/img/icon/service-icon_1-5.svg",
    img: "/assets/img/service/service-6.jpg",
    title: "Fleet Services",
    text: "Keep your fleet running with scheduled maintenance plans and priority service.",
  },
  {
    icon: "/assets/img/icon/service-icon_1-6.svg",
    img: "/assets/img/service/service-7.jpg",
    title: "Safety Standards Certificate (SSC)",
    text: "Comprehensive vehicle inspections to keep you safe and road-ready.",
  },
];

const ServiceAreaOne_multi_img = () => {
  return (
    <div className="service-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${(index % 3) * 100 + 100}`}
              data-aos-duration="800"
            >
              <div className="service-card style-shadow">
                <div className="service-card_content">
                  <div className="service-card_icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link href="/service">{service.title}</Link>
                  </h4>
                  <p className="service-card_text">{service.text}</p>
                </div>
                <div className="service-card_img">
                  <img src={service.img} alt={service.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaOne_multi_img;
