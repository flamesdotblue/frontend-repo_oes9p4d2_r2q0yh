import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('UxThemer • Project Inquiry');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@uxthemer.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let’s build something great</h2>
            <p className="mt-3 max-w-lg text-white/70">
              Tell us about your product goals. We’ll respond within one business day with next steps and a suggested path.
            </p>

            <div className="mt-8 space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-300" />
                hello@uxthemer.com
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-300" />
                +1 (555) 012‑3456
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-cyan-300" />
                Remote • Global
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-white/80">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-cyan-300/40 focus:border-white/20 focus:ring"
                  placeholder="Your full name"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-white/80">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-cyan-300/40 focus:border-white/20 focus:ring"
                  placeholder="you@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-white/80">How can we help?</label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-cyan-300/40 focus:border-white/20 focus:ring"
                  placeholder="Briefly describe your project and timeline"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              Send message
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,70,239,0.12),transparent_60%)]" />
    </section>
  );
};

export default Contact;
