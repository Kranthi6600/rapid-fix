"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade, Autoplay } from "swiper";

const HeroThree = () => {
  return (
    <div className="hero-wrapper hero-3">
      <div className="hero-3-slider global-carousel">
        <Swiper
          loop={true}
          modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect="fade"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url(assets/img/hero/banner1.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
                width: "100%",
                height: "100vh",
                maxHeight: "800px",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6">
                    <div className="hero-style3">
                      <div
                        className="hero-subtitle text-white"
                        data-ani="slideinup"
                        data-ani-delay="0s"
                      >
                        <span>
                          <img
                            src="assets/img/hero/hero_shape_3.png"
                            alt="Rapid Fix"
                          />
                          Auto & Diesel Repair
                        </span>{" "}
                      </div>
                      <h1
                        className="hero-title text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.1s"
                      >
                        Expert Auto Repair in Scarborough
                      </h1>
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        Professional auto and diesel repair services at 112 Sinnott Rd. Fast, honest, and affordable service for all your vehicle needs.
                      </p>
                      <div
                        className="btn-group"
                        data-ani="slideinup"
                        data-ani-delay="0.3s"
                      >
                        <Link href="/about" className="btn">
                          Learn More
                        </Link>
                        <div className="call-media-wrap">
                          <div className="icon">
                            <img
                              src="assets/img/icon/phone-1.svg"
                              alt="Rapid Fix"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="title text-white">
                              Requesting A Call:
                            </h6>
                            <h4 className="link">
                              <a className="text-white" href="tel:4378364848">
                                (437) 836-4848
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url(assets/img/hero/banner5.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
                width: "100%",
                height: "100vh",
                maxHeight: "800px",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6">
                    <div className="hero-style3">
                      <div
                        className="hero-subtitle text-white"
                        data-ani="slideinup"
                        data-ani-delay="0s"
                      >
                        <span>
                          <img
                            src="assets/img/hero/hero_shape_3.png"
                            alt="Rapid Fix"
                          />
                          Certified Technicians
                        </span>{" "}
                      </div>
                      <h1
                        className="hero-title text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.1s"
                      >
                        Fast Service, Trusted Results.
                      </h1>
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        From brakes and diagnostics to fleet maintenance and safety inspections. We keep your vehicle running smoothly.
                      </p>
                      <div
                        className="btn-group"
                        data-ani="slideinup"
                        data-ani-delay="0.3s"
                      >
                        <Link href="/about" className="btn">
                          Learn More
                        </Link>
                        <div className="call-media-wrap">
                          <div className="icon">
                            <img
                              src="assets/img/icon/phone-1.svg"
                              alt="Rapid Fix"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="title text-white">
                              Requesting A Call:
                            </h6>
                            <h4 className="link">
                              <a className="text-white" href="tel:4378364848">
                                (437) 836-4848
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url(assets/img/hero/banner4.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
                width: "100%",
                height: "100vh",
                maxHeight: "800px",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6">
                    <div className="hero-style3">
                      <div
                        className="hero-subtitle text-white"
                        data-ani="slideinup"
                        data-ani-delay="0s"
                      >
                        <span>
                          <img
                            src="assets/img/hero/hero_shape_3.png"
                            alt="Rapid Fix"
                          />
                          24/7 Emergency Service
                        </span>{" "}
                      </div>
                      <h1
                        className="hero-title text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.1s"
                      >
                        Emergency Assistance.
                      </h1>
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        Available 24/7 for emergency repairs and roadside assistance. We're here when you need us most.
                      </p>
                      <div
                        className="btn-group"
                        data-ani="slideinup"
                        data-ani-delay="0.3s"
                      >
                        <Link href="/about" className="btn">
                          Learn More
                        </Link>
                        <div className="call-media-wrap">
                          <div className="icon">
                            <img
                              src="assets/img/icon/phone-1.svg"
                              alt="Rapid Fix"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="title text-white">
                              Requesting A Call:
                            </h6>
                            <h4 className="link">
                              <a className="text-white" href="tel:4378364848">
                                (437) 836-4848
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroThree;
