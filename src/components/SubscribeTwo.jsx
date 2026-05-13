import Link from "next/link";

const SubscribeTwo = () => {
  return (
    <div className="container">
      <div className="footer-top-3" data-aos="zoom-in" data-aos-duration="800">
        <div className="footer-logo" data-aos="fade-down" data-aos-delay="100">
          <Link href="/">
            <img
              style={{ width: "170px"}}
              src="/assets/logo.png"
              alt="Rapid Fix"
            />
          </Link>
        </div>
        <h3 className="footer-top-title text-white" data-aos="fade-up" data-aos-delay="150">
          Stay connected with Rapid Fix
        </h3>
        <form className="newsletter-form" data-aos="fade-up" data-aos-delay="250">
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Your Email Address"
              required=""
            />
          </div>
          <button type="submit" className="btn style5">
            <i className="fas fa-arrow-right" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeTwo;
