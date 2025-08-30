import { Twitter, Mail } from "lucide-react"
import Link from "next/link"
import { SolonLogo } from "./solon-logo"

export function Footer() {
  return (
    <footer className="bg-[#0A4B3C] text-white">
      <div className="container py-12">
        <div className="text-center">
          <p className="text-sm opacity-80">
           © {new Date().getFullYear()}  SOLON CHARITY | Advisors for Nonprofits Entering the Bitcoin Era.
          </p>
        </div>
      </div>
    </footer>
  )
}
