"use client";
import { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { PROJECTS, type Project } from "../lib/projects";
import GridBackground from "./GridBackground";
import ProjectModal from "./ProjectModal";

const SCROLL_SPEED = 0.8;

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const isHoveredRef = useRef(false);
  const isManualScrollRef = useRef(false);
  const manualScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const marqueeProjects = [...PROJECTS, ...PROJECTS];

  function scrollByAmount(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = track.firstElementChild
      ? (track.firstElementChild as HTMLElement).offsetWidth
      : 320;

    isManualScrollRef.current = true;
    if (manualScrollTimeoutRef.current) clearTimeout(manualScrollTimeoutRef.current);

    track.scrollBy({
      left: direction === "left" ? -(cardWidth + 24) : cardWidth + 24,
      behavior: "smooth",
    });

    manualScrollTimeoutRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
    }, 8000);
  }

  const tick = useCallback(() => {
    const track = trackRef.current;
    if (track && !isHoveredRef.current && !isManualScrollRef.current && !activeProject) {
      track.scrollLeft += SCROLL_SPEED;

      const halfway = track.scrollWidth / 2;
      if (track.scrollLeft >= halfway) {
        track.scrollLeft -= halfway;
      }
    }

    rafRef.current = requestAnimationFrame(tick);
  }, [activeProject]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (manualScrollTimeoutRef.current) clearTimeout(manualScrollTimeoutRef.current);
    };
  }, [tick]);

  function handleMouseEnter() {
    isHoveredRef.current = true;
  }

  function handleMouseLeave() {
    isHoveredRef.current = false;
  }

  return (
    <section id="projects" className="relative overflow-hidden pt-20 pb-20 md:pt-25 md:pb-25 bg-[#080B15]">
      <GridBackground />
      <Container>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-accent-dark text-3xl md:text-[48px] font-bold">
            Projects
          </h2>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollByAmount("left")}
              aria-label="Previous project"
              className="cursor-pointer flex items-center justify-center w-11 h-11 rounded-full border border-border text-text transition-colors duration-200 hover:bg-accent-soft hover:border-border-accent"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scrollByAmount("right")}
              aria-label="Next project"
              className="cursor-pointer flex items-center justify-center w-11 h-11 rounded-full border border-border text-text transition-colors duration-200 hover:bg-accent-soft hover:border-border-accent"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <Link href="/projects" className="cursor-pointer inline-flex items-center px-6 py-3 rounded-sm bg-accent text-btn-primary-text font-semibold text-sm transition-transform duration-200 hover:scale-105">
              See More Projects
            </Link>
          </div>
        </div>
      </Container>

      <div
        ref={trackRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex gap-6 overflow-x-auto pl-6 pr-6 md:pl-[max(1.5rem,calc((100vw-1440px)/2+1.5rem))] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {marqueeProjects.map((project, index) => (
          <button
            key={`${project.id}-${index}`}
            onClick={() => setActiveProject(project)}
            className="text-left shrink-0 w-[78%] sm:w-[45%] md:w-[38%] lg:w-[calc(40%-1rem)] cursor-pointer"
          >
            <div className="group relative w-full h-[350px] rounded-lg overflow-hidden border border-border bg-surface-strong">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 768px) 45vw, (max-width: 1024px) 38vw, 40vw"
                className="object-cover transition-transform duration-300 "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((item, techIndex) => (
                    <span
                      key={item}
                      style={{ animationDelay: `${techIndex * 80}ms` }}
                      className="tech-badge px-2.5 py-1 rounded-full bg-accent-soft backdrop-blur-sm border border-border-accent text-accent text-[11px] font-semibold tracking-wide"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-white text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
            <p className="mt-4 text-text font-semibold text-lg">
              {project.name}
            </p>
          </button>
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}