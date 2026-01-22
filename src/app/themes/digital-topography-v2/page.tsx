import Link from 'next/link';
import { contentV2 as content } from '@/lib/content-v2';

export default function DigitalTopographyV2() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-[#e8e8e8] relative overflow-hidden">
      {/* Topographic line background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo-lines" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M0 50 Q25 30 50 50 T100 50" fill="none" stroke="#b87333" strokeWidth="0.5"/>
              <path d="M0 70 Q25 50 50 70 T100 70" fill="none" stroke="#b87333" strokeWidth="0.5"/>
              <path d="M0 30 Q25 10 50 30 T100 30" fill="none" stroke="#b87333" strokeWidth="0.5"/>
              <ellipse cx="50" cy="50" rx="30" ry="20" fill="none" stroke="#b87333" strokeWidth="0.3"/>
              <ellipse cx="50" cy="50" rx="20" ry="12" fill="none" stroke="#b87333" strokeWidth="0.3"/>
              <ellipse cx="50" cy="50" rx="10" ry="6" fill="none" stroke="#b87333" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo-lines)"/>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/90 backdrop-blur-sm border-b border-[#b87333]/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#b87333] hover:text-[#d4894a] transition-colors text-sm tracking-widest uppercase">
            ← All Themes
          </Link>
          <span className="text-xs tracking-[0.3em] uppercase text-[#888]">Digital Topography V2</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="text-[#b87333] text-xs tracking-[0.4em] uppercase mb-6 font-medium">
              Mapping the Unmapped
            </div>
            <h1 className="text-5xl lg:text-7xl font-light leading-[1.1] mb-8 tracking-tight">
              {content.hero.headline}
            </h1>
            <p className="text-xl text-[#b8b8b8] leading-relaxed mb-10 max-w-xl">
              {content.hero.subheadline}
            </p>
            <button className="group relative px-8 py-4 bg-transparent border border-[#b87333] text-[#b87333] hover:bg-[#b87333] hover:text-[#1a1a2e] transition-all duration-300 tracking-widest uppercase text-sm">
              {content.hero.cta}
              <span className="absolute -bottom-1 -right-1 w-full h-full border border-[#b87333]/30 -z-10" />
            </button>
          </div>

          {/* 3D Wireframe Iceberg Visual */}
          <div className="relative h-[500px] hidden lg:block">
            <svg viewBox="0 0 400 500" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 40px rgba(184, 115, 51, 0.2))' }}>
              {/* Water line */}
              <line x1="0" y1="180" x2="400" y2="180" stroke="#b87333" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
              <text x="10" y="175" fill="#b87333" fontSize="10" opacity="0.7">SURFACE LEVEL</text>

              {/* Iceberg wireframe - above water */}
              <polygon
                points="200,40 280,175 120,175"
                fill="none"
                stroke="#e8e8e8"
                strokeWidth="1"
              />
              <line x1="200" y1="40" x2="200" y2="175" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.5"/>

              {/* Iceberg wireframe - below water (larger) */}
              <polygon
                points="200,180 350,450 50,450"
                fill="none"
                stroke="#b87333"
                strokeWidth="1.5"
              />
              {/* Internal structure lines */}
              <line x1="200" y1="180" x2="200" y2="450" stroke="#b87333" strokeWidth="0.5" opacity="0.5"/>
              <line x1="200" y1="180" x2="125" y2="450" stroke="#b87333" strokeWidth="0.5" opacity="0.3"/>
              <line x1="200" y1="180" x2="275" y2="450" stroke="#b87333" strokeWidth="0.5" opacity="0.3"/>

              {/* Depth markers */}
              <line x1="370" y1="250" x2="390" y2="250" stroke="#b87333" strokeWidth="0.5" opacity="0.5"/>
              <text x="360" y="254" fill="#b87333" fontSize="8" opacity="0.5" textAnchor="end">-100m</text>
              <line x1="370" y1="350" x2="390" y2="350" stroke="#b87333" strokeWidth="0.5" opacity="0.5"/>
              <text x="360" y="354" fill="#b87333" fontSize="8" opacity="0.5" textAnchor="end">-200m</text>

              {/* Data points */}
              <circle cx="200" cy="300" r="4" fill="#b87333" opacity="0.8"/>
              <circle cx="150" cy="380" r="3" fill="#b87333" opacity="0.6"/>
              <circle cx="250" cy="350" r="3" fill="#b87333" opacity="0.6"/>
            </svg>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#888]">
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#b87333] to-transparent"/>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[#16213e]/50"/>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[#b87333] text-xs tracking-[0.4em] uppercase">Survey Data</span>
            <h2 className="text-3xl font-light mt-4">{content.statsHeadline}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            {content.stats.map((stat, i) => (
              <div key={i} className="bg-[#0f3460]/50 p-12 text-center border border-[#b87333]/20 relative group">
                <div className="absolute top-4 left-4 text-[#b87333]/30 text-xs font-mono">0{i + 1}</div>
                <div className="text-5xl font-light text-[#b87333] mb-4 tracking-tight">{stat.number}</div>
                <div className="text-sm text-[#888] tracking-wider uppercase">{stat.label}</div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#b87333]/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"/>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-[#666]">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works - Elevation Map Style */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#b87333] text-xs tracking-[0.4em] uppercase">The Process</span>
            <h2 className="text-4xl font-light mt-4">{content.howItWorks.headline}</h2>
            <p className="text-[#888] mt-4">{content.howItWorks.subheadline}</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#b87333]/50 via-[#b87333] to-[#b87333]/50 hidden lg:block"/>

            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className={`relative flex items-center gap-12 mb-16 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-[#16213e]/30 p-8 border border-[#b87333]/20 relative">
                    <span className="absolute -top-3 left-8 bg-[#1a1a2e] px-3 text-[#b87333] text-xs tracking-widest">
                      LAYER {i + 1}
                    </span>
                    <h3 className="text-xl font-light mb-3 text-[#e8e8e8]">{step.title}</h3>
                    <p className="text-[#888] leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center marker */}
                <div className="hidden lg:flex w-12 h-12 rounded-full border-2 border-[#b87333] items-center justify-center bg-[#1a1a2e] z-10">
                  <span className="text-[#b87333] font-light">{i + 1}</span>
                </div>

                <div className="flex-1 hidden lg:block"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32 bg-[#16213e]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#b87333] text-xs tracking-[0.4em] uppercase">Terrain Analysis</span>
            <h2 className="text-4xl font-light mt-4">{content.solutions.headline}</h2>
            <p className="text-[#888] mt-4">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="group relative bg-[#0f3460]/30 p-10 border border-[#b87333]/20 hover:border-[#b87333]/50 transition-all duration-300">
                {/* Topographic corner decoration */}
                <svg className="absolute top-0 right-0 w-24 h-24 opacity-20 group-hover:opacity-40 transition-opacity" viewBox="0 0 100 100">
                  <circle cx="100" cy="0" r="80" fill="none" stroke="#b87333" strokeWidth="0.5"/>
                  <circle cx="100" cy="0" r="60" fill="none" stroke="#b87333" strokeWidth="0.5"/>
                  <circle cx="100" cy="0" r="40" fill="none" stroke="#b87333" strokeWidth="0.5"/>
                  <circle cx="100" cy="0" r="20" fill="none" stroke="#b87333" strokeWidth="0.5"/>
                </svg>

                <div className="relative">
                  <div className="text-[#b87333]/50 text-xs font-mono mb-4">SECTOR_{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="text-2xl font-light mb-4 text-[#e8e8e8]">{item.title}</h3>
                  <p className="text-[#888] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#b87333] text-xs tracking-[0.4em] uppercase">Capability Matrix</span>
            <h2 className="text-4xl font-light mt-4">{content.comparison.headline}</h2>
            <p className="text-[#888] mt-4">{content.comparison.subheadline}</p>
          </div>

          <div className="space-y-3">
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-[#16213e]/30 border-l-2 border-[#b87333]">
                <div className="w-8 h-8 rounded-full border border-[#b87333] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#b87333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#e8e8e8]">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#0f3460]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#b87333] text-xs tracking-[0.4em] uppercase">Field Reports</span>
            <h2 className="text-4xl font-light mt-4">What Explorers Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.testimonials.slice(0, 6).map((testimonial, i) => (
              <div key={i} className="bg-[#16213e]/50 p-8 border border-[#b87333]/10 relative">
                <svg className="absolute top-6 left-6 w-8 h-8 text-[#b87333]/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <div className="relative pt-8">
                  <p className="text-[#b8b8b8] italic leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="border-t border-[#b87333]/20 pt-4">
                    <div className="text-[#e8e8e8] font-medium">{testimonial.author}</div>
                    <div className="text-[#b87333] text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3460]/50 to-transparent"/>
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">{content.cta.headline}</h2>
          <p className="text-xl text-[#888] mb-10">{content.cta.subheadline}</p>
          <button className="group relative px-12 py-5 bg-[#b87333] text-[#1a1a2e] hover:bg-[#d4894a] transition-all duration-300 tracking-widest uppercase text-sm font-medium">
            {content.cta.button}
            <span className="absolute -bottom-2 -right-2 w-full h-full border border-[#b87333] -z-10 group-hover:-bottom-3 group-hover:-right-3 transition-all"/>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#b87333]/20">
        <div className="max-w-7xl mx-auto px-6 text-center text-[#666] text-sm">
          <p>DarkWebIQ — Digital Topography V2 Theme Preview</p>
        </div>
      </footer>
    </div>
  );
}
