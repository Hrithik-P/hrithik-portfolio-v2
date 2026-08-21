"use client"

import { Moon, Sun } from "lucide-react"

/**
 * Both icons are always rendered and swapped with the `dark:` variant, so the
 * button matches the pre-hydration DOM exactly and never causes a mismatch.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement
    const next = root.classList.contains("dark") ? "light" : "dark"
    root.classList.toggle("dark", next === "dark")
    root.style.colorScheme = next
    try {
      localStorage.setItem("theme", next)
    } catch {
      // Private mode or blocked storage — the toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
      className={`flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground ${className ?? ""}`}
    >
      <Sun className="size-4 dark:hidden" />
      <Moon className="hidden size-4 dark:block" />
    </button>
  )
}
