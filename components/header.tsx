"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteData } from "@/lib/site-data"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/works", label: "Works" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-[1140px] flex h-16 items-center justify-between px-4 sm:px-6 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl sm:text-2xl font-bold text-foreground">{siteData.person.name}</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-4 md:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <Button asChild className="bg-muted hover:bg-muted/80 text-foreground rounded-full px-4 sm:px-6 text-sm">
          <Link href="/contact">Say hello</Link>
        </Button>
      </div>
    </header>
  )
}
