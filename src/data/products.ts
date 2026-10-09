import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "smartmwalimu",
    name: "Smart Mwalimu",
    tagline:
      "A teacher's command center for Kenya's Competency-Based Curriculum.",
    description:
      "Smart Mwalimu is a teacher-only web portal built for Kenyan secondary schools transitioning to the Competency-Based Curriculum (CBE). It replaces paper registers, scattered mark sheets, and WhatsApp announcements with a single, mobile-first dashboard. Every teacher gets a personal workspace — their own timetable, their classes, their students, and an AI assistant aligned to CBE terminology (strands, sub-strands, EE/ME/AE/BE competency levels). Deployed as a PWA, it works on any phone, tablet, or desktop without installation friction.",
    problem:
      "Kenyan secondary schools are mid-transition from 8-4-4 to CBE, and teachers are juggling paper class registers, handwritten mark sheets that take hours to compile, hand-written report cards, timetables on chalkboards, and no way to identify struggling students early. Smart Mwalimu solves all of this — one portal, one login, one source of truth.",
    features: [
      "Live personal timetable with today's classes refreshed automatically",
      "Student roster and per-student profiles with attendance, averages, and performance trends",
      "Class register with instant attendance tracking and printable A4 output",
      "CBE marks recording with EE / ME / AE / BE competency levels per strand and sub-strand",
      "Competency-based report cards with AI-generated teacher comments (print-ready A4)",
      "Staff announcements with pinning, search, and auto-dispatched notifications",
      "Real-time notifications with unread count",
      "AI Teaching Assistant (Gemini) tuned to Kenya's CBE framework — lesson plans, SBA/KCBE questions, marking schemes",
      "AI class insights — strengths, weaknesses, students needing support, weekly teaching recommendations",
      "Shared resource library (past papers, notes, videos) with subject filter and search",
      "Installable PWA with web push notifications on Android and desktop",
      "Dark, mobile-first UI built for phones and low-bandwidth networks",
    ],
    tech: [
      "React (Vite)",
      "Tailwind CSS v4",
      "Supabase (PostgreSQL + RLS + Realtime + Auth)",
      "Google Gemini 3.5 Flash-Lite",
      "Web Push API + VAPID",
      "Supabase Edge Functions",
      "Vercel",
    ],
    status: "in-development",
    logo: "/logo.jpeg",
    screenshots: [
      "/products/smartmwalimu/screenshot-1.jpeg",
      "/products/smartmwalimu/screenshot-2.jpeg",
      "/products/smartmwalimu/screenshot-3.jpeg",
    ],
    ctaLabel: "Visit Smart Mwalimu",
    ctaUrl: "https://smart-mwalimu-two.vercel.app",
    featured: true,
  },
];
