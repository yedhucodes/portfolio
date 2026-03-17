"use client";

import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "POS Automation System",
    description:
      "A full-featured Point-of-Sale system built for retail/wholesale businesses. Handles inventory, billing, daily reports, and multi-user management with a Flutter-based mobile front-end.",
    tags: ["Python", "Flask", "Flutter", "SQLite", "REST API"],
    color: "#3b82f6",
    badge: "Full-Stack",
    github: "#",
    demo: "#",
  },
  {
    title: "WhatsApp Order Automation",
    description:
      "AI-powered WhatsApp ordering bot for a wholesale grocery store in Bahrain. Integrates product catalog, mini-bill receipts with QR codes, and admin alerts on confirmation.",
    tags: ["Python", "WhatsApp API", "MongoDB", "n8n"],
    color: "#22c55e",
    badge: "Automation",
    github: "#",
    demo: "#",
  },
  {
    title: "FocusED Learning Platform",
    description:
      "An interactive e-learning platform designed for distraction-free studying. Features course modules, progress tracking, quizzes, and a pomodoro-style focus timer.",
    tags: ["Next.js", "React", "Tailwind", "PostgreSQL"],
    color: "#8b5cf6",
    badge: "Web App",
    github: "#",
    demo: "#",
  },
  {
    title: "Car Price Prediction",
    description:
      "ML pipeline that predicts used car prices based on make, model, year, mileage, and condition. Flask API + interactive prediction interface.",
    tags: ["Python", "scikit-learn", "Pandas", "Flask", "NumPy"],
    color: "#f59e0b",
    badge: "ML / Data",
    github: "#",
    demo: "#",
  },
  {
    title: "Lane Detection System",
    description:
      "Real-time lane detection using computer vision for autonomous vehicle safety research. Edge detection, Hough transforms, and perspective correction.",
    tags: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    color: "#ec4899",
    badge: "AI / Vision",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem 0",
        position: "relative",
        zIndex: 1,
        background: "linear-gradient(180deg, transparent 0%, rgba(0,102,255,0.02) 50%, transparent 100%)",
      }}
    >
      {/* Top divider */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
      }} />

      {/* Background glow */}
      <div style={{
        position: "absolute", width: 500, height: 500,
        top: "30%", right: -150,
        background: "radial-gradient(circle, rgba(0,102,255,0.07) 0%, transparent 70%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.2)",
            borderRadius: 999, padding: "4px 14px", marginBottom: 20,
          }}>
            <span style={{ fontSize: 11, color: "#60a5fa", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Projects
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800, letterSpacing: "-0.035em",
            marginBottom: "0.75rem", color: "#f8fafc",
          }}>
            Things I&apos;ve Built
          </h2>
          <p style={{ color: "#475569", maxWidth: 480, margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.7 }}>
            Production-ready systems, not weekend hackathon demos. Every project ships to real users.
          </p>
        </div>

        {/* Projects grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.25rem",
        }}>
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 20, padding: "1.5rem",
                display: "flex", flexDirection: "column",
                position: "relative", overflow: "hidden",
                backdropFilter: "blur(16px)",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${project.color}40`;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = `0 20px 45px ${project.color}15`;
                el.style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.09)";
                el.style.transform = "";
                el.style.boxShadow = "";
                el.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: `linear-gradient(90deg, ${project.color}, transparent)`,
              }} />

              {/* Badge + links */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{
                  fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: 999,
                  background: `${project.color}18`, color: project.color,
                  border: `1px solid ${project.color}35`,
                  fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.06em", textTransform: "uppercase",
                }}>
                  {project.badge}
                </span>

                <div style={{ display: "flex", gap: 6 }}>
                  {[
                    { href: project.github, Icon: Github, label: "GitHub" },
                    { href: project.demo, Icon: ExternalLink, label: "Demo" },
                  ].map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      style={{
                        width: 32, height: 32, borderRadius: 8,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "#475569", textDecoration: "none", transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#475569";
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                      }}
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "0.95rem", fontWeight: 700, marginBottom: 8,
                color: "#f1f5f9", fontFamily: "'Space Grotesk', sans-serif",
              }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{ color: "#475569", fontSize: "0.83rem", lineHeight: 1.7, marginBottom: 16, flex: 1 }}>
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: "0.7rem", padding: "3px 9px", borderRadius: 6,
                    background: "rgba(255,255,255,0.04)",
                    color: "#334155",
                    border: "1px solid rgba(255,255,255,0.07)",
                    fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* View all CTA */}
          <a
            href="https://github.com/xLUFFY007"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px dashed rgba(255,255,255,0.1)",
              borderRadius: 20, padding: "1.5rem",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              textAlign: "center", textDecoration: "none",
              minHeight: 200, transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,102,255,0.35)";
              (e.currentTarget as HTMLElement).style.background = "rgba(0,102,255,0.05)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
              (e.currentTarget as HTMLElement).style.transform = "";
            }}
          >
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(0,102,255,0.1)", border: "1px solid rgba(0,102,255,0.2)",
              marginBottom: 12,
            }}>
              <ArrowUpRight size={22} style={{ color: "#3b82f6" }} />
            </div>
            <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#e2e8f0", fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              View All on GitHub
            </p>
            <p style={{ fontSize: "0.75rem", color: "#334155", lineHeight: 1.5 }}>
              Explore more projects &amp; open source contributions
            </p>
          </a>
        </div>
      </div>

      {/* Bottom divider */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
      }} />
    </section>
  );
}
