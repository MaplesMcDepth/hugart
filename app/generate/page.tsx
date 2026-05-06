import { generateImage, generateCharacter } from '@/lib/huggingface';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function GeneratePage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  async function generate(formData: FormData) {
    'use server';
    
    const prompt = formData.get('prompt') as string;
    const theme = formData.get('theme') as string;
    
    if (!prompt) return;
    
    try {
      const image = await generateCharacter(prompt, theme || 'modern');
      // Save to database, return URL
      console.log('Generated image for:', prompt);
    } catch (error) {
      console.error('Generation failed:', error);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Generate Art</h1>
      
      <form action={generate} className="max-w-2xl">
        <div className="mb-4">
          <label className="block text-sm mb-2">Prompt</label>
          <textarea 
            name="prompt" 
            className="w-full bg-gray-900 border border-gray-700 rounded p-3"
            rows={3}
            placeholder="A cyberpunk cat with neon lights..."
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm mb-2">Theme</label>
          <select name="theme" className="w-full bg-gray-900 border border-gray-700 rounded p-3">
            <option value="modern">Modern</option>
            <option value="retro">Retro</option>
            <option value="cyberpunk">Cyberpunk</option>
            <option value="fantasy">Fantasy</option>
            <option value="rick-and-morty">Rick and Morty</option>
          </select>
        </div>
        
        <button 
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700"
        >
          Generate
        </button>
      </form>
    </div>
  );
}
