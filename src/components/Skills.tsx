import { skills } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label">Tech</p>
        <h2 className="font-display mb-12 text-3xl font-bold text-white md:text-4xl">
          Skills
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-ink-900/60 px-5 py-4 transition hover:border-brand-500/20 hover:bg-ink-900/80"
            >
              <span className="font-medium text-white">{skill.name}</span>
              <span className="text-sm font-medium text-brand-400">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
