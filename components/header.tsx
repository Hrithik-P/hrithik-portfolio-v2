"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { navItems, siteData } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // The panel closes from the link handlers below rather than a pathname
  // effect — no cascading render, and it also covers same-page links.
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {isActive && <span className="absolute inset-0 rounded-full bg-muted" />}
                <span className="relative">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90 sm:inline-flex"
          >
            Let&rsquo;s talk
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>

      {/* Mobile navigation — the previous header hid the nav below `sm` with
          no replacement, leaving small screens with no way to navigate. */}
      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden"
      >
        <Container className="flex flex-col gap-1 py-4">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            )
          })}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-2 rounded-xl bg-foreground px-4 py-3 text-center text-base font-medium text-background"
          >
            Let&rsquo;s talk
          </Link>
        </Container>
      </div>
    </header>
  )
}
