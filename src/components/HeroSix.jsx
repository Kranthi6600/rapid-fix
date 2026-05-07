
import Link from "next/link";

const HeroSix = () => {
  return (
    <div className="hero-wrapper" id="hero">
      <div className="container">
        <div className="hero-6" style={{ backgroundColor: "#EAE1D6" }}>
          <div className="row flex-row-reverse align-items-center">
            <div className="col-md-6">
              <div className="hero-thumb text-center">
                <img src="assets/img/update-img/hero6-1.png" alt="Rapid Fix" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-style6">
                <span className="sub-title">Trusted Auto &amp; Diesel Repair</span>
                <h1 className="hero-title">
                  Expert auto and diesel repair you can trust
                </h1>
                <p className="hero-text">
                  Fast turnaround, honest pricing, and quality workmanship — every time.
                </p>
                <div className="btn-group">
                  <Link href="/contact" className="btn style2 style-radius">
                    Request Service
                  </Link>
                  <Link href="/service" className="btn style-border2 style-radius">
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSix;
