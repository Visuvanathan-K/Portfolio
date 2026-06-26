import React from 'react';

export function Experience() {
  return (
    <section className="relative bg-[#050505] text-white px-6 md:px-24 py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Experience</h2>
        <div className="w-16 h-px bg-white/20 mx-auto mt-8"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative pl-8 md:pl-0">
          {/* Timeline marker for mobile */}
          <div className="absolute left-0 top-6 w-2 h-2 rounded-full bg-white/40 md:hidden"></div>

          <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-all duration-500 shadow-[0_5px_40px_rgba(0,0,0,0.3)]">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">NLC India Limited</h3>
            <p className="text-[#00ff88] font-medium tracking-widest uppercase text-sm mb-10">
              Intern
            </p>

            <ul className="space-y-5 text-zinc-300 font-light leading-relaxed mb-10">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2.5 mr-4 shrink-0"></span>
                <span>Built a Data Analysis &amp; Reminder Application — automated reporting workflows reducing manual effort by 30% and improving schedule adherence by 25%.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2.5 mr-4 shrink-0"></span>
                <span>Gained exposure to industrial-scale SDLC, agile practices, and cross-functional collaboration in a real-world engineering environment.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {['Data Analysis', 'Workflow Automation', 'SDLC', 'Agile Practices'].map(pill => (
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
