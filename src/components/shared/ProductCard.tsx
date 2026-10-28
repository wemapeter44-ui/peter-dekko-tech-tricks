import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BrainCircuit,
  Users,
  CalendarCheck,
  ChartNoAxesColumn,
  ShieldCheck,
  BookOpen,
  Cloud,
  ClipboardList,
} from "lucide-react";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  const features = [
    { label: "AI Integration", Icon: BrainCircuit },
    { label: "Multi-School", Icon: Users },
    { label: "Academic Reports", Icon: ChartNoAxesColumn },
    { label: "Attendance", Icon: CalendarCheck },
    { label: "Student Records", Icon: ClipboardList },
    { label: "Access Control", Icon: ShieldCheck },
    { label: "Teacher Workflows", Icon: BookOpen },
    { label: "Cloud Platform", Icon: Cloud },
  ];

  const isInDevelopment = product.status === "in-development";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080d19] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_18px_55px_rgba(34,211,238,0.10)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#071a2d] via-[#10152d] to-[#21113c]">
        {product.screenshots?.[0] ? (
          <Image
            src={product.screenshots[0]}
            alt={`${product.name} product showcase`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="flex size-20 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10">
              <BookOpen size={42} className="text-cyan-300" />
            </div>
            <p className="text-2xl font-bold text-white">
              PDT <span className="text-cyan-300">Shule</span>
            </p>
            <p className="text-xs tracking-[0.2em] text-slate-400">
              SMART SCHOOLS · BRIGHT FUTURES
            </p>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080d19] to-transparent" />
</div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-400">
          <span className="h-px w-6 bg-cyan-400" />
          School Management SaaS
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-cyan-300">
            {product.name}
          </h3>
          <ArrowUpRight
            size={20}
            className="shrink-0 text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
          />
        </div>

        <p className="mt-2 text-sm font-medium text-slate-300">
          {product.tagline}
        </p>

        <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-400">
          {product.description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2">
          {features.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] p-2.5"
            >
              <Icon size={15} className="shrink-0 text-cyan-400" />
              <span className="text-xs text-slate-300">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto mt-6 flex items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
          <span className="text-xs text-slate-500">By PDT Softwares</span>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
            {product.ctaLabel || "Explore Product"}
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}


