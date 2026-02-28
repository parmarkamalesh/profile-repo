import { projects } from "@/data/content";

function ExternalIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 opacity-60 transition group-hover:opacity-100"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label">Work</p>
        <h2 className="font-display mb-12 text-3xl font-bold text-white md:text-4xl">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
              className="card-hover group flex flex-col rounded-xl border border-white/10 bg-ink-900/60 p-6 transition hover:border-brand-500/20 hover:bg-ink-900/80"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-brand-400">
                  {project.title}
                </h3>
                {project.external && <ExternalIcon />}
              </div>
              <p className="mt-2 mb-4 flex-1 text-sm text-zinc-500">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
