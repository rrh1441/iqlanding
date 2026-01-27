import Link from 'next/link';
import { contentV3 as content } from '@/lib/content-v3';

export default function LuxuryConciergeV3() {
  const featuredTestimonial = content.testimonials.find(t => t.featured);
  const nonFeaturedTestimonials = content.testimonials.filter(t => !t.featured);

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#2d2d2d] font-['Cormorant_Garamond',Georgia,serif]">
      {/* 1. Navigation with brand + CTA */}
      <nav className="bg-[#2d2d2d] text-[#f8f5f0] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[#c9a962] hover:text-[#f8f5f0] transition-colors text-sm tracking-widest uppercase font-sans font-medium">
              ← Themes
            </Link>
            <div className="w-px h-6 bg-[#c9a962]/30 hidden md:block"/>
            <span className="text-sm tracking-[0.3em] uppercase font-sans text-[#f8f5f0] hidden md:block">DarkWebIQ</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#c9a962] text-xs tracking-[0.2em] uppercase font-sans hidden lg:block">Luxury Concierge V3</span>
            <button className="bg-[#c9a962] text-[#2d2d2d] px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-sans font-semibold hover:bg-[#b8944f] transition-colors">
              {content.hero.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero with preheadline, headline, subheadline, dual CTAs */}
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
              {content.hero.preheadline}
            </p>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8 tracking-wide">
              {content.hero.headline}
            </h1>
            <p className="text-xl text-[#666] leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-12 py-5 bg-[#2d2d2d] text-[#f8f5f0] tracking-[0.2em] uppercase text-sm font-sans font-medium hover:bg-[#1a1a1a] transition-colors">
                {content.hero.cta}
                <span className="absolute inset-0 border border-[#c9a962] transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"/>
              </button>
              <button className="px-12 py-5 border border-[#2d2d2d] text-[#2d2d2d] tracking-[0.2em] uppercase text-sm font-sans font-medium hover:bg-[#2d2d2d] hover:text-[#f8f5f0] transition-colors">
                {content.hero.secondaryCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Urgency Banner */}
      <section className="bg-[#c9a962] py-4">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-center">
            <span className="text-[#2d2d2d] font-semibold tracking-wide">{content.urgency.headline}:</span>
            <span className="text-[#2d2d2d]/80 font-light">{content.urgency.text}</span>
            <span className="text-[#2d2d2d]/60 text-sm font-sans">{content.urgency.updateDate}</span>
          </div>
        </div>
      </section>

      {/* 4. Social Proof Bar */}
      <section className="py-12 bg-[#2d2d2d] text-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase font-sans mb-6">{content.socialProof.headline}</p>
            <div className="flex flex-wrap justify-center gap-8 items-center mb-4">
              {content.socialProof.logos.map((logo, i) => (
                <span key={i} className="text-[#f8f5f0]/60 font-sans text-sm tracking-wider">{logo}</span>
              ))}
            </div>
            <p className="text-[#c9a962] font-light text-lg">{content.socialProof.metric}</p>
          </div>
        </div>
      </section>

      {/* 5. Featured Testimonial */}
      {featuredTestimonial && (
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-8">
            <div className="relative text-center">
              {/* Decorative quote */}
              <div className="text-[#c9a962] text-9xl font-serif opacity-20 absolute -top-10 left-1/2 transform -translate-x-1/2">&ldquo;</div>

              <div className="relative z-10 border border-[#c9a962]/30 p-12 md:p-16">
                <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-px bg-[#c9a962]"/>
                  <div className="text-center">
                    <div className="font-semibold text-[#2d2d2d] text-lg">{featuredTestimonial.author}</div>
                    <div className="text-sm text-[#c9a962] font-sans tracking-wider uppercase">{featuredTestimonial.role}</div>
                  </div>
                  <div className="w-12 h-px bg-[#c9a962]"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Who This Is For Section */}
      <section className="py-24 bg-[#2d2d2d] text-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm tracking-[0.4em] uppercase font-sans">Designed For Excellence</p>
            <h2 className="text-4xl font-light mt-4">{content.whoThisIsFor.headline}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.whoThisIsFor.profiles.map((profile, i) => (
              <div key={i} className="bg-[#f8f5f0] text-[#2d2d2d] p-8 relative group hover:translate-y-[-4px] transition-transform">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#c9a962]"/>
                <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase font-sans">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-light mt-4 mb-3">{profile.title}</h3>
                <p className="text-[#666] font-light text-sm leading-relaxed">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Case Study with Timeline */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm tracking-[0.4em] uppercase font-sans">Case Study</p>
            <h2 className="text-4xl font-light mt-4">{content.caseStudy.headline}</h2>
            <p className="text-[#666] mt-4 font-light">{content.caseStudy.company}</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#c9a962]/30 transform md:-translate-x-1/2"/>

            {content.caseStudy.timeline.map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-20 md:pl-0`}>
                  <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase font-sans font-semibold">{item.day}</span>
                  <p className="text-lg font-light mt-2 leading-relaxed">{item.event}</p>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-[#c9a962] border-4 border-[#f8f5f0] transform -translate-x-1/2"/>
                <div className="flex-1 hidden md:block"/>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-8 bg-[#2d2d2d] text-[#f8f5f0]">
            <p className="text-xl font-light italic mb-6">{content.caseStudy.outcome}</p>
            <button className="bg-[#c9a962] text-[#2d2d2d] px-10 py-4 tracking-[0.2em] uppercase text-sm font-sans font-semibold hover:bg-[#b8944f] transition-colors">
              {content.caseStudy.cta}
            </button>
          </div>
        </div>
      </section>

      {/* 8. Stats Section */}
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

      {/* 9. How It Works - 4 Steps */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <p className="text-[#c9a962] text-sm tracking-[0.4em] uppercase font-sans">Our Approach</p>
            <h2 className="text-4xl font-light mt-4">{content.howItWorks.headline}</h2>
            <p className="text-[#666] mt-4 max-w-2xl mx-auto font-light">{content.howItWorks.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-20 h-20 rounded-full border-2 border-[#c9a962] flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-light text-[#c9a962]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                {i < content.howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-[#c9a962]/30"/>
                )}
                <h3 className="text-xl font-light mb-3">{step.title}</h3>
                <p className="text-[#666] leading-relaxed font-light text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Comparison Table (theirs vs ours) */}
      <section className="py-24 bg-[#f8f5f0]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm tracking-[0.4em] uppercase font-sans">Distinction</p>
            <h2 className="text-4xl font-light mt-4">{content.comparison.headline}</h2>
            <p className="text-[#666] mt-4 font-light">{content.comparison.subheadline}</p>
          </div>

          <div className="overflow-hidden border border-[#2d2d2d]/10">
            {/* Header */}
            <div className="grid grid-cols-2 bg-[#2d2d2d] text-[#f8f5f0]">
              <div className="p-6 text-center border-r border-[#f8f5f0]/10">
                <span className="text-sm tracking-[0.2em] uppercase font-sans text-[#f8f5f0]/60">Traditional Tools</span>
              </div>
              <div className="p-6 text-center">
                <span className="text-sm tracking-[0.2em] uppercase font-sans text-[#c9a962]">DarkWebIQ</span>
              </div>
            </div>

            {/* Rows */}
            {content.comparison.capabilitiesEnhanced.map((cap, i) => (
              <div key={i} className={`grid grid-cols-2 ${i !== content.comparison.capabilitiesEnhanced.length - 1 ? 'border-b border-[#2d2d2d]/10' : ''}`}>
                <div className="p-6 border-r border-[#2d2d2d]/10 flex items-center gap-4">
                  <svg className="w-5 h-5 text-[#999] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[#666] font-light text-sm">{cap.theirs}</span>
                </div>
                <div className="p-6 flex items-center gap-4 bg-[#f8f5f0]">
                  <svg className="w-5 h-5 text-[#c9a962] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-light text-sm">{cap.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Solutions/Business Impact */}
      <section className="py-24 bg-[#2d2d2d] text-[#f8f5f0]">
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
                  <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase font-sans">Impact {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-2xl font-light mt-4 mb-4">{item.title}</h3>
                  <p className="text-[#666] leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Free Assessment Offer (Risk Calculator) */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5f0] to-[#f0ebe3]"/>
        <div className="max-w-4xl mx-auto px-8 relative">
          <div className="text-center border-2 border-[#c9a962] p-12 md:p-16 relative">
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

            <p className="text-[#c9a962] text-sm tracking-[0.4em] uppercase font-sans mb-4">{content.riskCalculator.subheadline}</p>
            <h2 className="text-4xl lg:text-5xl font-light mb-6">{content.riskCalculator.headline}</h2>
            <p className="text-xl text-[#666] mb-10 max-w-2xl mx-auto font-light">{content.riskCalculator.description}</p>

            <button className="bg-[#2d2d2d] text-[#f8f5f0] px-12 py-5 tracking-[0.2em] uppercase text-sm font-sans hover:bg-[#1a1a1a] transition-colors">
              {content.riskCalculator.cta}
            </button>
            <p className="text-sm text-[#666] mt-6 font-sans">{content.riskCalculator.privacyNote}</p>
          </div>
        </div>
      </section>

      {/* 13. What To Expect */}
      <section className="py-24 bg-[#2d2d2d] text-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm tracking-[0.4em] uppercase font-sans">The Process</p>
            <h2 className="text-4xl font-light mt-4">{content.whatToExpect.headline}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {content.whatToExpect.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#c9a962] flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-light text-[#2d2d2d]">{step.number}</span>
                </div>
                <h3 className="text-xl font-light mb-3 text-[#c9a962]">{step.title}</h3>
                <p className="text-[#f8f5f0]/70 font-light text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-[#f8f5f0]/60 font-light italic">{content.whatToExpect.reassurance}</p>
        </div>
      </section>

      {/* 15. Testimonials Grid (non-featured) */}
      <section className="py-24 bg-[#2d2d2d] text-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm tracking-[0.4em] uppercase font-sans">Client Testimonials</p>
            <h2 className="text-4xl font-light mt-4">Words of Confidence</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonFeaturedTestimonials.map((testimonial, i) => (
              <div key={i} className="relative">
                {/* Decorative quote */}
                <div className="absolute -top-4 left-6 text-[#c9a962] text-6xl font-serif opacity-30">&ldquo;</div>

                <div className="bg-[#f8f5f0] text-[#2d2d2d] p-8 relative h-full flex flex-col">
                  <p className="text-lg font-light italic leading-relaxed mb-6 relative z-10 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-px h-10 bg-[#c9a962]"/>
                    <div>
                      <div className="font-semibold text-[#2d2d2d]">{testimonial.author}</div>
                      <div className="text-xs text-[#c9a962] font-sans tracking-wider">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Community/Newsletter */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-[#f0ebe3] p-12 md:p-16 text-center relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#c9a962]"/>

            <h2 className="text-3xl font-light mb-4">{content.community.headline}</h2>
            <p className="text-[#666] mb-8 font-light">{content.community.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border border-[#2d2d2d]/20 bg-white font-sans text-sm focus:outline-none focus:border-[#c9a962]"
              />
              <button className="bg-[#2d2d2d] text-[#f8f5f0] px-8 py-4 tracking-[0.15em] uppercase text-sm font-sans hover:bg-[#1a1a1a] transition-colors whitespace-nowrap">
                {content.community.cta}
              </button>
            </div>

            <p className="text-sm text-[#666] mt-6 font-sans">{content.community.socialProof}</p>
          </div>
        </div>
      </section>

      {/* 17. Final CTA with urgency text */}
      <section className="py-24 bg-[#2d2d2d]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center text-[#f8f5f0] relative">
            {/* Decorative frame */}
            <div className="absolute inset-0 border border-[#c9a962]/30 transform scale-95"/>
            <div className="absolute inset-0 border border-[#f8f5f0]/10"/>

            <div className="p-12 md:p-16 relative">
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
              <p className="text-xl text-[#f8f5f0]/70 mb-10 max-w-2xl mx-auto font-light">{content.cta.subheadline}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#c9a962] text-[#2d2d2d] px-12 py-5 tracking-[0.2em] uppercase text-sm font-sans font-semibold hover:bg-[#b8944f] transition-colors">
                  {content.cta.button}
                </button>
                <button className="border border-[#f8f5f0]/30 text-[#f8f5f0] px-12 py-5 tracking-[0.2em] uppercase text-sm font-sans hover:bg-[#f8f5f0]/10 transition-colors">
                  {content.cta.secondaryButton}
                </button>
              </div>

              <p className="text-[#c9a962] text-sm mt-8 font-sans tracking-wider">{content.cta.urgencyText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 18. Footer with certifications */}
      <footer className="py-12 bg-[#1a1a1a] text-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-8">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {content.footer.certifications.map((cert, i) => (
                <span key={i} className="text-[#f8f5f0]/60 text-sm font-sans tracking-wider border border-[#f8f5f0]/20 px-4 py-2">
                  {cert}
                </span>
              ))}
            </div>
            <p className="text-[#c9a962] text-sm font-sans">{content.footer.trustedBy}</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#f8f5f0]/10">
            <p className="text-[#f8f5f0]/40 text-sm font-sans">DarkWebIQ - Luxury Concierge V3 Theme Preview</p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#c9a962]"/>
              <span className="text-[#c9a962] text-sm tracking-widest font-sans uppercase">Est. MMXXIV</span>
              <div className="w-8 h-px bg-[#c9a962]"/>
            </div>
          </div>
        </div>
      </footer>

      {/* 19. Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#2d2d2d] border-t border-[#c9a962]/30 p-4 md:hidden z-50">
        <button className="w-full bg-[#c9a962] text-[#2d2d2d] py-4 tracking-[0.15em] uppercase text-sm font-sans font-semibold">
          {content.hero.cta}
        </button>
      </div>

      {/* Spacer for sticky mobile CTA */}
      <div className="h-20 md:hidden"/>
    </div>
  );
}
