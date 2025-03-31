"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface WalletConnectButtonProps {
  connectorName: string
  onClick: () => void
  disabled: boolean
  isPending: boolean
}

export function WalletConnectButton({ connectorName, onClick, disabled, isPending }: WalletConnectButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-[#0A4B3C] hover:bg-[#0A4B3C]/90 text-white flex items-center justify-center"
    >
      {connectorName === "MetaMask" && (
        <Image src="/metamask-logo.svg" alt="MetaMask" width={24} height={24} className="mr-2" />
      )}
      {connectorName === "Coinbase Wallet" && (
        <Image src="/coinbase-logo.svg" alt="Coinbase Wallet" width={24} height={24} className="mr-2" />
      )}
      Connect with {connectorName}
      {disabled && " (unsupported)"}
      {isPending && " (connecting)"}
    </Button>
  )
}

