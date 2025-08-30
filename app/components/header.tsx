import Link from "next/link"
import { SolonLogo } from "./solon-logo"
import { MobileSidebar } from "./mobile-sidebar"

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container flex h-16 items-center justify-between px-4"> {/* Added padding for spacing */}
        <Link href="/" className="flex items-center space-x-2">
          <SolonLogo />
        </Link>
        <nav className="hidden md:flex items-center gap-3 flex-wrap"> {/* Adjusted gap size and wrap */}
          <Link
            href="/"
            className="text-xs sm:text-xs md:text-xs lg:text-sm font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors"
          >
            Home
          </Link>
          
          <Link
            href="/#what-we-do"
            className="text-xs sm:text-xs md:text-xs lg:text-sm font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors"
          >
            What We Do
          </Link>
          
          <Link
            href="/#our-mission"
            className="text-xs sm:text-xs md:text-xs lg:text-sm font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors"
          >
            Our Mission
          </Link>
          
          <Link
            href="/#why-bitcoin"
            className="text-xs sm:text-xs md:text-xs lg:text-sm font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors"
          >
            Why Bitcoin
          </Link>
          
          <Link
            href="/#why-work-with-us"
            className="text-xs sm:text-xs md:text-xs lg:text-sm font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors"
          >
            Why Work With Us
          </Link>
          
          <Link
            href="/#take-the-next-step"
            className="text-xs sm:text-xs md:text-xs lg:text-sm font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors"
          >
            Take the Next Step
          </Link>
        </nav>
        
        <MobileSidebar />
      </div>
    </header>
  )
}