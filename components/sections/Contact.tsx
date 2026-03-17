"use client";

import { useState, useRef } from "react";
import {
  Mail, MessageCircle, Github, Send, User, FileText,
  CheckCircle, AlertCircle, Loader2
} from "lucide-react";

const projectTypes = [
  "Automation System",
  "Web Application",
  "POS Development",
  "WhatsApp Bot",
  "Workflow Automation",
  "AI Tool",
  "Other",
];

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "yedhukrishnantv64@gmail.com",
    href: "mailto:yedhukrishnantv64@gmail.com",
    color: "#3b82f6",
    description: "Best for detailed project briefs",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 8078276836",
    href: "https://wa.me/918078276836",
    color: "#22c55e",
    description: "Fastest response · usually within 2h",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/xLUFFY007",
    href: "https://github.com/xLUFFY007",
    color: "#94a3b8",
    description: "Browse my open-source work",
  },
];

type FormState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

function sanitize(str: string) {
  return str.replace(/[<>]/g, "").trim();
}

function validate(form: FormState): string | null {
  if (!form.name || form.name.length < 2) return "Please enter your full name.";
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    return "Please enter a valid email address.";
  if (!form.projectType) return "Please select a project type.";
  if (!form.message || form.message.length < 20)
    return "Message should be at least 20 characters.";
  if (form.message.length > 2000) return "Message is too long (max 2000 chars).";
  return null;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const lastSubmit = useRef<number>(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate-limit: prevent spam (10s cooldown)
    const now = Date.now();
    if (now - lastSubmit.current < 10000) {
      setError("Please wait a moment before submitting again.");
      return;
    }

    const sanitized: FormState = {
      name: sanitize(form.name),
      email: sanitize(form.email),
      projectType: form.projectType,
      message: sanitize(form.message),
    };

    const validationError = validate(sanitized);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus("submitting");
    lastSubmit.current = now;

    // Simulated submit (replace with your form backend / Formspree / etc.)
    try {
      await new Promise((res) => setTimeout(res, 1500));
      setStatus("success");
      setForm({ name: "", email: "", projectType: "", message: "" });
    } catch {
      setStatus("error");
      setError("Something went wrong. Please email me directly.");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "0.625rem",
    padding: "0.75rem 1rem",
    color: "#f1f5f9",
    fontSize: "0.875rem",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.78rem",
    fontWeight: 600,
    color: "#64748b",
    fontFamily: "'Space Grotesk', sans-serif",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    marginBottom: "0.4rem",
  };

  return (
    <section id="contact" className="section-padding relative" style={{ zIndex: 1 }}>
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: "500px", height: "500px",
          bottom: "-100px", right: "-100px",
          background: "radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="tech-tag mb-4" style={{ display: "inline-block" }}>
            Contact
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            Let&apos;s Build Something
          </h2>
          <p style={{ color: "#64748b", maxWidth: "480px", margin: "0 auto", fontSize: "0.9rem" }}>
            Have a project? Send me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* Left — Contact Channels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex items-center gap-4 transition-all duration-300"
                style={{ textDecoration: "none" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${link.color}35`;
                  el.style.transform = "translateX(6px)";
                  el.style.background = `${link.color}06`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "";
                  el.style.transform = "";
                  el.style.background = "";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${link.color}15`, border: `1px solid ${link.color}25` }}
                >
                  <link.icon size={20} style={{ color: link.color }} />
                </div>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#f1f5f9", fontFamily: "'Space Grotesk', sans-serif", marginBottom: "0.15rem" }}
                  >
                    {link.value}
                  </div>
                  <div className="text-xs" style={{ color: "#475569" }}>
                    {link.description}
                  </div>
                </div>
              </a>
            ))}

            {/* WhatsApp highlight */}
            <a
              href="https://wa.me/918078276836?text=Hi%20Yedhu!%20I%20wanted%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-5 flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))",
                border: "1px solid rgba(34,197,94,0.25)",
                color: "#22c55e",
                fontFamily: "'Space Grotesk', sans-serif",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.2)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(34,197,94,0.2)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
                (e.currentTarget as HTMLElement).style.transform = "";
              }}
            >
              <MessageCircle size={17} />
              Message me on WhatsApp
            </a>
          </div>

          {/* Right — Contact Form */}
          <div className="glass rounded-2xl p-6">
            {status === "success" ? (
              <div
                className="flex flex-col items-center justify-center text-center py-8"
                style={{ gap: "1rem" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)" }}
                >
                  <CheckCircle size={28} style={{ color: "#22c55e" }} />
                </div>
                <h3 className="text-base font-semibold" style={{ color: "#f1f5f9", fontFamily: "'Space Grotesk', sans-serif" }}>
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: "#64748b" }}>
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-secondary text-sm py-2 px-4"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>Name</label>
                  <div style={{ position: "relative" }}>
                    <User
                      size={14}
                      style={{
                        position: "absolute", left: "0.875rem", top: "50%",
                        transform: "translateY(-50%)", color: "#475569", pointerEvents: "none",
                      }}
                    />
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      maxLength={80}
                      required
                      style={{ ...inputStyle, paddingLeft: "2.25rem" }}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "rgba(0,102,255,0.5)";
                        (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(0,102,255,0.08)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.08)";
                        (e.target as HTMLInputElement).style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" style={labelStyle}>Email</label>
                  <div style={{ position: "relative" }}>
                    <Mail
                      size={14}
                      style={{
                        position: "absolute", left: "0.875rem", top: "50%",
                        transform: "translateY(-50%)", color: "#475569", pointerEvents: "none",
                      }}
                    />
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      maxLength={120}
                      required
                      style={{ ...inputStyle, paddingLeft: "2.25rem" }}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "rgba(0,102,255,0.5)";
                        (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(0,102,255,0.08)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.08)";
                        (e.target as HTMLInputElement).style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Project type */}
                <div>
                  <label htmlFor="contact-project" style={labelStyle}>Project Type</label>
                  <div style={{ position: "relative" }}>
                    <FileText
                      size={14}
                      style={{
                        position: "absolute", left: "0.875rem", top: "50%",
                        transform: "translateY(-50%)", color: "#475569", pointerEvents: "none", zIndex: 1,
                      }}
                    />
                    <select
                      id="contact-project"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      required
                      style={{
                        ...inputStyle,
                        paddingLeft: "2.25rem",
                        appearance: "none",
                        cursor: "pointer",
                        color: form.projectType ? "#f1f5f9" : "#475569",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLSelectElement).style.borderColor = "rgba(0,102,255,0.5)";
                        (e.target as HTMLSelectElement).style.boxShadow = "0 0 0 3px rgba(0,102,255,0.08)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLSelectElement).style.borderColor = "rgba(255,255,255,0.08)";
                        (e.target as HTMLSelectElement).style.boxShadow = "none";
                      }}
                    >
                      <option value="" disabled style={{ background: "#0a1024" }}>
                        Select project type
                      </option>
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt} style={{ background: "#0a1024" }}>
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" style={labelStyle}>Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Describe your project, timeline, and budget..."
                    value={form.message}
                    onChange={handleChange}
                    maxLength={2000}
                    rows={4}
                    required
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "110px",
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderColor = "rgba(0,102,255,0.5)";
                      (e.target as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px rgba(0,102,255,0.08)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.08)";
                      (e.target as HTMLTextAreaElement).style.boxShadow = "none";
                    }}
                  />
                  <div className="text-right text-xs mt-1" style={{ color: "#334155" }}>
                    {form.message.length}/2000
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs"
                    style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#f87171" }}
                  >
                    <AlertCircle size={13} />
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary justify-center w-full"
                  style={{ opacity: status === "submitting" ? 0.75 : 1 }}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={15} style={{ animation: "spin 1s linear infinite" }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      ` }} />
    </section>
  );
}
