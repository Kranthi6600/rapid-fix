"use client";

import { useRef, useEffect, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, Float } from "@react-three/drei";

const contactMethods = [
  {
    icon: "fa-map-marker-alt",
    label: "Visit Us",
    value: "123 Auto Repair Blvd, Springfield, ST 12345",
    href: "https://maps.google.com",
  },
  {
    icon: "fa-phone-alt",
    label: "Call Us",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: "fa-envelope",
    label: "Email Us",
    value: "support@rapidfix.com",
    href: "mailto:support@rapidfix.com",
  },
  {
    icon: "fa-clock",
    label: "Working Hours",
    value: "Mon - Sat: 8:00 AM - 6:00 PM",
    href: null,
  },
];

const socialLinks = [
  { icon: "fa-facebook-f", href: "#" },
  { icon: "fa-twitter", href: "#" },
  { icon: "fa-instagram", href: "#" },
  { icon: "fa-youtube", href: "#" },
];

function TruckModel() {
  const gltf = useGLTF("/assets/glb/truck.glb");
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={[0.35, 0.35, 0.35]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export default function ContactParallax() {
  const sectionRef = useRef(null);
  const headingEyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const modelRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(sectionRef.current, { opacity: 1 });

      // Heading reveal
      gsap.set([headingEyebrowRef.current, headingRef.current], {
        opacity: 0,
        y: 30,
        filter: "blur(8px)",
      });
      gsap.to([headingEyebrowRef.current, headingRef.current], {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Info cards stagger in
      const infoCards = infoRef.current?.querySelectorAll(".contact-info-card");
      if (infoCards) {
        gsap.set(infoCards, { opacity: 0, y: 40, filter: "blur(6px)" });
        gsap.to(infoCards, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // 3D Model card reveal
      if (modelRef.current) {
        gsap.set(modelRef.current, { opacity: 0, x: 40, filter: "blur(8px)" });
        gsap.to(modelRef.current, {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: modelRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Map reveal
      if (mapRef.current) {
        gsap.set(mapRef.current, { opacity: 0, scale: 0.95 });
        gsap.to(mapRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        opacity: 0,
        background: "linear-gradient(180deg, #f5f5f7 0%, #e8e8ec 50%, #f5f5f7 100%)",
        color: "#1a1a1a",
        fontFamily: '"Roboto", sans-serif',
        padding: "60px 8% 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "-8%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,9,46,0.04), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-8%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,9,46,0.03), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 50px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          ref={headingEyebrowRef}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#e8092e",
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "3px",
            marginBottom: "16px",
            padding: "6px 16px",
            borderRadius: "100px",
            background: "rgba(232,9,46,0.06)",
            border: "1px solid rgba(232,9,46,0.12)",
            boxShadow: "0 2px 12px rgba(232,9,46,0.08)",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#e8092e",
              boxShadow: "0 0 8px rgba(232,9,46,0.6)",
            }}
          />
          Get In Touch
        </span>
        <h2
          ref={headingRef}
          style={{
            margin: 0,
            fontFamily: '"Yantramanav", sans-serif',
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.5px",
            background: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Let's{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #e8092e 0%, #ff4d6d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Connect
          </span>
        </h2>
        <p
          style={{
            margin: "16px 0 0",
            fontSize: "15px",
            color: "rgba(0,0,0,0.45)",
            lineHeight: 1.6,
            maxWidth: "480px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Have a question or need a quote? Reach out and we'll get back to you within 24 hours.
        </p>
        <div
          style={{
            width: "60px",
            height: "3px",
            borderRadius: "3px",
            background: "linear-gradient(90deg, #e8092e, #ff4d6d)",
            margin: "24px auto 0",
          }}
        />
      </div>

      {/* Main content grid */}
      <div
        className="contact-main-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "40px",
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: Contact info cards */}
        <div
          ref={infoRef}
        >
          {contactMethods.map((method, i) => (
            <a
              key={i}
              href={method.href || undefined}
              className="contact-info-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "20px 22px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,0,0,0.06)",
                marginBottom: "14px",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease, border-color 0.35s ease",
                cursor: method.href ? "pointer" : "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                if (method.href) {
                  e.currentTarget.style.transform = "translateX(6px)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(232,9,46,0.10), 0 4px 12px rgba(0,0,0,0.04)";
                  e.currentTarget.style.borderColor = "rgba(232,9,46,0.15)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, rgba(232,9,46,0.12), rgba(232,9,46,0.04))",
                  border: "1px solid rgba(232,9,46,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(232,9,46,0.08)",
                }}
              >
                <i
                  className={`fas ${method.icon}`}
                  style={{ color: "#e8092e", fontSize: "18px" }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    color: "rgba(0,0,0,0.4)",
                    marginBottom: "4px",
                  }}
                >
                  {method.label}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.8)",
                    lineHeight: 1.4,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {method.value}
                </div>
              </div>
              {method.href && (
                <i
                  className="fas fa-arrow-right"
                  style={{
                    color: "rgba(232,9,46,0.3)",
                    fontSize: "12px",
                    flexShrink: 0,
                  }}
                />
              )}
            </a>
          ))}

          {/* Social links */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "20px",
              padding: "20px 22px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(0,0,0,0.06)",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "rgba(0,0,0,0.4)",
                marginRight: "4px",
              }}
            >
              Follow
            </span>
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                style={{
                  width: "40px",
                  height: "40px",
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
                  e.currentTarget.style.background = "rgba(232,9,46,0.12)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(232,9,46,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(232,9,46,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <i
                  className={`fab ${social.icon}`}
                  style={{ color: "#e8092e", fontSize: "16px" }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right: 3D Model viewer */}
        <div
          ref={modelRef}
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "420px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* 3D Canvas */}
          <div style={{ flex: 1, position: "relative", minHeight: "360px" }}>
            <Canvas
              camera={{ position: [3, 1.5, 5], fov: 45 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
              style={{ background: "transparent" }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 8, 5]} intensity={1.2} />
              <spotLight
                position={[8, 6, 8]}
                angle={0.3}
                intensity={0.6}
                penumbra={1}
                color="#e8092e"
              />
              <spotLight
                position={[-8, 4, -4]}
                angle={0.3}
                intensity={0.3}
                penumbra={1}
                color="#0066ff"
              />
              <Suspense fallback={null}>
                <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
                  <TruckModel />
                </Float>
                <Environment preset="night" />
              </Suspense>
              <ContactShadows
                position={[0, -1.2, 0]}
                opacity={0.3}
                scale={8}
                blur={6}
                far={4}
                color="#000000"
              />
            </Canvas>
          </div>

          {/* Caption bar */}
          <div
            style={{
              padding: "16px 24px",
              borderTop: "1px solid rgba(0,0,0,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: '"Yantramanav", sans-serif',
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  letterSpacing: "-0.2px",
                }}
              >
                Your Vehicle, Our Expertise
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(0,0,0,0.45)",
                  marginTop: "2px",
                }}
              >
                Drag to explore the model
              </div>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "100px",
                background: "rgba(232,9,46,0.06)",
                border: "1px solid rgba(232,9,46,0.12)",
                color: "#e8092e",
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              <i className="fas fa-car" style={{ fontSize: "14px" }} />
              3D Preview
            </div>
          </div>
        </div>
      </div>

      {/* Map strip */}
      <div
        ref={mapRef}
        style={{
          maxWidth: "1100px",
          margin: "40px auto 0",
          borderRadius: "20px",
          overflow: "hidden",
          height: "200px",
          background: "rgba(255,255,255,0.6)",
          border: "1px solid rgba(0,0,0,0.06)",
          position: "relative",
          zIndex: 1,
          boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
        }}
      >
        <iframe
          src="https://maps.google.com/maps?q=123%20Auto%20Repair%20Blvd%20Springfield&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: "none", filter: "grayscale(0.3) contrast(1.1)" }}
          loading="lazy"
          title="Our Location"
        />
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .contact-main-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
