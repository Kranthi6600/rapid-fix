"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useServices } from "@/context/ServicesContext";
import { useRouter } from "next/navigation";

const fallbackServices = [
  {
    slug: "brake-repair",
    title: "Brake Repair & Service",
    description:
      "Comprehensive brake inspection, pad replacement, rotor resurfacing, and fluid flush to keep you safe on the road.",
    image: "/assets/img/services/service-8.jpg",
  },
  {
    slug: "engine-diagnostics",
    title: "Engine Diagnostics",
    description:
      "Advanced computerized diagnostics to pinpoint engine issues fast — saving you time and unnecessary repairs.",
    image: "/assets/img/services/service-9.jpg",
  },
  {
    slug: "diesel-engine-repair",
    title: "Diesel Engine Repair",
    description:
      "Expert diesel engine repair and maintenance for heavy-duty trucks, fleets, and commercial vehicles.",
    image: "/assets/img/services/service-10.jpg",
  },
];

const iconList = [
  "/assets/img/icon/service-icon_1-1.svg",
  "/assets/img/icon/service-icon_1-2.svg",
  "/assets/img/icon/service-icon_1-3.svg",
  "/assets/img/icon/service-icon_1-4.svg",
  "/assets/img/icon/service-icon_1-5.svg",
  "/assets/img/icon/service-icon_1-6.svg",
];

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "");
};

const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

export default function ServicesParallax() {
  const router = useRouter();
  const { services: allServices, loading } = useServices();

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const headingEyebrowRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsTrackRef = useRef(null);
  const cardRefs = useRef([]);
  const progressRef = useRef(null);

  const services = (allServices.filter((s) => s.slug).slice(0, 6) || []).map(
    (s, i) => ({
      slug: s.slug,
      title: s.title,
      description: truncateText(stripHtml(s.description), 140),
      image: s.image || `/assets/img/services/service-${i + 1}.jpg`,
    })
  );

  const displayServices = services.length > 0 ? services : fallbackServices;

  useEffect(() => {
    if (loading) return;

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

      // Horizontal scroll gallery — pin section, track moves left on scroll
      // Skip on mobile to avoid extra gap from pin spacer
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const cards = cardRefs.current.filter(Boolean);
      if (cards.length > 0 && cardsTrackRef.current && !isMobile) {
        const track = cardsTrackRef.current;
        const scrollDistance = track.scrollWidth - window.innerWidth + 100;

        // Pin the section and move the track left as user scrolls
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top top",
            end: "+=" + scrollDistance,
            pin: true,
            scrub: 1,
          },
        });

        tl.to(track, { x: -scrollDistance, ease: "none" }, 0);

        // Animate progress bar
        if (progressRef.current) {
          tl.fromTo(
            progressRef.current,
            { scaleX: 0 },
            { scaleX: 1, ease: "none" },
            0
          );
        }
      }

    }, sectionRef);

    // Sort triggers by document position then refresh pin offsets
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [loading]);

  return (
    <section
      ref={sectionRef}
      style={{
        opacity: loading ? 1 : 0,
        background: "linear-gradient(180deg, #f5f5f7 0%, #e8e8ec 40%, #e8e8ec 60%, #f5f5f7 100%)",
        color: "#1a1a1a",
        fontFamily: '"Roboto", sans-serif',
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,9,46,0.04), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,9,46,0.03), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Section heading */}
      <div
        style={{
          textAlign: "center",
          padding: "50px 8% 40px",
          maxWidth: "800px",
          margin: "0 auto",
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
          What We Offer
        </span>
        <h2
          ref={headingRef}
          style={{
            margin: 0,
            fontFamily: '"Yantramanav", sans-serif',
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.5px",
            background:
              "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Our{" "}
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
          style={{
            margin: "16px 0 0",
            fontSize: "15px",
            color: "rgba(0,0,0,0.45)",
            lineHeight: 1.6,
            maxWidth: "520px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Scroll to explore our full range of automotive services
        </p>
        {/* Decorative line under heading */}
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

      {/* Horizontal scroll cards container */}
      <div
        ref={cardsContainerRef}
        className="services-cards-container"
        style={{
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Scroll progress bar */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "8%",
            right: "8%",
            height: "3px",
            background: "rgba(0,0,0,0.06)",
            borderRadius: "3px",
            zIndex: 10,
            overflow: "hidden",
          }}
        >
          <div
            ref={progressRef}
            style={{
              height: "100%",
              width: "100%",
              transformOrigin: "left center",
              background: "linear-gradient(90deg, #e8092e, #ff4d6d)",
              borderRadius: "3px",
              boxShadow: "0 0 12px rgba(232,9,46,0.4)",
            }}
          />
        </div>
        {/* Scroll hint with animated arrow */}
        <div
          style={{
            position: "absolute",
            bottom: "18px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "rgba(0,0,0,0.3)",
            fontSize: "10px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "2px",
            zIndex: 10,
          }}
        >
          Scroll
          <i className="fas fa-chevron-right scroll-hint-arrow" style={{ fontSize: "10px" }} />
        </div>
        <div
          ref={cardsTrackRef}
          className="services-cards-track"
          style={{
            display: "flex",
            gap: "40px",
            padding: "0 8%",
            willChange: "transform",
          }}
        >
          {displayServices.map((service, i) => (
            <div
              key={service.slug || i}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{
                flexShrink: 0,
                width: "min(70vw, 640px)",
              }}
            >
              <div
                onClick={() =>
                  service.slug && router.push(`/services/${service.slug}`)
                }
                className="services-parallax-card-inner"
                style={{
                  width: "100%",
                  height: "300px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.7)",
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.8)",
                  cursor: "pointer",
                  transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 36px 90px rgba(232,9,46,0.18), 0 10px 28px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 60px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.8)";
                }}
              >
                {/* Glow accent on hover */}
              <div
                className="services-parallax-card-glow"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(232,9,46,0.08), transparent 70%)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
                {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background:
                    "linear-gradient(90deg, transparent 10%, #e8092e 50%, transparent 90%)",
                  opacity: 0.8,
                  zIndex: 2,
                }}
              />

              {/* Image side */}
              <div
                className="services-parallax-card-image"
                style={{
                  position: "relative",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="services-parallax-card-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    inset: 0,
                    transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
                {/* Gradient overlay on image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.3) 100%), linear-gradient(135deg, rgba(232,9,46,0.12) 0%, transparent 50%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Index badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    fontFamily: '"Yantramanav", sans-serif',
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.95)",
                    lineHeight: 1,
                    padding: "6px 12px",
                    borderRadius: "100px",
                    background: "rgba(232,9,46,0.9)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 4px 16px rgba(232,9,46,0.3)",
                    pointerEvents: "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content side */}
              <div
                className="services-parallax-card-content"
                style={{
                  padding: "24px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, rgba(232,9,46,0.12), rgba(232,9,46,0.04))",
                    border: "1px solid rgba(232,9,46,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                    boxShadow: "0 4px 12px rgba(232,9,46,0.08)",
                  }}
                >
                  <img
                    src={iconList[i % iconList.length]}
                    alt={service.title}
                    style={{
                      width: "20px",
                      height: "20px",
                      filter:
                        "brightness(0) saturate(100%) invert(20%) sepia(90%) saturate(2000%) hue-rotate(-5deg) brightness(95%) contrast(90%)",
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontFamily: '"Yantramanav", sans-serif',
                    fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    margin: "0 0 10px",
                    letterSpacing: "-0.3px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "rgba(0,0,0,0.55)",
                    fontSize: "13px",
                    lineHeight: 1.6,
                    margin: "0 0 16px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {service.description}
                </p>

                {/* Learn More link */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#e8092e",
                    fontWeight: 600,
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    transition: "gap 0.3s ease",
                    cursor: "pointer",
                    padding: "8px 16px",
                    borderRadius: "100px",
                    background: "rgba(232,9,46,0.06)",
                    border: "1px solid rgba(232,9,46,0.12)",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = "14px";
                    e.currentTarget.style.background = "rgba(232,9,46,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = "8px";
                    e.currentTarget.style.background = "rgba(232,9,46,0.06)";
                  }}
                >
                  Learn More
                  <i
                    className="fas fa-arrow-right"
                    style={{ fontSize: "11px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Loading state */}
      {loading && displayServices.length === 0 && (
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "3px solid rgba(232,9,46,0.15)",
              borderTopColor: "#e8092e",
              animation: "spin 0.8s linear infinite",
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {/* Responsive + hover styles */}
      <style>{`
        .services-parallax-card-inner:hover .services-parallax-card-img {
          transform: scale(1.1);
        }
        .services-parallax-card-inner:hover .services-parallax-card-glow {
          opacity: 1;
        }
        @keyframes scrollHintBounce {
          0%, 100% { transform: translateX(0); opacity: 0.5; }
          50% { transform: translateX(4px); opacity: 1; }
        }
        .scroll-hint-arrow {
          animation: scrollHintBounce 1.5s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .services-cards-container {
            height: auto !important;
            overflow: visible !important;
            display: block !important;
            padding-bottom: 40px !important;
          }
          .services-cards-container > div:first-child,
          .services-cards-container > div:nth-child(2) {
            display: none !important;
          }
          .services-cards-track {
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
            padding: 0 16px !important;
            transform: none !important;
          }
          .services-cards-track > div {
            width: 100% !important;
            flex-shrink: 1 !important;
          }
          .services-parallax-card-inner {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .services-parallax-card-image {
            height: 200px !important;
          }
          .services-parallax-card-content {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
