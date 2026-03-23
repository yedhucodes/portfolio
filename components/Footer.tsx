"use client";

import { Github, Heart } from "lucide-react";

const footerLinks = [
  { href: "#about",    label: "About" },
  { href: "#skills",   label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact",  label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--footer-bg)", borderTop: "3px solid var(--divider)", padding: "2rem 0" }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.25rem" }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <div style={{
            background: "var(--accent)", color: "#0a0a0a",
            padding: "4px 12px", display: "inline-block",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900, fontSize: "1rem",
            letterSpacing: "-0.02em",
          }}>YEDHU.CODES</div>
        </a>

        {/* Nav links */}
        <nav style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase", color: "#6b7280",
              textDecoration: "none", transition: "color 0.15s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#a3e635")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >{link.label}</a>
          ))}
        </nav>

        {/* GitHub + credit */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href="https://github.com/yedhucodes" target="_blank" rel="noopener noreferrer"
            style={{ color: "#6b7280", transition: "color 0.15s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#a3e635")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}>
            <Github size={18} />
          </a>
          <span style={{ fontSize: "0.75rem", color: "#374151", display: "flex", alignItems: "center", gap: 4, fontFamily: "'Space Grotesk', sans-serif" }}>
            Built with <Heart size={11} fill="#a3e635" style={{ color: "#a3e635" }} /> by Yedhu Krishnan
          </span>
        </div>
      </div>
    </footer>
  );
}
