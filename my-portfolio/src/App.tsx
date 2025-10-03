import "./index.css";
import GlassNav from "@/components/GlassNav";
import ASCIIText from "./components/ASCIIText";
import About from "@/sections/About";

export default function App() {
  return (
    <div className="bg-black text-white">
      {/* Fixed navbar */}
      <GlassNav className="mt-2" />

      {/* Spacer equal to nav height so first section starts below the bar */}
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

        <section
          id="about"
          className="h-[calc(100vh-var(--nav-h))] scroll-mt-[var(--nav-h)] flex items-center justify-center"
        >
          <About />
        </section>

        <section
          id="experience"
          className="h-[calc(100vh-var(--nav-h))] scroll-mt-[var(--nav-h)] flex items-center justify-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">Experience</h2>
            <p>Experience content…</p>
          </div>
        </section>

        <section
          id="projects"
          className="h-[calc(100vh-var(--nav-h))] scroll-mt-[var(--nav-h)] flex items-center justify-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">Projects</h2>
            <p>Projects content…</p>
          </div>
        </section>

        <section
          id="resume"
          className="h-[calc(100vh-var(--nav-h))] scroll-mt-[var(--nav-h)] flex items-center justify-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">Resume</h2>
            <p>Resume content…</p>
          </div>
        </section>

        <section
          id="contact"
          className="h-[calc(100vh-var(--nav-h))] scroll-mt-[var(--nav-h)] flex items-center justify-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">Contact</h2>
            <p>Contact content…</p>
          </div>
        </section>
      </main>
    </div>
  );
}
