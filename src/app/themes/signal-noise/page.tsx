'use client';

import Link from 'next/link';
import { content } from '@/lib/content';

export default function SignalNoise() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-['Geist',system-ui,sans-serif]">
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes flow {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .node {
          animation: pulse 2s ease-in-out infinite;
        }
        .flow-line {
          stroke-dasharray: 1000;
          animation: flow 20s linear infinite;
        }
        .glass {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.05);
        }
      `}</style>

      {/* Animated background network */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffd5"/>
              <stop offset="100%" stopColor="#ff00aa"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff00aa"/>
              <stop offset="100%" stopColor="#00ffd5"/>
            </linearGradient>
          </defs>

          {/* Connection lines */}
          <path className="flow-line" d="M100,200 Q300,100 500,300 T900,200" fill="none" stroke="url(#gradient1)" strokeWidth="1"/>
          <path className="flow-line" d="M200,500 Q400,300 600,500 T1000,400" fill="none" stroke="url(#gradient2)" strokeWidth="1" style={{ animationDelay: '5s' }}/>
          <path className="flow-line" d="M0,600 Q200,400 400,600 T800,500" fill="none" stroke="url(#gradient1)" strokeWidth="1" style={{ animationDelay: '10s' }}/>

          {/* Nodes */}
          <circle className="node" cx="100" cy="200" r="4" fill="#00ffd5"/>
          <circle className="node" cx="500" cy="300" r="6" fill="#ff00aa" style={{ animationDelay: '0.5s' }}/>
          <circle className="node" cx="900" cy="200" r="4" fill="#00ffd5" style={{ animationDelay: '1s' }}/>
          <circle className="node" cx="200" cy="500" r="5" fill="#ff00aa" style={{ animationDelay: '1.5s' }}/>
          <circle className="node" cx="600" cy="500" r="4" fill="#00ffd5" style={{ animationDelay: '2s' }}/>
          <circle className="node" cx="1000" cy="400" r="5" fill="#ff00aa" style={{ animationDelay: '2.5s' }}/>
          <circle className="node" cx="400" cy="600" r="4" fill="#00ffd5" style={{ animationDelay: '3s' }}/>
          <circle className="node" cx="800" cy="500" r="6" fill="#ff00aa" style={{ animationDelay: '3.5s' }}/>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#00ffd5] hover:text-white transition-colors text-sm tracking-wide">
            &larr; Back
          </Link>
          <span className="text-white/40 text-sm tracking-wider">Signal/Noise</span>
        </div>
      </nav>

      {/* Hero with Data Viz */}
      <section className="min-h-screen flex items-center pt-20 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00ffd5] animate-pulse"/>
              <span className="text-sm text-white/60">Threat Detection Active</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-medium leading-[1.05] mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-[#00ffd5] to-[#ff00aa] bg-clip-text text-transparent">
                {content.hero.headline}
              </span>
            </h1>

            <p className="text-xl text-white/60 leading-relaxed mb-12 max-w-xl">
              {content.hero.subheadline}
            </p>

            <button className="group relative px-10 py-4 bg-gradient-to-r from-[#00ffd5] to-[#ff00aa] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ffd5]/20 transition-all">
              {content.hero.cta}
              <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 transition-opacity"/>
            </button>
          </div>

          {/* Animated network visualization */}
          <div className="relative h-[500px] hidden lg:block">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Central node */}
              <circle cx="200" cy="200" r="60" fill="none" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3"/>
              <circle cx="200" cy="200" r="40" fill="none" stroke="url(#gradient1)" strokeWidth="1" opacity="0.5"/>
              <circle cx="200" cy="200" r="8" fill="#00ffd5"/>

              {/* Orbiting nodes */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 200 + 120 * Math.cos(rad);
                const y = 200 + 120 * Math.sin(rad);
                return (
                  <g key={i}>
                    <line x1="200" y1="200" x2={x} y2={y} stroke="url(#gradient1)" strokeWidth="1" opacity="0.3"/>
                    <circle className="node" cx={x} cy={y} r="6" fill={i % 2 === 0 ? '#00ffd5' : '#ff00aa'} style={{ animationDelay: `${i * 0.3}s` }}/>
                  </g>
                );
              })}

              {/* Outer ring nodes */}
              {[30, 90, 150, 210, 270, 330].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 200 + 180 * Math.cos(rad);
                const y = 200 + 180 * Math.sin(rad);
                const innerX = 200 + 120 * Math.cos(rad);
                const innerY = 200 + 120 * Math.sin(rad);
                return (
                  <g key={i}>
                    <line x1={innerX} y1={innerY} x2={x} y2={y} stroke="url(#gradient2)" strokeWidth="0.5" opacity="0.2"/>
                    <circle className="node" cx={x} cy={y} r="4" fill={i % 2 === 0 ? '#ff00aa' : '#00ffd5'} style={{ animationDelay: `${i * 0.5}s` }}/>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </section>

      {/* Stats - Glassmorphism Cards */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00ffd5] text-sm tracking-wider uppercase">{content.statsHeadline}</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.stats.map((stat, i) => (
              <div key={i} className="glass rounded-2xl p-10 text-center group hover:border-[#00ffd5]/20 transition-colors">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#00ffd5] to-[#ff00aa] bg-clip-text text-transparent mb-4">
                  {stat.number}
                </div>
                <div className="text-white/50 text-sm tracking-wider uppercase">
                  {stat.label}
                </div>
                {/* Decorative bottom bar */}
                <div className="mt-6 h-1 bg-gradient-to-r from-[#00ffd5] to-[#ff00aa] rounded-full opacity-30 group-hover:opacity-100 transition-opacity"/>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-white/30 text-sm">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works - Flow Diagram Style */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#00ffd5] text-sm tracking-wider uppercase mb-4 block">{content.howItWorks.headline}</span>
            <p className="text-white/50">{content.howItWorks.subheadline}</p>
          </div>

          <div className="space-y-6">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-8 group">
                {/* Step indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ffd5]/20 to-[#ff00aa]/20 border border-[#00ffd5]/30 flex items-center justify-center text-[#00ffd5] font-mono group-hover:border-[#00ffd5] transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {i < content.howItWorks.steps.length - 1 && (
                    <div className="w-px h-16 bg-gradient-to-b from-[#00ffd5]/30 to-transparent mt-2"/>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 glass rounded-xl p-8 group-hover:border-[#00ffd5]/20 transition-colors">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00ffd5] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Feature Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#00ffd5]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00ffd5] text-sm tracking-wider uppercase mb-4 block">{content.solutions.headline}</span>
            <p className="text-white/50">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="glass rounded-2xl p-10 group hover:border-[#ff00aa]/20 transition-all relative overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff00aa]/10 to-transparent rounded-bl-full"/>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00ffd5] to-[#ff00aa] flex items-center justify-center text-black font-bold">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-[#00ffd5] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Visual Checklist */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00ffd5] text-sm tracking-wider uppercase mb-4 block">{content.comparison.headline}</span>
            <p className="text-white/50">{content.comparison.subheadline}</p>
          </div>

          <div className="glass rounded-2xl overflow-hidden">
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className={`flex items-center gap-6 px-8 py-6 ${i !== content.comparison.capabilities.length - 1 ? 'border-b border-white/5' : ''} group hover:bg-white/5 transition-colors`}>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00ffd5]/20 to-[#ff00aa]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00ffd5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00ffd5] text-sm tracking-wider uppercase">Client Results</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.testimonials.slice(0, 6).map((testimonial, i) => (
              <div key={i} className="glass rounded-2xl p-8 group hover:border-[#00ffd5]/20 transition-colors">
                <div className="text-[#00ffd5]/30 text-4xl mb-4">&ldquo;</div>
                <blockquote className="text-white/70 leading-relaxed mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="pt-4 border-t border-white/10">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-[#00ffd5] text-sm mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Gradient Box */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffd5]/20 via-[#ff00aa]/20 to-[#00ffd5]/20"/>
            <div className="absolute inset-0 backdrop-blur-xl"/>

            <div className="relative p-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#00ffd5] to-[#ff00aa] bg-clip-text text-transparent">
                  {content.cta.headline}
                </span>
              </h2>
              <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                {content.cta.subheadline}
              </p>
              <button className="px-12 py-5 bg-gradient-to-r from-[#00ffd5] to-[#ff00aa] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#00ffd5]/30 transition-all">
                {content.cta.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-white/40 text-sm">DarkWebIQ &mdash; Signal/Noise</span>
          <span className="text-white/20 text-sm">Visualizing the Invisible</span>
        </div>
      </footer>
    </div>
  );
}
