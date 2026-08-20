import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Container } from "@/components/ui/container"
import { navItems } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      <Header />

      <Container as="main" id="main" className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-mono text-sm text-primary">404</p>
        <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">This page doesn&rsquo;t exist</h1>
        <p className="mt-4 max-w-md text-pretty text-muted-foreground">
          The link may be out of date, or the page moved. Here&rsquo;s everything else.
        </p>

        <nav aria-label="Site" className="mt-8 flex flex-wrap justify-center gap-2">
          {[...navItems, { href: "/contact", label: "Contact" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Back home
        </Link>
      </Container>

      <Footer />
    </>
  )
}
