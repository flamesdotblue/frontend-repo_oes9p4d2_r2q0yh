import React from 'react';

const screenshots = [
  { title: 'Dashboard Overview', color: 'from-cyan-500/30 to-blue-500/30' },
  { title: 'User Insights', color: 'from-fuchsia-500/30 to-cyan-500/30' },
  { title: 'Billing & Plans', color: 'from-amber-500/30 to-pink-500/30' },
  { title: 'Automation Rules', color: 'from-emerald-500/30 to-cyan-500/30' },
  { title: 'Reports', color: 'from-indigo-500/30 to-sky-500/30' },
  { title: 'Integrations', color: 'from-rose-500/30 to-violet-500/30' },
];

const Showcase = () => {
  return (
    <section id="showcase" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Product Screenshots</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              A peek at the interfaces we design and build — crisp, accessible, and performance‑minded.
            </p>
          </div>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
          >
            Explore case studies
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((s, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <div className={`h-48 w-full rounded-xl bg-gradient-to-tr ${s.color}`} />
              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm font-medium text-white">{s.title}</p>
                <span className="text-xs text-white/60">1080p</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
    </section>
  );
};

export default Showcase;
