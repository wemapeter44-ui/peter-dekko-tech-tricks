
import * as Icons from "lucide-react";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon =
    (Icons as unknown as Record<
      string,
      React.ComponentType<{ size?: number; strokeWidth?: number }>
    >)[service.icon] ?? Icons.Sparkles;

  return (
    <article className="surface group relative overflow-hidden rounded-2xl border border-white/5 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_12px_40px_rgba(34,211,238,0.08)] motion-safe:animate-[fade-up_600ms_ease-out_both]">
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/0 blur-3xl transition-colors duration-500 group-hover:bg-cyan-400/10" />

      <div className="relative mb-5 grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20">
        <Icon size={20} strokeWidth={1.8} />
      </div>

      <h3 className="relative text-base font-semibold tracking-tight transition-colors duration-300 group-hover:text-cyan-300">
        {service.title}
      </h3>

      <p className="relative mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
        {service.description}
      </p>

      <div className="mt-6 h-px w-10 bg-cyan-400/40 transition-all duration-300 group-hover:w-full group-hover:bg-cyan-400/60" />
    </article>
  );
}
