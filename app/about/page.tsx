"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { siteData } from "@/lib/site-data"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-24"
        >
          {/* Profile Image */}
          <div className="flex items-center justify-center lg:justify-start">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md aspect-square overflow-hidden rounded-3xl border border-border/40"
            >
              <Image src="/hero-portrait.png" alt={siteData.person.name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 448px" />
            </motion.div>
          </div>

          {/* Self Summary */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground flex-wrap">
                <span className="text-xl sm:text-2xl">✦</span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                  A bit about me
                </h1>
                <span className="text-xl sm:text-2xl">✦</span>
              </div>

              <div className="relative pl-4 sm:pl-6 border-l-2 border-border/50">
                <span className="absolute left-[-5px] top-3 sm:top-4 text-muted-foreground text-xl sm:text-2xl">✧</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  {siteData.person.name}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                  {siteData.person.shortBio}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience & Education Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 md:p-10"
          >
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-6 sm:mb-8 tracking-wide">EXPERIENCE</h3>
            <div className="space-y-6 sm:space-y-8">
                {siteData.experience.map((item, index) => (
                <div key={index} className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">{item.period}</p>
                  <h4 className="text-base sm:text-lg font-semibold text-foreground">{item.role}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground/80">{item.company}</p>
                  <p className="text-sm sm:text-base text-muted-foreground/90">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 md:p-10"
          >
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-6 sm:mb-8 tracking-wide">EDUCATION</h3>
            <div className="space-y-6 sm:space-y-8">
                {siteData.education.map((item, index) => (
                <div key={index} className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">{item.period}</p>
                  <h4 className="text-base sm:text-lg font-semibold text-foreground">{item.degree}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground/80">{item.institution}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.section
          id="services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-10 rounded-3xl border border-border/50 bg-card/50 p-6 sm:p-8 md:p-10"
        >
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6 tracking-wide">SERVICES</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {siteData.services.map((service) => (
              <div key={service.name} className="rounded-xl border border-border/40 bg-background/40 p-4 sm:p-5">
                <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1.5">{service.name}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
