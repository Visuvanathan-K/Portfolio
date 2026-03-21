import React from 'react';

export function About() {
  return (
    <section className="relative bg-[#050505] text-white px-6 md:px-24 py-40 object-cover border-t border-white/5 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-sm tracking-[0.3em] text-zinc-500 uppercase mb-8">Summary</h3>
        <p className="text-2xl md:text-4xl font-light leading-relaxed text-zinc-300 mb-16">
          Backend Developer specializing in building secure REST APIs and scalable systems using Java, Spring Boot, and MySQL. Proven ability to deliver reliable software solutions and solve complex engineering problems.
        </p>
        
        <div className="mt-8">
          <a href="https://drive.google.com/file/d/1V-qsj-fndzpSZNGzSxrqmkMsQK9sTwxZ/view?usp=drive_link" target="_blank" rel="noreferrer" className="inline-flex items-center px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
