import { Clock, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card/40 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
              <span className="font-serif text-lg font-semibold text-foreground">
                TimeTravel <span className="text-gold">Agency</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A private atelier of luxury time travel, crafting immersive
              journeys to history&apos;s most extraordinary moments.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                <a
                  href="mailto:concierge@timetravel.agency"
                  className="hover:text-gold"
                >
                  concierge@timetravel.agency
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                <a href="tel:+18001889504" className="hover:text-gold">
                  +1 (800) 188-9504
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
                <span>1 Eternity Plaza, Geneva</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#destinations" className="hover:text-gold">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#ai-assistant" className="hover:text-gold">
                  AI Assistant
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-gold">
                  Booking
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} TimeTravel Agency. A fictional
            luxury experience. Crafted as a student project.
          </p>
        </div>
      </div>
    </footer>
  )
}
