import Link from 'next/link';
import { contentV3 as content } from '@/lib/content-v3';

export default function PublicHealthV3() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-['system-ui','-apple-system','Segoe_UI',Roboto,sans-serif]">
      {/* Alert Banner */}
      <div className="bg-amber-500 text-amber-950 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm font-medium">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{content.urgency.headline}: {content.urgency.text}</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#1a5f4a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
            DarkWebIQ
          </Link>
          <div className="flex items-center gap-6">
            <span className="hidden md:block text-xs text-white/60">{content.footer.trustedBy}</span>
            <button className="bg-white text-[#1a5f4a] px-4 py-1.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
              {content.hero.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#1a5f4a]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"/>
                {content.hero.preheadline}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
                {content.hero.headline}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {content.hero.subheadline}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#1a5f4a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#154d3c] transition-colors">
                  {content.hero.cta}
                </button>
                <button className="border-2 border-[#1a5f4a] text-[#1a5f4a] px-8 py-4 rounded-lg font-semibold hover:bg-[#1a5f4a]/5 transition-colors">
                  {content.hero.secondaryCta}
                </button>
              </div>
            </div>

            {/* Threat Map Visualization */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-700">Active Threat Distribution</h3>
                <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">Live Data</span>
              </div>
              <div className="aspect-video bg-white rounded-lg border border-gray-200 flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 400 250" className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="400" height="250" fill="url(#grid)"/>
                  <circle cx="100" cy="80" r="40" fill="#ef4444" fillOpacity="0.3"/>
                  <circle cx="100" cy="80" r="20" fill="#ef4444" fillOpacity="0.5"/>
                  <circle cx="250" cy="120" r="50" fill="#f59e0b" fillOpacity="0.3"/>
                  <circle cx="250" cy="120" r="25" fill="#f59e0b" fillOpacity="0.5"/>
                  <circle cx="320" cy="180" r="30" fill="#ef4444" fillOpacity="0.3"/>
                  <circle cx="320" cy="180" r="15" fill="#ef4444" fillOpacity="0.5"/>
                  <circle cx="180" cy="200" r="35" fill="#22c55e" fillOpacity="0.3"/>
                  <circle cx="180" cy="200" r="17" fill="#22c55e" fillOpacity="0.5"/>
                </svg>
                <div className="absolute bottom-4 left-4 flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-red-500 rounded-full"/>
                    <span>High</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-amber-500 rounded-full"/>
                    <span>Medium</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-green-500 rounded-full"/>
                    <span>Protected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xs tracking-wider uppercase text-gray-500 font-semibold">{content.socialProof.headline}</span>
          <div className="flex flex-wrap justify-center gap-8">
            {content.socialProof.logos.map((logo, i) => (
              <span key={i} className="text-sm text-gray-400">{logo}</span>
            ))}
          </div>
          <span className="text-sm font-semibold text-[#1a5f4a]">{content.socialProof.metric}</span>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-sm">
            <svg className="w-10 h-10 text-[#1a5f4a]/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="text-xl lg:text-2xl leading-relaxed mb-6 text-gray-800">
              {content.testimonials.find(t => 'featured' in t && t.featured)?.quote}
            </blockquote>
            <div className="font-semibold text-gray-900">{content.testimonials.find(t => 'featured' in t && t.featured)?.author}</div>
            <div className="text-sm text-[#1a5f4a]">{content.testimonials.find(t => 'featured' in t && t.featured)?.role}</div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#1a5f4a] text-sm font-semibold tracking-wider uppercase">Target Profiles</span>
            <h2 className="text-3xl font-bold mt-3 text-gray-900">{content.whoThisIsFor.headline}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.whoThisIsFor.profiles.map((profile, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-[#1a5f4a] mb-3">{profile.title}</h3>
                <p className="text-sm text-gray-600">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-[#1a5f4a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-white/60 text-sm font-semibold tracking-wider uppercase">Case Study</span>
          <h2 className="text-3xl font-bold mt-3 mb-2">{content.caseStudy.headline}</h2>
          <p className="text-white/60 mb-12">{content.caseStudy.company}</p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {content.caseStudy.timeline.map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6">
                <div className="text-white/60 text-xs font-semibold tracking-wider uppercase mb-2">{item.day}</div>
                <p className="text-sm text-white/90">{item.event}</p>
              </div>
            ))}
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-8 text-center">
            <p className="text-xl font-semibold mb-6">{content.caseStudy.outcome}</p>
            <button className="bg-[#1a5f4a] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#154d3c] transition-colors">
              {content.caseStudy.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[#1a5f4a] text-sm font-semibold tracking-wider uppercase">Survey Data</span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2">{content.statsHeadline}</h2>
            </div>
            <div className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
              Last updated: 2 min ago
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    i === 0 ? 'bg-red-100 text-red-600' :
                    i === 1 ? 'bg-green-100 text-green-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {i === 0 ? (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    ) : i === 1 ? (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-green-600 font-medium">↑ +12%</span>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-6">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#1a5f4a] text-sm font-semibold tracking-wider uppercase">Response Protocol</span>
            <h2 className="text-3xl font-bold mt-3 text-gray-900">{content.howItWorks.headline}</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">{content.howItWorks.subheadline}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                    i < 2 ? 'bg-red-500' : i < 4 ? 'bg-amber-500' : 'bg-green-500'
                  }`}>
                    {i + 1}
                  </div>
                  {i < content.howItWorks.steps.length - 1 && (
                    <div className="flex-1 w-0.5 bg-gray-200 mt-2"/>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className={`px-3 py-1 rounded text-xs font-medium inline-block mb-2 ${
                    i < 2 ? 'bg-red-100 text-red-700' : i < 4 ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {i < 2 ? 'Detection Phase' : i < 4 ? 'Containment Phase' : 'Resolution Phase'}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#1a5f4a] text-sm font-semibold tracking-wider uppercase">Coverage Assessment</span>
            <h2 className="text-3xl font-bold mt-3 text-gray-900">{content.comparison.headline}</h2>
            <p className="text-gray-500 mt-3">{content.comparison.subheadline}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="hidden md:grid grid-cols-2 border-b border-gray-200">
              <div className="p-4 text-sm font-semibold text-gray-500 border-r border-gray-200">Traditional Tools</div>
              <div className="p-4 text-sm font-semibold text-[#1a5f4a]">DarkWebIQ</div>
            </div>
            {content.comparison.capabilitiesEnhanced.map((cap, i) => (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-2 ${i !== content.comparison.capabilitiesEnhanced.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50 transition-colors`}>
                <div className="px-6 py-5 flex items-start gap-4 md:border-r border-gray-100 bg-gray-50/50">
                  <span className="text-red-500">✗</span>
                  <span className="text-gray-500">{cap.theirs}</span>
                </div>
                <div className="px-6 py-5 flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{cap.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#1a5f4a] text-sm font-semibold tracking-wider uppercase">Solutions</span>
            <h2 className="text-3xl font-bold mt-3 text-gray-900">{content.solutions.headline}</h2>
            <p className="text-gray-500 mt-3">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    i === 0 ? 'bg-red-100' :
                    i === 1 ? 'bg-amber-100' :
                    i === 2 ? 'bg-blue-100' :
                    'bg-[#1a5f4a]/10'
                  }`}>
                    <svg className={`w-7 h-7 ${
                      i === 0 ? 'text-red-600' :
                      i === 1 ? 'text-amber-600' :
                      i === 2 ? 'text-blue-600' :
                      'text-[#1a5f4a]'
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Assessment */}
      <section className="py-16 bg-[#1a5f4a]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{content.riskCalculator.headline}</h2>
          <p className="text-lg text-white/80 mb-2">{content.riskCalculator.subheadline}</p>
          <p className="text-white/60 mb-8">{content.riskCalculator.description}</p>
          <button className="bg-white text-[#1a5f4a] px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            {content.riskCalculator.cta}
          </button>
          <p className="text-xs text-white/50 mt-4">{content.riskCalculator.privacyNote}</p>
        </div>
      </section>

      {/* What To Expect */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#1a5f4a] text-sm font-semibold tracking-wider uppercase">Process</span>
            <h2 className="text-3xl font-bold mt-3 text-gray-900">{content.whatToExpect.headline}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.whatToExpect.steps.map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-[#1a5f4a] text-white flex items-center justify-center mx-auto mb-6 rounded-xl text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-12 italic">{content.whatToExpect.reassurance}</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#1a5f4a] text-sm font-semibold tracking-wider uppercase">Success Stories</span>
            <h2 className="text-3xl font-bold mt-3 text-gray-900">Recovery Reports</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.testimonials.filter(t => !('featured' in t && t.featured)).slice(0, 5).map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-[#1a5f4a]">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{content.community.headline}</h2>
            <p className="text-gray-600 mb-6">{content.community.description}</p>
            <button className="bg-[#1a5f4a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#154d3c] transition-colors">
              {content.community.cta}
            </button>
            <p className="text-xs text-gray-500 mt-4">{content.community.socialProof}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a5f4a]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Early Detection Saves Organizations
          </div>
          <h2 className="text-4xl font-bold mb-6">{content.cta.headline}</h2>
          <p className="text-xl text-white/80 mb-4 max-w-2xl mx-auto">{content.cta.subheadline}</p>
          <p className="text-sm text-white/60 mb-10">{content.cta.urgencyText}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#1a5f4a] px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              {content.cta.button}
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              {content.cta.secondaryButton}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              {content.footer.certifications.map((cert, i) => (
                <span key={i} className="text-xs text-gray-400 border border-gray-700 px-3 py-1 rounded">{cert}</span>
              ))}
            </div>
            <p className="text-sm text-gray-400">{content.footer.trustedBy}</p>
            <p className="text-xs text-gray-500">© 2026 DarkWebIQ</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
        <button className="w-full bg-[#1a5f4a] text-white py-4 rounded-lg font-semibold">
          {content.hero.cta}
        </button>
      </div>
    </div>
  );
}
