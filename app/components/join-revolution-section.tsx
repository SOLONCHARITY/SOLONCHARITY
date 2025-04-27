import { Bitcoin, Heart, Mail } from "lucide-react"
import { NOWPaymentsButton } from "./now-payments-button"

export function JoinRevolutionSection() {
  return (
    <section className="container py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Bitcoin Philanthropy Revolution</h2>
        <p className="text-lg text-gray-600 mb-8">
          SOLON is named after the Athenian lawmaker Solon, a visionary reformer of justice and fairness. And we are
          building the first Bitcoin Treasury Nonprofit Organization. With your support, we can transform lives through
          a new financial paradigm—one where Bitcoin serves as the backbone of sustainable social impact.
        </p>
        <div className="space-y-6 mb-8">
          <div className="flex items-center justify-center gap-4">
            <Bitcoin className="h-6 w-6 text-[#0A4B3C]" />
            <p className="text-gray-600">Be part of the SOLON movement. Donate Bitcoin today.</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Heart className="h-6 w-6 text-[#0A4B3C]" />
            <p className="text-gray-600">Join our team as a volunteer, contact us at team@soloncharity.com.</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Mail className="h-6 w-6 text-[#0A4B3C]" />
            <p className="text-gray-600">For partnerships and inquiries, contact us at team@soloncharity.com.</p>
          </div>
        </div>
        <NOWPaymentsButton className="bg-[#0A4B3C] hover:bg-[#0A4B3C]/90">Get Involved Now</NOWPaymentsButton>
      </div>
    </section>
  )
}

