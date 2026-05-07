

import Link from "next/link";

const CTAAreaTwo = () => {
  return (
    <div className="cta-area-2">
      <div className="container">
        <div className="cta-wrap2 bg-theme">
          <div className="row justify-content-md-between align-items-center">
            <div className="col-lg-7">
              <div className="title-area">
                <h2 className="sec-title text-white">
                  Fleet Services
                </h2>
                <p className="sec-text text-white">
                  Keep your business moving. Our fleet service program is designed for companies that depend on their vehicles to operate. We minimize downtime and maximize reliability.
                </p>
                <ul className="text-white mt-3" style={{ listStyle: "disc", paddingLeft: "1.2rem" }}>
                  <li>Priority scheduling &amp; reduced downtime</li>
                  <li>Customized maintenance plans</li>
                  <li>Dedicated fleet account manager</li>
                  <li>Competitive volume pricing</li>
                  <li>Detailed service reports &amp; tracking</li>
                </ul>
                <Link href="/contact" className="btn style5 mt-4">
                  Get a Fleet Quote
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cta2-bg-thumb">
                <img src="assets/img/normal/cta-thumb-2-1.png" alt="Rapid Fix"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAAreaTwo;
