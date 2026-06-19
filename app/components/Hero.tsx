// components/Hero.jsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

const TYPING_WORDS = ["Rosalinda"];
const TYPE_SPEED = 120;
const DELETE_SPEED = 70;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

function useTypingEffect(words:any[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }, PAUSE_AFTER_DELETE);
    } else {
      const nextText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      timeout = setTimeout(
        () => setText(nextText),
        isDeleting ? DELETE_SPEED : TYPE_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typedName = useTypingEffect(TYPING_WORDS);

  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-25 md:pb-25">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-end">
          {/* Left: text content */}
          <div>
            <p className="text-accent text-sm font-bold tracking-[0.15em] uppercase mb-4">
              Frontend Web Developer
            </p>

            <h1 className="text-5xl md:text-[85px] font-bold text-text leading-tight">
              Hi, I&apos;m
            </h1>
            <h1 className="text-5xl md:text-[85px] font-bold text-text leading-tight min-h-[1.2em]">
              {typedName}
              <span className="inline-block w-[3px] h-[0.9em] bg-text ml-1 align-middle animate-pulse" />
            </h1>

            <p className="mt-6 text-muted text-base md:text-lg leading-relaxed">
              I build modern, responsive web experiences with clean code,
              polished interfaces, and a human-first design approach.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-sm bg-accent text-btn-primary-text font-semibold text-sm transition-transform duration-200 hover:scale-105"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-sm border border-border-accent text-text font-semibold text-sm transition-colors duration-200 hover:bg-accent-soft"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div className="flex justify-center md:justify-end max-w-min p-[0.8rem] border border-border rounded-lg bg-surface-strong shadow-lg">
            <div className="relative w-[280px] h-[360px] md:w-[500px] md:h-[600px] rounded-lg border border-border bg-surface-strong shadow-[0_20px_70px_rgba(0,0,0,0.4)] overflow-hidden">
              <Image
                src="/profile-photo.jpg"
                alt="Rosalinda Senapilo"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}