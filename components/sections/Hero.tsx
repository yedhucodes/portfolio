"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle, Github, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    const particles: Particle[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.4 + 0.4,
      a: Math.random() * 0.45 + 0.08,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${p.a})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #020617 0%, #060e24 60%, #0a1024 100%)",
      }}
    >
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,102,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.035) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      {/* Canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }} />

      {/* Glow orbs */}
      <div style={{
        position: "absolute", width: 700, height: 700, top: -200, left: -200,
        background: "radial-gradient(circle, rgba(0,102,255,0.13) 0%, transparent 65%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 600, height: 600, top: "10%", right: 0,
        background: "radial-gradient(circle, rgba(0,80,200,0.1) 0%, transparent 65%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      {/* Content — Split layout */}
      <div
        className="container"
        style={{
          position: "relative", zIndex: 2,
          paddingTop: "6rem", paddingBottom: "4rem",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* LEFT — Text */}
        <div>
          {/* Status badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: 999, padding: "6px 16px", marginBottom: 32,
            backdropFilter: "blur(12px)",
          }}>
            <span className="status-dot" />
            <span style={{ fontSize: 12, color: "#86efac", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
              Available for freelance projects
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            marginBottom: "1rem",
            color: "#f8fafc",
          }}>
            Yedhu
            <br />
            <span style={{
              background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 45%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Krishnan
            </span>
          </h1>

          {/* Role */}
          <div style={{ marginBottom: "1.25rem" }}>
            <span style={{
              display: "inline-block",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              borderRadius: 999, padding: "5px 16px",
              fontSize: "0.8rem", color: "#7dd3fc",
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              Automation Engineer · Full-Stack Developer
            </span>
          </div>

          {/* Tagline */}
          <p style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            color: "#64748b",
            maxWidth: 520,
            marginBottom: "2.25rem",
            lineHeight: 1.75,
          }}>
            I build automation systems, web applications, and business tools that{" "}
            <span style={{ color: "#94a3b8" }}>solve real-world problems.</span>
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: "2rem" }}>
            <a
              href="#projects"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #0066FF, #3b82f6)",
                color: "#fff", borderRadius: 10, padding: "13px 26px",
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                fontSize: "0.88rem", textDecoration: "none",
                boxShadow: "0 0 28px rgba(0,102,255,0.35), 0 4px 18px rgba(0,102,255,0.2)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,102,255,0.55), 0 8px 25px rgba(0,102,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(0,102,255,0.35), 0 4px 18px rgba(0,102,255,0.2)";
              }}
            >
              View Projects <ArrowRight size={16} />
            </a>

            <a
              href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.04)", color: "#94a3b8",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10, padding: "13px 26px",
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
                fontSize: "0.88rem", textDecoration: "none",
                backdropFilter: "blur(12px)", transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.4)";
                (e.currentTarget as HTMLElement).style.color = "#7dd3fc";
                (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <MessageCircle size={16} /> Let&apos;s Talk
            </a>
          </div>

          {/* Quick links */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/xLUFFY007" },
              { icon: Download, label: "Resume", href: "/resume.pdf" },
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#334155", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#334155")}
              >
                <Icon size={13} /> {label}
              </a>
            ))}
            <a href="mailto:yedhukrishnantv64@gmail.com"
              style={{ fontSize: 12, color: "#334155", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#334155")}
            >
              yedhukrishnantv64@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT — Portrait photo */}
        <div style={{ position: "relative", flexShrink: 0 }} className="hero-photo-wrap">
          {/* Outer glow ring */}
          <div style={{
            position: "absolute", inset: -16,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,102,255,0.25) 0%, rgba(0,102,255,0.05) 60%, transparent 80%)",
            filter: "blur(16px)",
          }} />
          {/* Blue glow behind */}
          <div style={{
            position: "absolute", inset: 0,
            borderRadius: "50%",
            boxShadow: "0 0 60px rgba(0,102,255,0.35), 0 0 120px rgba(0,102,255,0.15)",
          }} />
          {/* Photo container */}
          <div style={{
            position: "relative",
            width: 280, height: 280,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid rgba(59,130,246,0.35)",
            boxShadow: "0 0 0 6px rgba(59,130,246,0.08), 0 0 0 12px rgba(59,130,246,0.04)",
          }}>
            <Image
              src="/yedhu.png"
              alt="Yedhu Krishnan — Automation Engineer & Full-Stack Developer"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
            {/* Subtle dark overlay at bottom for text readability */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
              background: "linear-gradient(to top, rgba(2,6,23,0.6), transparent)",
            }} />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollDown {
          0% { transform: translateY(0); opacity: 1; }
          80% { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
        @media (max-width: 768px) {
          .hero-photo-wrap {
            display: none;
          }
        }
      ` }} />
    </section>
  );
}
