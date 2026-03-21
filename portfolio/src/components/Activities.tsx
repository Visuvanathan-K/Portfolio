import React from 'react';

export function Activities() {
  return (
    <section className="relative bg-[#050505] text-white px-6 md:px-24 py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Activities &amp; Leadership</h2>
        <div className="w-16 h-px bg-white/20 mx-auto mt-8"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md relative hover:border-white/20 transition-all duration-500 shadow-[0_5px_40px_rgba(0,0,0,0.3)]">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">Volleyball Team Leader</h3>
          <p className="text-zinc-400 font-light mb-8 italic">
            @ Jeppiaar Engineering College
          </p>

          <ul className="space-y-5 text-zinc-300 font-light leading-relaxed mb-10">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2.5 mr-4 shrink-0"></span>
              <span>Led the college volleyball team to become Zonal Runner-Up, showcasing strong leadership and team coordination skills.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2.5 mr-4 shrink-0"></span>
              <span>Collaborated effectively with team members to strategize and execute game plans under competitive pressure.</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {['Leadership', 'Teamwork', 'Sports'].map(pill => (
              <span key={pill} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 tracking-wider hover:bg-white/10 transition-colors">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
