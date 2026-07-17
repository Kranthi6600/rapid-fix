"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useTransform, motion } from "framer-motion";
import Link from "next/link";

export function SuvModel({ scrollYProgress }) {
  const gltf = useGLTF("/assets/glb/lowpoly_generic_suv.glb");
  const meshRef = useRef();

  const rotateY = useTransform(scrollYProgress, [0.2, 0.5], [0, Math.PI]);
  const posX = useTransform(scrollYProgress, [0.2, 0.5, 1], [-4, -2, -3]);
  const posZ = useTransform(scrollYProgress, [0.2, 0.5, 1], [2, 0, -2]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotateY.get() + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.x = posX.get();
      meshRef.current.position.z = posZ.get();
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} scale={[0.8, 0.8, 0.8]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

const services = [
  ["Brake Repair & Service", "Engine Diagnostics", "Diesel Engine Repair", "Fleet Maintenance"],
  ["Safety Inspections (SSC)", "Oil Change Service", "Transmission Service", "24/7 Emergency Service"],
];

const About3D = ({ scrollYProgress, skipModel }) => {
  const imageX = useTransform(scrollYProgress, [0.25, 0.45], [60, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.25, 0.45], [-60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);

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
        }}
      >
        <motion.div style={{ opacity: imageOpacity, x: imageX }}>
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/assets/img/hero/banner7.jpeg"
              alt="RapidFix"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </motion.div>

        <motion.div style={{ opacity: textOpacity, x: textX }}>
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
            Know About Us
          </span>
          <h2
            style={{
              fontFamily: '"Yantramanav", sans-serif',
              fontSize: "3rem",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "20px",
              background: "linear-gradient(135deg, #1a1a1a 0%, rgba(26,26,26,0.6) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Expert Auto Repair Services
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
            RapidFix provides comprehensive auto and diesel repair services in
            Scarborough, ON. Our certified technicians deliver fast, honest, and
            affordable service for all your vehicle needs.
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
            {services.flat().map((s, i) => (
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
                <i className="fas fa-check-double" style={{ color: "#e8092e" }} />
                {s}
              </li>
            ))}
          </ul>

          <Link
            href="/about"
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
            Read More <i className="fas fa-arrow-right" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About3D;
