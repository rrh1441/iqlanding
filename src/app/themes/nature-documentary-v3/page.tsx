import Link from 'next/link';
import { contentV3 as content } from '@/lib/content-v3';

export default function NatureDocumentaryV3() {
  const featuredTestimonial = content.testimonials.find(t => t.featured);
  const nonFeaturedTestimonials = content.testimonials.filter(t => !t.featured);

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#2d3a2d] font-['system-ui','-apple-system',sans-serif]">

      {/* 1. Navigation with brand + CTA */}
      <nav className="bg-[#2d3a2d] text-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <svg className="w-6 h-6 text-[#d97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-lg font-medium tracking-wide">DarkWebIQ</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[#f5f0e8]/60 hover:text-[#d97706] transition-colors text-sm tracking-wide hidden md:block">
              ← All Themes
            </Link>
            <button className="bg-[#d97706] text-white py-1.5 px-4 text-sm font-medium tracking-wide hover:bg-[#b45309] transition-colors rounded-sm">
              {content.hero.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero with preheadline, headline, subheadline, dual CTAs */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Background imagery - cinematic forest gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d3a2d] via-[#3d4f3d] to-[#2d3a2d]"/>

        {/* Organic shapes overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 left-0 w-full h-1/2 text-[#f5f0e8]/5" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path d="M0 600 Q300 400 600 500 T1200 300 L1200 600 Z" fill="currentColor"/>
          </svg>
          <svg className="absolute top-0 right-0 w-1/3 h-1/3 text-[#d97706]/10" viewBox="0 0 400 400">
            <circle cx="350" cy="50" r="200" fill="currentColor"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-0.5 bg-[#d97706]"/>
              <span className="text-[#d97706] text-sm tracking-[0.3em] uppercase font-medium">{content.hero.preheadline}</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light text-[#f5f0e8] leading-tight mb-8">
              {content.hero.headline}
            </h1>
            <p className="text-xl text-[#f5f0e8]/70 leading-relaxed mb-10 max-w-2xl">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-[#d97706] text-white px-10 py-5 font-medium tracking-wide hover:bg-[#b45309] transition-colors inline-flex items-center justify-center gap-3 rounded-sm">
                {content.hero.cta}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="border border-[#f5f0e8]/30 text-[#f5f0e8] px-8 py-5 font-medium tracking-wide hover:border-[#d97706] hover:text-[#d97706] transition-colors rounded-sm">
                {content.hero.secondaryCta}
              </button>
            </div>
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

      {/* 3. Urgency Banner */}
      <section className="py-4 bg-[#d97706] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"/>
              <span className="font-medium tracking-wide">{content.urgency.headline}</span>
            </div>
            <p className="text-white/80 text-sm text-center md:text-left">{content.urgency.text}</p>
            <span className="text-white/60 text-xs tracking-wide">{content.urgency.updateDate}</span>
          </div>
        </div>
      </section>

      {/* 4. Social Proof Bar */}
      <section className="py-8 bg-[#2d3a2d] text-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#d97706] text-xs tracking-[0.3em] uppercase mb-1">{content.socialProof.headline}</p>
              <p className="text-lg font-medium">{content.socialProof.metric}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {content.socialProof.logos.map((logo, i) => (
                <span key={i} className="text-[#f5f0e8]/50 text-sm tracking-wide">{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Testimonial */}
      {featuredTestimonial && (
        <section className="py-20 bg-[#f5f0e8]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative bg-white rounded-lg p-12 shadow-lg">
              {/* Quote mark */}
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-[#d97706] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <blockquote className="text-2xl lg:text-3xl font-light text-[#2d3a2d] leading-relaxed mb-8 pt-4">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#2d3a2d] flex items-center justify-center text-[#d97706] text-xl font-medium">
                  {featuredTestimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[#2d3a2d]">{featuredTestimonial.author}</div>
                  <div className="text-sm text-[#d97706]">{featuredTestimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Who This Is For - Species Profiles */}
      <section className="py-24 bg-[#e8e0d4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d97706] text-sm tracking-[0.3em] uppercase font-medium">Natural Habitats</span>
            <h2 className="text-4xl font-light mt-4 text-[#2d3a2d]">{content.whoThisIsFor.headline}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.whoThisIsFor.profiles.map((profile, i) => (
              <div key={i} className="group bg-white rounded-lg p-8 relative overflow-hidden hover:shadow-xl transition-shadow">
                {/* Decorative leaf pattern */}
                <svg className="absolute top-0 right-0 w-24 h-24 text-[#2d3a2d]/5 transform translate-x-6 -translate-y-6" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="currentColor"/>
                </svg>
                <div className="relative">
                  <span className="text-[#d97706] text-xs tracking-[0.2em] uppercase font-medium">Profile {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-xl font-medium mt-3 mb-3 text-[#2d3a2d] group-hover:text-[#d97706] transition-colors">{profile.title}</h3>
                  <p className="text-[#2d3a2d]/60 text-sm leading-relaxed">{profile.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Case Study with Timeline - Migration Pattern */}
      <section className="py-24 bg-[#2d3a2d] text-[#f5f0e8]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d97706] text-sm tracking-[0.3em] uppercase font-medium">Migration Pattern</span>
            <h2 className="text-4xl font-light mt-4">{content.caseStudy.headline}</h2>
            <p className="text-[#f5f0e8]/60 mt-4">{content.caseStudy.company}</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#d97706]/30 transform md:-translate-x-1/2"/>

            <div className="space-y-12">
              {content.caseStudy.timeline.map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 pl-20 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <span className="inline-block bg-[#d97706] text-white text-sm font-medium px-3 py-1 rounded-sm mb-3">{item.day}</span>
                    <p className="text-[#f5f0e8]/80 leading-relaxed">{item.event}</p>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-[#d97706] transform -translate-x-1/2 border-4 border-[#2d3a2d]"/>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-[#3d4f3d] rounded-lg p-10 text-center">
            <div className="text-[#d97706] text-xs tracking-[0.3em] uppercase mb-4">Outcome</div>
            <p className="text-2xl font-light mb-8">{content.caseStudy.outcome}</p>
            <button className="bg-[#d97706] text-white px-10 py-4 font-medium tracking-wide hover:bg-[#b45309] transition-colors rounded-sm">
              {content.caseStudy.cta}
            </button>
          </div>
        </div>
      </section>

      {/* 8. Stats - Field Data */}
      <section className="py-24 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d97706] text-sm tracking-[0.3em] uppercase font-medium">Field Research</span>
            <h2 className="text-3xl font-light mt-4 text-[#2d3a2d]">{content.statsHeadline}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-[#2d3a2d]/10 flex items-center justify-center bg-white shadow-md">
                  <span className="text-4xl font-light text-[#2d3a2d]">{stat.number}</span>
                </div>
                <div className="text-sm text-[#2d3a2d]/60 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-[#2d3a2d]/40">{content.statsFootnote}</p>
        </div>
      </section>

      {/* 9. How It Works - Expedition Guide */}
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

      {/* 10. Comparison - Survival Traits (theirs vs ours) */}
      <section className="py-24 bg-[#e8e0d4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d97706] text-sm tracking-[0.3em] uppercase font-medium">Survival Traits</span>
            <h2 className="text-4xl font-light mt-4 text-[#2d3a2d]">{content.comparison.headline}</h2>
            <p className="text-[#2d3a2d]/60 mt-4">{content.comparison.subheadline}</p>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            {/* Header */}
            <div className="grid grid-cols-2">
              <div className="p-6 bg-[#2d3a2d]/10 text-center border-r border-[#e8e0d4]">
                <span className="text-[#2d3a2d]/60 text-sm tracking-wide uppercase">Predator Tools</span>
              </div>
              <div className="p-6 bg-[#d97706]/10 text-center">
                <span className="text-[#d97706] text-sm tracking-wide uppercase font-medium">DarkWebIQ</span>
              </div>
            </div>
            {/* Rows */}
            {content.comparison.capabilitiesEnhanced.map((cap, i) => (
              <div key={i} className={`grid grid-cols-2 ${i !== content.comparison.capabilitiesEnhanced.length - 1 ? 'border-b border-[#e8e0d4]' : ''}`}>
                <div className="p-6 border-r border-[#e8e0d4] flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#999] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[#2d3a2d]/60 text-sm">{cap.theirs}</span>
                </div>
                <div className="p-6 flex items-start gap-3 bg-[#faf8f5]">
                  <div className="w-5 h-5 rounded-full bg-[#d97706] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#2d3a2d] text-sm">{cap.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Solutions - Species Profiles */}
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

      {/* 12. Free Assessment - Territory Scan */}
      <section className="py-24 bg-[#2d3a2d] text-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[#3d4f3d] rounded-lg p-12 text-center relative overflow-hidden">
            {/* Organic shape decoration */}
            <svg className="absolute top-0 left-0 w-48 h-48 text-[#d97706]/10" viewBox="0 0 200 200">
              <circle cx="0" cy="0" r="150" fill="currentColor"/>
            </svg>
            <svg className="absolute bottom-0 right-0 w-64 h-64 text-[#f5f0e8]/5" viewBox="0 0 200 200">
              <circle cx="200" cy="200" r="150" fill="currentColor"/>
            </svg>

            <div className="relative z-10">
              <span className="text-[#d97706] text-sm tracking-[0.3em] uppercase font-medium">{content.riskCalculator.subheadline}</span>
              <h2 className="text-3xl lg:text-4xl font-light mt-4 mb-4">{content.riskCalculator.headline}</h2>
              <p className="text-[#f5f0e8]/70 mb-8 max-w-xl mx-auto">{content.riskCalculator.description}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <input
                  type="text"
                  placeholder="yourdomain.com"
                  className="px-6 py-4 bg-[#2d3a2d] border border-[#f5f0e8]/20 text-[#f5f0e8] placeholder:text-[#f5f0e8]/40 rounded-sm focus:outline-none focus:border-[#d97706] w-full sm:w-64"
                />
                <button className="bg-[#d97706] text-white px-8 py-4 font-medium tracking-wide hover:bg-[#b45309] transition-colors rounded-sm whitespace-nowrap">
                  {content.riskCalculator.cta}
                </button>
              </div>
              <p className="text-[#f5f0e8]/40 text-xs">{content.riskCalculator.privacyNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What To Expect - Journey Map */}
      <section className="py-24 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d97706] text-sm tracking-[0.3em] uppercase font-medium">Your Journey</span>
            <h2 className="text-4xl font-light mt-4 text-[#2d3a2d]">{content.whatToExpect.headline}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.whatToExpect.steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-[#2d3a2d] flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-light text-[#d97706]">{step.number}</span>
                </div>
                {i < content.whatToExpect.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[#d97706]/20"/>
                )}
                <h3 className="text-lg font-medium mb-3 text-[#2d3a2d]">{step.title}</h3>
                <p className="text-[#2d3a2d]/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-[#d97706] italic">{content.whatToExpect.reassurance}</p>
        </div>
      </section>

      {/* 15. Testimonials Grid - Field Notes */}
      <section className="py-24 bg-[#2d3a2d] text-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d97706] text-sm tracking-[0.3em] uppercase font-medium">Field Notes</span>
            <h2 className="text-4xl font-light mt-4">From the Expedition</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonFeaturedTestimonials.map((testimonial, i) => (
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

      {/* 16. Community/Newsletter - Pack Membership */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-lg p-12 text-center shadow-md">
            <h2 className="text-3xl font-light text-[#2d3a2d] mb-4">{content.community.headline}</h2>
            <p className="text-[#2d3a2d]/60 mb-8">{content.community.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 border border-[#2d3a2d]/20 bg-white text-[#2d3a2d] placeholder:text-[#2d3a2d]/40 rounded-sm focus:outline-none focus:border-[#d97706] w-full sm:w-64"
              />
              <button className="border border-[#2d3a2d] text-[#2d3a2d] px-8 py-4 font-medium tracking-wide hover:bg-[#2d3a2d] hover:text-[#f5f0e8] transition-colors rounded-sm whitespace-nowrap">
                {content.community.cta}
              </button>
            </div>
            <p className="text-xs text-[#2d3a2d]/40">{content.community.socialProof}</p>
          </div>
        </div>
      </section>

      {/* 17. Final CTA - Call of the Wild */}
      <section className="py-24 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#2d3a2d] text-[#f5f0e8] rounded-lg p-16 relative overflow-hidden">
            {/* Organic shape decoration */}
            <svg className="absolute top-0 right-0 w-64 h-64 text-[#3d4f3d]" viewBox="0 0 200 200">
              <circle cx="150" cy="50" r="100" fill="currentColor"/>
            </svg>
            <svg className="absolute bottom-0 left-0 w-48 h-48 text-[#d97706]/10" viewBox="0 0 200 200">
              <circle cx="50" cy="150" r="100" fill="currentColor"/>
            </svg>

            <div className="relative z-10 text-center">
              <h2 className="text-4xl lg:text-5xl font-light mb-6">{content.cta.headline}</h2>
              <p className="text-xl text-[#f5f0e8]/70 mb-10 max-w-2xl mx-auto">{content.cta.subheadline}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button className="bg-[#d97706] text-white px-12 py-5 font-medium tracking-wide hover:bg-[#b45309] transition-colors rounded-sm">
                  {content.cta.button}
                </button>
                <button className="border border-[#f5f0e8]/30 text-[#f5f0e8] px-8 py-5 font-medium tracking-wide hover:border-[#d97706] hover:text-[#d97706] transition-colors rounded-sm">
                  {content.cta.secondaryButton}
                </button>
              </div>
              <p className="text-[#d97706] text-sm">{content.cta.urgencyText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 18. Footer with certifications */}
      <footer className="py-12 bg-[#2d3a2d] text-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <p className="text-[#f5f0e8]/60 text-sm">{content.footer.trustedBy}</p>
            <div className="flex flex-wrap justify-center gap-6">
              {content.footer.certifications.map((cert, i) => (
                <span key={i} className="text-[#f5f0e8]/60 text-xs border border-[#f5f0e8]/20 px-4 py-2 rounded-sm">{cert}</span>
              ))}
            </div>
          </div>
          <div className="border-t border-[#f5f0e8]/10 pt-8 flex justify-between items-center text-sm">
            <p className="text-[#f5f0e8]/40">DarkWebIQ — Nature Documentary V3 Theme Preview</p>
            <p className="text-[#d97706]">Protecting the Digital Ecosystem</p>
          </div>
        </div>
      </footer>

      {/* 19. Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#2d3a2d]/95 backdrop-blur border-t border-[#f5f0e8]/10 p-4 md:hidden">
        <button className="w-full bg-[#d97706] text-white py-4 font-medium tracking-wide rounded-sm">
          {content.hero.cta}
        </button>
      </div>

      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-20 md:hidden"/>
    </div>
  );
}
