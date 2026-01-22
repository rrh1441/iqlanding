import Link from 'next/link';
import { content } from '@/lib/content';

export default function Editorial() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a1a] font-['Inter',system-ui,sans-serif]">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <Link href="/" className="text-[#1a1a1a] hover:text-[#1e4d3d] transition-colors text-sm tracking-wide">
            ← All Themes
          </Link>
          <span className="text-sm tracking-wide font-medium">Editorial</span>
        </div>
      </nav>

      {/* Hero Section - Two-column split */}
      <section className="pt-32 pb-24 border-b border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-[#1e4d3d] text-sm font-medium tracking-wide uppercase mb-6">
                Threat Intelligence
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Georgia',serif] leading-[1.1] tracking-[-0.02em]">
                {content.hero.headline}
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-[#1a1a1a]/70 mb-8">
                {content.hero.subheadline}
              </p>
              <button className="bg-[#1e4d3d] text-white py-4 px-10 font-medium text-sm tracking-wide hover:bg-[#1a1a1a] transition-colors">
                {content.hero.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Horizontal ticker-style row */}
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

      {/* How It Works - Magazine spread, alternating sides */}
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

      {/* Solutions - 2x2 grid with varied heights, editorial feel */}
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

      {/* Comparison */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Georgia',serif] leading-tight mb-4">
              {content.comparison.headline}
            </h2>
            <p className="text-lg text-[#1a1a1a]/60">{content.comparison.subheadline}</p>
          </div>

          <div className="border border-[#1a1a1a]/20">
            {content.comparison.capabilities.map((cap, i) => (
              <div
                key={i}
                className={`flex items-center gap-6 p-6 ${i !== content.comparison.capabilities.length - 1 ? 'border-b border-[#1a1a1a]/20' : ''}`}
              >
                <div className="w-5 h-5 rounded-full bg-[#1e4d3d] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Pull-quote style */}
      <section className="py-24 bg-[#f5f3f0]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-['Georgia',serif] leading-tight mb-16 text-center">
            What Leaders Say
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {content.testimonials.slice(0, 4).map((testimonial, i) => (
              <div key={i} className="relative">
                <span className="text-[120px] font-['Georgia',serif] leading-none text-[#1e4d3d]/10 absolute -top-8 -left-4">
                  &ldquo;
                </span>
                <blockquote className="text-xl md:text-2xl font-['Georgia',serif] leading-relaxed relative z-10 mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="border-t border-[#1a1a1a]/20 pt-4">
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-[#1a1a1a]/60">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Centered, framed with subtle border */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-8">
          <div className="border border-[#1a1a1a]/20 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Georgia',serif] leading-tight mb-6">
              {content.cta.headline}
            </h2>
            <p className="text-lg text-[#1a1a1a]/60 mb-10 max-w-xl mx-auto">
              {content.cta.subheadline}
            </p>
            <button className="bg-[#1e4d3d] text-white py-4 px-12 font-medium text-sm tracking-wide hover:bg-[#1a1a1a] transition-colors">
              {content.cta.button}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto px-8 text-center text-sm text-[#1a1a1a]/40">
          <p>DarkWebIQ — Editorial Theme Preview</p>
        </div>
      </footer>
    </div>
  );
}
