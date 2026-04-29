import React from "react";
import { Github, Linkedin, FileText } from "lucide-react";

const links = [
  { href: "https://github.com/Mxxhxr", icon: <Github size={22} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/maahir-vohra-669914234/", icon: <Linkedin size={22} />, label: "LinkedIn" },
  { href: `${import.meta.env.BASE_URL}Maahir_Vohra_Resume.pdf`, icon: <FileText size={22} />, label: "Resume" },
];

const SocialBar: React.FC = () => {
  return (
    <>
      {/* Desktop: fixed vertical bar on the left */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6">
        {links.map(({ href, icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition" aria-label={label}>
            {icon}
          </a>
        ))}
        <div className="w-px h-20 bg-neutral-700 mt-2" />
      </div>

      {/* Mobile: fixed horizontal bar at the bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden justify-center items-center gap-8 py-4
                      bg-black/60 backdrop-blur-sm border-t border-neutral-800">
        {links.map(({ href, icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition" aria-label={label}>
            {icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialBar;