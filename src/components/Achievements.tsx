import {
  certifications,
  honorsAwards,
  publications,
} from "@/data/content";

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label">Beyond code</p>
        <h2 className="font-display mb-12 text-3xl font-bold text-white md:text-4xl">
          Achievements
        </h2>

        <div className="space-y-14">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-400">
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="rounded-xl border border-white/10 bg-ink-900/60 px-5 py-4 transition hover:border-brand-500/20 hover:bg-ink-900/80"
                >
                  <p className="font-medium text-white">{cert.name}</p>
                  {cert.issuer && (
                    <p className="mt-1 text-sm text-zinc-500">{cert.issuer}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-400">
              Honors & Awards
            </h3>
            <ul className="space-y-3">
              {honorsAwards.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-ink-900/60 px-5 py-4 font-medium text-white transition hover:border-brand-500/20 hover:bg-ink-900/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-400">
              Publications
            </h3>
            <ul className="space-y-3">
              {publications.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-ink-900/60 px-5 py-4 font-medium text-white transition hover:border-brand-500/20 hover:bg-ink-900/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
