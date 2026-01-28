import Link from 'next/link';
import { contentV3 as content } from '@/lib/content-v3';

export default function EditorialV3() {
  const featuredTestimonial = content.testimonials.find(t => t.featured);
  const nonFeaturedTestimonials = content.testimonials.filter(t => !t.featured);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a1a] font-['Inter',system-ui,sans-serif]">

      {/* 1. Navigation with brand + CTA */}
      <nav className="bg-[#faf8f5] border-b border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <Link href="/" className="font-['Georgia',serif] text-xl tracking-tight text-[#1a1a1a]">
            DarkWebIQ
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[#1a1a1a]/60 hover:text-[#1e4d3d] transition-colors text-sm tracking-wide hidden md:block">
              All Themes
            </Link>
            <button className="bg-[#1e4d3d] text-white py-2.5 px-6 text-sm font-medium tracking-wide hover:bg-[#1a1a1a] transition-colors">
              {content.hero.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero with preheadline, headline, subheadline, dual CTAs */}
      <section className="pt-20 pb-24 border-b border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-[#1e4d3d] text-sm font-medium tracking-wide uppercase mb-6">
                {content.hero.preheadline}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Georgia',serif] leading-[1.1] tracking-[-0.02em]">
                {content.hero.headline}
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-[#1a1a1a]/70 mb-8">
                {content.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#1e4d3d] text-white py-4 px-8 font-medium text-sm tracking-wide hover:bg-[#1a1a1a] transition-colors">
                  {content.hero.cta}
                </button>
                <button className="border border-[#1a1a1a]/30 text-[#1a1a1a] py-4 px-8 font-medium text-sm tracking-wide hover:border-[#1e4d3d] hover:text-[#1e4d3d] transition-colors">
                  {content.hero.secondaryCta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Urgency Banner */}
      <section className="py-6 bg-[#1e4d3d] text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="font-['Georgia',serif] text-lg">{content.urgency.headline}</span>
            </div>
            <p className="text-white/80 text-sm md:text-base">{content.urgency.text}</p>
            <span className="text-white/60 text-xs tracking-wide uppercase">{content.urgency.updateDate}</span>
          </div>
        </div>
      </section>

      {/* 4. Social Proof Bar */}
      <section className="py-12 border-b border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-sm font-medium tracking-wide uppercase text-[#1e4d3d] mb-2">
                {content.socialProof.headline}
              </p>
              <p className="font-['Georgia',serif] text-xl text-[#1a1a1a]">{content.socialProof.metric}</p>
            </div>
            <div className="flex flex-wrap gap-6">
              {content.socialProof.logos.map((logo, i) => (
                <span key={i} className="text-sm text-[#1a1a1a]/50 tracking-wide">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Testimonial */}
      {featuredTestimonial && (
        <section className="py-24 bg-[#f5f3f0]">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <span className="text-[200px] font-['Georgia',serif] leading-none text-[#1e4d3d]/10 block -mb-24">
              &ldquo;
            </span>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-['Georgia',serif] leading-relaxed mb-8 relative z-10">
              {featuredTestimonial.quote}
            </blockquote>
            <div className="border-t border-[#1a1a1a]/20 pt-6 inline-block">
              <div className="font-medium text-lg">{featuredTestimonial.author}</div>
              <div className="text-[#1e4d3d] text-sm">{featuredTestimonial.role}</div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Who This Is For */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-['Georgia',serif] leading-tight mb-16 text-center">
            {content.whoThisIsFor.headline}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.whoThisIsFor.profiles.map((profile, i) => (
              <div key={i} className="border-t-2 border-[#1e4d3d] pt-6">
                <h3 className="font-['Georgia',serif] text-xl mb-3">{profile.title}</h3>
                <p className="text-[#1a1a1a]/60 leading-relaxed">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Case Study with Timeline */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Georgia',serif] leading-tight mb-4">
              {content.caseStudy.headline}
            </h2>
            <p className="text-white/60 text-lg">{content.caseStudy.company}</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/20 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {content.caseStudy.timeline.map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <span className="inline-block bg-[#1e4d3d] text-white text-sm font-medium px-3 py-1 mb-3">
                      {item.day}
                    </span>
                    <p className="text-white/80 leading-relaxed">{item.event}</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-[#1e4d3d] rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-2 border-[#1a1a1a]" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="font-['Georgia',serif] text-2xl text-[#1e4d3d] mb-8">{content.caseStudy.outcome}</p>
            <button className="bg-[#1e4d3d] text-white py-4 px-10 font-medium text-sm tracking-wide hover:bg-white hover:text-[#1a1a1a] transition-colors">
              {content.caseStudy.cta}
            </button>
          </div>
        </div>
      </section>

      {/* 8. Stats Section */}
      <section className="py-16 border-b border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-sm font-medium tracking-wide uppercase text-[#1e4d3d] mb-8">
            {content.statsHeadline}
          </p>
          <div className="flex flex-col md:flex-row md:items-baseline divide-y md:divide-y-0 md:divide-x divide-[#1a1a1a]/20">
            {content.stats.map((stat, i) => (
              <div key={i} className="flex-1 py-6 md:py-0 md:px-8 first:pl-0 last:pr-0">
                <div className="text-5xl md:text-6xl font-['Georgia',serif] tracking-[-0.02em] text-[#1a1a1a]">
                  {stat.number}
                </div>
                <div className="text-sm text-[#1a1a1a]/60 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#1a1a1a]/40 mt-8">{content.statsFootnote}</p>
        </div>
      </section>

      {/* 9. How It Works - 4 steps */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-['Georgia',serif] leading-tight mb-4">
              {content.howItWorks.headline}
            </h2>
            <p className="text-lg text-[#1a1a1a]/60">{content.howItWorks.subheadline}</p>
          </div>

          <div className="space-y-12">
            {content.howItWorks.steps.map((step, i) => (
              <div
                key={i}
                className={`grid grid-cols-12 gap-8 items-start ${i % 2 === 1 ? 'md:text-right' : ''}`}
              >
                <div className={`col-span-12 md:col-span-5 ${i % 2 === 1 ? 'md:col-start-8' : ''}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-[#1e4d3d] font-['Georgia',serif] text-2xl">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                      <p className="text-[#1a1a1a]/60 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Comparison Table (theirs vs ours) */}
      <section className="py-24 bg-[#f5f3f0]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Georgia',serif] leading-tight mb-4">
              {content.comparison.headline}
            </h2>
            <p className="text-lg text-[#1a1a1a]/60">{content.comparison.subheadline}</p>
          </div>

          <div className="bg-white border border-[#1a1a1a]/10">
            {/* Header */}
            <div className="grid grid-cols-2 border-b border-[#1a1a1a]/10">
              <div className="p-6 bg-[#1a1a1a]/5">
                <span className="text-sm font-medium tracking-wide uppercase text-[#1a1a1a]/40">Traditional Tools</span>
              </div>
              <div className="p-6 bg-[#1e4d3d]/10">
                <span className="text-sm font-medium tracking-wide uppercase text-[#1e4d3d]">DarkWebIQ</span>
              </div>
            </div>
            {/* Rows */}
            {content.comparison.capabilitiesEnhanced.map((cap, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 ${i !== content.comparison.capabilitiesEnhanced.length - 1 ? 'border-b border-[#1a1a1a]/10' : ''}`}
              >
                <div className="p-6 text-[#1a1a1a]/50 flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#1a1a1a]/30 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{cap.theirs}</span>
                </div>
                <div className="p-6 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1e4d3d] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#1a1a1a]">{cap.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Solutions/Business Impact */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-['Georgia',serif] leading-tight mb-4">
              {content.solutions.headline}
            </h2>
            <p className="text-lg text-white/60">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.solutions.items.map((item, i) => (
              <div
                key={i}
                className={`border border-white/20 p-10 ${i === 0 ? 'md:row-span-2' : ''} ${i === 3 ? 'md:-mt-24' : ''}`}
              >
                <span className="text-[#1e4d3d] text-sm font-medium tracking-wide uppercase">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-['Georgia',serif] mt-4 mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Free Assessment Offer (Risk Calculator) */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-8">
          <div className="border-2 border-[#1e4d3d] p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-['Georgia',serif] leading-tight mb-4">
              {content.riskCalculator.headline}
            </h2>
            <p className="text-[#1e4d3d] font-medium mb-4">{content.riskCalculator.subheadline}</p>
            <p className="text-[#1a1a1a]/60 mb-8 max-w-lg mx-auto">
              {content.riskCalculator.description}
            </p>
            <button className="bg-[#1e4d3d] text-white py-4 px-10 font-medium text-sm tracking-wide hover:bg-[#1a1a1a] transition-colors mb-4">
              {content.riskCalculator.cta}
            </button>
            <p className="text-xs text-[#1a1a1a]/40">{content.riskCalculator.privacyNote}</p>
          </div>
        </div>
      </section>

      {/* 13. What To Expect */}
      <section className="py-24 bg-[#f5f3f0]">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-['Georgia',serif] leading-tight mb-16 text-center">
            {content.whatToExpect.headline}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.whatToExpect.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-[#1e4d3d] flex items-center justify-center mx-auto mb-6">
                  <span className="font-['Georgia',serif] text-[#1e4d3d] text-xl">{step.number}</span>
                </div>
                <h3 className="font-medium text-lg mb-3">{step.title}</h3>
                <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#1a1a1a]/60 mt-12 italic font-['Georgia',serif]">
            {content.whatToExpect.reassurance}
          </p>
        </div>
      </section>

      {/* 15. Testimonials Grid (non-featured) */}
      <section className="py-24 bg-[#f5f3f0]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-['Georgia',serif] leading-tight mb-16 text-center">
            What Leaders Say
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonFeaturedTestimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-8 relative">
                <span className="text-[80px] font-['Georgia',serif] leading-none text-[#1e4d3d]/10 absolute -top-2 left-4">
                  &ldquo;
                </span>
                <blockquote className="text-lg font-['Georgia',serif] leading-relaxed relative z-10 mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="border-t border-[#1a1a1a]/10 pt-4">
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-[#1a1a1a]/60">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Community/Newsletter */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-['Georgia',serif] leading-tight mb-4">
            {content.community.headline}
          </h2>
          <p className="text-[#1a1a1a]/60 mb-8 max-w-lg mx-auto">
            {content.community.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 border border-[#1a1a1a]/20 bg-white text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#1e4d3d] min-w-[300px]"
            />
            <button className="bg-[#1e4d3d] text-white py-4 px-8 font-medium text-sm tracking-wide hover:bg-[#1a1a1a] transition-colors whitespace-nowrap">
              {content.community.cta}
            </button>
          </div>
          <p className="text-xs text-[#1a1a1a]/40">{content.community.socialProof}</p>
        </div>
      </section>

      {/* 17. Final CTA with urgency text */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="border border-white/20 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Georgia',serif] leading-tight mb-6">
              {content.cta.headline}
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              {content.cta.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="bg-[#1e4d3d] text-white py-4 px-10 font-medium text-sm tracking-wide hover:bg-white hover:text-[#1a1a1a] transition-colors">
                {content.cta.button}
              </button>
              <button className="border border-white/30 text-white py-4 px-10 font-medium text-sm tracking-wide hover:border-[#1e4d3d] hover:bg-[#1e4d3d] transition-colors">
                {content.cta.secondaryButton}
              </button>
            </div>
            <p className="text-[#1e4d3d] text-sm font-medium">{content.cta.urgencyText}</p>
          </div>
        </div>
      </section>

      {/* 18. Footer with certifications */}
      <footer className="py-16 border-t border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
            <div className="font-['Georgia',serif] text-xl text-[#1a1a1a]">DarkWebIQ</div>
            <div className="flex flex-wrap gap-6">
              {content.footer.certifications.map((cert, i) => (
                <span key={i} className="text-sm text-[#1a1a1a]/50 tracking-wide">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-[#1a1a1a]/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-[#1a1a1a]/40">{content.footer.trustedBy}</p>
            <p className="text-sm text-[#1a1a1a]/40">Editorial V3 Theme Preview</p>
          </div>
        </div>
      </footer>

      {/* 19. Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#faf8f5]/95 backdrop-blur-sm border-t border-[#1a1a1a]/10 p-4 md:hidden">
        <button className="w-full bg-[#1e4d3d] text-white py-4 px-6 font-medium text-sm tracking-wide hover:bg-[#1a1a1a] transition-colors">
          {content.hero.cta}
        </button>
      </div>

      {/* Bottom padding for mobile to account for sticky CTA */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
