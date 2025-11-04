'use client'

import { motion } from "framer-motion"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

export function Technologies() {
  const technologies = [
    { 
      name: "NodeJS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description: "Server-side JavaScript runtime environment"
    },
    { 
      name: "Python", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      description: "Versatile programming language for web, data science, and automation"
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      description: "Dynamic programming language for web development"
    },
    { 
      name: "C#", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      description: "Microsoft's object-oriented language for .NET development"
    },
    { 
      name: "Java", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      description: "Object-oriented language known for enterprise applications"
    },
    { 
      name: "SQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      description: "Language for managing and querying databases"
    },
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "JavaScript library for building user interfaces"
    },
    { 
      name: "NextJS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      description: "React framework for production-grade applications"
    },
    { 
      name: "Tailwind", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      description: "Utility-first CSS framework for rapid UI development"
    },
  ]

  return (
    <section id="technologies" className="container mx-auto px-4 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent">Technologies</span> I Use
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The main technologies I use to create my projects and that I'm most proficient in
          </motion.p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          <TooltipProvider>
            {technologies.map((tech, index) => (
              <Tooltip key={tech.name}>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center p-4 sm:p-6 bg-card rounded-xl cursor-pointer border-2 border-transparent hover:border-accent/30 transition-all duration-300 group"
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 transition-transform group-hover:scale-110" 
                    />
                    <h3 className="text-sm sm:text-base font-semibold text-center group-hover:text-accent transition-colors">
                      {tech.name}
                    </h3>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="p-3 rounded-lg max-w-xs">
                  <p className="text-sm">{tech.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </motion.div>
    </section>
  )
}
