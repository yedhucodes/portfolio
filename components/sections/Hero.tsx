"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.95, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.5 },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "68px",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative block */}
      <motion.div
        initial={{ scaleY: 0, transformOrigin: "top" }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
        style={{ position: "absolute", top: "10%", left: 0, width: 16, height: 120, background: "var(--text-primary)" }}
      />

      <div className="container" style={{ padding: "4rem 1.5rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "center",
        }} className="hero-grid">

          {/* LEFT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemVariants} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "1.5rem" }}>
              <span className="status-dot" />
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: "var(--text-muted)",
              }}>Available for freelance</span>
            </motion.div>

            <motion.h1 variants={itemVariants} style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              fontSize: "clamp(3rem, 12vw, 8rem)",
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}>
              YEDHU
              <br />
              <span style={{
                display: "inline-block",
                background: "var(--accent)",
                padding: "0 8px",
                fontSize: "clamp(2rem, 8vw, 3.5rem)",
                color: "#0a0a0a",
                letterSpacing: "-0.02em",
                fontWeight: 800,
                lineHeight: 1.2,
                margin: "0.25rem 0",
              }}>
                KRISHNAN
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} style={{
              display: "inline-block",
              background: "var(--card-bg)",
              color: "var(--text-primary)",
              border: "2px solid var(--border-color)",
              padding: "8px 18px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              Automation Engineer &amp; Full-Stack Developer
            </motion.div>

            <motion.p variants={itemVariants} style={{
              color: "var(--text-muted)",
              fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
              lineHeight: 1.75,
              maxWidth: 480,
              marginBottom: "2rem",
            }}>
              I build automation systems, web applications, and business tools
              that solve real-world problems.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#projects" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--accent)", color: "#0a0a0a",
                border: "2px solid var(--text-primary)",
                padding: "12px 24px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: "0.85rem",
                letterSpacing: "0.04em", textTransform: "uppercase",
                textDecoration: "none", transition: "all 0.15s",
              }}>
                View Projects <ArrowRight size={15} />
              </a>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", color: "var(--text-primary)",
                border: "2px solid var(--border-color)",
                padding: "12px 24px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: "0.85rem",
                letterSpacing: "0.04em", textTransform: "uppercase",
                textDecoration: "none", transition: "all 0.15s",
              }}>
                <MessageCircle size={15} /> Let&apos;s Talk
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — Photo frame */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="show"
            style={{ display: "flex", justifyContent: "center" }}
            className="hero-photo-col"
          >
            <div style={{ position: "relative", width: "100%", maxWidth: 320, aspectRatio: "4/5", marginRight: 16, marginBottom: 16 }}>
              {/* Yellow decorative square */}
              <div style={{
                position: "absolute", top: -20, right: -10,
                width: 60, height: 60,
                background: "var(--accent-yellow)",
                border: "2px solid var(--text-primary)",
                zIndex: 0,
              }} />
              {/* White/Dark background offset */}
              <div style={{
                position: "absolute", top: 16, left: 16,
                width: "100%", height: "100%",
                background: "var(--text-primary)",
                zIndex: 0,
              }} />
              {/* Foreground Photo Container */}
              <div style={{
                position: "absolute", top: 0, left: 0,
                width: "100%", height: "100%",
                background: "var(--accent)",
                border: "2px solid var(--text-primary)",
                overflow: "hidden",
                zIndex: 1,
              }}>
                <Image
                  src="/yedhu.jpg"
                  alt="Yedhu Krishnan"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
                <div style={{
                  position: "absolute", top: 16, left: 16,
                  background: "var(--text-primary)", color: "var(--bg)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: "0.7rem",
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  padding: "5px 12px",
                }}>
                  Developer
                </div>
              </div>
              {/* Small bottom-right decorative square */}
              <div style={{
                position: "absolute", bottom: -10, right: -5,
                width: 28, height: 28,
                border: "2px solid var(--text-primary)",
                zIndex: 2,
              }} />
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo-col { margin-top: 2rem; }
        }
        .grid-bg {
          background-image:
            linear-gradient(var(--border-light) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-light) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      ` }} />
    </section>
  );
}
