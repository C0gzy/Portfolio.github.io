'use client'

import { motion } from "framer-motion"
import { clientprojectsData } from "@/Constants/clientprojects"
import { ProjectCard } from "./ProjectCard"

export function Clientprojects() {
  return (
    <section id="client-projects" className="container mx-auto px-4 py-20 sm:py-24">
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
            Client & <span className="text-accent">Job Projects</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional projects built for clients and organizations
          </motion.p>
        </div>

        <ProjectCard projectsData={clientprojectsData} />
      </motion.div>
    </section>
  )
}
