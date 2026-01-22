'use client';

import Link from 'next/link';
import { contentV2 as content } from '@/lib/content-v2';

export default function BlackoutProtocolV2() {
  return (
    <div className="min-h-screen bg-black text-white font-['JetBrains_Mono',monospace]">
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .cursor::after {
          content: '_';
          animation: blink 1s infinite;
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .scanline {
          animation: scanline 4s linear infinite;
        }
      `}</style>

      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-[0.03]">
        <div className="scanline absolute inset-0 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent h-[200px]"/>
      </div>

      {/* Top Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#333] text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6 text-[#666]">
            <span>SESSION: <span className="text-[#00d4ff]">SECURE</span></span>
            <span>PROTOCOL: <span className="text-[#00d4ff]">V2</span></span>
          </div>
          <div className="text-[#666]">
            UTC: {new Date().toISOString().split('T')[1].split('.')[0]}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 z-40 bg-black border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#00d4ff] hover:text-white transition-colors text-xs uppercase tracking-widest">
            [ESC] EXIT
          </Link>
          <span className="text-[#666] text-xs tracking-[0.5em] uppercase">BLACKOUT_PROTOCOL_V2</span>
        </div>
      </nav>

      {/* Hero - Stripped Down Terminal */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#666] text-xs mb-8 font-mono">
            root@darkwebiq:~$ cat /briefing/priority.txt
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-none tracking-tighter uppercase mb-8">
            {content.hero.headline}
          </h1>

          <p className="text-[#888] text-xl leading-relaxed max-w-3xl mb-12">
            {content.hero.subheadline}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[#666] text-xs">$</span>
            <button className="bg-[#00d4ff] text-black px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors">
              {content.hero.cta}
            </button>
            <span className="cursor text-[#00d4ff]"/>
          </div>
        </div>
      </section>

      {/* Stats - Raw Data Display */}
      <section className="py-16 px-6 border-y border-[#333] bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#00d4ff] text-xs uppercase tracking-widest">{content.statsHeadline}</span>
            <div className="flex-1 h-px bg-[#333]"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {content.stats.map((stat, i) => (
              <div key={i} className={`py-8 ${i < 2 ? 'md:border-r border-[#333]' : ''} ${i > 0 ? 'md:pl-8' : ''}`}>
                <div className="text-6xl lg:text-8xl font-bold text-[#00d4ff] tracking-tighter leading-none">
                  {stat.number}
                </div>
                <div className="text-[#666] text-xs uppercase tracking-widest mt-4">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-[#444] text-xs">
            {content.statsFootnote}
          </div>
        </div>
      </section>

      {/* How It Works - Log Format */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-[#00d4ff] text-xs uppercase tracking-widest">&gt; {content.howItWorks.headline}</span>
            <p className="text-[#666] text-sm mt-2">{content.howItWorks.subheadline}</p>
          </div>

          <div className="space-y-2">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex group hover:bg-[#0a0a0a] transition-colors">
                <div className="w-24 shrink-0 py-4 text-[#333] text-xs font-mono">
                  [{String(i + 1).padStart(2, '0')}]
                </div>
                <div className="flex-1 py-4 border-l border-[#222] pl-6">
                  <span className="text-[#00d4ff] font-bold uppercase tracking-wide">{step.title}</span>
                  <span className="text-[#666] mx-3">|</span>
                  <span className="text-[#888]">{step.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Minimal Cards */}
      <section className="py-20 px-6 bg-[#050505] border-y border-[#333]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-[#00d4ff] text-xs uppercase tracking-widest">&gt; {content.solutions.headline}</span>
              <p className="text-[#666] text-sm mt-1">{content.solutions.subheadline}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#333]">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="bg-black p-10 hover:bg-[#0a0a0a] transition-colors group">
                <div className="text-[#333] text-6xl font-bold leading-none mb-6">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3 group-hover:text-[#00d4ff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Checklist */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#00d4ff] text-xs uppercase tracking-widest">&gt; {content.comparison.headline}</span>
            <p className="text-[#666] text-sm mt-2">{content.comparison.subheadline}</p>
          </div>

          <div className="space-y-0">
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className="flex items-center gap-6 py-5 border-b border-[#222] group hover:border-[#00d4ff] transition-colors">
                <div className="w-6 h-6 border border-[#00d4ff] flex items-center justify-center text-[#00d4ff] text-xs">
                  +
                </div>
                <span className="text-[#ccc] group-hover:text-white transition-colors">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Message Logs */}
      <section className="py-20 px-6 bg-[#050505] border-y border-[#333]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#00d4ff] text-xs uppercase tracking-widest">&gt; FIELD_REPORTS</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.testimonials.slice(0, 6).map((testimonial, i) => (
              <div key={i} className="border border-[#222] p-6 hover:border-[#333] transition-colors">
                <div className="text-[#333] text-xs mb-4 font-mono">
                  MSG_{String(i + 1).padStart(3, '0')}
                </div>
                <blockquote className="text-[#999] text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-[#222]">
                  <div className="text-white text-sm">{testimonial.author}</div>
                  <div className="text-[#00d4ff] text-xs mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Simple and Direct */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
            {content.cta.headline}
          </h2>
          <p className="text-[#888] text-lg mb-12">
            {content.cta.subheadline}
          </p>
          <button className="bg-[#00d4ff] text-black px-16 py-5 text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors">
            {content.cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#333]">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-[#666]">
          <span>DARKWEBIQ // BLACKOUT_PROTOCOL_V2</span>
          <span>END_TRANSMISSION</span>
        </div>
      </footer>
    </div>
  );
}
