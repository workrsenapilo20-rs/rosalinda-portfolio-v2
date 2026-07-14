"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../lib/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // lock background scroll

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} preview`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg border border-border bg-surface-strong shadow-[0_30px_90px_rgba(0,0,0,0.6)] animate-[modal-in_0.25s_ease-out]">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close preview"
          className="absolute top-4 right-4 z-10 flex items-center cursor-pointer justify-center w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm text-white transition-colors duration-200 hover:bg-black/80"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full aspect-[16/10]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-text">
            {project.name}
          </h3>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tech.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded-full bg-accent-soft border border-border-accent text-accent text-[11px] font-semibold tracking-wide"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-4 text-muted text-sm md:text-base leading-relaxed">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.link !== "#" ? (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-sm cursor-pointer bg-accent text-btn-primary-text font-semibold text-sm transition-transform duration-200 hover:scale-105"
              >
                Visit Live Site
              </Link>
            ) : (
              <span className="inline-flex items-center px-6 py-3 rounded-sm cursor-pointer border border-border text-muted font-semibold text-sm">
                Live link coming soon
              </span>
            )}
            <button
              onClick={onClose}
              className="inline-flex items-center px-6 py-3 rounded-sm border cursor-pointer border-border-accent text-text font-semibold text-sm transition-colors duration-200 hover:bg-accent-soft"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}