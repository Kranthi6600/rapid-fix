import Link from "next/link";

const FooterArea = () => {
  return (
    <footer
      className="footer-wrapper footer-layout4"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg2-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget widget-about">
                <h3 className="widget_title">About Us</h3>
                <p className="footer-text mb-30">
                  Expert auto and diesel repair you can trust. Fast turnaround, honest pricing, and quality workmanship — every time.
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
                      <Link href="/services">Auto Repair</Link>
                    </li>
                    <li>
                      <Link href="/services">Diesel Repair</Link>
                    </li>
                    <li>
                      <Link href="/services">Diagnostics</Link>
                    </li>
                    <li>
                      <Link href="/services">Maintenance</Link>
                    </li>
                    <li>
                      <Link href="/services">Fleet Services</Link>
                    </li>
                    <li>
                      <Link href="/services">Safety Standards Certificate</Link>
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
                        112 Sinnott Rd, Scarborough, ON M1L 4S6
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
                        <Link href="tel:(437) 836-4848">(437) 836-4848</Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-clock" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Hours</p>
                      <h6>
                        Mon – Fri: 8:00 AM – 6:00 PM<br />
                        Sat - Sun: Closed
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
                © <Link href="#">Rapid Fix</Link> 2025 | All Rights Reserved | Developed by <Link href="https://wehoware.com" target="_blank" rel="noopener noreferrer">Wehoware</Link>
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link href="/contact">Terms &amp; Conditions</Link>
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

export default FooterArea;
