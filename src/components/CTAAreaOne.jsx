import Link from "next/link";


const CTAAreaOne = () => {
  return (
    <div
        className="footer-top-1 bg-theme"
        style={{
          backgroundImage: "url(assets/img/bg/footer-top-bg1-1.png)",
          position: "relative"
        }}
      >
      <div className="container">
        <div className="cta-wrap1">
          <div className="row justify-content-md-between align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="title-area mb-md-0" data-aos="fade-right" data-aos-duration="800" style={{ position: "relative" }}>
                <span className="sub-title style2 text-white" style={{ position: "relative", zIndex: "1" }}>Contact us</span>
                <h2 className="sec-title text-white mb-0" style={{ position: "relative", zIndex: "1" }}>
                  Where Engines Roar and Problems Soar
                </h2>
              </div>
            </div>
            <div className="col-md-auto" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <div className="title-area mb-0">
                <Link className="btn" style={{ border: "1px solid #fff" }} href="/contact">
                  View More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAAreaOne;
