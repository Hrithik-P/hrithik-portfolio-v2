"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { HeroCard } from "@/components/hero-card"
import { CredentialsCard } from "@/components/credentials-card"
import { ProjectsCard } from "@/components/projects-card"
import { BlogCard } from "@/components/blog-card"
import { ServicesCard } from "@/components/services-card"
import { ProfilesCard } from "@/components/profiles-card"
import { StatsCard } from "@/components/stats-card"
import { CtaCard } from "@/components/cta-card"
import { MarqueeCard } from "@/components/marquee-card"
import { PageLoader } from "@/components/page-loader"
import { AnimatedGridItem } from "@/components/animated-grid"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <PageLoader />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55, ease: [0.4, 0, 0.2, 1] }}
      >
        <Header />
        <main className="container mx-auto max-w-[1140px] px-4 py-8 md:px-6 lg:px-8">
        <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-12 auto-rows-auto">
          {/* Top block: Hero (left) + nested right stack */}
          <AnimatedGridItem index={0} className="lg:col-span-5">
            <HeroCard />
          </AnimatedGridItem>

          <AnimatedGridItem index={1} className="lg:col-span-7 h-full">
            <div className="h-full grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 lg:grid-rows-[auto_1fr]">
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
          </AnimatedGridItem>

          {/* Middle row */}
          <AnimatedGridItem index={2} className="lg:col-span-4">
            <BlogCard />
          </AnimatedGridItem>

          <AnimatedGridItem index={3} className="lg:col-span-4">
            <ServicesCard />
          </AnimatedGridItem>

          <AnimatedGridItem index={4} className="lg:col-span-4">
            <ProfilesCard />
          </AnimatedGridItem>

          {/* Bottom row */}
          <AnimatedGridItem index={5} className="lg:col-span-4">
            <StatsCard />
          </AnimatedGridItem>

          <AnimatedGridItem index={6} className="lg:col-span-8">
            <CtaCard />
          </AnimatedGridItem>
        </div>
        </main>
        <Footer />
      </motion.div>
    </div>
  )
}
