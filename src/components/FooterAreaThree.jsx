
import Link from "next/link";

const FooterAreaThree = () => {
  return (
    <footer
      className="footer-wrapper footer-layout3"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg1-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
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
                <h3 className="widget_title">Services</h3>
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
                <div className="widget-contact">
                  <p>
                    <i className="fas fa-phone-alt me-2 text-theme" />
                    <Link href="tel:888123456765">(+888) 123 456 765</Link>
                  </p>
                  <p>
                    <i className="fas fa-envelope me-2 text-theme" />
                    <Link href="mailto:infoname@mail.com">infoname@mail.com</Link>
                  </p>
                  <p>
                    <i className="fas fa-map-marker-alt me-2 text-theme" />
                    Old city Street,USA <br /> 1212 New york-3500
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget widget-newsletter">
                <h3 className="widget_title">Get In Touch</h3>
                <p className="footer-text mb-50">
                  Lorem Ipsum is simply is dumiomy is text Lorem Ipsum is simply
                </p>
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

export default FooterAreaThree;
