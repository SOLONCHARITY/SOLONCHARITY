import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedDonateButton } from "./animated-donate-button"
import { SolonLogo } from "./solon-logo"

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>
            <SolonLogo />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 mt-8">
          <Link href="#hero" className="text-lg font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors">
            Home
          </Link>
          <Link
            href="#why-bitcoin"
            className="text-lg font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors"
          >
            Why Bitcoin
          </Link>
          <Link
            href="#treasury-strategy"
            className="text-lg font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors"
          >
            Treasury Strategy
          </Link>
          <Link
            href="#initiatives"
            className="text-lg font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors"
          >
            Initiatives
          </Link>
          <div className="mt-4">
            <AnimatedDonateButton />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

