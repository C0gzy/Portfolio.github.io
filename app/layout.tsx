import type { Metadata } from 'next'
import './globals.css'
import { GrainOverlay } from '@/components/ui/grain-overlay'
import { PostHogProvider } from '../components/PostHogProvider'

export const metadata: Metadata = {
  title: "Tom Cogzell's Portfolio",
  description: 'A portfolio website for Tom Cogzell, a Computer Science student at the University of Plymouth.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/Icon.ico" />
      </head>
      <body>
        <PostHogProvider>
          <GrainOverlay />
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}