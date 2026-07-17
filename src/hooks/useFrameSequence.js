"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const INITIAL_BATCH = 15;

/**
 * Progressive frame preloader.
 * Loads an initial batch first, then streams the rest in the background.
 * Uses createImageBitmap() where supported for faster canvas rendering.
 *
 * @param {string[]} framePaths - Array of frame URLs
 * @returns {{ bitmaps: (ImageBitmap|HTMLImageElement)[], loadedCount: number, progress: number, initialReady: boolean, getBitmap: (i:number) => ImageBitmap|HTMLImageElement|null }}
 */
export function useFrameSequence(framePaths) {
  const bitmapsRef = useRef([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [initialReady, setInitialReady] = useState(false);

  const total = framePaths.length;
  const supportsBitmap = typeof createImageBitmap !== "undefined";

  const getBitmap = useCallback((i) => {
    return bitmapsRef.current[i] || null;
  }, []);

  useEffect(() => {
    let cancelled = false;
    bitmapsRef.current = new Array(total).fill(null);

    const loadOne = async (index) => {
      if (cancelled || bitmapsRef.current[index]) return;

      try {
        if (supportsBitmap) {
          const res = await fetch(framePaths[index]);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const blob = await res.blob();
          const bitmap = await createImageBitmap(blob, { imageOrientation: "none" });
          if (cancelled) {
            bitmap.close?.();
            return;
          }
          bitmapsRef.current[index] = bitmap;
        } else {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              if (cancelled) return resolve();
              bitmapsRef.current[index] = img;
              resolve();
            };
            img.onerror = reject;
            img.src = framePaths[index];
          });
        }
      } catch {
        // Frame failed to load — leave as null, graceful degradation
      }

      if (!cancelled) {
        setLoadedCount((prev) => prev + 1);
      }
    };

    // Phase 1: Load initial batch
    (async () => {
      const initialIndices = Array.from(
        { length: Math.min(INITIAL_BATCH, total) },
        (_, i) => i
      );
      await Promise.all(initialIndices.map((i) => loadOne(i)));
      if (!cancelled) setInitialReady(true);

      // Phase 2: Stream the rest in background
      const remainingIndices = Array.from({ length: total }, (_, i) => i).slice(
        INITIAL_BATCH
      );
      // Load in small concurrent batches to avoid overwhelming the browser
      const BATCH_SIZE = 8;
      for (let i = 0; i < remainingIndices.length; i += BATCH_SIZE) {
        if (cancelled) break;
        const batch = remainingIndices.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map((idx) => loadOne(idx)));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [framePaths, total, supportsBitmap]);

  const progress = total > 0 ? Math.round((loadedCount / total) * 100) : 0;

  return { bitmaps: bitmapsRef.current, loadedCount, progress, initialReady, getBitmap };
};
