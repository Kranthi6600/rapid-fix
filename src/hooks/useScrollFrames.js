"use client";

import { useRef, useEffect, useCallback } from "react";

/**
 * Canvas renderer driven by ScrollTrigger updates (not rAF).
 * Only draws when the frame index changes.
 * DPR-aware, maintains aspect ratio (cover fit), never stretches.
 *
 * @param {React.RefObject<HTMLCanvasElement>} canvasRef
 * @param {(i:number) => ImageBitmap|HTMLImageElement|null} getBitmap
 * @returns {{ drawFrame: (index:number) => void }}
 */
export function useScrollFrames(canvasRef, getBitmap) {
  const lastDrawnFrame = useRef(-1);
  const ctxRef = useRef(null);

  // Setup canvas context + handle resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      // Force redraw on resize
      lastDrawnFrame.current = -1;
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef]);

  /**
   * Draw a specific frame to the canvas.
   * Called from ScrollTrigger onUpdate. Returns early if frame hasn't changed.
   * If the requested frame isn't loaded yet, finds nearest loaded frame.
   */
  const drawFrame = useCallback(
    (index) => {
      const ctx = ctxRef.current;
      const canvas = canvasRef.current;
      if (!ctx || !canvas) return;

      // Don't redraw the same frame
      if (index === lastDrawnFrame.current) return;

      // Find the bitmap — if not loaded, search for nearest loaded frame
      let bitmap = getBitmap(index);
      let actualIndex = index;
      if (!bitmap) {
        for (let offset = 1; offset < 200; offset++) {
          if (getBitmap(index - offset)) {
            actualIndex = index - offset;
            bitmap = getBitmap(actualIndex);
            break;
          }
          if (getBitmap(index + offset)) {
            actualIndex = index + offset;
            bitmap = getBitmap(actualIndex);
            break;
          }
        }
      }

      if (!bitmap) return;

      const screenW = window.innerWidth;
      const screenH = window.innerHeight;
      const imgW = bitmap.width || bitmap.naturalWidth;
      const imgH = bitmap.height || bitmap.naturalHeight;
      if (!imgW || !imgH) return;

      const imgAspect = imgW / imgH;
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
      ctx.drawImage(bitmap, drawX, drawY, drawW, drawH);
      lastDrawnFrame.current = index;
    },
    [canvasRef, getBitmap]
  );

  return { drawFrame };
};
