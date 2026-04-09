// import { useState } from "react";
// import "./GlassNav.css";

// type Item = { label: string; href: string };

// const defaultItems: Item[] = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Experience", href: "#experience" },
//   { label: "Projects", href: "#projects" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function GlassNav({
//   items = defaultItems,
//   className = "",
// }: {
//   items?: Item[];
//   className?: string;
// }) {
//   const [active, setActive] = useState(items[0]?.href ?? "#");

//   return (
//     <nav className={`glass-nav ${className}`}>
//       <div className="glass-filter" />
//       <div className="glass-overlay" />
//       <div className="glass-specular" />

//       <div className="glass-content">
//         <ul className="nav-list">
//           {items.map((it) => (
//             <li key={it.href}>
//               <a
//                 href={it.href}
//                 className={`nav-item ${active === it.href ? "active" : ""}`}
//                 onClick={(e) => {
//                   // keep hash navigation but also set active
//                   if (it.href.startsWith("#")) e.preventDefault();
//                   setActive(it.href);
//                   if (it.href.startsWith("#")) window.location.hash = it.href;
//                 }}
//               >
//                 {it.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

import { useEffect, useState } from "react";
import "./GlassNav.css";

type Item = { label: string; href: string };

const defaultItems: Item[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function GlassNav({
  items = defaultItems,
  className = "",
}: {
  items?: Item[];
  className?: string;
}) {
  const [active, setActive] = useState(items[0]?.href ?? "#");

  // 🔥 SCROLL SPY
  useEffect(() => {
    const sections = items
      .map((it) => document.querySelector(it.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        let visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = "#" + visible[0].target.id;
          setActive(id);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -35% 0px", // 
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className={`glass-nav ${className}`}>
      <div className="glass-filter" />
      <div className="glass-overlay" />
      <div className="glass-specular" />

      <div className="glass-content">
        <ul className="nav-list">
          {items.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                className={`nav-item ${active === it.href ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();

                  const el = document.querySelector(it.href);
                  if (!el) return;

                  // 🔥 always scroll (even if already on section)
                  el.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });

                  setActive(it.href);
                  window.history.replaceState(null, "", it.href);
                }}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}