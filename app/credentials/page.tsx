"use client"

import { motion } from "framer-motion"
import { Globe, Twitter, Instagram, Dribbble } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { siteData } from "@/lib/site-data"
import Link from "next/link"
import Image from "next/image"
import { Icon } from "@iconify/react"

export default function CredentialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[350px_1fr] xl:grid-cols-[400px_1fr] gap-6 lg:gap-8 mb-16"
        >
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-3xl border border-border/50 bg-gradient-to-br from-card via-card to-card/80 p-6 sm:p-8 space-y-6 sm:space-y-8">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-400">
                    <Image
                      src="/hero-portrait.png"
                      alt={siteData.person.name}
                      width={512}
                      height={512}
                      className="w-full h-full object-cover object-top grayscale"
                    />
                  </div>
                </div>
              </div>

              {/* Name, role, location */}
              <div className="text-center space-y-1.5">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">{siteData.person.name}</h2>
                <p className="text-sm font-medium text-primary">{siteData.person.role}</p>
                <p className="text-xs text-muted-foreground">{siteData.person.location}</p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
                <a href={siteData.social.website} target="_blank" rel="noreferrer" aria-label="Website">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-border/50 w-12 h-12 hover:bg-muted hover:border-border transition-all"
                  >
                    <Globe className="w-5 h-5" />
                  </Button>
                </a>
                <a href={siteData.social.x} target="_blank" rel="noreferrer" aria-label="X profile">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-border/50 w-12 h-12 hover:bg-muted hover:border-border transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                  </Button>
                </a>
                <a href={siteData.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram profile">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-border/50 w-12 h-12 hover:bg-muted hover:border-border transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                </a>
                <a href={siteData.social.dribbble} target="_blank" rel="noreferrer" aria-label="Dribbble profile">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-border/50 w-12 h-12 hover:bg-muted hover:border-border transition-all"
                  >
                    <Dribbble className="w-5 h-5" />
                  </Button>
                </a>
              </div>

              {/* Contact Button */}
              <Button asChild className="w-full rounded-full bg-muted hover:bg-muted/80 text-foreground h-11 sm:h-12 font-medium text-sm sm:text-base">
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-10 sm:space-y-14">
            {/* Intro */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
              {siteData.person.tagline}
            </p>

            {/* About Me */}
            <section>
              <h2 className="text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-6 tracking-wide">ABOUT ME</h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {siteData.person.longBio.map((bio) => (
                  <p key={bio}>{bio}</p>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-6 tracking-wide">EXPERIENCE</h2>
              <div className="space-y-8 sm:space-y-10">
                {siteData.experience.map((item) => (
                  <div key={item.period + item.role} className="rounded-xl border border-border/50 bg-card/30 p-4 sm:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground">{item.role}</h3>
                      <span className="text-xs sm:text-sm text-muted-foreground">{item.period}</span>
                    </div>
                    <p className="text-sm font-medium text-primary mb-2">{item.company}</p>
                    {"location" in item && item.location && (
                      <p className="text-xs text-muted-foreground mb-3">{item.location}</p>
                    )}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                    {"tech" in item && item.tech && (
                      <p className="text-xs text-muted-foreground/90 border-t border-border/40 pt-3 mt-3">
                        <span className="font-medium text-foreground/80">Tech: </span>
                        {item.tech}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-6 tracking-wide">EDUCATION</h2>
              <div className="space-y-6 sm:space-y-8">
                {siteData.education.map((item) => (
                  <div key={item.period + item.degree} className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-border/50 bg-card/30 px-4 py-3 sm:px-5 sm:py-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">{item.degree}</h3>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                      {"location" in item && item.location && (
                        <p className="text-xs text-muted-foreground/90 mt-0.5">{item.location}</p>
                      )}
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground">{item.period}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Focus areas */}
            {siteData.focusAreas && siteData.focusAreas.length > 0 && (
              <section>
                <h2 className="text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-6 tracking-wide">FOCUS AREAS</h2>
                <ul className="flex flex-wrap gap-2 sm:gap-3">
                  {siteData.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-border/50 bg-background/60 px-3 py-1.5 text-xs sm:text-sm text-muted-foreground"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Certifications */}
            {siteData.certifications && siteData.certifications.length > 0 && (
              <section>
                <h2 className="text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-6 tracking-wide">CERTIFICATIONS</h2>
                <div className="space-y-3">
                  {siteData.certifications.map((cert) => (
                    <div key={cert.name} className="rounded-xl border border-border/50 bg-card/30 px-4 py-3 sm:px-5 sm:py-4">
                      <p className="font-medium text-foreground">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Skills */}
            <section>
              <h2 className="text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-6 tracking-wide">SKILLS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {siteData.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/30 p-3 sm:p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background/60">
                      <Icon icon={skill.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-base sm:text-lg font-semibold text-foreground truncate">{skill.name}</h4>
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground shrink-0">{skill.percentage}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
