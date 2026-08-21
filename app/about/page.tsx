import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/reveal"
import { TechIcon } from "@/components/tech-icon"
import { siteData } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "About",
  description:
    "How I think about frontend work — reading before rewriting, shared components, every interface state, and performance as a feature.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  const { person, principles, services, stats } = siteData

  return (
    <>
      <Header />

      <Container as="main" id="main" className="py-12 md:py-20">
        {/* Intro */}
        <section className="grid items-center gap-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-14">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-accent/15 blur-2xl"
              />
              <div className="surface relative aspect-square overflow-hidden">
                <Image
                  src="/hero-portrait.png"
                  alt={`Portrait of ${person.fullName}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>
            </div>
          </Reveal>

          <Reveal index={1} className="space-y-6">
            <div className="space-y-3">
              <p className="eyebrow">About</p>
              <h1 className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
                I build the parts people <span className="text-gradient">actually touch</span>
              </h1>
            </div>

            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{person.shortBio}</p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-4" aria-hidden />
                {person.location}
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden className="size-2 rounded-full bg-emerald-500" />
                {person.availability}
              </span>
            </div>

            <dl className="grid grid-cols-3 gap-4 border-t border-border pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="text-3xl font-bold tabular-nums text-foreground">{stat.value}</dd>
                  <dt className="mt-1 text-xs uppercase tracking-[0.1em] text-muted-foreground">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* Narrative */}
        <Reveal className="mt-20 md:mt-28">
          <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-14">
            <h2 className="eyebrow lg:pt-2">The longer version</h2>
            <div className="max-w-3xl space-y-5">
              {person.longBio.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-pretty text-xl leading-relaxed text-foreground"
                      : "text-pretty leading-relaxed text-muted-foreground"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Principles */}
        <section id="approach" className="mt-20 scroll-mt-24 md:mt-28">
          <Reveal className="mb-8 max-w-2xl">
            <p className="eyebrow mb-3">How I work</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Four things I keep coming back to</h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} index={index}>
                <article className="surface h-full space-y-3 p-6 sm:p-8">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-background/60">
                    <TechIcon name={principle.icon} className="size-5 text-primary" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-20 scroll-mt-24 md:mt-28">
          <Reveal className="mb-8 max-w-2xl">
            <p className="eyebrow mb-3">Where I go deep</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What I work on</h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
            {services.map((service, index) => (
              <Reveal key={service.name} index={index}>
                <article className="surface flex h-full gap-4 p-6 sm:p-8">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/60">
                    <TechIcon name={service.icon} className="size-5 text-primary" />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Resume pointer */}
        <Reveal className="mt-20 md:mt-28">
          <div className="surface flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Want the structured version?</h2>
              <p className="text-muted-foreground">
                Full role history with what shipped, education, and the complete stack.
              </p>
            </div>
            <Link
              href="/credentials"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              View resume
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>

      <Footer />
    </>
  )
}
