import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { WhyBitcoinSection } from "./components/why-bitcoin-section"
import { TreasuryStrategySection } from "./components/treasury-strategy-section"
import { DonationSection } from "./components/donation-section"
import { JoinRevolutionSection } from "./components/join-revolution-section"
import { JoinSection } from "./components/join-section"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyBitcoinSection />
        <TreasuryStrategySection />
        <DonationSection />
        <JoinRevolutionSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  )
}

