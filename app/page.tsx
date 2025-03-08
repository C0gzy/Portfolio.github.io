'use client'

import { motion } from "framer-motion"
import { Github, Linkedin, LinkIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Footer } from '@/components/footer'

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
      title: "Meowzie",
      description: "A website and Social App to share cat videos. Donations given to the site are passed on to cat charities. You can upload videos , comment and share with your friends.",
      media: [
        { type: "video", src: "/project/meowzie/Demo.mov" },
        { type: "image", src: "/project/meowzie/Main.png", width: 500, height: 500 },
        { type: "image", src: "/project/meowzie/SShot1.png", width: 500, height: 500 },
        { type: "image", src: "/project/meowzie/SShot2.png", width: 500, height: 500 }
      ],
      tags: ["NextJS", "Tailwind", "React", "TypeScript", "Firebase","React Native"],
      link: "https://meowzie.co.uk"
    },
    {
      title: "Plycs.com",
      description: "Made for the University of Plymouth Computer Science Society. It features searchable events, contact pages and CSS animations",
      media: [
        { type: "image", src: "/project/plycs.png", width: 500, height: 500 }
      ],
      tags: ["NextJS", "Tailwind", "React", "CSS"],
      link: "https://plycs.com"
    },
    {
      title: "World wide tax calculator",
      description: "A tax calculator that allows you to calculate your tax in most countries. Features a interactable globe and Tax News",
      media: [
        { type: "image", src: "/project/TaxCalc.png", width: 500, height: 500 }
      ],
      tags: ["NextJS", "Tailwind", "React","TypeScript"],
      link: "https://tax-app-rho.vercel.app/"    
    },
    {
      title: "PicFlick",
      description: "An App for IOS and Android that allows you to swipe through your camera roll and delete or keep your photos in an easy way",
      media: [
        { type: "image", src: "/project/PicFlick.webp", width: 500, height: 500 }
      ],
      tags: ["React", "React Native", "Expo"],
      link: "https://github.com/C0gzy/SwipeDeleteProject"
    },
    {
      title: "Top Horror",
      description: "Made for my University End of year project. The website has a searchable list of 10,000 horror films from indie to high budget to help users find the perfect film to watch that night.",
      media: [
        { type: "image", src: "/project/TopHorror.png", width: 500, height: 500 }
      ],
      tags: ["NodeJS", "HTML", "CSS", "JSON", "JavaScript"],
      link: "/SubWebs/Comp1004WebsiteProject/index.html"
    },
    {
      title: "Green M&M",
      description: "A Python Discord Bot. Built to Download and play Music/Videos From Youtube. The Project is free and Open-Source at my GitHub page. Currently it supports video queues, Video Descriptions.",
      media: [
        { type: "image", src: "/project/Disc.png", width: 300, height: 300 }
      ],
      tags: ["Python", "Discord.py"],
      link: "https://github.com/C0gzy/GreenM-M"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section with Background Animation */}
      <section className="container mx-auto px-4 py-20 pt-40 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950"></div>
          </div>
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-blue-500/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
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
          <Image src="Tom.jpeg" alt="Tom Pfp Pic" className="w-64 h-64 rounded-full mb-4 mx-auto"  width={500} height={1000}/>
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
                    <div className="w-full mb-4">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {project.media.map((mediaItem, index) => (
                            <CarouselItem key={index}>
                              <div className="relative w-full h-56 rounded-lg overflow-hidden">
                                {mediaItem.type === "image" ? (
                                  <Image
                                    src={mediaItem.src}
                                    alt={`${project.title} - Image ${index + 1}`}
                                    width={mediaItem.width || 500}
                                    height={mediaItem.height || 500}
                                    className="object-contain w-full h-full"
                                  />
                                ) : mediaItem.type === "video" ? (
                                  <video
                                    src={mediaItem.src}
                                    className="w-full h-full object-Contain"
                                    controls
                                    muted
                                  />
                                ) : null}
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {project.media.length > 1 && (
                          <>
                            <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" />
                          </>
                        )}
                      </Carousel>
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
      <Footer />
    </div>
  )
}
