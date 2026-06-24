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
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: "100vh",
                maxHeight: "800px",
              }}
            >
              <img
                src="/assets/img/hero/banner8.jpeg"
                alt="RapidFix"
                loading="eager"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to right, rgba(23,23,23,0.85), rgba(23,23,23,0) 70%)",
                  zIndex: 1,
                }}
              />
              <div className="container" style={{ position: "relative", zIndex: 2 }}>
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
                            alt="RapidFix"
                          />
                          Fleet & Diesel Specialists
                        </span>{" "}
                      </div>
                      <h1
                        className="hero-title text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.1s"
                      >
                        Keeping Your Fleet on the Road.
                      </h1>
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        Comprehensive fleet maintenance and diesel repair solutions tailored for businesses. Minimize downtime and maximize performance.
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
                              alt="RapidFix"
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
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: "100vh",
                maxHeight: "800px",
              }}
            >
              <img
                src="/assets/img/hero/banner9.jpeg"
                alt="RapidFix"
                loading="eager"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to right, rgba(23,23,23,0.85), rgba(23,23,23,0) 70%)",
                  zIndex: 1,
                }}
              />
              <div className="container" style={{ position: "relative", zIndex: 2 }}>
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
                            alt="RapidFix"
                          />
                          Complete Car Care Experts
                        </span>{" "}
                      </div>
                      <h1
                        className="hero-title text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.1s"
                      >
                        Drive In. Drive Out Confident.
                      </h1>
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        From engine tune-ups and transmission service to tire rotations and brake inspections — we handle every aspect of your car's health.
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
                              alt="RapidFix"
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
