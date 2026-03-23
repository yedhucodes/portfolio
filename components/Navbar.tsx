"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { href: "#about",    label: "About" },
  { href: "#skills",   label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled
    ? (isDark ? "rgba(17,17,17,0.97)" : "rgba(255,255,255,0.97)")
    : "transparent";

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: navBg,
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? `2px solid var(--border-color)` : "none",
      transition: "all 0.3s ease",
    }}>
      <nav style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 68,
      }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36,
            background: "var(--text-primary)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800, fontSize: "1rem", color: "var(--accent)",
          }}>Y</div>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800, fontSize: "1rem", color: "var(--text-primary)",
            letterSpacing: "-0.03em",
          }}>
            yedhu<span style={{ color: "#84cc16" }}>.codes</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul style={{ display: "flex", alignItems: "center", gap: 2, listStyle: "none" }} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600, fontSize: "0.8rem",
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: "var(--text-muted)", textDecoration: "none",
                padding: "8px 14px", display: "block",
                transition: "color 0.15s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >{link.label}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="desktop-nav">
          {/* Dark mode toggle */}
          <button onClick={toggle} aria-label="Toggle theme" style={{
            width: 38, height: 38,
            background: "var(--card-bg)",
            border: `2px solid var(--border-color)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "var(--text-primary)",
            transition: "all 0.15s",
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--text-primary)"; (e.currentTarget as HTMLElement).style.color = "var(--bg)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--card-bg)"; (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* CTA */}
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center",
            background: "var(--accent)", color: "var(--text-primary)",
            border: `2px solid var(--text-primary)`,
            padding: "9px 20px",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: "0.78rem",
            letterSpacing: "0.04em", textTransform: "uppercase",
            textDecoration: "none", cursor: "pointer",
            transition: "all 0.15s",
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--text-primary)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
          >Hire Me</a>
        </div>

        {/* Mobile row */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="mobile-controls">
          <button onClick={toggle} aria-label="Toggle theme" style={{
            width: 36, height: 36, background: "transparent",
            border: `2px solid var(--border-color)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "var(--text-primary)",
          }}>
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button style={{ background: "none", border: `2px solid var(--border-color)`, padding: "6px", cursor: "pointer", color: "var(--text-primary)" }}
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "var(--bg)", borderTop: `2px solid var(--border-color)`,
          padding: "1rem 1.5rem",
        }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", padding: "10px 0",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: "0.85rem",
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "var(--text-primary)", textDecoration: "none",
              borderBottom: `1px solid var(--border-light)`,
            }}>{link.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            display: "flex", marginTop: "1rem", justifyContent: "center",
            background: "var(--accent)", color: "var(--text-primary)",
            border: `2px solid var(--text-primary)`, padding: "12px",
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em",
            textDecoration: "none",
          }}>Hire Me</a>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
        @media (min-width: 769px) { .mobile-controls { display: none !important; } }
      ` }} />
    </header>
  );
}
