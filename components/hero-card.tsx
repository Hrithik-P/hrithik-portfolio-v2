import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { siteData } from "@/lib/site-data"

export function HeroCard() {
  return (
    <Card className="group relative h-full overflow-hidden border border-border/50 bg-linear-to-br from-card via-card to-card/80 hover:border-border transition-all duration-300">
      <CardContent className="flex flex-col gap-4 sm:gap-6 p-6 sm:p-8 h-full">
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-60 lg:h-60 shrink-0">
          <div
            className="absolute inset-0 overflow-hidden border-4 border-background bg-muted"
            style={{
              borderRadius: "2rem 2rem 2.5rem 1rem",
            }}
          >
            <Image
              src="/hero-portrait.png"
              alt={siteData.person.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, (max-width: 1024px) 224px, 240px"
              priority
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-3 sm:space-y-4">
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-medium text-muted-foreground tracking-wider uppercase">
                {siteData.person.role}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                {siteData.person.name}
              </h1>
            </div>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {siteData.person.heroIntro}
            </p>
          </div>

          <Button
            asChild
            variant="ghost"
            size="icon"
            className="self-end rounded-full border border-border/50 w-10 h-10 sm:w-12 sm:h-12 hover:bg-muted hover:border-border transition-all"
          >
            <Link href="/about" aria-label="View About page">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
