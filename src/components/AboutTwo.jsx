"use client";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutTwo = () => {
  return (
    <div className="space-top">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6" data-aos="fade-right" data-aos-duration="900">
            <div className="about-thumb2 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="/assets/img/about/about-15.jpeg" alt="Rapid Fix" />
              </div>
              <div className="about-img-2">
                <img src="/assets/img/about/about-16.jpg" alt="Rapid Fix" />
              </div>
              <div className="about-counter-wrap jump-reverse">
                <img src="assets/img/icon/about_icon2-1.svg" alt="Rapid Fix" />
                <h3 className="about-counter">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={5} />
                          k+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <h4 className="about-counter-text">Trusted Customer</h4>
              </div>
              <div className="about-year-wrap2 movingX">
                <div className="about-year-grid-wrap">
                  <div className="icon">
                    <img
                      src="assets/img/icon/about_icon2-2.png"
                      alt="Rapid Fix"
                    />
                  </div>
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={15} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                </div>
                <h4 className="about-year-text">Years Of Experiences</h4>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="about-content-wrap">
              <div className="title-area mb-30">
                <span className="sub-title" data-aos="fade-up" data-aos-delay="200">Know About Us</span>
                <h2 className="sec-title" data-aos="fade-up" data-aos-delay="250">
                  More Than Mechanics — Your Trusted Vehicle Partners{" "}
                  <img
                    className="title-bg-shape shape-center"
                    src="assets/img/bg/title-bg-shape.png"
                    alt="Rapid Fix"
                  />
                </h2>
                <p className="sec-text" data-aos="fade-up" data-aos-delay="300">
                  At Rapid Fix, we're more than just mechanics — we're your
                  partners in keeping your vehicles running at peak performance.
                  Our team of certified technicians brings years of expertise in
                  both auto and diesel repair.
                </p>
              </div>
              <div className="about-feature-wrap style-shadow" data-aos="fade-up" data-aos-delay="350">
                <div className="icon">
                  <img src="assets/img/icon/about_icon2-3.svg" alt="Rapid Fix" />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">
                    Certified Expert Technicians
                  </h5>
                  <p className="about-feature-text">
                    Our certified team handles everything from routine
                    maintenance to complex diesel overhauls with precision.
                  </p>
                </div>
              </div>
              <div className="about-feature-wrap style-shadow" data-aos="fade-up" data-aos-delay="450">
                <div className="icon">
                  <img src="assets/img/icon/about_icon2-4.svg" alt="Rapid Fix" />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">Advanced Diagnostics & Fleet Service</h5>
                  <p className="about-feature-text">
                    State-of-the-art technology and scheduled maintenance plans
                    keep personal vehicles and commercial fleets road-ready.
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

export default AboutTwo;
