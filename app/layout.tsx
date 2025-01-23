import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <head>
        <link rel="icon" href="/Icon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
