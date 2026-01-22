'use client';

import Link from 'next/link';
import { contentV2 as content } from '@/lib/content-v2';

export default function SilkRoadV2() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f5f0e8] font-['Playfair_Display',Georgia,serif]">
      <style jsx>{`
        .grain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.02;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* Grain overlay */}
      <div className="grain"/>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-[#a08756]/10">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-[#a08756] hover:text-[#f5f0e8] transition-colors text-sm font-['Inter',sans-serif] tracking-widest uppercase">
            Return
          </Link>
          <span className="text-xs font-['Inter',sans-serif] tracking-[0.4em] uppercase text-[#666]">Silk Road V2</span>
        </div>
      </nav>

      {/* Hero - Clean Editorial */}
      <section className="min-h-[80vh] flex items-center pt-32 pb-20 px-8">
        <div className="max-w-5xl mx-auto w-full">
          <p className="text-[#a08756] text-sm font-['Inter',sans-serif] tracking-[0.4em] uppercase mb-8">
            Private Intelligence
          </p>

          <h1 className="text-6xl lg:text-8xl font-light leading-[0.95] mb-12 tracking-tight">
            {content.hero.headline}
          </h1>

          <p className="text-xl text-[#888] leading-relaxed mb-12 max-w-2xl font-light">
            {content.hero.subheadline}
          </p>

          <button className="bg-[#4a0d1a] text-[#f5f0e8] px-14 py-5 font-['Inter',sans-serif] text-sm tracking-[0.2em] uppercase hover:bg-[#6b1426] transition-colors">
            {content.hero.cta}
          </button>
        </div>
      </section>

      {/* Stats - Refined */}
      <section className="py-24 bg-[#4a0d1a]">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-[#a08756] text-sm font-['Inter',sans-serif] tracking-[0.4em] uppercase text-center mb-12">
            {content.statsHeadline}
          </p>

          <div className="grid md:grid-cols-3 divide-x divide-[#a08756]/20">
            {content.stats.map((stat, i) => (
              <div key={i} className="text-center py-8 px-4">
                <div className="text-5xl lg:text-7xl font-light text-[#a08756] mb-3">
                  {stat.number}
                </div>
                <div className="text-sm text-[#f5f0e8]/50 font-['Inter',sans-serif] tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-[#f5f0e8]/30 text-sm font-['Inter',sans-serif]">
            {content.statsFootnote}
          </p>
        </div>
      </section>

      {/* How It Works - Minimal Timeline */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#a08756] text-sm font-['Inter',sans-serif] tracking-[0.4em] uppercase mb-4">{content.howItWorks.headline}</p>
            <p className="text-[#666] font-light">{content.howItWorks.subheadline}</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#a08756] via-[#a08756]/50 to-transparent"/>

            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="relative pl-20 pb-16 last:pb-0 group">
                {/* Dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full border border-[#a08756] bg-[#0d0d0d] group-hover:bg-[#a08756] transition-colors"/>

                <span className="text-[#a08756]/40 text-sm font-['Inter',sans-serif] tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-2xl font-light mt-2 mb-3 group-hover:text-[#a08756] transition-colors">{step.title}</h3>
                <p className="text-[#888] font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Cards */}
      <section className="py-32 px-8 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#a08756] text-sm font-['Inter',sans-serif] tracking-[0.4em] uppercase mb-4">{content.solutions.headline}</p>
            <p className="text-[#666] font-light">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="bg-[#0d0d0d] p-10 border-l-2 border-[#a08756]/30 hover:border-[#a08756] transition-colors group">
                <span className="text-[#a08756]/30 text-4xl font-light">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-2xl font-light mt-4 mb-3 group-hover:text-[#a08756] transition-colors">{item.title}</h3>
                <p className="text-[#888] font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Simple List */}
      <section className="py-32 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#a08756] text-sm font-['Inter',sans-serif] tracking-[0.4em] uppercase mb-4">{content.comparison.headline}</p>
            <p className="text-[#666] font-light">{content.comparison.subheadline}</p>
          </div>

          {content.comparison.capabilities.map((cap, i) => (
            <div key={i} className="flex items-center gap-6 py-6 border-b border-[#222] group">
              <div className="w-8 h-8 rounded-full border border-[#a08756]/50 flex items-center justify-center shrink-0 group-hover:bg-[#a08756]/10 transition-colors">
                <svg className="w-4 h-4 text-[#a08756]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span className="font-light group-hover:text-[#a08756] transition-colors">{cap}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - Elegant Grid */}
      <section className="py-32 px-8 bg-[#4a0d1a]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#a08756] text-sm font-['Inter',sans-serif] tracking-[0.4em] uppercase text-center mb-16">
            Client Testimonials
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.testimonials.slice(0, 6).map((testimonial, i) => (
              <div key={i} className="bg-[#0d0d0d] p-8">
                <blockquote className="text-lg font-light italic leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t border-[#333] pt-4">
                  <div className="font-['Inter',sans-serif] text-sm">{testimonial.author}</div>
                  <div className="text-[#a08756] text-xs font-['Inter',sans-serif] tracking-wider mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Simple */}
      <section className="py-32 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">{content.cta.headline}</h2>
          <p className="text-[#888] text-lg mb-12 font-light">{content.cta.subheadline}</p>
          <button className="bg-[#4a0d1a] text-[#f5f0e8] px-16 py-5 font-['Inter',sans-serif] text-sm tracking-[0.2em] uppercase hover:bg-[#6b1426] transition-colors">
            {content.cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-[#222]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-[#666] text-sm font-['Inter',sans-serif]">DarkWebIQ &mdash; Silk Road V2</p>
          <span className="text-[#a08756]/50 text-xs font-['Inter',sans-serif] tracking-widest uppercase">Discretion Assured</span>
        </div>
      </footer>
    </div>
  );
}
