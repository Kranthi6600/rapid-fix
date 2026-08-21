"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SENTENCE_1 = [
  { text: "Comprehensive", accent: false },
  { text: "fleet", accent: true },
  { text: "maintenance", accent: false },
  { text: "&", accent: false },
  { text: "diesel", accent: true },
  { text: "repair", accent: false },
  { text: "solutions", accent: false },
  { text: "tailored", accent: false },
  { text: "for", accent: false },
  { text: "businesses.", accent: false },
];

const SENTENCE_2 = [
  { text: "Minimize", accent: false },
  { text: "downtime.", accent: true },
  { text: "Maximize", accent: false },
  { text: "performance.", accent: true },
];

export default function MobileHero3D() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 8% 60px",
        position: "relative",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {/* Decorative background blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,9,46,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-10%",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,9,46,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          maxWidth: "680px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Accent eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
            padding: "6px 18px",
            borderRadius: "100px",
            background: "rgba(232,9,46,0.08)",
            border: "1px solid rgba(232,9,46,0.2)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#e8092e",
              boxShadow: "0 0 8px rgba(232,9,46,0.8)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "10px",
              fontWeight: 700,
              color: "#e8092e",
              textTransform: "uppercase",
              letterSpacing: "3px",
              textShadow: "0 0 12px rgba(232,9,46,0.5)",
            }}
          >
            RapidFix Auto
          </span>
        </motion.div>

        {/* Sentence 1 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            margin: 0,
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(1.05rem, 5vw, 1.4rem)",
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: "0.1px",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.85)",
            textShadow:
              "0 2px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.5)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.15em 0.28em",
            marginBottom: "20px",
          }}
        >
          {SENTENCE_1.map((word, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                color: word.accent ? "transparent" : "rgba(255,255,255,0.85)",
                background: word.accent
                  ? "linear-gradient(135deg, #e8092e 0%, #ff4d6d 100%)"
                  : "none",
                WebkitBackgroundClip: word.accent ? "text" : "unset",
                WebkitTextFillColor: word.accent ? "transparent" : "unset",
                backgroundClip: word.accent ? "text" : "unset",
                fontWeight: word.accent ? 900 : 500,
                filter: word.accent
                  ? "drop-shadow(0 0 20px rgba(232,9,46,1)) drop-shadow(0 0 40px rgba(232,9,46,0.6))"
                  : "drop-shadow(0 2px 8px rgba(0,0,0,0.6))",
              }}
            >
              {word.text}
            </span>
          ))}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            width: "48px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(232,9,46,0.5), transparent)",
            margin: "0 auto 20px",
            borderRadius: "2px",
            boxShadow: "0 0 12px rgba(232,9,46,0.3)",
          }}
        />

        {/* Sentence 2 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            margin: 0,
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(1.25rem, 6vw, 1.8rem)",
            fontWeight: 700,
            lineHeight: 1.4,
            letterSpacing: "-0.3px",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.95)",
            textShadow:
              "0 2px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.5)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.15em 0.3em",
            marginBottom: "36px",
          }}
        >
          {SENTENCE_2.map((word, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                color: word.accent ? "transparent" : "rgba(255,255,255,0.95)",
                background: word.accent
                  ? "linear-gradient(135deg, #e8092e 0%, #ff4d6d 100%)"
                  : "none",
                WebkitBackgroundClip: word.accent ? "text" : "unset",
                WebkitTextFillColor: word.accent ? "transparent" : "unset",
                backgroundClip: word.accent ? "text" : "unset",
                fontWeight: word.accent ? 900 : 600,
                textTransform: word.accent ? "uppercase" : "none",
                letterSpacing: word.accent ? "0.5px" : "unset",
                filter: word.accent
                  ? "drop-shadow(0 0 24px rgba(232,9,46,1)) drop-shadow(0 0 48px rgba(232,9,46,0.6))"
                  : "drop-shadow(0 2px 8px rgba(0,0,0,0.6))",
              }}
            >
              {word.text}
            </span>
          ))}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(135deg, #e8092e 0%, #c50724 100%)",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "12px",
              textDecoration: "none",
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: "15px",
              boxShadow: "0 8px 24px rgba(232,9,46,0.3)",
              letterSpacing: "0.3px",
            }}
          >
            Learn More <i className="fas fa-arrow-right" />
          </Link>

          <a
            href="tel:4378364848"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: '"Playfair Display", serif',
              fontSize: "16px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.9)",
              textDecoration: "none",
              fontStyle: "italic",
            }}
          >
            <span
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(232,9,46,0.12)",
                border: "1px solid rgba(232,9,46,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#e8092e",
                fontSize: "16px",
              }}
            >
              <i className="fas fa-phone" />
            </span>
            (437) 836-4848
          </a>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
}
