import { BentoCard } from "@/components/bento-card"
import { TechIcon } from "@/components/tech-icon"
import { siteData } from "@/lib/site-data"

export function ServicesCard() {
  return (
    <BentoCard href="/about#services" eyebrow="Where I go deep" title="What I work on" bodyClassName="justify-center">
      <ul className="grid grid-cols-2 gap-2.5">
        {siteData.services.map((service) => (
          <li
            key={service.name}
            className="flex flex-col gap-2 rounded-xl border border-border bg-background/50 p-3"
          >
            <TechIcon name={service.icon} className="size-5 text-primary" />
            <span className="text-xs font-medium leading-snug text-foreground">{service.name}</span>
          </li>
        ))}
      </ul>
    </BentoCard>
  )
}
