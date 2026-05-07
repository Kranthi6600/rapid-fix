import Link from "next/link";

const FooterAreaTwo = () => {
  return (
    <footer
      className="footer-wrapper footer-layout2"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg2-1.png)" }}
    >
      <div className="container">
        <div className="footer-top-2">
          <div className="footer-logo">
            <Link href="/">
              <img src="assets/img/logo-white.svg" alt="Rapid Fix" />
            </Link>
          </div>
          <h3 className="footer-top-title text-white">
            Subscribe our newsletter for updates
          </h3>
          <form className="newsletter-form">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Your Email Address"
                required=""
              />
            </div>
            <button type="submit" className="btn">
              <i className="fas fa-arrow-right" />
            </button>
          </form>
        </div>
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget widget-about">
                <h3 className="widget_title">About Us</h3>
                <p className="footer-text mb-30">
                  It is a long established fact that a reader will be distracted
                </p>
                <div className="social-btn style3">
                  <Link href="https://www.instagram.com/" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link href="https://linkedin.com/" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link href="https://twitter.com/" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link href="https://facebook.com/" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Company</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/team">Team</Link>
                    </li>
                    <li>
                      <Link href="/contact">Faq</Link>
                    </li>
                    <li>
                      <Link href="/contact">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link href="/service">Mechanic Masters</Link>
                    </li>
                    <li>
                      <Link href="/service">Speedy Auto Repair</Link>
                    </li>
                    <li>
                      <Link href="/service">Mobile Car Repair</Link>
                    </li>
                    <li>
                      <Link href="/service">Pro Auto Fix</Link>
                    </li>
                    <li>
                      <Link href="/service">Precision Auto Works</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Address</p>
                      <h6>
                        66 Broklyant, New York
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Phone Number</p>
                      <h6>
                        <Link href="tel:888123456765">012 345 678 9101</Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Email Address</p>
                      <h6>
                        <Link href="mailto:infoname@mail.com">
                          abcd@gmail.com
                        </Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link href="#">Rapid Fix</Link> 2024 | All Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link href="/contact">Tarms &amp; Condition</Link>
                <Link href="/contact">Privacy Policy</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaTwo;
