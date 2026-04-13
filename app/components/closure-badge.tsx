import { getClosureStatus } from "@/app/lib/hawker-closures";

export default async function ClosureBadge({
  hawkerName,
}: {
  hawkerName: string;
}) {
  const closure = await getClosureStatus(hawkerName);

  if (closure.status === "closed") {
    return (
      <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
        <span className="mt-0.5 text-lg text-red-400">⚠️</span>
        <div>
          <p className="mb-0.5 text-sm font-bold uppercase tracking-widest text-red-400">
            Currently Closed
          </p>
          <p className="text-sm text-white/70">
            Closed for{" "}
            <span className="text-white/90">
              {closure.reason ?? "Temporary Closure"}
            </span>{" "}
            until{" "}
            <span className="font-semibold text-white">{closure.endDate}</span>.
            Plan your visit accordingly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3">
      <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
      <p className="text-sm font-bold uppercase tracking-widest text-green-400">
        Open
      </p>
      <p className="text-sm text-white/50">— No scheduled closures</p>
    </div>
  );
}
