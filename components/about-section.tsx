import { Reveal } from "@/components/reveal"

export function AboutSection() {
  return (
    <section className="border-t border-border/40 bg-background py-24">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-gold">
          The Agency
        </p>
        <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
          Time, Reimagined as the Ultimate Luxury
        </h2>
        <p className="mx-auto mt-6 text-pretty leading-relaxed text-muted-foreground">
          TimeTravel Agency is a private atelier of temporal experiences. We
          design immersive, deeply personalized journeys through history — from
          candlelit Parisian salons to the untouched wilds of the Cretaceous.
          Each voyage is tailored to you: a discreet concierge, period-perfect
          attire, and seamless passage to the moments that shaped our world.
        </p>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { value: "120+", label: "Curated Eras" },
            { value: "100%", label: "Private Journeys" },
            { value: "24/7", label: "Temporal Concierge" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-serif text-3xl font-semibold text-gold">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
