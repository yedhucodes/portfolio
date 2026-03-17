"use client";

import { Code2, Cpu, Globe, Sparkles } from "lucide-react";

const highlights = [
  { icon: Code2, label: "50+ Projects Built", color: "#3b82f6" },
  { icon: Cpu, label: "Automation Expert", color: "#8b5cf6" },
  { icon: Globe, label: "Freelance Ready", color: "#22c55e" },
  { icon: Sparkles, label: "AI-Powered Tools", color: "#f59e0b" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 0",
        position: "relative",
        zIndex: 1,
        background: "linear-gradient(180deg, transparent 0%, rgba(0,102,255,0.02) 50%, transparent 100%)",
      }}
    >
      {/* Divider top */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
      }} />

      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
          gap: "4rem",
          alignItems: "center",
        }}
          className="about-grid"
        >
          {/* Left — Text */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.2)",
              borderRadius: 999, padding: "4px 14px", marginBottom: 24,
            }}>
              <span style={{ fontSize: 11, color: "#60a5fa", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                About Me
              </span>
            </div>

            <h2 style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              color: "#f8fafc",
            }}>
              I turn complex problems
              <span style={{
                display: "block",
                background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                into elegant solutions.
              </span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {[
                `I'm Yedhu Krishnan, an Automation Engineer and Full-Stack Developer who obsesses over making things work — faster, smarter, and at scale.`,
                `My journey started with a simple idea: every repetitive task is a bug waiting to be fixed. That mindset led me to build everything from POS systems and WhatsApp bots to machine learning models and interactive web platforms.`,
                `I work with clients who need solutions that actually ship — production-ready systems that integrate APIs, automate workflows, and save dozens of hours every week.`,
              ].map((text, i) => (
                <p key={i} style={{ color: "#64748b", lineHeight: 1.8, fontSize: "0.95rem" }}>
                  {i === 0 ? (
                    <><strong style={{ color: "#cbd5e1" }}>I&apos;m Yedhu Krishnan</strong>{text.slice(14)}</>
                  ) : text}
                </p>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: "2rem", flexWrap: "wrap" }}>
              <a href="#projects" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #0066FF, #3b82f6)",
                color: "#fff", borderRadius: 8, padding: "11px 22px",
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                fontSize: "0.85rem", textDecoration: "none",
                boxShadow: "0 0 20px rgba(0,102,255,0.3)",
                transition: "all 0.2s",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; }}
              >
                See My Work
              </a>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.04)", color: "#94a3b8",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8, padding: "11px 22px",
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
                fontSize: "0.85rem", textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.35)";
                  (e.currentTarget as HTMLElement).style.color = "#7dd3fc";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                }}
              >
                Let&apos;s Collaborate
              </a>
            </div>
          </div>

          {/* Right — Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {/* 2x2 highlight grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
              {highlights.map((h) => (
                <div
                  key={h.label}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 16, padding: "1rem",
                    display: "flex", alignItems: "center", gap: 12,
                    transition: "all 0.3s",
                    backdropFilter: "blur(12px)",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${h.color}45`;
                    (e.currentTarget as HTMLElement).style.background = `${h.color}09`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 25px ${h.color}18`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.transform = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: `${h.color}18`, border: `1px solid ${h.color}28`,
                  }}>
                    <h.icon size={16} style={{ color: h.color }} />
                  </div>
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#e2e8f0", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.3 }}>
                    {h.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Currently building card */}
            <div style={{
              background: "linear-gradient(135deg, rgba(0,102,255,0.07), rgba(99,102,241,0.04))",
              border: "1px solid rgba(0,102,255,0.2)",
              borderRadius: 20, padding: "1.25rem",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 30px rgba(0,102,255,0.08)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span className="status-dot" />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#4ade80", fontFamily: "'Space Grotesk', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Currently Building
                </span>
              </div>
              <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "#f1f5f9", fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                AI-Powered POS &amp; Workflow Automation Suite
              </p>
              <p style={{ fontSize: "0.78rem", color: "#475569", lineHeight: 1.6 }}>
                Integrating AI into business operations · WhatsApp-first ordering · Real-time analytics
              </p>
            </div>

            {/* Stats row */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.75rem",
            }}>
              {[
                { value: "50+", label: "Projects" },
                { value: "3+", label: "Years Exp" },
                { value: "100%", label: "Shipped" },
              ].map((stat) => (
                <div key={stat.label} style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14, padding: "0.875rem",
                  textAlign: "center", backdropFilter: "blur(12px)",
                }}>
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#f8fafc", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#475569", marginTop: 2, fontFamily: "'Space Grotesk', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider bottom */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
      }} />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      ` }} />
    </section>
  );
}
