import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, Globe, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { siteData } from "@/lib/site-data"

export function ProfilesCard() {
  return (
    <Card className="group relative h-full overflow-hidden border border-border/50 bg-gradient-to-br from-card via-card to-card/80 hover:border-border transition-all duration-300">
      <CardContent className="flex flex-col justify-between p-8 h-full">
        <div className="flex-1 flex items-center justify-center gap-6 mb-6">
          <a
            href={siteData.social.website}
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center hover:border-primary transition-colors"
            aria-label="Open website profile"
          >
            <Globe className="w-8 h-8 text-muted-foreground" />
          </a>
          <a
            href={siteData.social.x}
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center hover:border-primary transition-colors"
            aria-label="Open X profile"
          >
            <Twitter className="w-8 h-8 text-muted-foreground" />
          </a>
        </div>

        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Connect</p>
                <h3 className="text-2xl font-bold text-foreground">Find me elsewhere</h3>
            </div>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full border border-border/50 w-10 h-10 hover:bg-muted hover:border-border transition-all"
            >
              <Link href="/credentials" aria-label="View credentials page">
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
