import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "business-websites",
    title: "Business Websites",
    description:
      "Mobile-first, fast, and search-optimized websites designed to convert visitors into customers.",
    deliverables: [
      "Custom design aligned to your brand",
      "SEO basics (titles, meta, sitemap, performance)",
      "Contact forms and lead capture",
      "Easy content updates",
      "Deployment and handover",
    ],
    icon: "Globe",
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    description:
      "Custom React + Supabase apps — dashboards, portals, and internal tools built around your workflow.",
    deliverables: [
      "Custom UI built with React and Tailwind",
      "Authentication and role-based access",
      "Database design (PostgreSQL / Supabase)",
      "Real-time features where needed",
      "Documentation and handover",
    ],
    icon: "LayoutDashboard",
  },
  {
    slug: "business-systems",
    title: "Business Management Systems",
    description:
      "Replace spreadsheets with one system for inventory, sales, HR, or school operations.",
    deliverables: [
      "Inventory / sales / HR / school modules",
      "Real-time data and dashboards",
      "Role-based access for staff",
      "Reports you can trust",
      "Training and ongoing support",
    ],
    icon: "Database",
  },
  {
    slug: "automation",
    title: "Automation",
    description:
      "Automate repetitive tasks — reports, notifications, and workflows that currently run manually.",
    deliverables: [
      "Report generation on schedule",
      "Automated notifications (email / WhatsApp / push)",
      "Data sync between systems",
      "Workflow scripts and jobs",
      "Monitoring and error alerts",
    ],
    icon: "Workflow",
  },
  {
    slug: "software-development",
    title: "Software Development",
    description:
      "Full-cycle custom software — from scoping and design to deployment and handover.",
    deliverables: [
      "Discovery and scoping",
      "UI/UX design",
      "Frontend and backend development",
      "Testing and QA",
      "Deployment and documentation",
    ],
    icon: "Code2",
  },
  {
    slug: "technical-support",
    title: "Technical Support & Maintenance",
    description:
      "Ongoing care for your site or app — fixes, updates, backups, and monitoring.",
    deliverables: [
      "Bug fixes and patches",
      "Dependency and security updates",
      "Automated backups",
      "Uptime and error monitoring",
      "Small feature additions",
    ],
    icon: "LifeBuoy",
  },
];
