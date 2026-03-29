import "./index.css";
import GlassNav from "@/components/GlassNav";
import SocialBar from "./components/SocialBar";
import ASCIIText from "./components/ASCIIText";
import About from "@/sections/About";
import Exeperience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function App() {
  return (
    <div className="bg-black text-white">
      <GlassNav className="mt-2" />
      <SocialBar />

      <div style={{ height: "var(--nav-h)" }} />

      <main className="mx-auto px-6">
        <section
          id="home"
          className="h-[calc(100vh-var(--nav-h))] scroll-mt-[var(--nav-h)] flex items-center justify-center"
        >
          <ASCIIText
            text="Hey!"
            enableWaves={true}
            asciiFontSize={11}
            textFontSize={65}
          />
        </section>

        <section id="about" className="h-[calc(100vh-var(--nav-h))] scroll-mt-[var(--nav-h)] flex items-center justify-center">
          <About />
        </section>

        <section id="experience" className="h-[calc(100vh-var(--nav-h))] scroll-mt-[var(--nav-h)] flex items-center justify-center">
          <Exeperience/>
        </section>

        <section
          id="projects"
          className="scroll-mt-[var(--nav-h)] flex items-center justify-center"
        >
          <Projects/>
        </section>

        <section
          id="contact"
          className="h-[calc(100vh-var(--nav-h))] scroll-mt-[var(--nav-h)] flex items-center justify-center"
        >
          <Contact/>
        </section>
      </main>
    </div>
  );
}


