'use client';

import Link from 'next/link';
import { content } from '@/lib/content';

export default function SilkRoad() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5f0e8] font-['Playfair_Display',Georgia,serif]">
      <style jsx>{`
        .grain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        .deco-line {
          background: linear-gradient(90deg, transparent, #a08756, transparent);
        }
      `}</style>

      {/* Grain overlay */}
      <div className="grain"/>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#a08756]/20">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-[#a08756] hover:text-[#f5f0e8] transition-colors text-sm font-['Inter',sans-serif] tracking-widest uppercase">
            Return
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#a08756]/50"/>
            <span className="text-xs font-['Inter',sans-serif] tracking-[0.4em] uppercase text-[#a08756]">Silk Road</span>
            <div className="w-8 h-px bg-[#a08756]/50"/>
          </div>
        </div>
      </nav>

      {/* Hero - Editorial Magazine */}
      <section className="min-h-screen flex items-center pt-24 pb-20 px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              {/* Decorative top element */}
              <div className="flex items-center gap-6 mb-12">
                <div className="w-12 h-12 border border-[#a08756] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#a08756]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 2L14.09 8.26L21 9.27L16 13.97L17.18 21L12 17.77L6.82 21L8 13.97L3 9.27L9.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#a08756]/50 to-transparent"/>
              </div>

              <p className="text-[#a08756] text-sm font-['Inter',sans-serif] tracking-[0.4em] uppercase mb-6">
                Private Intelligence
              </p>

              <h1 className="text-5xl lg:text-7xl font-light leading-[1.1] mb-10 tracking-tight">
                {content.hero.headline}
              </h1>

              <p className="text-xl text-[#999] leading-relaxed mb-12 max-w-xl font-light">
                {content.hero.subheadline}
              </p>

              <button className="group relative">
                <span className="relative z-10 block bg-[#4a0d1a] text-[#f5f0e8] px-12 py-5 font-['Inter',sans-serif] text-sm tracking-[0.2em] uppercase hover:bg-[#6b1426] transition-colors">
                  {content.hero.cta}
                </span>
                <span className="absolute inset-0 border border-[#a08756] translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"/>
              </button>
            </div>

            {/* Decorative side element */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative aspect-[3/4] border border-[#a08756]/30 p-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-48 h-48 text-[#a08756]/10" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5"/>
                    <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5"/>
                  </svg>
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-[#666] text-xs font-['Inter',sans-serif] tracking-widest uppercase">
                  Est. MMXXIV
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Luxurious Display */}
      <section className="py-32 bg-[#4a0d1a] relative overflow-hidden">
        {/* Art deco corner elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#a08756]/30"/>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#a08756]/30"/>

        <div className="max-w-6xl mx-auto px-8 relative">
          <div className="text-center mb-16">
            <p className="text-[#a08756] text-sm font-['Inter',sans-serif] tracking-[0.4em] uppercase mb-4">Proven Results</p>
            <h2 className="text-3xl font-light">{content.statsHeadline}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            {content.stats.map((stat, i) => (
              <div key={i} className={`text-center py-12 ${i === 1 ? 'border-x border-[#a08756]/20' : ''}`}>
                <div className="text-6xl lg:text-7xl font-light text-[#a08756] mb-4 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-sm text-[#f5f0e8]/60 font-['Inter',sans-serif] tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 text-[#f5f0e8]/40 text-sm font-['Inter',sans-serif]">
            {content.statsFootnote}
          </div>
        </div>
      </section>

      {/* How It Works - Elegant Steps */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px deco-line"/>
              <p className="text-[#a08756] text-sm font-['Inter',sans-serif] tracking-[0.4em] uppercase">The Process</p>
              <div className="w-24 h-px deco-line"/>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light">{content.howItWorks.headline}</h2>
            <p className="text-[#888] mt-4 font-light">{content.howItWorks.subheadline}</p>
          </div>

          <div className="space-y-0">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="grid lg:grid-cols-12 gap-8 py-12 border-b border-[#333] group hover:bg-[#222]/30 transition-colors">
                <div className="lg:col-span-1">
                  <span className="text-5xl font-light text-[#a08756]/30 group-hover:text-[#a08756]/50 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="lg:col-span-3 flex items-center">
                  <h3 className="text-2xl font-light group-hover:text-[#a08756] transition-colors">{step.title}</h3>
                </div>
                <div className="lg:col-span-8 flex items-center">
                  <p className="text-[#888] font-light leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Dossier Cards */}
      <section className="py-32 px-8 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-[#a08756] text-sm font-['Inter',sans-serif] tracking-[0.4em] uppercase mb-4">Our Services</p>
            <h2 className="text-4xl lg:text-5xl font-light">{content.solutions.headline}</h2>
            <p className="text-[#888] mt-4 font-light">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="relative group">
                {/* Wax seal decoration */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#4a0d1a] flex items-center justify-center z-10 border-4 border-[#1a1a1a]">
                  <span className="text-[#a08756] text-xl font-light">{String(i + 1).padStart(2, '0')}</span>
                </div>

                <div className="bg-[#1a1a1a] border border-[#333] p-10 h-full group-hover:border-[#a08756]/50 transition-colors">
                  <h3 className="text-2xl font-light mb-4 pr-12">{item.title}</h3>
                  <p className="text-[#888] font-light leading-relaxed mb-8">{item.description}</p>

                  <div className="flex items-center gap-4 text-[#a08756] text-sm font-['Inter',sans-serif] tracking-wider uppercase group-hover:gap-6 transition-all">
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Distinguished List */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px deco-line"/>
              <p className="text-[#a08756] text-sm font-['Inter',sans-serif] tracking-[0.4em] uppercase">Distinction</p>
              <div className="w-24 h-px deco-line"/>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light">{content.comparison.headline}</h2>
            <p className="text-[#888] mt-4 font-light">{content.comparison.subheadline}</p>
          </div>

          <div className="border border-[#333]">
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className={`flex items-center gap-6 px-8 py-6 ${i !== content.comparison.capabilities.length - 1 ? 'border-b border-[#333]' : ''} group hover:bg-[#222]/30 transition-colors`}>
                <div className="w-10 h-10 rounded-full border border-[#a08756]/50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#a08756]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-lg font-light group-hover:text-[#a08756] transition-colors">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Elegant Quotes */}
      <section className="py-32 px-8 bg-[#4a0d1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#a08756] text-sm font-['Inter',sans-serif] tracking-[0.4em] uppercase mb-4">Testimonials</p>
            <h2 className="text-4xl lg:text-5xl font-light">Words of Confidence</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.testimonials.slice(0, 4).map((testimonial, i) => (
              <div key={i} className="relative">
                {/* Large quote mark */}
                <div className="absolute -top-8 left-8 text-[#a08756]/20 text-9xl font-serif leading-none">&ldquo;</div>

                <div className="bg-[#1a1a1a] p-10 relative">
                  <blockquote className="text-xl font-light italic leading-relaxed mb-8 relative z-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-px h-12 bg-[#a08756]"/>
                    <div>
                      <div className="font-semibold font-['Inter',sans-serif]">{testimonial.author}</div>
                      <div className="text-[#a08756] text-sm font-['Inter',sans-serif] tracking-wider mt-1">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Framed Elegance */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-16 text-center">
            {/* Ornate frame */}
            <div className="absolute inset-0 border border-[#a08756]/30"/>
            <div className="absolute inset-4 border border-[#333]"/>

            {/* Corner ornaments */}
            <svg className="absolute top-8 left-8 w-12 h-12 text-[#a08756]/50" viewBox="0 0 48 48">
              <path d="M0 12 L0 0 L12 0" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M0 12 L12 12 L12 0" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
            <svg className="absolute top-8 right-8 w-12 h-12 text-[#a08756]/50" viewBox="0 0 48 48">
              <path d="M48 12 L48 0 L36 0" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M48 12 L36 12 L36 0" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
            <svg className="absolute bottom-8 left-8 w-12 h-12 text-[#a08756]/50" viewBox="0 0 48 48">
              <path d="M0 36 L0 48 L12 48" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M0 36 L12 36 L12 48" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
            <svg className="absolute bottom-8 right-8 w-12 h-12 text-[#a08756]/50" viewBox="0 0 48 48">
              <path d="M48 36 L48 48 L36 48" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M48 36 L36 36 L36 48" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>

            <h2 className="text-4xl lg:text-5xl font-light mb-6 relative">{content.cta.headline}</h2>
            <p className="text-[#888] text-lg mb-12 max-w-2xl mx-auto font-light relative">{content.cta.subheadline}</p>

            <button className="bg-[#4a0d1a] text-[#f5f0e8] px-16 py-5 font-['Inter',sans-serif] text-sm tracking-[0.2em] uppercase hover:bg-[#6b1426] transition-colors relative">
              {content.cta.button}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-[#333]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#666] text-sm font-['Inter',sans-serif]">DarkWebIQ &mdash; Silk Road Theme</p>
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#a08756]/50"/>
            <span className="text-[#a08756] text-xs font-['Inter',sans-serif] tracking-[0.3em] uppercase">Discretion Assured</span>
            <div className="w-8 h-px bg-[#a08756]/50"/>
          </div>
        </div>
      </footer>
    </div>
  );
}
