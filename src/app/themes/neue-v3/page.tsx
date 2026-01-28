import Link from 'next/link';
import { contentV3 as content } from '@/lib/content-v3';

export default function NeueV3() {
  return (
    <div className="min-h-screen bg-white text-black font-['Inter',Helvetica,Arial,sans-serif]">

      {/* Navigation - Minimal but functional */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-black hover:text-[#ff0066] transition-colors text-xs font-bold tracking-[0.15em] uppercase">
            DarkWebIQ
          </Link>
          <div className="flex items-center gap-6">
            <span className="hidden md:block text-xs font-normal tracking-[0.1em] uppercase text-gray-500">
              {content.footer.trustedBy}
            </span>
            <button className="bg-[#ff0066] text-white py-1.5 px-3 font-bold text-xs tracking-[0.1em] uppercase hover:bg-black transition-colors">
              {content.hero.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Clear value proposition */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-8 pt-12 pb-16">
        <div className="max-w-7xl mx-auto w-full">
          {/* Pre-headline for targeting */}
          <p className="text-[#ff0066] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6">
            {content.hero.preheadline}
          </p>

          <h1 className="text-[40px] sm:text-[56px] md:text-[80px] lg:text-[120px] xl:text-[140px] font-extrabold leading-[0.85] tracking-[-0.03em] uppercase mb-6 md:mb-8">
            {content.hero.headline}
          </h1>

          <div className="max-w-3xl">
            <p className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-gray-600 mb-8 md:mb-10">
              {content.hero.subheadline}
            </p>

            {/* Dual CTA for different commitment levels */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#ff0066] text-white py-4 px-8 md:px-10 font-extrabold text-sm tracking-[0.1em] uppercase hover:bg-black transition-colors">
                {content.hero.cta}
              </button>
              <button className="border-2 border-black text-black py-4 px-8 md:px-10 font-extrabold text-sm tracking-[0.1em] uppercase hover:bg-black hover:text-white transition-colors">
                {content.hero.secondaryCta}
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 md:mt-24 flex items-center gap-4 text-gray-400">
            <div className="w-8 h-[1px] bg-gray-300" />
            <span className="text-xs tracking-[0.2em] uppercase">Scroll to see proof</span>
            <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center animate-bounce">
              ↓
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-6 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#ff0066] rounded-full animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-[0.1em]">{content.urgency.headline}</span>
          </div>
          <p className="text-sm text-gray-300 text-center md:text-right">{content.urgency.text}</p>
          <span className="text-xs text-gray-500">{content.urgency.updateDate}</span>
        </div>
      </section>

      {/* Social Proof Bar - Moved up for trust */}
      <section className="py-8 md:py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
              {content.socialProof.headline}
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {content.socialProof.logos.map((logo, i) => (
                <span key={i} className="text-sm md:text-base font-medium text-gray-400">
                  {logo}
                </span>
              ))}
            </div>
            <p className="text-sm font-bold text-black">
              {content.socialProof.metric}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial - Hero testimonial for immediate social proof */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <div className="relative">
            <span className="text-[80px] md:text-[150px] font-extrabold leading-none text-gray-200 absolute -top-8 md:-top-16 left-1/2 -translate-x-1/2">
              &ldquo;
            </span>
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight relative z-10 pt-8">
              {content.testimonials.find(t => 'featured' in t && t.featured)?.quote}
            </blockquote>
            <div className="mt-8">
              <div className="text-sm font-extrabold uppercase tracking-[0.2em]">
                {content.testimonials.find(t => 'featured' in t && t.featured)?.author}
              </div>
              <div className="text-[#ff0066] text-sm mt-1">
                {content.testimonials.find(t => 'featured' in t && t.featured)?.role}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For - Audience qualification */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold leading-[0.9] tracking-[-0.02em] uppercase mb-12 md:mb-16 text-center">
            {content.whoThisIsFor.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {content.whoThisIsFor.profiles.map((profile, i) => (
              <div key={i} className="text-center p-6 border border-gray-200 hover:border-[#ff0066] transition-colors">
                <h3 className="text-base font-extrabold uppercase tracking-[0.05em] mb-3">{profile.title}</h3>
                <p className="text-sm text-gray-600">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section - Story sells */}
      <section className="py-16 md:py-32 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-[#ff0066] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Case Study
          </p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[64px] font-extrabold leading-[0.9] tracking-[-0.02em] uppercase mb-4">
            {content.caseStudy.headline}
          </h2>
          <p className="text-lg text-gray-400 mb-12 md:mb-16">{content.caseStudy.company}</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            {content.caseStudy.timeline.map((item, i) => (
              <div key={i} className="border-l-2 border-[#ff0066] pl-6">
                <div className="text-[#ff0066] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  {item.day}
                </div>
                <p className="text-base text-gray-300">{item.event}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-extrabold uppercase tracking-[-0.01em] mb-6">
              {content.caseStudy.outcome}
            </p>
            <button className="bg-[#ff0066] text-white py-4 px-10 font-extrabold text-sm tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-colors">
              {content.caseStudy.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Stats - With proper context */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-[#ff0066] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            {content.statsHeadline}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
            {content.stats.map((stat, i) => (
              <div key={i} className="border-t-2 border-black pt-6 md:pt-8">
                <div className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] font-extrabold leading-none tracking-[-0.02em]">
                  {stat.number}
                </div>
                <div className="text-sm font-medium tracking-[0.1em] uppercase mt-4 text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-8 md:mt-12">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works - Parallel structure */}
      <section className="py-16 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-extrabold leading-[0.9] tracking-[-0.02em] uppercase mb-4">
            {content.howItWorks.headline}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mb-12 md:mb-20 max-w-xl">
            {content.howItWorks.subheadline}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="bg-white p-8 md:p-10 border border-gray-200 hover:border-[#ff0066] transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-[32px] md:text-[40px] font-extrabold leading-none text-[#ff0066]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-[-0.01em] pt-2">
                    {step.title}
                  </h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Visual table format */}
      <section className="py-16 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-extrabold leading-[0.9] tracking-[-0.02em] uppercase mb-4">
            {content.comparison.headline}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mb-10 md:mb-16">{content.comparison.subheadline}</p>

          <div className="space-y-4 md:space-y-6">
            <div className="hidden md:grid grid-cols-2 gap-8 pb-4 border-b border-gray-200">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Traditional Tools</span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ff0066]">DarkWebIQ</span>
            </div>
            {content.comparison.capabilitiesEnhanced.map((cap, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-4 md:py-6 border-b border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="text-red-400 text-xl">✗</span>
                  <span className="text-base text-gray-500">{cap.theirs}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#ff0066] text-xl">✓</span>
                  <span className="text-base font-medium">{cap.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions/Business Impact */}
      <section className="py-16 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-extrabold leading-[0.9] tracking-[-0.02em] uppercase mb-4">
            {content.solutions.headline}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 md:mb-20 max-w-xl">
            {content.solutions.subheadline}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="border-t border-white/20 pt-6 md:pt-8">
                <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-[-0.01em] mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Assessment Offer - Reciprocity */}
      <section className="py-16 md:py-24 bg-[#ff0066] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold leading-[0.9] tracking-[-0.02em] uppercase mb-4">
            {content.riskCalculator.headline}
          </h2>
          <p className="text-lg md:text-xl mb-2 font-bold">
            {content.riskCalculator.subheadline}
          </p>
          <p className="text-base text-white/80 mb-8 max-w-2xl mx-auto">
            {content.riskCalculator.description}
          </p>
          <button className="bg-white text-[#ff0066] py-4 px-10 font-extrabold text-sm tracking-[0.1em] uppercase hover:bg-black hover:text-white transition-colors">
            {content.riskCalculator.cta}
          </button>
          <p className="text-xs text-white/60 mt-4">{content.riskCalculator.privacyNote}</p>
        </div>
      </section>

      {/* What To Expect - Process transparency */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold leading-[0.9] tracking-[-0.02em] uppercase mb-12 md:mb-16 text-center">
            {content.whatToExpect.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {content.whatToExpect.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-extrabold">{step.number}</span>
                </div>
                <h3 className="text-lg font-extrabold uppercase tracking-[0.05em] mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-12 italic">{content.whatToExpect.reassurance}</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-extrabold leading-[0.9] tracking-[-0.02em] uppercase mb-12 md:mb-20">
            What Security Leaders Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.testimonials.filter(t => !('featured' in t && t.featured)).slice(0, 5).map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-8 relative">
                <span className="text-[60px] font-extrabold leading-none text-gray-200 absolute top-4 left-6">
                  &ldquo;
                </span>
                <blockquote className="text-base md:text-lg font-medium leading-relaxed relative z-10 pt-8">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-sm font-bold uppercase tracking-[0.1em]">{testimonial.author}</div>
                  <div className="text-[#ff0066] text-xs mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community/Newsletter - Alternative conversion path */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-extrabold leading-[0.9] tracking-[-0.02em] uppercase mb-4">
            {content.community.headline}
          </h2>
          <p className="text-base text-gray-600 mb-6">{content.community.description}</p>
          <button className="bg-black text-white py-3 px-8 font-extrabold text-sm tracking-[0.1em] uppercase hover:bg-[#ff0066] transition-colors mb-4">
            {content.community.cta}
          </button>
          <p className="text-xs text-gray-500">{content.community.socialProof}</p>
        </div>
      </section>

      {/* Final CTA - With urgency */}
      <section className="py-16 md:py-32 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[70px] font-extrabold leading-[0.85] tracking-[-0.02em] uppercase mb-6">
            {content.cta.headline}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl mx-auto">
            {content.cta.subheadline}
          </p>
          <p className="text-[#ff0066] text-sm font-bold mb-10">
            {content.cta.urgencyText}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#ff0066] text-white py-5 px-12 font-extrabold text-sm tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-colors">
              {content.cta.button}
            </button>
            <button className="border-2 border-white text-white py-5 px-12 font-extrabold text-sm tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-colors">
              {content.cta.secondaryButton}
            </button>
          </div>
        </div>
      </section>

      {/* Footer - With trust badges */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6">
              {content.footer.certifications.map((cert, i) => (
                <span key={i} className="text-xs font-medium tracking-[0.1em] uppercase text-gray-500 border border-gray-200 px-3 py-1">
                  {cert}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400">{content.footer.trustedBy}</p>
            <p className="text-xs text-gray-400">© 2026 DarkWebIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
        <button className="w-full bg-[#ff0066] text-white py-4 font-extrabold text-sm tracking-[0.1em] uppercase">
          {content.hero.cta}
        </button>
      </div>
    </div>
  );
}
