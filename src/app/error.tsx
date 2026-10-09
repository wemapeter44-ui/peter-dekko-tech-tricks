"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
        Error
      </p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-3 text-sm text-[color:var(--color-muted)]">
        An unexpected error occurred while rendering this page.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-lg border border-[color:var(--color-border)] px-5 py-3 text-sm font-semibold transition hover:border-cyan-400/50"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
