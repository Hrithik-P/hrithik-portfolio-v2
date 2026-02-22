import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CtaCard() {
  return (
    <Link href="/contact" className="block h-full">
      <Card className="group relative h-full overflow-hidden border border-border/50 bg-gradient-to-br from-card via-card to-card/80 hover:border-border transition-all duration-300">
      <CardContent className="flex flex-col justify-between p-8 h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            I'd love to <span className="text-primary">hear from you.</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">Let's build something great.</p>
        </div>

        <div className="flex justify-end">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full border border-border/50 w-12 h-12 hover:bg-muted hover:border-border transition-all"
          >
            <span aria-label="Go to contact page">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </CardContent>
      </Card>
    </Link>
  )
}
