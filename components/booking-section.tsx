"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

const destinations = ["Paris 1889", "Cretaceous −65M", "Florence 1504"]

export function BookingSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="booking"
      className="border-t border-border/40 bg-background py-24"
    >
      <div className="mx-auto max-w-xl px-6">
        <Reveal className="text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Booking
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Reserve Your Journey Through Time
          </h2>
          <p className="mx-auto mt-6 text-pretty leading-relaxed text-muted-foreground">
            Complete the details below and our temporal concierge will confirm
            your private departure.
          </p>
        </Reveal>

        {submitted ? (
          <div className="reveal is-visible mt-12 rounded-xl border border-gold/40 bg-card p-8 text-center">
            <h3 className="font-serif text-xl font-semibold text-gold">
              Your request is confirmed
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Thank you. Our concierge will be in touch shortly to finalize
              every detail of your voyage.
            </p>
          </div>
        ) : (
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="mt-12 space-y-5 rounded-xl border border-border/50 bg-card p-6 sm:p-8"
            >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="destination"
                className="text-sm font-medium text-foreground"
              >
                Destination
              </label>
              <select
                id="destination"
                required
                defaultValue=""
                className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-gold/50"
              >
                <option value="" disabled>
                  Select a destination
                </option>
                {destinations.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="date"
                className="text-sm font-medium text-foreground"
              >
                Travel Date
              </label>
              <input
                id="date"
                type="date"
                required
                className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-gold/50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your full name"
                className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold/50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold/50"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full bg-gold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20 active:translate-y-0"
            >
              Reserve My Journey
            </Button>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  )
}
