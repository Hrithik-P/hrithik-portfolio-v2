import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/reveal"
import { TechIcon } from "@/components/tech-icon"
import { siteData } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Full background: roles at Quintet Solutions and Howin Cloud, education, certifications, and the complete frontend stack.",
  alternates: { canonical: "/credentials" },
}

const contactLinks = [
  { label: "GitHub", href: siteData.social.github, Icon: Github, external: true },
  { label: "LinkedIn", href: siteData.social.linkedin, Icon: Linkedin, external: true },
  { label: "Email", href: `mailto:${siteData.person.email}`, Icon: Mail, external: false },
]

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mb-6 border-b border-border pb-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
      {children}
    </h2>
  )
}

export default function CredentialsPage() {
  const { person, experience, education, skillGroups, certifications, focusAreas } = siteData

  return (
    <>
      <Header />

      <Container as="main" id="main" className="py-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12 xl:grid-cols-[360px_1fr]">
          {/* Sidebar */}
          <Reveal className="lg:sticky lg:top-24 lg:h-fit">
            <div className="surface space-y-6 p-6 sm:p-8">
              <div className="mx-auto size-40 overflow-hidden rounded-2xl bg-muted sm:size-48">
                <Image
                  src="/hero-portrait.png"
                  alt={`Portrait of ${person.fullName}`}
                  width={384}
                  height={384}
                  className="size-full object-cover object-top"
                  priority
                />
              </div>

              <div className="space-y-1.5 text-center">
                <h1 className="text-2xl font-bold text-foreground">{person.fullName}</h1>
                <p className="text-sm font-medium text-primary">{person.roleLong}</p>
                <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3.5" aria-hidden />
                  {person.location}
                </p>
              </div>

              <ul className="space-y-2">
                {contactLinks.map(({ label, href, Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-3.5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      <Icon className="size-4 shrink-0" aria-hidden />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block rounded-full bg-foreground px-5 py-3 text-center text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>

          {/* Main column */}
          <div className="space-y-14">
            <Reveal index={1}>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{person.tagline}</p>
            </Reveal>

            <Reveal as="section">
              <SectionHeading>Experience</SectionHeading>
              <ol className="space-y-6">
                {experience.map((item) => (
                  <li key={item.period + item.role} className="surface p-5 sm:p-7">
                    <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg font-semibold text-foreground sm:text-xl">{item.role}</h3>
                      <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                    </div>

                    <p className="text-sm font-medium text-primary">{item.company}</p>
                    <p className="mb-4 text-xs text-muted-foreground">{item.location}</p>

                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{item.description}</p>

                    <ul className="mt-4 space-y-2">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3 text-sm text-muted-foreground">
                          <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                      {item.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md bg-muted px-2 py-1 font-mono text-[0.6875rem] text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal as="section">
              <SectionHeading>Stack</SectionHeading>
              {/* Stacked rather than a 2-up grid: the groups differ enough in
                  length that columns leave a ragged gap. */}
              <div className="space-y-4">
                {skillGroups.map((group) => (
                  <div key={group.title} className="surface p-5 sm:p-6">
                    <h3 className="eyebrow mb-4">{group.title}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <li
                          key={skill.name}
                          className="flex items-center gap-2 rounded-full border border-border bg-background/60 py-1.5 pl-2.5 pr-3.5 text-sm text-foreground"
                        >
                          <TechIcon name={skill.icon} className="size-4 shrink-0" />
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal as="section">
              <SectionHeading>Education</SectionHeading>
              <ol className="space-y-3">
                {education.map((item) => (
                  <li
                    key={item.period + item.degree}
                    className="surface flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 py-4"
                  >
                    <div>
                      <h3 className="font-semibold text-foreground">{item.degree}</h3>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                      <p className="text-xs text-muted-foreground/80">{item.location}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal as="section">
              <SectionHeading>Focus areas</SectionHeading>
              <ul className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-sm text-muted-foreground"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="section">
              <SectionHeading>Certifications</SectionHeading>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="surface flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 py-4"
                  >
                    <div>
                      <h3 className="font-medium text-foreground">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{cert.year}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  )
}
