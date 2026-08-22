"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Navbar3D.module.scss";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function KineticText({ text }) {
  return (
    <span className={styles.linkText}>
      {text.split("").map((char, i) =>
        char === " " ? (
          <span key={i} className={styles.charSpace} />
        ) : (
          <span key={i} className={styles.char}>
            {char}
          </span>
        )
      )}
    </span>
  );
}

export default function Navbar3D() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <div className={`${styles.wrapper} ${scrolled ? styles.scrolled : ""}`}>
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
          <Link href="/" className={styles.logo}>
            <img src="/assets/logo1.png" alt="RapidFix" />
          </Link>

          <div className={styles.links}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.linkItem} ${
                  pathname === link.href ? styles.active : ""
                }`}
              >
                <KineticText text={link.label} />
              </Link>
            ))}
          </div>

          <div className={styles.cta}>
            <a href="tel:4378364848" className={styles.phoneLink}>
              <span className={styles.phoneIcon}>
                <i className="fas fa-phone" />
              </span>
              (437) 836-4848
            </a>

            <a
              href="tel:4378364848"
              className={styles.callBtn}
            >
              <i className="fas fa-phone" /> Call Now
            </a>

            <a
              href="https://app.shopmonkey.cloud/public/quote-request/f3173cde-af0b-453f-93bd-1dbf406b64d0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.quoteBtn}
            >
              Request a Quote
            </a>

            <button
              className={styles.mobileToggle}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"}`} />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <a
              href="tel:4378364848"
              className={styles.mobileCallBtn}
            >
              <i className="fas fa-phone" /> Call Now
            </a>
            <a
              href="https://app.shopmonkey.cloud/public/quote-request/f3173cde-af0b-453f-93bd-1dbf406b64d0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileQuoteBtn}
            >
              Request a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
