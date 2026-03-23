"use client";

import { useInView } from "@/hooks/useInView";

const skillCategories = [
  { title: "Programming",  color: "#a3e635", skills: ["Python", "JavaScript", "TypeScript", "HTML/CSS"] },
  { title: "Frameworks",   color: "#fbbf24", skills: ["Flask", "Django", "Next.js", "React"] },
  { title: "Automation",   color: "#60a5fa", skills: ["n8n", "API Integrations", "Webhooks", "WhatsApp API"] },
  { title: "Data & ML",    color: "#f472b6", skills: ["Pandas", "NumPy", "scikit-learn", "OpenCV"] },
  { title: "Tools",        color: "#34d399", skills: ["Git", "GitHub", "Figma", "WordPress"] },
  { title: "Databases",    color: "#fb923c", skills: ["MongoDB", "PostgreSQL", "SQLite", "Firebase"] },
];

export default function Skills() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section id="skills" ref={sectionRef as React.RefObject<HTMLElement>}
      style={{ padding: "6rem 0", background: "var(--bg)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--divider)" }} />

      <div className="container">
        <div className={`reveal ${inView ? "visible" : ""}`} style={{ marginBottom: "3rem" }}>
          <span style={{
            display: "inline-block", marginBottom: 16,
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "3px 10px", background: "var(--accent)", color: "#0a0a0a",
            border: "1px solid var(--border-color)", fontFamily: "'Space Grotesk', sans-serif",
          }}>Expertise</span>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--text-primary)" }}>
            SKILLS &amp;{" "}<span style={{ background: "var(--accent)", padding: "0 6px", color: "#0a0a0a" }}>TOOLS</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.875rem" }}>
          {skillCategories.map((cat, i) => (
            <div key={cat.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${inView ? "visible" : ""}`}
              style={{
                border: "2px solid var(--border-color)", padding: "1.25rem",
                background: "var(--card-bg)", transition: "transform 0.15s", cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translate(-3px, -3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "")}>
              <div style={{ width: "100%", height: 4, background: cat.color, marginBottom: "0.875rem" }} />
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.85rem",
                letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "0.75rem",
              }}>{cat.title}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cat.skills.map((skill) => (
                  <span key={skill} style={{
                    fontSize: "0.75rem", padding: "3px 10px",
                    background: "var(--card-tag-bg)", color: "var(--text-secondary)",
                    border: "1px solid var(--border-light)",
                    fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500,
                  }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--divider)" }} />
    </section>
  );
}
