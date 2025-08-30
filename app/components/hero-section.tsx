import { StatsGrid } from "./stats-grid"
import { AboutModal } from "./about-modal"
import { CryptoWalletModal } from "./crypto-wallet-modal"
import BackgroundColor from "./background-color"
import { Bitcoin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageCarousel } from "./image-carousel"

export function HeroSection() {
  return (
    <BackgroundColor className="overflow-hidden">
      <section className="container min-h-[calc(100vh-4rem)] flex flex-col justify-center py-16 md:py-24" id={"our-mission"}>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div className="text-center md:text-left md:pr-8">
          <h1 className="text-2xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="block">Advisors for Nonprofits Entering the Bitcoin Era</span>
            </h1>
            <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed text-justify">
            At SOLON CHARITY, we help mission-driven organizations unlock the full potential of their cryptocurrency donations. Instead of stopping at a one-time impact, crypto gifts can work harder and last longer. We guide nonprofits on how to hold, grow, and strategically invest these assets—ensuring every donation creates lasting, compounding impact.
            </p>
            <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed text-just">We exist to help nonprofits steward their crypto responsibly while staying mission-aligned and donor-trusted.</p>
            
          </div>
          <ImageCarousel />
        </div>

        <StatsGrid />
      </section>
    </BackgroundColor>
  )
}

