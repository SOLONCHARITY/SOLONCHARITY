"use client"

import { Button } from "@/components/ui/button"
import { Bitcoin } from "lucide-react"
import type { ReactNode } from "react"

interface NOWPaymentsButtonProps {
  children?: ReactNode
  className?: string
}

export function NOWPaymentsButton({ children, className }: NOWPaymentsButtonProps) {
  const handleDonateClick = () => {
    window.open("https://nowpayments.io/donation/solon", "_blank")
  }

  return (
    <Button onClick={handleDonateClick} className={className}>
      {children || (
        <>
          <Bitcoin className="w-5 h-5 mr-2" />
          Donate
        </>
      )}
    </Button>
  )
}

