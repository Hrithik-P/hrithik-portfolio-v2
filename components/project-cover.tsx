import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"
import type { PortfolioProject } from "@/lib/site-data"

interface ProjectCoverProps {
  project: Pick<PortfolioProject, "hue" | "monogram" | "category" | "year">
  className?: string
  /** Slight variation so a project's modal gallery isn't three identical tiles. */
  variant?: 0 | 1 | 2
  /** Hide the category pill when the cover is rendered small. */
  showLabel?: boolean
  style?: CSSProperties
}

/**
 * Generated cover art, keyed off the project's hue.
 *
 * Replaces the unrelated stock photography that shipped with the template —
 * a magazine mockup told a visitor nothing true about a PropTech dashboard.
 * Swap in a real screenshot per project when one exists.
 */
export function ProjectCover({
  project,
  className,
  variant = 0,
  showLabel = true,
  style,
}: ProjectCoverProps) {
  const { hue, monogram, category } = project
  const shift = variant * 18

  return (
    <div
      className={cn("relative isolate overflow-hidden", className)}
      style={{
        background: `linear-gradient(150deg,
          oklch(0.44 0.17 ${hue + shift}) 0%,
          oklch(0.28 0.12 ${hue + 28 + shift}) 52%,
          oklch(0.17 0.06 ${hue + 48 + shift}) 100%)`,
        ...style,
      }}
    >
      {/* Technical grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "2.25rem 2.25rem",
        }}
      />

      {/* Light pool */}
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 aspect-square w-3/4 rounded-full blur-2xl"
        style={{ background: `oklch(0.82 0.16 ${hue + shift} / 0.42)` }}
      />

      {/* Monogram */}
      <span
        aria-hidden
        className="absolute bottom-[-0.18em] left-[-0.06em] font-mono text-[7rem] font-bold leading-none tracking-tighter text-white/10 sm:text-[9rem]"
      >
        {monogram}
      </span>

      {showLabel && (
        <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
          <span className="inline-flex w-fit rounded-full border border-white/20 bg-black/20 px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
            {category}
          </span>
        </div>
      )}

      {/* Hover sweep — parent card owns the `group` class. */}
      <div
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
    </div>
  )
}
