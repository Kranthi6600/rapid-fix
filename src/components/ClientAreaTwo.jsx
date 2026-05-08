"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const ClientAreaTwo = () => {
  return (
    <div
      className="client-bg-area-2"
      style={{ 
        backgroundImage: "url(/assets/img/service/service-18.jpg)",
        marginTop: "8rem"
      }}
    >
      <div className="client-area-2 space text-center">
        <div className="container">
          <div className="row global-carousel">
            <Swiper
              loop={true}
              spaceBetween={20}
              slidesPerGroup={1}
              speed={1000}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
                1400: {
                  slidesPerView: 5,
                },
              }}
            >
              <SwiperSlide>
                <div>
                  <div className="client-logo">
                    <Link href="/">
                      <img src="/assets/img/service/service-11.png" alt="Rapid Fix" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="client-logo">
                    <Link href="/">
                      <img src="/assets/img/service/service-12.png" alt="Rapid Fix" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="client-logo">
                    <Link href="/">
                      <img src="/assets/img/service/service-13.png" alt="Rapid Fix" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="client-logo">
                    <Link href="/">
                      <img src="/assets/img/service/service-14.png" alt="Rapid Fix" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="client-logo">
                    <Link href="/">
                      <img src="/assets/img/service/service-15.png" alt="Rapid Fix" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="client-logo">
                    <Link href="/">
                      <img src="/assets/img/service/service-11.png" alt="Rapid Fix" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="client-logo">
                    <Link href="/">
                      <img src="/assets/img/service/service-12.png" alt="Rapid Fix" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div>
                  <div className="client-logo">
                    <Link href="/">
                      <img src="/assets/img/service/service-13.png" alt="Rapid Fix" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="client-logo">
                    <Link href="/">
                      <img src="/assets/img/service/service-14.png" alt="Rapid Fix" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="client-logo">
                    <Link href="/">
                      <img src="/assets/img/service/service-15.png" alt="Rapid Fix" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/*==============================
    Testimonial Area  
    ==============================*/}
      <div className="testimonial-area-2 overflow-hidden">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-7">
              <div className="testiomonial-wrap-2 bg-title">
                <div className="title-area">
                  <span className="sub-title">CLIENTS REVIEWS</span>
                  <h2 className="sec-title text-white">WHAT OUR CLIENT SAYS</h2>
                </div>
                <div className="quote-icon">
                  <img src="assets/img/icon/quote2-1.svg" alt="Rapid Fix" />
                </div>
                <div className="row global-carousel testi-slider-2">
                  <Swiper
                    loop={true}
                    navigation={{
                      nextEl: ".testimonial_R-button-next",
                      prevEl: ".testimonial_R-button-prev",
                    }}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    speed={1000}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 6000 }}
                    modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                    className="mySwiper"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 1,
                      },
                      992: {
                        slidesPerView: 1,
                      },
                      1200: {
                        slidesPerView: 1,
                      },
                      1400: {
                        slidesPerView: 1,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div>
                        <div className="testi-card style2">
                          <div className="testi-card_content">
                            <div className="testi-card-profile">
                              <div className="testi-profile_thumb">
                                <img
                                  src="/assets/img/service/service-19.jpg"
                                  alt="Rapid Fix"
                                  style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%" }}
                                />
                              </div>
                              <div className="testi-card-profile-details">
                                <h4 className="testi-profile-title">
                                  Johnson
                                </h4>
                                <span className="testi-profile-desig">
                                  Customer
                                </span>
                              </div>
                            </div>
                            <p className="testi-card_text">
                              Rapid Fix handles all our fleet maintenance and never lets us down. Their priority scheduling keeps our trucks on the road and their pricing is transparent. Quality workmanship you can count on.
                            </p>
                            <div className="rating" style={{ marginTop: "1rem" }}>
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className="testi-card style2">
                          <div className="testi-card_content">
                            <div className="testi-card-profile">
                              <div className="testi-profile_thumb">
                                <img
                                  src="/assets/img/service/service-20.jpg"
                                  alt="Rapid Fix"
                                  style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%" }}
                                />
                              </div>
                              <div className="testi-card-profile-details">
                                <h4 className="testi-profile-title">
                                  Smith
                                </h4>
                                <span className="testi-profile-desig">
                                  Customer
                                </span>
                              </div>
                            </div>
                            <p className="testi-card_text">
                              Needed an urgent diesel repair and they got me in the same day. The team explained everything clearly and the final bill was exactly what they quoted. Hands down the most reliable shop in Scarborough.
                            </p>
                            <div className="rating" style={{ marginTop: "1rem" }}>
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className="testi-card style2">
                          <div className="testi-card_content">
                            <div className="testi-card-profile">
                              <div className="testi-profile_thumb">
                                <img
                                  src="/assets/img/service/service-21.jpg"
                                  alt="Rapid Fix"
                                  style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%" }}
                                />
                              </div>
                              <div className="testi-card-profile-details">
                                <h4 className="testi-profile-title">
                                  Williams
                                </h4>
                                <span className="testi-profile-desig">
                                  Customer
                                </span>
                              </div>
                            </div>
                            <p className="testi-card_text">
                              I've taken both my personal car and work truck to Rapid Fix multiple times. Fast turnaround, honest pricing, and quality work every single visit. Finally, an auto and diesel shop I can actually trust.
                            </p>
                            <div className="rating" style={{ marginTop: "1rem" }}>
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="icon-box">
                  <button className="slick-arrow style3 default testimonial_R-button-next">
                    <i className="fas fa-arrow-left" />
                  </button>
                  <button className="slick-arrow style3 default testimonial_R-button-prev">
                    <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-thumb-2">
          <img src="/assets/img/service/service-17.jpg" alt="Rapid Fix" />
        </div>
      </div>
    </div>
  );
};

export default ClientAreaTwo;
