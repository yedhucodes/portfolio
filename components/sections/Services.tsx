"use client";

import { useInView } from "@/hooks/useInView";
import { Cog, ShoppingCart, Globe, GitBranch, ArrowRight } from "lucide-react";

const services = [
  { icon: Cog, title: "Automation Systems", description: "End-to-end business process automation using n8n, Python scripts, and API integrations.", features: ["Workflow design", "API integrations", "Scheduled jobs", "Error handling"], color: "#a3e635" },
  { icon: ShoppingCart, title: "POS Development", description: "Custom point-of-sale systems with inventory tracking, billing, multi-user support, and daily reports.", features: ["Inventory management", "Billing & receipts", "Analytics dashboard", "Multi-device"], color: "#fbbf24" },
  { icon: Globe, title: "Web Applications", description: "Full-stack web apps built with modern frameworks. From MVPs to production-grade systems.", features: ["Next.js / React", "REST & GraphQL APIs", "Database design", "Deployment"], color: "#60a5fa" },
  { icon: GitBranch, title: "Workflow Automation", description: "WhatsApp bots, email pipelines, data scrapers, and document automation.", features: ["WhatsApp chatbots", "Email automation", "Data extraction", "Integrations"], color: "#f472b6" },
];

export default function Services() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section id="services" ref={sectionRef as React.RefObject<HTMLElement>}
      style={{ padding: "6rem 0", background: "var(--bg)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--divider)" }} />

      <div className="container">
        <div className={`reveal ${inView ? "visible" : ""}`} style={{ marginBottom: "3rem" }}>
          <span style={{
            display: "inline-block", marginBottom: 16,
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "3px 10px", background: "var(--accent)", color: "#0a0a0a",
            border: "1px solid var(--border-color)", fontFamily: "'Space Grotesk', sans-serif",
          }}>Services</span>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--text-primary)" }}>
            WHAT I{" "}<span style={{ background: "var(--accent)", padding: "0 6px", color: "#0a0a0a" }}>BUILD</span> FOR YOU
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.875rem" }}>
          {services.map((service, i) => (
            <div key={service.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} ${inView ? "visible" : ""}`}
              style={{
                border: "2px solid var(--border-color)", background: "var(--card-bg)",
                display: "flex", flexDirection: "column", transition: "transform 0.15s", cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translate(-3px, -3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "")}>
              <div style={{ height: 5, background: service.color }} />
              <div style={{ padding: "1.25rem" }}>
                <div style={{
                  width: 40, height: 40, background: service.color, border: "2px solid var(--border-color)",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.875rem",
                }}>
                  <service.icon size={18} color="#0a0a0a" />
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.92rem", color: "var(--text-primary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {service.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.83rem", lineHeight: 1.65, marginBottom: 12 }}>{service.description}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {service.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                      <span style={{ width: 5, height: 5, background: service.color, border: "1px solid var(--border-color)", flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal ${inView ? "visible" : ""}`} style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>Have a custom project in mind?</p>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--accent)", color: "#0a0a0a", border: "2px solid var(--border-color)",
            padding: "12px 24px", fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.04em",
            textDecoration: "none", transition: "all 0.15s",
          }}>Discuss Your Project <ArrowRight size={15} /></a>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--divider)" }} />
    </section>
  );
}
