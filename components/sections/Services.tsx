"use client";

import { Cog, ShoppingCart, Globe, GitBranch, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Automation Systems",
    description:
      "End-to-end business process automation using n8n, Python scripts, and API integrations. Cut repetitive work and save hours every day.",
    features: ["Workflow design", "API integrations", "Scheduled jobs", "Error handling & alerts"],
    color: "#3b82f6",
  },
  {
    icon: ShoppingCart,
    title: "POS Development",
    description:
      "Custom point-of-sale systems tailored to your business. Inventory tracking, billing, multi-user support, and daily reports.",
    features: ["Inventory management", "Billing & receipts", "Analytics dashboard", "Multi-device access"],
    color: "#22c55e",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Full-stack web apps built with modern frameworks. From MVPs to production-grade systems with clean UI and fast APIs.",
    features: ["Next.js / React", "REST & GraphQL APIs", "Database design", "Deployment & hosting"],
    color: "#8b5cf6",
  },
  {
    icon: GitBranch,
    title: "Workflow Automation",
    description:
      "WhatsApp bots, email pipelines, data scrapers, and document automation. Connect your tools and let them work for you.",
    features: ["WhatsApp chatbots", "Email automation", "Data extraction", "Third-party integrations"],
    color: "#f59e0b",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative" style={{ zIndex: 1 }}>
      {/* Background orb */}
      <div
        style={{
          position: "absolute",
          width: "600px", height: "600px",
          top: "20%", left: "-200px",
          background: "radial-gradient(circle, rgba(0,102,255,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="tech-tag mb-4" style={{ display: "inline-block" }}>
            Services
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            What I Build For You
          </h2>
          <p style={{ color: "#64748b", maxWidth: "500px", margin: "0 auto", fontSize: "0.9rem" }}>
            Real freelance services. No fluff, no generic packages — just tailored solutions that ship.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="glass rounded-2xl p-6 flex flex-col transition-all duration-300"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${service.color}35`;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = `0 20px 40px ${service.color}10`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "";
                el.style.transform = "";
                el.style.boxShadow = "";
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${service.color}12`,
                  border: `1px solid ${service.color}25`,
                }}
              >
                <service.icon size={20} style={{ color: service.color }} />
              </div>

              {/* Title */}
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: "#f1f5f9", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#64748b" }}>
                {service.description}
              </p>

              {/* Feature list */}
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs" style={{ color: "#94a3b8" }}>
                    <span
                      style={{
                        width: "4px", height: "4px", borderRadius: "50%",
                        background: service.color, flexShrink: 0,
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{ color: "#64748b" }}>
            Have a custom project in mind?
          </p>
          <a href="#contact" className="btn-primary">
            Discuss Your Project <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
