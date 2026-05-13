import React from "react";
import Link from "next/link";

const AboutThree = () => {
  return (
    <div className="about-area-1 space">
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
            <div className="about-thumb3 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img style={{borderRadius:'10px'}} src="assets/img/hero/banner7.jpeg" alt="Rapid Fix" />
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="about-content-wrap">
              <div className="title-area me-xl-5 mb-30">
                <span className="sub-title">Know About Us</span>
                <h2 className="sec-title">Expert Auto Repair Services</h2>
                <p className="sec-text">
                  Rapid Fix provides comprehensive auto and diesel repair services in Scarborough, ON. Our certified technicians deliver fast, honest, and affordable service for all your vehicle needs.
                </p>
              </div>
              <div className="row gy-4 justify-content-md-between justify-content-end align-items-center flex-row-reverse">
                <div className="col-md-auto">
                  <div className="checklist style2">
                    <ul>
                      <li>
                        <i className="fas fa-check-double" />
                        Brake Repair & Service
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Engine Diagnostics
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Diesel Engine Repair
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Fleet Maintenance
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-auto col-lg-6">
                  <div className="checklist style2">
                    <ul>
                      <li>
                        <i className="fas fa-check-double" />
                        Safety Inspections (SSC)
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Oil Change Service
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Transmission Service
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        24/7 Emergency Service
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="btn-wrap mt-40">
                <Link href="/about" className="btn style2">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThree;
