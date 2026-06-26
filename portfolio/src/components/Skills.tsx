import React from 'react';

const skills = [
  {
    category: "Programming Languages",
    icon: "📜",
    items: ["Java", "Python", "JavaScript"]
  },
  {
    category: "Frameworks & Web",
    icon: "⚙️",
    items: ["Spring Boot", "FastAPI", "Streamlit", "TensorFlow/Keras"]
  },
  {
    category: "AI/ML & Vector Search",
    icon: "🧠",
    items: ["Deep Learning (LSTM)", "Retrieval-Augmented Generation (RAG)", "Sentence Transformers", "LLM Integration (Groq/Llama 3.3)", "EasyOCR"]
  },
  {
    category: "Databases & Vector DBs",
    icon: "🗄️",
    items: ["MySQL", "ChromaDB (Vector DB)", "H2"]
  },
  {
    category: "Tools & Libraries",
    icon: "🛠️",
    items: ["Hibernate (JPA)", "QueryDSL", "JWT", "OpenCV", "Pandas & NumPy", "Scikit-learn", "Inngest", "Git & GitHub"]
  },
  {
    category: "Practices & Concepts",
    icon: "🏗️",
    items: ["REST APIs", "Vector Search", "Network Security", "Data Preprocessing", "OOP", "Agile/Scrum"]
  }
];

export function Skills() {
  return (
    <section className="relative bg-[#050505] text-white px-6 md:px-24 py-32 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Technical Skills</h2>
        <h3 className="text-xs md:text-sm tracking-[0.3em] text-zinc-500 uppercase">I constantly try to improve</h3>
        <div className="w-16 h-px bg-white/20 mx-auto mt-8"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
            <div className="flex items-center gap-4 w-full md:w-1/3 mt-1.5 md:mt-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg shrink-0 border border-white/10">
                {skillGroup.icon}
              </div>
              <h4 className="text-xl font-medium tracking-wide">{skillGroup.category}</h4>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-wrap gap-4">
              {skillGroup.items.map((item, i) => (
                <div key={i} className="px-5 py-3 md:px-6 md:py-3.5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm shadow-sm flex items-center gap-3 w-full sm:w-auto">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                  <span className="font-light tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
