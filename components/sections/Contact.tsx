"use client";

import { useState, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Mail, MessageCircle, Github, Send, User, ChevronDown } from "lucide-react";

const socialLinks = [
  { icon: Mail,          label: "Email",    value: "yedhukrishnantv64@gmail.com", href: "mailto:yedhukrishnantv64@gmail.com", color: "#a3e635" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 8078276836",               href: "https://wa.me/918078276836",         color: "#fbbf24" },
  { icon: Github,        label: "GitHub",   value: "github.com/yedhucodes",         href: "https://github.com/yedhucodes",       color: "#60a5fa" },
];

export default function Contact() {
  const { ref: sectionRef, inView } = useInView(0.1);
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const lastSentRef = useRef(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastSentRef.current < 10000) return;
    lastSentRef.current = now;
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); setFormData({ name: "", email: "", projectType: "", message: "" }); }, 1400);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 14px",
    border: "2px solid var(--border-color)", background: "var(--card-bg)",
    fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem",
    color: "var(--text-primary)", outline: "none", transition: "border-color 0.15s",
  };

  return (
    <section id="contact" ref={sectionRef as React.RefObject<HTMLElement>}
      style={{ padding: "6rem 0", background: "var(--bg)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--divider)" }} />

      <div className="container">
        <div className={`reveal ${inView ? "visible" : ""}`} style={{ marginBottom: "3rem" }}>
          <span style={{
            display: "inline-block", marginBottom: 16,
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "3px 10px", background: "var(--accent)", color: "#0a0a0a",
            border: "1px solid var(--border-color)", fontFamily: "'Space Grotesk', sans-serif",
          }}>Contact</span>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--text-primary)" }}>
            LET&apos;S{" "}<span style={{ background: "var(--accent)", padding: "0 6px", color: "#0a0a0a" }}>BUILD</span> SOMETHING
          </h2>
          <p style={{ color: "var(--text-muted)", marginTop: "1rem", fontSize: "0.95rem" }}>
            Have a project? Send me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "2rem", alignItems: "start" }} className="contact-grid">
          {/* Left */}
          <div className={`reveal-left ${inView ? "visible" : ""}`} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {socialLinks.map((link, i) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                className={`reveal reveal-delay-${i + 1} ${inView ? "visible" : ""}`}
                style={{
                  display: "flex", alignItems: "center", gap: 14,
                  border: "2px solid var(--border-color)", background: "var(--card-bg)",
                  padding: "1rem", textDecoration: "none", transition: "transform 0.15s, background 0.15s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translate(-3px, -3px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; }}>
                <div style={{ width: 40, height: 40, background: link.color, border: "2px solid var(--border-color)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <link.icon size={18} color="#0a0a0a" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 2 }}>{link.label}</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "var(--text-primary)" }}>{link.value}</div>
                </div>
              </a>
            ))}

            <a href="https://wa.me/918078276836" target="_blank" rel="noopener noreferrer"
              style={{
                marginTop: 8, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "var(--accent)", border: "2px solid var(--border-color)",
                padding: "13px", textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "#0a0a0a",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#0a0a0a"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "#0a0a0a"; }}>
              <MessageCircle size={16} /> Message me on WhatsApp
            </a>
          </div>

          {/* Right — Form */}
          <div className={`reveal-right ${inView ? "visible" : ""}`}>
            {sent ? (
              <div style={{ border: "2px solid var(--border-color)", padding: "2rem", textAlign: "center", background: "var(--card-bg)" }}>
                <div style={{ width: 48, height: 48, background: "var(--accent)", border: "2px solid var(--border-color)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                  <Send size={20} color="#0a0a0a" />
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: 8, color: "var(--text-primary)" }}>Message Sent!</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  { label: "Name", type: "text", field: "name", placeholder: "Your full name", icon: <User size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} /> },
                  { label: "Email", type: "email", field: "email", placeholder: "your@email.com", icon: <Mail size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} /> },
                ].map(({ label, type, field, placeholder, icon }) => (
                  <div key={field}>
                    <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>{label}</label>
                    <div style={{ position: "relative" }}>
                      {icon}
                      <input type={type} placeholder={placeholder} required
                        value={formData[field as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        style={{ ...inputStyle, paddingLeft: 36 }} />
                    </div>
                  </div>
                ))}

                <div>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>Project Type</label>
                  <div style={{ position: "relative" }}>
                    <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      style={{ ...inputStyle, appearance: "none", paddingRight: 36 }}>
                      <option value="">Select project type</option>
                      {["Automation System", "Web Application", "POS System", "WhatsApp Bot", "ML / Data Project", "Other"].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", pointerEvents: "none" }} />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>Message</label>
                  <textarea placeholder="Describe your project, timeline, and budget..." required rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value.replace(/[<>]/g, "") })}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 110 }} />
                </div>

                <button type="submit" disabled={sending} style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: sending ? "var(--border-light)" : "var(--accent)",
                  border: "2px solid var(--border-color)", padding: "13px",
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                  fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em",
                  color: "#0a0a0a", cursor: sending ? "not-allowed" : "pointer", transition: "all 0.15s",
                }}>
                  <Send size={15} />{sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--divider)" }} />
      <style dangerouslySetInnerHTML={{ __html: `@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }` }} />
    </section>
  );
}
