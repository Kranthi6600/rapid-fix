"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const footerLinks = {
  Services: [
    { label: "Brake Repair", href: "/services" },
    { label: "Engine Diagnostics", href: "/services" },
    { label: "Diesel Engine Repair", href: "/services" },
    { label: "Fleet Maintenance", href: "/services" },
    { label: "Oil Change Service", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/about" },
  ],
  Support: [
    { label: "FAQs", href: "/contact" },
    { label: "Warranty", href: "/contact" },
    { label: "Privacy Policy", href: "/contact" },
    { label: "Terms of Service", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: "fa-facebook-f", href: "#" },
  { icon: "fa-twitter", href: "#" },
  { icon: "fa-instagram", href: "#" },
  { icon: "fa-youtube", href: "#" },
];

export default function FooterParallax() {
  const router = useRouter();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <footer
      className="footer-parallax"
      style={{
        background: "#ffffff",
        color: "rgba(0,0,0,0.6)",
        fontFamily: '"Roboto", sans-serif',
        padding: "60px 8% 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent 10%, #e8092e 50%, transparent 90%)",
          opacity: 0.5,
        }}
      />

      {/* Main footer content */}
      <div
        className="footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Brand column */}
        <div className="footer-brand">
          <img
            src="/assets/logo1.png"
            alt="RapidFix"
            style={{
              height: "40px",
              width: "auto",
              marginBottom: "16px",
            }}
          />
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.7,
              margin: "0 0 20px",
              color: "rgba(0,0,0,0.45)",
              maxWidth: "300px",
            }}
          >
            Expert auto and diesel repair services. Certified technicians, quality parts, and honest service you can trust.
          </p>
          {/* Social links */}
          <div style={{ display: "flex", gap: "10px" }}>
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "rgba(232,9,46,0.06)",
                  border: "1px solid rgba(232,9,46,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(232,9,46,0.15)";
                  e.currentTarget.style.borderColor = "rgba(232,9,46,0.3)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(232,9,46,0.06)";
                  e.currentTarget.style.borderColor = "rgba(232,9,46,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <i
                  className={`fab ${social.icon}`}
                  style={{ color: "#e8092e", fontSize: "15px" }}
                />
              </a>
            ))}
          </div>

          {/* Mobile CTA buttons */}
          <div className="footer-mobile-cta" style={{ display: "none" }}>
            <a
              href="tel:+15551234567"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px 20px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #e8092e 0%, #c50724 100%)",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "15px",
                boxShadow: "0 6px 20px rgba(232,9,46,0.25)",
              }}
            >
              <i className="fas fa-phone-alt" style={{ fontSize: "14px" }} />
              Call Now
            </a>
            <a
              href="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px 20px",
                borderRadius: "12px",
                background: "rgba(232,9,46,0.06)",
                border: "1px solid rgba(232,9,46,0.15)",
                color: "#e8092e",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              <i className="fas fa-calendar-alt" style={{ fontSize: "14px" }} />
              Book Service
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="footer-link-col">
            <h4
              className="footer-link-title"
              onClick={() => toggleSection(title)}
              style={{
                fontFamily: '"Yantramanav", sans-serif',
                fontSize: "14px",
                fontWeight: 700,
                color: "#1a1a1a",
                margin: "0 0 16px",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              {title}
              <i
                className={`fas fa-chevron-down footer-chevron ${openSection === title ? "footer-chevron-open" : ""}`}
                style={{ fontSize: "10px", color: "rgba(0,0,0,0.3)", transition: "transform 0.3s ease" }}
              />
            </h4>
            <ul
              className={`footer-link-list ${openSection === title ? "footer-link-list-open" : ""}`}
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    style={{
                      color: "rgba(0,0,0,0.45)",
                      fontSize: "13px",
                      textDecoration: "none",
                      transition: "color 0.3s ease, padding-left 0.3s ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#e8092e";
                      e.currentTarget.style.paddingLeft = "6px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(0,0,0,0.45)";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact info bar */}
      <div
        className="footer-contact-bar"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "32px",
          maxWidth: "1200px",
          margin: "40px auto 0",
          paddingTop: "32px",
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        {[
          { icon: "fa-map-marker-alt", text: "123 Auto Repair Blvd, Springfield, ST 12345" },
          { icon: "fa-phone-alt", text: "(555) 123-4567" },
          { icon: "fa-envelope", text: "support@rapidfix.com" },
          { icon: "fa-clock", text: "Mon - Sat: 8:00 AM - 6:00 PM" },
        ].map((item, i) => (
          <div
            key={i}
            className="footer-contact-item"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "13px",
              color: "rgba(0,0,0,0.45)",
            }}
          >
            <i
              className={`fas ${item.icon}`}
              style={{ color: "#e8092e", fontSize: "14px" }}
            />
            {item.text}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="footer-bottom-bar"
        style={{
          maxWidth: "1200px",
          margin: "32px auto 0",
          paddingTop: "20px",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            color: "rgba(0,0,0,0.35)",
          }}
        >
          © {new Date().getFullYear()} RapidFix. All rights reserved.
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            color: "rgba(0,0,0,0.35)",
          }}
        >
          Designed with <span style={{ color: "#e8092e" }}>♥</span> for auto enthusiasts
        </p>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 30px !important;
          }
          .footer-brand {
            grid-column: 1 / -1 !important;
          }
        }
        @media (max-width: 768px) {
          .footer-parallax {
            padding: 40px 16px 20px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .footer-brand {
            grid-column: auto !important;
            padding-bottom: 28px !important;
            margin-bottom: 8px !important;
            border-bottom: 1px solid rgba(0,0,0,0.06) !important;
          }
          .footer-brand p {
            font-size: 13px !important;
            line-height: 1.6 !important;
          }
          .footer-mobile-cta {
            display: flex !important;
            gap: 12px !important;
            margin-top: 20px !important;
          }
          .footer-mobile-cta a {
            flex: 1 !important;
          }
          .footer-link-col {
            border-bottom: 1px solid rgba(0,0,0,0.06) !important;
            padding: 14px 0 !important;
          }
          .footer-link-title {
            margin: 0 !important;
            padding: 4px 0 !important;
            font-size: 13px !important;
            user-select: none !important;
          }
          .footer-chevron {
            display: inline-block !important;
          }
          .footer-chevron-open {
            transform: rotate(180deg) !important;
          }
          .footer-link-list {
            max-height: 0 !important;
            overflow: hidden !important;
            transition: max-height 0.35s ease, gap 0.35s ease, margin 0.35s ease !important;
            gap: 0 !important;
            margin: 0 !important;
          }
          .footer-link-list-open {
            max-height: 300px !important;
            gap: 10px !important;
            margin: 12px 0 4px !important;
          }
          .footer-contact-bar {
            flex-direction: column !important;
            gap: 14px !important;
            margin: 28px auto 0 !important;
            padding-top: 24px !important;
          }
          .footer-contact-item {
            font-size: 12px !important;
            gap: 12px !important;
            padding: 10px 14px !important;
            border-radius: 10px !important;
            background: rgba(232,9,46,0.03) !important;
            border: 1px solid rgba(232,9,46,0.06) !important;
          }
          .footer-contact-item i {
            font-size: 13px !important;
            width: 18px !important;
            text-align: center !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            text-align: center !important;
            gap: 8px !important;
            margin: 24px auto 0 !important;
          }
          .footer-bottom-bar p {
            font-size: 11px !important;
          }
        }
        @media (min-width: 769px) {
          .footer-chevron {
            display: none !important;
          }
          .footer-link-list {
            max-height: none !important;
          }
        }
      `}</style>
    </footer>
  );
}
