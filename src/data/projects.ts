import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "smart-mwalimu",
    name: "Smart Mwalimu",
    summary:
      "A CBE-ready teacher portal for Kenyan secondary schools — timetable, register, marks, reports, and AI assistance in one dashboard.",
    problem:
      "Kenyan secondary schools transitioning to CBE rely on paper registers, handwritten mark sheets, and WhatsApp for coordination — costing teachers hours every week.",
    solution:
      "A mobile-first web app that unifies the teacher's daily workflow: live timetable, attendance register, CBE marks entry (EE/ME/AE/BE), printable competency-based report cards, staff announcements, and a Gemini-powered teaching assistant.",
    features: [
      "Live personal timetable with auto-refreshed class status",
      "Student roster with performance trends and per-student profiles",
      "Class register with auto-syncing attendance and printable A4 output",
      "CBE marks entry with auto-generated teacher comments",
      "Competency-based report cards (print-ready A4)",
      "Staff announcements and resource library",
      "Real-time notifications and PWA push",
      "AI teaching assistant (Gemini) — lesson plans, exam questions, class insights",
    ],
    tech: [
      "React (Vite)",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Gemini",
      "Vercel",
    ],
    cover: "/projects/smart-mwalimu/cover.jpeg",
    screenshots: [
      "/products/smartmwalimu/screenshot-1.jpeg",
      "/products/smartmwalimu/screenshot-2.jpeg",
      "/products/smartmwalimu/screenshot-3.jpeg",
    ],
    liveUrl: "https://smart-mwalimu-two.vercel.app",
    repoUrl: "",
    featured: true,
  },
];
