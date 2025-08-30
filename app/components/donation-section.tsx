"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bitcoin, Coins } from "lucide-react"
import { motion } from "framer-motion"
import { CryptoWalletModal } from "./crypto-wallet-modal"

export function DonationSection() {
  return (
    <section className="bg-[#0A4B3C] text-white py-16" id={"why-work-with-us"}>
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Why Work With Us?</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto text-center">
          <div>
            <p className="text-xl">
              <strong>Nonprofit-first lens</strong>: We understand compliance, fiduciary duties, and donor relations.
            </p>
          </div>
          
          <div>
            <p className="text-xl">
              <strong>Practical strategies</strong>: Our guidance is tailored to board policies, investment committees, and governance structures.
            </p>
          </div>
          
          <div>
            <p className="text-xl">
              <strong>Mission-aligned growth</strong>: Every Bitcoin strategy we design centers your impact, not speculation.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

