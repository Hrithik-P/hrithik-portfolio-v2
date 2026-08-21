"use client"

import { useState, type ReactNode } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { Reveal } from "@/components/reveal"
import { siteData, type PortfolioProject } from "@/lib/site-data"

interface ProjectGridProps {
  techIcons: Record<string, ReactNode>
}

export function ProjectGrid({ techIcons }: ProjectGridProps) {
  const [selected, setSelected] = useState<PortfolioProject | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {siteData.projects.map((project, index) => (
          <Reveal key={project.id} index={index}>
            <ProjectCard project={project} onSelect={() => setSelected(project)} />
          </Reveal>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} techIcons={techIcons} />
    </>
  )
}
