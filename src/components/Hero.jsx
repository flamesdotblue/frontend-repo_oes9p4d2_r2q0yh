import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
              <Rocket size={14} className="text-cyan-400" />
              UxThemer • Software Services
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Crafting delightful, high‑performance product experiences
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              We combine UX strategy, interaction design, and engineering to ship modern, scalable interfaces that users love.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                View Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Book a Demo
              </a>
            </div>
          </div>

          {/* Spline Scene */}
          <div className="relative h-[420px] w-full sm:h-[500px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5">
              <Spline
                scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {/* Decorative gradient */}
            <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-fuchsia-500/10 to-amber-500/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
