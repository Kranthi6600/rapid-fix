"use client";
import Link from "next/link";

const Footer3D = () => {
  return (
    <footer
      style={{
        padding: "80px 8% 40px",
        borderTop: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 2fr",
          gap: "40px",
          marginBottom: "40px",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: '"Yantramanav", sans-serif',
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "16px",
            }}
          >
            About Us
          </h3>
          <p
            style={{
              color: "rgba(0,0,0,0.5)",
              fontSize: "14px",
              lineHeight: 1.7,
              marginBottom: "20px",
            }}
          >
            Expert auto and diesel repair you can trust. Fast turnaround, honest
            pricing, and quality workmanship — every time.
          </p>
          <Link
            href="https://www.instagram.com/p/DaEkC23v6Tq/?igsh=bXc2enk0bnVxcWJm"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(232,9,46,0.12)",
              color: "#e8092e",
              fontSize: "18px",
              textDecoration: "none",
            }}
          >
            <i className="fab fa-instagram" />
          </Link>
        </div>

        <div>
          <h3
            style={{
              fontFamily: '"Yantramanav", sans-serif',
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "16px",
            }}
          >
            Company
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { label: "About", href: "/about" },
              { label: "FAQ", href: "/faq" },
            ].map((l) => (
              <li key={l.label} style={{ marginBottom: "10px" }}>
                <Link
                  href={l.href}
                  style={{
                    color: "rgba(0,0,0,0.5)",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            style={{
              fontFamily: '"Yantramanav", sans-serif',
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "16px",
            }}
          >
            Our Services
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Auto Repair", "Diesel Repair", "Diagnostics", "Maintenance", "Fleet Services"].map(
              (s) => (
                <li key={s} style={{ marginBottom: "10px" }}>
                  <Link
                    href="/services"
                    style={{
                      color: "rgba(0,0,0,0.5)",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    {s}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3
            style={{
              fontFamily: '"Yantramanav", sans-serif',
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "16px",
            }}
          >
            Contact
          </h3>
          <div style={{ marginBottom: "16px" }}>
            <div style={{ display: "flex", gap: "12px" }}>
              <i className="fas fa-map-marker-alt" style={{ color: "#e8092e", fontSize: "16px", marginTop: "2px" }} />
              <div>
                <div style={{ fontSize: "12px", color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>
                  Address
                </div>
                <div style={{ fontSize: "14px", color: "rgba(0,0,0,0.75)" }}>
                  112 Sinnott Rd, Scarborough, ON M1L 4S6
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <div style={{ display: "flex", gap: "12px" }}>
              <i className="fas fa-phone-alt" style={{ color: "#e8092e", fontSize: "16px", marginTop: "2px" }} />
              <div>
                <div style={{ fontSize: "12px", color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>
                  Phone
                </div>
                <Link
                  href="tel:4378364848"
                  style={{ fontSize: "14px", color: "rgba(0,0,0,0.75)", textDecoration: "none" }}
                >
                  (437) 836-4848
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: "12px" }}>
              <i className="fas fa-clock" style={{ color: "#e8092e", fontSize: "16px", marginTop: "2px" }} />
              <div>
                <div style={{ fontSize: "12px", color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>
                  Hours
                </div>
                <div style={{ fontSize: "14px", color: "rgba(0,0,0,0.75)" }}>
                  Mon – Fri: 8:00 AM – 6:00 PM
                  <br />
                  Sat - Sun: Closed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          paddingTop: "30px",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          color: "rgba(0,0,0,0.4)",
          fontSize: "13px",
        }}
      >
        © <Link href="/" style={{ color: "rgba(0,0,0,0.6)", textDecoration: "none" }}>RapidFix</Link>{" "}
        {new Date().getFullYear()} | All Rights Reserved | Developed by{" "}
        <Link
          href="https://wehoware.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(0,0,0,0.6)", textDecoration: "none" }}
        >
          Wehoware
        </Link>
      </div>
    </footer>
  );
};

export default Footer3D;
