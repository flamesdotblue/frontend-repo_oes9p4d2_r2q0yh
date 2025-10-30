import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'UxThemer elevated our product from functional to delightful. Engagement is up 42% and onboarding time dropped by half.',
    author: 'Ava Thompson',
    role: 'VP Product, Nimbus AI',
  },
  {
    quote:
      'The team shipped fast without compromising craft. Our new console feels premium and the metrics prove it.',
    author: 'Jordan Park',
    role: 'CTO, RelayOps',
  },
  {
    quote:
      'They owned the UX end-to-end. Strategy, prototyping, and production-ready code—seamless collaboration throughout.',
    author: 'Maya Chen',
    role: 'Founder, Finch Finance',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">What clients say</h2>
        <p className="mt-3 text-white/70">Outcomes over output. Measurable impact on shipping velocity and UX quality.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur-sm"
            >
              <div className="mb-3 flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-sm leading-6 text-white/90">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-white">
                {t.author}
                <span className="ml-2 font-normal text-white/60">• {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.10),transparent_60%)]" />
    </section>
  );
};

export default Testimonials;
