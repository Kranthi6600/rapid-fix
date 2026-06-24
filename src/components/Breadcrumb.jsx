
import Link from "next/link";

const Breadcrumb = ({ title, img = "/assets/img/normal/breadcrumb-thumb.png", className = "" }) => {
  return (
    <div className={`breadcumb-wrapper ${className}`}>
      <div className="container">
        <div className="row">
          <div className={`col-lg-6 ${className.includes("right-bottom") ? "order-lg-last" : ""}`}>
            <div className="breadcumb-content" data-aos="fade-right" data-aos-duration="800">
              <h1 className="breadcumb-title">{title}</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="active">{title}</li>
              </ul>
            </div>
          </div>
          <div className={`col-lg-6 d-lg-block d-none ${className.includes("right-bottom") ? "order-lg-first" : ""}`} data-aos="fade-left" data-aos-duration="800" data-aos-delay="150">
            <div className="breadcumb-thumb">
              <img
                src={img}
                alt="RapidFix"
                style={{
                  animation: "breadcrumbFloat 3s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
