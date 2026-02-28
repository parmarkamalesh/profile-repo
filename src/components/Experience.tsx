import { experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label">Career</p>
        <h2 className="font-display mb-12 text-3xl font-bold text-white md:text-4xl">
          Experience
        </h2>
        <div className="space-y-0">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.start}`}
              className="group border-l-2 border-white/10 pl-6 pb-10 last:pb-0 relative"
            >
              <span
                className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-[5px] rounded-full bg-brand-500 shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                aria-hidden
              />
              <div className="rounded-xl border border-white/10 bg-ink-900/60 p-6 transition hover:border-brand-500/20 hover:bg-ink-900/80">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {job.role}
                  </h3>
                  <span className="text-sm font-medium text-brand-400">
                    {job.duration}
                  </span>
                </div>
                <p className="mt-1 text-brand-400">{job.company}</p>
                <p className="mt-2 text-sm text-zinc-500">
                  {job.start} — {job.end}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{job.location}</p>
                {"description" in job && job.description && (
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    {job.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
