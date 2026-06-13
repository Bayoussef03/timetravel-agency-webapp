import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { Destinations } from "@/components/destinations"
import { AiAssistantSection } from "@/components/ai-assistant-section"
import { BookingSection } from "@/components/booking-section"
import { SiteFooter } from "@/components/site-footer"
import ChatWidget from "@/components/chat-widget";
import TravelQuiz from "@/components/travel-quiz";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <Destinations />
        <AiAssistantSection />
        <TravelQuiz />
        <BookingSection />
      </main>
      <SiteFooter />
      <ChatWidget />
    </>
  )
}