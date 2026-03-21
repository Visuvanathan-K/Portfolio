import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="relative min-h-screen border-t border-white/5 bg-[#050505] text-white flex flex-col items-center justify-center px-6 md:px-24 py-24 object-cover">
      <div className="max-w-4xl w-full text-center mb-16">
        <h3 className="text-sm tracking-[0.3em] text-zinc-500 uppercase mb-4">Get In Touch</h3>
        <h2 className="text-4xl md:text-7xl font-light tracking-tight">Contact Me</h2>
        <p className="mt-8 text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Feel free to reach out for collaborations, opportunities, or just to say hello. I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
        <a href="mailto:vishwak2468@gmail.com" className="group flex flex-col items-center p-10 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 hover:-translate-y-2 transition-all duration-500 text-center backdrop-blur-md">
          <span className="text-4xl md:text-5xl mb-6 group-hover:scale-110 transition-transform">✉️</span>
          <h4 className="text-xl font-medium mb-2">Email</h4>
          <p className="text-zinc-400 font-light tracking-wide">vishwak2468@gmail.com</p>
        </a>

        <a href="tel:+918220290272" className="group flex flex-col items-center p-10 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 hover:-translate-y-2 transition-all duration-500 text-center backdrop-blur-md">
          <span className="text-4xl md:text-5xl mb-6 group-hover:scale-110 transition-transform">📱</span>
          <h4 className="text-xl font-medium mb-2">Phone</h4>
          <p className="text-zinc-400 font-light tracking-wide">+91-8220290272</p>
        </a>

        <a href="https://www.linkedin.com/in/visuvanathan-k3108/" target="_blank" rel="noreferrer" className="group flex flex-col items-center p-10 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 hover:-translate-y-2 transition-all duration-500 text-center backdrop-blur-md">
          <span className="text-4xl md:text-5xl mb-6 group-hover:scale-110 transition-transform">💼</span>
          <h4 className="text-xl font-medium mb-2">LinkedIn</h4>
          <p className="text-zinc-400 font-light tracking-wide">visuvanathan-k3108</p>
        </a>

        <a href="https://github.com/Visuvanathan-K" target="_blank" rel="noreferrer" className="group flex flex-col items-center p-10 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 hover:-translate-y-2 transition-all duration-500 text-center backdrop-blur-md">
          <span className="text-4xl md:text-5xl mb-6 group-hover:scale-110 transition-transform">💻</span>
          <h4 className="text-xl font-medium mb-2">GitHub</h4>
          <p className="text-zinc-400 font-light tracking-wide">Visuvanathan-K</p>
        </a>
      </div>
    </section>
  );
}
