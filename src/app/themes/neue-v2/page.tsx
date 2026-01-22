import Link from 'next/link';
import { contentV2 as content } from '@/lib/content-v2';

export default function NeueV2() {
  return (
    <div className="min-h-screen bg-white text-black font-['Inter',Helvetica,Arial,sans-serif]">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-black hover:text-[#ff0066] transition-colors text-xs font-normal tracking-[0.2em] uppercase">
            ← Back
          </Link>
          <span className="text-xs font-normal tracking-[0.2em] uppercase">Neue V2</span>
        </div>
      </nav>

      {/* Hero Section - Type takes up 60% of viewport */}
      <section className="min-h-screen flex flex-col justify-center px-8 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-[80px] md:text-[120px] lg:text-[140px] font-extrabold leading-[0.85] tracking-[-0.03em] uppercase mb-12">
            {content.hero.headline}
          </h1>
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl font-normal leading-relaxed text-gray-600 mb-12">
              {content.hero.subheadline}
            </p>
            <button className="bg-[#ff0066] text-white py-4 px-12 font-extrabold text-sm tracking-[0.1em] uppercase hover:bg-black transition-colors">
              {content.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Stats - Each stat gets full-width section, numbers at 200px+ */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-[#ff0066] text-xs font-normal tracking-[0.3em] uppercase mb-4">
            {content.statsHeadline}
          </p>
          <div className="space-y-24 mt-16">
            {content.stats.map((stat, i) => (
              <div key={i} className="border-t border-white/20 pt-8">
                <div className="text-[120px] md:text-[180px] lg:text-[220px] font-extrabold leading-none tracking-[-0.02em]">
                  {stat.number}
                </div>
                <div className="text-sm font-normal tracking-[0.2em] uppercase mt-4 text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-xs mt-16">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works - Huge step numbers as visual anchors */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-[60px] md:text-[80px] lg:text-[100px] font-extrabold leading-[0.9] tracking-[-0.02em] uppercase mb-8">
            {content.howItWorks.headline}
          </h2>
          <p className="text-xl text-gray-500 mb-24 max-w-xl">
            {content.howItWorks.subheadline}
          </p>

          <div className="space-y-20">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="grid grid-cols-12 gap-8 items-start">
                <div className="col-span-3 md:col-span-2">
                  <span className="text-[80px] md:text-[100px] font-extrabold leading-none text-gray-200">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="col-span-9 md:col-span-10 pt-4">
                  <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-[-0.01em] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-500 max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Two-column asymmetric layout */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-[60px] md:text-[80px] font-extrabold leading-[0.9] tracking-[-0.02em] uppercase mb-24">
            {content.solutions.headline}
          </h2>

          <div className="space-y-16">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="grid grid-cols-12 gap-8 items-start border-t border-black pt-8">
                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-xl font-extrabold uppercase tracking-[-0.01em]">
                    {item.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-[50px] md:text-[70px] font-extrabold leading-[0.9] tracking-[-0.02em] uppercase mb-8">
            {content.comparison.headline}
          </h2>
          <p className="text-xl text-gray-500 mb-16">{content.comparison.subheadline}</p>

          <div className="space-y-6">
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className="flex items-center gap-6 py-4 border-b border-gray-200">
                <div className="w-3 h-3 bg-[#ff0066] flex-shrink-0" />
                <span className="text-lg font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Single testimonial per view style, massive quotes */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-[60px] md:text-[80px] font-extrabold leading-[0.9] tracking-[-0.02em] uppercase mb-24">
            What They Say
          </h2>

          <div className="space-y-32">
            {content.testimonials.slice(0, 3).map((testimonial, i) => (
              <div key={i} className="relative">
                <span className="text-[200px] md:text-[300px] font-extrabold leading-none text-white/5 absolute -top-20 -left-4">
                  &ldquo;
                </span>
                <blockquote className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight relative z-10">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-12">
                  <div className="text-sm font-extrabold uppercase tracking-[0.2em]">{testimonial.author}</div>
                  <div className="text-[#ff0066] text-sm mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Black background, white text, pink button - stark inversion */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-[50px] md:text-[70px] lg:text-[90px] font-extrabold leading-[0.85] tracking-[-0.02em] uppercase mb-8">
            {content.cta.headline}
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            {content.cta.subheadline}
          </p>
          <button className="bg-[#ff0066] text-white py-5 px-16 font-extrabold text-sm tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-colors">
            {content.cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 text-center text-xs font-normal tracking-[0.2em] uppercase text-gray-400">
          <p>DarkWebIQ — Neue V2 Theme Preview</p>
        </div>
      </footer>
    </div>
  );
}
