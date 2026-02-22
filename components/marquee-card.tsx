"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Icon } from "@iconify/react"

const SKILLS = [
  { label: "React", icon: "logos:react" },
  { label: "Next.js", icon: "logos:nextjs-icon" },
  { label: "TypeScript", icon: "logos:typescript-icon" },
  { label: "JavaScript", icon: "logos:javascript" },
  { label: "Redux", icon: "logos:redux" },
  { label: "Vite", icon: "logos:vitejs" },
  { label: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { label: "Docker", icon: "logos:docker-icon" },
]

const PIXELS_PER_SECOND = 40

function SkillItem({ skill }: { skill: (typeof SKILLS)[0] }) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border/50 bg-background/60 sm:h-14 sm:w-14 md:h-16 md:w-16"
      title={skill.label}
    >
      <Icon icon={skill.icon} className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
    </div>
  )
}

export function MarqueeCard() {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const rafRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const run = (time: number) => {
      const delta = (time - lastTimeRef.current) / 1000
      lastTimeRef.current = time

      const copyWidth = track.offsetWidth / 2
      if (copyWidth <= 0) {
        rafRef.current = requestAnimationFrame(run)
        return
      }

      offsetRef.current -= PIXELS_PER_SECOND * delta
      if (offsetRef.current <= -copyWidth) {
        offsetRef.current += copyWidth
      }
      track.style.transform = `translateX(${offsetRef.current}px)`

      rafRef.current = requestAnimationFrame(run)
    }

    lastTimeRef.current = performance.now()
    rafRef.current = requestAnimationFrame(run)

    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <Card className="overflow-hidden border border-border/50 bg-linear-to-r from-card via-card to-card/80 py-2 sm:py-2.5 md:py-3">
      <div className="relative flex items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex min-w-max items-center gap-4 sm:gap-5 md:gap-6 px-1"
          style={{ willChange: "transform" }}
        >
          {[...SKILLS, ...SKILLS].map((skill, index) => (
            <SkillItem key={`${skill.label}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </Card>
  )
}
