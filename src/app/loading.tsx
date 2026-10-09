export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-6 lg:px-8">
      <div className="h-3 w-32 animate-pulse rounded bg-white/5" />
      <div className="mt-6 h-10 w-2/3 animate-pulse rounded bg-white/5" />
      <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-white/5" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="surface h-40 animate-pulse" />
        ))}
      </div>
    </div>
  );
}
