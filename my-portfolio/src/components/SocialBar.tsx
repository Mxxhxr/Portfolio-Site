import React from "react";
import { Github, Linkedin, FileText } from "lucide-react";

const SocialBar: React.FC = () => {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6">
      
      {/* GitHub */}
      <a
        href="https://github.com/Mxxhxr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-white transition"
      >
        <Github size={22} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/maahir-vohra-669914234/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-white transition"
      >
        <Linkedin size={22} />
      </a>

      {/* Resume */}
      <a
        href="/Maahir_Vohra_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-white transition"
      >
        <FileText size={22} />
      </a>

      {/* vertical line */}
      <div className="w-px h-20 bg-neutral-700 mt-2" />
    </div>
  );
};

export default SocialBar;