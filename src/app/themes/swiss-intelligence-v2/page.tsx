import Link from 'next/link';
import { swissIntelligenceContent as content } from '@/lib/content/swiss-intelligence';

export default function SwissIntelligenceV2() {
  return (
    <div className="min-h-screen bg-white text-black font-['Helvetica_Neue',Helvetica,Arial,sans-serif]">
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}/>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-black hover:text-[#ff4400] transition-colors text-sm font-bold uppercase tracking-wider">
            ← All Themes
          </Link>
          <span className="text-xs font-bold tracking-[0.3em] uppercase">Swiss Intelligence V2</span>
        </div>
      </nav>

      {/* Hero Section - Massive Typography */}
      <section className="min-h-screen flex items-center pt-20 relative">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <p className="text-[#ff4400] text-sm font-bold tracking-[0.3em] uppercase mb-6">
                Intelligence Brief
              </p>
              <h1 className="text-6xl sm:text-7xl lg:text-[120px] font-bold leading-[0.85] tracking-tight mb-8">
                {content.hero.headline.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>
            </div>
            <div className="lg:col-span-4 lg:flex lg:flex-col lg:justify-end">
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                {content.hero.subheadline}
              </p>
              <button className="w-full bg-black text-white py-4 px-8 font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#ff4400] transition-colors">
                {content.hero.cta}
              </button>
            </div>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#ff4400]"/>
      </section>

      {/* Stats - Bento Grid */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-px bg-gray-800">
            <div className="col-span-12 bg-black p-8">
              <span className="text-[#ff4400] text-xs font-bold tracking-[0.3em] uppercase">Q1 Results</span>
              <h2 className="text-3xl font-bold mt-2">{content.statsHeadline}</h2>
            </div>
            {content.stats.map((stat, i) => (
              <div key={i} className="col-span-12 md:col-span-4 bg-black p-12">
                <div className="text-6xl lg:text-8xl font-bold tracking-tighter text-[#ff4400]">
                  {stat.number}
                </div>
                <div className="text-sm font-bold tracking-[0.2em] uppercase mt-4 text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
            <div className="col-span-12 bg-black p-4 text-gray-600 text-xs">
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

      {/* Solutions - Bento Boxes */}
      <section className="py-24 bg-gray-100">
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

      {/* Comparison - Data Table */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#ff4400] text-xs font-bold tracking-[0.3em] uppercase">Capabilities</span>
            <h2 className="text-5xl font-bold mt-4">{content.comparison.headline}</h2>
            <p className="text-xl text-gray-600 mt-4">{content.comparison.subheadline}</p>
          </div>

          <div className="border-4 border-black">
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className={`flex items-center gap-6 p-6 ${i !== content.comparison.capabilities.length - 1 ? 'border-b-2 border-black' : ''}`}>
                <div className="w-6 h-6 bg-[#ff4400] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Editorial */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#ff4400] text-xs font-bold tracking-[0.3em] uppercase">Testimonials</span>
            <h2 className="text-5xl font-bold mt-4">What They Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
            {content.testimonials.slice(0, 6).map((testimonial, i) => (
              <div key={i} className="bg-black p-10 flex flex-col">
                <blockquote className="text-xl leading-relaxed flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-[#ff4400] text-sm mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Bold Statement */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#ff4400]"/>
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            {content.cta.headline}
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            {content.cta.subheadline}
          </p>
          <button className="bg-black text-white py-5 px-16 font-bold text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">
            {content.cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm font-bold tracking-wider uppercase">
          <p>DarkWebIQ — Swiss Intelligence V2 Theme Preview</p>
        </div>
      </footer>
    </div>
  );
}
