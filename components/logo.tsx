import Link from "next/link"
import { siteData } from "@/lib/site-data"
import { cn } from "@/lib/utils"

/**
 * Monogram drawn as geometry rather than set as a font glyph, so the stems and
 * crossbar stay optically even at 32px instead of inheriting whatever the
 * typeface does at small sizes.
 */
function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden focusable="false">
      <rect x="3" y="2.4" width="2.7" height="11.2" rx="1.35" fill="currentColor" />
      <rect x="10.3" y="2.4" width="2.7" height="11.2" rx="1.35" fill="currentColor" />
      {/* Crossbar sits a touch above true centre — optically centred reads low. */}
      <rect x="3" y="6.6" width="10" height="2.6" rx="1.3" fill="currentColor" />
    </svg>
  )
}

export type LogoVariant = "tile" | "outline" | "bracket" | "wordmark"

interface LogoProps {
  variant?: LogoVariant
  /** Adds the hover tilt. Off in the footer, where there's no group. */
  interactive?: boolean
  className?: string
}

/**
 * Shared between the header and footer, which previously each inlined their
 * own copy of the mark.
 */
export function Logo({ variant = "bracket", interactive = true, className }: LogoProps) {
  const { name } = siteData.person

  const wordmark = (
    <span className="text-lg font-semibold tracking-tight text-foreground">
      {name}
      {variant === "wordmark" && <span className="text-primary">.</span>}
    </span>
  )

  return (
    <Link
      href="/"
      aria-label={`${name} — home`}
      className={cn("group/logo flex w-fit items-center gap-2.5", className)}
    >
      {variant === "tile" && (
        <span
          className={cn(
            // Same gradient-plus-highlight language as .surface, so the mark
            // belongs to the page instead of sitting on top of it.
            "relative flex size-9 items-center justify-center overflow-hidden rounded-xl",
            "bg-gradient-to-br from-primary to-accent text-primary-foreground",
            "shadow-[0_4px_12px_-4px_var(--glow-primary)] ring-1 ring-inset ring-white/25",
            interactive && "transition-transform duration-300 group-hover/logo:-rotate-6",
          )}
        >
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />
          <Monogram className="relative size-5" />
        </span>
      )}

      {variant === "outline" && (
        <span
          className={cn(
            "flex size-9 items-center justify-center rounded-xl border border-border bg-card text-primary",
            interactive && "transition-colors duration-300 group-hover/logo:border-primary/60",
          )}
        >
          <Monogram className="size-5" />
        </span>
      )}

      {variant === "bracket" && (
        <span className="flex items-center gap-0.5 font-mono text-lg font-bold text-primary">
          <span aria-hidden>{"<"}</span>
          <Monogram className="size-4 text-foreground" />
          <span aria-hidden>{"/>"}</span>
        </span>
      )}

      {wordmark}
    </Link>
  )
}
