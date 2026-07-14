export type Project = {
  id: string;
  name: string;
  image: string;
  description: string;
  link: string;
  tech: string[];
};

export const PROJECTS: Project[] = [
  { id: "1", name: "Susan Cox Foundation", image: "/projects-thumbnails/susan-cox.png", description: "The Susan Cox Powell Foundation supports organizations that assist domestic abuse victims and their children.", link: "https://www.susanhelps.org/", tech: ["WordPress", "ACF", "Gutenberg", "Laravel Blade", "Sage 10/11", "Vite", "TailwindCSS"] },
  { id: "2", name: "SusanShares", image: "/projects-thumbnails/susan-shares.png", description: "This website is dedicated to helping victims of domestic abuse find needed resources and providing information about Susan Cox Powell's story.", link: "https://www.susanshares.org/", tech: ["WordPress", "ACF", "Gutenberg", "Laravel Blade", "Sage 10/11", "Vite", "TailwindCSS"] },
  { id: "3", name: "Andy Millet", image: "/projects-thumbnails/andy-millet.png", description: "Andy Millet helps you unlock the right mortgage with a personal touch — from buying your first home to refinancing, investing, or tapping into your home's equity, guided by real-world perspective and proven strategies.", link: "https://www.andymillet.com/", tech: ["WordPress", "ACF", "Gutenberg", "Laravel Blade", "Sage 10/11", "Vite", "TailwindCSS"] },
  { id: "4", name: "Elect Anders", image: "/projects-thumbnails/elect-anders.png", description: "A campaign website with real-time updates and responsive design.", link: "https://www.andersibsen.com/", tech: ["WordPress", "ACF", "Gutenberg", "Laravel Blade", "Sage 10/11", "Vite", "TailwindCSS"] },
  { id: "5", name: "Capitol Painting Company", image: "/projects-thumbnails/capitol-painting.png", description: "A local business site with online booking and service showcases.", link: "https://capitolpaintingcompany.com/", tech: ["WordPress", "ACF", "Gutenberg", "Laravel Blade", "Sage 10/11", "Vite", "TailwindCSS"] },
  { id: "6", name: "Ubiquity", image: "/projects-thumbnails/ubiquity.png", description: "A SaaS landing page with conversion-focused UI and animations.", link: "https://www.ubiquity.com/", tech: ["Builder.io", "Next.js", "Tailwind CSS"] },
  { id: "7", name: "Blackbough Swim", image: "/projects-thumbnails/blackbough-swim.png", description: "An e-commerce storefront built on Shopify with custom theming.", link: "https://blackboughswim.com/", tech: ["Shopify", "Liquid", "CSS"] },
  { id: "8", name: "Lemoine", image: "/projects-thumbnails/lemoine.png", description: "A corporate site rebuild with improved performance and SEO.", link: "#", tech: ["WordPress", "Gutenberg", "CSS", "HTML"] },
  { id: "9", name: "Sewer Inspector", image: "/projects-thumbnails/sewer-inspector.png", description: "A service-based business site with lead capture forms.", link: "https://sewerinspector.com/", tech: ["WordPress", "JavaScript", "HTML", "CSS", "PHP"] },
  { id: "10", name: "BigPost", image: "/projects-thumbnails/bigpost.png", description: "A content-driven news/media site built on WordPress with Elementor, featuring custom JS interactions and hand-tuned CSS.", link: "#", tech: ["WordPress", "Elementor", "JavaScript", "CSS"] },
  { id: "11", name: "Style Steel", image: "/projects-thumbnails/stylesteel.png", description: "An e-commerce storefront built on Shopify with a custom theme tailored for a steel/metalwork product catalog.", link: "#", tech: ["Shopify", "Liquid", "CSS"] },
  { id: "12", name: "Rainier Plumbing", image: "/projects-thumbnails/rainier-plumbing.png", description: "A plumbing service business site built on WordPress with a custom booking flow and service showcase.", link: "https://www.rainierplumbingllc.com/", tech: ["WordPress", "ACF", "Gutenberg", "Laravel Blade", "Sage 10/11", "Vite", "TailwindCSS"] },
];