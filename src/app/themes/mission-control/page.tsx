import Link from 'next/link';
import { content } from '@/lib/content';

export default function MissionControl() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e0e6ed] font-['Inter',system-ui,sans-serif]">
      {/* Scan line effect */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#22c55e]/[0.02] to-transparent animate-scan"/>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        @keyframes radar {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>

      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, #1e3a5f 1px, transparent 1px),
            linear-gradient(to bottom, #1e3a5f 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}/>
      </div>

      {/* Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/95 border-b border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-6">
            <span className="text-[#22c55e]">● SYSTEMS NOMINAL</span>
            <span className="text-[#64748b]">UPLINK: ACTIVE</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#f97316]">MET: 00:00:00:00</span>
            <span className="text-[#64748b]">{new Date().toISOString().split('T')[0]}</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-8 z-40 bg-[#0a0f1a]/90 backdrop-blur border-b border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#f97316] hover:text-[#22c55e] transition-colors font-mono text-sm">
            ← BACK_TO_MENU
          </Link>
          <div className="flex items-center gap-4 font-mono text-xs">
            <span className="text-[#64748b]">STATION:</span>
            <span className="text-[#22c55e]">MISSION_CONTROL</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Command Center */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse"/>
                <span className="font-mono text-xs text-[#f97316] tracking-wider">PRIORITY TRANSMISSION</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                {content.hero.headline}
              </h1>
              <p className="text-lg text-[#94a3b8] leading-relaxed mb-8 max-w-xl">
                {content.hero.subheadline}
              </p>
              <button className="group bg-[#22c55e] text-[#0a0f1a] px-8 py-4 font-mono font-bold text-sm tracking-wider hover:bg-[#16a34a] transition-colors inline-flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0a0f1a]"/>
                {content.hero.cta.toUpperCase()}
              </button>
            </div>

            {/* Radar Display */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-[#1e3a5f]"/>
              <div className="absolute inset-4 rounded-full border border-[#1e3a5f]/50"/>
              <div className="absolute inset-8 rounded-full border border-[#1e3a5f]/30"/>
              <div className="absolute inset-12 rounded-full border border-[#1e3a5f]/20"/>

              {/* Crosshairs */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1e3a5f]/50"/>
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1e3a5f]/50"/>

              {/* Radar sweep */}
              <div className="absolute inset-0" style={{ animation: 'radar 4s linear infinite' }}>
                <div className="absolute top-1/2 left-1/2 w-1/2 h-px bg-gradient-to-r from-[#22c55e] to-transparent origin-left transform -translate-y-1/2"/>
              </div>

              {/* Blips */}
              <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-[#f97316] shadow-lg shadow-[#f97316]/50" style={{ animation: 'blink 1s infinite' }}/>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[#22c55e] shadow-lg shadow-[#22c55e]/50" style={{ animation: 'blink 1.5s infinite' }}/>
              <div className="absolute bottom-1/3 left-1/2 w-2 h-2 rounded-full bg-[#22c55e] shadow-lg shadow-[#22c55e]/50" style={{ animation: 'blink 2s infinite' }}/>

              {/* Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full border-2 border-[#22c55e] bg-[#22c55e]/20"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Telemetry Panel */}
      <section className="py-16 bg-[#0f1729] border-y border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#22c55e]"/>
            <span className="font-mono text-sm text-[#22c55e] tracking-wider">TELEMETRY DATA</span>
            <div className="flex-1 h-px bg-[#1e3a5f]"/>
          </div>

          <h2 className="text-2xl font-bold mb-8">{content.statsHeadline}</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {content.stats.map((stat, i) => (
              <div key={i} className="bg-[#0a0f1a] border border-[#1e3a5f] p-6 relative">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-[#64748b]">METRIC_{String(i + 1).padStart(2, '0')}</span>
                  <span className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#f97316]' : 'bg-[#22c55e]'}`}/>
                </div>
                <div className="text-4xl font-bold font-mono text-[#22c55e] mb-2">{stat.number}</div>
                <div className="text-sm text-[#94a3b8]">{stat.label}</div>

                {/* Decorative data bars */}
                <div className="mt-4 flex gap-1">
                  {[...Array(20)].map((_, j) => (
                    <div key={j} className={`flex-1 h-1 ${j < 15 ? 'bg-[#22c55e]/30' : 'bg-[#1e3a5f]'}`}/>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs font-mono text-[#64748b]">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works - Flight Sequence */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#f97316]"/>
            <span className="font-mono text-sm text-[#f97316] tracking-wider">INTERCEPT PROTOCOL</span>
            <div className="flex-1 h-px bg-[#1e3a5f]"/>
          </div>

          <h2 className="text-3xl font-bold mb-4">{content.howItWorks.headline}</h2>
          <p className="text-[#94a3b8] mb-12 max-w-2xl">{content.howItWorks.subheadline}</p>

          <div className="relative">
            {/* Flight path line */}
            <svg className="absolute top-0 left-12 h-full w-4 hidden lg:block" preserveAspectRatio="none">
              <line x1="8" y1="0" x2="8" y2="100%" stroke="#1e3a5f" strokeWidth="2" strokeDasharray="8 4"/>
            </svg>

            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex gap-8 mb-8">
                <div className="flex-shrink-0 relative z-10">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                    i < 2 ? 'bg-[#f97316] text-[#0a0f1a]' :
                    i < 5 ? 'bg-[#22c55e] text-[#0a0f1a]' :
                    'bg-[#3b82f6] text-white'
                  }`}>
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1 bg-[#0f1729] border border-[#1e3a5f] p-6 hover:border-[#22c55e]/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <span className="font-mono text-xs text-[#64748b]">T+{String(i * 15).padStart(2, '0')}:00</span>
                  </div>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - System Modules */}
      <section className="py-24 bg-[#0f1729] border-y border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#22c55e]"/>
            <span className="font-mono text-sm text-[#22c55e] tracking-wider">SYSTEM MODULES</span>
            <div className="flex-1 h-px bg-[#1e3a5f]"/>
          </div>

          <h2 className="text-3xl font-bold mb-4">{content.solutions.headline}</h2>
          <p className="text-[#94a3b8] mb-12">{content.solutions.subheadline}</p>

          <div className="grid md:grid-cols-2 gap-4">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="bg-[#0a0f1a] border border-[#1e3a5f] p-8 group hover:border-[#22c55e] transition-colors relative overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-2 right-2 w-full h-full border-t border-r border-[#1e3a5f] group-hover:border-[#22c55e] transition-colors"/>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${
                    i === 0 ? 'bg-[#f97316]' :
                    i === 1 ? 'bg-[#22c55e]' :
                    i === 2 ? 'bg-[#3b82f6]' :
                    'bg-[#a855f7]'
                  }`}/>
                  <span className="font-mono text-xs text-[#64748b]">MODULE_{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item.description}</p>

                <div className="mt-6 pt-4 border-t border-[#1e3a5f] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#22c55e]">STATUS: ONLINE</span>
                  <span className="text-[#64748b]">v2.4.1</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Systems Check */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#3b82f6]"/>
            <span className="font-mono text-sm text-[#3b82f6] tracking-wider">SYSTEMS CHECK</span>
            <div className="flex-1 h-px bg-[#1e3a5f]"/>
          </div>

          <h2 className="text-3xl font-bold mb-4">{content.comparison.headline}</h2>
          <p className="text-[#94a3b8] mb-12">{content.comparison.subheadline}</p>

          <div className="border border-[#1e3a5f] bg-[#0f1729]">
            <div className="bg-[#1e3a5f]/30 px-6 py-3 flex items-center justify-between font-mono text-xs">
              <span className="text-[#94a3b8]">CAPABILITY</span>
              <span className="text-[#22c55e]">STATUS</span>
            </div>
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className={`flex items-center justify-between px-6 py-4 ${i !== content.comparison.capabilities.length - 1 ? 'border-b border-[#1e3a5f]' : ''}`}>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[#64748b]">{String(i + 1).padStart(2, '0')}</span>
                  <span>{cap}</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#22c55e]">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]"/>
                  GO
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Comms Log */}
      <section className="py-24 bg-[#0f1729] border-y border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#22c55e]"/>
            <span className="font-mono text-sm text-[#22c55e] tracking-wider">COMMUNICATIONS LOG</span>
            <div className="flex-1 h-px bg-[#1e3a5f]"/>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.testimonials.slice(0, 6).map((testimonial, i) => (
              <div key={i} className="bg-[#0a0f1a] border border-[#1e3a5f] p-6">
                <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#64748b]">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]"/>
                  <span>INCOMING TRANSMISSION</span>
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="border-t border-[#1e3a5f] pt-4 font-mono text-xs">
                  <div className="text-[#e0e6ed]">{testimonial.author}</div>
                  <div className="text-[#f97316]">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Launch Command */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[#0f1729] border-2 border-[#22c55e] p-16 relative">
            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#22c55e]"/>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#22c55e]"/>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#22c55e]"/>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#22c55e]"/>

            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse"/>
              <span className="font-mono text-xs text-[#f97316] tracking-wider">AWAITING COMMAND</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">{content.cta.headline}</h2>
            <p className="text-lg text-[#94a3b8] mb-10 max-w-2xl mx-auto">{content.cta.subheadline}</p>

            <button className="bg-[#22c55e] text-[#0a0f1a] px-12 py-5 font-mono font-bold tracking-wider hover:bg-[#16a34a] transition-colors inline-flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0a0f1a]"/>
              {content.cta.button.toUpperCase()}
              <span className="w-2 h-2 rounded-full bg-[#0a0f1a]"/>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center font-mono text-xs text-[#64748b]">
          <p>DarkWebIQ — Mission Control Theme Preview</p>
          <p>END TRANSMISSION</p>
        </div>
      </footer>
    </div>
  );
}
