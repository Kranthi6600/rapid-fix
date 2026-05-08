"use client";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const FaqAreaTwo = () => {
  return (
    <section className="faq-area-2 space">
      <div className="container">
        <div className="row gx-60 flex-row-reverse">
          <div className="col-xl-6" data-aos="fade-left" data-aos-duration="900">
            <div className="faq-thumb2 mb-xl-0 mb-50">
              <div className="about-counter-grid jump">
                <img
                  src="assets/img/icon/faq2-counter-icon-1.svg"
                  alt="Rapid Fix"
                />
                <div className="media-right">
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={250} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                  <h4 className="about-counter-text">Happy customers served</h4>
                </div>
              </div>
              <img src="/assets/img/Faq/faq-3.png" alt="Rapid Fix" />
            </div>
          </div>
          <div className="col-xl-6" data-aos="fade-right" data-aos-duration="900">
            <div className="title-area" data-aos="fade-up" data-aos-delay="100">
              <span className="sub-title">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="sec-title">
                Everything You Need To Know <br /> About Auto Repair{" "}
                <img
                  className="title-bg-shape"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Rapid Fix"
                />
              </h2>
            </div>
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card style2 active" data-aos="fade-up" data-aos-delay="150">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    {" "}
                    What types of vehicles do you service?
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      We service all types of vehicles including cars, trucks, and diesel vehicles. Our experienced mechanics handle everything from routine maintenance to complex engine repairs for both personal and commercial vehicles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2" data-aos="fade-up" data-aos-delay="250">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    {" "}
                    How long does a typical repair take?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Repair times vary depending on the service needed. Routine maintenance like oil changes typically take 30-60 minutes, while more complex repairs may take a few hours to a full day. We always provide accurate time estimates and keep you informed throughout the process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2" data-aos="fade-up" data-aos-delay="350">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    {" "}
                    Do you offer warranty on your services?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Yes! We stand behind our work with comprehensive warranties on parts and labor. Most repairs come with a 12-month or 20,000 km warranty, giving you peace of mind and assurance in the quality of our service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaTwo;
