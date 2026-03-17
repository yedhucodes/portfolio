"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(2, 6, 23, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <nav className="container flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          aria-label="Yedhu Krishnan Home"
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #0066FF, #3b82f6)", boxShadow: "0 0 15px rgba(0,102,255,0.4)" }}>
            <Zap size={16} className="text-white" fill="white" />
          </div>
          <span className="font-bold text-base"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}>
            Yedhu<span style={{ color: "#3b82f6" }}>.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
                style={{ color: "#94a3b8", fontFamily: "'Space Grotesk', sans-serif" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#f1f5f9";
                  (e.target as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "#94a3b8";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="hidden md:block btn-primary text-sm py-2 px-4">
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md transition-colors"
          style={{ color: "#94a3b8" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass mx-4 mb-4 rounded-xl overflow-hidden">
          <ul className="flex flex-col p-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  style={{ color: "#94a3b8", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-1 px-2">
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full justify-center text-sm py-2.5">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
