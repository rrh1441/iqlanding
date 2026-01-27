'use client';

import Link from 'next/link';
import { contentV3 as content } from '@/lib/content-v3';

export default function MissionControlV3() {
  const featuredTestimonial = content.testimonials.find(t => t.featured);
  const nonFeaturedTestimonials = content.testimonials.filter(t => !t.featured);

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

      {/* 1. Navigation */}
      <nav className="sticky top-8 z-40 bg-[#0a0f1a]/90 backdrop-blur border-b border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#22c55e] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#22c55e]"/>
            </div>
            <span className="font-mono text-sm text-[#e0e6ed]">DARKWEB_IQ</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[#64748b] hover:text-[#22c55e] transition-colors font-mono text-xs hidden md:block">
              ← BACK_TO_MENU
            </Link>
            <button className="bg-[#22c55e] text-[#0a0f1a] px-6 py-2.5 font-mono font-bold text-xs tracking-wider hover:bg-[#16a34a] transition-colors">
              {content.hero.cta.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section - Command Center */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse"/>
                <span className="font-mono text-xs text-[#f97316] tracking-wider">{content.hero.preheadline.toUpperCase()}</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                {content.hero.headline}
              </h1>
              <p className="text-lg text-[#94a3b8] leading-relaxed mb-8 max-w-xl">
                {content.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-[#22c55e] text-[#0a0f1a] px-8 py-4 font-mono font-bold text-sm tracking-wider hover:bg-[#16a34a] transition-colors inline-flex items-center justify-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#0a0f1a]"/>
                  {content.hero.cta.toUpperCase()}
                </button>
                <button className="border border-[#1e3a5f] text-[#94a3b8] px-8 py-4 font-mono text-sm tracking-wider hover:border-[#22c55e] hover:text-[#22c55e] transition-colors">
                  {content.hero.secondaryCta.toUpperCase()}
                </button>
              </div>
            </div>

            {/* Radar Display */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-[#1e3a5f]"/>
              <div className="absolute inset-4 rounded-full border border-[#1e3a5f]/50"/>
              <div className="absolute inset-8 rounded-full border border-[#1e3a5f]/30"/>
              <div className="absolute inset-12 rounded-full border border-[#1e3a5f]/20"/>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1e3a5f]/50"/>
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1e3a5f]/50"/>
              <div className="absolute inset-0" style={{ animation: 'radar 4s linear infinite' }}>
                <div className="absolute top-1/2 left-1/2 w-1/2 h-px bg-gradient-to-r from-[#22c55e] to-transparent origin-left transform -translate-y-1/2"/>
              </div>
              <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-[#f97316] shadow-lg shadow-[#f97316]/50" style={{ animation: 'blink 1s infinite' }}/>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[#22c55e] shadow-lg shadow-[#22c55e]/50" style={{ animation: 'blink 1.5s infinite' }}/>
              <div className="absolute bottom-1/3 left-1/2 w-2 h-2 rounded-full bg-[#22c55e] shadow-lg shadow-[#22c55e]/50" style={{ animation: 'blink 2s infinite' }}/>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full border-2 border-[#22c55e] bg-[#22c55e]/20"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Urgency Banner */}
      <section className="py-4 bg-[#f97316] text-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-sm">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-[#0a0f1a] rounded-full animate-pulse"/>
              <span className="font-bold tracking-wider">{content.urgency.headline.toUpperCase()}</span>
            </div>
            <p className="text-[#0a0f1a]/80 text-xs text-center md:text-left">{content.urgency.text}</p>
            <span className="text-[#0a0f1a]/60 text-xs tracking-wider">{content.urgency.updateDate}</span>
          </div>
        </div>
      </section>

      {/* 4. Social Proof Bar */}
      <section className="py-8 bg-[#0f1729] border-y border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]"/>
              <span className="font-mono text-xs text-[#22c55e] tracking-wider">{content.socialProof.headline.toUpperCase()}</span>
            </div>
            <span className="text-lg font-bold">{content.socialProof.metric}</span>
            <div className="flex flex-wrap justify-center gap-6">
              {content.socialProof.logos.map((logo, i) => (
                <span key={i} className="text-[#64748b] text-xs font-mono tracking-wide">{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Testimonial */}
      {featuredTestimonial && (
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-[#0f1729] border border-[#1e3a5f] p-12 relative">
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#22c55e]"/>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#22c55e]"/>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#22c55e]"/>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#22c55e]"/>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-6 font-mono text-xs text-[#f97316]">
                  <span className="w-2 h-2 rounded-full bg-[#f97316]"/>
                  PRIORITY TRANSMISSION
                </div>
                <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#22c55e] flex items-center justify-center text-[#22c55e] font-bold">
                    {featuredTestimonial.author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="font-bold">{featuredTestimonial.author}</div>
                    <div className="text-sm text-[#f97316] font-mono">{featuredTestimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Who This Is For - Crew Profiles */}
      <section className="py-24 bg-[#0f1729] border-y border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#3b82f6]"/>
            <span className="font-mono text-sm text-[#3b82f6] tracking-wider">CREW PROFILES</span>
            <div className="flex-1 h-px bg-[#1e3a5f]"/>
          </div>

          <h2 className="text-3xl font-bold mb-12">{content.whoThisIsFor.headline}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.whoThisIsFor.profiles.map((profile, i) => (
              <div key={i} className="bg-[#0a0f1a] border border-[#1e3a5f] p-6 hover:border-[#22c55e]/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${
                    i === 0 ? 'bg-[#f97316]' :
                    i === 1 ? 'bg-[#22c55e]' :
                    i === 2 ? 'bg-[#3b82f6]' :
                    'bg-[#a855f7]'
                  }`}/>
                  <span className="font-mono text-xs text-[#64748b]">PROFILE_{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-bold text-lg mb-3">{profile.title}</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Case Study - Mission Log */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#f97316]"/>
            <span className="font-mono text-sm text-[#f97316] tracking-wider">MISSION LOG</span>
            <div className="flex-1 h-px bg-[#1e3a5f]"/>
          </div>

          <h2 className="text-3xl font-bold mb-4">{content.caseStudy.headline}</h2>
          <p className="text-[#94a3b8] mb-12 font-mono text-sm">{content.caseStudy.company}</p>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[#1e3a5f]"/>

            {content.caseStudy.timeline.map((item, i) => (
              <div key={i} className="flex gap-8 mb-8">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-[#22c55e] flex items-center justify-center text-[#0a0f1a] text-xs font-mono font-bold">
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1 bg-[#0f1729] border border-[#1e3a5f] p-6">
                  <span className="inline-block bg-[#f97316] text-[#0a0f1a] text-xs font-mono font-bold px-3 py-1 mb-3">{item.day}</span>
                  <p className="text-[#94a3b8] leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#22c55e]/10 border border-[#22c55e] p-8 text-center">
            <div className="font-mono text-xs text-[#22c55e] mb-4">MISSION OUTCOME</div>
            <p className="text-xl font-bold mb-6">{content.caseStudy.outcome}</p>
            <button className="bg-[#22c55e] text-[#0a0f1a] px-8 py-4 font-mono font-bold text-sm tracking-wider hover:bg-[#16a34a] transition-colors">
              {content.caseStudy.cta.toUpperCase()}
            </button>
          </div>
        </div>
      </section>

      {/* 8. Stats - Telemetry Panel */}
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

      {/* 9. How It Works - Flight Sequence */}
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

      {/* 10. Comparison - Systems Check (theirs vs ours) */}
      <section className="py-24 bg-[#0f1729] border-y border-[#1e3a5f]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#3b82f6]"/>
            <span className="font-mono text-sm text-[#3b82f6] tracking-wider">SYSTEMS CHECK</span>
            <div className="flex-1 h-px bg-[#1e3a5f]"/>
          </div>

          <h2 className="text-3xl font-bold mb-4">{content.comparison.headline}</h2>
          <p className="text-[#94a3b8] mb-12">{content.comparison.subheadline}</p>

          <div className="border border-[#1e3a5f] bg-[#0a0f1a]">
            <div className="grid grid-cols-2 bg-[#1e3a5f]/30">
              <div className="px-6 py-4 border-r border-[#1e3a5f] text-center">
                <span className="font-mono text-xs text-[#f97316] tracking-wider">LEGACY SYSTEMS</span>
              </div>
              <div className="px-6 py-4 text-center">
                <span className="font-mono text-xs text-[#22c55e] tracking-wider">DARKWEB_IQ</span>
              </div>
            </div>
            {content.comparison.capabilitiesEnhanced.map((cap, i) => (
              <div key={i} className={`grid grid-cols-2 ${i !== content.comparison.capabilitiesEnhanced.length - 1 ? 'border-b border-[#1e3a5f]' : ''}`}>
                <div className="px-6 py-4 border-r border-[#1e3a5f] flex items-start gap-3">
                  <span className="text-[#f97316] font-mono text-xs">✕</span>
                  <span className="text-[#64748b] text-sm">{cap.theirs}</span>
                </div>
                <div className="px-6 py-4 flex items-start gap-3">
                  <span className="text-[#22c55e] font-mono text-xs">✓</span>
                  <span className="text-sm">{cap.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Solutions - System Modules */}
      <section className="py-24">
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
              <div key={i} className="bg-[#0f1729] border border-[#1e3a5f] p-8 group hover:border-[#22c55e] transition-colors relative overflow-hidden">
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

      {/* 12. Risk Calculator - Diagnostic Scan */}
      <section className="py-24 bg-[#0f1729] border-y border-[#1e3a5f]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[#0a0f1a] border-2 border-[#22c55e] p-12 relative">
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#22c55e]"/>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#22c55e]"/>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#22c55e]"/>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#22c55e]"/>

            <div className="text-center">
              <div className="font-mono text-xs text-[#f97316] mb-4 tracking-wider">{content.riskCalculator.subheadline.toUpperCase()}</div>
              <h2 className="text-3xl font-bold mb-4">{content.riskCalculator.headline}</h2>
              <p className="text-[#94a3b8] mb-8 max-w-lg mx-auto">{content.riskCalculator.description}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <input
                  type="text"
                  placeholder="yourdomain.com"
                  className="px-6 py-4 bg-[#0a0f1a] border border-[#1e3a5f] text-[#e0e6ed] placeholder:text-[#64748b] font-mono text-sm focus:outline-none focus:border-[#22c55e] w-full sm:w-64"
                />
                <button className="bg-[#22c55e] text-[#0a0f1a] px-8 py-4 font-mono font-bold text-sm tracking-wider hover:bg-[#16a34a] transition-colors whitespace-nowrap">
                  {content.riskCalculator.cta.toUpperCase()}
                </button>
              </div>
              <p className="text-xs text-[#64748b] font-mono">{content.riskCalculator.privacyNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What To Expect - Launch Sequence */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#a855f7]"/>
            <span className="font-mono text-sm text-[#a855f7] tracking-wider">LAUNCH SEQUENCE</span>
            <div className="flex-1 h-px bg-[#1e3a5f]"/>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center">{content.whatToExpect.headline}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.whatToExpect.steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 rounded-full border-2 border-[#22c55e] flex items-center justify-center mx-auto mb-6 bg-[#0f1729]">
                  <span className="text-2xl font-bold font-mono text-[#22c55e]">{step.number}</span>
                </div>
                {i < content.whatToExpect.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-[#1e3a5f]"/>
                )}
                <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-[#22c55e] text-sm font-mono">{content.whatToExpect.reassurance}</p>
        </div>
      </section>

      {/* 14. Guarantee Section */}
      <section className="py-20 bg-[#0f1729] border-y border-[#1e3a5f]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#22c55e] flex items-center justify-center mx-auto mb-6 bg-[#22c55e]/10">
            <svg className="w-8 h-8 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">{content.guarantee.headline}</h2>
          <p className="text-lg text-[#94a3b8] mb-4">{content.guarantee.text}</p>
          <p className="text-sm text-[#22c55e] font-mono">{content.guarantee.subtext}</p>
        </div>
      </section>

      {/* 15. Testimonials - Comms Log */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#22c55e]"/>
            <span className="font-mono text-sm text-[#22c55e] tracking-wider">COMMUNICATIONS LOG</span>
            <div className="flex-1 h-px bg-[#1e3a5f]"/>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nonFeaturedTestimonials.map((testimonial, i) => (
              <div key={i} className="bg-[#0f1729] border border-[#1e3a5f] p-6">
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

      {/* 16. Community - Intel Network */}
      <section className="py-20 bg-[#0f1729] border-y border-[#1e3a5f]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{content.community.headline}</h2>
          <p className="text-[#94a3b8] mb-8">{content.community.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 bg-[#0a0f1a] border border-[#1e3a5f] text-[#e0e6ed] placeholder:text-[#64748b] font-mono text-sm focus:outline-none focus:border-[#22c55e] w-full sm:w-64"
            />
            <button className="border border-[#22c55e] text-[#22c55e] px-8 py-4 font-mono text-sm tracking-wider hover:bg-[#22c55e] hover:text-[#0a0f1a] transition-colors whitespace-nowrap">
              {content.community.cta.toUpperCase()}
            </button>
          </div>
          <p className="text-xs text-[#64748b] font-mono">{content.community.socialProof}</p>
        </div>
      </section>

      {/* 17. CTA - Launch Command */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[#0f1729] border-2 border-[#22c55e] p-16 relative">
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="bg-[#22c55e] text-[#0a0f1a] px-12 py-5 font-mono font-bold tracking-wider hover:bg-[#16a34a] transition-colors inline-flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0a0f1a]"/>
                {content.cta.button.toUpperCase()}
              </button>
              <button className="border border-[#1e3a5f] text-[#94a3b8] px-8 py-5 font-mono text-sm tracking-wider hover:border-[#22c55e] hover:text-[#22c55e] transition-colors">
                {content.cta.secondaryButton.toUpperCase()}
              </button>
            </div>
            <p className="text-[#f97316] text-sm font-mono">{content.cta.urgencyText}</p>
          </div>
        </div>
      </section>

      {/* 18. Footer with certifications */}
      <footer className="py-12 border-t border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <p className="text-[#64748b] text-sm font-mono">{content.footer.trustedBy}</p>
            <div className="flex flex-wrap justify-center gap-6">
              {content.footer.certifications.map((cert, i) => (
                <span key={i} className="text-[#64748b] text-xs font-mono border border-[#1e3a5f] px-4 py-2">{cert}</span>
              ))}
            </div>
          </div>
          <div className="border-t border-[#1e3a5f] pt-8 flex justify-between items-center font-mono text-xs text-[#64748b]">
            <p>DarkWebIQ — Mission Control V3 Theme Preview</p>
            <p>END TRANSMISSION</p>
          </div>
        </div>
      </footer>

      {/* 19. Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0f1a]/95 backdrop-blur border-t border-[#1e3a5f] p-4 md:hidden">
        <button className="w-full bg-[#22c55e] text-[#0a0f1a] py-4 font-mono font-bold tracking-wider">
          {content.hero.cta.toUpperCase()}
        </button>
      </div>

      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-20 md:hidden"/>
    </div>
  );
}
