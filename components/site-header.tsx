"use client"

import { useState } from "react"
import { Clock, Menu, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "AI Assistant", href: "#ai-assistant" },
  { label: "Booking", href: "#booking" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
          <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
            TimeTravel <span className="text-gold">Agency</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#booking"
            className={cn(
              buttonVariants(),
              "rounded-full bg-gold px-5 text-primary-foreground hover:bg-gold/90",
            )}
          >
            Book a Journey
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border/60 bg-background/95 px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants(),
                  "mt-2 w-full rounded-full bg-gold text-primary-foreground hover:bg-gold/90",
                )}
              >
                Book a Journey
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
