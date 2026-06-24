"use client";
import Link from "next/link";

const TruckServices = () => {
  return (
    <section className="truck-services space overflow-hidden">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6" data-aos="fade-left" data-aos-duration="900">
            <div className="truck-services-img mb-40 mb-lg-0">
              <img
                src="/assets/img/services/service%202.jpeg"
                alt="RapidFix Truck Service"
                className="w-100 rounded-4"
              />
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-right" data-aos-duration="900">
            <div className="title-area mb-30">
              <span className="sub-title">DIESEL & TRUCK SPECIALISTS</span>
              <h2 className="sec-title">
                Heavy-Duty Truck Repair & Fleet Maintenance
              </h2>
              <p className="sec-text">
                From diesel engine overhauls to fleet maintenance programs, we keep
                your trucks and commercial vehicles running at peak performance.
                Our certified diesel technicians handle everything from routine
                servicing to complex transmission and brake repairs.
              </p>
            </div>
            <div className="checklist style2 mb-30">
              <ul>
                <li>
                  <i className="fas fa-check-circle" />
                  Diesel Engine Diagnostics & Repair
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Fleet Maintenance Programs
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Brake & Suspension Overhauls
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Transmission Service & Repair
                </li>
              </ul>
            </div>
            <Link href="/services" className="btn style2 btn-hover-lift">
              Explore Truck Services <i className="fas fa-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckServices;
