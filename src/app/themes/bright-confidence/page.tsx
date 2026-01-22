import Link from 'next/link';
import { content } from '@/lib/content';

export default function BrightConfidence() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Inter',system-ui,sans-serif]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#635bff] hover:text-[#4f46e5] transition-colors font-medium">
            ← All Themes
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Bright Confidence</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-[#635bff]"/>
              <div className="w-3 h-3 rounded-full bg-[#ff7847]"/>
              <div className="w-3 h-3 rounded-full bg-[#ffd93d]"/>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Playful & Bold */}
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
              Now protecting 690,000+ organizations
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900">
              {content.hero.headline.split(' ').map((word, i) => (
                <span key={i} className={i === 2 ? 'text-[#635bff]' : ''}>{word} </span>
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
                Watch Demo
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

      {/* Stats Section - Colorful Cards */}
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

      {/* How It Works - Fun Steps */}
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

      {/* Solutions - Playful Cards */}
      <section className="py-20 bg-[#635bff]/5">
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
                <button className="mt-6 text-[#635bff] font-semibold hover:underline inline-flex items-center gap-2">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Checklist */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#ff7847] font-semibold">Why DarkWebIQ</span>
            <h2 className="text-4xl font-bold mt-2">{content.comparison.headline}</h2>
            <p className="text-gray-600 mt-4">{content.comparison.subheadline}</p>
          </div>

          <div className="bg-gradient-to-br from-[#635bff] to-[#4f46e5] rounded-3xl p-8 lg:p-12">
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className={`flex items-center gap-4 py-4 ${i !== content.comparison.capabilities.length - 1 ? 'border-b border-white/20' : ''}`}>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#635bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-lg">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Colorful Quotes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#635bff] font-semibold">Loved by security teams</span>
            <h2 className="text-4xl font-bold mt-2">What our customers say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.testimonials.slice(0, 6).map((testimonial, i) => (
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

      {/* CTA - Bold & Playful */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#635bff] via-[#ff7847] to-[#ffd93d] rounded-3xl p-1">
            <div className="bg-white rounded-[22px] p-12 lg:p-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">{content.cta.headline}</h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">{content.cta.subheadline}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#635bff] text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#4f46e5] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#635bff]/30">
                  {content.cta.button} →
                </button>
                <button className="bg-gray-100 text-gray-700 px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors">
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm text-gray-500">
          <p>DarkWebIQ — Bright Confidence Theme Preview</p>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-[#635bff]"/>
            <div className="w-3 h-3 rounded-full bg-[#ff7847]"/>
            <div className="w-3 h-3 rounded-full bg-[#ffd93d]"/>
          </div>
        </div>
      </footer>
    </div>
  );
}
