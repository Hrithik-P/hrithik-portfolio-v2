import { TechIcon } from "@/components/tech-icon"
import { siteData } from "@/lib/site-data"

const SECONDS_PER_ITEM = 3.2

/**
 * CSS-animated marquee.
 *
 * The previous version drove this from a requestAnimationFrame loop that ran
 * for the lifetime of the page — including while scrolled out of view — and
 * ignored prefers-reduced-motion. A keyframe animation stays on the
 * compositor and is paused globally by the reduced-motion rules in
 * globals.css.
 */
export function MarqueeCard() {
  const skills = siteData.marqueeSkills

  return (
    <div className="surface marquee-mask overflow-hidden py-3 sm:py-4">
      <div
        className="marquee-track flex w-max items-center gap-3 sm:gap-4"
        style={{ ["--marquee-duration" as string]: `${skills.length * SECONDS_PER_ITEM}s` }}
      >
        {/* Two copies: the keyframe translates exactly -50%, so the seam is
            invisible and the loop is continuous. */}
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex items-center gap-3 sm:gap-4">
            {skills.map((skill) => (
              <li
                key={skill.label}
                className="flex items-center gap-2.5 rounded-full border border-border bg-background/60 py-2 pl-2.5 pr-4"
              >
                <TechIcon name={skill.icon} className="size-5 shrink-0 sm:size-6" />
                <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">{skill.label}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
