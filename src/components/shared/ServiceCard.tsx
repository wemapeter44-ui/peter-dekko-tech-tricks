import * as Icons from "lucide-react";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[service.icon] ?? Icons.Sparkles;
  return (
    <div className="surface p-6">
      <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-cyan-400/10 text-cyan-400">
        <Icon size={18} />
      </div>
      <h3 className="text-base font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm text-[color:var(--color-muted)]">{service.description}</p>
    </div>
  );
}
