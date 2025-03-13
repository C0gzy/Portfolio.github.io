'use client'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Technologies } from '@/components/technologies'
import { Projects } from '@/components/projects'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Hero />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  )
}
