export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Hugart
      </h1>
      <p className="text-xl text-gray-400 mb-8">
        AI Art Remix Playground
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
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