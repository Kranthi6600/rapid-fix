"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useTransform, motion } from "framer-motion";
import Link from "next/link";

export function ScaniaTruck({ scrollYProgress }) {
  const gltf = useGLTF("/assets/glb/scania_truck.glb");
  const meshRef = useRef();

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);
  const posX = useTransform(scrollYProgress, [0, 0.5, 1], [0, -2, 0]);
  const posZ = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 6]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotateY.get();
      meshRef.current.position.x = posX.get();
      meshRef.current.position.z = posZ.get();
    }
  });

  return (
    <mesh ref={meshRef} scale={[1, 1, 1]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

const Hero3D = ({ scrollYProgress, skipModel }) => {
  // Parallax + scroll-driven transforms
  const heroY = useTransform(scrollYProgress, [0, 0.12], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.92]);

  const badgeY = useTransform(scrollYProgress, [0, 0.1], [0, -60]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  const titleY = useTransform(scrollYProgress, [0, 0.1], [0, -80]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.07], [1, 0]);

  const descY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);
  const descOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  const ctaY = useTransform(scrollYProgress, [0, 0.1], [0, -30]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Background decorative blobs parallax
  const blob1Y = useTransform(scrollYProgress, [0, 0.15], [0, 200]);
  const blob2Y = useTransform(scrollYProgress, [0, 0.15], [0, -150]);
  const blob1Scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.3]);
  const blob2Scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.2]);

  // Scroll indicator
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]);
  const indicatorY = useTransform(scrollYProgress, [0, 0.03], [0, 20]);

  // Floating stats card
  const statsY = useTransform(scrollYProgress, [0, 0.12], [0, -200]);
  const statsOpacity = useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0]);

  const stats = [
    { icon: "fas fa-wrench", value: "15+", label: "Years Experience" },
    { icon: "fas fa-truck", value: "2k+", label: "Fleet Serviced" },
    { icon: "fas fa-clock", value: "24/7", label: "Emergency Support" },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 8% 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background blobs */}
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,9,46,0.08) 0%, transparent 70%)",
          y: blob1Y,
          scale: blob1Scale,
          pointerEvents: "none",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "0%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,9,46,0.06) 0%, transparent 70%)",
          y: blob2Y,
          scale: blob2Scale,
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <motion.div
        style={{
          y: heroY,
          opacity: heroOpacity,
          scale: heroScale,
          maxWidth: "640px",
          pointerEvents: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Badge */}
        <motion.div style={{ y: badgeY, opacity: badgeOpacity, marginBottom: "24px" }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "100px",
              background: "rgba(232,9,46,0.08)",
              border: "1px solid rgba(232,9,46,0.15)",
              fontFamily: '"Poppins", sans-serif',
              color: "#e8092e",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#e8092e",
                animation: "pulse 2s infinite",
              }}
            />
            Fleet &amp; Diesel Specialists
          </motion.span>
        </motion.div>

        {/* Title with per-line scroll reveal */}
        <motion.div style={{ y: titleY, opacity: titleOpacity, marginBottom: "24px" }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              margin: 0,
              color: "#1a1a1a",
              letterSpacing: "-1px",
              fontStyle: "italic",
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ display: "block" }}
            >
              Keeping Your Fleet
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              style={{
                display: "block",
                background: "linear-gradient(135deg, #e8092e 0%, #c50724 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              on the Road.
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Description */}
        <motion.div style={{ y: descY, opacity: descOpacity, marginBottom: "36px" }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "1.35rem",
              color: "rgba(0,0,0,0.6)",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "480px",
              fontStyle: "italic",
            }}
          >
            Comprehensive fleet maintenance and diesel repair solutions tailored
            for businesses. Minimize downtime and maximize performance.
          </motion.p>
        </motion.div>

        {/* CTA cluster */}
        <motion.div
          style={{
            y: ctaY,
            opacity: ctaOpacity,
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(135deg, #e8092e 0%, #c50724 100%)",
                color: "#fff",
                padding: "16px 36px",
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
          </motion.div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(232,9,46,0.1)",
                border: "1px solid rgba(232,9,46,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#e8092e",
                fontSize: "18px",
              }}
            >
              <i className="fas fa-phone" />
            </motion.div>
            <div>
              <div
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "12px",
                  color: "rgba(0,0,0,0.45)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: 600,
                }}
              >
                Requesting A Call:
              </div>
              <a
                href="tel:4378364848"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  textDecoration: "none",
                  fontStyle: "italic",
                }}
              >
                (437) 836-4848
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating glass stats card */}
      <motion.div
        style={{
          position: "absolute",
          right: "8%",
          top: "50%",
          y: statsY,
          opacity: statsOpacity,
          zIndex: 2,
          pointerEvents: "auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.7)",
            borderRadius: "20px",
            padding: "32px 28px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
            style={{ display: "flex", alignItems: "center", gap: "16px" }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "rgba(232,9,46,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#e8092e",
                fontSize: "18px",
                flexShrink: 0,
              }}
            >
              <i className={s.icon} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "1.6rem",
                  fontWeight: 900,
                  color: "#1a1a1a",
                  lineHeight: 1,
                  fontStyle: "italic",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "12px",
                  color: "rgba(0,0,0,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginTop: "4px",
                }}
              >
                {s.label}
              </div>
            </div>
          </motion.div>
        ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: indicatorOpacity,
          y: indicatorY,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "rgba(0,0,0,0.4)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "24px",
            height: "40px",
            borderRadius: "12px",
            border: "2px solid rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "4px",
              height: "8px",
              borderRadius: "2px",
              background: "#e8092e",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Pulse keyframe */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
};

export default Hero3D;
