'use client'

import { motion } from "framer-motion"
import { Github, Linkedin, FileText, ArrowDown } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Waves } from "./ui/wave-background"

export function Hero() {
  return (
    <section id="home" className=" px-4 py-20 pt-32 sm:pt-40 relative z-10">
       <Waves className="w-full h-full" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8 max-w-4xl mx-auto relative z-10"
      >
        {/* Profile Image */}
        <motion.div 
          className="w-48 h-48 sm:w-64 sm:h-64 rounded-full mb-8 mx-auto relative overflow-hidden group shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.2
          }}
        >
          <div className="absolute inset-0 border-4 border-accent/20 rounded-full group-hover:border-accent/40 transition-colors"></div>
          <Image 
            src="/Tom.webp" 
            alt="Tom Cogzell" 
            className="border-4 border-accent/20 rounded-full group-hover:border-accent/40 transition-colors w-full h-full object-cover" 
            width={500} 
            height={500}
            priority
          />
        </motion.div>

        {/* Heading */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hello, I'm{' '}
          <span className="text-accent">Tom Cogzell</span>
        </motion.h1>

        <motion.p 
          className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Software Engineering Student at the University of Plymouth
        </motion.p>

        <motion.p 
          className="text-lg text-muted-foreground/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          This website is a brief showcase of what I've worked on and what I'm currently working on.
        </motion.p>
          
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button size="lgMaxRadius" variant="AccentGradient" asChild className="group">
            <Link target="_blank" href='/TomCogzell_CV2026.pdf'>
              <FileText className="mr-2 h-4 w-4" /> 
              View Resume
            </Link>
          </Button>
          <Button size="lgMaxRadius" variant="outlineGradient" asChild>
            <Link href="https://github.com/C0gzy" target="_blank">
              <Github className="mr-2 h-4 w-4" /> 
              GitHub
            </Link>
          </Button>
          <Button size="lgMaxRadius" variant="outlineGradient" asChild>
            <Link href="https://www.linkedin.com/in/tom-cogzell-878bb22b2/" target="_blank">
              <Linkedin className="mr-2 h-4 w-4" /> 
              LinkedIn
            </Link>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#technologies" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
            <span className="text-sm">Explore More</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>

     
    </section>
  )
}
