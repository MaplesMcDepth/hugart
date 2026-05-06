import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function DashboardPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-400">Welcome to Hugart! Start generating AI art.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Generate</h2>
          <p className="text-gray-400">Create new images with AI</p>
          <Link href="/generate" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Start Generating
          </Link>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Remix</h2>
          <p className="text-gray-400">Fork and remix existing prompts</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Packs</h2>
          <p className="text-gray-400">Browse creative packs</p>
        </div>
      </div>
    </div>
  )
}
