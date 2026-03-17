"use client";

import { Github, Zap, Heart } from "lucide-react";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "2.5rem 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #0066FF, #3b82f6)",
                boxShadow: "0 0 12px rgba(0,102,255,0.35)",
              }}
            >
              <Zap size={14} className="text-white" fill="white" />
            </div>
            <span
              className="text-sm font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#94a3b8" }}
            >
              Yedhu<span style={{ color: "#3b82f6" }}>.</span>
            </span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap items-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs transition-colors"
                style={{ color: "#334155", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#334155")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social + copyright */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/xLUFFY007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors"
              style={{ color: "#334155" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#334155")}
            >
              <Github size={17} />
            </a>
            <span className="text-xs flex items-center gap-1" style={{ color: "#1e293b" }}>
              Built with <Heart size={11} fill="#3b82f6" style={{ color: "#3b82f6" }} /> by Yedhu Krishnan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
