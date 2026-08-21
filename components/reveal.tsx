import type { CSSProperties, ElementType, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: ReactNode
  /** Stagger position — multiplied by 70ms. */
  index?: number
  /** Extra delay in seconds, on top of the stagger. */
  delay?: number
  className?: string
  as?: ElementType
}

/**
 * Staggered entrance animation, done entirely in CSS.
 *
 * This used to be a framer-motion client component; the whole library was
 * pulling ~38KB gzipped into every page to fade elements up by 16px. As a
 * plain CSS animation it ships no JavaScript at all, renders on the server,
 * and still works if JS never loads. Reduced-motion users skip it via the
 * media query in globals.css.
 */
export function Reveal({ children, index = 0, delay = 0, className, as: Tag = "div" }: RevealProps) {
  return (
    <Tag
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${(delay + index * 0.07).toFixed(2)}s` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
