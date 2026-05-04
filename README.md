# Hugart

AI Art Remix Playground

## Stack

- Next.js 14 + TypeScript
- Tailwind CSS
- Clerk Auth
- Drizzle ORM + Postgres
- Hugging Face Inference API
- S3 for image storage
- Stripe for payments

## Features

- **Character Generator** - Themed AI character creation
- **Prompt Lab** - Save, fork, and remix prompts
- **Creative Packs** - Premium themed collections

## Setup

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit with your keys

# Run database migrations
npm run db:migrate

# Start dev server
npm run dev
```

## Database Schema

- `users` - Clerk-authenticated users
- `images` - Generated images with prompts
- `prompts` - Saved prompts with forking
- `packs` - Premium creative packs

## License

MIT - MaplesMcDepth
