import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function CredentialsCard() {
  return (
    <Link href="/credentials" className="block h-full">
      <Card className="group relative h-full overflow-hidden border border-border/50 bg-gradient-to-br from-card via-card to-card/80 hover:border-border transition-all duration-300">
        <CardContent className="flex flex-col justify-between p-8 h-full">
          <div className="flex-1 flex items-center justify-center min-h-[92px]">
            <Image
              src="/credentials-signature.png"
              alt="Signature"
              width={185}
              height={92}
              className="w-full max-w-[185px] h-auto opacity-90 object-contain invert"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase">My journey</p>
                <h3 className="text-2xl font-bold text-foreground">Credentials</h3>
              </div>

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full border border-border/50 w-10 h-10 hover:bg-muted hover:border-border transition-all"
              >
                <span aria-label="View credentials">
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
