import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, Camera, Palette, Brush, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export function ServicesCard() {
  return (
    <Link href="/about#services" className="block h-full">
      <Card className="group relative h-full overflow-hidden border border-border/50 bg-gradient-to-br from-card via-card to-card/80 hover:border-border transition-all duration-300">
      <CardContent className="flex flex-col justify-between p-8 h-full">
        <div className="flex-1 flex items-center justify-center mb-6">
          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center">
                <Camera className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center">
                <Palette className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center">
                <Brush className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase">What I do</p>
              <h3 className="text-2xl font-bold text-foreground">How I can help</h3>
            </div>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full border border-border/50 w-10 h-10 hover:bg-muted hover:border-border transition-all"
            >
              <span aria-label="View services section">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </CardContent>
      </Card>
    </Link>
  )
}
