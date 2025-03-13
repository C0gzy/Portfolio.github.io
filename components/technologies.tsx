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
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <h2 className="text-5xl font-bold text-center mb-12 md:text-7xl ">Technologies</h2>
        <p className="text-gray-400 text-center text-xl mb-12">
          These are the main Technologies I use to create my projects and that I'm most proficient in
        </p>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 md:gap-8 gap-4">
          <TooltipProvider>
            {technologies.map((tech) => (
              <Tooltip key={tech.name}>
                <TooltipTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center md:p-6 p-3 bg-gray-900 rounded-xl cursor-pointer"
                  >
                    <img src={tech.icon} alt={tech.name} className="md:w-16 md:h-16 w-8 h-8 md:mb-4 mb-2" />
                    <h3 className="text-lg font-semibold">{tech.name}</h3>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 border-gray-800 text-white p-2 rounded-md">
                  <p>{tech.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </motion.div>
    </section>
  )
}
