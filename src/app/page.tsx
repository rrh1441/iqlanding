import Link from 'next/link';
import { themes } from '@/lib/content';

const v2Themes = [
  { id: "digital-topography-v2", name: "Digital Topography V2", description: "CISO pain point copy" },
  { id: "swiss-intelligence-v2", name: "Swiss Intelligence V2", description: "CISO pain point copy" },
  { id: "forensic-cleanroom-v2", name: "Forensic Cleanroom V2", description: "CISO pain point copy" },
  { id: "public-health-v2", name: "Public Health V2", description: "CISO pain point copy" },
  { id: "intelligence-dossier-v2", name: "Intelligence Dossier V2", description: "CISO pain point copy" },
  { id: "nature-documentary-v2", name: "Nature Documentary V2", description: "CISO pain point copy" },
  { id: "mission-control-v2", name: "Mission Control V2", description: "CISO pain point copy" },
  { id: "bright-confidence-v2", name: "Bright Confidence V2", description: "CISO pain point copy" },
  { id: "luxury-concierge-v2", name: "Luxury Concierge V2", description: "CISO pain point copy" },
  { id: "blackout-protocol-v2", name: "Blackout Protocol V2", description: "CISO pain point copy" },
  { id: "neue-v2", name: "Neue V2", description: "CISO pain point copy" },
  { id: "editorial-v2", name: "Editorial V2", description: "CISO pain point copy" },
];

const v3Themes = [
  { id: "digital-topography-v3", name: "Digital Topography V3", description: "Expert-optimized copy (92/100)" },
  { id: "swiss-intelligence-v3", name: "Swiss Intelligence V3", description: "Expert-optimized copy (92/100)" },
  { id: "forensic-cleanroom-v3", name: "Forensic Cleanroom V3", description: "Expert-optimized copy (92/100)" },
  { id: "public-health-v3", name: "Public Health V3", description: "Expert-optimized copy (92/100)" },
  { id: "intelligence-dossier-v3", name: "Intelligence Dossier V3", description: "Expert-optimized copy (92/100)" },
  { id: "nature-documentary-v3", name: "Nature Documentary V3", description: "Expert-optimized copy (92/100)" },
  { id: "mission-control-v3", name: "Mission Control V3", description: "Expert-optimized copy (92/100)" },
  { id: "bright-confidence-v3", name: "Bright Confidence V3", description: "Expert-optimized copy (92/100)" },
  { id: "luxury-concierge-v3", name: "Luxury Concierge V3", description: "Expert-optimized copy (92/100)" },
  { id: "blackout-protocol-v3", name: "Blackout Protocol V3", description: "Expert-optimized copy (92/100)" },
  { id: "neue-v3", name: "Neue V3", description: "Full expert layout + copy (92/100)" },
  { id: "editorial-v3", name: "Editorial V3", description: "Expert-optimized copy (92/100)" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-4">DarkWebIQ Design Themes</h1>
          <p className="text-xl text-zinc-400">12 distinct design directions with three copy versions: Original, V2 (CISO pain points), and V3 (Expert-optimized, 92/100 score).</p>
        </header>

        {/* Original Themes */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-300 border-b border-zinc-800 pb-3">Original Copy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme) => (
              <Link
                key={theme.id}
                href={`/themes/${theme.id}`}
                className="group block"
              >
                <div className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-200">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{theme.name}</h3>
                  <p className="text-zinc-500 text-sm">{theme.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* V2 Themes with New Copy */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-emerald-400 border-b border-emerald-800 pb-3">V2 — CISO Pain Point Copy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {v2Themes.map((theme) => (
              <Link
                key={theme.id}
                href={`/themes/${theme.id}`}
                className="group block"
              >
                <div className="border border-emerald-900 rounded-lg p-6 hover:border-emerald-600 hover:bg-emerald-950/30 transition-all duration-200">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">{theme.name}</h3>
                  <p className="text-zinc-500 text-sm">{theme.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* V3 Themes with Expert-Optimized Copy */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-pink-400 border-b border-pink-800 pb-3">V3 — Expert-Optimized Copy (92/100)</h2>
          <p className="text-zinc-500 mb-6 text-sm">Reviewed and optimized by 10 expert personas: Ogilvy, Wiebe, Laja, Krug, Cialdini, Wroblewski, Ariely, Gardner, Godin, and Spool.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {v3Themes.map((theme) => (
              <Link
                key={theme.id}
                href={`/themes/${theme.id}`}
                className="group block"
              >
                <div className="border border-pink-900 rounded-lg p-6 hover:border-pink-500 hover:bg-pink-950/30 transition-all duration-200">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-400 transition-colors">{theme.name}</h3>
                  <p className="text-zinc-500 text-sm">{theme.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
