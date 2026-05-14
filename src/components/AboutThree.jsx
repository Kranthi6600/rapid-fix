"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const AboutThree = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const listItemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about3-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const targets = [
      imageRef.current,
      contentRef.current,
      ...listItemsRef.current,
    ].filter(Boolean);

    targets.forEach((el) => observer.observe(el));
    return () => targets.forEach((el) => observer.unobserve(el));
  }, []);

  const services = [
    ["Brake Repair & Service", "Engine Diagnostics", "Diesel Engine Repair", "Fleet Maintenance"],
    ["Safety Inspections (SSC)", "Oil Change Service", "Transmission Service", "24/7 Emergency Service"],
  ];

  return (
    <>
      <style>{`
        .about3-animate {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .about3-animate.about3-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .about3-img-wrap {
          opacity: 0;
          transform: translateX(50px) scale(0.96);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .about3-img-wrap.about3-visible {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
        .about3-img-wrap img {
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        .about3-img-wrap img:hover {
          transform: scale(1.03) rotate(-1deg);
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
        }
        .about3-list-item {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.5s ease, transform 0.5s ease, background 0.3s ease, color 0.3s ease;
          padding: 6px 10px;
          border-radius: 6px;
        }
        .about3-list-item.about3-visible {
          opacity: 1;
          transform: translateX(0);
        }
        .about3-list-item:hover {
          background: rgba(var(--theme-color-rgb, 220, 53, 69), 0.08);
          padding-left: 18px;
        }
        .about3-list-item i {
          transition: transform 0.3s ease;
        }
        .about3-list-item:hover i {
          transform: scale(1.3) rotate(10deg);
        }
        .about3-sub-title {
          display: inline-block;
          animation: about3-badge-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        @keyframes about3-badge-pop {
          from { opacity: 0; transform: scale(0.6) translateY(-10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .about3-heading {
          overflow: hidden;
        }
        .about3-heading span {
          display: block;
          animation: about3-slide-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
        }
        @keyframes about3-slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .about3-btn {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease !important;
        }
        .about3-btn:hover {
          transform: translateY(-3px) scale(1.04) !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        .about3-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(220,53,69,0.15), transparent);
          border-radius: 10px;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .about3-img-wrap:hover .about3-img-overlay {
          opacity: 1;
        }
        .about3-img-container {
          position: relative;
          display: inline-block;
        }
      `}</style>

      <div className="about-area-1 space" ref={sectionRef}>
        <div className="about1-shape-img shape-mockup">
          <img
            className="about1-shape-img-1 spin"
            src="assets/img/normal/about_shape1-2.svg"
            alt="Fixturbo"
          />
          <img
            className="about1-shape-img-2 spin2"
            src="assets/img/normal/about_shape1-1.svg"
            alt="Fixturbo"
          />
        </div>
        <div className="container">
          <div className="row gx-60 align-items-center flex-row-reverse">
            <div className="col-xl-7 text-xl-center">
              <div
                className="about-thumb3 mb-40 mb-xl-0 about3-img-wrap"
                ref={imageRef}
              >
                <div className="about-img-1 about3-img-container">
                  <img
                    style={{ borderRadius: "10px" }}
                    src="assets/img/hero/banner7.jpeg"
                    alt="Rapid Fix"
                  />
                  <div className="about3-img-overlay" />
                </div>
              </div>
            </div>

            <div className="col-xl-5">
              <div
                className="about-content-wrap about3-animate"
                ref={contentRef}
              >
                <div className="title-area me-xl-5 mb-30">
                  <span className="sub-title about3-sub-title">Know About Us</span>
                  <h2 className="sec-title about3-heading">
                    <span>Expert Auto Repair Services</span>
                  </h2>
                  <p className="sec-text">
                    Rapid Fix provides comprehensive auto and diesel repair
                    services in Scarborough, ON. Our certified technicians
                    deliver fast, honest, and affordable service for all your
                    vehicle needs.
                  </p>
                </div>

                <div className="row gy-4 justify-content-md-between justify-content-end align-items-center flex-row-reverse">
                  {services.map((group, gi) => (
                    <div className="col-md-auto col-lg-6" key={gi}>
                      <div className="checklist style2">
                        <ul>
                          {group.map((item, idx) => {
                            const refIdx = gi * 4 + idx;
                            return (
                              <li
                                key={item}
                                className="about3-list-item"
                                ref={(el) => (listItemsRef.current[refIdx] = el)}
                                style={{
                                  transitionDelay: `${0.1 + refIdx * 0.08}s`,
                                }}
                              >
                                <i className="fas fa-check-double" />
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="btn-wrap mt-40">
                  <Link href="/about" className="btn style2 about3-btn">
                    Read More <i className="fas fa-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutThree;
