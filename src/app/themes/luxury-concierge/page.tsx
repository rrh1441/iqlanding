import Link from 'next/link';
import { content } from '@/lib/content';

export default function LuxuryConcierge() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#2d2d2d] font-['Cormorant_Garamond',Georgia,serif]">
      {/* Navigation */}
      <nav className="bg-[#2d2d2d] text-[#f8f5f0]">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-[#c9a962] hover:text-[#f8f5f0] transition-colors text-sm tracking-widest uppercase font-sans font-medium">
            ← All Themes
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-px h-6 bg-[#c9a962]/30"/>
            <span className="text-sm tracking-[0.3em] uppercase font-sans text-[#c9a962]">Luxury Concierge</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Premium & Elegant */}
      <section className="py-24 lg:py-32 relative">
        {/* Subtle marble texture suggestion */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q15 25 30 30 T60 30 M0 60 Q15 55 30 60' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`
        }}/>

        <div className="max-w-6xl mx-auto px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            {/* Decorative element */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-[#c9a962]"/>
              <svg className="w-6 h-6 text-[#c9a962]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.09 8.26L21 9.27L16 13.97L17.18 21L12 17.77L6.82 21L8 13.97L3 9.27L9.91 8.26L12 2Z"/>
              </svg>
              <div className="w-16 h-px bg-[#c9a962]"/>
            </div>

            <p className="text-[#c9a962] text-sm tracking-[0.4em] uppercase font-sans mb-6">
              White-Glove Cyber Protection
            </p>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8 tracking-wide">
              {content.hero.headline}
            </h1>
            <p className="text-xl text-[#666] leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              {content.hero.subheadline}
            </p>
            <button className="group relative px-12 py-5 bg-[#1a472a] text-[#f8f5f0] tracking-[0.2em] uppercase text-sm font-sans font-medium hover:bg-[#143d23] transition-colors">
              {content.hero.cta}
              <span className="absolute inset-0 border border-[#c9a962] transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"/>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section - Refined */}
      <section className="py-20 bg-[#2d2d2d] text-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm tracking-[0.4em] uppercase font-sans">Proven Excellence</p>
            <h2 className="text-3xl font-light mt-4">{content.statsHeadline}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#c9a962]/20">
            {content.stats.map((stat, i) => (
              <div key={i} className="bg-[#2d2d2d] p-12 text-center">
                <div className="text-5xl font-light text-[#c9a962] mb-4 tracking-tight">{stat.number}</div>
                <div className="text-sm text-[#f8f5f0]/60 tracking-wider font-sans">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-[#f8f5f0]/40 font-sans">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works - Elegant Steps */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <p className="text-[#c9a962] text-sm tracking-[0.4em] uppercase font-sans">Our Approach</p>
            <h2 className="text-4xl font-light mt-4">{content.howItWorks.headline}</h2>
            <p className="text-[#666] mt-4 max-w-2xl mx-auto font-light">{content.howItWorks.subheadline}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex gap-12 mb-16 items-start">
                <div className="flex-shrink-0 text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#c9a962] flex items-center justify-center">
                    <span className="text-2xl font-light text-[#c9a962]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  {i < content.howItWorks.steps.length - 1 && (
                    <div className="w-px h-16 bg-[#c9a962]/30 mx-auto mt-4"/>
                  )}
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-2xl font-light mb-3">{step.title}</h3>
                  <p className="text-[#666] leading-relaxed font-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Premium Cards */}
      <section className="py-24 bg-[#1a472a] text-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <p className="text-[#c9a962] text-sm tracking-[0.4em] uppercase font-sans">Bespoke Services</p>
            <h2 className="text-4xl font-light mt-4">{content.solutions.headline}</h2>
            <p className="text-[#f8f5f0]/60 mt-4 font-light">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="bg-[#f8f5f0] text-[#2d2d2d] p-10 relative group">
                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20">
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    <path d="M80 0 L80 80 L0 0 Z" fill="#c9a962"/>
                  </svg>
                </div>

                <div className="relative">
                  <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase font-sans">Service {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-2xl font-light mt-4 mb-4">{item.title}</h3>
                  <p className="text-[#666] leading-relaxed font-light">{item.description}</p>

                  <button className="mt-8 text-[#1a472a] font-sans text-sm tracking-wider uppercase inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    Enquire
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Distinguished List */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm tracking-[0.4em] uppercase font-sans">Distinction</p>
            <h2 className="text-4xl font-light mt-4">{content.comparison.headline}</h2>
            <p className="text-[#666] mt-4 font-light">{content.comparison.subheadline}</p>
          </div>

          <div className="border border-[#2d2d2d]/10">
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className={`flex items-center gap-6 px-8 py-6 ${i !== content.comparison.capabilities.length - 1 ? 'border-b border-[#2d2d2d]/10' : ''}`}>
                <div className="w-10 h-10 rounded-full border border-[#c9a962] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#c9a962]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-light text-lg">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Refined Quotes */}
      <section className="py-24 bg-[#2d2d2d] text-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm tracking-[0.4em] uppercase font-sans">Client Testimonials</p>
            <h2 className="text-4xl font-light mt-4">Words of Confidence</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.testimonials.slice(0, 4).map((testimonial, i) => (
              <div key={i} className="relative">
                {/* Decorative quote */}
                <div className="absolute -top-6 left-8 text-[#c9a962] text-8xl font-serif opacity-30">&ldquo;</div>

                <div className="bg-[#f8f5f0] text-[#2d2d2d] p-10 relative">
                  <p className="text-xl font-light italic leading-relaxed mb-8 relative z-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-px h-12 bg-[#c9a962]"/>
                    <div>
                      <div className="font-semibold text-[#2d2d2d]">{testimonial.author}</div>
                      <div className="text-sm text-[#c9a962] font-sans tracking-wider">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Understated Elegance */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center relative">
            {/* Decorative frame */}
            <div className="absolute inset-0 border border-[#c9a962]/30 transform scale-95"/>
            <div className="absolute inset-0 border border-[#2d2d2d]"/>

            <div className="p-16 relative">
              {/* Corner ornaments */}
              <svg className="absolute top-4 left-4 w-8 h-8 text-[#c9a962]" viewBox="0 0 32 32">
                <path d="M0 8 L0 0 L8 0 M0 8 L8 8 L8 0" fill="none" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <svg className="absolute top-4 right-4 w-8 h-8 text-[#c9a962]" viewBox="0 0 32 32">
                <path d="M32 8 L32 0 L24 0 M32 8 L24 8 L24 0" fill="none" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <svg className="absolute bottom-4 left-4 w-8 h-8 text-[#c9a962]" viewBox="0 0 32 32">
                <path d="M0 24 L0 32 L8 32 M0 24 L8 24 L8 32" fill="none" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <svg className="absolute bottom-4 right-4 w-8 h-8 text-[#c9a962]" viewBox="0 0 32 32">
                <path d="M32 24 L32 32 L24 32 M32 24 L24 24 L24 32" fill="none" stroke="currentColor" strokeWidth="1"/>
              </svg>

              <h2 className="text-4xl lg:text-5xl font-light mb-6">{content.cta.headline}</h2>
              <p className="text-xl text-[#666] mb-12 max-w-2xl mx-auto font-light">{content.cta.subheadline}</p>

              <button className="bg-[#2d2d2d] text-[#f8f5f0] px-16 py-5 tracking-[0.2em] uppercase text-sm font-sans hover:bg-[#1a472a] transition-colors">
                {content.cta.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#2d2d2d] text-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#f8f5f0]/60 text-sm font-sans">DarkWebIQ — Luxury Concierge Theme Preview</p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#c9a962]"/>
              <span className="text-[#c9a962] text-sm tracking-widest font-sans uppercase">Est. MMXXIV</span>
              <div className="w-8 h-px bg-[#c9a962]"/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
