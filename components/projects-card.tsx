import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function ProjectsCard() {
  return (
    <Link href="/works" className="block h-full">
      <Card className="group relative h-full overflow-hidden border border-border/50 bg-gradient-to-br from-card via-card to-card/80 hover:border-border transition-all duration-300">
      <CardContent className="flex flex-col justify-between p-8 h-full">
        <div className="flex-1 flex items-center justify-center mb-6">
          <div className="relative w-full aspect-video bg-muted/30 rounded-lg overflow-hidden">
            <Image src="/meditation-course-website.jpg" alt="My Works" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
            <div className="absolute top-4 left-4">
              <h4 className="text-xl font-bold text-foreground">Things I've built</h4>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Selected work</p>
              <h3 className="text-2xl font-bold text-foreground">Projects</h3>
            </div>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full border border-border/50 w-10 h-10 hover:bg-muted hover:border-border transition-all"
            >
              <span aria-label="View works">
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
