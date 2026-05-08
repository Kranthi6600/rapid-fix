import Link from "next/link";

const products = [
  {
    title: "Auto Repair",
    desc: "Complete auto repair for all makes and models — brakes, suspension, steering, and more.",
  },
  {
    title: "Diesel Repair",
    desc: "Specialized diesel engine diagnostics, repair, and maintenance for trucks and equipment.",
  },
  {
    title: "Diagnostics",
    desc: "State-of-the-art computer diagnostics to pinpoint issues fast and accurately.",
  },
  {
    title: "Maintenance",
    desc: "Preventative maintenance services including oil changes, tune-ups, and fluid flushes.",
  },
  {
    title: "Fleet Services",
    desc: "Keep your fleet running with scheduled maintenance plans and priority service.",
  },
  {
    title: "Safety Standards Certificate (SSC)",
    desc: "Comprehensive vehicle inspections to keep you safe and road-ready.",
  },
];

const ProductAreaOne = () => {
  return (
    <div className="product-area-1 space-top bg-smoke overflow-hidden">
      <div className="container">
        <div className="title-area text-center mb-20" data-aos="fade-up">
          <h3 className="sec-title">Our Services</h3>
          <p className="sec-text">
            From routine oil changes to complex diesel overhauls, we've got you covered.
          </p>
        </div>
        <div className="row gy-30 gx-30">
          {products.map((p, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="flip-left"
              data-aos-delay={`${(index % 3) * 100 + 100}`}
              data-aos-duration="800"
            >
              <div className="product-card service-card">
                <div className="product-content text-center">
                  <h3 className="product-title">
                    <Link href="/service">{p.title}</Link>
                  </h3>
                  <p className="service-desc">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductAreaOne;
