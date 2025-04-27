import { Button } from "@/components/ui/button"
import { Twitter, Mail } from "lucide-react"
import Link from "next/link"
import { SolonLogo } from "./solon-logo"

export function Footer() {
  return (
    <footer className="bg-[#0A4B3C] text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="mb-4">
              <SolonLogo />
            </div>
            <p className="text-sm opacity-80 mb-4">The World's First Bitcoin Treasury Nonprofit Organization</p>
            <nav className="flex flex-wrap gap-4 mb-4">
              <Link href="/" className="text-sm opacity-80 hover:opacity-100">
                Home
              </Link>
              <Link href="https://solonbitcoin.com/faq" className="text-sm opacity-80 hover:opacity-100">
                FAQ
              </Link>
              <Link href="https://solonbitcoin.com/donate" className="text-sm opacity-80 hover:opacity-100">
                Donate
              </Link>
              <Link
                href="https://blockchair.com/bitcoin/address/bc1q5jzqdtcfq2wxdszpakwfgz9jc69h3vpq2m7vth"
                className="text-sm opacity-80 hover:opacity-100"
              >
                Wallet Transparency
              </Link>
            </nav>
            <div className="flex gap-4 mb-4">
              <Link href="https://twitter.com/solonbitcoin" className="opacity-80 hover:opacity-100">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="mailto:team@soloncharity.com" className="opacity-80 hover:opacity-100">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
            <Button className="bg-white text-[#0A4B3C] hover:bg-white/90">Chat Now</Button>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://solonbitcoin.com/faq" className="text-sm opacity-80 hover:opacity-100">
                    FAQ: solonbitcoin.com/faq
                  </Link>
                </li>
                <li>
                  <Link href="https://solonbitcoin.com/donate" className="text-sm opacity-80 hover:opacity-100">
                    Donate: solonbitcoin.com/donate
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://blockchair.com/bitcoin/address/bc1q5jzqdtcfq2wxdszpakwfgz9jc69h3vpq2m7vth"
                    className="text-sm opacity-80 hover:opacity-100"
                  >
                    Wallet Transparency: View on Blockchair
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-sm opacity-80">© {new Date().getFullYear()} SOLON. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

