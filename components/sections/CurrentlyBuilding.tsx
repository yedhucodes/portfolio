"use client";

import { Construction, Zap, Bot } from "lucide-react";

const building = [
  {
    icon: Zap,
    title: "POS Automation System",
    description:
      "Production-level point-of-sale system with real-time inventory, receipt printing, and analytics dashboard. Built for retail clients.",
    progress: 75,
    color: "#3b82f6",
    tags: ["Flutter", "Flask", "SQLite"],
  },
  {
    icon: Bot,
    title: "WhatsApp Workflow Engine",
    description:
      "Scalable multi-client WhatsApp automation platform. Message routing, order processing, and CRM integration.",
    progress: 55,
    color: "#22c55e",
    tags: ["n8n", "Python", "MongoDB", "WhatsApp API"],
  },
  {
    icon: Construction,
    title: "AI Automation Tools Suite",
    description:
      "A collection of AI-powered business automation tools: invoice parser, customer sentiment tracker, and intelligent scheduling.",
    progress: 30,
    color: "#8b5cf6",
    tags: ["GPT-4", "Python", "FastAPI", "React"],
  },
];

export default function CurrentlyBuilding() {
  return (
    <section id="building" className="section-padding relative" style={{ zIndex: 1 }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="tech-tag mb-4" style={{ display: "inline-block" }}>
            In Progress
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            Currently Building
          </h2>
          <p style={{ color: "#64748b", maxWidth: "500px", margin: "0 auto", fontSize: "0.9rem" }}>
            Active projects under development. Shipping soon.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "800px", margin: "0 auto" }}>
          {building.map((item) => (
            <div
              key={item.title}
              className="glass rounded-2xl p-6 transition-all duration-300"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${item.color}35`;
                el.style.transform = "translateX(8px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "";
                el.style.transform = "";
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Header row */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3
                      className="text-sm font-semibold"
                      style={{ color: "#f1f5f9", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div className="status-dot" style={{ width: "6px", height: "6px" }} />
                      <span className="text-xs font-medium" style={{ color: item.color, fontFamily: "'Space Grotesk', sans-serif" }}>
                        {item.progress}%
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm mb-3" style={{ color: "#64748b", lineHeight: 1.6 }}>
                    {item.description}
                  </p>

                  {/* Progress bar */}
                  <div
                    className="rounded-full mb-3"
                    style={{ height: "3px", background: "rgba(255,255,255,0.05)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${item.progress}%`,
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                        boxShadow: `0 0 8px ${item.color}60`,
                      }}
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{
                          background: `${item.color}10`,
                          color: "#64748b",
                          border: `1px solid ${item.color}20`,
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
