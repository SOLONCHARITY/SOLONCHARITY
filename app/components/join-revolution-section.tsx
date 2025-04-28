import { Button } from "@/components/ui/button"
import { Bitcoin, Heart, Mail } from "lucide-react"

export function JoinRevolutionSection() {
  return (
    <section className="container py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Shape the Future with SOLON</h2>
        <p className="text-lg text-gray-600 mb-8">
          Named after Solon, the Athenian champion of justice, SOLON is redefining philanthropy through Bitcoin’s unmatched potential. Your support can build a world where sound money transforms lives.
        </p>
        <div className="space-y-6 mb-8">
        <div className="flex items-center justify-center gap-4">
          <Bitcoin className="h-6 w-6 text-[#0A4B3C]" />
          <p className="text-gray-600">
            <strong>Volunteer:</strong> Bring your passion to our mission. 
            <a href="mailto:team@soloncharity.com" className="text-[#0A4B3C] underline ml-1">
              team@soloncharity.com
            </a>.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Heart className="h-6 w-6 text-[#0A4B3C]" />
          <p className="text-gray-600">
            <strong>Partner:</strong> Amplify our impact through collaboration. 
            <a href="mailto:team@soloncharity.com" className="text-[#0A4B3C] underline ml-1">
              team@soloncharity.com
            </a>.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Mail className="h-6 w-6 text-[#0A4B3C]" />
          <p className="text-gray-600">
            <strong>Spread the Word:</strong> Join our community and champion the Bitcoin philanthropy revolution.
          </p>
        </div>

        </div>
        <p className="text-lg text-gray-600 my-8">
          Every action counts. Take the first step today.
        </p>
      </div>
    </section>
  )
}

