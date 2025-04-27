"use client"

import Link from "next/link"
import { SolonLogo } from "./solon-logo"
import { AnimatedDonateButton } from "./animated-donate-button"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <SolonLogo />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors">
            Home
          </Link>
          <Link
            href="/#why-bitcoin"
            className="text-sm font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors"
          >
            Why Bitcoin
          </Link>
          <Link
            href="/#treasury-strategy"
            className="text-sm font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors"
          >
            Treasury Strategy
          </Link>
          <Link href="/faq" className="text-sm font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors">
            FAQ
          </Link>
          <AnimatedDonateButton />
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}

