"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useTransform, motion } from "framer-motion";
import Link from "next/link";

export function TruckModel({ scrollYProgress }) {
  const gltf = useGLTF("/assets/glb/truck.glb");
  const meshRef = useRef();

  const rotateY = useTransform(scrollYProgress, [0.35, 0.65], [0, Math.PI * 0.5]);
  const posX = useTransform(scrollYProgress, [0.35, 0.65, 1], [3, 2, 4]);
  const posZ = useTransform(scrollYProgress, [0.35, 0.65, 1], [-2, 0, -3]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotateY.get();
      meshRef.current.position.x = posX.get();
      meshRef.current.position.z = posZ.get();
      meshRef.current.position.y = -0.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={[0.6, 0.6, 0.6]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

const Truck3D = ({ scrollYProgress, skipModel }) => {
  const textX = useTransform(scrollYProgress, [0.4, 0.55], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const imgX = useTransform(scrollYProgress, [0.4, 0.55], [-60, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 8%",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          width: "100%",
          direction: "rtl",
        }}
      >
        <motion.div style={{ opacity: imgOpacity, x: imgX, direction: "ltr" }}>
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/assets/img/services/service%202.jpeg"
              alt="RapidFix Truck Service"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </motion.div>

        <motion.div style={{ opacity: textOpacity, x: textX, direction: "ltr" }}>
          <span
            style={{
              color: "#e8092e",
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "2px",
              display: "block",
              marginBottom: "16px",
            }}
          >
            Diesel &amp; Truck Specialists
          </span>
          <h2
            style={{
              fontFamily: '"Yantramanav", sans-serif',
              fontSize: "2.8rem",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "20px",
              background: "linear-gradient(135deg, #1a1a1a 0%, rgba(26,26,26,0.6) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Heavy-Duty Truck Repair &amp; Fleet Maintenance
          </h2>
          <p
            style={{
              color: "rgba(0,0,0,0.65)",
              fontSize: "1.1rem",
              lineHeight: 1.75,
              maxWidth: "560px",
              marginBottom: "24px",
            }}
          >
            From diesel engine overhauls to fleet maintenance programs, we keep
            your trucks and commercial vehicles running at peak performance. Our
            certified diesel technicians handle everything from routine servicing
            to complex transmission and brake repairs.
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "24px 0",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            {[
              "Diesel Engine Diagnostics & Repair",
              "Fleet Maintenance Programs",
              "Brake & Suspension Overhauls",
              "Transmission Service & Repair",
            ].map((s, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "rgba(0,0,0,0.8)",
                  fontSize: "15px",
                }}
              >
                <i className="fas fa-check-circle" style={{ color: "#e8092e" }} />
                {s}
              </li>
            ))}
          </ul>

          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#e8092e",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
              marginTop: "16px",
              transition: "all 0.3s ease",
            }}
          >
            Explore Truck Services <i className="fas fa-arrow-right" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Truck3D;
