import Link from 'next/link';
import { contentV3 as content } from '@/lib/content-v3';

export default function SwissIntelligenceV3() {
  return (
    <div className="min-h-screen bg-white text-black font-['Helvetica_Neue',Helvetica,Arial,sans-serif]">

      {/* Navigation */}
      <nav className="bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-black hover:text-[#ff4400] transition-colors text-sm font-bold uppercase tracking-wider">
            DarkWebIQ
          </Link>
          <div className="flex items-center gap-6">
            <span className="hidden md:block text-xs text-gray-500">{content.footer.trustedBy}</span>
            <button className="bg-black text-white py-3 px-6 font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#ff4400] transition-colors">
              {content.hero.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#ff4400] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            {content.hero.preheadline}
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8 max-w-4xl">
            {content.hero.headline}
          </h1>
          <p className="text-xl leading-relaxed text-gray-700 mb-10 max-w-2xl">
            {content.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white py-4 px-10 font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#ff4400] transition-colors">
              {content.hero.cta}
            </button>
            <button className="border-2 border-black text-black py-4 px-10 font-bold text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors">
              {content.hero.secondaryCta}
            </button>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-4 bg-[#ff4400] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest">{content.urgency.headline}</span>
          </div>
          <p className="text-sm">{content.urgency.text}</p>
          <span className="text-xs opacity-80">{content.urgency.updateDate}</span>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-bold">{content.socialProof.headline}</span>
          <div className="flex flex-wrap justify-center gap-8">
            {content.socialProof.logos.map((logo, i) => (
              <span key={i} className="text-sm text-gray-400 font-bold">{logo}</span>
            ))}
          </div>
          <span className="text-sm font-bold text-[#ff4400]">{content.socialProof.metric}</span>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[#ff4400] text-8xl font-bold leading-none mb-6">&ldquo;</div>
          <blockquote className="text-2xl lg:text-3xl font-bold leading-relaxed mb-8">
            {content.testimonials.find(t => 'featured' in t && t.featured)?.quote}
          </blockquote>
          <div className="font-bold">{content.testimonials.find(t => 'featured' in t && t.featured)?.author}</div>
          <div className="text-sm text-[#ff4400] font-bold">{content.testimonials.find(t => 'featured' in t && t.featured)?.role}</div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#ff4400] text-xs font-bold tracking-[0.3em] uppercase">Target Profiles</span>
            <h2 className="text-4xl font-bold mt-4">{content.whoThisIsFor.headline}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-black">
            {content.whoThisIsFor.profiles.map((profile, i) => (
              <div key={i} className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-bold mb-3">{profile.title}</h3>
                <p className="text-sm text-gray-600">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#ff4400] text-xs font-bold tracking-[0.3em] uppercase">Case Study</span>
          <h2 className="text-4xl font-bold mt-4 mb-2">{content.caseStudy.headline}</h2>
          <p className="text-gray-400 mb-16">{content.caseStudy.company}</p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {content.caseStudy.timeline.map((item, i) => (
              <div key={i} className="border-l-4 border-[#ff4400] pl-6">
                <div className="text-[#ff4400] text-xs font-bold tracking-widest uppercase mb-2">{item.day}</div>
                <p className="text-gray-300 text-sm">{item.event}</p>
              </div>
            ))}
          </div>

          <div className="border-4 border-[#ff4400] p-8 text-center">
            <p className="text-2xl font-bold mb-6">{content.caseStudy.outcome}</p>
            <button className="bg-[#ff4400] text-white py-4 px-10 font-bold text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">
              {content.caseStudy.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Stats - Bento Grid */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-2 border-black bg-white">
            <div className="p-8 border-b border-black">
              <span className="text-[#ff4400] text-xs font-bold tracking-[0.3em] uppercase">Survey Data</span>
              <h2 className="text-3xl font-bold mt-2">{content.statsHeadline}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {content.stats.map((stat, i) => (
                <div key={i} className={`p-12 ${i < content.stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-black' : ''}`}>
                  <div className="text-6xl lg:text-8xl font-bold tracking-tighter text-[#ff4400]">
                    {stat.number}
                  </div>
                  <div className="text-sm font-bold tracking-[0.2em] uppercase mt-4 text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 text-gray-500 text-xs border-t border-black">
              {content.statsFootnote}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-4">
              <span className="text-[#ff4400] text-xs font-bold tracking-[0.3em] uppercase">Process</span>
              <h2 className="text-5xl font-bold mt-4 leading-tight">{content.howItWorks.headline}</h2>
            </div>
            <div className="lg:col-span-8 lg:flex lg:items-end">
              <p className="text-xl text-gray-600">{content.howItWorks.subheadline}</p>
            </div>
          </div>

          <div className="border-t-4 border-black">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="grid grid-cols-12 border-b border-gray-300 group hover:bg-gray-50 transition-colors">
                <div className="col-span-2 md:col-span-1 p-6 border-r border-gray-300">
                  <span className="text-4xl font-bold text-[#ff4400]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="col-span-10 md:col-span-3 p-6 border-r border-gray-300 flex items-center">
                  <h3 className="text-lg font-bold">{step.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-8 p-6">
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Data Table */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#ff4400] text-xs font-bold tracking-[0.3em] uppercase">Capabilities</span>
            <h2 className="text-5xl font-bold mt-4">{content.comparison.headline}</h2>
            <p className="text-xl text-gray-600 mt-4">{content.comparison.subheadline}</p>
          </div>

          <div className="border-4 border-black bg-white">
            <div className="hidden md:grid grid-cols-2 border-b-2 border-black">
              <div className="p-4 text-xs font-bold tracking-widest uppercase text-gray-500 border-r border-black">Traditional Tools</div>
              <div className="p-4 text-xs font-bold tracking-widest uppercase text-[#ff4400]">DarkWebIQ</div>
            </div>
            {content.comparison.capabilitiesEnhanced.map((cap, i) => (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-2 ${i !== content.comparison.capabilitiesEnhanced.length - 1 ? 'border-b-2 border-black' : ''}`}>
                <div className="p-6 flex items-start gap-4 md:border-r border-black bg-gray-50">
                  <span className="text-red-500 font-bold">✗</span>
                  <span className="text-gray-500">{cap.theirs}</span>
                </div>
                <div className="p-6 flex items-start gap-4">
                  <span className="text-[#ff4400] font-bold">✓</span>
                  <span className="text-black font-medium">{cap.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Bento Boxes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#ff4400] text-xs font-bold tracking-[0.3em] uppercase">Solutions</span>
            <h2 className="text-5xl font-bold mt-4">{content.solutions.headline}</h2>
            <p className="text-xl text-gray-600 mt-4">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-black">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="bg-white p-12 group hover:bg-black hover:text-white transition-all duration-300">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-6xl font-bold text-gray-200 group-hover:text-gray-800 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-8 h-8 border-2 border-current transform rotate-45 group-hover:rotate-90 transition-transform"/>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-400 transition-colors">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Assessment */}
      <section className="py-20 bg-[#ff4400]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{content.riskCalculator.headline}</h2>
          <p className="text-lg mb-2">{content.riskCalculator.subheadline}</p>
          <p className="opacity-80 mb-8">{content.riskCalculator.description}</p>
          <button className="bg-black text-white py-4 px-12 font-bold text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">
            {content.riskCalculator.cta}
          </button>
          <p className="text-xs opacity-60 mt-4">{content.riskCalculator.privacyNote}</p>
        </div>
      </section>

      {/* What To Expect */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#ff4400] text-xs font-bold tracking-[0.3em] uppercase">Process</span>
            <h2 className="text-4xl font-bold mt-4">{content.whatToExpect.headline}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {content.whatToExpect.steps.map((step, i) => (
              <div key={i} className="text-center border-2 border-black p-8">
                <div className="w-16 h-16 bg-[#ff4400] text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-12 italic">{content.whatToExpect.reassurance}</p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 border-y-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-lg font-bold tracking-widest uppercase text-[#ff4400] mb-4">{content.guarantee.headline}</h3>
          <p className="text-gray-700 mb-2">{content.guarantee.text}</p>
          <p className="text-sm text-gray-500 italic">{content.guarantee.subtext}</p>
        </div>
      </section>

      {/* Testimonials - Editorial */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#ff4400] text-xs font-bold tracking-[0.3em] uppercase">Testimonials</span>
            <h2 className="text-5xl font-bold mt-4">What They Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.testimonials.filter(t => !('featured' in t && t.featured)).slice(0, 5).map((testimonial, i) => (
              <div key={i} className="border border-gray-700 p-10 flex flex-col">
                <blockquote className="text-xl leading-relaxed flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-[#ff4400] text-sm mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">{content.community.headline}</h2>
          <p className="text-gray-600 mb-6">{content.community.description}</p>
          <button className="bg-black text-white py-3 px-8 font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#ff4400] transition-colors">
            {content.community.cta}
          </button>
          <p className="text-xs text-gray-500 mt-4">{content.community.socialProof}</p>
        </div>
      </section>

      {/* CTA - Bold Statement */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#ff4400]"/>
        <div className="max-w-5xl mx-auto px-6 text-center relative text-white">
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            {content.cta.headline}
          </h2>
          <p className="text-xl opacity-80 mb-4 max-w-2xl mx-auto">
            {content.cta.subheadline}
          </p>
          <p className="text-sm mb-12">{content.cta.urgencyText}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black text-white py-5 px-16 font-bold text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">
              {content.cta.button}
            </button>
            <button className="border-2 border-white text-white py-5 px-16 font-bold text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-[#ff4400] transition-colors">
              {content.cta.secondaryButton}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              {content.footer.certifications.map((cert, i) => (
                <span key={i} className="text-xs text-gray-600 border-2 border-black px-3 py-1 font-bold">{cert}</span>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-bold">{content.footer.trustedBy}</p>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">© 2026 DarkWebIQ</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-black p-4 md:hidden z-50">
        <button className="w-full bg-[#ff4400] text-white py-4 font-bold text-sm tracking-[0.2em] uppercase">
          {content.hero.cta}
        </button>
      </div>
    </div>
  );
}
