export type ProductStatus = "live" | "beta" | "in-development" | "planned";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  features: string[];
  tech: string[];
  status: ProductStatus;
  screenshots?: string[];
  demoUrl?: string;
  ctaLabel: string;
  ctaUrl: string;
  featured?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  screenshots?: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
};
