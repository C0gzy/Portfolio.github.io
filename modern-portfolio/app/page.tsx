'use client'

import { motion } from "framer-motion"
import { Github, Linkedin, LinkIcon } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Portfolio() {
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

  const projects = [
    {
      title: "Plycs.com",
      description: "Made for the University of Plymouth Computer Science Society. It features searchable events, contact pages and CSS animations",
      image: "/project/plycs.png",
      imageWidth: 500,
      imageHeight: 500,
      tags: ["NextJS", "Tailwind", "React", "CSS"],
      link: "https://plycs.com"
    },
    {
      title: "PicFlick",
      description: "An App for IOS and Android that allows you to swipe through your camera roll and delete or keep your photos in an easy way",
      image: "/project/PicFlick.webp",
      imageWidth: 500,
      imageHeight: 500,
      tags: ["React", "React Native", "Expo"],
      link: "https://github.com/C0gzy/SwipeDeleteProject"
    },
    {
      title: "Top Horror",
      description: "Made for my University End of year project. The website has a searchable list of 10,000 horror films from indie to high budget to help users find the perfect film to watch that night.",
      image: "/project/TopHorror.png",
      imageWidth: 500,
      imageHeight: 500,
      tags: ["NodeJS", "HTML", "CSS", "JSON", "JavaScript"],
      link: "/SubWebs/Comp1004WebsiteProject/index.html"
    },
    {
      title: "Green M&M",
      description: "A Python Discord Bot. Built to Download and play Music/Videos From Youtube. The Project is free and Open-Source at my GitHub page. Currently it supports video queues, Video Descriptions.",
      image: "/project/Disc.png",
      imageWidth: 300,
      imageHeight: 300,
      tags: ["Python", "Discord.py"],
      link: "https://github.com/C0gzy/GreenM-M"
    },
    
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="text-8xl font-bold mb-8">
            <span className="text-white">&lt;TC&gt;</span>
          </div>
          <h1 className="text-2xl font-bold max-w-3xl mx-auto">
            Hello, I'm Tom Cogzell and I'm currently a Student at the University of Plymouth studying software Engineering.
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            This website is a brief showcase of what I've worked on and what I'm currently working on.
          </p>
          <div className="flex md:flex-row flex-col justify-center gap-4 pt-4">
            <Button size="lg" variant="destructive" asChild className="bg-blue-600 hover:bg-blue-800">
              <Link href='/Tom_CV2025.pdf'><LinkIcon className="mr-2 h-4 w-4" /> My Resume</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://github.com/C0gzy"><Github className="mr-2 h-4 w-4" /> GitHub</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://www.linkedin.com/in/tom-cogzell-878bb22b2/"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Technologies Section */}
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <TooltipProvider>
              {technologies.map((tech) => (
                <Tooltip  key={tech.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-6 bg-gray-900 rounded-xl cursor-pointer"
                    >
                      <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-4" />
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

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={project.imageWidth}
                        height={project.imageHeight}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-blue-600 hover:bg-blue-800" asChild>
                      <Link href={project.link} target="_blank">
                        <LinkIcon className="mr-2 h-4 w-4" /> View Project
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

