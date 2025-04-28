import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <title>Bitcoin Philanthropy powered by Bitcoin</title>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>{children}</body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
