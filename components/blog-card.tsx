import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteData } from "@/lib/site-data"

export function BlogCard() {
  return (
    <a href={siteData.social.linkedin} target="_blank" rel="noreferrer" className="block h-full">
      <Card className="group relative h-full overflow-hidden border border-border/50 bg-gradient-to-br from-card via-card to-card/80 hover:border-border transition-all duration-300">
        <CardContent className="flex flex-col justify-between p-8 h-full">
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-3">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Thoughts & updates</p>
                <h3 className="text-2xl font-bold text-foreground">Insights</h3>
              </div>

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full border border-border/50 w-10 h-10 hover:bg-muted hover:border-border transition-all"
              >
                <span aria-label="Open profile">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
