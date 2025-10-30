import React, { useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CaseStudy from './components/CaseStudy';

const parseHash = () => {
  const hash = window.location.hash || '';
  const match = hash.match(/^#case-study\/(.+)$/);
  return match ? decodeURIComponent(match[1]) : null;
};

const App = () => {
  const [caseSlug, setCaseSlug] = useState(parseHash());

  useEffect(() => {
    const onHashChange = () => setCaseSlug(parseHash());
    window.addEventListener('hashchange', onHashChange);
    // Initialize on mount to handle direct links
    onHashChange();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const isCaseStudy = useMemo(() => !!caseSlug, [caseSlug]);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f17]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-cyan-400 to-fuchsia-500" />
            <span className="text-sm font-semibold tracking-wide">UxThemer</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#portfolio" className="hover:text-white">Work</a>
            <a href="#showcase" className="hover:text-white">Screenshots</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-lg bg-cyan-500 px-4 py-2 text-xs font-medium text-white shadow shadow-cyan-500/30 transition hover:bg-cyan-400 sm:block"
          >
            Book a Demo
          </a>
        </div>
      </header>

      <main>
        <Hero />
        {isCaseStudy && <CaseStudy slug={caseSlug} />}
        <Portfolio />
        <Showcase />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} UxThemer. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <a href="#portfolio" className="hover:text-white">Portfolio</a>
              <a href="#showcase" className="hover:text-white">Screenshots</a>
              <a href="#testimonials" className="hover:text-white">Testimonials</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
