import Link from 'next/link';
import { contentV3 as content } from '@/lib/content-v3';

export default function IntelligenceDossierV3() {
  return (
    <div className="min-h-screen bg-[#f8f6f1] text-[#1a1a2e] font-['Georgia','Times_New_Roman',serif]">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}/>

      {/* Navigation */}
      <nav className="border-b-2 border-[#1a1a2e] bg-[#f8f6f1]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#c41e3a] hover:underline text-sm font-sans">
            DarkWebIQ
          </Link>
          <div className="flex items-center gap-6">
            <span className="hidden md:block text-xs font-sans text-[#666]">{content.footer.trustedBy}</span>
            <button className="font-sans bg-[#1a1a2e] text-[#f8f6f1] px-4 py-1.5 tracking-wider uppercase text-xs hover:bg-[#c41e3a] transition-colors">
              {content.hero.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-16 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-4 border-[#1a1a2e] p-12 lg:p-20 relative bg-[#f8f6f1]">
            <div className="max-w-3xl">
              <div className="text-[#c41e3a] text-sm font-sans tracking-[0.3em] uppercase mb-6 border-b border-[#1a1a2e] pb-4 inline-block">
                {content.hero.preheadline}
              </div>
              <h1 className="text-5xl lg:text-6xl leading-tight mb-8 font-normal">
                {content.hero.headline}
              </h1>
              <p className="text-xl leading-relaxed text-[#444] mb-10 border-l-4 border-[#c41e3a] pl-6">
                {content.hero.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group font-sans bg-[#1a1a2e] text-[#f8f6f1] px-8 py-4 tracking-wider uppercase text-sm hover:bg-[#c41e3a] transition-colors inline-flex items-center gap-4">
                  {content.hero.cta}
                  <span className="w-8 h-px bg-current group-hover:w-12 transition-all"/>
                </button>
                <button className="font-sans border-2 border-[#1a1a2e] text-[#1a1a2e] px-8 py-4 tracking-wider uppercase text-sm hover:bg-[#1a1a2e] hover:text-[#f8f6f1] transition-colors">
                  {content.hero.secondaryCta}
                </button>
              </div>
            </div>

            {/* Corner fold effect */}
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#d4d0c7] to-transparent"/>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-4 bg-[#c41e3a] text-white relative">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-sans tracking-widest uppercase">{content.urgency.headline}</span>
          </div>
          <p className="text-sm font-sans">{content.urgency.text}</p>
          <span className="text-xs font-sans opacity-70">{content.urgency.updateDate}</span>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 border-b border-[#1a1a2e]/10 relative">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#666]">{content.socialProof.headline}</span>
          <div className="flex flex-wrap justify-center gap-8">
            {content.socialProof.logos.map((logo, i) => (
              <span key={i} className="text-sm text-[#999] font-sans">{logo}</span>
            ))}
          </div>
          <span className="text-sm font-sans font-medium text-[#c41e3a]">{content.socialProof.metric}</span>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-[#eae6db] relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[#c41e3a] text-6xl leading-none mb-6">&ldquo;</div>
          <blockquote className="text-2xl lg:text-3xl leading-relaxed mb-8 italic">
            {content.testimonials.find(t => 'featured' in t && t.featured)?.quote}
          </blockquote>
          <div className="font-sans text-sm">
            <span className="text-[#c41e3a] font-medium">{content.testimonials.find(t => 'featured' in t && t.featured)?.author}</span>
            <span className="text-[#666]"> — {content.testimonials.find(t => 'featured' in t && t.featured)?.role}</span>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#c41e3a] text-sm font-sans tracking-[0.3em] uppercase">Target Profiles</span>
            <div className="flex-1 h-px bg-[#1a1a2e]/20"/>
          </div>
          <h2 className="text-4xl mb-12">{content.whoThisIsFor.headline}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.whoThisIsFor.profiles.map((profile, i) => (
              <div key={i} className="bg-white border-2 border-[#1a1a2e] p-6 hover:border-[#c41e3a] transition-colors">
                <h3 className="text-lg font-semibold mb-3 text-[#c41e3a]">{profile.title}</h3>
                <p className="text-sm text-[#666]">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-[#1a1a2e] text-[#f8f6f1] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#d4af37] text-sm font-sans tracking-[0.3em] uppercase">Case Study</span>
            <div className="flex-1 h-px bg-[#d4af37]/30"/>
          </div>
          <h2 className="text-4xl mb-2">{content.caseStudy.headline}</h2>
          <p className="text-[#f8f6f1]/60 font-sans mb-12">{content.caseStudy.company}</p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {content.caseStudy.timeline.map((item, i) => (
              <div key={i} className="border-l-2 border-[#d4af37] pl-6">
                <div className="text-[#d4af37] text-xs font-sans tracking-widest uppercase mb-2">{item.day}</div>
                <p className="text-sm text-[#f8f6f1]/70">{item.event}</p>
              </div>
            ))}
          </div>

          <div className="border-2 border-[#d4af37] p-8 text-center">
            <p className="text-2xl mb-6">{content.caseStudy.outcome}</p>
            <button className="font-sans bg-[#d4af37] text-[#1a1a2e] px-10 py-4 tracking-wider uppercase text-sm hover:bg-[#c9a030] transition-colors">
              {content.caseStudy.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#eae6db] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[#c41e3a] text-sm font-sans tracking-[0.3em] uppercase">Survey Data</span>
            <div className="flex-1 h-px bg-[#1a1a2e]/20"/>
          </div>

          <h2 className="text-3xl mb-12">{content.statsHeadline}</h2>

          <div className="grid md:grid-cols-3 gap-1 bg-[#1a1a2e]/10">
            {content.stats.map((stat, i) => (
              <div key={i} className="bg-[#f8f6f1] p-10 border border-[#1a1a2e]/10">
                <div className="text-5xl font-light text-[#c41e3a] mb-2">{stat.number}</div>
                <div className="text-sm text-[#666] font-sans">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#666] font-sans">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#c41e3a] text-sm font-sans tracking-[0.3em] uppercase">The Process</span>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-[#eae6db] relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#c41e3a] text-sm font-sans tracking-[0.3em] uppercase">Capabilities</span>
            <div className="flex-1 h-px bg-[#1a1a2e]/20"/>
          </div>

          <h2 className="text-4xl mb-4">{content.comparison.headline}</h2>
          <p className="text-lg text-[#666] mb-12">{content.comparison.subheadline}</p>

          <div className="border-2 border-[#1a1a2e]">
            <div className="hidden md:grid grid-cols-2 border-b border-[#1a1a2e]">
              <div className="p-4 text-xs font-sans tracking-widest uppercase text-[#666] border-r border-[#1a1a2e]">Traditional Tools</div>
              <div className="p-4 text-xs font-sans tracking-widest uppercase text-[#c41e3a]">DarkWebIQ</div>
            </div>
            {content.comparison.capabilitiesEnhanced.map((cap, i) => (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-2 ${i !== content.comparison.capabilitiesEnhanced.length - 1 ? 'border-b border-[#1a1a2e]/20' : ''} hover:bg-[#f8f6f1] transition-colors`}>
                <div className="px-6 py-5 flex items-start gap-4 md:border-r border-[#1a1a2e]/20 bg-[#f8f6f1]/50">
                  <span className="text-red-500">✗</span>
                  <span className="text-[#666]">{cap.theirs}</span>
                </div>
                <div className="px-6 py-5 flex items-start gap-4">
                  <span className="text-[#c41e3a]">✓</span>
                  <span className="text-[#1a1a2e]">{cap.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#c41e3a] text-sm font-sans tracking-[0.3em] uppercase">Services</span>
            <div className="flex-1 h-px bg-[#1a1a2e]/20"/>
          </div>

          <h2 className="text-4xl mb-4">{content.solutions.headline}</h2>
          <p className="text-lg text-[#666] mb-16">{content.solutions.subheadline}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="bg-[#f8f6f1] border-2 border-[#1a1a2e] p-8 relative group hover:border-[#c41e3a] transition-colors">
                <div className="absolute -top-4 left-6 bg-[#1a1a2e] text-[#f8f6f1] px-4 py-1 text-xs font-sans tracking-wider group-hover:bg-[#c41e3a] transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <h3 className="text-2xl mb-4 mt-2">{item.title}</h3>
                <p className="text-[#666] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Assessment */}
      <section className="py-16 bg-[#c41e3a] text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl mb-4">{content.riskCalculator.headline}</h2>
          <p className="text-lg mb-2">{content.riskCalculator.subheadline}</p>
          <p className="opacity-80 mb-8 font-sans text-sm">{content.riskCalculator.description}</p>
          <button className="font-sans bg-[#1a1a2e] text-white px-12 py-4 tracking-wider uppercase text-sm hover:bg-[#0a0a1e] transition-colors">
            {content.riskCalculator.cta}
          </button>
          <p className="text-xs opacity-60 mt-4 font-sans">{content.riskCalculator.privacyNote}</p>
        </div>
      </section>

      {/* What To Expect */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#c41e3a] text-sm font-sans tracking-[0.3em] uppercase">Process</span>
            <div className="flex-1 h-px bg-[#1a1a2e]/20"/>
          </div>
          <h2 className="text-4xl mb-12 text-center">{content.whatToExpect.headline}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.whatToExpect.steps.map((step, i) => (
              <div key={i} className="text-center border-2 border-[#1a1a2e] p-8">
                <div className="w-16 h-16 bg-[#c41e3a] text-white flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-[#666]">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#666] mt-12 italic">{content.whatToExpect.reassurance}</p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 border-y-2 border-[#1a1a2e] relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-lg font-sans tracking-widest uppercase text-[#c41e3a] mb-4">{content.guarantee.headline}</h3>
          <p className="text-[#444] mb-2">{content.guarantee.text}</p>
          <p className="text-sm text-[#666] italic">{content.guarantee.subtext}</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#1a1a2e] text-[#f8f6f1] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[#d4af37] text-sm font-sans tracking-[0.3em] uppercase">Testimonials</span>
            <div className="flex-1 h-px bg-[#d4af37]/30"/>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.testimonials.filter(t => !('featured' in t && t.featured)).slice(0, 5).map((testimonial, i) => (
              <div key={i} className="border border-[#f8f6f1]/20 p-8 relative">
                <blockquote className="text-lg leading-relaxed italic mb-6 text-[#f8f6f1]/90">
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

      {/* Community */}
      <section className="py-16 bg-[#eae6db] relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl mb-4">{content.community.headline}</h2>
          <p className="text-[#666] mb-6">{content.community.description}</p>
          <button className="font-sans bg-[#1a1a2e] text-[#f8f6f1] px-8 py-3 tracking-wider uppercase text-sm hover:bg-[#c41e3a] transition-colors">
            {content.community.cta}
          </button>
          <p className="text-xs text-[#666] mt-4 font-sans">{content.community.socialProof}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-4 border-[#c41e3a] p-12 lg:p-16 text-center relative bg-[#f8f6f1]">
            <h2 className="text-4xl lg:text-5xl mb-6">{content.cta.headline}</h2>
            <p className="text-xl text-[#666] mb-4 max-w-2xl mx-auto">{content.cta.subheadline}</p>
            <p className="text-sm text-[#c41e3a] mb-10 font-sans">{content.cta.urgencyText}</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="font-sans bg-[#c41e3a] text-white px-12 py-5 tracking-wider uppercase text-sm hover:bg-[#a01830] transition-colors">
                {content.cta.button}
              </button>
              <button className="font-sans border-2 border-[#1a1a2e] text-[#1a1a2e] px-12 py-5 tracking-wider uppercase text-sm hover:bg-[#1a1a2e] hover:text-[#f8f6f1] transition-colors">
                {content.cta.secondaryButton}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t-2 border-[#1a1a2e] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              {content.footer.certifications.map((cert, i) => (
                <span key={i} className="text-xs text-[#666] font-sans border border-[#1a1a2e] px-3 py-1">{cert}</span>
              ))}
            </div>
            <p className="text-sm font-sans text-[#666]">{content.footer.trustedBy}</p>
            <p className="text-xs font-sans text-[#666]">© 2026 DarkWebIQ</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#f8f6f1] border-t-2 border-[#1a1a2e] p-4 md:hidden z-50">
        <button className="w-full bg-[#c41e3a] text-white py-4 font-sans tracking-wider uppercase text-sm">
          {content.hero.cta}
        </button>
      </div>
    </div>
  );
}
