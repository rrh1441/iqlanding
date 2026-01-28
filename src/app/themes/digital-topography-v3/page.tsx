import Link from 'next/link';
import { contentV3 as content } from '@/lib/content-v3';

export default function DigitalTopographyV3() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-[#e8e8e8] relative overflow-hidden">
      {/* Topographic line background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo-lines" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M0 50 Q25 30 50 50 T100 50" fill="none" stroke="#b87333" strokeWidth="0.5"/>
              <path d="M0 70 Q25 50 50 70 T100 70" fill="none" stroke="#b87333" strokeWidth="0.5"/>
              <path d="M0 30 Q25 10 50 30 T100 30" fill="none" stroke="#b87333" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo-lines)"/>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="bg-[#1a1a2e] border-b border-[#b87333]/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#b87333] hover:text-[#d4894a] transition-colors text-sm tracking-widest uppercase">
            DarkWebIQ
          </Link>
          <div className="flex items-center gap-6">
            <span className="hidden md:block text-xs text-[#888]">{content.footer.trustedBy}</span>
            <button className="px-4 py-1.5 bg-[#b87333] text-[#1a1a2e] hover:bg-[#d4894a] transition-colors text-xs tracking-widest uppercase">
              {content.hero.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="text-[#b87333] text-xs tracking-[0.4em] uppercase mb-6 font-medium">
              {content.hero.preheadline}
            </div>
            <h1 className="text-5xl lg:text-7xl font-light leading-[1.1] mb-8 tracking-tight">
              {content.hero.headline}
            </h1>
            <p className="text-xl text-[#b8b8b8] leading-relaxed mb-10 max-w-xl">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#b87333] text-[#1a1a2e] hover:bg-[#d4894a] transition-all tracking-widest uppercase text-sm">
                {content.hero.cta}
              </button>
              <button className="px-8 py-4 border border-[#b87333] text-[#b87333] hover:bg-[#b87333] hover:text-[#1a1a2e] transition-all tracking-widest uppercase text-sm">
                {content.hero.secondaryCta}
              </button>
            </div>
          </div>
          <div className="relative h-[500px] hidden lg:block">
            <svg viewBox="0 0 400 500" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 40px rgba(184, 115, 51, 0.2))' }}>
              <line x1="0" y1="180" x2="400" y2="180" stroke="#b87333" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
              <text x="10" y="175" fill="#b87333" fontSize="10" opacity="0.7">SURFACE LEVEL</text>
              <polygon points="200,40 280,175 120,175" fill="none" stroke="#e8e8e8" strokeWidth="1"/>
              <polygon points="200,180 350,450 50,450" fill="none" stroke="#b87333" strokeWidth="1.5"/>
              <line x1="200" y1="180" x2="200" y2="450" stroke="#b87333" strokeWidth="0.5" opacity="0.5"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-4 bg-[#b87333]/20 border-y border-[#b87333]/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#b87333] rounded-full animate-pulse" />
            <span className="text-sm font-medium uppercase tracking-widest text-[#b87333]">{content.urgency.headline}</span>
          </div>
          <p className="text-sm text-[#b8b8b8]">{content.urgency.text}</p>
          <span className="text-xs text-[#666]">{content.urgency.updateDate}</span>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-b border-[#b87333]/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xs tracking-[0.3em] uppercase text-[#888]">{content.socialProof.headline}</span>
          <div className="flex flex-wrap justify-center gap-8">
            {content.socialProof.logos.map((logo, i) => (
              <span key={i} className="text-sm text-[#666]">{logo}</span>
            ))}
          </div>
          <span className="text-sm font-medium text-[#b87333]">{content.socialProof.metric}</span>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 bg-[#16213e]/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <svg className="w-12 h-12 text-[#b87333]/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8">
            {content.testimonials.find(t => 'featured' in t && t.featured)?.quote}
          </blockquote>
          <div className="text-[#b87333]">{content.testimonials.find(t => 'featured' in t && t.featured)?.author}</div>
          <div className="text-sm text-[#888]">{content.testimonials.find(t => 'featured' in t && t.featured)?.role}</div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#b87333] text-xs tracking-[0.4em] uppercase">Target Profiles</span>
            <h2 className="text-3xl font-light mt-4">{content.whoThisIsFor.headline}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.whoThisIsFor.profiles.map((profile, i) => (
              <div key={i} className="bg-[#16213e]/30 p-8 border border-[#b87333]/20 hover:border-[#b87333]/50 transition-all text-center">
                <h3 className="text-lg font-medium mb-3 text-[#b87333]">{profile.title}</h3>
                <p className="text-sm text-[#888]">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-32 bg-[#0f3460]/30">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#b87333] text-xs tracking-[0.4em] uppercase">Field Report</span>
          <h2 className="text-4xl font-light mt-4 mb-2">{content.caseStudy.headline}</h2>
          <p className="text-[#888] mb-16">{content.caseStudy.company}</p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {content.caseStudy.timeline.map((item, i) => (
              <div key={i} className="border-l-2 border-[#b87333] pl-6">
                <div className="text-[#b87333] text-xs tracking-widest uppercase mb-2">{item.day}</div>
                <p className="text-[#b8b8b8] text-sm">{item.event}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#16213e]/50 p-8 border border-[#b87333]/30 text-center">
            <p className="text-2xl font-light text-[#e8e8e8] mb-6">{content.caseStudy.outcome}</p>
            <button className="px-8 py-4 bg-[#b87333] text-[#1a1a2e] tracking-widest uppercase text-sm hover:bg-[#d4894a] transition-colors">
              {content.caseStudy.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[#b87333] text-xs tracking-[0.4em] uppercase">Survey Data</span>
            <h2 className="text-3xl font-light mt-4">{content.statsHeadline}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            {content.stats.map((stat, i) => (
              <div key={i} className="bg-[#0f3460]/50 p-12 text-center border border-[#b87333]/20">
                <div className="text-5xl font-light text-[#b87333] mb-4">{stat.number}</div>
                <div className="text-sm text-[#888] tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-[#666]">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#b87333] text-xs tracking-[0.4em] uppercase">The Process</span>
            <h2 className="text-4xl font-light mt-4">{content.howItWorks.headline}</h2>
            <p className="text-[#888] mt-4">{content.howItWorks.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="bg-[#16213e]/30 p-8 border border-[#b87333]/20 hover:border-[#b87333]/50 transition-all">
                <span className="text-[#b87333] text-3xl font-light">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-light mt-4 mb-3">{step.title}</h3>
                <p className="text-[#888]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-32 bg-[#16213e]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#b87333] text-xs tracking-[0.4em] uppercase">Capability Matrix</span>
            <h2 className="text-4xl font-light mt-4">{content.comparison.headline}</h2>
            <p className="text-[#888] mt-4">{content.comparison.subheadline}</p>
          </div>

          <div className="space-y-4">
            <div className="hidden md:grid grid-cols-2 gap-8 pb-4 border-b border-[#b87333]/30">
              <span className="text-xs tracking-widest uppercase text-[#666]">Traditional Tools</span>
              <span className="text-xs tracking-widest uppercase text-[#b87333]">DarkWebIQ</span>
            </div>
            {content.comparison.capabilitiesEnhanced.map((cap, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-b border-[#b87333]/10">
                <div className="flex items-start gap-4">
                  <span className="text-red-400">✗</span>
                  <span className="text-[#666]">{cap.theirs}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#b87333]">✓</span>
                  <span className="text-[#e8e8e8]">{cap.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#b87333] text-xs tracking-[0.4em] uppercase">Terrain Analysis</span>
            <h2 className="text-4xl font-light mt-4">{content.solutions.headline}</h2>
            <p className="text-[#888] mt-4">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="bg-[#0f3460]/30 p-10 border border-[#b87333]/20 hover:border-[#b87333]/50 transition-all">
                <div className="text-[#b87333]/50 text-xs font-mono mb-4">SECTOR_{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                <p className="text-[#888]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Assessment */}
      <section className="py-24 bg-[#b87333]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-[#1a1a2e] mb-4">{content.riskCalculator.headline}</h2>
          <p className="text-lg text-[#1a1a2e]/80 mb-2">{content.riskCalculator.subheadline}</p>
          <p className="text-[#1a1a2e]/70 mb-8">{content.riskCalculator.description}</p>
          <button className="px-10 py-4 bg-[#1a1a2e] text-[#e8e8e8] tracking-widest uppercase text-sm hover:bg-[#16213e] transition-colors">
            {content.riskCalculator.cta}
          </button>
          <p className="text-xs text-[#1a1a2e]/60 mt-4">{content.riskCalculator.privacyNote}</p>
        </div>
      </section>

      {/* What To Expect */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#b87333] text-xs tracking-[0.4em] uppercase">Process</span>
            <h2 className="text-3xl font-light mt-4">{content.whatToExpect.headline}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {content.whatToExpect.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#b87333] text-[#1a1a2e] flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                  {step.number}
                </div>
                <h3 className="text-lg font-medium mb-3">{step.title}</h3>
                <p className="text-sm text-[#888]">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#666] mt-12 italic">{content.whatToExpect.reassurance}</p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 border-y border-[#b87333]/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-lg tracking-widest uppercase text-[#b87333] mb-4">{content.guarantee.headline}</h3>
          <p className="text-[#b8b8b8] mb-2">{content.guarantee.text}</p>
          <p className="text-sm text-[#666] italic">{content.guarantee.subtext}</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#0f3460]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#b87333] text-xs tracking-[0.4em] uppercase">Field Reports</span>
            <h2 className="text-4xl font-light mt-4">What Explorers Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.testimonials.filter(t => !('featured' in t && t.featured)).slice(0, 5).map((testimonial, i) => (
              <div key={i} className="bg-[#16213e]/50 p-8 border border-[#b87333]/10">
                <p className="text-[#b8b8b8] italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="border-t border-[#b87333]/20 pt-4">
                  <div className="text-[#e8e8e8]">{testimonial.author}</div>
                  <div className="text-[#b87333] text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 bg-[#16213e]/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-light mb-4">{content.community.headline}</h2>
          <p className="text-[#888] mb-6">{content.community.description}</p>
          <button className="px-8 py-3 bg-[#e8e8e8] text-[#1a1a2e] tracking-widest uppercase text-sm hover:bg-[#b87333] transition-colors">
            {content.community.cta}
          </button>
          <p className="text-xs text-[#666] mt-4">{content.community.socialProof}</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3460]/50 to-transparent"/>
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">{content.cta.headline}</h2>
          <p className="text-xl text-[#888] mb-4">{content.cta.subheadline}</p>
          <p className="text-[#b87333] text-sm mb-10">{content.cta.urgencyText}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-12 py-5 bg-[#b87333] text-[#1a1a2e] tracking-widest uppercase text-sm hover:bg-[#d4894a] transition-colors">
              {content.cta.button}
            </button>
            <button className="px-12 py-5 border border-[#b87333] text-[#b87333] tracking-widest uppercase text-sm hover:bg-[#b87333] hover:text-[#1a1a2e] transition-colors">
              {content.cta.secondaryButton}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#b87333]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              {content.footer.certifications.map((cert, i) => (
                <span key={i} className="text-xs text-[#666] border border-[#b87333]/30 px-3 py-1">{cert}</span>
              ))}
            </div>
            <p className="text-sm text-[#666]">{content.footer.trustedBy}</p>
            <p className="text-xs text-[#666]">© 2026 DarkWebIQ</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a2e] border-t border-[#b87333]/30 p-4 md:hidden z-50">
        <button className="w-full bg-[#b87333] text-[#1a1a2e] py-4 tracking-widest uppercase text-sm font-medium">
          {content.hero.cta}
        </button>
      </div>
    </div>
  );
}
