"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-sm text-[color:var(--color-muted)] transition hover:text-cyan-400"
    >
      <ArrowLeft size={14} />
      Back to Products
    </button>
  );
}
