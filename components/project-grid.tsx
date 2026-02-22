"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { siteData, type PortfolioProject } from "@/lib/site-data"

export function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)
  const projects = siteData.projects

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onClick={() => setSelectedProject(project)} />
        ))}
      </motion.div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
