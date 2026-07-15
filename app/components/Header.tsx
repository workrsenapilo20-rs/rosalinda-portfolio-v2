"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Download } from 'lucide-react';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-surface backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-8xl mx-auto w-full px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">

          <Link href="/">
            <Image src="/portfolio-logo.png" alt="Logo" width={120} height={120} className="inline-block mr-2" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-muted hover:text-text transition-colors duration-200 text-sm font-semibold">
              About
            </Link>
            <Link href="#skills" className="text-muted hover:text-text transition-colors duration-200 text-sm font-semibold">
              Skills
            </Link>
            <Link href="#projects" className="text-muted hover:text-text transition-colors duration-200 text-sm font-semibold">
              Projects
            </Link>
            <Link href="#contact" className="text-muted hover:text-text transition-colors duration-200 text-sm font-semibold">
                Contact
            </Link>
          </nav>

          <Link
                href="/Rosalinda-Senapilo-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
                className="inline-flex items-center gap-[0.45rem] px-[1.1rem] py-[0.65rem] text-sm font-semibold whitespace-nowrap no-underline rounded-sm border border-border-accent bg-accent-soft text-accent transition-[background,color,border-color] duration-200 hover:bg-accent hover:text-btn-primary-text hover:border-accent"
                >
                <Download size={16} aria-hidden="true" />
                Resume
            </Link>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-border px-4 py-4 space-y-3">
          <Link href="#about" className="block text-muted hover:text-text py-1" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#projects" className="block text-muted hover:text-text py-1" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/Rosalinda-Senapilo-CV.pdf" target="_blank" rel="noopener noreferrer" className="block text-muted hover:text-text py-1" onClick={() => setMenuOpen(false)}>Resume</Link>
        </div>
      )}
    </header>
  );
}