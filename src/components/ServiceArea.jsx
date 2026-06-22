
import Link from "next/link";

const ServiceArea = () => {
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
                  alt="Rapid Fix"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(/assets/img/services/service-8.jpg)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img
                      src="assets/img/icon/service-icon_1-1.svg"
                      alt="Rapid Fix"
                    />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link href="#">Mechanic Masters</Link>
                  </h4>
                  <p className="service-card_text">
                    Fleet services, priority scheduling, honest pricing. Minimise
                    downtime.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(/assets/img/services/service-9.jpg)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img
                      src="assets/img/icon/service-icon_1-2.svg"
                      alt="Rapid Fix"
                    />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link href="#">Speedy Auto Repair</Link>
                  </h4>
                  <p className="service-card_text">
                    Fast turnaround on auto & diesel repairs. Get back on the
                    road quicker.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(/assets/img/services/service-10.jpg)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img
                      src="assets/img/icon/service-icon_1-3.svg"
                      alt="Rapid Fix"
                    />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link href="#">Precision Auto Works</Link>
                  </h4>
                  <p className="service-card_text">
                    Diagnostics, preventative maintenance, and Safety
                    Certificates. Keep your fleet safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
