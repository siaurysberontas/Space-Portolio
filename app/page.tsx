
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full"  style={{ pointerEvents: "none" }}>
      <div className="flex flex-col gap-0">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
