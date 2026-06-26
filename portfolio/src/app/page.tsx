import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white antialiased">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Activities />
      <Projects />
      <Contact />
    </main>
  );
}
