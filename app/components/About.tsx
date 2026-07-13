"use client";
import Container from "./Container";
import GridBackground from "./GridBackground";
const CAREER_START_DATE = new Date("2021-05-17");

function getExperienceDuration(startDate: Date): { years: number; months: number } {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (now.getDate() < startDate.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years: Math.max(years, 0), months: Math.max(months, 0) };
}

function formatDuration({ years, months }: { years: number; months: number }): string {
  const yearPart = `${years} Year${years === 1 ? "" : "s"}`;
  const monthPart = months > 0 ? ` ${months} Month${months === 1 ? "" : "s"}` : "";
  return `${yearPart}${monthPart}`;
}

export default function About() {
  const duration = getExperienceDuration(CAREER_START_DATE);
  const durationLabel = formatDuration(duration);

  return (
    <section id="about" className="relative overflow-hidden pt-20 pb-20 md:pt-25 md:pb-25 bg-[#080B15]">
      <GridBackground />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-[48px] font-bold text-text leading-tight">
               <span className="text-accent-dark">About</span> Me
            </h2>

            <p className="mt-6 text-muted leading-relaxed">
            Frontend Web Developer with {durationLabel} years of experience building responsive, high-performing websites — spanning WordPress (Elementor, ACF, Gutenberg), Shopify, and modern stacks like React, Next.js, and Tailwind CSS. I focus on clean UI, performance, and SEO to help businesses grow their online presence.
            </p>
          </div>

          {/* Right: info card */}
          <div className="rounded-lg border border-border bg-panel p-8 flex flex-col gap-6 about-card">
            <div>
              <p className="text-accent text-xs font-bold tracking-[0.15em] uppercase mb-2">
                Role
              </p>
              <p className="text-text">Frontend Web Developer</p>
            </div>

            <div>
              <p className="text-accent text-xs font-bold tracking-[0.15em] uppercase mb-2">
                Experience
              </p>
              <p className="text-text">{durationLabel} at Fullstack HQ Inc.</p>
            </div>

            <div>
              <p className="text-accent text-xs font-bold tracking-[0.15em] uppercase mb-2">
                Focus
              </p>
              <p className="text-text">WordPress, Responsive UI, Performance, SEO</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}