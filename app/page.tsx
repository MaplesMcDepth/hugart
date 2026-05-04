import { auth, currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'

export default async function HomePage() {
  const { userId } = await auth()
  const user = userId ? await currentUser() : null

  return (
    <div className="min-h-screen">
      <nav className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Hugart</h1>
        <div>
          {userId ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-400">{user?.emailAddresses[0]?.emailAddress}</span>
              <Link href="/dashboard" className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
                Dashboard
              </Link>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link href="/sign-in" className="text-gray-400 hover:text-white">
                Sign In
              </Link>
              <Link href="/sign-up" className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
                Get Started
              </Link>
            </div>
          )}
        </div>
      </nav>

      <main className="text-center py-20 px-4">
        <h2 className="text-5xl font-bold mb-6">AI Art Remix Playground</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Generate, remix, and experiment with AI art. Create themed characters, 
          explore prompt variations, and build your creative portfolio.
        </p>
        {userId ? (
          <Link href="/dashboard" className="bg-white text-black px-8 py-4 rounded-lg text-lg hover:bg-gray-200 inline-block">
            Open Dashboard
          </Link>
        ) : (
          <Link href="/sign-up" className="bg-white text-black px-8 py-4 rounded-lg text-lg hover:bg-gray-200 inline-block">
            Start Creating
          </Link>
        )}
      </main>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4 pb-20">
        <FeatureCard
          title="Character Generator"
          description="Create themed characters with AI"
          icon="🎨"
        />
        <FeatureCard
          title="Prompt Lab"
          description="Experiment, save, and remix prompts"
          icon="🔬"
        />
        <FeatureCard
          title="Creative Packs"
          description="Premium themed collections"
          icon="✨"
        />
      </div>
    </div>
  )
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
