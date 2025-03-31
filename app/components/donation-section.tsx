"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bitcoin, Coins } from "lucide-react"
import { motion } from "framer-motion"
import { CryptoWalletModal } from "./crypto-wallet-modal"

export function DonationSection() {
  return (
    <section className="bg-[#0A4B3C] text-white py-16">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-center">Make a Bitcoin Donation</h2>
          <p className="text-xl text-gray-200 mb-8 text-center">
            We invite you to donate Bitcoin and be part of history in shaping the world's first Bitcoin Treasury
            Nonprofit Organization.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="p-8 bg-white text-[#0A4B3C] h-full flex flex-col">
                <div className="flex items-center justify-center mb-4">
                  <Bitcoin className="h-12 w-12 text-[#0A4B3C]" />
                </div>
                <h3 className="font-bold mb-4 text-center">Donate with MetaMask</h3>
                <p className="text-sm text-gray-600 mb-4 text-center flex-grow">
                  Connect your MetaMask wallet to make a secure donation.
                </p>
                <CryptoWalletModal>
                  <Button className="w-full bg-[#0A4B3C] hover:bg-[#0A4B3C]/90 text-white">Donate Now</Button>
                </CryptoWalletModal>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 bg-white text-[#0A4B3C] h-full flex flex-col">
                <div className="flex items-center justify-center mb-4">
                  <Coins className="h-12 w-12 text-[#0A4B3C]" />
                </div>
                <h3 className="font-bold mb-4 text-center">Donate Other Crypto</h3>
                <p className="text-sm text-gray-600 mb-6 text-center flex-grow">
                  We accept all cryptocurrencies but will convert them into BTC at market rate to maintain a strong
                  treasury.
                </p>
                <CryptoWalletModal>
                  <Button className="w-full bg-[#0A4B3C] hover:bg-[#0A4B3C]/90 text-white">Donate Now</Button>
                </CryptoWalletModal>
              </Card>
            </motion.div>
          </div>

          <p className="text-center mt-8 text-gray-200">
            Every satoshi counts. Your Bitcoin donation doesn't just fund programs today—it helps create a lasting,
            appreciating reserve that powers humanitarian efforts for decades to come.
          </p>
        </div>
      </div>
    </section>
  )
}

