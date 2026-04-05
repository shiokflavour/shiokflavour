export function HomeMainSkeleton() {
  return (
    <>
      <section
        className="relative flex min-h-[90vh] w-full flex-col justify-center overflow-hidden border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8"
        aria-hidden
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <div className="h-4 w-48 animate-pulse rounded bg-white/10" />
          <div className="mt-6 h-12 w-full max-w-lg animate-pulse rounded bg-white/10 sm:h-14" />
          <div className="mt-4 h-6 w-full max-w-md animate-pulse rounded bg-white/10" />
          <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            <div className="h-12 flex-1 animate-pulse rounded-xl bg-sf-primary/40" />
            <div className="h-12 flex-1 animate-pulse rounded-xl bg-white/10" />
          </div>
          <ul className="mt-14 grid w-full max-w-2xl gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-4">
            {[0, 1, 2].map((i) => (
              <li
                key={i}
                className="rounded-xl border border-white/10 bg-black/25 px-4 py-4 backdrop-blur-sm sm:py-5"
              >
                <div className="mx-auto h-9 w-16 animate-pulse rounded bg-white/10 sm:h-10" />
                <div className="mx-auto mt-2 h-4 w-24 animate-pulse rounded bg-white/10" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl -translate-y-8 px-4 sm:px-6 lg:px-8">
        <div className="h-[60px] animate-pulse rounded-2xl bg-white/10" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="h-48 animate-pulse rounded-2xl bg-white/10" />
      </section>

      <section
        id="hawker-centres"
        className="border-t border-white/5 bg-black/20 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 h-10 w-64 animate-pulse rounded bg-white/10" />
          <div className="mb-10 flex flex-wrap gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-10 w-20 animate-pulse rounded-full bg-white/10"
              />
            ))}
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i} className="overflow-hidden rounded-2xl border border-white/10">
                <div className="aspect-[16/10] animate-pulse bg-white/10" />
                <div className="space-y-3 p-5">
                  <div className="h-6 w-24 animate-pulse rounded-full bg-white/10" />
                  <div className="h-5 w-full animate-pulse rounded bg-white/10" />
                  <div className="h-4 w-[85%] animate-pulse rounded bg-white/10" />
                  <div className="h-11 w-full animate-pulse rounded-xl bg-sf-primary/40" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
