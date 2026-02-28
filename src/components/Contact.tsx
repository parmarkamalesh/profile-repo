import Link from "next/link";
import { site } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="section-label">Let&apos;s connect</p>
        <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-4xl">
          Get in touch
        </h2>
        <p className="mb-10 max-w-md mx-auto text-zinc-400">
          Open to new opportunities and conversations.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-base font-medium text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-400 hover:shadow-brand-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
          >
            {site.email}
            <span className="transition group-hover:translate-x-0.5">→</span>
          </a>
          {site.linkedin && (
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-600 px-8 py-4 text-base font-medium text-zinc-300 transition hover:border-brand-500/50 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              LinkedIn
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
