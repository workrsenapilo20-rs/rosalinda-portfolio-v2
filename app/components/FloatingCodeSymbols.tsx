"use client";

type Symbol = {
  text: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  textSize: string;
  delay: string;
  duration: string;
  opacity: string; // depth cue — fainter symbols read as "farther away"
  hideOnMobile?: boolean;
};

const DEFAULT_SYMBOLS: Symbol[] = [
  { text: "</>", top: "8%", left: "4%", textSize: "text-2xl md:text-4xl", delay: "0s", duration: "3s", opacity: "opacity-100" },
  { text: "{ }", top: "42%", left: "3%", textSize: "text-lg md:text-2xl", delay: "0.9s", duration: "3.6s", opacity: "opacity-50", hideOnMobile: true },
  { text: "( )", top: "78%", left: "10%", textSize: "text-xl md:text-3xl", delay: "0.4s", duration: "3.2s", opacity: "opacity-70" },
  { text: "</>", top: "16%", right: "5%", textSize: "text-xl md:text-3xl", delay: "1.1s", duration: "2.8s", opacity: "opacity-60", hideOnMobile: true },
  { text: "#", top: "46%", right: "4%", textSize: "text-2xl md:text-3xl", delay: "1.6s", duration: "3.4s", opacity: "opacity-40", hideOnMobile: true },
  { text: "{ }", top: "82%", right: "9%", textSize: "text-2xl md:text-4xl", delay: "0.6s", duration: "3s", opacity: "opacity-80" },
];

export default function FloatingCodeSymbols({
  symbols = DEFAULT_SYMBOLS,
}: {
  symbols?: Symbol[];
}) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {symbols.map((s, i) => (
        <div
          key={i}
          className={`floating-symbol absolute font-mono font-bold text-accent drop-shadow-[0_0_12px_rgba(var(--accent-rgb),0.35)] ${s.textSize} ${s.opacity} ${
            s.hideOnMobile ? "hidden sm:block" : ""
          }`}
          style={{
            top: s.top,
            bottom: s.bottom,
            left: s.left,
            right: s.right,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        >
          {s.text}
        </div>
      ))}
    </div>
  );
}