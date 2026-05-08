
"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSix = () => {
  return (
    <div className="hero-wrapper" id="hero">
      <div className="container">
        <div className="hero-6" style={{ backgroundColor: "#EAE1D6" }}>
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2" data-aos="fade-left" data-aos-duration="1000">
              <div className="hero-thumb text-center">
                <img
                  style={{ borderRadius: "10px", width: "100%", height: "auto" }}
                  src="/assets/img/hero/home-2.webp"
                  alt="Rapid Fix"
                />
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <div className="hero-style6">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="700">
                  Trusted Auto &amp; Diesel Repair
                </span>
                <h1
                  className="hero-title hero-title-animated"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="800"
                >
                  <TypeAnimation
                    sequence={[
                      "Expert auto & diesel repair",
                      2000,
                      "Fast turnaround, honest pricing guaranteed",
                      2000,
                      "Quality workmanship you can trust",
                      2000,
                      "Fleet services & maintenance programs",
                      2000,
                      "Safety inspections & diagnostics",
                      2000,
                      "Your trusted Scarborough mechanic",
                      2000,
                    ]}
                    speed={50}
                    deletionSpeed={65}
                    repeat={Infinity}
                    style={{ display: "block" }}
                  />
                </h1>
                <p
                  className="hero-text"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                >
                  Fast turnaround, honest pricing, and quality workmanship — every time.
                </p>
                <div
                  className="btn-group"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="800"
                >
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
