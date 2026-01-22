import Link from 'next/link';
import { content } from '@/lib/content';

export default function BioluminescentDeep() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-['Inter',system-ui,sans-serif] overflow-hidden">
      {/* Animated particle/glow background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Deep ocean gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d1b2a] to-[#1b263b]"/>

        {/* Bioluminescent glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"/>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-magenta-500/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}/>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-4 mt-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
              ← All Themes
            </Link>
            <span className="text-xs tracking-wider text-white/50">Bioluminescent Deep</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 relative">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50"/>
              <span className="text-cyan-400/80 text-sm tracking-wider">Illuminating the Dark</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {content.hero.headline}
              </span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-12 max-w-2xl">
              {content.hero.subheadline}
            </p>
            <button className="group relative px-10 py-5 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity"/>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"/>
              <span className="relative font-medium tracking-wide">{content.hero.cta}</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border border-cyan-400/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce"/>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm tracking-wider">Depth Readings</span>
            <h2 className="text-3xl font-light mt-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              {content.statsHeadline}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.stats.map((stat, i) => (
              <div key={i} className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 text-center hover:border-cyan-500/30 transition-all duration-500">
                  <div className="text-6xl font-light mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.number}
                    </span>
                  </div>
                  <div className="text-white/40 text-sm tracking-wider">{stat.label}</div>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-1/2 transition-all duration-500"/>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-white/30">{content.statsFootnote}</p>
        </div>
      </section>

      {/* How It Works - Flowing Path */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-cyan-400 text-sm tracking-wider">The Current</span>
            <h2 className="text-4xl font-light mt-4">{content.howItWorks.headline}</h2>
            <p className="text-white/40 mt-4">{content.howItWorks.subheadline}</p>
          </div>

          <div className="relative">
            {/* Flowing connection line */}
            <svg className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-4 hidden lg:block" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5"/>
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5"/>
                </linearGradient>
              </defs>
              <path d="M8 0 Q8 100 8 100" stroke="url(#flowGradient)" strokeWidth="2" fill="none" style={{ height: '100%' }}/>
            </svg>

            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className={`relative flex items-center gap-12 mb-16 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : ''}`}>
                  <div className="group bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden">
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"/>

                    <div className="relative">
                      <div className="text-cyan-400/50 text-xs tracking-widest mb-4">PHASE {i + 1}</div>
                      <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                      <p className="text-white/50 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Center node */}
                <div className="hidden lg:flex w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 items-center justify-center z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center text-sm font-medium">
                    {i + 1}
                  </div>
                </div>

                <div className="flex-1 hidden lg:block"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Organic Cards */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"/>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <span className="text-purple-400 text-sm tracking-wider">Specimens</span>
            <h2 className="text-4xl font-light mt-4">{content.solutions.headline}</h2>
            <p className="text-white/40 mt-4">{content.solutions.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.solutions.items.map((item, i) => (
              <div key={i} className="group relative">
                {/* Bioluminescent glow */}
                <div className={`absolute inset-0 rounded-[40px] blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
                  i === 0 ? 'bg-cyan-500/20' :
                  i === 1 ? 'bg-purple-500/20' :
                  i === 2 ? 'bg-pink-500/20' :
                  'bg-blue-500/20'
                }`}/>

                <div className="relative bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 p-10 hover:border-white/20 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-full mb-8 flex items-center justify-center ${
                    i === 0 ? 'bg-gradient-to-br from-cyan-400/20 to-cyan-600/20' :
                    i === 1 ? 'bg-gradient-to-br from-purple-400/20 to-purple-600/20' :
                    i === 2 ? 'bg-gradient-to-br from-pink-400/20 to-pink-600/20' :
                    'bg-gradient-to-br from-blue-400/20 to-blue-600/20'
                  }`}>
                    <div className={`w-4 h-4 rounded-full ${
                      i === 0 ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' :
                      i === 1 ? 'bg-purple-400 shadow-lg shadow-purple-400/50' :
                      i === 2 ? 'bg-pink-400 shadow-lg shadow-pink-400/50' :
                      'bg-blue-400 shadow-lg shadow-blue-400/50'
                    }`}/>
                  </div>
                  <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm tracking-wider">Capabilities</span>
            <h2 className="text-4xl font-light mt-4">{content.comparison.headline}</h2>
            <p className="text-white/40 mt-4">{content.comparison.subheadline}</p>
          </div>

          <div className="space-y-4">
            {content.comparison.capabilities.map((cap, i) => (
              <div key={i} className="group flex items-center gap-6 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/80">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent"/>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm tracking-wider">Echoes from the Deep</span>
            <h2 className="text-4xl font-light mt-4">What They Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.testimonials.slice(0, 6).map((testimonial, i) => (
              <div key={i} className="group bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-500">
                <div className={`w-1 h-12 rounded-full mb-6 ${
                  i % 3 === 0 ? 'bg-gradient-to-b from-cyan-400 to-transparent' :
                  i % 3 === 1 ? 'bg-gradient-to-b from-purple-400 to-transparent' :
                  'bg-gradient-to-b from-pink-400 to-transparent'
                }`}/>
                <p className="text-white/70 leading-relaxed mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="border-t border-white/10 pt-6">
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-purple-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-[60px] blur-3xl"/>

            <div className="relative bg-white/5 backdrop-blur-xl rounded-[60px] border border-white/10 p-16">
              <h2 className="text-4xl lg:text-5xl font-light mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {content.cta.headline}
                </span>
              </h2>
              <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">{content.cta.subheadline}</p>
              <button className="group relative px-12 py-5 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"/>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"/>
                <span className="relative font-medium tracking-wide">{content.cta.button}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center text-white/30 text-sm">
          <p>DarkWebIQ — Bioluminescent Deep Theme Preview</p>
        </div>
      </footer>
    </div>
  );
}
