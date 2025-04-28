import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
import Link from 'next/link'

export function AboutModal() {
  return (
    <Link href="/faq" target="_blank">
      <Button variant="outline">
        Learn More
      </Button>
    </Link>
    // <Dialog>
    //   <DialogTrigger asChild>
        
    //   </DialogTrigger>
    //   <DialogContent className="sm:max-w-[625px]">
    //     <DialogHeader>
    //       <DialogTitle>About SOLON</DialogTitle>
    //       <DialogDescription>Learn more about the world's first Bitcoin Treasury nonprofit</DialogDescription>
    //     </DialogHeader>
    //     <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
    //       <section>
    //         <h3 className="font-bold mb-2">1. What is SOLON, and what makes it unique as a nonprofit?</h3>
    //         <p className="text-sm text-gray-600">
    //           SOLON is the world's first Bitcoin Treasury nonprofit. Unlike traditional nonprofits that rely on cash
    //           reserves eroded by inflation, we store and grow donations in Bitcoin, a resilient asset that ensures
    //           long-term impact. Our mission is deeply personal. One of our founders has witnessed his own brother
    //           trapped in the cycle of addiction, incarceration, and struggle—a reality faced by countless young people
    //           worldwide. SOLON was born from the urgent need to break this cycle and create real change.
    //         </p>
    //         <p className="text-sm text-gray-600 mt-2">
    //           We dedicate our treasury's growth to the causes closest to our hearts:
    //         </p>
    //         <ul className="list-none pl-4 mt-2 space-y-1">
    //           <li className="flex items-start">
    //             <span className="text-green-500 mr-2">✔</span>
    //             <span className="text-sm text-gray-600">
    //               Rehabilitation for drug addicts – Providing support for recovery and reintegration.
    //             </span>
    //           </li>
    //           <li className="flex items-start">
    //             <span className="text-green-500 mr-2">✔</span>
    //             <span className="text-sm text-gray-600">
    //               Children & Youth well-being and protection – Ensuring a safer, brighter future for the next
    //               generation.
    //             </span>
    //           </li>
    //           <li className="flex items-start">
    //             <span className="text-green-500 mr-2">✔</span>
    //             <span className="text-sm text-gray-600">
    //               Low-income housing – Building stability for those who need it most.
    //             </span>
    //           </li>
    //         </ul>
    //         <p className="text-sm text-gray-600 mt-2">
    //           By holding Bitcoin, we ensure that every contribution appreciates in value, amplifying its power to
    //           transform lives for generations to come.
    //         </p>
    //       </section>

    //       <section>
    //         <h3 className="font-bold mb-2">2. How does SOLON use Bitcoin as a treasury asset?</h3>
    //         <p className="text-sm text-gray-600">
    //           SOLON holds Bitcoin as a mission-aligned store of value, ensuring long-term sustainability. Instead of
    //           spending all donations immediately, we strategically deploy excess BTC returns to fund rehabilitation
    //           centers, children and youth welfare programs, and low-income housing. For housing, we also use Bitcoin as
    //           collateral to secure loans, funding projects while preserving our treasury. The returns generated
    //           replenish our BTC reserves, creating a sustainable cycle of impact.
    //         </p>
    //       </section>

    //       <section>
    //         <h3 className="font-bold mb-2">3. Why did SOLON choose Bitcoin instead of traditional fiat reserves?</h3>
    //         <ul className="list-disc pl-4 space-y-1">
    //           <li className="text-sm text-gray-600">
    //             Bitcoin is sound money. Unlike fiat currencies that lose purchasing power due to inflation, Bitcoin's
    //             fixed supply (21 million BTC) ensures it holds and appreciates in value over time.
    //           </li>
    //           <li className="text-sm text-gray-600">
    //             Transparency: All BTC donations can be publicly audited on the blockchain.
    //           </li>
    //           <li className="text-sm text-gray-600">
    //             Borderless Giving: Bitcoin allows seamless, censorship-resistant donations worldwide.
    //           </li>
    //         </ul>
    //       </section>

    //       <section>
    //         <h3 className="font-bold mb-2">4. Who founded SOLON, and what inspired its creation?</h3>
    //         <p className="text-sm text-gray-600">
    //           SOLON was founded by leaders who believe in Bitcoin's power to drive lasting impact. Inspired by one
    //           founder's personal experience with a loved one trapped in addiction and incarceration, SOLON was created
    //           to break this cycle. The nonprofit was created to combine the resilience of Bitcoin with high-impact
    //           social initiatives—ensuring long-term funding for meaningful change.
    //         </p>
    //       </section>
    //     </div>
    //   </DialogContent>
    // </Dialog>
  )
}

