import React from 'react';

export function Activities() {
  return (
    <section className="relative bg-[#050505] text-white px-6 md:px-24 py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Activities &amp; Leadership</h2>
        <div className="w-16 h-px bg-white/20 mx-auto mt-8"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Card: Volleyball */}
        <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md relative hover:border-[#00ff88]/30 hover:bg-white/[0.08] transition-all duration-500 shadow-[0_5px_40px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl">🏆</span>
            <div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight">Volleyball Team Leader</h3>
              <p className="text-zinc-400 font-light text-sm italic">@ Jeppiaar Engineering College</p>
            </div>
          </div>

          <ul className="space-y-4 text-zinc-300 font-light leading-relaxed mb-8">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-2.5 mr-4 shrink-0"></span>
              <span>Led the college volleyball team to become Zonal Runner-Up, showcasing strong leadership, determination, and team coordination skills.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-2.5 mr-4 shrink-0"></span>
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

        {/* Two Columns Grid for other activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 2: LeetCode */}
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md relative hover:border-[#00ff88]/30 hover:bg-white/[0.08] transition-all duration-500 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">💻</span>
              <div>
                <h3 className="text-xl font-medium tracking-tight">LeetCode DSA Solver</h3>
                <p className="text-[#00ff88] font-light text-xs tracking-wider uppercase">Top 15% Percentile</p>
              </div>
            </div>
            <p className="text-zinc-300 font-light leading-relaxed mb-6 text-sm">
              Solved 70+ problems focused on core Data Structures &amp; Algorithms, demonstrating strong logical reasoning and problem-solving skills.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Data Structures', 'Algorithms', 'Logic'].map(pill => (
                <span key={pill} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-zinc-300 tracking-wider">
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Naan Mudhalvan */}
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md relative hover:border-sky-500/30 hover:bg-white/[0.08] transition-all duration-500 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">🎓</span>
              <div>
                <h3 className="text-xl font-medium tracking-tight">Python Full Stack</h3>
                <p className="text-sky-400 font-light text-xs tracking-wider uppercase">Naan Mudhalvan Program</p>
              </div>
            </div>
            <p className="text-zinc-300 font-light leading-relaxed mb-6 text-sm">
              Completed professional certification in Full Stack Development with Python, building full-scale web interfaces and integration patterns.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Full Stack', 'Web Development'].map(pill => (
                <span key={pill} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-zinc-300 tracking-wider">
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
