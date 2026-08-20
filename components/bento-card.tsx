import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BentoCardProps {
  /** When set, the whole card becomes one link. */
  href?: string
  external?: boolean
  eyebrow?: string
  title?: string
  children?: ReactNode
  className?: string
  bodyClassName?: string
}

/**
 * Shared shell for the home-page bento grid.
 *
 * The card is a single interactive element rather than a link wrapping a
 * button — the arrow is decorative, so keyboard users get one stop per card
 * instead of two overlapping ones.
 */
export function BentoCard({
  href,
  external,
  eyebrow,
  title,
  children,
  className,
  bodyClassName,
}: BentoCardProps) {
  const isInteractive = Boolean(href)

  const inner = (
    <>
      {children ? <div className={cn("flex flex-1 flex-col", bodyClassName)}>{children}</div> : null}

      {(eyebrow || title) && (
        <div className="mt-6 flex items-end justify-between gap-4">
          <div className="space-y-1">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? (
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h3>
            ) : null}
          </div>

          {isInteractive ? (
            <span
              aria-hidden
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:text-primary"
            >
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
            </span>
          ) : null}
        </div>
      )}
    </>
  )

  const classes = cn(
    "surface group flex h-full flex-col overflow-hidden p-6 sm:p-8",
    isInteractive && "surface-interactive",
    className,
  )

  if (!href) {
    return <div className={classes}>{inner}</div>
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  )
}
