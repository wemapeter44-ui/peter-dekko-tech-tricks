import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "pdt-shule",
    name: "PDT Shule",
    tagline: "Intelligent School Management. One Connected Platform.",
    description:
      "PDT Shule is a cloud-based, multi-tenant school management SaaS being developed by Peter Dekko Tech Tricks for schools in Kenya. Built with modern web technologies and AI integration, it aims to simplify academic administration, improve access to school information, and bring essential school workflows into one secure digital workspace.",
    problem:
      "Manual administration, scattered student records, time-consuming mark compilation, and repetitive reporting can make school operations difficult. PDT Shule is designed to bring these workflows together while keeping each school's information separate and access controlled.",
    features: [
      "Multi-school management from one platform",
      "Student profiles and academic records",
      "Class and stream organization",
      "Attendance and class register workflows",
      "Marks entry and academic performance tracking",
      "Academic reports and report-generation workflows",
      "Teacher tools and role-based access",
      "Timetable and school announcements",
      "AI integration powered by Google Gemini through Supabase Edge Functions",
      "AI-assisted school workflows as features are developed",
      "School-level data isolation",
      "Authentication and access control",
      "Cloud-based access from desktop and mobile",
      "Supabase storage and backend services",
      "Designed to support CBC and 8-4-4 school workflows",
    ],
    tech: [
      "React + Vite",
      "JavaScript (JSX)",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Row Level Security",
      "Supabase Edge Functions",
      "Supabase Storage",
      "Google Gemini API",
      "Vercel",
    ],
    status: "in-development",
    logo: "/logo.jpeg",
    screenshots: ["/products/pdt-shule/showcase.png"],
    ctaLabel: "Explore PDT Shule",
    ctaUrl: "https://pdt-shule.vercel.app",
    featured: true,
  },
];

