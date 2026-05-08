'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import Link from "next/link";
const ClientAreaFour = () => {
  return (
    <div className="client-area-3">
      <div className="container">
        <div className="row gx-80 gy-4">
          <div className="col-lg-5">
            <div className="client3-wrap">
              <div className="title-area mb-0">
                <span className="sub-title">About Us</span>
                <h2 className="sec-title">
                  About Rapid Fix
                </h2>
                <p className="sec-text">
                  At Rapid Fix, we're more than just mechanics — we're your partners in keeping your vehicles running at peak performance. Our team of certified technicians brings years of expertise in both auto and diesel repair.
                </p>
                <p className="sec-text mt-3">
                  We invest in the latest diagnostic technology and training to deliver fast, accurate, and affordable service. From personal vehicles to commercial fleets, we treat every job with the same commitment to quality.
                </p>
                <div className="row gy-3 mt-4">
                  <div className="col-4 text-center">
                    <h3 className="counter-title">15+</h3>
                    <p className="counter-text">Years Experience</p>
                  </div>
                  <div className="col-4 text-center">
                    <h3 className="counter-title">5K+</h3>
                    <p className="counter-text">Vehicles Serviced</p>
                  </div>
                  <div className="col-4 text-center">
                    <h3 className="counter-title">100%</h3>
                    <p className="counter-text">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="client-slider3">
              <div className="row global-carousel slider1">
                <Swiper
                  navigation={{
                    nextEl: ".team-slider2-next",
                    prevEl: ".team-slider2-prev",
                  }}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  speed={1000}
                  pagination={{ clickable: true }}
                  loop
                  autoplay={{
                    stopOnLastSlide: false,
                  }}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
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
                      slidesPerView: 4,
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
                          <img
                            src="/assets/img/about/about-1.jpg"
                            alt="Rapid Fix"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link href="/">
                          <img
                            src="/assets/img/about/about-2.jpg"
                            alt="Rapid Fix"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link href="/">
                          <img
                            src="/assets/img/about/about-3.jpg"
                            alt="Rapid Fix"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link href="/">
                          <img
                            src="/assets/img/about/about-4.jpg"
                            alt="Rapid Fix"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link href="/">
                          <img
                            src="/assets/img/about/about-5.jpg"
                            alt="Rapid Fix"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link href="/">
                          <img
                            src="/assets/img/about/about-6.jpg"
                            alt="Rapid Fix"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link href="/">
                          <img
                            src="/assets/img/about/about-7.jpg"
                            alt="Rapid Fix"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="row global-carousel slider2">
                <Swiper
                  navigation={{
                    nextEl: ".team-slider2-next",
                    prevEl: ".team-slider2-prev",
                  }}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  speed={1000}
                  pagination={{ clickable: true }}
                  loop
                  autoplay={{
                    stopOnLastSlide: false,
                  }}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
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
                      slidesPerView: 6,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link href="/">
                          <img
                            src="/assets/img/about/about-8.jpg"
                            alt="Rapid Fix"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link href="/">
                          <img
                            src="/assets/img/about/about-9.jpg"
                            alt="Rapid Fix"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link href="/">
                          <img
                            src="/assets/img/about/about-10.jpg"
                            alt="Rapid Fix"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link href="/">
                          <img
                            src="/assets/img/about/about-11.jpg"
                            alt="Rapid Fix"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link href="/">
                          <img
                            src="/assets/img/about/about-12.jpg"
                            alt="Rapid Fix"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link href="/">
                          <img
                            src="/assets/img/about/about-13.jpg"
                            alt="Rapid Fix"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link href="/">
                          <img
                            src="/assets/img/about/about-14.jpg"
                            alt="Rapid Fix"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientAreaFour;
