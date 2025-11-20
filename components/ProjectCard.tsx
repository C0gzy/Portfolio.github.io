'use client'

import { motion } from "framer-motion"
import { LinkIcon, ExternalLink } from 'lucide-react'
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

import { type Project } from "@/lib/types"

export function ProjectCard({ projectsData }: { projectsData: Project[] }) {

    return (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="flex flex-col h-full group hover:shadow-2xl transition-all duration-500 border-accent/10  hover:shadow-accent/40 hover:border-accent/30 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="flex-shrink-0 pb-4 relative z-10">
                    <CardTitle className="text-2xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow flex flex-col gap-4 relative z-10">
                    {/* Media Carousel */}
                    <div className="w-full mb-4 flex-shrink-0 rounded-xl overflow-hidden bg-muted/30 border border-border/50 shadow-inner group-hover:shadow-md transition-all duration-300">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {project.media.map((mediaItem, idx) => (
                            <CarouselItem key={idx}>
                              <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden bg-background/50 flex items-center justify-center">
                                {mediaItem.type === "image" ? (
                                  <Image
                                    src={mediaItem.src}
                                    alt={`${project.title} - Image ${idx + 1}`}
                                    width={mediaItem.width || 500}
                                    height={mediaItem.height || 500}
                                    className="object-contain max-w-full max-h-full p-2 transition-transform duration-500 group-hover:scale-105"
                                  />
                                ) : mediaItem.type === "video" ? (
                                  <video
                                    src={mediaItem.src}
                                    className="w-full h-full object-contain"
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
                            <CarouselPrevious className="left-2 border-accent/20 hover:border-accent" />
                            <CarouselNext className="right-2 border-accent/20 hover:border-accent" />
                          </>
                        )}
                      </Carousel>
                    </div>
  
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
  
                  <CardFooter className="mt-auto gap-2 flex-wrap">
                    {project.link.map((link, idx) => (
                      <Button 
                        key={idx}
                        size="lgMaxRadius"
                        variant="AccentGradient" 
                        asChild
                        className="flex-1 sm:flex-none"
                      >
                        <Link href={link.link} target="_blank">
                          <LinkIcon className="mr-2 h-4 w-4" /> 
                          {link.linkName}
                        </Link>
                      </Button>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
    )
}