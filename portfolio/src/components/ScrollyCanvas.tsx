"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";

export function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const [loaded, setLoaded] = useState(false);
  const frameCount = 120; // 0 to 119

  // Maps scroll progress 0-0.9 to frame index 0-119 so it finishes BEFORE unsticking!
  const frameIndex = useTransform(scrollYProgress, [0, 0.9], [0, frameCount - 1], { clamp: true });

  // --- OVERLAY TRANSFORMS ---
  // Section 1: Hero
  const opacity1 = useTransform(scrollYProgress, [0, 0.08], [1, 0], { clamp: true });
  const y1 = useTransform(scrollYProgress, [0, 0.08], [0, -40], { clamp: true });
  const scale1 = useTransform(scrollYProgress, [0, 0.08], [1, 0.98], { clamp: true });
  const visibility1 = useTransform(scrollYProgress, (p) => (p > 0.12 ? "hidden" : "visible"));

  // Section 2: Middle string (Starts completely after hero fades out)
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.22, 0.42, 0.50], [0, 1, 1, 0], { clamp: true });
  const x2 = useTransform(scrollYProgress, [0.15, 0.22, 0.42, 0.50], [-20, 0, 0, 20], { clamp: true });
  const visibility2 = useTransform(scrollYProgress, (p) => (p < 0.12 || p > 0.55 ? "hidden" : "visible"));

  // Section 3: Final string
  const opacity3 = useTransform(scrollYProgress, [0.58, 0.65, 0.85, 0.92], [0, 1, 1, 0], { clamp: true });
  const x3 = useTransform(scrollYProgress, [0.58, 0.65, 0.85, 0.92], [20, 0, 0, -20], { clamp: true });
  const visibility3 = useTransform(scrollYProgress, (p) => (p < 0.55 || p > 0.95 ? "hidden" : "visible"));

  useEffect(() => {
    const loadImages = async () => {
      const promises = [];
      for (let i = 0; i < frameCount; i++) {
        const idx = i.toString().padStart(3, "0");
        const img = new Image();
        img.src = `/sequence/frame_${idx}_delay-0.066s.png`;
        promises.push(
          new Promise<void>((resolve) => {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
        );
        imagesRef.current.push(img);
      }
      await Promise.all(promises);
      setLoaded(true);
    };

    loadImages();
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) {
      return; 
    }

    // Object-fit: cover calculation
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const w = img.width * scale;
    const h = img.height * scale;
    const x = canvas.width / 2 - w / 2;
    const y = canvas.height / 2 - h / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, w, h);
  };

  useEffect(() => {
    if (loaded && canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      drawFrame(0);
    }

    const handleResize = () => {
      if (canvasRef.current && loaded) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        drawFrame(Math.floor(frameIndex.get()));
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loaded, frameIndex]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (loaded) {
      drawFrame(Math.floor(latest));
    }
  });

  return (
    <div ref={containerRef} className="relative h-[800vh] w-full bg-[#050505]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* CANVAS RENDERER */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover z-0"
        />
        
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#050505]/95 z-50">
            <span className="text-white font-mono text-xs md:text-sm tracking-[0.2em] animate-pulse">
              LOADING SEQUENCE
            </span>
          </div>
        )}
        
        {/* OVERLAY ELEMENTS */}
        <div className="absolute inset-0 z-10 pointer-events-none selection:bg-white selection:text-black">
          <div className="h-full w-full flex flex-col justify-center px-6 md:px-24">
            
            {/* Section 1 - Hero */}
            <motion.div
              style={{ opacity: opacity1, y: y1, scale: scale1, visibility: visibility1 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center z-20"
            >
              <h1 className="text-5xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl">
                Visuvanathan K
              </h1>
              <p className="mt-6 text-xl md:text-3xl text-zinc-100 font-light tracking-wide max-w-2xl mx-auto drop-shadow-xl">
                Backend Developer
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-6 pointer-events-auto">
                <a href="#contact" className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors shadow-2xl">Contact Me</a>
              </div>
            </motion.div>

            {/* Section 2 - Middle String */}
            <motion.div
              style={{ opacity: opacity2, x: x2, visibility: visibility2, filter: "drop-shadow(0 10px 40px rgba(0,0,0,0.9))" }}
              className="absolute inset-y-0 left-6 md:left-24 flex flex-col justify-center pointer-events-none z-20"
            >
              <h2 className="text-4xl md:text-8xl font-semibold max-w-4xl text-white leading-tight">
                Building secure REST APIs<br />and scalable systems.
              </h2>
            </motion.div>

            {/* Section 3 - Final String */}
            <motion.div
              style={{ opacity: opacity3, x: x3, visibility: visibility3, filter: "drop-shadow(0 10px 40px rgba(0,0,0,0.9))" }}
              className="absolute inset-y-0 right-6 md:right-24 flex flex-col justify-center items-end text-right pointer-events-none z-20"
            >
              <h2 className="text-4xl md:text-8xl font-semibold max-w-3xl text-white leading-tight">
                Powered by Java, Spring Boot,<br />and MySQL.
              </h2>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}
