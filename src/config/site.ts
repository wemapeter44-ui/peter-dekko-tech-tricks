export const site = {
  name: "Peter Dekko Tech Tricks",
  shortName: "PDT",
  author: "Peter Dekko",
  description:
    "Web development, software products, and business systems by Peter Dekko Tech Tricks.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "wemapeter44@gmail.com",
  phone: "0141602158",
  location: "Mombasa, Kenya",
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
    github: "https://github.com/wemapeter44-ui",
    linkedin: "",
    x: "",
    youtube: "https://www.youtube.com/channel/UCKObhSKaZNEddfG2wy_tbMA",
  },
} as const;

export type Site = typeof site;
