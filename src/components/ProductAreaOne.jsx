import Link from "next/link";

const ProductAreaOne = () => {
  return (
    <div className="product-area-1 space-top bg-smoke overflow-hidden">
      <div className="container">
        <div className="title-area text-center mb-20">
          <h3 className="sec-title">Our Services</h3>
          <p className="sec-text">
            From routine oil changes to complex diesel overhauls, we've got you covered.
          </p>
        </div>
        <div className="row gy-30 gx-30">
          <div className="col-lg-4 col-md-6">
            <div className="product-card service-card">
              <div className="product-content text-center">
                <h3 className="product-title">
                  <Link href="/service">Auto Repair</Link>
                </h3>
                <p className="service-desc">
                  Complete auto repair for all makes and models — brakes, suspension, steering, and more.
                </p>
                <Link href="/service" className="link-btn">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product-card service-card">
              <div className="product-content text-center">
                <h3 className="product-title">
                  <Link href="/service">Diesel Repair</Link>
                </h3>
                <p className="service-desc">
                  Specialized diesel engine diagnostics, repair, and maintenance for trucks and equipment.
                </p>
                <Link href="/service" className="link-btn">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product-card service-card">
              <div className="product-content text-center">
                <h3 className="product-title">
                  <Link href="/service">Diagnostics</Link>
                </h3>
                <p className="service-desc">
                  State-of-the-art computer diagnostics to pinpoint issues fast and accurately.
                </p>
                <Link href="/service" className="link-btn">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product-card service-card">
              <div className="product-content text-center">
                <h3 className="product-title">
                  <Link href="/service">Maintenance</Link>
                </h3>
                <p className="service-desc">
                  Preventative maintenance services including oil changes, tune-ups, and fluid flushes.
                </p>
                <Link href="/service" className="link-btn">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product-card service-card">
              <div className="product-content text-center">
                <h3 className="product-title">
                  <Link href="/service">Fleet Services</Link>
                </h3>
                <p className="service-desc">
                  Keep your fleet running with scheduled maintenance plans and priority service.
                </p>
                <Link href="/service" className="link-btn">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product-card service-card">
              <div className="product-content text-center">
                <h3 className="product-title">
                  <Link href="/service">Safety Standards Certificate (SSC)</Link>
                </h3>
                <p className="service-desc">
                  Comprehensive vehicle inspections to keep you safe and road-ready.
                </p>
                <Link href="/service" className="link-btn">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAreaOne;
