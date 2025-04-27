import { NOWPaymentsButton } from "./now-payments-button"

export function JoinSection() {
  return (
    <section className="container py-16 text-center">
      <h2 className="text-2xl font-medium mb-2">
        Join our community and be part of the Bitcoin philanthropy revolution
      </h2>
      <p className="mb-12">Help us harness the power of sound money for social good</p>
      <NOWPaymentsButton className="bg-[#0A4B3C] hover:bg-[#0A4B3C]/90">Donate Bitcoin Now</NOWPaymentsButton>
    </section>
  )
}

