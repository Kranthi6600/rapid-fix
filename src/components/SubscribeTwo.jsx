import Link from "next/link";


const SubscribeTwo = () => {
  return (
    <div className="container">
      <div
        className="footer-top-1 bg-theme"
        style={{ backgroundImage: "url(/assets/img/bg/footer-top-bg1-1.png)" }}
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <div className="footer-logo" data-aos="fade-down" data-aos-delay="100">
          <Link href="/">
            <img style={{ width: "200px" }} src="/assets/logo1.png" alt="RapidFix" />
          </Link>
        </div>
        <div className="call-media-wrap" data-aos="fade-up" data-aos-delay="200">
          <div className="icon">
            <img src="/assets/img/icon/phone-1.svg" alt="RapidFix" />
          </div>
          <div className="media-body">
            <h6 className="title text-white">Requesting A Call:</h6>
            <h4 className="link">
              <a className="text-white" href="tel:4378364848">
                (437) 836-4848
              </a>
            </h4>
          </div>
        </div>
        <div className="social-btn" data-aos="fade-up" data-aos-delay="300">
          <a href="https://facebook.com/">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://twitter.com/">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://instagram.com/">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubscribeTwo;
