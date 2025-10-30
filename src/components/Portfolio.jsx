import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Growth Analytics Dashboard',
    desc: 'End-to-end product UX with real-time charts and role-based access.',
    tags: ['React', 'Tailwind', 'FastAPI'],
  },
  {
    title: 'AI Support Console',
    desc: 'Conversational triage, knowledge surfacing, and ops tooling.',
    tags: ['Next.js', 'Vector DB', 'OpenAI'],
  },
  {
    title: 'E‑commerce Redesign',
    desc: 'Modern storefront with blazing-fast product discovery.',
    tags: ['Vite', 'Headless UI', 'Stripe'],
  },
  {
    title: 'Fintech Mobile Web',
    desc: 'High-trust flows with delightful micro-interactions.',
    tags: ['React', 'Framer Motion', 'Auth'],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Selected Work</h2>
            <p className="mt-3 text-white/70">A few recent projects that showcase our approach.</p>
          </div>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10 sm:inline-flex"
          >
            Start a Project
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06] p-5 transition hover:border-white/20"
            >
              <div className="h-40 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-fuchsia-500/15 to-amber-500/15" />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
                  View case study
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute -inset-10 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-amber-500/10 blur-2xl" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
