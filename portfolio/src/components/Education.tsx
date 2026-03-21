import React from 'react';

export function Education() {
  return (
    <section className="relative bg-[#050505] text-white px-6 md:px-24 py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Education</h2>
        <div className="w-16 h-px bg-white/20 mx-auto mt-8"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative pl-8 md:pl-0">
          {/* Timeline marker for mobile */}
          <div className="absolute left-0 top-6 w-2 h-2 rounded-full bg-white/40 md:hidden"></div>

          <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-all duration-500 shadow-[0_5px_40px_rgba(0,0,0,0.3)]">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm tracking-widest text-zinc-400 mb-8 font-light shadow-sm">
              Sep 2020 — Jun 2024
            </div>
            
            <div className="flex items-start gap-4 mb-8 text-left">
              <span className="text-3xl mt-1">🎓</span>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">B.Tech in Computer Science &amp; Engineering</h3>
                <p className="text-zinc-400 font-light flex items-center gap-2 flex-wrap">
                  <span className="text-white/80 shrink-0">Jeppiaar Engineering College</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></span>
                  <span className="text-sm shrink-0">Chennai, India</span>
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] mb-8 font-light leading-relaxed">
              Graduating with a CGPA of 8.38/10, focusing on core computer science subjects and software engineering principles.
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {['Computer Science', 'Software Engineering', 'Backend Development', 'Database Systems', 'Engineering'].map(pill => (
                <span key={pill} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 tracking-wider hover:bg-white/10 transition-colors">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
