import "./index.css";
import GlassNav from "@/components/GlassNav";
import ASCIIText from "./components/ASCIIText";
// import DecryptedText from "./components/DecryptedText";

export default function App() {
  return (
    <div className="min-h-[200vh] bg-black text-white">
      {/* fixed bar sits on top */}
      <GlassNav className="mt-2" />
      {/* the sections */}
      <main className="mx-auto px-6">
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center"
          >
            <ASCIIText
              text="Hey!"
              enableWaves={true}
              asciiFontSize={9}
              textFontSize={55}
            />
          </section>

        <section id="about" className="min-h-screen scroll-mt-28 py-24">
          <div style={{ marginTop: '4rem' }}>
          {/* <DecryptedText
            text="This text animates when in view"
            animateOn="view"
            revealDirection="center"
          /> */}
          </div>
        </section>

        <section id="experience" className="min-h-screen scroll-mt-28 py-24">
          <h2 className="text-4xl font-bold mb-6">Experience</h2>
          <p>Experience content…</p>
        </section>

        <section id="projects" className="min-h-screen scroll-mt-28 py-24">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>
          <p>Projects content…</p>
        </section>

        <section id="resume" className="min-h-screen scroll-mt-28 py-24">
          <h2 className="text-4xl font-bold mb-6">Resume</h2>
          <p>Resume content…</p>
        </section>

        <section id="contact" className="min-h-screen scroll-mt-28 py-24">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p>Contact content…</p>
        </section>
      </main>
    </div>
  );
}
