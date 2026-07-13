"use client";
import { useEffect, useRef, useState } from "react";

export default function GridBackground({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (raf.current) return; // throttle to one update per frame

      raf.current = requestAnimationFrame(() => {
        const el = ref.current;
        if (el) {
          // shift the grid slower than actual scroll for a parallax feel
          const offset = window.scrollY * 0.15;
          el.style.backgroundPosition = `0px ${offset}px, ${offset}px 0px`;
        }
        raf.current = null;
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`grid-bg absolute inset-0 pointer-events-none transition-opacity duration-[1200ms] ease-out ${
        visible ? "opacity-40" : "opacity-0"
      } ${className}`}
    />
  );
}