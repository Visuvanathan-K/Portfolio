import React from 'react';

const projects = [
  { 
    id: 1, 
    title: 'Intrusion Detection System', 
    tech: 'Python, TensorFlow/Keras, LSTM, Scikit-learn, Pandas, NumPy', 
    description: 'Developed an LSTM-based deep learning model to classify network traffic as normal or malicious using the Darknet dataset. Preprocessed features, handled missing values, and normalized data for training. Evaluated model with accuracy, precision, recall, F1-score, and confusion matrix; built a prediction pipeline for classifying new network traffic samples.',
    link: 'https://github.com/Visuvanathan-K/Intrusion-Detection-System',
    image: '/images/ids_project.png'
  },
  { 
    id: 2, 
    title: 'RAG PDF Q&A System', 
    tech: 'Python, FastAPI, Streamlit, ChromaDB, Groq Llama 3.3, Inngest, Sentence Transformers', 
    description: 'Built an end-to-end RAG application for PDF upload and Q&A. Implemented text chunking, semantic embeddings via Sentence Transformers, and vector storage with ChromaDB. Developed event-driven backend (FastAPI + Inngest) and integrated Groq Llama 3.3 for context-aware answers; built Streamlit UI for real-time indexing.',
    link: 'https://github.com/Visuvanathan-K/RAG-PDF-Question-Answering',
    image: '/images/rag_project.png'
  },
  { 
    id: 3, 
    title: 'OCR Text Extraction', 
    tech: 'Python, EasyOCR, OpenCV, Streamlit, NumPy', 
    description: 'Built a web-based OCR application using EasyOCR for image text extraction with OpenCV preprocessing (bounding boxes, normalization); supported PNG, JPG, JPEG, and WEBP formats via a clean Streamlit interface.',
    link: 'https://github.com/Visuvanathan-K/OCR-Text-Extraction',
    image: '/images/ocr_project.png'
  },
  { 
    id: 4, 
    title: 'Bookstore API', 
    tech: 'Java, Spring Boot, Hibernate (JPA), MySQL, QueryDSL, JWT', 
    description: 'Secure REST API implementing JWT authentication and modular layered architecture. Designed normalized schema and optimized queries with QueryDSL. Achieved a 40% performance improvement with proper pagination and exception handling.',
    link: 'https://github.com/Visuvanathan-K/Bookstore-Api',
    image: '/images/bookstore_project.png'
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative min-h-screen bg-[#050505] text-white px-6 md:px-24 py-32 object-cover border-t border-white/5">
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

        {/* View All Projects CTA */}
        <div className="mt-20 text-center">
          <a 
            href="https://github.com/Visuvanathan-K" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-zinc-300 font-semibold hover:bg-white/10 hover:border-[#00ff88]/30 hover:text-white transition-all duration-300 shadow-md group"
          >
            <span>View All Projects on GitHub</span>
            <span className="text-xl group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
