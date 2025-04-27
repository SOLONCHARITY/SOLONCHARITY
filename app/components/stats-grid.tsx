import { Card } from "@/components/ui/card"
import { Bitcoin, ArrowUpRight, Heart } from "lucide-react"

export function StatsGrid() {
  return (
    <div className="space-y-8 mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-[#0A4B3C]">Our Bitcoin-Powered Mission</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We are not just another nonprofit—we are a Bitcoin Treasury Organization dedicated to harnessing the power of
          sound money for social good. Our mission is clear:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-[#0A4B3C] text-white">
          <div className="flex items-start gap-4">
            <Bitcoin className="h-8 w-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2 text-lg">Accumulate Bitcoin</h3>
              <p className="text-sm">
                Through donations and strategic treasury growth initiatives to build a sustainable reserve.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-[#DCFF7D] text-[#0A4B3C]">
          <div className="flex items-start gap-4">
            <ArrowUpRight className="h-8 w-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2 text-lg">Convert All Crypto</h3>
              <p className="text-sm">
                Convert all other crypto donations into BTC at market rate to ensure a robust reserve.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gray-100 text-[#0A4B3C]">
          <div className="flex items-start gap-4">
            <Heart className="h-8 w-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2 text-lg">Deploy 100% Returns</h3>
              <p className="text-sm mb-2">Use all excess BTC returns to support our key initiatives:</p>
              <ul className="text-xs list-disc pl-4 space-y-1">
                <li>Rehabilitation for drug addicts</li>
                <li>Children & Youth well-being and protection</li>
                <li>Low-income housing and community development</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

