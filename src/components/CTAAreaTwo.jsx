

import Link from "next/link";

const CTAAreaTwo = () => {
  return (
    <div className="cta-area-2">
      <div className="container">
        <div className="cta-wrap2 bg-theme" data-aos="zoom-in" data-aos-duration="900">
          <div className="row justify-content-md-between align-items-center">
            <div className="col-lg-7">
              <div className="title-area">
                <h2 className="sec-title text-white" data-aos="fade-right" data-aos-delay="150">
                  Fleet Services
                </h2>
                <p className="sec-text text-white" data-aos="fade-right" data-aos-delay="250">
                  Keep your business moving. Our fleet service program is designed for companies that depend on their vehicles to operate. We minimize downtime and maximize reliability.
                </p>
                <ul className="text-white mt-3" style={{ listStyle: "disc", paddingLeft: "1.2rem" }} data-aos="fade-right" data-aos-delay="350">
                  <li>Priority scheduling &amp; reduced downtime</li>
                  <li>Customized maintenance plans</li>
                  <li>Dedicated fleet account manager</li>
                  <li>Competitive volume pricing</li>
                  <li>Detailed service reports &amp; tracking</li>
                </ul>
                <Link href="/contact" className="btn style5 mt-4" data-aos="fade-up" data-aos-delay="450">
                  Get a Fleet Quote
                </Link>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{borderRadius: '10px', maxWidth: '100%', height: 'auto'}} src="/assets/img/service/service-6.jpg" alt="Rapid Fix"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAAreaTwo;
