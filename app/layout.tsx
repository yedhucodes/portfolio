import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yedhu Krishnan | Automation Engineer & Full-Stack Developer",
  description:
    "Freelance Automation Engineer and Full-Stack Developer specializing in building automation systems, web applications, and business tools that solve real-world problems.",
  keywords: [
    "automation engineer",
    "full-stack developer",
    "freelance developer",
    "n8n automation",
    "Python developer",
    "Flask Django",
    "web development",
    "POS system",
    "Yedhu Krishnan",
  ],
  authors: [{ name: "Yedhu Krishnan" }],
  creator: "Yedhu Krishnan",
  openGraph: {
    type: "website",
    title: "Yedhu Krishnan | Automation Engineer & Full-Stack Developer",
    description:
      "I build automation systems, web applications, and business tools that solve real-world problems.",
    siteName: "Yedhu Krishnan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yedhu Krishnan | Automation Engineer & Full-Stack Developer",
    description:
      "I build automation systems, web applications, and business tools that solve real-world problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
