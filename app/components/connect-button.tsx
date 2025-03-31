"use client"

import { useAccount } from "wagmi"
import { Button } from "@/components/ui/button"
import { CryptoWalletModal } from "./crypto-wallet-modal"

export const ConnectButton = () => {
  const { address, isConnected } = useAccount()

  return (
    <CryptoWalletModal>
      <Button className="w-full bg-[#0A4B3C] hover:bg-[#0A4B3C]/90 text-white">
        {isConnected ? `Connected: ${address?.slice(0, 6)}...${address?.slice(-4)}` : "Connect Wallet"}
      </Button>
    </CryptoWalletModal>
  )
}

