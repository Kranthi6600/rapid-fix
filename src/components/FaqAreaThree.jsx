
const FaqAreaThree = () => {
  return (
    <div className="faq-area-1 space ">
      <div className="container py-5" style={{ marginTop: "100px" }}>
        <div className="faq-wrap space cta-wrap2 bg-theme" data-aos="zoom-in" data-aos-duration="900">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-11">
              <div className="title-area text-center" data-aos="fade-down" data-aos-delay="100">
                <h2 style={{ color: "white" }}>
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
            <div className="col-xl-8 col-md-10 col-11">
              <div className="accordion-area accordion" id="faqAccordion">
                <div className="accordion-card style3 active" data-aos="fade-up" data-aos-delay="150">
                  <div className="accordion-header" id="collapse-item-1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                      Do you service all makes and models?
                    </button>
                  </div>
                  <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">
                        Yes, our certified technicians are experienced with all makes and models of cars, trucks, and diesel vehicles. We handle everything from domestic sedans to heavy-duty commercial trucks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style3" data-aos="fade-up" data-aos-delay="220">
                  <div className="accordion-header" id="collapse-item-2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                      How long does a typical repair take?
                    </button>
                  </div>
                  <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">
                        Most routine maintenance like oil changes and inspections can be done same-day. Larger repairs depend on parts availability and complexity, but we prioritize fast turnaround and keep you informed every step of the way.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style3" data-aos="fade-up" data-aos-delay="290">
                  <div className="accordion-header" id="collapse-item-3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                      Do you offer fleet service programs?
                    </button>
                  </div>
                  <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">
                        Absolutely. We offer customized fleet maintenance plans with priority scheduling, volume pricing, dedicated account management, and detailed reporting to keep your business moving.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style3" data-aos="fade-up" data-aos-delay="360">
                  <div className="accordion-header" id="collapse-item-4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                      What is a Safety Standards Certificate (SSC)?
                    </button>
                  </div>
                  <div id="collapse-4" className="accordion-collapse collapse" aria-labelledby="collapse-item-4" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">
                        A Safety Standards Certificate is required when registering a vehicle in Ontario or transferring ownership. Our licensed inspectors perform a comprehensive check of brakes, suspension, lights, and more to ensure your vehicle is road-safe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAreaThree;
