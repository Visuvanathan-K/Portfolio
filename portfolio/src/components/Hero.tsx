"use client";

import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white flex flex-col justify-center px-6 md:px-24 py-32 overflow-hidden border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00ff88]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Avatar/Profile Picture */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center order-first lg:order-last"
        >
          <div className="relative group cursor-pointer">
            {/* Outer neon green glow border */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-[#00ff88] to-blue-500 opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 blur-xl" />
            
            {/* Inner Border Card */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-[#00ff88]/50 transition-all duration-500 shadow-2xl">
              <img 
                src="/images/profile.png" 
                alt="Visuvanathan K Profile" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Copy & Details */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#00ff88]/20 bg-[#00ff88]/5 text-[#00ff88] shadow-sm">
                Full Stack Developer
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none text-white">
              Visuvanathan K
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-300 leading-tight">
              Specializing in <span className="text-[#00ff88] font-medium">Full Stack Development</span> &amp; <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-medium">AI/ML Architectures</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-zinc-400 font-light text-base md:text-lg leading-relaxed max-w-xl"
          >
            I build secure, high-performance REST APIs, vector databases, and custom AI applications. Experienced in Java/Spring Boot and Python-based LLM orchestration (RAG) frameworks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="https://drive.google.com/file/d/1LoqGbu8ICK5POU2SooXSmtjOF2_gHFbU/view?usp=sharing" 
              target="_blank" 
              rel="noreferrer" 
              className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-2"
            >
              Download Resume 📄
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 text-[#00ff88] font-semibold hover:bg-[#00ff88]/10 hover:border-[#00ff88]/50 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
