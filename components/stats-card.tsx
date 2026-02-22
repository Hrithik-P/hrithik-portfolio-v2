import { Card, CardContent } from "@/components/ui/card"
import { siteData } from "@/lib/site-data"

export function StatsCard() {
  return (
    <Card className="h-full overflow-hidden border border-border/50 bg-gradient-to-br from-card via-card to-card/80">
      <CardContent className="p-8 h-full flex items-center justify-center">
        <div className="flex items-center justify-around w-full gap-4">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-5xl md:text-6xl font-bold text-foreground">{siteData.stats.yearsExperience}+</div>
            <div className="flex flex-col items-center text-center">
              <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase leading-tight">Years of</p>
              <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase leading-tight">
                craft
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-5xl md:text-6xl font-bold text-foreground">{siteData.stats.clientsWorldwide}</div>
            <div className="flex flex-col items-center text-center">
              <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase leading-tight">Teams</p>
              <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase leading-tight">
                I've joined
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-5xl md:text-6xl font-bold text-foreground">{siteData.stats.totalProjects}</div>
            <div className="flex flex-col items-center text-center">
              <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase leading-tight">Projects</p>
              <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase leading-tight">
                shipped
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
