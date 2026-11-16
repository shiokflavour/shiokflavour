import { getClosureStatus } from "@/app/lib/hawker-closures";
import { HAWKER_HOURS, weeklyText } from "@/app/lib/hawker-hours";
import { OpenNowLive } from "./open-now-live";

/** "Is it open now?" panel for a hawker centre page. */
export default async function OpenNowPanel({
  slug,
  name,
  restDays,
}: {
  slug: string;
  name: string;
  restDays?: string;
}) {
  const hours = HAWKER_HOURS[slug];
  const closure = await getClosureStatus(name);
  if (!hours) return null;
  const closed = closure.status === "closed";
  const sameDay = closure.nextStartDate === closure.nextEndDate;

  return (
    <section
      aria-labelledby="open-now-heading"
      className="rounded-2xl border border-white/10 bg-black/25 p-4 sm:p-5"
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-sf-primary" aria-hidden />
        <h2 id="open-now-heading" className="text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">
          Is {name} open now?
        </h2>
      </div>
      <div className="mt-3">
        <OpenNowLive
          hours={hours}
          closedUntil={closed ? closure.endDate : undefined}
          closedReason={closed ? closure.reason : undefined}
        />
      </div>
      <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-sf-muted">Most stalls</dt>
          <dd className="font-semibold text-sf-cream">{weeklyText(hours.core)}</dd>
        </div>
        <div>
          <dt className="text-sf-muted">{hours.allDay ? "The building" : "Some stalls"}</dt>
          <dd className="font-semibold text-sf-cream">{hours.allDay ? "Open 24 hours" : weeklyText(hours.few)}</dd>
        </div>
      </dl>
      {hours.note ? <p className="mt-3 text-sm text-sf-cream/85">{hours.note}</p> : null}
      {restDays ? (
        <p className="mt-3 text-sm leading-relaxed text-sf-muted">
          <span className="font-semibold text-sf-cream/90">Rest days: </span>
          {restDays.replace(/\s*The (whole )?(centre|market) (also )?(shuts|closes)[^.]*\.?/i, "").trim()}
        </p>
      ) : null}
      {!closed && closure.nextStartDate ? (
        <p className="mt-2 text-sm text-sf-muted">
          <span className="font-semibold text-sf-cream/90">Next cleaning closure: </span>
          {sameDay ? closure.nextStartDate : `${closure.nextStartDate} to ${closure.nextEndDate}`}
        </p>
      ) : null}
      <p className="mt-3 text-xs text-sf-muted">
        Typical hours. Every stall keeps its own and some sell out early.{" "}
        <a href="#when-to-go" className="font-semibold text-sf-primary underline underline-offset-4">
          Best time to go
        </a>
      </p>
    </section>
  );
}
