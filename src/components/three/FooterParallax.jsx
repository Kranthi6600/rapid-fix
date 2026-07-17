"use client";

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

  return (
    <footer
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
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Brand column */}
        <div>
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
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4
              style={{
                fontFamily: '"Yantramanav", sans-serif',
                fontSize: "14px",
                fontWeight: 700,
                color: "#1a1a1a",
                margin: "0 0 16px",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              {title}
            </h4>
            <ul
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
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
