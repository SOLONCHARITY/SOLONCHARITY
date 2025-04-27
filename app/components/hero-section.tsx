import { StatsGrid } from "./stats-grid"
import { AboutModal } from "./about-modal"
import BackgroundColor from "./background-color"
import { Bitcoin } from "lucide-react"
import { ImageCarousel } from "./image-carousel"
import { NOWPaymentsButton } from "./now-payments-button"

export function HeroSection() {
  return (
    <BackgroundColor className="overflow-hidden">
      <section id="hero" className="container min-h-[calc(100vh-4rem)] flex flex-col justify-center py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div className="text-center md:text-left md:pr-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="block text-[#0A4B3C]">Our Bitcoin</span>
              <span className="block">Redefining Philanthropy</span>
            </h1>
            <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
              SOLON is pioneering a new era in nonprofit finance by strategically accumulating Bitcoin as a treasury
              reserve asset to maximize long-term impact. Unlike traditional nonprofits that rely on fiat, SOLON
              embraces Bitcoin's scarcity, resilience, and digital capital properties to sustain and grow its
              mission-driven initiatives.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <NOWPaymentsButton className="w-full md:w-auto bg-[#0A4B3C] hover:bg-[#0A4B3C]/90 text-white">
                <Bitcoin className="w-5 h-5 mr-2" />
                Donate Bitcoin
              </NOWPaymentsButton>
              <AboutModal />
            </div>
          </div>
          <ImageCarousel />
        </div>

        <StatsGrid />
      </section>
    </BackgroundColor>
  )
}

