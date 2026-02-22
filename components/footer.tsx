import Link from "next/link"
import { siteData } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-12 mt-24">
      <div className="mx-auto max-w-[1140px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-foreground">{siteData.person.name}</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              HOME
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/works"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              WORKS
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              CONTACT
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            Crafted with care · © {new Date().getFullYear()} {siteData.person.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
