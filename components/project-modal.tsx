"use client"

import { useEffect, useId, useRef, useState, type ReactNode } from "react"
import { ArrowUpRight, X } from "lucide-react"
import { ProjectCover } from "@/components/project-cover"
import type { PortfolioProject } from "@/lib/site-data"

interface ProjectModalProps {
  project: PortfolioProject | null
  onClose: () => void
  /**
   * Icons rendered on the server and handed across the RSC boundary, so the
   * generated icon map never enters the client bundle.
   */
  techIcons: Record<string, ReactNode>
}

/**
 * Built on the native <dialog> element.
 *
 * `showModal()` provides focus trapping, focus restore, Escape-to-close, an
 * inert background, and top-layer stacking — all of which the previous
 * hand-rolled overlay lacked. Enter/exit animation is CSS (see globals.css),
 * so no animation library is involved.
 */
export function ProjectModal({ project, onClose, techIcons }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const descriptionId = useId()

  // Keep showing the last project while the close transition plays.
  const [lastProject, setLastProject] = useState(project)
  if (project && project !== lastProject) {
    setLastProject(project)
  }
  const shown = project ?? lastProject

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (project && !dialog.open) {
      dialog.showModal()
    } else if (!project && dialog.open) {
      dialog.close()
    }
  }, [project])

  /**
   * Escape fires the cancelable `cancel` event before the browser closes the
   * dialog itself. Preventing that and routing through onClose keeps React the
   * single source of truth; letting the browser close it directly would leave
   * state saying "open", stranding the scroll lock and needing two clicks to
   * reopen. The keydown listener is a fallback for the same path.
   */
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleCancel = (event: Event) => {
      event.preventDefault()
      onClose()
    }

    // Fallback for the same reason, in case `cancel` doesn't reach us.
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        onClose()
      }
    }

    dialog.addEventListener("cancel", handleCancel)
    dialog.addEventListener("keydown", handleKeyDown)

    return () => {
      dialog.removeEventListener("cancel", handleCancel)
      dialog.removeEventListener("keydown", handleKeyDown)
    }
  }, [onClose])

  // The dialog is in the top layer, but the page behind it still scrolls.
  useEffect(() => {
    if (!project) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [project])

  if (!shown) return null

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClick={(event) => {
        // Clicks land on the dialog itself only when they hit the backdrop.
        if (event.target === dialogRef.current) onClose()
      }}
      className="project-dialog surface w-[min(48rem,calc(100vw-1.5rem))] overflow-hidden p-0"
    >
      <div className="relative">
        <ProjectCover project={shown} className="h-40 w-full sm:h-56" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="max-h-[calc(90vh-10rem)] space-y-8 overflow-y-auto p-5 sm:max-h-[calc(90vh-14rem)] sm:p-8 md:p-10">
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="font-mono uppercase tracking-[0.1em]">{shown.category}</span>
            <span aria-hidden>·</span>
            <span>{shown.year}</span>
            <span aria-hidden>·</span>
            <span>{shown.role}</span>
          </div>

          <h2 id={titleId} className="text-2xl font-bold text-foreground sm:text-4xl">
            {shown.title}
          </h2>

          <p id={descriptionId} className="text-pretty text-base text-muted-foreground sm:text-lg">
            {shown.summary}
          </p>

          {shown.href && (
            <a
              href={shown.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Visit live site
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          )}
        </header>

        <div className="grid gap-5 sm:grid-cols-3">
          {(
            [
              ["The problem", shown.problem],
              ["What I built", shown.approach],
              ["Outcome", shown.outcome],
            ] as const
          ).map(([heading, body]) => (
            <section key={heading} className="space-y-2">
              <h3 className="eyebrow">{heading}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </section>
          ))}
        </div>

        <section className="space-y-3">
          <h3 className="eyebrow">Highlights</h3>
          <ul className="space-y-2">
            {shown.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm text-muted-foreground">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="eyebrow">Stack</h3>
          <ul className="flex flex-wrap gap-2">
            {shown.technologies.map((tech) => (
              <li
                key={tech.name}
                className="flex items-center gap-2 rounded-full border border-border bg-background/60 py-1.5 pl-2.5 pr-3.5 text-sm font-medium text-foreground"
              >
                {techIcons[tech.icon]}
                {tech.name}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </dialog>
  )
}
