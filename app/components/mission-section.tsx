import { Bitcoin, ArrowUpRight, Heart } from "lucide-react"

export function MissionSection() {
  return (
    <section className="bg-[#DCFF7D] py-16">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-12">Our Bitcoin Treasury Strategy</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <Bitcoin className="h-12 w-12 mx-auto mb-4 text-[#0A4B3C]" />
            <h3 className="font-bold mb-2">Accumulate Bitcoin</h3>
            <p className="text-sm text-gray-600">
              Through donations and treasury growth strategies to build a sustainable reserve
            </p>
          </div>
          <div className="text-center">
            <ArrowUpRight className="h-12 w-12 mx-auto mb-4 text-[#0A4B3C]" />
            <h3 className="font-bold mb-2">Convert All Crypto</h3>
            <p className="text-sm text-gray-600">
              Convert other crypto donations into BTC at market rate to ensure a robust reserve
            </p>
          </div>
          <div className="text-center">
            <Heart className="h-12 w-12 mx-auto mb-4 text-[#0A4B3C]" />
            <h3 className="font-bold mb-2">Deploy Returns</h3>
            <p className="text-sm text-gray-600">100% of excess BTC returns support our humanitarian initiatives</p>
          </div>
        </div>
      </div>
    </section>
  )
}

