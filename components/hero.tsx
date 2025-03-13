'use client'

import { motion } from "framer-motion"
import { Github, Linkedin, LinkIcon } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 pt-40 relative overflow-hidden">
      {/* Background Animation */}
      <div className=" inset-0 -z-10">
        <div className=" inset-0">
          <div className="inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950"></div>
        </div>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-3 w-3 rounded-full bg-blue-600/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.4, 0.9, 0.4],
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 relative z-10"
      >
        <motion.div 
          className="w-64 h-64 rounded-full mb-4 mx-auto relative overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          initial={{ perspective: 500 }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
            transition: "box-shadow 0.5s ease-in-out, transform 0.3s ease-out",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            position: "relative"
          }}
        >
          {/* Shine effect overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 z-10"
            style={{ 
              transform: "translateX(-100%)",
              transition: "transform 0s ease-out, opacity 0.3s ease-in-out" 
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "loop", 
                ease: "easeInOut",
                repeatDelay: 1
              }}
            />
          </div>
          <motion.div
            className="w-full h-full absolute inset-0"
            initial={{ rotateX: 0, rotateY: 0 }}
            whileHover="hover"
            variants={{
              hover: {
                rotateX: 0,
                rotateY: 0,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }
            }}
            onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => {
              const element = event.currentTarget;
              const parentElement = element.parentElement;
              const rect = element.getBoundingClientRect();
              const mouseX = event.clientX - rect.left - rect.width / 2;
              const mouseY = event.clientY - rect.top - rect.height / 2;
              
              // Calculate rotation based on mouse position
              const rotateY = mouseX / 10; // More pronounced rotation
              const rotateX = -mouseY / 10; // More pronounced rotation
              
              // Calculate shadow direction based on mouse position
              const shadowX = -rotateY * 0.5;
              const shadowY = -rotateX * 0.5;
              const shadowBlur = Math.abs(rotateX) + Math.abs(rotateY) + 20;
              
              // Apply the rotation directly to the element
              element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
              
              // Apply dynamic shadow to parent element
              if (parentElement) {
                parentElement.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px -5px rgba(0, 0, 100, 0.4)`;
              }
            }}
            onMouseLeave={(event: React.MouseEvent<HTMLDivElement>) => {
              const element = event.currentTarget;
              const parentElement = element.parentElement;
              
              // Add transition for smooth reset
              element.style.transition = "transform 0.8s ease-out";
              
              // Reset transform with smooth transition
              element.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
              
              // Reset shadow with smooth transition
              if (parentElement) {
                parentElement.style.transition = "box-shadow 0.8s ease-out";
                parentElement.style.boxShadow = "0 10px 30px -15px rgba(0, 0, 0, 0.5)";
              }
              
              // Remove transition after animation completes to not affect mouse move
              setTimeout(() => {
                element.style.transition = "";
                if (parentElement) {
                  parentElement.style.transition = "box-shadow 0.5s ease-in-out, transform 0.3s ease-out";
                }
              }, 800);
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image 
              src="Tom.jpeg" 
              alt="Tom Pfp Pic" 
              className="w-full h-full rounded-full object-cover" 
              width={500} 
              height={1000}
            />
          </motion.div>
        </motion.div>
        <h1 className="text-2xl font-bold max-w-3xl mx-auto">
          Hello, I'm Tom Cogzell and I'm currently a Student at the University of Plymouth studying software Engineering.
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          This website is a brief showcase of what I've worked on and what I'm currently working on.
        </p>
        <div className="flex md:flex-row flex-col justify-center gap-4 pt-4">
          <Button size="lg" variant="destructive" asChild className="bg-blue-600 hover:bg-blue-800">
            <Link target="_blank" href='/Tom_CV2025.pdf'><LinkIcon className="mr-2 h-4 w-4" /> My Resume</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link target="_blank" href="https://github.com/C0gzy"><Github className="mr-2 h-4 w-4" /> GitHub</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link target="_blank" href="https://www.linkedin.com/in/tom-cogzell-878bb22b2/"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
