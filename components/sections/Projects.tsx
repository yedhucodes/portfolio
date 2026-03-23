"use client";

import { useInView } from "@/hooks/useInView";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  { title: "POS Automation System", description: "Full-featured Point-of-Sale system for retail/wholesale. Inventory, billing, daily reports, and Flutter mobile front-end.", tags: ["Python", "Flask", "Flutter", "SQLite"], color: "#a3e635", badge: "Full-Stack", github: "#", demo: "#" },
  { title: "WhatsApp Order Automation", description: "AI-powered WhatsApp ordering bot. Mini-bill receipts, QR codes, and admin alerts on order confirmation.", tags: ["Python", "WhatsApp API", "MongoDB"], color: "#fbbf24", badge: "Automation", github: "#", demo: "#" },
  { title: "FocusED Learning Platform", description: "Distraction-free e-learning platform with course modules, progress tracking, quizzes, and pomodoro timer.", tags: ["Next.js", "React", "PostgreSQL"], color: "#60a5fa", badge: "Web App", github: "#", demo: "#" },
  { title: "Car Price Prediction", description: "ML pipeline predicting used car prices by make, model, year, and mileage. Flask API + interactive UI.", tags: ["Python", "scikit-learn", "Flask"], color: "#f472b6", badge: "ML / Data", github: "#", demo: "#" },
  { title: "Lane Detection System", description: "Real-time lane detection for autonomous vehicle safety using Hough transforms and perspective correction.", tags: ["Python", "OpenCV", "NumPy"], color: "#34d399", badge: "AI / Vision", github: "#", demo: "#" },
];

export default function Projects() {
  const { ref: sectionRef, inView } = useInView(0.08);

  return (
    <section id="projects" ref={sectionRef as React.RefObject<HTMLElement>}
      style={{ padding: "6rem 0", background: "var(--bg-alt)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--divider)" }} />

      <div className="container">
        <div className={`reveal ${inView ? "visible" : ""}`} style={{ marginBottom: "3rem" }}>
          <span style={{
            display: "inline-block", marginBottom: 16,
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "3px 10px", background: "var(--accent)", color: "#0a0a0a",
            border: "1px solid var(--border-color)", fontFamily: "'Space Grotesk', sans-serif",
          }}>Projects</span>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--text-primary)" }}>
            THINGS I&apos;VE{" "}<span style={{ background: "var(--accent-yellow)", padding: "0 6px", color: "#0a0a0a" }}>BUILT</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "0.875rem" }}>
          {projects.map((project, i) => (
            <div key={project.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${inView ? "visible" : ""}`}
              style={{
                border: "2px solid var(--border-color)", background: "var(--card-bg)",
                display: "flex", flexDirection: "column",
                transition: "transform 0.15s", cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translate(-3px, -3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "")}>
              <div style={{ height: 6, background: project.color, flexShrink: 0 }} />
              <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{
                    fontSize: "0.68rem", fontWeight: 700,
                    background: project.color, color: "#0a0a0a", padding: "2px 8px",
                    fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase",
                  }}>{project.badge}</span>
                  <div style={{ display: "flex", gap: 6 }}>
                    {[{ href: project.github, Icon: Github, label: "GitHub" }, { href: project.demo, Icon: ExternalLink, label: "Demo" }].map(({ href, Icon, label }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                        style={{
                          width: 30, height: 30, border: "1px solid var(--border-light)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "var(--text-muted)", textDecoration: "none", transition: "all 0.15s",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--text-primary)"; (e.currentTarget as HTMLElement).style.color = "var(--bg)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                      ><Icon size={13} /></a>
                    ))}
                  </div>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", marginBottom: 8 }}>{project.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.83rem", lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{project.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: "0.7rem", padding: "3px 8px",
                      background: "var(--card-tag-bg)", color: "var(--text-secondary)",
                      border: "1px solid var(--border-light)", fontFamily: "'Space Grotesk', sans-serif",
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <a href="https://github.com/xLUFFY007" target="_blank" rel="noopener noreferrer"
            className={`reveal reveal-delay-5 ${inView ? "visible" : ""}`}
            style={{
              border: "2px dashed var(--border-light)", background: "transparent",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              textAlign: "center", minHeight: 200, textDecoration: "none", transition: "all 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--text-primary)"; (e.currentTarget as HTMLElement).style.background = "var(--text-primary)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            <ArrowUpRight size={28} style={{ color: "var(--text-muted)", marginBottom: 8 }} />
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "var(--text-secondary)" }}>View All on GitHub</p>
          </a>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--divider)" }} />
    </section>
  );
}
