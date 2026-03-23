"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "68px",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative block */}
      <div style={{ position: "absolute", top: "10%", left: 0, width: 16, height: 120, background: "var(--text-primary)" }} />

      <div className="container" style={{ padding: "4rem 1.5rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "center",
        }} className="hero-grid">

          {/* LEFT */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "1.5rem" }}>
              <span className="status-dot" />
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: "var(--text-muted)",
              }}>Available for freelance</span>
            </div>

            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              fontSize: "clamp(4rem, 10vw, 8rem)",
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}>
              YEDHU
              <br />
              <span style={{
                display: "inline-block",
                background: "var(--accent)",
                padding: "0 8px",
                fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                color: "#0a0a0a",
                letterSpacing: "-0.02em",
                fontWeight: 800,
                lineHeight: 1.2,
                margin: "0.25rem 0",
              }}>
                KRISHNAN
              </span>
            </h1>

            <div style={{
              display: "inline-block",
              background: "var(--text-primary)",
              color: "var(--accent)",
              padding: "10px 20px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              Automation Engineer &amp; Full-Stack Developer
            </div>

            <p style={{
              color: "var(--text-muted)",
              fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
              lineHeight: 1.75,
              maxWidth: 480,
              marginBottom: "2rem",
            }}>
              I build automation systems, web applications, and business tools
              that solve real-world problems.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#projects" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--accent)", color: "#0a0a0a",
                border: "2px solid var(--text-primary)",
                padding: "12px 24px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: "0.85rem",
                letterSpacing: "0.04em", textTransform: "uppercase",
                textDecoration: "none", transition: "all 0.15s",
              }}>
                View Projects <ArrowRight size={15} />
              </a>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", color: "var(--text-primary)",
                border: "2px solid var(--border-color)",
                padding: "12px 24px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: "0.85rem",
                letterSpacing: "0.04em", textTransform: "uppercase",
                textDecoration: "none", transition: "all 0.15s",
              }}>
                <MessageCircle size={15} /> Let&apos;s Talk
              </a>
            </div>
          </div>

          {/* RIGHT — Photo frame */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }} className="hero-photo-col">
            <div style={{
              position: "absolute", top: -20, right: 10,
              width: 60, height: 60,
              background: "var(--accent-yellow)",
              border: "2px solid var(--text-primary)",
              zIndex: 0,
            }} />
            <div style={{
              position: "absolute",
              width: 320, height: 400,
              background: "var(--text-primary)",
              top: 16, left: "calc(50% - 144px)",
              zIndex: 0,
            }} />
            <div style={{
              position: "relative",
              width: 320, height: 400,
              background: "var(--accent)",
              border: "2px solid var(--text-primary)",
              overflow: "hidden",
              zIndex: 1,
            }}>
              <Image
                src="/yedhu.jpg"
                alt="Yedhu Krishnan"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
              <div style={{
                position: "absolute", top: 16, left: 16,
                background: "var(--text-primary)", color: "var(--bg)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: "0.7rem",
                letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "5px 12px",
              }}>
                Developer
              </div>
            </div>
            <div style={{
              position: "absolute", bottom: -10, right: 5,
              width: 28, height: 28,
              border: "2px solid var(--text-primary)",
              zIndex: 2,
            }} />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo-col { margin-top: 2rem; }
        }
        .grid-bg {
          background-image:
            linear-gradient(var(--border-light) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-light) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      ` }} />
    </section>
  );
}
