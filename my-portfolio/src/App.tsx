import { useEffect, useState } from "react";
import "./index.css";
import GlassNav from "@/components/GlassNav";
import SocialBar from "./components/SocialBar";
import ASCIIText from "./components/ASCIIText";
import About from "@/sections/About";
import Exeperience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

function getAsciiSize(w: number) {
  if (w < 400) return { textFontSize: 28, asciiFontSize: 7,  planeBaseHeight: 4 };
  if (w < 640) return { textFontSize: 38, asciiFontSize: 8,  planeBaseHeight: 5.5 };
  if (w < 1024) return { textFontSize: 50, asciiFontSize: 10, planeBaseHeight: 7 };
  return { textFontSize: 65, asciiFontSize: 11, planeBaseHeight: 8 };
}

function useAsciiSize() {
  const [size, setSize] = useState(() => getAsciiSize(window.innerWidth));

  useEffect(() => {
    function update() {
      setSize(getAsciiSize(window.innerWidth));
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

export default function App() {
  const { textFontSize, asciiFontSize, planeBaseHeight } = useAsciiSize();

  return (
    <div className="bg-black text-white">
      <GlassNav className="mt-2" />
      <SocialBar />

      <main>
        {/* Hero */}
        <section
          id="home"
          className="min-h-screen scroll-mt-20 flex items-center justify-center"
        >
          <ASCIIText
            text="Hey!"
            enableWaves={true}
            asciiFontSize={asciiFontSize}
            textFontSize={textFontSize}
            planeBaseHeight={planeBaseHeight}
          />
        </section>

        {/* About */}
        <section
          id="about"
          className="min-h-screen scroll-mt-20 flex items-center justify-center py-12"
        >
          <About />
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="min-h-screen scroll-mt-20 flex items-center justify-center py-12"
        >
          <Exeperience />
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-20 flex items-center justify-center py-12"
        >
          <Projects />
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="min-h-screen scroll-mt-20 flex items-center justify-center py-12"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
}