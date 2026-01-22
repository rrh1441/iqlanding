'use client';

import Link from 'next/link';
import { contentV2 as content } from '@/lib/content-v2';

export default function SignalNoiseV2() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Geist',system-ui,sans-serif]">
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .node {
          animation: pulse 3s ease-in-out infinite;
        }
        .glass {
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.04);
        }
        .gradient-text {
          background: linear-gradient(135deg, #00ffd5, #ff00aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Subtle grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,255,213,0.5) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}/>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#00ffd5] hover:text-white transition-colors text-sm">
            &larr; Back
          </Link>
          <span className="text-white/30 text-sm tracking-wider">Signal/Noise V2</span>
        </div>
      </nav>

      {/* Hero - Minimal with accent */}
      <section className="min-h-[85vh] flex items-center pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-3 h-3 rounded-full bg-[#00ffd5] animate-pulse"/>
            <span className="text-white/40 text-sm tracking-wide">Active Monitoring</span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold leading-[0.95] mb-10 tracking-tight gradient-text">
            {content.hero.headline}
          </h1>

          <p className="text-xl text-white/50 leading-relaxed mb-14 max-w-2xl">
            {content.hero.subheadline}
          </p>

          <button className="px-12 py-5 bg-gradient-to-r from-[#00ffd5] to-[#ff00aa] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ffd5]/25 transition-all">
            {content.hero.cta}
          </button>
        </div>
      </section>

      {/* Stats - Clean horizontal */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/30 text-sm tracking-wider uppercase text-center mb-12">
            {content.statsHeadline}
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {content.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl lg:text-7xl font-bold gradient-text mb-3">
                  {stat.number}
                </div>
                <div className="text-white/40 text-sm tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-white/20 text-sm">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works - Horizontal Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00ffd5] text-sm tracking-wider uppercase">{content.howItWorks.headline}</span>
            <p className="text-white/40 mt-2">{content.howItWorks.subheadline}</p>
          </div>

          <div className="space-y-4">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="glass rounded-xl p-6 flex items-start gap-6 group hover:border-[#00ffd5]/10 transition-colors">
                <div className="w-12 h-12 rounded-full shrink-0 bg-gradient-to-br from-[#00ffd5]/10 to-[#ff00aa]/10 flex items-center justify-center text-[#00ffd5] font-mono border border-[#00ffd5]/20">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-[#00ffd5] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Bento Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#ff00aa]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#00ffd5] text-sm tracking-wider uppercase">{content.solutions.headline}</span>
            <p className="text-white/40 mt-2">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="glass rounded-2xl p-8 group hover:border-[#00ffd5]/10 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-white/10 group-hover:text-[#00ffd5]/30 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold group-hover:text-[#00ffd5] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/50 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Simple Stack */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00ffd5] text-sm tracking-wider uppercase">{content.comparison.headline}</span>
            <p className="text-white/40 mt-2">{content.comparison.subheadline}</p>
          </div>

          <div className="space-y-3">
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className="glass rounded-xl px-6 py-5 flex items-center gap-5 group hover:border-[#00ffd5]/10 transition-colors">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#00ffd5]/20 to-[#ff00aa]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#00ffd5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Compact Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00ffd5] text-sm tracking-wider uppercase">Client Results</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.testimonials.slice(0, 6).map((testimonial, i) => (
              <div key={i} className="glass rounded-xl p-6 group hover:border-[#00ffd5]/10 transition-colors">
                <blockquote className="text-white/60 leading-relaxed mb-4 text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="pt-3 border-t border-white/5">
                  <div className="font-medium text-sm">{testimonial.author}</div>
                  <div className="text-[#00ffd5] text-xs mt-0.5">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Minimal gradient */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {content.cta.headline}
          </h2>
          <p className="text-white/50 text-lg mb-12">
            {content.cta.subheadline}
          </p>
          <button className="px-14 py-5 bg-gradient-to-r from-[#00ffd5] to-[#ff00aa] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#00ffd5]/25 transition-all">
            {content.cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-white/30 text-sm">DarkWebIQ &mdash; Signal/Noise V2</span>
          <span className="text-white/15 text-sm">Clarity Through Data</span>
        </div>
      </footer>
    </div>
  );
}
