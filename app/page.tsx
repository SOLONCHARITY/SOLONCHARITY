import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { WhyBitcoinSection } from "./components/why-bitcoin-section"
import { DonationSection } from "./components/donation-section"
import { StatsGrid } from "./components/stats-grid"
import { JoinRevolutionSection } from "./components/join-revolution-section"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">      
        <HeroSection />  
        <WhyBitcoinSection />
        <DonationSection />
        <JoinRevolutionSection />
      </main>
      <Footer />
    </div>
  )
}

