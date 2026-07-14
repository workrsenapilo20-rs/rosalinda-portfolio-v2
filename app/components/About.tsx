"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Briefcase,
  Building2,
  Code2,
  Sparkles,
} from "lucide-react";

import Container from "./Container";
import GridBackground from "./GridBackground";

export default function About() {
  const highlights = [
    "Build responsive, high-performance websites for businesses and organizations.",
    "Develop custom WordPress solutions using Elementor, ACF, Gutenberg, and custom themes.",
    "Customize Shopify storefronts with Liquid and modern e-commerce experiences.",
    "Create scalable frontend applications using React, Next.js, TypeScript, and Tailwind CSS.",
    "Transform Figma designs into pixel-perfect, accessible, and responsive interfaces.",
    "Optimize websites for performance, SEO, and Core Web Vitals.",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080B15] pt-20 pb-20 md:pt-25 md:pb-25"
    >
      <GridBackground />

      <Container>
        <h2 className="text-3xl md:text-[48px] font-bold leading-tight">
            <span className="text-accent-dark">About</span>{" "}
            <span className="text-white">Me</span>
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >


            <p className="mt-6 text-muted leading-relaxed">
              I'm a{" "}
              <span className="text-white font-medium">
                Frontend Web Developer
              </span>{" "}
              passionate about building modern, fast, and user-friendly digital
              experiences. I specialize in WordPress, Shopify, and modern
              frontend technologies, helping businesses turn ideas into
              responsive, scalable, and high-performing websites.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-accent mt-1 flex-shrink-0"
                  />

                  <span className="text-muted">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-panel p-8 flex flex-col gap-8"
          >
            <div className="flex items-start gap-4">
              <Briefcase className="text-accent mt-1" size={22} />
              <div>
                <p className="text-accent text-xs font-bold uppercase tracking-[0.18em]">
                  Role
                </p>
                <p className="text-white text-lg font-semibold">
                  Frontend Web Developer
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Building2 className="text-accent mt-1" size={22} />
              <div>
                <p className="text-accent text-xs font-bold uppercase tracking-[0.18em]">
                  Company
                </p>
                <p className="text-white">
                  Fullstack HQ Inc.
                </p>
                <p className="text-muted text-sm">
                  Since May 2021
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Code2 className="text-accent mt-1" size={22} />
              <div>
                <p className="text-accent text-xs font-bold uppercase tracking-[0.18em]">
                  Primary Stack
                </p>
                <p className="text-muted leading-relaxed">
                  WordPress • Shopify • React • Next.js • Tailwind CSS •
                  TypeScript
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Sparkles className="text-accent mt-1" size={22} />
              <div>
                <p className="text-accent text-xs font-bold uppercase tracking-[0.18em]">
                  Focus
                </p>
                <p className="text-muted leading-relaxed">
                  Responsive UI • Custom Themes • Gutenberg Blocks • SEO •
                  Accessibility • Performance Optimization
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}