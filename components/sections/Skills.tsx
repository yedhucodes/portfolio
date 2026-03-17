"use client";

const skillCategories = [
  {
    title: "Programming",
    color: "#3b82f6",
    skills: ["Python", "JavaScript", "TypeScript", "HTML/CSS"],
    icon: "⌨️",
  },
  {
    title: "Frameworks",
    color: "#8b5cf6",
    skills: ["Flask", "Django", "Next.js", "React"],
    icon: "🧩",
  },
  {
    title: "Automation",
    color: "#06b6d4",
    skills: ["n8n", "API Integrations", "Webhooks", "WhatsApp API"],
    icon: "⚙️",
  },
  {
    title: "Data & ML",
    color: "#f59e0b",
    skills: ["Pandas", "NumPy", "scikit-learn", "OpenCV"],
    icon: "📊",
  },
  {
    title: "Tools & Platforms",
    color: "#22c55e",
    skills: ["Git", "GitHub", "Figma", "WordPress"],
    icon: "🛠️",
  },
  {
    title: "Databases",
    color: "#ec4899",
    skills: ["MongoDB", "PostgreSQL", "SQLite", "Firebase"],
    icon: "🗄️",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Top divider */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
      }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.2)",
            borderRadius: 999, padding: "4px 14px", marginBottom: 20,
          }}>
            <span style={{ fontSize: 11, color: "#60a5fa", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Expertise
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            marginBottom: "0.75rem",
            color: "#f8fafc",
          }}>
            Skills &amp; Technologies
          </h2>
          <p style={{ color: "#475569", maxWidth: 480, margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.7 }}>
            A focused toolkit built through shipping real projects — not just tutorials.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
        }}>
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 20,
                padding: "1.25rem",
                backdropFilter: "blur(16px)",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${cat.color}40`;
                el.style.transform = "translateY(-5px)";
                el.style.boxShadow = `0 12px 35px ${cat.color}18`;
                el.style.background = `rgba(255,255,255,0.06)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.09)";
                el.style.transform = "";
                el.style.boxShadow = "";
                el.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
                <div style={{
                  width: 10, height: 10, borderRadius: "50%", flexShrink: 0,
                  background: cat.color,
                  boxShadow: `0 0 10px ${cat.color}`,
                }} />
                <span style={{
                  fontSize: "0.85rem", fontWeight: 700, color: "#e2e8f0",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
                  {cat.icon} {cat.title}
                </span>
              </div>

              {/* Skills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "0.75rem", padding: "4px 12px", borderRadius: 999,
                      background: `${cat.color}12`, color: "#94a3b8",
                      border: `1px solid ${cat.color}25`,
                      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${cat.color}22`;
                      (e.currentTarget as HTMLElement).style.color = "#e2e8f0";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${cat.color}12`;
                      (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
      }} />
    </section>
  );
}
