import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] overflow-hidden">
      {/* Spline full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Gradient overlay to improve text contrast - non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f17]/40 via-[#0b0f17]/40 to-[#0b0f17]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
            <Rocket size={14} className="text-cyan-400" />
            UxThemer • Software Services
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Elevating product experiences with modern UX and engineering
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
            We design, prototype, and ship interactive software that feels fast, intuitive, and delightful across every screen size.
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
      </div>
    </section>
  );
};

export default Hero;
