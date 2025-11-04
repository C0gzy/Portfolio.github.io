'use client'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { CVSection } from '@/components/cv-section'
import { Technologies } from '@/components/technologies'
import { Projects } from '@/components/projects'
import { Clientprojects } from '@/components/Clientprojects'
import { Navbar } from '@/components/navbar'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar />
      <Hero />
      <Technologies />
      <Clientprojects />
      <Projects />
      <Footer />
    </div>
  )
}
