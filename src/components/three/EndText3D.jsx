"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function EndText3D({ scrollTriggerRef }) {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Make container visible (inline opacity:0 prevents FOUC)
      gsap.set(containerRef.current, { opacity: 1 });

      // Initial state
      gsap.set([badgeRef.current, titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
      });
      gsap.set(lineRef.current, { opacity: 0, scaleX: 0 });

      // Reveal starts at 75% scroll (frame 60) through 90%
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollTriggerRef?.current || containerRef.current,
          start: "75% top",
          end: "90% top",
          scrub: 0.8,
        },
      });

      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        ease: "power3.out",
      })
        .to(
          lineRef.current,
          { opacity: 1, scaleX: 1, ease: "power2.inOut", duration: 0.6 },
          "-=0.3"
        )
        .to(
          titleRef.current,
          { opacity: 1, y: 0, filter: "blur(0px)", ease: "power3.out" },
          "-=0.4"
        )
        .to(
          subtitleRef.current,
          { opacity: 1, y: 0, filter: "blur(0px)", ease: "power3.out" },
          "-=0.5"
        );

      // Subtle floating drift after reveal
      gsap.to(containerRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: scrollTriggerRef?.current || containerRef.current,
          start: "85% top",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [scrollTriggerRef]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5,
        pointerEvents: "none",
        padding: "0 8%",
        opacity: 0,
      }}
    >
      {/* Badge */}
      <div
        ref={badgeRef}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 16px",
          borderRadius: "100px",
          background: "rgba(232,9,46,0.12)",
          border: "1px solid rgba(232,9,46,0.3)",
          marginBottom: "24px",
          opacity: 0,
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#e8092e",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "11px",
            fontWeight: 700,
            color: "#e8092e",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Precision Diagnostics
        </span>
      </div>

      {/* Reveal line */}
      <div
        ref={lineRef}
        style={{
          width: "60px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #e8092e, transparent)",
          marginBottom: "28px",
          transformOrigin: "center",
          opacity: 0,
        }}
      />

      {/* Title */}
      <h2
        ref={titleRef}
        style={{
          margin: 0,
          fontFamily: '"Playfair Display", serif',
          fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
          fontWeight: 900,
          lineHeight: 1.15,
          letterSpacing: "-1px",
          textAlign: "center",
          color: "#f5f5f7",
          textShadow: "0 4px 30px rgba(0,0,0,0.8)",
          maxWidth: "800px",
          opacity: 0,
          fontStyle: "italic",
        }}
      >
        Where Engineering Meets{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #e8092e 0%, #ff4d6d 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Excellence
        </span>
      </h2>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        style={{
          margin: "20px 0 0",
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
          fontWeight: 400,
          lineHeight: 1.6,
          textAlign: "center",
          color: "rgba(255,255,255,0.55)",
          maxWidth: "520px",
          letterSpacing: "0.3px",
          opacity: 0,
          fontStyle: "italic",
        }}
      >
        Every component inspected. Every system calibrated. Every vehicle
        perfected.
      </p>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}
