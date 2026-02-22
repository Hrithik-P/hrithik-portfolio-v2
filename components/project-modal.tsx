"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, X } from "lucide-react"
import type { PortfolioProject } from "@/lib/site-data"

interface ProjectModalProps {
  project: PortfolioProject | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [project])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-background/95 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border/40 rounded-2xl sm:rounded-3xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="sticky top-3 sm:top-4 right-3 sm:right-4 ml-auto flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted/80 backdrop-blur-sm border border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted transition-all z-10 float-right mr-3 sm:mr-4"
              aria-label="Close modal"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>

            <div className="p-4 sm:p-6 md:p-8 lg:p-12 clear-both">
              {/* Header */}
              <div className="mb-6 sm:mb-8">
                <p className="text-xs font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                  {project.category}
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Visit Project
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              {/* Images Grid */}
              <div className="mb-6 sm:mb-8 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative rounded-2xl overflow-hidden bg-muted ${
                      index === 0 ? "md:col-span-2 aspect-video" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} preview ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="text-primary">✦</span>
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-muted/50 border border-border/40 rounded-full text-xs sm:text-sm font-medium text-foreground hover:border-primary/50 hover:bg-muted transition-all"
                    >
                      <span className="text-base sm:text-lg">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
