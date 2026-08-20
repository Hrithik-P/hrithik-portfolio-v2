import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/reveal"
import { HeroCard } from "@/components/hero-card"
import { MarqueeCard } from "@/components/marquee-card"
import { CredentialsCard } from "@/components/credentials-card"
import { ProjectsCard } from "@/components/projects-card"
import { ApproachCard } from "@/components/approach-card"
import { ServicesCard } from "@/components/services-card"
import { ConnectCard } from "@/components/connect-card"
import { StatsCard } from "@/components/stats-card"
import { CtaCard } from "@/components/cta-card"

/**
 * Server component. Only the entrance animations and the header's menu state
 * are client-side, so the bento content itself ships zero JS.
 */
export default function HomePage() {
  return (
    <>
      <Header />

      <Container as="main" id="main" className="py-8 md:py-12">
        <div className="grid auto-rows-auto grid-cols-1 gap-4 md:gap-6 lg:grid-cols-12">
          <Reveal index={0} className="lg:col-span-5">
            <HeroCard />
          </Reveal>

          <Reveal index={1} className="lg:col-span-7">
            <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-7 lg:grid-rows-[auto_1fr]">
              <div className="sm:col-span-2 lg:col-span-7">
                <MarqueeCard />
              </div>
              <div className="lg:col-span-3">
                <CredentialsCard />
              </div>
              <div className="lg:col-span-4">
                <ProjectsCard />
              </div>
            </div>
          </Reveal>

          <Reveal index={2} className="lg:col-span-4">
            <ApproachCard />
          </Reveal>

          <Reveal index={3} className="lg:col-span-4">
            <ServicesCard />
          </Reveal>

          <Reveal index={4} className="lg:col-span-4">
            <ConnectCard />
          </Reveal>

          <Reveal index={5} className="lg:col-span-4">
            <StatsCard />
          </Reveal>

          <Reveal index={6} className="lg:col-span-8">
            <CtaCard />
          </Reveal>
        </div>
      </Container>

      <Footer />
    </>
  )
}
