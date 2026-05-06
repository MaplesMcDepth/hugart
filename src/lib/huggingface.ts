import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function generateImage(prompt: string): Promise<Blob> {
  const result = await hf.textToImage({
    model: 'stabilityai/stable-diffusion-2',
    inputs: prompt,
    parameters: {
      negative_prompt: 'blurry, low quality',
      num_inference_steps: 30,
    }
  });
  
  return result;
}

export async function generateCharacter(theme: string, style: string): Promise<Blob> {
  const prompt = `${theme} character, ${style} style, full body, detailed, high quality`;
  return generateImage(prompt);
}

export async function remixPrompt(original: string, variation: string): Promise<Blob> {
  const prompt = `${original}, ${variation}, remixed, enhanced`;
  return generateImage(prompt);
}
