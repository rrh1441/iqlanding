import Link from 'next/link';
import { contentV2 as content } from '@/lib/content-v2';

export default function NatureDocumentaryV2() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#2d3a2d] font-['system-ui','-apple-system',sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2d3a2d] text-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#d97706] hover:text-[#f5f0e8] transition-colors text-sm tracking-wide">
            ← All Themes
          </Link>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-[#d97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-xs tracking-[0.3em] uppercase">Nature Documentary V2</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Cinematic */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Background imagery suggestion */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d3a2d] via-[#3d4f3d] to-[#2d3a2d]"/>

        {/* Organic shapes overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 left-0 w-full h-1/2 text-[#f5f0e8]/5" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path d="M0 600 Q300 400 600 500 T1200 300 L1200 600 Z" fill="currentColor"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-0.5 bg-[#d97706]"/>
              <span className="text-[#d97706] text-sm tracking-[0.3em] uppercase font-medium">Protecting the Herd</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light text-[#f5f0e8] leading-tight mb-8">
              {content.hero.headline}
            </h1>
            <p className="text-xl text-[#f5f0e8]/70 leading-relaxed mb-10 max-w-2xl">
              {content.hero.subheadline}
            </p>
            <button className="group bg-[#d97706] text-white px-10 py-5 font-medium tracking-wide hover:bg-[#b45309] transition-colors inline-flex items-center gap-3">
              {content.hero.cta}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#f5f0e8]/50 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase">Discover</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats - Field Data */}
      <section className="py-24 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d97706] text-sm tracking-[0.3em] uppercase font-medium">Field Research</span>
            <h2 className="text-3xl font-light mt-4 text-[#2d3a2d]">{content.statsHeadline}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.stats.map((stat, i) => (
              <div key={i} className="text-center relative">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-[#2d3a2d]/10 flex items-center justify-center bg-white">
                  <span className="text-4xl font-light text-[#2d3a2d]">{stat.number}</span>
                </div>
                <div className="text-sm text-[#2d3a2d]/60 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-[#2d3a2d]/40">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works - Expedition Guide */}
      <section className="py-24 bg-[#2d3a2d] text-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-[#d97706] text-sm tracking-[0.3em] uppercase font-medium">The Hunt</span>
              <h2 className="text-4xl font-light mt-4 mb-6">{content.howItWorks.headline}</h2>
              <p className="text-[#f5f0e8]/60 leading-relaxed">{content.howItWorks.subheadline}</p>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-8">
                {content.howItWorks.steps.map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-[#d97706] flex items-center justify-center text-xl font-light text-white group-hover:scale-110 transition-transform">
                        {i + 1}
                      </div>
                    </div>
                    <div className="flex-1 border-l border-[#f5f0e8]/20 pl-6 pb-8">
                      <h3 className="text-xl font-medium mb-2 text-[#f5f0e8]">{step.title}</h3>
                      <p className="text-[#f5f0e8]/60 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions - Species Profiles */}
      <section className="py-24 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d97706] text-sm tracking-[0.3em] uppercase font-medium">Ecosystem</span>
            <h2 className="text-4xl font-light mt-4 text-[#2d3a2d]">{content.solutions.headline}</h2>
            <p className="text-[#2d3a2d]/60 mt-4">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                {/* Image placeholder area */}
                <div className={`h-48 relative overflow-hidden ${
                  i === 0 ? 'bg-gradient-to-br from-[#2d3a2d] to-[#3d4f3d]' :
                  i === 1 ? 'bg-gradient-to-br from-[#d97706] to-[#b45309]' :
                  i === 2 ? 'bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f]' :
                  'bg-gradient-to-br from-[#5c4033] to-[#6d503f]'
                }`}>
                  {/* Abstract wildlife silhouette */}
                  <svg className="absolute bottom-0 right-0 w-32 h-32 text-white/10" viewBox="0 0 100 100">
                    {i === 0 && <path d="M20 80 Q30 40 50 60 Q70 80 80 50 L80 100 L20 100 Z" fill="currentColor"/>}
                    {i === 1 && <circle cx="50" cy="50" r="30" fill="currentColor"/>}
                    {i === 2 && <path d="M50 20 L70 80 L30 80 Z" fill="currentColor"/>}
                    {i === 3 && <rect x="25" y="25" width="50" height="50" rx="10" fill="currentColor"/>}
                  </svg>
                </div>
                <div className="p-8">
                  <span className="text-[#d97706] text-xs tracking-[0.2em] uppercase font-medium">Species {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-2xl font-light mt-2 mb-3 text-[#2d3a2d] group-hover:text-[#d97706] transition-colors">{item.title}</h3>
                  <p className="text-[#2d3a2d]/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Survival Traits */}
      <section className="py-24 bg-[#e8e0d4]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d97706] text-sm tracking-[0.3em] uppercase font-medium">Survival Traits</span>
            <h2 className="text-4xl font-light mt-4 text-[#2d3a2d]">{content.comparison.headline}</h2>
            <p className="text-[#2d3a2d]/60 mt-4">{content.comparison.subheadline}</p>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className={`flex items-center gap-6 px-8 py-6 ${i !== content.comparison.capabilities.length - 1 ? 'border-b border-[#e8e0d4]' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-[#2d3a2d] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#d97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#2d3a2d]">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Field Notes */}
      <section className="py-24 bg-[#2d3a2d] text-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d97706] text-sm tracking-[0.3em] uppercase font-medium">Field Notes</span>
            <h2 className="text-4xl font-light mt-4">From the Expedition</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.testimonials.slice(0, 6).map((testimonial, i) => (
              <div key={i} className="bg-[#3d4f3d]/50 rounded-lg p-8 relative">
                {/* Quote mark */}
                <div className="absolute top-6 left-6 text-[#d97706] opacity-30">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <div className="relative pt-8">
                  <p className="text-[#f5f0e8]/80 leading-relaxed mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#d97706] flex items-center justify-center text-white font-medium">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-[#d97706]">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Call of the Wild */}
      <section className="py-24 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[#2d3a2d] text-[#f5f0e8] rounded-lg p-16 relative overflow-hidden">
            {/* Organic shape decoration */}
            <svg className="absolute top-0 right-0 w-64 h-64 text-[#3d4f3d]" viewBox="0 0 200 200">
              <circle cx="150" cy="50" r="100" fill="currentColor"/>
            </svg>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-light mb-6">{content.cta.headline}</h2>
              <p className="text-xl text-[#f5f0e8]/70 mb-10 max-w-2xl mx-auto">{content.cta.subheadline}</p>
              <button className="bg-[#d97706] text-white px-12 py-5 font-medium tracking-wide hover:bg-[#b45309] transition-colors">
                {content.cta.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#2d3a2d] text-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <p className="text-[#f5f0e8]/60">DarkWebIQ — Nature Documentary V2 Theme Preview</p>
          <p className="text-[#d97706]">Protecting the Digital Ecosystem</p>
        </div>
      </footer>
    </div>
  );
}
