"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Container from "./Container";
import GridBackground from "./GridBackground";

const CAREER_START_DATE = new Date("2021-05-17");

function getExperienceDuration(startDate: Date): {
  years: number;
  months: number;
} {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (now.getDate() < startDate.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years: Math.max(years, 0), months: Math.max(months, 0) };
}

function formatDuration({
  years,
  months,
}: {
  years: number;
  months: number;
}) {
  return `${years} Year${years !== 1 ? "s" : ""}${
    months ? ` ${months} Month${months !== 1 ? "s" : ""}` : ""
  }`;
}

export default function About() {
  const duration = getExperienceDuration(CAREER_START_DATE);
  const durationLabel = formatDuration(duration);

  const highlights = [
    "5+ years building responsive and high-performance websites",
    "Custom WordPress development using Elementor, ACF & Gutenberg",
    "Shopify theme customization with Liquid",
    "Frontend development with React, Next.js & Tailwind CSS",
    "Performance optimization, SEO & accessibility",
    "Pixel-perfect implementation from Figma designs",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080B15] pt-20 pb-20 md:pt-25 md:pb-25"
    >
      <GridBackground />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight">
              <span className="text-accent-dark">About</span>{" "}
              <span className="text-white">Me</span>
            </h2>

            <p className="mt-6 text-muted leading-relaxed">
              I'm a <span className="text-white font-medium">Frontend Web Developer</span>{" "}
              with <span className="text-accent">{durationLabel}</span> of
              professional experience creating fast, modern, and scalable web
              experiences. I specialize in WordPress, Shopify, and modern
              frontend technologies, delivering clean, responsive interfaces
              with a strong focus on performance and user experience.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-accent mt-1 flex-shrink-0"
                  />

                  <span className="text-muted leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-panel p-8 flex flex-col gap-8 about-card"
          >
            <div>
              <p className="text-accent text-xs font-bold tracking-[0.18em] uppercase mb-2">
                Role
              </p>

              <p className="text-white text-xl font-semibold">
                Frontend Web Developer
              </p>
            </div>

            <div>
              <p className="text-accent text-xs font-bold tracking-[0.18em] uppercase mb-2">
                Experience
              </p>

              <p className="text-white">
                {durationLabel} at Fullstack HQ Inc.
              </p>
            </div>

            <div>
              <p className="text-accent text-xs font-bold tracking-[0.18em] uppercase mb-2">
                Primary Stack
              </p>

              <p className="text-muted leading-relaxed">
                WordPress • Shopify • React • Next.js • Tailwind CSS •
                TypeScript
              </p>
            </div>

            <div>
              <p className="text-accent text-xs font-bold tracking-[0.18em] uppercase mb-2">
                Specialties
              </p>

              <p className="text-muted leading-relaxed">
                Responsive UI • Custom Themes • Gutenberg Blocks • SEO •
                Performance Optimization
              </p>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}