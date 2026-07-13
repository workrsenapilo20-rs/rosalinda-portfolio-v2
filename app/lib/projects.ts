export type Project = {
  id: string;
  name: string;
  image: string;
  description: string;
  link: string;
  tech: string[];
};

export const PROJECTS: Project[] = [
  { id: "1", name: "Susan Cox Foundation", image: "/projects/placeholder-1.jpg", description: "A nonprofit website redesign focused on accessibility and donor engagement.", link: "#", tech: ["WordPress", "ACF", "Gutenberg", "CSS", "HTML"] },
  { id: "2", name: "SusanShares", image: "/projects/placeholder-2.jpg", description: "A community sharing platform built with custom WordPress functionality.", link: "#", tech: ["WordPress", "ACF", "PHP", "CSS"] },
  { id: "3", name: "Andy Millet", image: "/projects/placeholder-3.jpg", description: "A personal portfolio site with smooth animations and a custom CMS.", link: "#", tech: ["Next.js", "React", "Tailwind CSS"] },
  { id: "4", name: "Elect Anders", image: "/projects/placeholder-4.jpg", description: "A campaign website with real-time updates and responsive design.", link: "#", tech: ["React", "Next.js", "Tailwind CSS"] },
  { id: "5", name: "Capitol Painting Company", image: "/projects/placeholder-5.jpg", description: "A local business site with online booking and service showcases.", link: "#", tech: ["WordPress", "Elementor", "CSS"] },
  { id: "6", name: "Ubiquity", image: "/projects/placeholder-5.jpg", description: "A SaaS landing page with conversion-focused UI and animations.", link: "#", tech: ["React", "Next.js", "Tailwind CSS"] },
  { id: "7", name: "Blackbough Swim", image: "/projects/placeholder-5.jpg", description: "An e-commerce storefront built on Shopify with custom theming.", link: "#", tech: ["Shopify", "Liquid", "CSS"] },
  { id: "8", name: "Lemoine", image: "/projects/placeholder-5.jpg", description: "A corporate site rebuild with improved performance and SEO.", link: "#", tech: ["WordPress", "Gutenberg", "CSS", "HTML"] },
  { id: "9", name: "Sewer Inspector", image: "/projects/placeholder-5.jpg", description: "A service-based business site with lead capture forms.", link: "#", tech: ["WordPress", "WPBakery", "PHP"] },
  { id: "10", name: "BigPost", image: "/projects/placeholder-5.jpg", description: "A content-driven news/media site built on WordPress with Elementor, featuring custom JS interactions and hand-tuned CSS.", link: "#", tech: ["WordPress", "Elementor", "JavaScript", "CSS"] },
  { id: "11", name: "Style Steel", image: "/projects/placeholder-5.jpg", description: "An e-commerce storefront built on Shopify with a custom theme tailored for a steel/metalwork product catalog.", link: "#", tech: ["Shopify", "Liquid", "CSS"] },
];