import { Github, Linkedin, Mail } from "lucide-react"
import { BentoCard } from "@/components/bento-card"
import { siteData } from "@/lib/site-data"

/**
 * Replaces the old profiles card, which showed Globe and Twitter icons for
 * links that actually pointed at GitHub and LinkedIn.
 */
const LINKS = [
  { label: "GitHub", handle: siteData.person.username, href: siteData.social.github, Icon: Github, external: true },
  { label: "LinkedIn", handle: "in/hrithik-p", href: siteData.social.linkedin, Icon: Linkedin, external: true },
  { label: "Email", handle: siteData.person.email, href: `mailto:${siteData.person.email}`, Icon: Mail, external: false },
]

export function ConnectCard() {
  return (
    <BentoCard eyebrow="Elsewhere" title="Find me" bodyClassName="justify-center">
      <ul className="space-y-2">
        {LINKS.map(({ label, handle, href, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="flex items-center gap-3 rounded-xl border border-border bg-background/50 p-3 transition-colors hover:border-primary/50 hover:bg-muted/60"
            >
              <Icon className="size-4 shrink-0 text-primary" aria-hidden />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-foreground">{label}</span>
                <span className="block truncate text-xs text-muted-foreground">{handle}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </BentoCard>
  )
}
