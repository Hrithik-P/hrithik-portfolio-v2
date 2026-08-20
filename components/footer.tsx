import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Container } from "@/components/ui/container"
import { navItems, siteData } from "@/lib/site-data"

const socials = [
  { label: "GitHub", href: siteData.social.github, Icon: Github, external: true },
  { label: "LinkedIn", href: siteData.social.linkedin, Icon: Linkedin, external: true },
  { label: "Email", href: `mailto:${siteData.person.email}`, Icon: Mail, external: false },
]

export function Footer() {
  return (
    <footer className="mt-20 w-full border-t border-border/60 sm:mt-28">
      <Container className="py-12 sm:py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm space-y-3">
              <Link href="/" className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">
                  {siteData.person.name.charAt(0)}
                </span>
                <span className="text-lg font-semibold tracking-tight text-foreground">{siteData.person.name}</span>
              </Link>
              <p className="text-sm leading-relaxed text-muted-foreground">{siteData.person.tagline}</p>
            </div>

            <div className="flex gap-12 sm:gap-16">
              <nav aria-label="Footer">
                <h2 className="eyebrow mb-4">Pages</h2>
                <ul className="space-y-2.5">
                  {[...navItems, { href: "/contact", label: "Contact" }].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <h2 className="eyebrow mb-4">Elsewhere</h2>
                <ul className="space-y-2.5">
                  {socials.map(({ label, href, Icon, external }) => (
                    <li key={label}>
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Icon className="size-3.5" aria-hidden />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-8 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteData.person.fullName}
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              Built with Next.js, TypeScript &amp; Tailwind
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
