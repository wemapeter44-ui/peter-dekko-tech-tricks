"use client";

import Image from "next/image";
import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { Lightbox } from "./Lightbox";

export function ScreenshotGallery({
  screenshots,
  title,
}: {
  screenshots: string[];
  title: string;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(src)}
            className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-black/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label={`Open ${title} screenshot ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain p-2 transition group-hover:scale-[1.02]"
            />
            <span className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-md bg-black/60 text-white opacity-0 transition group-hover:opacity-100">
              <Maximize2 size={14} />
            </span>
          </button>
        ))}
      </div>

      <Lightbox src={active} alt={`${title} screenshot`} onClose={() => setActive(null)} />
    </>
  );
}
