import {
  Activity,
  Blocks,
  CodeXml,
  Component,
  Gauge,
  GitBranch,
  InfinityIcon,
  Layers,
  ShieldCheck,
  Webhook,
  type LucideIcon,
} from "lucide-react"
import { techIcons } from "@/lib/generated/tech-icons"

/** Lucide icons come from the tree-shakeable package rather than the generated set. */
const lucideIcons: Record<string, LucideIcon> = {
  "lucide:activity": Activity,
  "lucide:blocks": Blocks,
  "lucide:code-xml": CodeXml,
  "lucide:component": Component,
  "lucide:gauge": Gauge,
  "lucide:git-branch": GitBranch,
  "lucide:infinity": InfinityIcon,
  "lucide:layers": Layers,
  "lucide:shield-check": ShieldCheck,
  "lucide:webhook": Webhook,
}

interface TechIconProps {
  /** An id from lib/site-data, e.g. `logos:react` or `lucide:gauge`. */
  name: string
  className?: string
}

/**
 * Renders an icon entirely on the server — no client JS, no runtime fetch to
 * api.iconify.design, no pop-in after hydration.
 */
export function TechIcon({ name, className }: TechIconProps) {
  const Lucide = lucideIcons[name]
  if (Lucide) {
    return <Lucide className={className} aria-hidden />
  }

  const icon = techIcons[name]
  if (!icon) return null

  return (
    <svg
      viewBox={`0 0 ${icon.width} ${icon.height}`}
      className={className}
      aria-hidden
      focusable="false"
      // Build-time output from the pinned @iconify-json packages, never user input.
      dangerouslySetInnerHTML={{ __html: icon.body }}
    />
  )
}
