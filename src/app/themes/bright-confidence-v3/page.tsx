import Link from 'next/link';
import { contentV3 as content } from '@/lib/content-v3';

export default function BrightConfidenceV3() {
  const featuredTestimonial = content.testimonials.find(t => t.featured);
  const nonFeaturedTestimonials = content.testimonials.filter(t => !t.featured);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Inter',system-ui,sans-serif]">

      {/* 1. Navigation with brand + CTA */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-[#635bff]"/>
              <div className="w-3 h-3 rounded-full bg-[#ff7847]"/>
              <div className="w-3 h-3 rounded-full bg-[#ffd93d]"/>
            </div>
            <span className="font-bold text-lg">DarkWebIQ</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-500 hover:text-[#635bff] transition-colors text-sm font-medium hidden md:block">
              ← All Themes
            </Link>
            <button className="bg-[#635bff] text-white px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-[#4f46e5] transition-colors">
              {content.hero.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section - Playful & Bold */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#635bff]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"/>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff7847]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"/>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#ffd93d]/10 rounded-full blur-3xl"/>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#635bff]/10 text-[#635bff] rounded-full text-sm font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#635bff] opacity-75"/>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#635bff]"/>
              </span>
              {content.hero.preheadline}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900">
              {content.hero.headline.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-[#635bff]' : ''}>{word} </span>
              ))}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#635bff] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4f46e5] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#635bff]/30">
                {content.hero.cta} →
              </button>
              <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors">
                {content.hero.secondaryCta}
              </button>
            </div>
          </div>

          {/* Floating cards decoration */}
          <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-96">
            <div className="relative">
              <div className="absolute top-0 right-0 w-64 h-48 bg-white rounded-3xl shadow-2xl p-6 transform rotate-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#ff7847]"/>
                  <div>
                    <div className="h-3 w-24 bg-gray-200 rounded"/>
                    <div className="h-2 w-16 bg-gray-100 rounded mt-2"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-gray-100 rounded"/>
                  <div className="h-3 w-3/4 bg-gray-100 rounded"/>
                </div>
              </div>
              <div className="absolute top-16 right-16 w-64 h-48 bg-gradient-to-br from-[#635bff] to-[#4f46e5] rounded-3xl shadow-2xl p-6 transform -rotate-3">
                <div className="text-white">
                  <div className="text-sm opacity-80">Threats Intercepted</div>
                  <div className="text-4xl font-bold mt-2">72</div>
                  <div className="text-sm opacity-80 mt-2">↑ 12% this quarter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Urgency Banner */}
      <section className="py-4 bg-gradient-to-r from-[#635bff] via-[#ff7847] to-[#ffd93d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"/>
              <span className="font-semibold">{content.urgency.headline}</span>
            </div>
            <p className="text-white/90 text-sm text-center md:text-left">{content.urgency.text}</p>
            <span className="text-white/70 text-xs">{content.urgency.updateDate}</span>
          </div>
        </div>
      </section>

      {/* 4. Social Proof Bar */}
      <section className="py-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-[#635bff] text-sm font-semibold">{content.socialProof.headline}</p>
              <p className="text-lg font-bold text-gray-900">{content.socialProof.metric}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {content.socialProof.logos.map((logo, i) => (
                <span key={i} className="text-gray-400 text-sm font-medium">{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Testimonial */}
      {featuredTestimonial && (
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#635bff]/5 via-transparent to-[#ff7847]/5"/>
          <div className="max-w-4xl mx-auto px-6 relative">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-6 h-6 text-[#ffd93d]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#635bff] to-[#ff7847] flex items-center justify-center text-white text-xl font-bold">
                  {featuredTestimonial.author.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">{featuredTestimonial.author}</div>
                  <div className="text-sm text-[#635bff]">{featuredTestimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Who This Is For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#ff7847] font-semibold">Perfect for you</span>
            <h2 className="text-4xl font-bold mt-2">{content.whoThisIsFor.headline}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.whoThisIsFor.profiles.map((profile, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  i === 0 ? 'bg-[#635bff]/10' :
                  i === 1 ? 'bg-[#ff7847]/10' :
                  i === 2 ? 'bg-[#ffd93d]/10' :
                  'bg-green-100'
                }`}>
                  <div className={`w-7 h-7 rounded-lg ${
                    i === 0 ? 'bg-[#635bff]' :
                    i === 1 ? 'bg-[#ff7847]' :
                    i === 2 ? 'bg-[#ffd93d]' :
                    'bg-green-500'
                  }`}/>
                </div>
                <h3 className="text-xl font-bold mb-3">{profile.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Case Study with Timeline */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#635bff] font-semibold">Success Story</span>
            <h2 className="text-4xl font-bold mt-2">{content.caseStudy.headline}</h2>
            <p className="text-gray-500 mt-4">{content.caseStudy.company}</p>
          </div>

          <div className="relative">
            {content.caseStudy.timeline.map((item, i) => (
              <div key={i} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg ${
                    i % 3 === 0 ? 'bg-[#635bff] shadow-[#635bff]/30' :
                    i % 3 === 1 ? 'bg-[#ff7847] shadow-[#ff7847]/30' :
                    'bg-[#ffd93d] text-gray-900 shadow-[#ffd93d]/30'
                  }`}>
                    {i + 1}
                  </div>
                  {i < content.caseStudy.timeline.length - 1 && (
                    <div className="flex-1 w-0.5 bg-gray-200 mt-4"/>
                  )}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <span className={`inline-block text-sm font-bold px-3 py-1 rounded-full mb-3 ${
                    i % 3 === 0 ? 'bg-[#635bff]/10 text-[#635bff]' :
                    i % 3 === 1 ? 'bg-[#ff7847]/10 text-[#ff7847]' :
                    'bg-[#ffd93d]/20 text-[#b8940d]'
                  }`}>
                    {item.day}
                  </span>
                  <p className="text-gray-600 leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#635bff] to-[#ff7847] rounded-3xl p-8 text-center text-white">
            <p className="text-2xl font-bold mb-6">{content.caseStudy.outcome}</p>
            <button className="bg-white text-[#635bff] px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105">
              {content.caseStudy.cta} →
            </button>
          </div>
        </div>
      </section>

      {/* 8. Stats Section - Colorful Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#635bff] font-semibold">The numbers speak for themselves</span>
            <h2 className="text-3xl font-bold mt-2">{content.statsHeadline}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.stats.map((stat, i) => (
              <div key={i} className={`p-8 rounded-3xl text-white ${
                i === 0 ? 'bg-gradient-to-br from-[#635bff] to-[#4f46e5]' :
                i === 1 ? 'bg-gradient-to-br from-[#ff7847] to-[#e5633a]' :
                'bg-gradient-to-br from-[#ffd93d] to-[#f5c427] text-gray-900'
              }`}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className={`text-lg ${i === 2 ? 'text-gray-700' : 'text-white/80'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">{content.statsFootnote}</p>
        </div>
      </section>

      {/* 9. How It Works - Fun Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#ff7847] font-semibold">How it works</span>
            <h2 className="text-4xl font-bold mt-2">{content.howItWorks.headline}</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{content.howItWorks.subheadline}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex gap-6 mb-8 group">
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 transition-transform ${
                    i % 3 === 0 ? 'bg-[#635bff] shadow-[#635bff]/30' :
                    i % 3 === 1 ? 'bg-[#ff7847] shadow-[#ff7847]/30' :
                    'bg-[#ffd93d] text-gray-900 shadow-[#ffd93d]/30'
                  }`}>
                    {i + 1}
                  </div>
                  {i < content.howItWorks.steps.length - 1 && (
                    <div className="flex-1 w-0.5 bg-gray-200 mt-4"/>
                  )}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Comparison - Theirs vs Ours */}
      <section className="py-20 bg-[#635bff]/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#ff7847] font-semibold">Why DarkWebIQ</span>
            <h2 className="text-4xl font-bold mt-2">{content.comparison.headline}</h2>
            <p className="text-gray-600 mt-4">{content.comparison.subheadline}</p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            {/* Header */}
            <div className="grid grid-cols-2">
              <div className="p-6 bg-gray-100 text-center">
                <span className="text-gray-500 font-semibold">Traditional Tools</span>
              </div>
              <div className="p-6 bg-[#635bff] text-center">
                <span className="text-white font-semibold">DarkWebIQ</span>
              </div>
            </div>
            {/* Rows */}
            {content.comparison.capabilitiesEnhanced.map((cap, i) => (
              <div key={i} className={`grid grid-cols-2 ${i !== content.comparison.capabilitiesEnhanced.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <div className="p-6 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-500 text-sm">{cap.theirs}</span>
                </div>
                <div className="p-6 flex items-start gap-3 bg-[#635bff]/5">
                  <div className="w-6 h-6 rounded-full bg-[#635bff] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-900 text-sm font-medium">{cap.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Solutions - Playful Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#635bff] font-semibold">Solutions for everyone</span>
            <h2 className="text-4xl font-bold mt-2">{content.solutions.headline}</h2>
            <p className="text-gray-600 mt-4">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  i === 0 ? 'bg-[#635bff]/10' :
                  i === 1 ? 'bg-[#ff7847]/10' :
                  i === 2 ? 'bg-[#ffd93d]/10' :
                  'bg-green-100'
                }`}>
                  <div className={`w-8 h-8 rounded-lg ${
                    i === 0 ? 'bg-[#635bff]' :
                    i === 1 ? 'bg-[#ff7847]' :
                    i === 2 ? 'bg-[#ffd93d]' :
                    'bg-green-500'
                  }`}/>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#635bff] transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Risk Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#635bff] via-[#ff7847] to-[#ffd93d] rounded-3xl p-1">
            <div className="bg-white rounded-[22px] p-12 text-center">
              <span className="text-[#ff7847] font-semibold">{content.riskCalculator.subheadline}</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">{content.riskCalculator.headline}</h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">{content.riskCalculator.description}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <input
                  type="text"
                  placeholder="yourdomain.com"
                  className="px-6 py-4 border border-gray-200 rounded-full text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#635bff] w-full sm:w-64"
                />
                <button className="bg-[#635bff] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4f46e5] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#635bff]/30 whitespace-nowrap">
                  {content.riskCalculator.cta} →
                </button>
              </div>
              <p className="text-xs text-gray-400">{content.riskCalculator.privacyNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What To Expect */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#635bff] font-semibold">Your Journey</span>
            <h2 className="text-4xl font-bold mt-2">{content.whatToExpect.headline}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.whatToExpect.steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold ${
                  i === 0 ? 'bg-[#635bff]' :
                  i === 1 ? 'bg-[#ff7847]' :
                  'bg-[#ffd93d] text-gray-900'
                }`}>
                  {step.number}
                </div>
                {i < content.whatToExpect.steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gray-200"/>
                )}
                <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-[#635bff] font-medium">{content.whatToExpect.reassurance}</p>
        </div>
      </section>

      {/* 15. Testimonials - Colorful Quotes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#635bff] font-semibold">Loved by security teams</span>
            <h2 className="text-4xl font-bold mt-2">What our customers say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonFeaturedTestimonials.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className={`w-5 h-5 ${
                      i % 3 === 0 ? 'text-[#635bff]' :
                      i % 3 === 1 ? 'text-[#ff7847]' :
                      'text-[#ffd93d]'
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                    i % 3 === 0 ? 'bg-[#635bff]' :
                    i % 3 === 1 ? 'bg-[#ff7847]' :
                    'bg-[#ffd93d] text-gray-900'
                  }`}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Community/Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{content.community.headline}</h2>
          <p className="text-gray-600 mb-8">{content.community.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 border border-gray-200 rounded-full text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#635bff] w-full sm:w-64"
            />
            <button className="border-2 border-[#635bff] text-[#635bff] px-8 py-4 rounded-full font-semibold hover:bg-[#635bff] hover:text-white transition-colors whitespace-nowrap">
              {content.community.cta}
            </button>
          </div>
          <p className="text-xs text-gray-400">{content.community.socialProof}</p>
        </div>
      </section>

      {/* 17. CTA - Bold & Playful */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#635bff] via-[#ff7847] to-[#ffd93d] rounded-3xl p-1">
            <div className="bg-white rounded-[22px] p-12 lg:p-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">{content.cta.headline}</h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">{content.cta.subheadline}</p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <button className="bg-[#635bff] text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#4f46e5] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#635bff]/30">
                  {content.cta.button} →
                </button>
                <button className="bg-gray-100 text-gray-700 px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors">
                  {content.cta.secondaryButton}
                </button>
              </div>
              <p className="text-[#ff7847] font-medium">{content.cta.urgencyText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 18. Footer with certifications */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <p className="text-gray-500 text-sm">{content.footer.trustedBy}</p>
            <div className="flex flex-wrap justify-center gap-6">
              {content.footer.certifications.map((cert, i) => (
                <span key={i} className="text-gray-400 text-xs border border-gray-200 px-4 py-2 rounded-full">{cert}</span>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>DarkWebIQ — Bright Confidence V3 Theme Preview</p>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-[#635bff]"/>
              <div className="w-3 h-3 rounded-full bg-[#ff7847]"/>
              <div className="w-3 h-3 rounded-full bg-[#ffd93d]"/>
            </div>
          </div>
        </div>
      </footer>

      {/* 19. Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-gray-100 p-4 md:hidden">
        <button className="w-full bg-[#635bff] text-white py-4 rounded-full font-semibold hover:bg-[#4f46e5] transition-colors">
          {content.hero.cta} →
        </button>
      </div>

      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-20 md:hidden"/>
    </div>
  );
}
