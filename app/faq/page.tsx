import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const faqSections = [
  {
    title: "About SOLON",
    questions: [
      {
        question: "What is SOLON, and what makes it unique as a nonprofit?",
        answer: (
          <>
            <p>
              SOLON is the world's first Bitcoin Treasury nonprofit. Unlike traditional nonprofits that rely on cash
              reserves eroded by inflation, we store and grow donations in Bitcoin, a resilient asset that ensures
              long-term impact. Our mission is deeply personal. One of our founders has witnessed his own brother
              trapped in the cycle of addiction, incarceration, and struggle—a reality faced by countless young people
              worldwide. SOLON was born from the urgent need to break this cycle and create real change.
            </p>
            <p>We dedicate our treasury's growth to the causes closest to our hearts:</p>
            <ul className="list-none pl-5 space-y-2">
              <li>✔ Rehabilitation for drug addicts – Providing support for recovery and reintegration.</li>
              <li>
                ✔ Children & Youth well-being and protection – Ensuring a safer, brighter future for the next
                generation.
              </li>
              <li>✔ Low-income housing – Building stability for those who need it most.</li>
            </ul>
            <p>
              By holding Bitcoin, we ensure that every contribution appreciates in value, amplifying its power to
              transform lives for generations to come.
            </p>
          </>
        ),
      },
      {
        question: "How does SOLON use Bitcoin as a treasury asset?",
        answer:
          "SOLON holds Bitcoin as a mission-aligned store of value, ensuring long-term sustainability. Instead of spending all donations immediately, we strategically deploy excess BTC returns to fund rehabilitation centers, children and youth welfare programs, and low-income housing. For housing, we also use Bitcoin as collateral to secure loans, funding projects while preserving our treasury. The returns generated replenish our BTC reserves, creating a sustainable cycle of impact.",
      },
      {
        question: "Why did SOLON choose Bitcoin instead of traditional fiat reserves?",
        answer: (
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Bitcoin is sound money. Unlike fiat currencies that lose purchasing power due to inflation, Bitcoin's
              fixed supply (21 million BTC) ensures it holds and appreciates in value over time.
            </li>
            <li>Transparency: All BTC donations can be publicly audited on the blockchain.</li>
            <li>Borderless Giving: Bitcoin allows seamless, censorship-resistant donations worldwide.</li>
          </ul>
        ),
      },
      {
        question: "Who founded SOLON, and what inspired its creation?",
        answer:
          "SOLON was founded by leaders who believe in Bitcoin's power to drive lasting impact. Inspired by one founder's personal experience with a loved one trapped in addiction and incarceration, SOLON was created to break this cycle. The nonprofit was created to combine the resilience of Bitcoin with high-impact social initiatives—ensuring long-term funding for meaningful change.",
      },
      {
        question: "What causes does SOLON support with its Bitcoin treasury?",
        answer: (
          <>
            <p>100% of SOLON's excess Bitcoin returns are deployed toward:</p>
            <ul className="list-none pl-5 space-y-2">
              <li>✅ Rehabilitation for drug addicts – Supporting centers that provide holistic recovery programs.</li>
              <li>
                ✅ Children & Youth well-being – Funding education, health, rehabilitation programs, and juvenile
                justice reform to protect and empower vulnerable children.
              </li>
              <li>✅ Low-income housing – Building affordable housing for underserved communities.</li>
            </ul>
          </>
        ),
      },
      {
        question: "How is SOLON different from traditional nonprofits?",
        answer: (
          <>
            <p>
              Traditional nonprofits often struggle with inflation eroding their reserves and rely on constant
              fundraising. SOLON's Bitcoin Treasury strategy ensures that:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Donations retain and grow their value over time.</li>
              <li>The nonprofit becomes self-sustaining, reducing dependency on ongoing fundraising.</li>
              <li>Financial transparency is unmatched, thanks to Bitcoin's public ledger.</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    title: "Donations & Fundraising",
    questions: [
      {
        question: "How can I donate Bitcoin or other cryptocurrencies to SOLON?",
        answer:
          "You can donate Bitcoin directly using our BTC donation address. We also accept other cryptocurrencies, which are automatically converted into Bitcoin at market rates. Donate here: [Link to donation page]",
      },
      {
        question: "Can I make a recurring Bitcoin donation?",
        answer:
          "Yes! Recurring Bitcoin donations are welcome, and we'll soon launch auto-payment solutions for seamless giving.",
      },
      {
        question: "What happens if I donate cryptocurrencies other than Bitcoin?",
        answer:
          "We accept all major cryptocurrencies, but to maintain our BTC treasury strategy, we convert all donations into Bitcoin. This ensures long-term sustainability and treasury growth.",
      },
      {
        question: "Can I donate fiat (USD, EUR, etc.), or do you only accept crypto?",
        answer:
          "Yes! While Bitcoin is our preferred treasury asset, we accept fiat donations via check or credit card. All fiat donations will be converted into Bitcoin to align with our mission.",
      },
      {
        question: "Are donations to SOLON tax-deductible?",
        answer:
          "SOLON is currently in the process of obtaining 501(c)(3) tax-exempt status in the U.S. Once approved, all U.S. donors will be eligible for tax-deductible contributions. For international donors, tax benefits depend on local regulations.",
      },
      {
        question: "Will I receive a tax receipt for my donation?",
        answer: "Yes! If you provide an email, you'll receive a donation receipt for every contribution.",
      },
      {
        question: "Does SOLON accept donor-advised funds (DAFs) or corporate sponsorships?",
        answer:
          "Yes! We welcome contributions from DAFs, corporate giving programs, and philanthropic foundations looking to support innovative nonprofit financial models.",
      },
      {
        question: "Does SOLON accept Program-Related Investments (PRIs)?",
        answer:
          "Absolutely. We actively seek PRI partnerships with mission-aligned investors who want to deploy capital for social good while ensuring responsible returns.",
      },
      {
        question: "How does SOLON ensure transparency with donations and fund usage?",
        answer: (
          <ul className="list-disc pl-5 space-y-2">
            <li>All Bitcoin donations can be verified on the blockchain.</li>
            <li>We publish treasury reports, showing Bitcoin reserves and fund distributions.</li>
            <li>An annual independent audit ensures financial accountability.</li>
          </ul>
        ),
      },
    ],
  },
  {
    title: "Bitcoin Treasury & Financial Management",
    questions: [
      {
        question: "How does SOLON's Bitcoin treasury work?",
        answer: (
          <>
            <p>SOLON follows a Bitcoin-first financial model, where we:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Accept BTC & crypto donations.</li>
              <li>Convert all non-BTC donations into Bitcoin.</li>
              <li>Hold Bitcoin long-term as a treasury asset.</li>
              <li>Collaterize or use excess BTC returns to fund high-impact initiatives.</li>
            </ul>
          </>
        ),
      },
      {
        question: "Where does SOLON store its Bitcoin donations?",
        answer:
          "SOLON uses a multisig cold storage setup to secure all Bitcoin holdings (migrating from a single-sig at the moment). This prevents unauthorized access and ensures that funds remain safe.",
      },
      {
        question: "What happens if Bitcoin increases significantly in value?",
        answer:
          "If Bitcoin appreciates, we reinvest the excess returns into expanding our funded projects—scaling rehabilitation centers, building more homes, and reaching more children and youth in need.",
      },
      {
        question: "Does SOLON ever sell Bitcoin, or is it strictly a long-term holder?",
        answer:
          "Our treasury strategy prioritizes holding Bitcoin, but we sell small portions only when necessary to fund critical initiatives while maintaining treasury growth.",
      },
      {
        question: "How does SOLON protect its Bitcoin from hacks or theft?",
        answer: (
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Multisig wallets: Bitcoin is secured with a multi-signature setup requiring multiple approvals for
              transactions.
            </li>
            <li>Cold storage: We store BTC offline, making it immune to cyber attacks.</li>
            <li>
              Regular security audits: We aim to undergo independent audits to ensure our treasury remains safe and
              transparent.
            </li>
          </ul>
        ),
      },
      {
        question: "Can donors track SOLON's Bitcoin treasury in real-time?",
        answer:
          "Yes! We publish publicly viewable BTC addresses so donors can verify all incoming donations and treasury growth.",
      },
      {
        question: "Does SOLON stake, lend, or generate yield on its Bitcoin holdings?",
        answer: "Currently no. SOLON follows a low-risk, long-term holding strategy.",
      },
    ],
  },
  {
    title: "Partnerships & Collaboration",
    questions: [
      {
        question: "How can companies or foundations partner with SOLON?",
        answer:
          "We welcome partnerships with Bitcoin-friendly third-parties. To discuss collaborations, contact us at team@soloncharity.com.",
      },
      {
        question: "Does SOLON accept support from Crypto-related businesses?",
        answer:
          "Yes! We're open to actively work with bitcoin and crypto-focused companies to expand the adoption of crypto-based philanthropy.",
      },
      {
        question: "How can I stay updated on SOLON's progress?",
        answer: (
          <div>
            <p>📢 Follow us on Twitter</p>
            <Link
              href="https://twitter.com/SolonBitcoin"
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @SolonBitcoin
            </Link>
          </div>
        ),
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

          {/* FAQ Sections */}
          {faqSections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-[#0A4B3C]">{section.title}</h2>
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((item, questionIndex) => (
                  <AccordionItem key={questionIndex} value={`item-${index}-${questionIndex}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

