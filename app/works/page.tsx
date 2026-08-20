import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/reveal"
import { ProjectGrid } from "@/components/project-grid"
import { TechIcon } from "@/components/tech-icon"
import { siteData } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from production frontends across PropTech, EdTech, e-commerce, and admin platforms — the problem, what I built, and what changed.",
  alternates: { canonical: "/works" },
}

export default function WorksPage() {
  // Rendered here on the server, then handed to the client grid as elements.
  const techIcons = Object.fromEntries(
    Array.from(new Set(siteData.projects.flatMap((project) => project.technologies.map((tech) => tech.icon)))).map(
      (name) => [name, <TechIcon key={name} name={name} className="size-4" />],
    ),
  )

  return (
    <>
      <Header />

      <Container as="main" id="main" className="py-12 md:py-20">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="eyebrow mb-4">Selected work</p>
          <h1 className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Products I&rsquo;ve helped <span className="text-gradient">ship</span>
          </h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Four builds across property management, education, commerce, and association admin. Each one lists the
            problem it started from, what I actually built, and what changed as a result.
          </p>
        </Reveal>

        <ProjectGrid techIcons={techIcons} />
      </Container>

      <Footer />
    </>
  )
}
