import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <video
        className="animate-slow-zoom absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://i.imgur.com/MzXMvDy.jpeg"
        aria-hidden="true"
      >
        <source src="https://i.imgur.com/mSc3QW7.mp4" type="video/mp4" />
      </video>

      {/* lighter overlay so the video stays visible while text remains readable */}
      <div className="absolute inset-0 bg-background/40" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center [text-shadow:0_1px_24px_rgb(0_0_0/0.45)]">
        <p
          className="hero-rise mb-5 text-xs font-medium uppercase tracking-[0.35em] text-gold"
          style={{ animationDelay: "0.1s" }}
        >
          Luxury Time Travel
        </p>
        <h1
          className="hero-rise text-balance font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl"
          style={{ animationDelay: "0.25s" }}
        >
          Step Beyond Time Into the Greatest Moments Ever Lived
        </h1>
        <p
          className="hero-rise mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-foreground/85"
          style={{ animationDelay: "0.45s" }}
        >
          We craft immersive, private journeys to history&apos;s most exquisite
          eras — every detail curated, every moment unforgettable.
        </p>
        <div
          className="hero-rise mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#destinations"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full rounded-full bg-gold px-8 py-3 text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20 active:translate-y-0 sm:w-auto",
            )}
          >
            Discover Destinations
          </a>
          <a
            href="#ai-assistant"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full rounded-full border-gold/50 bg-transparent px-8 py-3 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/10 hover:text-gold active:translate-y-0 sm:w-auto",
            )}
          >
            Talk to our AI Agent
          </a>
        </div>
      </div>
    </section>
  )
}
