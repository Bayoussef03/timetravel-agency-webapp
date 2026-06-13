import { Sparkles, Compass, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  {
    icon: Compass,
    title: "Personalized Itineraries",
    description:
      "Describe your dream era and our AI crafts a bespoke journey in moments.",
  },
  {
    icon: Sparkles,
    title: "Expert Historical Insight",
    description:
      "Get authentic details on customs, attire, and etiquette for any time.",
  },
  {
    icon: MessageCircle,
    title: "Always Available",
    description:
      "Your temporal concierge answers questions day or night, instantly.",
  },
]

export function AiAssistantSection() {
  return (
    <section
      id="ai-assistant"
      className="border-t border-border/40 bg-card/40 py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            AI Assistant
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Meet Your Personal Temporal Concierge
          </h2>
          <p className="mx-auto mt-6 text-pretty leading-relaxed text-muted-foreground">
            Our AI travel assistant is here to guide your every voyage — from
            choosing the perfect era to tailoring every detail of your
            experience. Simply open the chat in the corner and begin.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 150}>
              <div className="group h-full rounded-xl border border-border/50 bg-background p-6 text-center transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                  <f.icon className="h-6 w-6 text-gold transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
