import { BentoCard } from "@/components/bento-card"
import { TechIcon } from "@/components/tech-icon"
import { siteData } from "@/lib/site-data"

/**
 * Replaces the old "Insights" card, which showed four decorative squares and
 * linked to LinkedIn under a heading implying a blog that doesn't exist.
 */
export function ApproachCard() {
  return (
    <BentoCard href="/about#approach" eyebrow="How I work" title="Approach" bodyClassName="justify-center gap-3">
      <ul className="space-y-2.5">
        {siteData.principles.map((principle) => (
          <li key={principle.title} className="flex items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background/50">
              <TechIcon name={principle.icon} className="size-4 text-primary" />
            </span>
            <span className="text-sm font-medium text-foreground">{principle.title}</span>
          </li>
        ))}
      </ul>
    </BentoCard>
  )
}
