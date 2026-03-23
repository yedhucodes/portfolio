"use client";

import { useInView } from "@/hooks/useInView";
import { Trophy, Users, GitFork, Award } from "lucide-react";

const highlights = [
  { icon: Trophy,  label: "15+ Live Projects",          accentColor: "var(--accent)" },
  { icon: Users,   label: "Hackathon Mentor",            accentColor: "var(--accent)" },
  { icon: GitFork, label: "Assisted Many Projects",      accentColor: "var(--accent-yellow)" },
  { icon: Award,   label: "Biz Idea Competition Winner", accentColor: "var(--accent-yellow)" },
];

export default function About() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{ padding: "6rem 0", background: "var(--bg-alt)", position: "relative" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--divider)" }} />

      <div className="container">
        <div className={`reveal ${inView ? "visible" : ""}`} style={{ marginBottom: "3.5rem" }}>
          <span style={{
            display: "inline-block", marginBottom: 16,
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "3px 10px", background: "var(--accent)", color: "#0a0a0a",
            border: "1px solid var(--border-color)", fontFamily: "'Space Grotesk', sans-serif",
          }}>About</span>
          <h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800, letterSpacing: "-0.04em",
            lineHeight: 1.0, color: "var(--text-primary)",
          }}>
            I TURN COMPLEX
            <br />
            <span style={{ background: "var(--accent)", padding: "0 6px", color: "#0a0a0a" }}>PROBLEMS</span>
            {" "}INTO
            <br />
            SOLUTIONS.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="about-grid">
          {/* Left */}
          <div className={`reveal-left ${inView ? "visible" : ""}`}>
            {[
              { bold: "I'm Yedhu Krishnan,", rest: " an Automation Engineer and Full-Stack Developer who obsesses over making things work — faster, smarter, and at scale." },
              { rest: "My journey started with a simple idea: every repetitive task is a bug waiting to be fixed. That mindset led me to build POS systems, WhatsApp bots, machine learning models, and interactive web platforms." },
              { rest: "I work with clients who need solutions that actually ship — production-ready systems that integrate APIs, automate workflows, and save dozens of hours every week." },
            ].map((p, i) => (
              <p key={i} style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1rem" }}>
                {p.bold ? <><strong style={{ color: "var(--text-primary)" }}>{p.bold}</strong>{p.rest}</> : p.rest}
              </p>
            ))}
            <div style={{ display: "flex", gap: 12, marginTop: "1.5rem", flexWrap: "wrap" }}>
              <a href="#projects" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--accent)", color: "#0a0a0a", border: "2px solid var(--border-color)",
                padding: "12px 24px", fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.04em", textTransform: "uppercase",
                textDecoration: "none", transition: "all 0.15s",
              }}>See My Work</a>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", color: "var(--text-primary)", border: "2px solid var(--border-color)",
                padding: "12px 24px", fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.04em", textTransform: "uppercase",
                textDecoration: "none", transition: "all 0.15s",
              }}>Collaborate</a>
            </div>
          </div>

          {/* Right */}
          <div className={`reveal-right ${inView ? "visible" : ""}`}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
              {highlights.map((h, i) => (
                <div key={h.label}
                  className={`reveal reveal-delay-${i + 1} ${inView ? "visible" : ""}`}
                  style={{
                    background: "var(--card-bg)", border: "2px solid var(--border-color)",
                    padding: "1rem", display: "flex", alignItems: "center", gap: 10,
                    transition: "transform 0.2s", cursor: "default",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translate(-2px, -2px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
                >
                  <h.icon size={16} style={{ color: h.accentColor, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-primary)", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.3 }}>
                    {h.label}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
              {[
                { value: "15+", label: "Live Projects" },
                { value: "3+",  label: "Years Exp" },
                { value: "100%", label: "Shipped" },
              ].map((stat) => (
                <div key={stat.label} style={{
                  border: "2px solid var(--border-color)", padding: "1rem",
                  textAlign: "center", background: "var(--card-bg)",
                }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em", lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: 4, fontFamily: "'Space Grotesk', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--divider)" }} />
      <style dangerouslySetInnerHTML={{ __html: `@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }` }} />
    </section>
  );
}
