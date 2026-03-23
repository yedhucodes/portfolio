"use client";

import { useInView } from "@/hooks/useInView";
import { Construction, Zap, Bot } from "lucide-react";

const building = [
  { icon: Zap, title: "POS Automation System", description: "Production-level point-of-sale system with real-time inventory, receipt printing, and analytics dashboard.", progress: 75, color: "#a3e635", tags: ["Flutter", "Flask", "SQLite"] },
  { icon: Bot, title: "WhatsApp Workflow Engine", description: "Scalable multi-client WhatsApp automation platform. Message routing, order processing, and CRM integration.", progress: 55, color: "#fbbf24", tags: ["n8n", "Python", "MongoDB", "WhatsApp API"] },
  { icon: Construction, title: "AI Automation Tools Suite", description: "A collection of AI-powered business automation tools: invoice parser, customer sentiment tracker, and intelligent scheduling.", progress: 30, color: "#60a5fa", tags: ["GPT-4", "Python", "FastAPI", "React"] },
];

export default function CurrentlyBuilding() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section id="building" ref={sectionRef as React.RefObject<HTMLElement>}
      style={{ padding: "6rem 0", background: "var(--bg-alt)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--divider)" }} />

      <div className="container">
        <div className={`reveal ${inView ? "visible" : ""}`} style={{ marginBottom: "3rem" }}>
          <span style={{
            display: "inline-block", marginBottom: 16,
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "3px 10px", background: "var(--accent)", color: "#0a0a0a",
            border: "1px solid var(--border-color)", fontFamily: "'Space Grotesk', sans-serif",
          }}>In Progress</span>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--text-primary)" }}>
            CURRENTLY{" "}<span style={{ background: "var(--accent)", padding: "0 6px", color: "#0a0a0a" }}>BUILDING</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", maxWidth: 800 }}>
          {building.map((item, i) => (
            <div key={item.title}
              className={`reveal reveal-delay-${i + 1} ${inView ? "visible" : ""}`}
              style={{
                border: "2px solid var(--border-color)", background: "var(--card-bg)",
                padding: "1.25rem", transition: "transform 0.15s", cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translate(-3px, -3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "")}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{
                  width: 40, height: 40, flexShrink: 0, background: item.color,
                  border: "2px solid var(--border-color)", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <item.icon size={18} color="#0a0a0a" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.92rem", color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      {item.title}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                      <span className="status-dot" style={{ width: 6, height: 6 }} />
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.78rem", color: "var(--text-primary)" }}>{item.progress}%</span>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 10 }}>{item.description}</p>
                  <div style={{ height: 4, background: "var(--border-light)", border: "1px solid var(--border-color)", marginBottom: 10 }}>
                    <div style={{ height: "100%", width: `${item.progress}%`, background: item.color }} />
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {item.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: "0.7rem", padding: "2px 8px",
                        background: "var(--card-tag-bg)", color: "var(--text-secondary)",
                        border: "1px solid var(--border-light)", fontFamily: "'Space Grotesk', sans-serif",
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--divider)" }} />
    </section>
  );
}
