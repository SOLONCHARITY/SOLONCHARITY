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
          <h2 className="text-4xl font-bold mb-6 text-center">Make a Bitcoin Donation Today</h2>
          <p className="text-xl text-gray-200 mb-8 text-center">
            Donate to SOLON, the world’s first Bitcoin Treasury Nonprofit, and help build a lasting engine for global impact. Your Bitcoin donation isn’t just a gift—it’s a powerful investment in a better world, growing in value to fund transformative programs for generations.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="p-8 bg-white text-[#0A4B3C] h-full flex flex-col">
                <div className="flex items-center justify-center mb-4">
                  <Bitcoin className="h-12 w-12 text-[#0A4B3C]" />
                </div>
                <h3 className="font-bold mb-4 text-center">Bitcoin</h3>
                <p className="text-sm text-gray-600 mb-4 text-center flex-grow">
                  Donate Bitcoin
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
                  We accept all cryptocurrencies and fiat, converting them to Bitcoin.
                </p>
                <CryptoWalletModal>
                  <Button className="w-full bg-[#0A4B3C] hover:bg-[#0A4B3C]/90 text-white">Donate Now</Button>
                </CryptoWalletModal>
              </Card>
            </motion.div>
          </div>

          <p className="text-center mt-8 text-gray-200">
            Don’t wait—your donation today can transform lives tomorrow and beyond. <br/>Act now to be part of this groundbreaking movement.
          </p>
        </div>
      </div>
    </section>
  )
}

