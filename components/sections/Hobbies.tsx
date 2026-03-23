"use client";

import { useInView } from "@/hooks/useInView";
import { Gamepad2, Tv2, Clapperboard, Zap, PenTool } from "lucide-react";

const hobbies = [
  {
    icon: Clapperboard,
    title: "Video Editing",
    tag: "Creative",
    tagColor: "#a3e635",
    description:
      "Crafting cinematic stories through cuts, colour grading, and motion graphics. From raw footage to final export — I own the whole pipeline.",
    tools: ["Adobe After Effects", "Adobe Premiere Pro", "Motion Graphics", "Colour Grading"],
    accentColor: "#a3e635",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    tag: "Designer",
    tagColor: "#fb923c",
    description:
      "From brand identities to social media visuals — turning blank canvases into scroll-stopping designs with a sharp eye for typography and colour.",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Typography"],
    accentColor: "#fb923c",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    tag: "Player",
    tagColor: "#60a5fa",
    description:
      "Whether it's competitive ranked matches or immersive open-world adventures, gaming is where strategy meets instinct. GG no re.",
    tools: ["PC Gaming", "Competitive FPS", "RPGs", "Indie Games"],
    accentColor: "#60a5fa",
  },
  {
    icon: Tv2,
    title: "Anime",
    tag: "Weeb ✓",
    tagColor: "#f472b6",
    description:
      "From shonen epics to psychological thrillers — anime is a masterclass in storytelling, world-building, and making you cry at 3 AM.",
    tools: ["Shonen", "Seinen", "Isekai", "Psychological"],
    accentColor: "#f472b6",
  },
];

const adobeTools = [
  { label: "AE", full: "After Effects", color: "#9999ff" },
  { label: "PR", full: "Premiere Pro", color: "#ea77ff" },
];

export default function Hobbies() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section
      id="hobbies"
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{ padding: "6rem 0", background: "var(--bg-alt)", position: "relative" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--divider)" }} />

      <div className="container">
        {/* Header */}
        <div className={`reveal ${inView ? "visible" : ""}`} style={{ marginBottom: "3.5rem" }}>
          <span style={{
            display: "inline-block", marginBottom: 16,
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "3px 10px", background: "var(--accent)", color: "#0a0a0a",
            border: "1px solid var(--border-color)", fontFamily: "'Space Grotesk', sans-serif",
          }}>Beyond Code</span>
          <h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800, letterSpacing: "-0.04em",
            lineHeight: 1.0, color: "var(--text-primary)",
          }}>
            JACK OF{" "}
            <span style={{ background: "var(--accent)", padding: "0 6px", color: "#0a0a0a" }}>ALL</span>
            {" "}TRADES.
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: "1rem", maxWidth: 520, lineHeight: 1.7 }}>
            Code is only one chapter. Here&apos;s what keeps the creative engine running outside the terminal.
          </p>
        </div>

        {/* Adobe badge row */}
        <div
          className={`reveal ${inView ? "visible" : ""}`}
          style={{ display: "flex", gap: 12, marginBottom: "2.5rem", flexWrap: "wrap", alignItems: "center" }}
        >
          <span style={{
            fontSize: "0.72rem", fontWeight: 700, color: "var(--text-muted)",
            letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif",
          }}>Adobe Suite →</span>
          {adobeTools.map((t) => (
            <div key={t.label} style={{
              display: "flex", alignItems: "center", gap: 8,
              border: "1px solid var(--border-color)", padding: "5px 14px",
              background: "var(--card-bg)",
            }}>
              <span style={{
                width: 22, height: 22, background: t.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.6rem", fontWeight: 900, color: "#0a0a0a",
                fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.02em",
                flexShrink: 0,
              }}>{t.label}</span>
              <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", fontFamily: "'Space Grotesk', sans-serif" }}>
                {t.full}
              </span>
            </div>
          ))}
        </div>

        {/* Hobby Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }} className="hobbies-grid">
          {hobbies.map((h, i) => (
            <div
              key={h.title}
              className={`reveal reveal-delay-${i + 1} ${inView ? "visible" : ""}`}
              style={{
                border: "2px solid var(--border-color)", background: "var(--card-bg)",
                padding: "1.5rem", transition: "transform 0.15s", cursor: "default", position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translate(-3px, -3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
            >
              {/* Top accent line */}
              <div style={{ width: "100%", height: 4, background: h.accentColor, marginBottom: "1.25rem" }} />

              {/* Icon + Tag row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.875rem" }}>
                <div style={{
                  width: 42, height: 42, background: h.accentColor,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <h.icon size={20} color="#0a0a0a" />
                </div>
                <span style={{
                  fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "3px 8px", background: "transparent", color: h.tagColor,
                  border: `1px solid ${h.tagColor}`, fontFamily: "'Space Grotesk', sans-serif",
                }}>{h.tag}</span>
              </div>

              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.2rem",
                color: "var(--text-primary)", marginBottom: "0.6rem", letterSpacing: "-0.02em",
              }}>{h.title}</h3>

              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
                {h.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {h.tools.map((tool) => (
                  <span key={tool} style={{
                    fontSize: "0.72rem", padding: "3px 10px",
                    background: "var(--card-tag-bg)", color: "var(--text-secondary)",
                    border: "1px solid var(--border-light)",
                    fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500,
                  }}>{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fun footer quote */}
        <div className={`reveal ${inView ? "visible" : ""}`} style={{ marginTop: "2.5rem", display: "flex", alignItems: "center", gap: 12 }}>
          <Zap size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "'Space Grotesk', sans-serif", fontStyle: "italic" }}>
            &quot;A jack of all trades is a master of none, but oftentimes better than a master of one.&quot;
          </p>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--divider)" }} />
      <style dangerouslySetInnerHTML={{ __html: `@media (max-width: 640px) { .hobbies-grid { grid-template-columns: 1fr !important; } }` }} />
    </section>
  );
}
