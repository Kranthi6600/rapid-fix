"use client";
import { motion } from "framer-motion";

const CTA3D = () => {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "120px 8%",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          background: "rgba(232,9,46,0.08)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(232,9,46,0.2)",
          borderRadius: "24px",
          padding: "60px 40px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: '"Yantramanav", sans-serif',
            fontSize: "2.5rem",
            fontWeight: 800,
            marginBottom: "16px",
            color: "#1a1a1a",
          }}
        >
          Subscribe To Stay Connected
        </h2>
        <p
          style={{
            color: "rgba(0,0,0,0.55)",
            fontSize: "1.1rem",
            marginBottom: "32px",
          }}
        >
          Get the latest tips, offers, and auto repair insights delivered to your inbox.
        </p>
        <form
          style={{
            display: "flex",
            gap: "12px",
            maxWidth: "500px",
            margin: "0 auto",
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your Email Address"
            required
            style={{
              flex: 1,
              padding: "14px 20px",
              borderRadius: "8px",
              border: "1px solid rgba(0,0,0,0.12)",
              background: "rgba(255,255,255,0.6)",
              color: "#1a1a1a",
              fontSize: "15px",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              background: "#e8092e",
              color: "#fff",
              border: "none",
              padding: "14px 28px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "15px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            SUBSCRIBE
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default CTA3D;
