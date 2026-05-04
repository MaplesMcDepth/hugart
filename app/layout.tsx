import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'Hugart - AI Art Remix Playground',
  description: 'Generate, remix, and experiment with AI art',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen bg-gray-950 text-white">
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
