import type { Metadata } from "next"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/contact-form"
import { siteData } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteData.person.fullName} — ${siteData.person.availability.toLowerCase()}, based in ${siteData.person.location}.`,
  alternates: { canonical: "/contact" },
}

const details = [
  { label: "Email", value: siteData.person.email, href: `mailto:${siteData.person.email}`, Icon: Mail },
  // { label: "Phone", value: siteData.person.phone, href: `tel:${siteData.person.phone.replace(/\s/g, "")}`, Icon: Phone },
  { label: "Based in", value: siteData.person.location, href: null, Icon: MapPin },
]

const profiles = [
  { label: "GitHub", href: siteData.social.github, Icon: Github },
  { label: "LinkedIn", href: siteData.social.linkedin, Icon: Linkedin },
]

export default function ContactPage() {
  return (
    <>
      <Header />

      <Container as="main" id="main" className="py-12 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-10">
            <div className="space-y-4">
              <p className="eyebrow">Contact</p>
              <h1 className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
                Let&rsquo;s talk about <span className="text-gradient">what you&rsquo;re building</span>
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {siteData.person.availability}. Send over the context — the product, the team, and the problem you
                want solved — and I&rsquo;ll come back to you within a day or two.
              </p>
            </div>

            <ul className="space-y-3">
              {details.map(({ label, value, href, Icon }) => {
                const content = (
                  <>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/60">
                      <Icon className="size-5 text-primary" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.1em] text-muted-foreground">{label}</span>
                      <span className="block break-words font-medium text-foreground">{value}</span>
                    </span>
                  </>
                )

                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        className="surface surface-interactive flex items-center gap-4 p-4 sm:p-5"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="surface flex items-center gap-4 p-4 sm:p-5">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div>
              <h2 className="eyebrow mb-4">Find me online</h2>
              <ul className="flex flex-wrap gap-3">
                {profiles.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 rounded-full border border-border bg-background/60 py-2.5 pl-3.5 pr-5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      <Icon className="size-4" aria-hidden />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal index={1}>
            <div className="surface p-6 sm:p-8 md:p-10">
              <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">Send a message</h2>
              <p className="mb-8 text-sm text-muted-foreground">
                Prefer email? Write to{" "}
                <a href={`mailto:${siteData.person.email}`} className="font-medium text-primary hover:underline">
                  {siteData.person.email}
                </a>{" "}
                directly.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>

      <Footer />
    </>
  )
}
