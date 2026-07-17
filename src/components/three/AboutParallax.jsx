"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";

const counters = [
  { end: 5, suffix: "k+", label: "Trusted Customers", icon: "fa-users" },
  { end: 15, suffix: "+", label: "Years of Experience", icon: "fa-history" },
  { end: 8, suffix: "k+", label: "Happy Clients", icon: "fa-smile" },
  { end: 9, suffix: "k+", label: "Projects Done", icon: "fa-wrench" },
];

const whyChooseUs = [
  { icon: "fa-shield-alt", title: "Certified Quality", desc: "ASE-certified technicians using OEM-grade parts for every repair." },
  { icon: "fa-clock", title: "Fast Turnaround", desc: "Most repairs completed same-day so you get back on the road quickly." },
  { icon: "fa-tags", title: "Transparent Pricing", desc: "No hidden fees — upfront quotes and detailed breakdowns before any work." },
  { icon: "fa-award", title: "Warranty Backed", desc: "12-month / 12,000-mile warranty on all repairs for peace of mind." },
  { icon: "fa-hand-holding-heart", title: "Customer First", desc: "Honest advice and personalized care for every vehicle that comes in." },
  { icon: "fa-microscope", title: "Advanced Diagnostics", desc: "State-of-the-art equipment to pinpoint issues accurately the first time." },
];

export default function AboutParallax() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const imgWrapRef = useRef(null);
  const subtitleRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const countersRef = useRef(null);
  const counterCardsRef = useRef([]);
  const countersHeadingRef = useRef(null);
  const checklistHeadingRef = useRef(null);
  const badgeRef = useRef(null);
  const featureRef = useRef(null);
  const ctaRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const dividerRef = useRef(null);
  const floatImgRef = useRef(null);
  const checklistRef = useRef([]);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Container visible
      gsap.set(sectionRef.current, { opacity: 1 });

      // Parallax image — moves slower than scroll
      gsap.to(imgRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: imgWrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Image wrapper fade + scale in with blur
      gsap.fromTo(
        imgWrapRef.current,
        { opacity: 0, scale: 0.92, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgWrapRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating badge on image — parallax counter-direction
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.6, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: imgWrapRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.to(badgeRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: imgWrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Text block staggered reveal with blur
      const textEls = [
        subtitleRef.current,
        headingRef.current,
        paragraphRef.current,
        featureRef.current,
      ];
      gsap.set(textEls, { opacity: 0, y: 40, filter: "blur(8px)" });
      gsap.to(textEls, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Section heading for counters
      gsap.set(countersHeadingRef.current, { opacity: 0, y: 30 });
      gsap.to(countersHeadingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: countersHeadingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Counter cards reveal with blur
      gsap.set(counterCardsRef.current, {
        opacity: 0,
        y: 60,
        rotateX: -15,
        filter: "blur(8px)",
      });
      gsap.to(counterCardsRef.current, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: countersRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Trigger CountUp when counters enter viewport
      ScrollTrigger.create({
        trigger: countersRef.current,
        start: "top 75%",
        onEnter: () => {
          setCountersVisible(true);
        },
      });

      // Checklist staggered reveal from left with blur
      gsap.set(checklistRef.current, { opacity: 0, x: -30, filter: "blur(6px)" });
      gsap.to(checklistRef.current, {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 0.6,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: checklistRef.current[0],
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Checklist heading reveal
      gsap.set(checklistHeadingRef.current, { opacity: 0, y: 30 });
      gsap.to(checklistHeadingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: checklistHeadingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Background orbs — slow parallax drift
      gsap.to(orb1Ref.current, {
        yPercent: -40,
        xPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to(orb2Ref.current, {
        yPercent: 30,
        xPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Animated divider between intro and counters
      gsap.set(dividerRef.current, { opacity: 0, scaleX: 0 });
      gsap.to(dividerRef.current, {
        opacity: 1,
        scaleX: 1,
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // CTA button reveal
      gsap.set(ctaRef.current, { opacity: 0, y: 20 });
      gsap.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Floating secondary image — parallax + reveal
      gsap.fromTo(
        floatImgRef.current,
        { opacity: 0, scale: 0.7, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: imgWrapRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.to(floatImgRef.current, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: imgWrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        opacity: 0,
        background: "#f5f5f7",
        color: "#1a1a1a",
        fontFamily: '"Roboto", sans-serif',
        padding: "50px 8% 0px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative orbs */}
      <div
        ref={orb1Ref}
        style={{
          position: "absolute",
          top: "8%",
          right: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,9,46,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        ref={orb2Ref}
        style={{
          position: "absolute",
          bottom: "15%",
          left: "-8%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(60,100,200,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content wrapper above orbs */}
      <div style={{ position: "relative", zIndex: 1 }}>
      {/* ─── Intro: Image + Text ─── */}
      <div
        className="about-parallax-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Image with parallax */}
        <div style={{ position: "relative" }}>
        <div
          ref={imgWrapRef}
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow:
              "0 24px 70px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.08)",
            position: "relative",
            height: "480px",
          }}
        >
          <div
            ref={imgRef}
            style={{
              position: "absolute",
              inset: "-10%",
              backgroundImage:
                "url(/assets/img/about/about-15.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.3) 100%)",
              pointerEvents: "none",
            }}
          />
          {/* Floating experience badge */}
          <div
            ref={badgeRef}
            style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(12px)",
              borderRadius: "14px",
              padding: "16px 24px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              border: "1px solid rgba(255,255,255,0.5)",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(232,9,46,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <i
                className="fas fa-award"
                style={{ color: "#e8092e", fontSize: "20px" }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: '"Yantramanav", sans-serif',
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "#1a1a1a",
                  lineHeight: 1,
                }}
              >
                15+
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "rgba(0,0,0,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginTop: "2px",
                }}
              >
                Years Experience
              </div>
            </div>
          </div>
        </div>

        {/* Floating secondary image card */}
        <div
          ref={floatImgRef}
          style={{
            position: "absolute",
            bottom: "-30px",
            right: "-30px",
            width: "160px",
            height: "120px",
            borderRadius: "14px",
            overflow: "hidden",
            boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
            border: "3px solid #f5f5f7",
            zIndex: 2,
          }}
        >
          <img
            src="/assets/img/about/Mechanics_with_customer_shoulder_202605122259.jpeg"
            alt="RapidFix mechanic"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        </div>
        <div>
          <span
            ref={subtitleRef}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#e8092e",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2.5px",
              marginBottom: "18px",
              padding: "5px 14px",
              borderRadius: "100px",
              background: "rgba(232,9,46,0.08)",
              border: "1px solid rgba(232,9,46,0.15)",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#e8092e",
              }}
            />
            Know About Us
          </span>
          <h2
            ref={headingRef}
            style={{
              margin: "0 0 20px",
              fontFamily: '"Yantramanav", sans-serif',
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.5px",
              background:
                "linear-gradient(135deg, #1a1a1a 0%, rgba(26,26,26,0.6) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Expert Auto Repair{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #e8092e 0%, #ff4d6d 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Services
            </span>
          </h2>
          <p
            ref={paragraphRef}
            style={{
              margin: 0,
              color: "rgba(0,0,0,0.65)",
              fontSize: "1.1rem",
              lineHeight: 1.75,
              maxWidth: "560px",
            }}
          >
            RapidFix provides comprehensive auto and diesel repair services in
            Scarborough, ON. Our certified technicians deliver fast, honest,
            and affordable service for all your vehicle needs.
          </p>

          {/* Feature highlight card */}
          <div
            ref={featureRef}
            style={{
              marginTop: "28px",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
              padding: "18px 22px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(0,0,0,0.06)",
              maxWidth: "480px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(6px)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "rgba(232,9,46,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <i
                className="fas fa-shield-alt"
                style={{ color: "#e8092e", fontSize: "18px" }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: '"Yantramanav", sans-serif',
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "4px",
                }}
              >
                Certified & Trusted
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "rgba(0,0,0,0.55)",
                  lineHeight: 1.5,
                }}
              >
                State-of-the-art technology and scheduled maintenance plans
                keep your vehicles road-ready.
              </div>
            </div>
          </div>

          {/* CTA button */}
          <a
            ref={ctaRef}
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "28px",
              padding: "14px 32px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #e8092e 0%, #c50724 100%)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 6px 20px rgba(232,9,46,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(232,9,46,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(232,9,46,0.25)";
            }}
          >
            Read More
            <i className="fas fa-arrow-right" style={{ fontSize: "13px" }} />
          </a>
        </div>
      </div>

      {/* ─── Animated Divider ─── */}
      <div
        style={{
          maxWidth: "600px",
          margin: "80px auto 0",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "rgba(0,0,0,0.08)",
          }}
        />
        <div
          ref={dividerRef}
          style={{
            width: "80px",
            height: "3px",
            borderRadius: "100px",
            background:
              "linear-gradient(90deg, #e8092e, #ff4d6d)",
            transformOrigin: "center",
          }}
        />
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "rgba(0,0,0,0.08)",
          }}
        />
      </div>
      <div
        ref={countersRef}
        style={{
          maxWidth: "1200px",
          margin: "100px auto 0",
        }}
      >
        <div
          ref={countersHeadingRef}
          style={{
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              color: "#e8092e",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2.5px",
              marginBottom: "10px",
            }}
          >
            Our Achievements
          </span>
          <h3
            style={{
              fontFamily: '"Yantramanav", sans-serif',
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              color: "#1a1a1a",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            Numbers That Speak
          </h3>
        </div>
        <div
          className="about-parallax-counters"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {counters.map((c, i) => (
            <div
              key={i}
              ref={(el) => (counterCardsRef.current[i] = el)}
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "16px",
                padding: "36px 20px",
                textAlign: "center",
                transition:
                  "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(0,0,0,0.12)";
                e.currentTarget.style.borderColor =
                  "rgba(232,9,46,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background:
                    "linear-gradient(90deg, transparent, #e8092e, transparent)",
                  opacity: 0.6,
                }}
              />
              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(232,9,46,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <i
                  className={`fas ${c.icon}`}
                  style={{ color: "#e8092e", fontSize: "20px" }}
                />
              </div>
              <div
                style={{
                  fontFamily: '"Yantramanav", sans-serif',
                  fontSize: "3rem",
                  fontWeight: 900,
                  marginBottom: "8px",
                  lineHeight: 1,
                  background:
                    "linear-gradient(135deg, #e8092e 0%, #ff4d6d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {countersVisible ? (
                  <CountUp end={c.end} duration={2} />
                ) : (
                  0
                )}
                {c.suffix}
              </div>
              <div
                style={{
                  color: "rgba(0,0,0,0.55)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  fontWeight: 600,
                }}
              >
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Why Choose Us ─── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "80px auto 0",
        }}
      >
        <div
          ref={checklistHeadingRef}
          style={{
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#e8092e",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "3px",
              marginBottom: "14px",
              padding: "6px 16px",
              borderRadius: "100px",
              background: "rgba(232,9,46,0.06)",
              border: "1px solid rgba(232,9,46,0.12)",
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
            Why Choose Us
          </span>
          <h3
            style={{
              fontFamily: '"Yantramanav", sans-serif',
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 800,
              color: "#1a1a1a",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            The Rapid Fix Difference
          </h3>
          <div
            style={{
              width: "50px",
              height: "3px",
              borderRadius: "3px",
              background: "linear-gradient(90deg, #e8092e, #ff4d6d)",
              margin: "18px auto 0",
            }}
          />
        </div>
        <div
          className="about-parallax-checklist"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              ref={(el) => (checklistRef.current[i] = el)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "28px 24px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(0,0,0,0.06)",
                transition:
                  "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease, border-color 0.35s ease",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(232,9,46,0.10), 0 4px 12px rgba(0,0,0,0.05)";
                e.currentTarget.style.borderColor = "rgba(232,9,46,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, rgba(232,9,46,0.12), rgba(232,9,46,0.04))",
                  border: "1px solid rgba(232,9,46,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(232,9,46,0.08)",
                }}
              >
                <i
                  className={`fas ${item.icon}`}
                  style={{
                    color: "#e8092e",
                    fontSize: "18px",
                  }}
                />
              </div>
              <h4
                style={{
                  fontFamily: '"Yantramanav", sans-serif',
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  margin: 0,
                  letterSpacing: "-0.2px",
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "rgba(0,0,0,0.55)",
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
              {/* Faded index number */}
              <span
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "16px",
                  fontFamily: '"Yantramanav", sans-serif',
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "rgba(0,0,0,0.04)",
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .about-parallax-grid {
            grid-template-columns: 1fr !important;
          }
          .about-parallax-counters {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .about-parallax-checklist {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .about-parallax-counters {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
