import Link from 'next/link';
import { themes } from '@/lib/content';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-4">DarkWebIQ Design Themes</h1>
          <p className="text-xl text-zinc-400">11 distinct design directions for the landing page. Click to preview each aesthetic.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <Link
              key={theme.id}
              href={`/themes/${theme.id}`}
              className="group block"
            >
              <div className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-200">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{theme.name}</h2>
                <p className="text-zinc-500 text-sm">{theme.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
