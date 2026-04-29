import ClientOnly from "@/components/ClientOnly";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Project from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <ClientOnly>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </ClientOnly>
  );
}