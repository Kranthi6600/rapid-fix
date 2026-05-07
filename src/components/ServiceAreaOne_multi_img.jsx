import Link from "next/link";


const ServiceAreaOne_multi_img = () => {
  return (
    <div className="service-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-1.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Auto Fixers</Link>
                </h4>
                <p className="service-card_text">
                  A car repair is a service provided to fix any issues or
                  damages with your{" "}
                </p>
                <Link href="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-1.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-2.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Mechanic Masters</Link>
                </h4>
                <p className="service-card_text">
                  A car repair is a service provided to fix any issues or
                  damages with your{" "}
                </p>
                <Link href="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-2.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-3.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Drive-In Garage</Link>
                </h4>
                <p className="service-card_text">
                  A car repair is a service provided to fix any issues or
                  damages with your{" "}
                </p>
                <Link href="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-3.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-4.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Car Care Clinic</Link>
                </h4>
                <p className="service-card_text">
                  A car repair is a service provided to fix any issues or
                  damages with your{" "}
                </p>
                <Link href="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-4.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-5.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Car Repair Services</Link>
                </h4>
                <p className="service-card_text">
                  A car repair is a service provided to fix any issues or
                  damages with your{" "}
                </p>
                <Link href="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-5.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-6.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Repair Solutions</Link>
                </h4>
                <p className="service-card_text">
                  A car repair is a service provided to fix any issues or
                  damages with your{" "}
                </p>
                <Link href="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-6.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaOne_multi_img;
