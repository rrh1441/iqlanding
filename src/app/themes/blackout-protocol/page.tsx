'use client';

import Link from 'next/link';
import { content } from '@/lib/content';

export default function BlackoutProtocol() {
  return (
    <div className="min-h-screen bg-black text-white font-['JetBrains_Mono',monospace]">
      {/* Terminal cursor blink style */}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .cursor::after {
          content: '_';
          animation: blink 1s infinite;
        }
        @keyframes typeIn {
          from { width: 0; }
          to { width: 100%; }
        }
        .redacted {
          background: #00d4ff;
          color: #00d4ff;
        }
      `}</style>

      {/* Top Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#333] text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6 text-[#666]">
            <span>SESSION: <span className="text-[#00d4ff]">ACTIVE</span></span>
            <span>CLEARANCE: <span className="text-[#00d4ff]">GRANTED</span></span>
          </div>
          <div className="text-[#666]">
            {new Date().toISOString()}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 z-40 bg-black border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#00d4ff] hover:text-white transition-colors text-xs uppercase tracking-widest">
            [ESC] EXIT
          </Link>
          <span className="text-[#666] text-xs tracking-[0.5em] uppercase">BLACKOUT_PROTOCOL</span>
        </div>
      </nav>

      {/* Hero - Terminal Style */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border border-[#333] bg-black">
            {/* Terminal header */}
            <div className="border-b border-[#333] px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"/>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"/>
              <div className="w-3 h-3 rounded-full bg-[#27ca40]"/>
              <span className="ml-4 text-[#666] text-xs">threat_brief.sh</span>
            </div>

            {/* Terminal content */}
            <div className="p-8 space-y-6">
              <div className="text-[#666] text-xs">
                $ cat /intel/priority_alert.txt
              </div>
              <div className="space-y-2">
                <p className="text-[#00d4ff] text-xs uppercase tracking-widest">
                  &gt;&gt; PRIORITY TRANSMISSION
                </p>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight uppercase">
                  {content.hero.headline}
                </h1>
              </div>
              <div className="text-[#999] text-lg leading-relaxed max-w-3xl">
                {content.hero.subheadline}
              </div>
              <div className="pt-4">
                <span className="text-[#666] text-xs">$ </span>
                <button className="bg-[#00d4ff] text-black px-8 py-3 text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors">
                  {content.hero.cta}
                </button>
                <span className="cursor text-[#00d4ff]"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Data Feed */}
      <section className="py-20 px-6 border-t border-[#333]">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#666] text-xs uppercase tracking-widest mb-8">
            &gt;&gt; LIVE_FEED: {content.statsHeadline}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#333]">
            {content.stats.map((stat, i) => (
              <div key={i} className={`p-8 ${i < 2 ? 'border-r border-[#333]' : ''} ${i < 2 ? 'md:border-b-0 border-b border-[#333] md:border-b-transparent' : ''}`}>
                <div className="text-[#666] text-xs mb-2 font-mono">
                  METRIC_{String(i + 1).padStart(3, '0')}
                </div>
                <div className="text-5xl lg:text-7xl font-bold text-[#00d4ff] tracking-tighter mb-2">
                  {stat.number}
                </div>
                <div className="text-xs text-[#999] uppercase tracking-wider">
                  {stat.label}
                </div>
                {/* Data visualization bar */}
                <div className="mt-4 flex gap-px">
                  {[...Array(20)].map((_, j) => (
                    <div key={j} className={`h-2 flex-1 ${j < 15 ? 'bg-[#00d4ff]' : 'bg-[#333]'}`}/>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-[#666] text-xs">
            {content.statsFootnote}
          </div>
        </div>
      </section>

      {/* How It Works - Command Sequence */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="text-[#00d4ff] text-xs uppercase tracking-widest mb-2">
              &gt;&gt; EXECUTION_PROTOCOL
            </div>
            <h2 className="text-4xl font-bold uppercase tracking-tight">{content.howItWorks.headline}</h2>
            <p className="text-[#666] mt-2">{content.howItWorks.subheadline}</p>
          </div>

          <div className="space-y-0 border-l-2 border-[#00d4ff]">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="relative pl-8 py-6 border-b border-[#222] hover:bg-[#111] transition-colors group">
                {/* Line connector dot */}
                <div className="absolute left-[-5px] top-8 w-2 h-2 bg-[#00d4ff]"/>

                <div className="flex items-start gap-6">
                  <div className="text-[#00d4ff] text-xs font-mono shrink-0 pt-1">
                    [{String(i + 1).padStart(2, '0')}]
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold uppercase tracking-wide mb-2 group-hover:text-[#00d4ff] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[#888] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-[#333] text-xs shrink-0">
                    T+{String(i * 4).padStart(2, '0')}:00
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Data Cards */}
      <section className="py-20 px-6 border-t border-[#333]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-[#00d4ff] text-xs uppercase tracking-widest mb-2">
              &gt;&gt; AVAILABLE_MODULES
            </div>
            <h2 className="text-4xl font-bold uppercase tracking-tight">{content.solutions.headline}</h2>
            <p className="text-[#666] mt-2">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="border border-[#333] p-8 hover:border-[#00d4ff] transition-colors group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[#666] text-xs font-mono">
                    MODULE_{String(i + 1).padStart(2, '0')}.exe
                  </span>
                  <span className="text-[#00d4ff] text-xs">
                    [ACTIVE]
                  </span>
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 group-hover:text-[#00d4ff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-6 pt-4 border-t border-[#222] text-xs text-[#666]">
                  STATUS: OPERATIONAL | LATENCY: &lt;50ms
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - System Table */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <div className="text-[#00d4ff] text-xs uppercase tracking-widest mb-2">
              &gt;&gt; CAPABILITY_MATRIX
            </div>
            <h2 className="text-4xl font-bold uppercase tracking-tight">{content.comparison.headline}</h2>
            <p className="text-[#666] mt-2">{content.comparison.subheadline}</p>
          </div>

          <div className="border border-[#333]">
            <div className="bg-[#111] px-6 py-3 border-b border-[#333] flex justify-between text-xs uppercase tracking-wider">
              <span className="text-[#666]">CAPABILITY</span>
              <span className="text-[#00d4ff]">STATUS</span>
            </div>
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className={`px-6 py-4 flex justify-between items-center ${i !== content.comparison.capabilities.length - 1 ? 'border-b border-[#222]' : ''} hover:bg-[#111] transition-colors`}>
                <span className="text-sm">{cap}</span>
                <span className="text-[#00d4ff] text-xs font-mono">[ENABLED]</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Intel Intercepts */}
      <section className="py-20 px-6 border-t border-[#333]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-[#00d4ff] text-xs uppercase tracking-widest mb-2">
              &gt;&gt; INTERCEPTED_TRANSMISSIONS
            </div>
            <h2 className="text-4xl font-bold uppercase tracking-tight">Field Reports</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.testimonials.slice(0, 6).map((testimonial, i) => (
              <div key={i} className="border border-[#333] p-6 bg-[#0a0a0a]">
                <div className="text-[#666] text-xs mb-4 font-mono">
                  INTERCEPT_{String(i + 1).padStart(3, '0')} | {new Date().toISOString().split('T')[0]}
                </div>
                <blockquote className="text-[#ccc] text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t border-[#222] pt-4">
                  <div className="text-white text-sm font-bold">{testimonial.author}</div>
                  <div className="text-[#00d4ff] text-xs mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Command Prompt */}
      <section className="py-24 px-6 bg-[#00d4ff]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black p-12 border-4 border-white">
            <div className="text-white text-xs uppercase tracking-widest mb-6">
              &gt;&gt; AWAITING_INPUT
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-6">
              {content.cta.headline}
            </h2>
            <p className="text-[#999] text-lg mb-10 max-w-2xl mx-auto">
              {content.cta.subheadline}
            </p>
            <button className="bg-[#00d4ff] text-black px-12 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors">
              {content.cta.button}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#333]">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-[#666]">
          <span>DarkWebIQ // BLACKOUT_PROTOCOL</span>
          <span>CONNECTION_SECURED</span>
        </div>
      </footer>
    </div>
  );
}
