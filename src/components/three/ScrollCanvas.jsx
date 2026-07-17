"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrameSequence } from "@/hooks/useFrameSequence";
import { useScrollFrames } from "@/hooks/useScrollFrames";
import HeroText3D from "./HeroText3D";
import EndText3D from "./EndText3D";

const FRAME_DIR = "/assets/img/3d/Video Frame Extractor 2026-07-12 2_57_27 GMT+5_30";
const FRAME_COUNT = 80;
const FRAME_PAD = 2;

const framePaths = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `${FRAME_DIR}/${String(i + 1).padStart(FRAME_PAD, "0")}.png`
);

export default function ScrollCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const { progress, initialReady, getBitmap } = useFrameSequence(framePaths);
  const { drawFrame } = useScrollFrames(canvasRef, getBitmap);

  // Register GSAP plugin + setup ScrollTrigger
  useEffect(() => {
    if (!initialReady) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Draw first frame immediately
      drawFrame(0);

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: canvasRef.current.parentElement,
        scrub: 1,
        onUpdate: (self) => {
          const frameIdx = Math.round(self.progress * (FRAME_COUNT - 1));
          drawFrame(frameIdx);
        },
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [initialReady, drawFrame]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "800vh",
        position: "relative",
        background: "#0a0a0a",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "#0a0a0a",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ display: "block" }}
        />

        {/* Scroll-driven text reveal overlay — beginning */}
        <HeroText3D scrollTriggerRef={containerRef} />

        {/* Scroll-driven text reveal overlay — end (after frame 60) */}
        <EndText3D scrollTriggerRef={containerRef} />

        {/* Loading overlay — only until initial batch is ready */}
        {!initialReady && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              background: "#0a0a0a",
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
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Loading... {progress}%
            </span>
          </div>
        )}

        {/* Background loading indicator (subtle, after initial ready) */}
        {initialReady && progress < 100 && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "rgba(255,255,255,0.05)",
              zIndex: 3,
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #e8092e, #c50724)",
                transition: "width 0.3s ease",
              }}
            />
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
}
