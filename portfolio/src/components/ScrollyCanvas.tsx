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

  // Maps scroll progress 0-1 to frame index 0-119
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1], { clamp: true });
  // No extra zoom at start
  const canvasScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.0], { clamp: true });

  // --- OVERLAY TRANSFORMS ---
  // Section 1: Hero
  const opacity1 = useTransform(scrollYProgress, [0, 0.08], [1, 0], { clamp: true });
  const y1 = useTransform(scrollYProgress, [0, 0.08], [0, -30], { clamp: true });
  const scaleHero = useTransform(scrollYProgress, [0, 0.08], [1, 0.98], { clamp: true });

  // Section 2: Middle string (Left)
  const opacity2 = useTransform(scrollYProgress, [0.12, 0.22, 0.45, 0.55], [0, 1, 1, 0], { clamp: true });
  const x2 = useTransform(scrollYProgress, [0.12, 0.22, 0.45, 0.55], [-30, 0, 0, 30], { clamp: true });

  // Section 3: Final string (Right)
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0], { clamp: true });
  const x3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [30, 0, 0, -30], { clamp: true });

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

    // Calculate scale for object-fit: cover, but reduce it if it's too aggressive (mobile)
    let scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    
    // If the image is being over-zoomed (common on mobile), scale it down slightly
    // but not so much that we see edges if we can help it.
    if (canvas.height / canvas.width > 1.5) { // Likely mobile
      scale *= 0.8; // Reduce zoom by 20%
    }

    const w = img.width * scale;
    const h = img.height * scale;
    const x = canvas.width / 2 - w / 2;
    const y = canvas.height / 2 - h / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Fill background to match theme if image doesn't cover
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#050505]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* CANVAS RENDERER */}
        <motion.canvas
          ref={canvasRef}
          style={{ scale: canvasScale }}
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
              style={{ opacity: opacity1, y: y1, scale: scaleHero }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 pointer-events-none"
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

            {/* Section 2 - Middle String (Shifted Left) */}
            <motion.div
              style={{ opacity: opacity2, x: x2, filter: "drop-shadow(0 10px 40px rgba(0,0,0,0.95))" }}
              className="absolute inset-y-0 left-6 md:left-24 flex flex-col justify-center pointer-events-none z-20 max-w-xl text-left"
            >
              <h2 className="text-4xl md:text-8xl font-bold text-white leading-tight">
                Building secure REST APIs<br />and scalable systems.
              </h2>
            </motion.div>

            {/* Section 3 - Final String (Shifted Right) */}
            <motion.div
              style={{ opacity: opacity3, x: x3, filter: "drop-shadow(0 10px 40px rgba(0,0,0,0.95))" }}
              className="absolute inset-y-0 right-6 md:right-24 flex flex-col justify-center items-end text-right pointer-events-none z-20 max-w-xl"
            >
              <h2 className="text-4xl md:text-8xl font-bold text-white leading-tight">
                Powered by Java, Spring Boot,<br />and MySQL.
              </h2>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}
