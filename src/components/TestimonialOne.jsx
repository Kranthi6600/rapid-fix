"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
const TestimonialOne = () => {
  return (
    <div
      className="testimonial-area-1 overflow-hidden"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center" data-aos="fade-right" data-aos-duration="900">
            <div className="testimonial-thumb1 text-center">
              <img src="/assets/img/about/about-17.jpg" alt="Rapid Fix" style={{ maxWidth: "100%", margin: "0 auto" }} />
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="space">
              <div className="title-area" data-aos="fade-up" data-aos-delay="200">
                <span className="sub-title">Clients testimonial</span>
                <h2>
                  Car Repair The Best <br /> Services
                </h2>
              </div>
              <div className="row global-carousel testi-slider-1">
                <Swiper
                  loop={true}
                  navigation={{
                    nextEl: ".testimonialOne-button-next",
                    prevEl: ".testimonialOne-button-prev",
                  }}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  speed={1000}
                  autoplay={{ delay: 6000 }}
                  pagination={true}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    500: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    992: { slidesPerView: 1 },
                    1200: { slidesPerView: 1 },
                    1400: { slidesPerView: 1 },
                  }}
                >
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">Johnson</h4>
                              <span className="testi-profile-desig">Customer</span>
                            </div>
                            <div className="quote-icon">
                              <img src="/assets/img/icon/quote1-1.svg" alt="Rapid Fix" />
                            </div>
                          </div>
                          <p className="testi-card_text">
                            Rapid Fix handles all our fleet maintenance and never lets us down. Their priority scheduling keeps our trucks on the road and their pricing is transparent. Quality workmanship you can count on.
                          </p>
                          <div className="rating" style={{ marginTop: "1rem" }}>
                            <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">Smith</h4>
                              <span className="testi-profile-desig">Customer</span>
                            </div>
                            <div className="quote-icon">
                              <img src="/assets/img/icon/quote1-1.svg" alt="Rapid Fix" />
                            </div>
                          </div>
                          <p className="testi-card_text">
                            Needed an urgent diesel repair and they got me in the same day. The team explained everything clearly and the final bill was exactly what they quoted. Hands down the most reliable shop in Scarborough.
                          </p>
                          <div className="rating" style={{ marginTop: "1rem" }}>
                            <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">Williams</h4>
                              <span className="testi-profile-desig">Customer</span>
                            </div>
                            <div className="quote-icon">
                              <img src="/assets/img/icon/quote1-1.svg" alt="Rapid Fix" />
                            </div>
                          </div>
                          <p className="testi-card_text">
                            I've taken both my personal car and work truck to Rapid Fix multiple times. Fast turnaround, honest pricing, and quality work every single visit. Finally, an auto and diesel shop I can actually trust.
                          </p>
                          <div className="rating" style={{ marginTop: "1rem" }}>
                            <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonialOne arrow">
                  <div className="testimonialOne-button-next testimonialOne-button">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <div className="testimonialOne-button-prev testimonialOne-button">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
