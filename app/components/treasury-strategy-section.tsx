import { CheckCircle2 } from "lucide-react"
import BackgroundColor from "./background-color"

export function TreasuryStrategySection() {
  return (
    <BackgroundColor>
      <section id="treasury-strategy" className="container py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">A Treasury Strategy Designed for Maximum Impact</h2>
          <p className="text-lg text-gray-600 mb-8">
            As a Bitcoin Treasury Nonprofit, SOLON strategically manages its BTC holdings to ensure maximum yield and
            sustainable growth. Our approach allows us to:
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-[#0A4B3C] flex-shrink-0 mt-1" />
              <p className="text-gray-600">
                Hold Bitcoin as a long-term reserve asset, ensuring sustainable funding for our initiatives.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-[#0A4B3C] flex-shrink-0 mt-1" />
              <p className="text-gray-600">
                Deploy BTC strategically to fund life-changing programs while preserving our treasury's strength.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-[#0A4B3C] flex-shrink-0 mt-1" />
              <p className="text-gray-600">
                Ensure transparency by maintaining a publicly verifiable Bitcoin treasury.
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 mt-8">
            Our Bitcoin-first strategy is designed to amplify social impact, ensuring that every donation appreciates
            over time rather than diminishing in value due to inflation.
          </p>
        </div>
      </section>
    </BackgroundColor>
  )
}

