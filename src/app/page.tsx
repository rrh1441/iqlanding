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

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-4">DarkWebIQ Design Themes</h1>
          <p className="text-xl text-zinc-400">12 distinct design directions, each with original and CISO pain point copy versions.</p>
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
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-emerald-400 border-b border-emerald-800 pb-3">New Copy Versions</h2>
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
      </div>
    </div>
  );
}
