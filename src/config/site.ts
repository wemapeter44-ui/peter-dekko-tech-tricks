export const site = {
  name: "Peter Dekko Tech Tricks",
  shortName: "PDT",
  author: "Peter Dekko",
  description:
    "Web development, software products, and business systems by Peter Dekko Tech Tricks.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "[YOUR EMAIL]",
  phone: "[YOUR PHONE]",
  location: "[YOUR LOCATION]",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Tech Hub", href: "/tech-hub" },
    { label: "Contact", href: "/contact" },
  ],
  socials: {
    github: "[YOUR GITHUB URL]",
    linkedin: "[YOUR LINKEDIN URL]",
    x: "[YOUR X URL]",
    youtube: "[YOUR YOUTUBE URL]",
  },
} as const;

export type Site = typeof site;
