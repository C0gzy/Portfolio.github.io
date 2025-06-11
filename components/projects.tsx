'use client'

import { motion } from "framer-motion"
import { LinkIcon } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { projectsData } from "@/Constants/projects"

export function Projects() {
  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
          {projectsData.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <Card className="bg-gray-900 border-gray-800 flex flex-col h-full">
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="w-full mb-4 flex-shrink-0">
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
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto gap-2">
                  {project.link.map((link , index) => (
                    <Button className="bg-blue-600 hover:bg-blue-800" asChild>
                      <Link href={link.link} target="_blank" key={index}>
                        <LinkIcon className="mr-2 h-4 w-4" /> {link.linkName}
                      </Link>
                    </Button>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
