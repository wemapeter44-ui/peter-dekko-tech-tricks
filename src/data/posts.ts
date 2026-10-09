import type { Post } from "@/types";

export const posts: Post[] = [
  {
    slug: "hello-tech-hub",
    title: "Hello, Tech Hub",
    excerpt:
      "Welcome to the Peter Dekko Tech Tricks Tech Hub — tutorials, build notes, and lessons learned from building real software.",
    date: "2026-01-01",
    readingTime: "3 min read",
    tags: ["Announcement"],
    featured: true,
    content: `Welcome. This is where I publish tutorials, build notes, and lessons learned from real projects.

## Why this space exists

Every project I've shipped — from Smart Mwalimu to client systems — has taught me something that never makes it into documentation. The bug that cost me a weekend. The architecture decision I'd reverse. The library that promised everything and delivered little.

This blog is where those lessons live. Short, honest, written for other developers and for future me.

## What to expect

Tutorials — practical, code-first walkthroughs. React, Supabase, Tailwind, deployment on Vercel, and the small things that make a project feel polished.

Build notes — how I actually built specific features. Multi-subject teachers. CBE competency levels. AI integration that works in Kenya without burning data.

Lessons learned — mistakes, trade-offs, and decisions I'd repeat or avoid. Real project context, no fluff.

## First series: Smart Mwalimu

The first posts will unpack Smart Mwalimu, a teacher portal for Kenyan secondary schools transitioning to the Competency-Based Curriculum. I'll cover:

- Designing for CBE without breaking 8-4-4 users
- Real-time updates without flicker (and why I eventually removed realtime)
- Integrating Gemini for lesson plans and class insights
- Deploying a React + Supabase app on Vercel for a Kenyan school

## Who this is for

If you're building software for schools, businesses, or just yourself — and you want honest notes instead of marketing — you'll find something here.

## Follow along

New posts will appear on the Tech Hub page.

Let's build.`,
  },
];
