import Link from 'next/link';
import { forensicCleanroomContent as content } from '@/lib/content/forensic-cleanroom';

export default function ForensicCleanroomV2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 font-['Inter',system-ui,sans-serif]">
      {/* Soft gradient orbs background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"/>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"/>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl"/>
      </div>

      {/* Navigation - Frosted Glass */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-4 mt-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg shadow-gray-200/50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-teal-600 hover:text-teal-700 transition-colors text-sm font-medium">
              ← All Themes
            </Link>
            <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">Forensic Cleanroom V2</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Clean and Airy */}
      <section className="min-h-screen flex items-center pt-24 relative">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"/>
                Active Protection
              </div>
              <h1 className="text-5xl lg:text-6xl font-semibold leading-tight text-gray-900 mb-6">
                {content.hero.headline}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                {content.hero.subheadline}
              </p>
              <button className="group relative px-8 py-4 bg-teal-500 text-white rounded-2xl font-medium hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:-translate-y-0.5">
                {content.hero.cta}
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Glassmorphism Card Stack */}
            <div className="relative h-[500px] hidden lg:block">
              <div className="absolute top-0 right-0 w-72 h-80 bg-white/50 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl shadow-gray-200/50 p-8 transform rotate-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 mb-6"/>
                <div className="h-3 w-3/4 bg-gray-200 rounded-full mb-3"/>
                <div className="h-3 w-1/2 bg-gray-200 rounded-full"/>
              </div>
              <div className="absolute top-20 right-20 w-72 h-80 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl shadow-gray-200/50 p-8 transform -rotate-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 mb-6"/>
                <div className="h-3 w-2/3 bg-gray-200 rounded-full mb-3"/>
                <div className="h-3 w-1/3 bg-gray-200 rounded-full"/>
              </div>
              <div className="absolute top-40 right-40 w-72 h-80 bg-white/90 backdrop-blur-xl rounded-3xl border border-white shadow-2xl shadow-gray-200/50 p-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Protected Analysis</h3>
                <p className="text-sm text-gray-500">Safely examine threats in our isolated environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Floating Cards */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-600 text-sm font-medium tracking-wider uppercase">Results</span>
            <h2 className="text-3xl font-semibold mt-4 text-gray-900">{content.statsHeadline}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.stats.map((stat, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"/>
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 p-10 text-center shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-gray-400">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works - Clean Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-teal-600 text-sm font-medium tracking-wider uppercase">Process</span>
            <h2 className="text-4xl font-semibold mt-4 text-gray-900">{content.howItWorks.headline}</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">{content.howItWorks.subheadline}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-bold shadow-lg shadow-teal-500/30">
                    {i + 1}
                  </div>
                  {i < content.howItWorks.steps.length - 1 && (
                    <div className="flex-1 w-0.5 bg-gradient-to-b from-teal-300 to-transparent mt-4"/>
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-100 p-6 shadow-lg shadow-gray-100/50">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Glass Cards */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent"/>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <span className="text-teal-600 text-sm font-medium tracking-wider uppercase">Solutions</span>
            <h2 className="text-4xl font-semibold mt-4 text-gray-900">{content.solutions.headline}</h2>
            <p className="text-gray-500 mt-4">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"/>
                <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-white/60 p-10 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 text-sm font-bold ml-auto">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Clean Checklist */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-600 text-sm font-medium tracking-wider uppercase">Capabilities</span>
            <h2 className="text-4xl font-semibold mt-4 text-gray-900">{content.comparison.headline}</h2>
            <p className="text-gray-500 mt-4">{content.comparison.subheadline}</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden">
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className={`flex items-center gap-4 p-6 ${i !== content.comparison.capabilities.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-teal-50/50 transition-colors`}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/30">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Soft Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-600 text-sm font-medium tracking-wider uppercase">Testimonials</span>
            <h2 className="text-4xl font-semibold mt-4 text-gray-900">Client Feedback</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.testimonials.slice(0, 6).map((testimonial, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-100 p-8 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-teal-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Gradient Glass */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-3xl blur-2xl opacity-30"/>
            <div className="relative bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl shadow-teal-500/30">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">{content.cta.headline}</h2>
              <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">{content.cta.subheadline}</p>
              <button className="px-10 py-4 bg-white text-teal-600 rounded-2xl font-semibold hover:bg-teal-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                {content.cta.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm">
          <p>DarkWebIQ — Forensic Cleanroom V2 Theme Preview</p>
        </div>
      </footer>
    </div>
  );
}
