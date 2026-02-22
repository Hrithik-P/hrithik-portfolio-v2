"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { PortfolioProject } from "@/lib/site-data"

interface ProjectCardProps {
  project: PortfolioProject
  index: number
  onClick: () => void
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="group relative bg-card border border-border/40 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={project.thumbnail || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <p className="text-xs font-medium text-muted-foreground mb-2 tracking-wider uppercase">{project.category}</p>
        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Plus Icon */}
        <motion.div
          whileHover={{ rotate: 90, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}
