import Link from "next/link";
import { site } from "@/data/content";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20"
    >
      <div className="hero-glow" aria-hidden />
      <div className="relative mx-auto max-w-3xl text-center">
        <p
          className="section-label mb-4 animate-fade-in opacity-0"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          Hello, I&apos;m
        </p>
        <h1
          className="font-display mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl animate-slide-up opacity-0"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <span className="gradient-text">{site.name}</span>
        </h1>
        <p
          className="mb-10 text-lg text-zinc-400 sm:text-xl animate-slide-up opacity-0"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          {site.tagline}
        </p>
        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-slide-up opacity-0"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-400 hover:shadow-brand-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
          >
            View projects
            <span className="transition group-hover:translate-x-0.5">→</span>
          </Link>
          <Link
            href="#contact"
            className="rounded-xl border border-zinc-600 px-6 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-brand-500/50 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
          >
            Get in touch
          </Link>
        </div>
        <div
          className="mt-20 flex justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          aria-hidden
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-zinc-500 transition hover:text-brand-400"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <span className="block h-8 w-5 rounded-full border-2 border-current pt-1.5">
              <span className="mx-auto block h-1.5 w-1 rounded-full bg-current animate-float" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
