import Link from 'next/link';
import { content } from '@/lib/content';

export default function ArtDecoDetective() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5e6d3] font-['Playfair_Display',Georgia,serif]">
      {/* Decorative border frame */}
      <div className="fixed inset-4 border-2 border-[#d4af37]/30 pointer-events-none z-50">
        {/* Corner ornaments */}
        <svg className="absolute -top-px -left-px w-16 h-16" viewBox="0 0 64 64">
          <path d="M0 0 L64 0 L64 8 L8 8 L8 64 L0 64 Z" fill="#d4af37"/>
          <path d="M16 16 L48 16 L48 20 L20 20 L20 48 L16 48 Z" fill="#d4af37" opacity="0.5"/>
        </svg>
        <svg className="absolute -top-px -right-px w-16 h-16" viewBox="0 0 64 64">
          <path d="M64 0 L0 0 L0 8 L56 8 L56 64 L64 64 Z" fill="#d4af37"/>
          <path d="M48 16 L16 16 L16 20 L44 20 L44 48 L48 48 Z" fill="#d4af37" opacity="0.5"/>
        </svg>
        <svg className="absolute -bottom-px -left-px w-16 h-16" viewBox="0 0 64 64">
          <path d="M0 64 L64 64 L64 56 L8 56 L8 0 L0 0 Z" fill="#d4af37"/>
          <path d="M16 48 L48 48 L48 44 L20 44 L20 16 L16 16 Z" fill="#d4af37" opacity="0.5"/>
        </svg>
        <svg className="absolute -bottom-px -right-px w-16 h-16" viewBox="0 0 64 64">
          <path d="M64 64 L0 64 L0 56 L56 56 L56 0 L64 0 Z" fill="#d4af37"/>
          <path d="M48 48 L16 48 L16 44 L44 44 L44 16 L48 16 Z" fill="#d4af37" opacity="0.5"/>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-40 bg-[#1a1a1a] border-b border-[#d4af37]/30">
        <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-[#d4af37] hover:text-[#f5e6d3] transition-colors text-sm tracking-[0.2em] uppercase font-sans">
            ← All Themes
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#d4af37]"/>
            <span className="text-xs tracking-[0.4em] uppercase text-[#d4af37] font-sans">Est. 2024</span>
            <div className="w-8 h-px bg-[#d4af37]"/>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Sunburst background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg viewBox="0 0 800 800" className="w-full h-full max-w-4xl">
            {[...Array(24)].map((_, i) => (
              <line
                key={i}
                x1="400"
                y1="400"
                x2="400"
                y2="0"
                stroke="#d4af37"
                strokeWidth="2"
                transform={`rotate(${i * 15} 400 400)`}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-8 relative">
          {/* Decorative header line */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-[#d4af37]"/>
            <div className="w-4 h-4 border-2 border-[#d4af37] transform rotate-45"/>
            <span className="text-[#d4af37] text-sm tracking-[0.4em] uppercase font-sans">Private Investigations</span>
            <div className="w-4 h-4 border-2 border-[#d4af37] transform rotate-45"/>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#d4af37] to-[#d4af37]"/>
          </div>

          <h1 className="text-5xl lg:text-7xl text-center leading-tight mb-8 tracking-wide">
            {content.hero.headline}
          </h1>

          <p className="text-xl text-center text-[#f5e6d3]/70 leading-relaxed max-w-3xl mx-auto mb-12">
            {content.hero.subheadline}
          </p>

          <div className="flex justify-center">
            <button className="group relative px-12 py-5 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-all duration-300 tracking-[0.2em] uppercase text-sm font-sans">
              <span className="relative z-10">{content.hero.cta}</span>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4af37] -translate-x-1 -translate-y-1"/>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#d4af37] translate-x-1 -translate-y-1"/>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#d4af37] -translate-x-1 translate-y-1"/>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4af37] translate-x-1 translate-y-1"/>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#8b1538] relative overflow-hidden">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="deco-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="25" fill="none" stroke="#d4af37" strokeWidth="1"/>
                <circle cx="30" cy="30" r="15" fill="none" stroke="#d4af37" strokeWidth="1"/>
                <path d="M30 5 L30 55 M5 30 L55 30" stroke="#d4af37" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#deco-pattern)"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-8 relative">
          <div className="text-center mb-12">
            <span className="text-[#d4af37] text-sm tracking-[0.4em] uppercase font-sans">Case Files</span>
            <h2 className="text-3xl mt-4 text-[#f5e6d3]">{content.statsHeadline}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.stats.map((stat, i) => (
              <div key={i} className="text-center relative">
                {/* Decorative frame */}
                <div className="absolute inset-0 border border-[#d4af37]/30 transform -rotate-1"/>
                <div className="relative bg-[#1a1a1a] p-10 border border-[#d4af37]/50">
                  <div className="text-5xl lg:text-6xl text-[#d4af37] mb-4 tracking-tight">{stat.number}</div>
                  <div className="text-sm text-[#f5e6d3]/60 tracking-[0.2em] uppercase font-sans">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-[#f5e6d3]/40 font-sans">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-16 h-px bg-[#d4af37]"/>
              <div className="w-3 h-3 bg-[#d4af37] transform rotate-45"/>
              <div className="w-16 h-px bg-[#d4af37]"/>
            </div>
            <h2 className="text-4xl mb-4">{content.howItWorks.headline}</h2>
            <p className="text-[#f5e6d3]/60">{content.howItWorks.subheadline}</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#d4af37]/30 hidden lg:block"/>

            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className={`flex items-center gap-12 mb-12 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="relative inline-block">
                    <div className="absolute inset-0 border border-[#d4af37]/20 transform rotate-1"/>
                    <div className="relative bg-[#1a1a1a] border border-[#d4af37]/40 p-8">
                      <span className="text-[#d4af37] text-4xl font-light mb-4 block">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="text-2xl mb-3 text-[#f5e6d3]">{step.title}</h3>
                      <p className="text-[#f5e6d3]/60 font-sans text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Center diamond */}
                <div className="hidden lg:flex w-8 h-8 bg-[#d4af37] transform rotate-45 items-center justify-center z-10">
                  <span className="transform -rotate-45 text-[#1a1a1a] text-xs font-bold font-sans">{i + 1}</span>
                </div>

                <div className="flex-1 hidden lg:block"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Filing Cabinet Style */}
      <section className="py-24 bg-[#f5e6d3] text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#8b1538] text-sm tracking-[0.4em] uppercase font-sans">The Agency</span>
            <h2 className="text-4xl mt-4">{content.solutions.headline}</h2>
            <p className="text-[#1a1a1a]/60 mt-4">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="group relative bg-[#1a1a1a] text-[#f5e6d3] overflow-hidden">
                {/* Tab */}
                <div className="absolute top-0 right-8 bg-[#d4af37] text-[#1a1a1a] px-4 py-1 text-xs tracking-[0.2em] uppercase font-sans font-bold">
                  File {String(i + 1).padStart(2, '0')}
                </div>

                <div className="p-10 pt-12 border-2 border-[#d4af37]">
                  <h3 className="text-2xl mb-4">{item.title}</h3>
                  <p className="text-[#f5e6d3]/70 font-sans leading-relaxed">{item.description}</p>

                  {/* Decorative corner */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#d4af37]/30"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] text-sm tracking-[0.4em] uppercase font-sans">Our Methods</span>
            <h2 className="text-4xl mt-4">{content.comparison.headline}</h2>
            <p className="text-[#f5e6d3]/60 mt-4">{content.comparison.subheadline}</p>
          </div>

          <div className="border-2 border-[#d4af37]">
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className={`flex items-center gap-6 px-8 py-6 ${i !== content.comparison.capabilities.length - 1 ? 'border-b border-[#d4af37]/30' : ''}`}>
                <div className="w-6 h-6 bg-[#d4af37] transform rotate-45 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#1a1a1a] transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-sans">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#8b1538]/20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] text-sm tracking-[0.4em] uppercase font-sans">Testimonials</span>
            <h2 className="text-4xl mt-4">What The Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.testimonials.slice(0, 4).map((testimonial, i) => (
              <div key={i} className="relative">
                {/* Decorative quote mark */}
                <div className="absolute -top-4 left-8 text-8xl text-[#d4af37] opacity-30 font-serif leading-none">&ldquo;</div>

                <div className="bg-[#1a1a1a] border border-[#d4af37]/40 p-10 pt-12 relative">
                  <p className="text-xl italic leading-relaxed mb-6 text-[#f5e6d3]/90">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-[#d4af37]"/>
                    <div>
                      <div className="text-[#d4af37] font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-[#f5e6d3]/60 font-sans">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* Sunburst background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg viewBox="0 0 800 800" className="w-full h-full">
            {[...Array(36)].map((_, i) => (
              <line
                key={i}
                x1="400"
                y1="400"
                x2="400"
                y2="0"
                stroke="#d4af37"
                strokeWidth="3"
                transform={`rotate(${i * 10} 400 400)`}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-8 text-center relative">
          <div className="border-2 border-[#d4af37] p-16 relative">
            {/* Art deco corner accents */}
            <div className="absolute top-4 left-4 w-12 h-12">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-[#d4af37]"/>
              <div className="absolute top-0 left-0 w-0.5 h-full bg-[#d4af37]"/>
              <div className="absolute top-2 left-2 w-8 h-0.5 bg-[#d4af37]/50"/>
              <div className="absolute top-2 left-2 w-0.5 h-8 bg-[#d4af37]/50"/>
            </div>
            <div className="absolute top-4 right-4 w-12 h-12">
              <div className="absolute top-0 right-0 w-full h-0.5 bg-[#d4af37]"/>
              <div className="absolute top-0 right-0 w-0.5 h-full bg-[#d4af37]"/>
              <div className="absolute top-2 right-2 w-8 h-0.5 bg-[#d4af37]/50"/>
              <div className="absolute top-2 right-2 w-0.5 h-8 bg-[#d4af37]/50"/>
            </div>
            <div className="absolute bottom-4 left-4 w-12 h-12">
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4af37]"/>
              <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[#d4af37]"/>
              <div className="absolute bottom-2 left-2 w-8 h-0.5 bg-[#d4af37]/50"/>
              <div className="absolute bottom-2 left-2 w-0.5 h-8 bg-[#d4af37]/50"/>
            </div>
            <div className="absolute bottom-4 right-4 w-12 h-12">
              <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#d4af37]"/>
              <div className="absolute bottom-0 right-0 w-0.5 h-full bg-[#d4af37]"/>
              <div className="absolute bottom-2 right-2 w-8 h-0.5 bg-[#d4af37]/50"/>
              <div className="absolute bottom-2 right-2 w-0.5 h-8 bg-[#d4af37]/50"/>
            </div>

            <h2 className="text-4xl lg:text-5xl mb-6">{content.cta.headline}</h2>
            <p className="text-xl text-[#f5e6d3]/70 mb-10 max-w-2xl mx-auto font-sans">{content.cta.subheadline}</p>

            <button className="bg-[#d4af37] text-[#1a1a1a] px-16 py-5 tracking-[0.2em] uppercase text-sm font-bold font-sans hover:bg-[#f5e6d3] transition-colors">
              {content.cta.button}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#d4af37]/30">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center text-sm font-sans text-[#f5e6d3]/60">
          <p>DarkWebIQ — Art Deco Detective Theme Preview</p>
          <p>A Dame Walked In...</p>
        </div>
      </footer>
    </div>
  );
}
