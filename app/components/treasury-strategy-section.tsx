import { CheckCircle2 } from "lucide-react"
import BackgroundColor from "./background-color"

export function TreasuryStrategySection() {
  return (
    <BackgroundColor>
      <section id="treasury-strategy" className="container py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">A Treasury Built for Lasting Impact</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our Bitcoin-first strategy is designed to amplify your generosity:
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-[#0A4B3C] flex-shrink-0 mt-1" />
              <p className="text-gray-600">
                <strong>Enduring Reserve:</strong> We hold Bitcoin as a long-term asset, securing sustainable funding for decades of impact.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-[#0A4B3C] flex-shrink-0 mt-1" />
              <p className="text-gray-600">
                <strong>Strategic Impact:</strong> We deploy Bitcoin returns to power transformative programs while preserving our treasury’s strength.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-[#0A4B3C] flex-shrink-0 mt-1" />
              <p className="text-gray-600">
                <strong>Uncompromising Transparency:</strong> Our publicly verifiable Bitcoin treasury ensures every satoshi is accounted for.
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 mt-8">
            With SOLON, your donation doesn’t just help today—it appreciates, creating a perpetual engine for social change. Be the catalyst for this revolution.
          </p>
        </div>
      </section>
    </BackgroundColor>
  )
}

