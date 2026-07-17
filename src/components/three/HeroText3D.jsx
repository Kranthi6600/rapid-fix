"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const ALL_WORDS = [...SENTENCE_1, ...SENTENCE_2];

export default function HeroText3D({ scrollTriggerRef }) {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);
  const dividerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Make container visible (inline opacity:0 prevents FOUC)
      gsap.set(containerRef.current, { opacity: 1 });

      // Set initial state — words hidden, pushed down, blurred
      gsap.set(wordsRef.current, {
        opacity: 0,
        y: 60,
        filter: "blur(12px)",
        scale: 0.92,
      });
      gsap.set(dividerRef.current, { opacity: 0, scaleX: 0 });

      // Reveal: 0% → 18.75% of scroll (1.5 screens of 800vh)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollTriggerRef?.current || containerRef.current,
          start: "top top",
          end: "18.75% top",
          scrub: 0.8,
        },
      });

      tl.to(wordsRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        stagger: 0.04,
        ease: "power3.out",
      })
        .to(
          dividerRef.current,
          { opacity: 1, scaleX: 1, ease: "power2.inOut" },
          "-=0.5"
        );

      // Fade out: 25% → 37.5% of scroll (1 screen)
      const fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollTriggerRef?.current || containerRef.current,
          start: "25% top",
          end: "37.5% top",
          scrub: 0.6,
        },
      });

      fadeTl
        .to(dividerRef.current, {
          opacity: 0,
          scaleX: 0,
          ease: "power2.in",
        })
        .to(wordsRef.current, {
          opacity: 0,
          y: -40,
          filter: "blur(8px)",
          stagger: 0.02,
          ease: "power2.in",
        }, "-=0.3")
        .to(containerRef.current, {
          autoAlpha: 0,
          duration: 0.2,
          ease: "none",
        });

      // Subtle parallax on the whole container
      gsap.to(containerRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: scrollTriggerRef?.current || containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
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
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5,
        pointerEvents: "none",
        padding: "0 8%",
        opacity: 0,
      }}
    >
      {/* Vignette backdrop for text legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, transparent 80%)",
          zIndex: -1,
        }}
      />

      <div
        style={{
          maxWidth: "680px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Accent eyebrow */}
        <div
          ref={(el) => (wordsRef.current[ALL_WORDS.length] = el)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
            opacity: 0,
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
        </div>

        {/* Sentence 1 */}
        <p
          style={{
            margin: 0,
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(1.1rem, 2.6vw, 1.8rem)",
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: "0.1px",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.85)",
            textShadow:
              "0 2px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.5), 0 0 80px rgba(0,0,0,0.3)",
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
              ref={(el) => (wordsRef.current[i] = el)}
              style={{
                display: "inline-block",
                willChange: "transform, opacity, filter",
                opacity: 0,
                color: word.accent
                  ? "transparent"
                  : "rgba(255,255,255,0.85)",
                background: word.accent
                  ? "linear-gradient(135deg, #e8092e 0%, #ff4d6d 100%)"
                  : "none",
                WebkitBackgroundClip: word.accent ? "text" : "unset",
                WebkitTextFillColor: word.accent ? "transparent" : "unset",
                backgroundClip: word.accent ? "text" : "unset",
                fontWeight: word.accent ? 900 : 500,
                filter: word.accent
                  ? "drop-shadow(0 0 20px rgba(232,9,46,1)) drop-shadow(0 0 40px rgba(232,9,46,0.6)) drop-shadow(0 0 60px rgba(232,9,46,0.3)) drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
                  : "drop-shadow(0 2px 8px rgba(0,0,0,0.6))",
                transition: "filter 0.3s ease",
              }}
            >
              {word.text}
            </span>
          ))}
        </p>

        {/* Divider */}
        <div
          ref={dividerRef}
          style={{
            width: "48px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(232,9,46,0.5), transparent)",
            margin: "0 auto 20px",
            borderRadius: "2px",
            boxShadow: "0 0 12px rgba(232,9,46,0.3)",
            opacity: 0,
          }}
        />

        {/* Sentence 2 — bolder, punchier */}
        <p
          style={{
            margin: 0,
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(1.3rem, 3vw, 2.2rem)",
            fontWeight: 700,
            lineHeight: 1.4,
            letterSpacing: "-0.3px",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.95)",
            textShadow:
              "0 2px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.5), 0 0 80px rgba(0,0,0,0.3)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.15em 0.3em",
          }}
        >
          {SENTENCE_2.map((word, i) => (
            <span
              key={i}
              ref={(el) => (wordsRef.current[SENTENCE_1.length + i] = el)}
              style={{
                display: "inline-block",
                willChange: "transform, opacity, filter",
                opacity: 0,
                color: word.accent
                  ? "transparent"
                  : "rgba(255,255,255,0.95)",
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
                  ? "drop-shadow(0 0 24px rgba(232,9,46,1)) drop-shadow(0 0 48px rgba(232,9,46,0.6)) drop-shadow(0 0 72px rgba(232,9,46,0.3)) drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
                  : "drop-shadow(0 2px 8px rgba(0,0,0,0.6))",
                transition: "filter 0.3s ease",
              }}
            >
              {word.text}
            </span>
          ))}
        </p>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.4); }
          }
        `}</style>
      </div>
    </div>
  );
}
