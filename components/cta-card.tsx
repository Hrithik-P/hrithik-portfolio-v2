import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { siteData } from "@/lib/site-data"

export function CtaCard() {
  return (
    <Link
      href="/contact"
      className="surface surface-interactive group relative flex h-full flex-col justify-between gap-8 overflow-hidden p-6 sm:p-8"
    >
      {/* Accent wash, kept behind the text */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/15 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
      />

      <p className="eyebrow relative">{siteData.person.availability}</p>

      <div className="relative space-y-4">
        <h2 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
          <span className="text-foreground">Have something</span>{" "}
          <span className="text-gradient">worth building?</span>
        </h2>
        <p className="max-w-md text-pretty text-base text-muted-foreground sm:text-lg">
          Tell me what you&rsquo;re working on and where it&rsquo;s stuck. I usually reply within a day or two.
        </p>
      </div>

      <div className="relative flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
          Start a conversation
        </span>
        <span
          aria-hidden
          className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:text-primary"
        >
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
        </span>
      </div>
    </Link>
  )
}
