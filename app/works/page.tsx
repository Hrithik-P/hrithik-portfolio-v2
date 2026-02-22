"use client"

import { Header } from "@/components/header"
import { ProjectGrid } from "@/components/project-grid"
import { motion } from "framer-motion"
import { Footer } from "@/components/footer"

export default function WorksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-4 py-12 md:py-20">
        <div className="mx-auto max-w-[1140px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 flex items-center justify-center gap-4 md:gap-6">
              <span className="text-muted-foreground text-2xl md:text-4xl">✦</span>
              <span className="text-balance">PROJECTS</span>
              <span className="text-muted-foreground text-2xl md:text-4xl">✦</span>
            </h1>
          </motion.div>

          <ProjectGrid />
        </div>
      </main>
      <Footer />
    </>
  )
}
