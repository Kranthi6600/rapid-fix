"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useTransform, motion } from "framer-motion";
import CountUp from "react-countup";

export function FloatingWrench({ scrollYProgress }) {
  const gltf = useGLTF("/assets/glb/metal-wrench-tool/source/Metal Wrench Tool_.glb");
  const meshRef = useRef();

  const posY = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [2, 1, 3, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4]);
  const posX = useTransform(scrollYProgress, [0, 0.5, 1], [4, 3, 5]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = posY.get() + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      meshRef.current.position.x = posX.get();
      meshRef.current.rotation.z = rotateZ.get();
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

const counters = [
  { end: 2, suffix: "k+", label: "Winning Award" },
  { end: 8, suffix: "k+", label: "Happy Clients" },
  { end: 200, suffix: "k+", label: "Team Members" },
  { end: 9, suffix: "k+", label: "Projects Done" },
];

const Counter3D = ({ scrollYProgress, skipModel }) => {
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
      <div style={{ width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <span
            style={{
              color: "#e8092e",
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Our Achievements
          </span>
          <h2
            style={{
              fontFamily: '"Yantramanav", sans-serif',
              fontSize: "2.8rem",
              fontWeight: 800,
              marginTop: "12px",
              background: "linear-gradient(135deg, #1a1a1a 0%, rgba(26,26,26,0.5) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Numbers That Speak
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {counters.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateX: -90, y: 60 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "16px",
                padding: "32px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: '"Yantramanav", sans-serif',
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "#e8092e",
                  marginBottom: "8px",
                }}
              >
                <CountUp end={c.end} duration={2} />
                {c.suffix}
              </div>
              <div
                style={{
                  color: "rgba(0,0,0,0.55)",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {c.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter3D;
