'use client';

import Link from 'next/link';
import { contentV3 as content } from '@/lib/content-v3';

export default function BlackoutProtocolV3() {
  const featuredTestimonial = content.testimonials.find(t => t.featured);
  const nonFeaturedTestimonials = content.testimonials.filter(t => !t.featured);

  return (
    <div className="min-h-screen bg-black text-white font-['JetBrains_Mono',monospace]">
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .cursor::after {
          content: '_';
          animation: blink 1s infinite;
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .scanline {
          animation: scanline 4s linear infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-[0.03]">
        <div className="scanline absolute inset-0 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent h-[200px]"/>
      </div>

      {/* 1. Navigation with brand + CTA */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-[#00d4ff] hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">
              DARKWEB_IQ
            </Link>
            <span className="hidden md:block text-[#333] text-xs">|</span>
            <span className="hidden md:block text-[#666] text-xs tracking-[0.3em] uppercase">BLACKOUT_PROTOCOL_V3</span>
          </div>
          <button className="bg-[#00d4ff] text-black px-6 py-2 text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors">
            {content.hero.cta}
          </button>
        </div>
      </nav>

      {/* 2. Hero with preheadline, headline, subheadline, dual CTAs */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#00d4ff] text-xs mb-4 uppercase tracking-widest">
            &gt; {content.hero.preheadline}
          </div>

          <div className="text-[#666] text-xs mb-6 font-mono">
            root@darkwebiq:~$ cat /briefing/priority.txt
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-none tracking-tighter uppercase mb-8">
            {content.hero.headline}
          </h1>

          <p className="text-[#888] text-xl leading-relaxed max-w-3xl mb-12">
            {content.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-[#666] text-xs">$</span>
              <button className="bg-[#00d4ff] text-black px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors">
                {content.hero.cta}
              </button>
              <span className="cursor text-[#00d4ff]"/>
            </div>
            <button className="border border-[#333] text-[#888] px-8 py-4 text-sm uppercase tracking-widest hover:border-[#00d4ff] hover:text-[#00d4ff] transition-colors">
              {content.hero.secondaryCta}
            </button>
          </div>
        </div>
      </section>

      {/* 3. Urgency Banner */}
      <section className="py-4 px-6 bg-[#00d4ff]/10 border-y border-[#00d4ff]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="pulse w-2 h-2 bg-[#00d4ff] rounded-full"/>
            <span className="text-[#00d4ff] text-xs uppercase tracking-widest font-bold">{content.urgency.headline}</span>
          </div>
          <p className="text-[#888] text-sm text-center md:text-left">{content.urgency.text}</p>
          <span className="text-[#666] text-xs">{content.urgency.updateDate}</span>
        </div>
      </section>

      {/* 4. Social Proof Bar */}
      <section className="py-8 px-6 border-b border-[#333]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-[#00d4ff] text-sm font-bold">{content.socialProof.metric}</span>
            <div className="flex flex-wrap justify-center gap-8">
              {content.socialProof.logos.map((logo, i) => (
                <span key={i} className="text-[#666] text-xs uppercase tracking-widest border border-[#333] px-4 py-2">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Testimonial */}
      {featuredTestimonial && (
        <section className="py-16 px-6 bg-[#050505]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-[#00d4ff] text-xs uppercase tracking-widest mb-8">&gt; PRIORITY_INTEL</div>
            <blockquote className="text-2xl lg:text-3xl text-white leading-relaxed mb-8 italic">
              &ldquo;{featuredTestimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 border border-[#00d4ff] flex items-center justify-center text-[#00d4ff] text-xl font-bold">
                {featuredTestimonial.author.charAt(0)}
              </div>
              <div className="text-left">
                <div className="text-white font-bold">{featuredTestimonial.author}</div>
                <div className="text-[#00d4ff] text-sm">{featuredTestimonial.role}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Who This Is For */}
      <section className="py-20 px-6 border-y border-[#333]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#00d4ff] text-xs uppercase tracking-widest">&gt; TARGET_PROFILES</span>
            <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tight mt-4">{content.whoThisIsFor.headline}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#333]">
            {content.whoThisIsFor.profiles.map((profile, i) => (
              <div key={i} className="bg-black p-8 hover:bg-[#0a0a0a] transition-colors group">
                <div className="text-[#333] text-xs font-mono mb-4">PROFILE_{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold uppercase tracking-wide mb-3 group-hover:text-[#00d4ff] transition-colors">
                  {profile.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Case Study with Timeline */}
      <section className="py-20 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-[#00d4ff] text-xs uppercase tracking-widest">&gt; CASE_FILE_001</span>
            <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tight mt-4">{content.caseStudy.headline}</h2>
            <p className="text-[#666] text-sm mt-2">{content.caseStudy.company}</p>
          </div>

          <div className="space-y-0 border-l border-[#333] ml-4">
            {content.caseStudy.timeline.map((item, i) => (
              <div key={i} className="relative pl-8 pb-8">
                <div className="absolute left-0 top-0 w-2 h-2 bg-[#00d4ff] -translate-x-1"/>
                <div className="text-[#00d4ff] text-xs font-bold uppercase tracking-widest mb-2">{item.day}</div>
                <p className="text-[#ccc] leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 border border-[#00d4ff]/30 bg-[#00d4ff]/5">
            <div className="text-[#00d4ff] text-xs uppercase tracking-widest mb-2">&gt; OUTCOME</div>
            <p className="text-white text-lg font-bold">{content.caseStudy.outcome}</p>
          </div>

          <div className="mt-8">
            <button className="bg-[#00d4ff] text-black px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors">
              {content.caseStudy.cta}
            </button>
          </div>
        </div>
      </section>

      {/* 8. Stats Section */}
      <section className="py-16 px-6 border-y border-[#333]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#00d4ff] text-xs uppercase tracking-widest">{content.statsHeadline}</span>
            <div className="flex-1 h-px bg-[#333]"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {content.stats.map((stat, i) => (
              <div key={i} className={`py-8 ${i < 2 ? 'md:border-r border-[#333]' : ''} ${i > 0 ? 'md:pl-8' : ''}`}>
                <div className="text-6xl lg:text-8xl font-bold text-[#00d4ff] tracking-tighter leading-none">
                  {stat.number}
                </div>
                <div className="text-[#666] text-xs uppercase tracking-widest mt-4">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-[#444] text-xs">
            {content.statsFootnote}
          </div>
        </div>
      </section>

      {/* 9. How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-[#00d4ff] text-xs uppercase tracking-widest">&gt; {content.howItWorks.headline}</span>
            <p className="text-[#666] text-sm mt-2">{content.howItWorks.subheadline}</p>
          </div>

          <div className="space-y-2">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex group hover:bg-[#0a0a0a] transition-colors">
                <div className="w-24 shrink-0 py-4 text-[#333] text-xs font-mono">
                  [{String(i + 1).padStart(2, '0')}]
                </div>
                <div className="flex-1 py-4 border-l border-[#222] pl-6">
                  <span className="text-[#00d4ff] font-bold uppercase tracking-wide">{step.title}</span>
                  <span className="text-[#666] mx-3">|</span>
                  <span className="text-[#888]">{step.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Comparison Table */}
      <section className="py-20 px-6 bg-[#050505] border-y border-[#333]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#00d4ff] text-xs uppercase tracking-widest">&gt; {content.comparison.headline}</span>
            <p className="text-[#666] text-sm mt-2">{content.comparison.subheadline}</p>
          </div>

          <div className="border border-[#333]">
            <div className="grid grid-cols-2 border-b border-[#333] bg-[#0a0a0a]">
              <div className="p-4 text-[#666] text-xs uppercase tracking-widest border-r border-[#333]">
                THEIR_TOOLS
              </div>
              <div className="p-4 text-[#00d4ff] text-xs uppercase tracking-widest">
                DARKWEB_IQ
              </div>
            </div>
            {content.comparison.capabilitiesEnhanced.map((cap, i) => (
              <div key={i} className="grid grid-cols-2 border-b border-[#333] last:border-b-0 hover:bg-[#0a0a0a] transition-colors">
                <div className="p-4 text-[#666] text-sm border-r border-[#333] flex items-start gap-3">
                  <span className="text-[#ff4444] shrink-0">-</span>
                  {cap.theirs}
                </div>
                <div className="p-4 text-[#ccc] text-sm flex items-start gap-3">
                  <span className="text-[#00d4ff] shrink-0">+</span>
                  {cap.ours}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Solutions/Business Impact */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-[#00d4ff] text-xs uppercase tracking-widest">&gt; {content.solutions.headline}</span>
              <p className="text-[#666] text-sm mt-1">{content.solutions.subheadline}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#333]">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="bg-black p-10 hover:bg-[#0a0a0a] transition-colors group">
                <div className="text-[#333] text-6xl font-bold leading-none mb-6">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3 group-hover:text-[#00d4ff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Free Assessment Offer */}
      <section className="py-20 px-6 bg-[#050505] border-y border-[#333]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#00d4ff] text-xs uppercase tracking-widest mb-4">&gt; RISK_CALCULATOR</div>
          <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-4">{content.riskCalculator.headline}</h2>
          <p className="text-[#00d4ff] text-lg mb-6">{content.riskCalculator.subheadline}</p>
          <p className="text-[#888] text-sm mb-8 max-w-xl mx-auto">{content.riskCalculator.description}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <input
              type="text"
              placeholder="yourdomain.com"
              className="bg-black border border-[#333] px-6 py-4 text-white text-sm w-full sm:w-64 focus:border-[#00d4ff] outline-none"
            />
            <button className="bg-[#00d4ff] text-black px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors w-full sm:w-auto">
              {content.riskCalculator.cta}
            </button>
          </div>
          <p className="text-[#666] text-xs">{content.riskCalculator.privacyNote}</p>
        </div>
      </section>

      {/* 13. What To Expect */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#00d4ff] text-xs uppercase tracking-widest">&gt; PROCESS_FLOW</span>
            <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tight mt-4">{content.whatToExpect.headline}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.whatToExpect.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-[#00d4ff] text-6xl font-bold opacity-20 absolute -top-4 -left-2">{step.number}</div>
                <div className="relative pt-8">
                  <h3 className="text-lg font-bold uppercase tracking-wide mb-3 text-white">{step.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < content.whatToExpect.steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 text-[#333]">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#00d4ff] text-sm italic">{content.whatToExpect.reassurance}</p>
          </div>
        </div>
      </section>

      {/* 15. Testimonials Grid (non-featured) */}
      <section className="py-20 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#00d4ff] text-xs uppercase tracking-widest">&gt; FIELD_REPORTS</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nonFeaturedTestimonials.map((testimonial, i) => (
              <div key={i} className="border border-[#222] p-6 hover:border-[#333] transition-colors">
                <div className="text-[#333] text-xs mb-4 font-mono">
                  MSG_{String(i + 1).padStart(3, '0')}
                </div>
                <blockquote className="text-[#999] text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-[#222]">
                  <div className="text-white text-sm">{testimonial.author}</div>
                  <div className="text-[#00d4ff] text-xs mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Community/Newsletter */}
      <section className="py-16 px-6 border-y border-[#333]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#00d4ff] text-xs uppercase tracking-widest mb-4">&gt; INTEL_NETWORK</div>
          <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight mb-4">{content.community.headline}</h2>
          <p className="text-[#888] text-sm mb-8">{content.community.description}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-black border border-[#333] px-6 py-4 text-white text-sm w-full sm:w-64 focus:border-[#00d4ff] outline-none"
            />
            <button className="border border-[#00d4ff] text-[#00d4ff] px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-[#00d4ff] hover:text-black transition-colors w-full sm:w-auto">
              {content.community.cta}
            </button>
          </div>
          <p className="text-[#666] text-xs">{content.community.socialProof}</p>
        </div>
      </section>

      {/* 17. Final CTA with urgency text */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
            {content.cta.headline}
          </h2>
          <p className="text-[#888] text-lg mb-8">
            {content.cta.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button className="bg-[#00d4ff] text-black px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors">
              {content.cta.button}
            </button>
            <button className="border border-[#333] text-[#888] px-8 py-5 text-sm uppercase tracking-widest hover:border-[#00d4ff] hover:text-[#00d4ff] transition-colors">
              {content.cta.secondaryButton}
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 text-[#ff6b00]">
            <span className="pulse w-2 h-2 bg-[#ff6b00] rounded-full"/>
            <span className="text-xs uppercase tracking-widest">{content.cta.urgencyText}</span>
          </div>
        </div>
      </section>

      {/* 18. Footer with certifications */}
      <footer className="py-12 px-6 border-t border-[#333] bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <span className="text-[#666] text-xs">{content.footer.trustedBy}</span>
            <div className="flex flex-wrap justify-center gap-6">
              {content.footer.certifications.map((cert, i) => (
                <span key={i} className="text-[#888] text-xs border border-[#333] px-4 py-2">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center text-xs text-[#666] border-t border-[#333] pt-8">
            <span>DARKWEBIQ // BLACKOUT_PROTOCOL_V3</span>
            <span>END_TRANSMISSION</span>
          </div>
        </div>
      </footer>

      {/* 19. Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur border-t border-[#333] p-4 md:hidden">
        <button className="w-full bg-[#00d4ff] text-black py-4 text-sm uppercase tracking-widest font-bold">
          {content.hero.cta}
        </button>
      </div>

      {/* Bottom padding for sticky CTA on mobile */}
      <div className="h-20 md:hidden"/>
    </div>
  );
}
