import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import GridBackground from "../components/GridBackground";
import { PROJECTS } from "../lib/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-25 bg-[#080B15] min-h-screen">
      <GridBackground />
      <Container>
        <div className="mb-14">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted text-sm font-medium hover:text-text transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back to home
          </Link>

          <h1 className="mt-6 text-4xl md:text-[56px] font-bold text-text leading-tight">
            All <span className="text-accent">Projects</span>
          </h1>
          <p className="mt-4 text-muted text-base md:text-lg max-w-2xl">
            A full look at the sites and apps I&apos;ve built — from WordPress
            rebuilds to modern React and Next.js products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : undefined}
              rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group block"
            >
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-border bg-surface-strong">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 768px) 45vw, (max-width: 1024px) 38vw, 40vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

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
      </Container>
    </section>
  );
}