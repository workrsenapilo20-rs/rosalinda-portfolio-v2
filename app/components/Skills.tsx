// components/Skills.tsx
"use client";
import Image from "next/image";
import Container from "./Container";

type Skill = {
  name: string;
  src: string;
  invert?: boolean;
};

// Grouped by function — frontend, CMS/e-commerce, design/dev tools
const SKILL_GROUPS: Skill[][] = [
  [
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
    { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Sass", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "Vite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  ],
  [
    { name: "WordPress", src: "/tools/wordpress.png" },
    { name: "Shopify", src: "/tools/icon-shopify.svg" },
    { name: "WIX", src: "/tools/wix.png" },
    { name: "Squarespace", src: "/tools/squarespace.png" },
    { name: "Builder.io", src: "/tools/icon-builderio.svg" },
    { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  ],
  [
    { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
    { name: "Bitbucket", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
    { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "ClickUp", src: "/tools/icon-clickup.svg" },
    { name: "LocalWP", src: "/tools/icon-localwp.png" },
  ],
];

function duplicateForLoop(skills: Skill[]) {
  return [...skills, ...skills];
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden pt-20 pb-20 md:pt-25 md:pb-25">
      <Container>
        <h2 className="text-3xl md:text-[48px] font-bold text-text">
          <span className="text-accent-dark">Tools</span> and <span className="text-accent-dark">Technologies</span> I work with
        </h2>
        <div className="mt-10 flex flex-col gap-6">
            {SKILL_GROUPS.map((group, groupIndex) => (
            <div
                key={groupIndex}
                className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
            >
                <div
                className={`flex w-max gap-6 py-1 ${
                    groupIndex % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"
                }`}
                >
                {duplicateForLoop(group).map((skill, i) => (
                    <div
                    key={`${skill.name}-${i}`}
                    className="flex  items-center justify-center gap-2 shrink-0 w-[250px] rounded-md border border-border bg-panel p-5 hover:bg-surface-strong hover:border-accent-dark transition-colors duration-200 group cursor-pointer"
                    >
                    <Image
                        src={skill.src}
                        alt=""
                        aria-hidden="true"
                        width={80}
                        height={80}
                        className={skill.invert ? "invert" : ""}
                        unoptimized
                    />
                    <span className="text-text text-sm font-medium whitespace-nowrap">
                        {skill.name}
                    </span>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
    </Container>
    </section>
  );
}