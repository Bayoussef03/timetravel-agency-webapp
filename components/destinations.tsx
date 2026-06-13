import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

const destinations = [
  {
    title: "Paris 1889",
    image: "https://i.imgur.com/MzXMvDy.jpeg",
    description:
      "Stroll the gaslit boulevards of the Belle Époque as the Eiffel Tower rises over the World's Fair.",
  },
  {
    title: "Cretaceous −65M",
    image: "https://i.imgur.com/oJo8e7n.jpeg",
    description:
      "Witness a primeval world untouched by humankind, where titans roam beneath an ancient sky.",
  },
  {
    title: "Florence 1504",
    image: "https://i.imgur.com/FryRXqJ.jpeg",
    description:
      "Walk among the masters of the Renaissance as art, science, and beauty redefine the world.",
  },
]

export function Destinations() {
  return (
    <section
      id="destinations"
      className="border-t border-border/40 bg-background py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Destinations
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Three Eras Worth Crossing Time For
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {destinations.map((dest, i) => (
            <Reveal key={dest.title} as="article" delay={i * 150}>
              <article
                className="group h-full overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-500 ease-out hover:-translate-y-2 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={dest.image || "/placeholder.svg"}
                    alt={dest.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent transition-opacity duration-500 group-hover:opacity-80"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-gold">
                    {dest.title}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {dest.description}
                  </p>
                  <a
                    href="#booking"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "mt-6 rounded-full border-gold/40 bg-transparent text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/10 hover:text-gold active:translate-y-0",
                    )}
                  >
                    Learn More
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
