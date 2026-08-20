import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"
import { siteData } from "@/lib/site-data"

export function HeroCard() {
  const { name, role, location, heroIntro, availability } = siteData.person

  return (
    <div className="surface flex h-full flex-col gap-6 p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="relative size-36 shrink-0 sm:size-44 lg:size-52">
          {/* Soft halo behind the portrait */}
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-primary/25 to-accent/20 blur-xl"
          />
          <div className="relative size-full overflow-hidden rounded-[2rem_2rem_2.5rem_1rem] border-4 border-background bg-muted">
            <Image
              src="/hero-portrait.png"
              alt={`Portrait of ${name}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 208px"
              priority
            />
          </div>
        </div>

        <span className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Available
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="eyebrow">{role}</p>
            <h1 className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              {name}
            </h1>
          </div>

          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{heroIntro}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1.5 text-sm text-muted-foreground">
            <p className="flex items-center gap-1.5">
              <MapPin className="size-3.5" aria-hidden />
              {location}
            </p>
            <p className="text-xs">{availability}</p>
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            About me
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
