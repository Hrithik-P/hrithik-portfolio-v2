"use client"

import { Plus } from "lucide-react"
import { ProjectCover } from "@/components/project-cover"
import type { PortfolioProject } from "@/lib/site-data"

interface ProjectCardProps {
  project: PortfolioProject
  onSelect: () => void
}

/**
 * A real <button>, not a div with onClick.
 *
 * The previous version put the handler on a motion.div with no role, tabIndex,
 * or key handling, which made every project unreachable by keyboard.
 */
export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-haspopup="dialog"
      className="surface surface-interactive group flex h-full w-full flex-col overflow-hidden p-0 text-left"
    >
      <ProjectCover project={project} className="aspect-[4/3] w-full" />

      <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="font-mono uppercase tracking-[0.1em]">{project.category}</span>
          <span aria-hidden>·</span>
          <span>{project.year}</span>
        </div>

        <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary sm:text-2xl">
          {project.title}
        </h3>

        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-4">
          <span className="text-xs font-medium text-muted-foreground">Read case study</span>
          <span
            aria-hidden
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:rotate-90 group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:text-primary"
          >
            <Plus className="size-4" />
          </span>
        </div>
      </div>
    </button>
  )
}
