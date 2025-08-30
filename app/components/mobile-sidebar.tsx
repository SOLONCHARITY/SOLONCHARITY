"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedDonateButton } from "./animated-donate-button"
import { SolonLogo } from "./solon-logo"

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Trigger Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="md:hidden"
        onClick={toggleMenu}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Background overlay */}
          <div 
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" 
            onClick={closeMenu}
          />
          
          {/* Sidebar */}
          <div className="fixed top-0 right-0 z-50 h-full w-[300px] bg-white shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out md:hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <SolonLogo />
              <Button variant="ghost" size="icon" onClick={closeMenu}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            {/* Navigation */}
            <div className="flex flex-col gap-4 p-4">
              <Link 
                href="#hero" 
                className="text-lg font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors py-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              <Link
                href="#what-we-do"
                className="text-lg font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors py-2"
                onClick={closeMenu}
              >
                What We Do
              </Link>

              <Link
                href="#our-mission"
                className="text-lg font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors py-2"
                onClick={closeMenu}
              >
                Our Mission
              </Link>
              
              <Link
                href="#why-bitcoin"
                className="text-lg font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors py-2"
                onClick={closeMenu}
              >
                Why Bitcoin
              </Link>
              
              <Link
                href="#why-work-with-us"
                className="text-lg font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors py-2"
                onClick={closeMenu}
              >
                Why Work With Us
              </Link>
              
              <Link
                href="/#take-the-next-step"
                className="text-lg font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors py-2"
                onClick={closeMenu}
              >
                Take the Next Step
              </Link>
              
              <Link
                href="#initiatives"
                className="text-lg font-medium text-[#0A4B3C] hover:text-[#0A4B3C]/80 transition-colors py-2"
                onClick={closeMenu}
              >
                Initiatives
              </Link>
              
              <div className="mt-4">
                <AnimatedDonateButton />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}