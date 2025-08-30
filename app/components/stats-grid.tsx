import { Card } from "@/components/ui/card"
import { Bitcoin, ArrowUpRight, Heart } from "lucide-react"

export function StatsGrid() {
  return (
    <section className="container py-16" id={"what-we-do"}>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-[#0A4B3C]">What We Do</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto py-6">
          Our frameworks align with fiduciary duty, regulatory expectations, and your mission priorities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section 1: Crypto Donation Stewardship */}
        <div className="bg-[#0A4B3C] text-white p-8 rounded-lg">
          <div className="flex items-start gap-4">
            <Bitcoin className="h-10 w-10 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-4 text-xl">Crypto Donation Stewardship</h3>
              <p className="mb-4">
                Many nonprofits choose to convert crypto gifts to cash immediately. While this provides short-term liquidity, it often misses Bitcoin's unique long-term potential. We help your organization design policies to:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Hold Bitcoin donations securely for longer periods</li>
                <li>Balance liquidity for today with growth for tomorrow</li>
                <li>Build donor confidence through transparent stewardship</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Bitcoin Treasury & PRI Advisory */}
        <div className="bg-[#DCFF7D] text-[#0A4B3C] p-8 rounded-lg">
          <div className="flex items-start gap-4">
            <ArrowUpRight className="h-10 w-10 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-4 text-xl">Bitcoin Treasury & PRI Advisory</h3>
              <p className="mb-4">
                For nonprofits with a <strong>Program-Related Investment (PRI) window</strong>, we advise on creating <strong>Bitcoin investment frameworks</strong>. Our strategies allow nonprofits to:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Allocate reserves into Bitcoin as a store of value</li>
                <li>Explore PRI-aligned impact investments through Bitcoin</li>
                <li>Strengthen long-term financial sustainability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

