import Link from "next/link";
import { about, site } from "@/data/content";

export function About() {
  return (
    <section id="about" className="border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label">Who I am</p>
        <h2 className="font-display mb-10 text-3xl font-bold text-white md:text-4xl">
          {about.headline}
        </h2>
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-zinc-400">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <p>
            {about.closing}{" "}
            <Link
              href={`mailto:${site.email}`}
              className="font-medium text-brand-400 underline decoration-brand-500/50 underline-offset-2 transition hover:text-brand-300 hover:decoration-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 focus-visible:rounded"
            >
              📩 {site.email}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
