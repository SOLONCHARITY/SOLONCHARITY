"use client"

import { Bitcoin } from "lucide-react"
import { motion } from "framer-motion"
import { NOWPaymentsButton } from "./now-payments-button"

export function AnimatedDonateButton() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
      <NOWPaymentsButton className="relative flex items-center justify-center bg-[#0A4B3C] text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
        <Bitcoin className="w-5 h-5 mr-2" />
        <span>Donate</span>
      </NOWPaymentsButton>
    </motion.div>
  )
}

