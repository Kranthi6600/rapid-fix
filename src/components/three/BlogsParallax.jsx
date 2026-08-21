"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

const fallbackBlogs = [
  {
    slug: "brake-maintenance-guide",
    title: "Essential Brake Maintenance Guide for Every Driver",
    excerpt:
      "Learn how to spot early warning signs of brake wear and keep your stopping power at its peak with these expert tips.",
    thumbnail: "/assets/img/blog/blog-1.jpg",
    category: "Maintenance",
    date: "2024-06-15",
  },
  {
    slug: "diesel-engine-tips",
    title: "Top 5 Diesel Engine Tips for Longevity",
    excerpt:
      "Maximize the lifespan of your diesel engine with these proven maintenance practices from our certified technicians.",
    thumbnail: "/assets/img/blog/blog-2.jpg",
    category: "Diesel",
    date: "2024-06-10",
  },
  {
    slug: "winter-prep-checklist",
    title: "Winter Prep Checklist: Is Your Vehicle Ready?",
    excerpt:
      "Don't get caught off guard this winter. Follow our comprehensive checklist to prepare your vehicle for cold weather.",
    thumbnail: "/assets/img/blog/blog-3.jpg",
    category: "Seasonal",
    date: "2024-06-05",
  },
];

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "");
};

const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

const getDateParts = (iso) => {
  if (!iso) return { day: "", month: "" };
  const d = new Date(iso);
  return {
    day: d.getDate().toString().padStart(2, "0"),
    month: d.toLocaleString("en-US", { month: "short" }),
  };
};

export default function BlogsParallax() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const headingEyebrowRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsTrackRef = useRef(null);
  const cardRefs = useRef([]);
  const progressRef = useRef(null);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) setBlogs(result.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const mappedBlogs = (blogs.slice(0, 6) || []).map((b, i) => ({
    slug: b.slug,
    title: b.title,
    excerpt: truncateText(stripHtml(b.excerpt || b.description), 140),
    thumbnail: b.thumbnail || `/assets/img/blog/blog-${i + 1}.jpg`,
    category: b.wehoware_blog_categories?.name || "General",
    date: b.published_at || b.created_at,
  }));

  const displayBlogs = mappedBlogs.length > 0 ? mappedBlogs : fallbackBlogs;

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

      // Horizontal scroll gallery — pin section, track comes from left on scroll
      // Skip on mobile to avoid extra gap from pin spacer
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const cards = cardRefs.current.filter(Boolean);
      if (cards.length > 0 && cardsTrackRef.current && !isMobile) {
        const track = cardsTrackRef.current;
        const scrollDistance = track.scrollWidth - window.innerWidth + 100;

        // Start track off-screen to the left
        gsap.set(track, { x: -scrollDistance });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top top",
            end: "+=" + scrollDistance,
            pin: true,
            scrub: 1,
          },
        });

        tl.to(track, { x: 0, ease: "none" }, 0);

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

    // Sort triggers by document position (creation order can be wrong
    // since Services/Blogs load async) then refresh pin offsets
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
          right: "-5%",
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
          left: "-5%",
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
          Latest Articles
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
            background: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          From The{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #e8092e 0%, #ff4d6d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Blog
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
          Scroll to explore expert tips, insights, and automotive advice
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

      {/* Horizontal scroll cards container */}
      <div
        ref={cardsContainerRef}
        className="blogs-cards-container"
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

        {/* Scroll hint */}
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
          <i className="fas fa-chevron-right blog-scroll-hint-arrow" style={{ fontSize: "10px" }} />
        </div>

        {/* Cards track */}
        <div
          ref={cardsTrackRef}
          className="blogs-cards-track"
          style={{
            display: "flex",
            gap: "40px",
            padding: "0 8%",
            willChange: "transform",
          }}
        >
          {displayBlogs.map((blog, i) => {
            const dateParts = getDateParts(blog.date);
            return (
              <div
                key={blog.slug || i}
                ref={(el) => (cardRefs.current[i] = el)}
                style={{
                  flexShrink: 0,
                  width: "min(70vw, 640px)",
                }}
              >
                <div
                  onClick={() => blog.slug && router.push(`/blog/${blog.slug}`)}
                  className="blogs-parallax-card-inner"
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
                    className="blogs-parallax-card-glow"
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
                    className="blogs-parallax-card-image"
                    style={{
                      position: "relative",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      className="blogs-parallax-card-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        inset: 0,
                        transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                      }}
                    />
                    {/* Gradient overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.3) 100%), linear-gradient(135deg, rgba(232,9,46,0.12) 0%, transparent 50%)",
                        pointerEvents: "none",
                      }}
                    />
                    {/* Date badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: "rgba(232,9,46,0.9)",
                        backdropFilter: "blur(8px)",
                        boxShadow: "0 4px 16px rgba(232,9,46,0.3)",
                        pointerEvents: "none",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Yantramanav", sans-serif',
                          fontSize: "18px",
                          fontWeight: 800,
                          color: "#fff",
                          lineHeight: 1,
                        }}
                      >
                        {dateParts.day}
                      </span>
                      <span
                        style={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.85)",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          marginTop: "2px",
                        }}
                      >
                        {dateParts.month}
                      </span>
                    </div>
                  </div>

                  {/* Content side */}
                  <div
                    className="blogs-parallax-card-content"
                    style={{
                      padding: "24px 24px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    {/* Category pill */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "4px 12px",
                        borderRadius: "100px",
                        background: "rgba(232,9,46,0.06)",
                        border: "1px solid rgba(232,9,46,0.1)",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#e8092e",
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                        alignSelf: "flex-start",
                        marginBottom: "12px",
                      }}
                    >
                      <i className="fas fa-tag" style={{ fontSize: "9px" }} />
                      {blog.category}
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
                      {blog.title}
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
                      {blog.excerpt}
                    </p>

                    {/* Read More link */}
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
                      Read More
                      <i className="fas fa-arrow-right" style={{ fontSize: "11px" }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* View All Blogs button */}
      <div style={{ textAlign: "center", padding: "40px 8% 60px", position: "relative", zIndex: 1 }}>
        <button
          onClick={() => router.push("/blog")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 32px",
            borderRadius: "100px",
            border: "none",
            background: "linear-gradient(135deg, #e8092e 0%, #ff4d6d 100%)",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "1px",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 8px 24px rgba(232,9,46,0.25)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(232,9,46,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(232,9,46,0.25)";
          }}
        >
          View All Blogs
          <i className="fas fa-arrow-right" style={{ fontSize: "12px" }} />
        </button>
      </div>

      {/* Loading state */}
      {loading && displayBlogs.length === 0 && (
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
              animation: "blog-spin 0.8s linear infinite",
            }}
          />
          <style>{`@keyframes blog-spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {/* Responsive + hover styles */}
      <style>{`
        .blogs-parallax-card-inner:hover .blogs-parallax-card-img {
          transform: scale(1.1);
        }
        .blogs-parallax-card-inner:hover .blogs-parallax-card-glow {
          opacity: 1;
        }
        @keyframes blogScrollHintBounce {
          0%, 100% { transform: translateX(0); opacity: 0.5; }
          50% { transform: translateX(4px); opacity: 1; }
        }
        .blog-scroll-hint-arrow {
          animation: blogScrollHintBounce 1.5s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .blogs-cards-container {
            height: auto !important;
            overflow: visible !important;
            display: block !important;
            padding-bottom: 40px !important;
          }
          .blogs-cards-container > div:first-child,
          .blogs-cards-container > div:nth-child(2) {
            display: none !important;
          }
          .blogs-cards-track {
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
            padding: 0 16px !important;
            transform: none !important;
          }
          .blogs-cards-track > div {
            width: 100% !important;
            flex-shrink: 1 !important;
          }
          .blogs-parallax-card-inner {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .blogs-parallax-card-image {
            height: 200px !important;
          }
          .blogs-parallax-card-content {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
