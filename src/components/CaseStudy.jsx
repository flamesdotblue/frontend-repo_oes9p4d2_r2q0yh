import React, { useMemo } from 'react';

const PROJECTS = [
  {
    slug: 'growth-analytics-dashboard',
    title: 'Growth Analytics Dashboard',
    summary:
      'A data‑rich platform for marketing and product teams. Real‑time funnels, retention cohorts, and alerting to drive weekly growth rituals.',
    features: ['Live charts', 'Role-based access', 'Cohort analysis', 'Custom alerts'],
    palette: 'from-cyan-500/30 to-blue-500/30',
  },
  {
    slug: 'ai-support-console',
    title: 'AI Support Console',
    summary:
      'Operator tools for AI‑assisted support. Conversation routing, knowledge surfacing, and QA dashboards to improve resolution time.',
    features: ['Semantic search', 'Triage workflows', 'Analytics', 'Fine-tuning loops'],
    palette: 'from-fuchsia-500/30 to-cyan-500/30',
  },
  {
    slug: 'ecommerce-redesign',
    title: 'E‑commerce Redesign',
    summary:
      'A reimagined storefront focused on discovery speed and trust. Optimized PDPs, ultra‑fast filters, and polished checkout.',
    features: ['Lightning search', 'A/B testing', 'Headless CMS', 'Stripe checkout'],
    palette: 'from-amber-500/30 to-pink-500/30',
  },
  {
    slug: 'fintech-mobile-web',
    title: 'Fintech Mobile Web',
    summary:
      'A mobile‑first experience for a regulated product. Streamlined onboarding and high‑clarity financial flows.',
    features: ['KYC flows', 'Animations', 'Accessibility', 'Offline states'],
    palette: 'from-emerald-500/30 to-cyan-500/30',
  },
];

const CaseStudy = ({ slug }) => {
  const project = useMemo(() => PROJECTS.find((p) => p.slug === slug), [slug]);

  if (!project) return null;

  return (
    <section id="case-study" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{project.title}</h2>
          <a href="#portfolio" className="text-sm text-cyan-300 hover:text-cyan-200">← Back to all work</a>
        </div>
        <p className="max-w-3xl text-white/80">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.features.map((f) => (
            <span key={f} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              {f}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className={`h-48 w-full rounded-xl bg-gradient-to-tr ${project.palette}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,70,239,0.10),transparent_60%)]" />
    </section>
  );
};

export default CaseStudy;
