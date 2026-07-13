"use client";
import { useRef } from "react";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { PROJECTS } from "../lib/projects";
import GridBackground from "./GridBackground";

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByAmount(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = track.firstElementChild
      ? (track.firstElementChild as HTMLElement).offsetWidth
      : 320;

    track.scrollBy({
      left: direction === "left" ? -(cardWidth + 24) : cardWidth + 24,
      behavior: "smooth",
    });
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

      {/* Full-bleed slider track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pl-6 pr-6 md:pl-[max(1.5rem,calc((100vw-1440px)/2+1.5rem))] scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {PROJECTS.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            target={project.link.startsWith("http") ? "_blank" : undefined}
            rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="snap-start shrink-0 w-[78%] sm:w-[45%] md:w-[38%] lg:w-[calc(40%-1rem)]"
          >
            <div className="group relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-border bg-surface-strong">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Tech stack badges */}
              <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1.5 z-10">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm leading-relaxed translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {project.description}
                </p>
              </div>
            </div>
            <p className="mt-4 text-text font-semibold text-lg">
              {project.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}