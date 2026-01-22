import Link from 'next/link';
import { content } from '@/lib/content';

export default function IntelligenceDossier() {
  return (
    <div className="min-h-screen bg-[#f8f6f1] text-[#1a1a2e] font-['Georgia','Times_New_Roman',serif]">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}/>

      {/* Navigation */}
      <nav className="border-b-2 border-[#1a1a2e] bg-[#f8f6f1] relative z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#c41e3a] hover:underline text-sm font-sans">
            ← All Themes
          </Link>
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#666]">Intelligence Dossier</span>
        </div>
      </nav>

      {/* Classification Header */}
      <div className="bg-[#1a1a2e] text-[#f8f6f1] py-2">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-xs font-sans tracking-wider">
          <span>CLASSIFICATION: <span className="text-[#c41e3a]">TOP SECRET</span> // NOFORN</span>
          <span>DOC ID: DWIQ-2024-001</span>
        </div>
      </div>

      {/* Hero Section - Dossier Cover */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-4 border-[#1a1a2e] p-12 lg:p-20 relative bg-[#f8f6f1]">
            {/* Stamp marks */}
            <div className="absolute top-8 right-8 transform rotate-12">
              <div className="border-4 border-[#c41e3a] text-[#c41e3a] px-6 py-2 font-bold text-xl tracking-wider font-sans uppercase">
                CLASSIFIED
              </div>
            </div>

            <div className="max-w-3xl">
              <div className="text-[#c41e3a] text-sm font-sans tracking-[0.3em] uppercase mb-6 border-b border-[#1a1a2e] pb-4 inline-block">
                Executive Summary
              </div>
              <h1 className="text-5xl lg:text-6xl leading-tight mb-8 font-normal">
                {content.hero.headline}
              </h1>
              <p className="text-xl leading-relaxed text-[#444] mb-10 border-l-4 border-[#c41e3a] pl-6">
                {content.hero.subheadline}
              </p>

              <button className="group font-sans bg-[#1a1a2e] text-[#f8f6f1] px-8 py-4 tracking-wider uppercase text-sm hover:bg-[#c41e3a] transition-colors inline-flex items-center gap-4">
                {content.hero.cta}
                <span className="w-8 h-px bg-current group-hover:w-12 transition-all"/>
              </button>
            </div>

            {/* Corner fold effect */}
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#d4d0c7] to-transparent"/>
          </div>
        </div>
      </section>

      {/* Stats - Evidence File */}
      <section className="py-20 bg-[#1a1a2e] text-[#f8f6f1]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[#d4af37] text-sm font-sans tracking-[0.3em] uppercase">Exhibit A</span>
            <div className="flex-1 h-px bg-[#d4af37]/30"/>
          </div>

          <h2 className="text-3xl mb-12">{content.statsHeadline}</h2>

          <div className="grid md:grid-cols-3 gap-1 bg-[#f8f6f1]/10">
            {content.stats.map((stat, i) => (
              <div key={i} className="bg-[#1a1a2e] p-10 border border-[#f8f6f1]/10">
                <div className="text-xs font-sans text-[#d4af37] tracking-widest mb-4">
                  FIGURE {i + 1}.{i + 1}
                </div>
                <div className="text-5xl font-light text-[#d4af37] mb-2">{stat.number}</div>
                <div className="text-sm text-[#f8f6f1]/60 font-sans">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#f8f6f1]/40 font-sans">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works - Briefing Document */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#c41e3a] text-sm font-sans tracking-[0.3em] uppercase">Section II</span>
            <div className="flex-1 h-px bg-[#1a1a2e]/20"/>
          </div>

          <h2 className="text-4xl mb-4">{content.howItWorks.headline}</h2>
          <p className="text-lg text-[#666] mb-16 max-w-2xl">{content.howItWorks.subheadline}</p>

          <div className="space-y-8">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex gap-8 border-b border-[#1a1a2e]/10 pb-8">
                <div className="flex-shrink-0 w-20">
                  <div className="text-4xl font-light text-[#c41e3a]">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-3 font-semibold">{step.title}</h3>
                  <p className="text-[#666] leading-relaxed">{step.description}</p>
                </div>
                <div className="hidden lg:block w-32 text-right">
                  <span className="text-xs font-sans text-[#999] tracking-wider">REF: {i + 1}.{i + 1}.{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Case Files */}
      <section className="py-20 bg-[#eae6db]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#c41e3a] text-sm font-sans tracking-[0.3em] uppercase">Section III</span>
            <div className="flex-1 h-px bg-[#1a1a2e]/20"/>
          </div>

          <h2 className="text-4xl mb-4">{content.solutions.headline}</h2>
          <p className="text-lg text-[#666] mb-16">{content.solutions.subheadline}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="bg-[#f8f6f1] border-2 border-[#1a1a2e] p-8 relative group hover:border-[#c41e3a] transition-colors">
                {/* Tab */}
                <div className="absolute -top-4 left-6 bg-[#1a1a2e] text-[#f8f6f1] px-4 py-1 text-xs font-sans tracking-wider group-hover:bg-[#c41e3a] transition-colors">
                  CASE FILE {String(i + 1).padStart(3, '0')}
                </div>

                <h3 className="text-2xl mb-4 mt-2">{item.title}</h3>
                <p className="text-[#666] leading-relaxed">{item.description}</p>

                {/* Redacted text decoration */}
                <div className="mt-6 space-y-2">
                  <div className="h-3 w-3/4 bg-[#1a1a2e]/10"/>
                  <div className="h-3 w-1/2 bg-[#1a1a2e]/10"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Assessment Table */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#c41e3a] text-sm font-sans tracking-[0.3em] uppercase">Section IV</span>
            <div className="flex-1 h-px bg-[#1a1a2e]/20"/>
          </div>

          <h2 className="text-4xl mb-4">{content.comparison.headline}</h2>
          <p className="text-lg text-[#666] mb-12">{content.comparison.subheadline}</p>

          <div className="border-2 border-[#1a1a2e]">
            <div className="bg-[#1a1a2e] text-[#f8f6f1] px-6 py-3 text-sm font-sans tracking-wider uppercase">
              Capability Assessment
            </div>
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className={`flex items-center gap-4 px-6 py-5 ${i !== content.comparison.capabilities.length - 1 ? 'border-b border-[#1a1a2e]/20' : ''} hover:bg-[#eae6db] transition-colors`}>
                <div className="w-6 h-6 border-2 border-[#c41e3a] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#c41e3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#1a1a2e]">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Source Reports */}
      <section className="py-20 bg-[#1a1a2e] text-[#f8f6f1]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[#d4af37] text-sm font-sans tracking-[0.3em] uppercase">Source Reports</span>
            <div className="flex-1 h-px bg-[#d4af37]/30"/>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.testimonials.slice(0, 4).map((testimonial, i) => (
              <div key={i} className="border border-[#f8f6f1]/20 p-8 relative">
                <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#1a1a2e] px-4 text-xs font-sans text-[#d4af37] tracking-wider">
                  SOURCE {String(i + 1).padStart(2, '0')}
                </div>

                <blockquote className="text-xl leading-relaxed italic mb-6 text-[#f8f6f1]/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="border-t border-[#f8f6f1]/20 pt-4">
                  <div className="font-sans text-sm">
                    <span className="text-[#d4af37]">{testimonial.author}</span>
                    <span className="text-[#f8f6f1]/50"> — {testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Final Briefing */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-4 border-[#c41e3a] p-12 lg:p-16 text-center relative bg-[#f8f6f1]">
            {/* Corner stamps */}
            <div className="absolute top-4 left-4 text-[#c41e3a] opacity-30 text-6xl font-bold">※</div>
            <div className="absolute bottom-4 right-4 text-[#c41e3a] opacity-30 text-6xl font-bold">※</div>

            <h2 className="text-4xl lg:text-5xl mb-6">{content.cta.headline}</h2>
            <p className="text-xl text-[#666] mb-10 max-w-2xl mx-auto">{content.cta.subheadline}</p>

            <button className="font-sans bg-[#c41e3a] text-white px-12 py-5 tracking-wider uppercase text-sm hover:bg-[#a01830] transition-colors">
              {content.cta.button}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t-2 border-[#1a1a2e]">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm font-sans text-[#666]">
          <p>DarkWebIQ — Intelligence Dossier Theme Preview</p>
          <p>UNCLASSIFIED UPON RELEASE</p>
        </div>
      </footer>
    </div>
  );
}
