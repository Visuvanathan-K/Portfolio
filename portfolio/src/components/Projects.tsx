import React from 'react';

const projects = [
  { 
    id: 1, 
    title: 'Bookstore API', 
    tech: 'Java, Spring Boot, Hibernate (JPA), MySQL, QueryDSL, JWT', 
    description: 'Secure REST API implementing JWT authentication and modular layered architecture. Designed normalized schema and optimized queries with QueryDSL. Achieved a 40% performance improvement with proper pagination and exception handling.',
    link: 'https://github.com/Visuvanathan-K/Bookstore-Api',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2600&auto=format&fit=crop'
  },
  { 
    id: 2, 
    title: 'Employee Management', 
    tech: 'Java, Spring Boot, Hibernate, MySQL', 
    description: 'RESTful CRUD API built to handle 5000+ records efficiently with a response time consistently under 200ms. Focused on clean architecture, API design, robust database schemas, and backend testing.',
    link: 'https://github.com/Visuvanathan-K/Employee-Management',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop'
  },
  { 
    id: 3, 
    title: 'Library Management', 
    tech: 'Java, Swing, MySQL', 
    description: 'A desktop application integrating a responsive Swing UI with a MySQL backend. Implemented real-time search filters and transaction logging to enhance operations for librarians.',
    link: 'https://github.com/Visuvanathan-K/Java-Projects',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=2574&auto=format&fit=crop'
  },
  { 
    id: 4, 
    title: 'Typing Speed Test', 
    tech: 'Java', 
    description: 'A logic-driven console application built strictly in Java to track and measure typing speed and accuracy in real-time, providing deep analytics and error tracking dynamically.',
    link: 'https://github.com/Visuvanathan-K/Java-Projects',
    image: 'https://images.unsplash.com/photo-1555532538-dcdbd01d3738?q=80&w=2752&auto=format&fit=crop'
  },
];

export function Projects() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white px-6 md:px-24 py-32 object-cover border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h3 className="text-sm tracking-[0.3em] text-zinc-500 uppercase mb-4">Technical Portfolio</h3>
          <h2 className="text-4xl md:text-7xl font-light tracking-tight">Recent Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <a 
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`group relative aspect-[4/5] md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-700 hover:border-white/30 hover:shadow-[0_0_80px_rgba(255,255,255,0.05)] md:hover:-translate-y-4 cursor-pointer block ${i % 2 === 1 ? 'md:mt-24' : ''}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 transition-all duration-700 group-hover:opacity-60 mix-blend-screen scale-100 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 transition-opacity duration-700 pointer-events-none" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-10 text-left">
                <p className="text-zinc-300 text-xs tracking-widest uppercase mb-3 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {project.tech}
                </p>
                <h4 className="text-3xl font-medium tracking-tight mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  {project.title}
                </h4>
                <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-75 opacity-0 group-hover:opacity-100">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
