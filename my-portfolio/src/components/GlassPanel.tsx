import React from "react";
import clsx from "clsx";

type GlassPanelProps = {
  as?: keyof JSX.IntrinsicElements;
  tone?: "dark" | "light";
  className?: string;
  children: React.ReactNode;
};

/**
 * A faint glass / framed panel with subtle blur, ring, and inset highlight.
 */
export default function GlassPanel({
  as: Tag = "section",
  tone = "dark",
  className,
  children,
}: GlassPanelProps) {
  const palette =
    tone === "dark"
      ? // dark bg (on black pages)
        "bg-white/5 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
      : // light bg (on white pages)
        "bg-black/5 ring-black/10 shadow-[inset_0_1px_0_rgba(0,0,0,0.06)]";

  return (
    <Tag
      className={clsx(
        "relative rounded-3xl backdrop-blur-md ring-1",
        "p-8 md:p-10",
        "motion-safe:transition-shadow hover:ring-white/20",
        palette,
        className
      )}
    >
      {/* very faint vignette/frame to sell the panel look */}
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 rounded-3xl",
          // subtle inner frame line
          "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]",
          // soft top highlight & side fade using a mask
          "[mask-image:radial-gradient(120%_60%_at_50%_-20%,black,transparent)]"
        )}
      />
      <div className="relative">{children}</div>
    </Tag>
  );
}
