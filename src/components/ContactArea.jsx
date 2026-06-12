"use client";
import { useState } from "react";
import "./ContactArea.css";

const ContactArea = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Choose',
    date: '',
    time: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.service === 'Choose') newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Appointment date is required';
    if (!formData.time) newErrors.time = 'Appointment time is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const submitForm = async () => {
    // Do nothing — form submission disabled
    return;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm();
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 18; hour++) {
      for (let min = 0; min < 60; min += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();
  
  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  return (
    <>
      <div className="contact-area space">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-xxl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <h6 className="contact-info_title">Address</h6>
                <p className="contact-info_text">112 Sinnott Rd</p>
                <p className="contact-info_text">Scarborough, ON M1L 4S6</p>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-phone-alt" />
                </div>
                <h6 className="contact-info_title">Phone Number</h6>
                <p className="contact-info_text">
                  <a href="tel:4378364848">(437) 836-4848</a>
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-clock" />
                </div>
                <h6 className="contact-info_title">Hours</h6>
                <p className="contact-info_text">Mon – Fri: 8:00 AM – 6:00 PM</p>
                <p className="contact-info_text">Sat – Sun: Closed</p>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-envelope" />
                </div>
                <h6 className="contact-info_title">E-mail</h6>
                <p className="contact-info_text">
                  <a href="mailto:Info@rapidfixauto.ca">Info@rapidfixauto.ca</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-bottom">
        <div className="container">
          <div className="map-sec" data-aos="zoom-in" data-aos-duration="900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.6!2d-79.2724!3d43.7017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d0b0b0b0b0b1%3A0x0!2s112+Sinnott+Rd%2C+Scarborough%2C+ON+M1L+4S6!5e0!3m2!1sen!2sca!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              title="Rapid Fix - 112 Sinnott Rd, Scarborough, ON"
            />
          </div>
        </div>
      </div>
      <div className="space-bottom">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6 text-lg-end" data-aos="fade-left" data-aos-duration="900">
              <div className="faq-thumb2 mb-xl-0 mb-50">
                <div className="about-counter-grid jump">
                  <img
                    src="assets/img/icon/faq2-counter-icon-1.svg"
                    alt="Rapid Fix"
                  />
                  <div className="media-right">
                    <h3 className="about-counter">
                      <span className="counter-number">250</span>+
                    </h3>
                    <h4 className="about-counter-text">Services we provide</h4>
                  </div>
                </div>
                <img src="/assets/img/contact/contact-1.jpeg" alt="Rapid Fix" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="900">
              <div className="contact-form-wrap p-0">
                <div className="title-area" data-aos="fade-up" data-aos-delay="100">
                  <span className="sub-title">Get In Touch</span>
                  <h2 className="sec-title">Book a Service or Ask a Question</h2>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="appointment-form"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address"
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone Number"
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="service"
                          id="service"
                          className={`form-select ${errors.service ? 'is-invalid' : ''}`}
                          value={formData.service}
                          onChange={handleInputChange}
                        >
                          <option value="Choose">Select a Service</option>
                          <option value="Auto Repair">Auto Repair</option>
                          <option value="Diesel Repair">Diesel Repair</option>
                          <option value="Diagnostics">Diagnostics</option>
                          <option value="Maintenance">Maintenance</option>
                          <option value="Fleet Services">Fleet Services</option>
                          <option value="SSC">Safety Standards Certificate (SSC)</option>
                        </select>
                        {errors.service && <div className="invalid-feedback">{errors.service}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="date" className="form-label">Preferred Date</label>
                        <input
                          type="date"
                          className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                          name="date"
                          id="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={today}
                        />
                        {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="time" className="form-label">Preferred Time</label>
                        <select
                          name="time"
                          id="time"
                          className={`form-select ${errors.time ? 'is-invalid' : ''}`}
                          value={formData.time}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Time</option>
                          {timeSlots.map(slot => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                        {errors.time && <div className="invalid-feedback">{errors.time}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      placeholder="Describe your vehicle issue or service needed..."
                      id="message"
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                    />
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                  <div className="form-btn col-12">
                    <a
                      href="#"
                      className={`btn style2 ${isSubmitting ? 'disabled' : ''}`}
                      onClick={(e) => { e.preventDefault(); submitForm(); }}
                      style={{ pointerEvents: isSubmitting ? 'none' : 'auto', opacity: isSubmitting ? 0.65 : 1 }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Booking...
                        </>
                      ) : (
                        <>
                          Book Appointment <i className="fas fa-arrow-right ms-2" />
                        </>
                      )}
                    </a>
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="alert alert-success mt-3" role="alert">
                      <i className="fas fa-check-circle me-2"></i>
                      <strong>Success!</strong> Your appointment request has been submitted. We'll contact you shortly to confirm your booking.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="alert alert-danger mt-3" role="alert">
                      <i className="fas fa-exclamation-circle me-2"></i>
                      <strong>Error!</strong> There was a problem submitting your appointment. Please try again or call us directly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
