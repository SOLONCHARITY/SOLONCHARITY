"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import MetaMaskLogo from "./MetaMaskLogo"
import CoinbaseLogo from "./CoinbaseLogo"
import { CheckCircle, XCircle } from "lucide-react"

type WalletType = "metamask" | "coinbase" | null
type DonationStatus = "idle" | "processing" | "success" | "failed"

export function CryptoWalletModal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [amount, setAmount] = useState("0.001")
  const [error, setError] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)
  const [isPending, setIsPending] = useState(false)
  const [donationStatus, setDonationStatus] = useState<DonationStatus>("idle")
  const [showWalletOptions, setShowWalletOptions] = useState(true)
  const [selectedWallet, setSelectedWallet] = useState<WalletType>(null)
  const [showDownloadOption, setShowDownloadOption] = useState<WalletType>(null)
  const [donationAddress, setDonationAddress] = useState<string | null>(null)
  const [transactionHash, setTransactionHash] = useState<string | null>(null)

  useEffect(() => {
    if (isConnected) {
      setError(null)
      setShowDownloadOption(null)
    }
  }, [isConnected])

  // Check if wallets are available when the modal opens
  useEffect(() => {
    if (isOpen && !isConnected) {
      checkWalletAvailability()
    }
  }, [isOpen, isConnected])

  // Fetch donation address when wallet is selected
  useEffect(() => {
    if (selectedWallet) {
      fetchDonationAddress(selectedWallet)
    }
  }, [selectedWallet])

  const fetchDonationAddress = async (walletType: WalletType) => {
    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ walletType }),
      })

      if (!response.ok) {
        throw new Error("Failed to get donation address")
      }

      const data = await response.json()
      if (data.donationAddress) {
        setDonationAddress(data.donationAddress)
      }
    } catch (error) {
      console.error("Error fetching donation address:", error)
    }
  }

  const checkWalletAvailability = () => {
    if (typeof window === "undefined") return

    // Reset states
    setShowWalletOptions(true)
    setSelectedWallet(null)
    setShowDownloadOption(null)
    setDonationStatus("idle")

    // Check if any provider is available
    const hasProvider = typeof window.ethereum !== "undefined"
    if (!hasProvider) {
      // If no provider at all, we'll show wallet options and let user choose which to download
      setShowWalletOptions(true)
      return
    }

    // If we have a provider, we'll still show options for user to choose
    setShowWalletOptions(true)
  }

  const isMetaMaskAvailable = () => {
    if (typeof window === "undefined" || !window.ethereum) return false
    return window.ethereum.isMetaMask === true
  }

  const isCoinbaseWalletAvailable = () => {
    if (typeof window === "undefined" || !window.ethereum) return false
    return (
      window.ethereum.isCoinbaseWallet === true ||
      (window.ethereum.providers && window.ethereum.providers.some((provider) => provider.isCoinbaseWallet))
    )
  }

  const getEthereumProvider = (walletType: WalletType) => {
    if (typeof window === "undefined" || !window.ethereum) return null

    // If we have providers array, find the specific one
    if (window.ethereum.providers) {
      if (walletType === "metamask") {
        return window.ethereum.providers.find((provider) => provider.isMetaMask)
      } else if (walletType === "coinbase") {
        return window.ethereum.providers.find((provider) => provider.isCoinbaseWallet)
      }
    }

    // Otherwise use the main provider if it matches the wallet type
    if (walletType === "metamask" && window.ethereum.isMetaMask) {
      return window.ethereum
    } else if (walletType === "coinbase" && window.ethereum.isCoinbaseWallet) {
      return window.ethereum
    }

    return null
  }

  const handleWalletSelect = (walletType: WalletType) => {
    setSelectedWallet(walletType)

    if (walletType === "metamask" && !isMetaMaskAvailable()) {
      setShowDownloadOption("metamask")
      return
    }

    if (walletType === "coinbase" && !isCoinbaseWalletAvailable()) {
      setShowDownloadOption("coinbase")
      return
    }

    // If wallet is available, try to connect
    handleConnect(walletType)
  }

  const handleConnect = async (walletType: WalletType) => {
    if (!walletType) return

    const provider = getEthereumProvider(walletType)
    if (!provider) {
      setShowDownloadOption(walletType)
      return
    }

    try {
      setIsPending(true)
      const accounts = await provider.request({ method: "eth_requestAccounts" })
      if (accounts && accounts.length > 0) {
        setAddress(accounts[0])
        setIsConnected(true)
        setSelectedWallet(walletType)
        setShowWalletOptions(false)
      }
    } catch (error) {
      console.error("Connection error:", error)

      // If it's a user rejection, show appropriate error
      if (error.code === 4001) {
        setError("Connection was rejected. Please try again.")
      } else {
        setShowDownloadOption(walletType)
      }
    } finally {
      setIsPending(false)
    }
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setAddress(null)
    setSelectedWallet(null)
    setShowWalletOptions(true)
    setError(null)
    setDonationAddress(null)
    setDonationStatus("idle")
    setTransactionHash(null)
  }

  const handleDonate = async () => {
    if (!amount || !address || !selectedWallet) return

    const provider = getEthereumProvider(selectedWallet)
    if (!provider) {
      setError("Wallet provider not found. Please reconnect.")
      return
    }

    // Make sure we have a donation address
    if (!donationAddress) {
      try {
        await fetchDonationAddress(selectedWallet)
      } catch (error) {
        setError("Failed to get donation address. Please try again.")
        return
      }
    }

    if (!donationAddress) {
      setError("Donation address not available. Please try again later.")
      return
    }

    setError(null)
    setDonationStatus("processing")

    try {
      // Convert amount to wei (hex)
      const amountInWei = `0x${(Number(amount) * 1e18).toString(16)}`

      // Send transaction
      const txHash = await provider.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: address,
            to: donationAddress,
            value: amountInWei,
          },
        ],
      })

      setTransactionHash(txHash)
      setDonationStatus("success")
      setAmount("0.001")
    } catch (error) {
      console.error("Error during donation:", error)
      setDonationStatus("failed")
      if (error.code === 4001) {
        setError("Transaction was cancelled. Please try again if you wish to donate.")
      } else {
        setError(error instanceof Error ? error.message : "An unknown error occurred")
      }
    }
  }

  const redirectToWalletDownload = (walletType: WalletType) => {
    if (walletType === "metamask") {
      window.open("https://metamask.io/download/", "_blank")
    } else if (walletType === "coinbase") {
      window.open("https://www.coinbase.com/wallet/downloads", "_blank")
    }
  }

  const renderWalletOptions = () => (
    <div className="space-y-4">
      <p className="text-center text-gray-600 mb-4">Choose your wallet:</p>

      <Button
        onClick={() => handleWalletSelect("metamask")}
        disabled={isPending}
        className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 flex items-center justify-center py-4 rounded-lg text-lg font-semibold transition-all duration-300 mb-3"
      >
        <MetaMaskLogo width={30} height={30} className="mr-3" />
        MetaMask
        {isPending && selectedWallet === "metamask" && " (connecting)"}
      </Button>

      <Button
        onClick={() => handleWalletSelect("coinbase")}
        disabled={isPending}
        className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 flex items-center justify-center py-4 rounded-lg text-lg font-semibold transition-all duration-300"
      >
        <CoinbaseLogo width={30} height={30} className="mr-3" />
        Coinbase Wallet
        {isPending && selectedWallet === "coinbase" && " (connecting)"}
      </Button>
    </div>
  )

  const renderDownloadOption = () => {
    if (!showDownloadOption) return null

    const isMetaMask = showDownloadOption === "metamask"
    const walletName = isMetaMask ? "MetaMask" : "Coinbase Wallet"
    const Logo = isMetaMask ? MetaMaskLogo : CoinbaseLogo

    return (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-500">{walletName} is not installed</p>
        <Button
          onClick={() => redirectToWalletDownload(showDownloadOption)}
          className="w-full bg-[#0A4B3C] hover:bg-[#0A4B3C]/90 text-white flex items-center justify-center py-6 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <Logo width={30} height={30} className="mr-3" />
          Download {walletName}
        </Button>
        <Button
          onClick={() => {
            setShowDownloadOption(null)
            setShowWalletOptions(true)
          }}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800"
        >
          Back to Wallet Options
        </Button>
      </div>
    )
  }

  const renderDonationSuccess = () => (
    <div className="space-y-4">
      <div className="flex flex-col items-center justify-center py-4">
        <div className="bg-green-100 rounded-full p-3 mb-4">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-center mb-2">Donation Successful!</h3>
        <p className="text-center text-gray-600 mb-4">
          Thank you for your generous contribution to SOLON Bitcoin Treasury.
        </p>
        {transactionHash && (
          <div className="w-full bg-gray-50 rounded-lg p-3 mb-4">
            <p className="text-xs text-gray-500 mb-1">Transaction Hash:</p>
            <p className="text-xs font-mono break-all text-gray-700">{transactionHash}</p>
          </div>
        )}
      </div>
      <div className="flex gap-3">
        <Button
          onClick={() => {
            setDonationStatus("idle")
            setTransactionHash(null)
          }}
          className="flex-1 bg-[#0A4B3C] hover:bg-[#0A4B3C]/90 text-white"
        >
          Make Another Donation
        </Button>
        <Button
          onClick={() => {
            setIsOpen(false)
            setTimeout(() => {
              setDonationStatus("idle")
              setTransactionHash(null)
            }, 300)
          }}
          variant="outline"
        >
          Close
        </Button>
      </div>
    </div>
  )

  const renderDonationFailed = () => (
    <div className="space-y-4">
      <div className="flex flex-col items-center justify-center py-4">
        <div className="bg-red-100 rounded-full p-3 mb-4">
          <XCircle className="h-12 w-12 text-red-500" />
        </div>
        <h3 className="text-xl font-bold text-center mb-2">Donation Failed</h3>
        <p className="text-center text-gray-600 mb-2">We encountered an issue processing your donation.</p>
        {error && <p className="text-center text-red-500 text-sm mb-4">{error}</p>}
      </div>
      <div className="flex gap-3">
        <Button
          onClick={() => {
            setDonationStatus("idle")
            setError(null)
          }}
          className="flex-1 bg-[#0A4B3C] hover:bg-[#0A4B3C]/90 text-white"
        >
          Try Again
        </Button>
        <Button
          onClick={() => {
            setIsOpen(false)
            setTimeout(() => {
              setDonationStatus("idle")
              setError(null)
            }, 300)
          }}
          variant="outline"
        >
          Close
        </Button>
      </div>
    </div>
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-800">Donate with Ethereum</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Connect your wallet and support our cause
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <AnimatePresence mode="wait">
            {!isConnected ? (
              <motion.div
                key="connect"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {showWalletOptions && !showDownloadOption
                  ? renderWalletOptions()
                  : showDownloadOption
                    ? renderDownloadOption()
                    : null}
              </motion.div>
            ) : donationStatus === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderDonationSuccess()}
              </motion.div>
            ) : donationStatus === "failed" ? (
              <motion.div
                key="failed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderDonationFailed()}
              </motion.div>
            ) : (
              <motion.div
                key="donate"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-center gap-2">
                  {selectedWallet === "metamask" ? (
                    <MetaMaskLogo width={24} height={24} />
                  ) : (
                    <CoinbaseLogo width={24} height={24} />
                  )}
                  <p className="text-center text-sm text-gray-500">
                    Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-3 border rounded-lg pl-12 text-lg"
                    step="0.001"
                    min="0.001"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Image src="/ethereum-logo.svg" alt="ETH" width={24} height={24} />
                  </div>
                </div>
                <Button
                  onClick={handleDonate}
                  disabled={donationStatus === "processing" || !amount}
                  className="w-full bg-[#0A4B3C] hover:bg-[#0A4B3C]/90 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {donationStatus === "processing" ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    `Donate ${amount} ETH`
                  )}
                </Button>
                <Button
                  onClick={handleDisconnect}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition-all duration-300"
                >
                  Disconnect
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <DialogFooter className="text-center text-xs text-gray-500 pt-2">
          All donations go directly to SOLON Bitcoin Treasury
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

