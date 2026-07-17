"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const FRAME_DIR = "/assets/img/3d/Video Frame Extractor 2026-07-12 2_57_27 GMT+5_30";
const FRAME_COUNT = 80;
const FRAME_PAD = 2;

const framePaths = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `${FRAME_DIR}/${String(i + 1).padStart(FRAME_PAD, "0")}.png`
);

const ScrollFrames = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loaded, setLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentFrame = useTransform(
    scrollYProgress,
    [0, 1],
    [0, FRAME_COUNT - 1]
  );

  // Preload all frames
  useEffect(() => {
    let cancelled = false;
    const imgs = [];

    framePaths.forEach((src, i) => {
      const img = new Image();
      img.onload = () => {
        if (cancelled) return;
        setLoaded((prev) => prev + 1);
      };
      img.onerror = () => {
        if (cancelled) return;
        imgs[i] = null;
        setLoaded((prev) => prev + 1);
      };
      img.src = src;
      imgs[i] = img;
    });

    imagesRef.current = imgs;

    return () => {
      cancelled = true;
    };
  }, []);

  // Draw current frame to canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const frameIdx = Math.round(currentFrame.get());
      const img = imagesRef.current[frameIdx];
      if (img && img.complete && img.naturalWidth > 0) {
        const imgAspect = img.width / img.height;
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const screenAspect = screenW / screenH;

        let drawW, drawH, drawX, drawY;
        if (imgAspect > screenAspect) {
          drawH = screenH;
          drawW = drawH * imgAspect;
          drawX = (screenW - drawW) / 2;
          drawY = 0;
        } else {
          drawW = screenW;
          drawH = drawW / imgAspect;
          drawX = 0;
          drawY = (screenH - drawH) / 2;
        }

        ctx.clearRect(0, 0, screenW, screenH);
        ctx.drawImage(img, drawX, drawY, drawW, drawH);
      }
      requestAnimationFrame(render);
    };

    const raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [currentFrame]);

  const allLoaded = loaded >= FRAME_COUNT;

  return (
    <div
      ref={containerRef}
      style={{
        height: "1200vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "#000",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
          }}
        />

        {/* Loading indicator */}
        {!allLoaded && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              background: "#000",
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                border: "3px solid rgba(232,9,46,0.15)",
                borderTopColor: "#e8092e",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            />
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Loading {loaded}/{FRAME_COUNT}
            </span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ScrollFrames;
