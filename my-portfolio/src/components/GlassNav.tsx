import { useState } from "react";
import "./GlassNav.css";

type Item = { label: string; href: string };

const defaultItems: Item[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
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
                  // keep hash navigation but also set active
                  if (it.href.startsWith("#")) e.preventDefault();
                  setActive(it.href);
                  if (it.href.startsWith("#")) window.location.hash = it.href;
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
