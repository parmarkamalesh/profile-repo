import { education } from "@/data/content";

export function Education() {
  return (
    <section id="education" className="border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label">Background</p>
        <h2 className="font-display mb-12 text-3xl font-bold text-white md:text-4xl">
          Education
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((entry) => (
            <div
              key={`${entry.school}-${entry.degree}`}
              className="rounded-xl border border-white/10 bg-ink-900/60 p-5 transition hover:border-brand-500/20 hover:bg-ink-900/80"
            >
              <h3 className="text-lg font-semibold text-white">
                {entry.school}
              </h3>
              <p className="mt-1 text-brand-400">{entry.degree}</p>
              {entry.period && (
                <p className="mt-2 text-sm text-zinc-500">{entry.period}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
