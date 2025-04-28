import { Card } from "@/components/ui/card"
import { Bitcoin, ArrowUpRight, Heart } from "lucide-react"

export function StatsGrid() {
  return (
    <div className="space-y-8 mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-[#0A4B3C]">Our Bitcoin-Powered Mission</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We aren’t just another nonprofit—we are a Bitcoin Treasury Organization dedicated to harnessing the power of sound money to transform lives. Our mission is clear:
          <br />SOLON isn’t just a nonprofit—we’re a Bitcoin Treasury Organization harnessing the power of sound money. Our mission is bold and clear:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-[#0A4B3C] text-white">
          <div className="flex items-start gap-4">
            <Bitcoin className="h-8 w-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2 text-lg">Accumulate Bitcoin</h3>
              <p className="text-sm">
                Build a treasury through your generous donations and strategic growth initiatives to ensure perpetual funding.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-[#DCFF7D] text-[#0A4B3C]">
          <div className="flex items-start gap-4">
            <ArrowUpRight className="h-8 w-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2 text-lg">Consolidate Crypto</h3>
              <p className="text-sm">
                Convert all cryptocurrency donations into Bitcoin, maximizing the strength of our reserve.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gray-100 text-[#0A4B3C]">
          <div className="flex items-start gap-4">
            <Heart className="h-8 w-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2 text-lg">Maximize Impact</h3>
              <p className="text-sm mb-2">Channel every Bitcoin return into life-changing programs, including:</p>
              <ul className="text-xs list-disc pl-4 space-y-1">
                <li>Rehabilitation for those battling substance abuse</li>
                <li>Empowering children and youth with safety and opportunity</li>
                <li>Building affordable housing and thriving communities</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <p className="text-lg text-gray-600 text-center mt-8">
        Your Bitcoin donation fuels this vision, creating a ripple effect of hope and transformation.
      </p>
    </div>
  )
}

