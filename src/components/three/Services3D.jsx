"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useTransform, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useServices } from "@/context/ServicesContext";

export function ToyotaModel({ scrollYProgress }) {
  const gltf = useGLTF("/assets/glb/toyota-offroad/source/toyota_4runner_mk4_stock.glb");
  const meshRef = useRef();

  const rotateY = useTransform(scrollYProgress, [0.5, 0.8], [0, -Math.PI * 0.8]);
  const posX = useTransform(scrollYProgress, [0.5, 0.8, 1], [-2, 0, 2]);
  const posZ = useTransform(scrollYProgress, [0.5, 0.8, 1], [-1, 1, -2]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotateY.get();
      meshRef.current.position.x = posX.get();
      meshRef.current.position.z = posZ.get();
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
    }
  });

  return (
    <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

const bgImages = [
  "/assets/img/services/service-8.jpg",
  "/assets/img/services/service-9.jpg",
  "/assets/img/services/service-10.jpg",
];

const iconList = [
  "/assets/img/icon/service-icon_1-1.svg",
  "/assets/img/icon/service-icon_1-2.svg",
  "/assets/img/icon/service-icon_1-3.svg",
];

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "");
};

const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

const Services3D = ({ scrollYProgress, skipModel }) => {
  const router = useRouter();
  const { services: allServices, loading } = useServices();
  const services = allServices.filter((s) => s.slug).slice(0, 3);

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
          <h2
            style={{
              fontFamily: '"Yantramanav", sans-serif',
              fontSize: "2.8rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #1a1a1a 0%, rgba(26,26,26,0.5) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Expert Auto &amp; Diesel Repair
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {loading ? (
            <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "40px" }}>
              <div style={{ color: "rgba(0,0,0,0.5)" }}>Loading services...</div>
            </div>
          ) : (
            services.map((service, index) => (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, rotateY: -90, y: 60 }}
                whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => service.slug && router.push(`/services/${service.slug}`)}
                style={{
                  background: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "16px",
                  padding: "32px",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    background: "rgba(232,9,46,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={iconList[index % iconList.length]}
                    alt={service.title}
                    style={{ width: "28px", height: "28px" }}
                  />
                </div>
                <h4
                  style={{
                    fontFamily: '"Yantramanav", sans-serif',
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    marginBottom: "12px",
                  }}
                >
                  {service.title}
                </h4>
                <p
                  style={{
                    color: "rgba(0,0,0,0.55)",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {truncateText(stripHtml(service.description), 120)}
                </p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Services3D;
