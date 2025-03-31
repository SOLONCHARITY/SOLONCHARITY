import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // Parse the request body to get the wallet type
    const body = await request.json()
    const { walletType } = body

    // Get the appropriate donation address based on wallet type
    let donationAddress

    if (walletType === "coinbase") {
      donationAddress = process.env.NEXT_PUBLIC_COINBASE_DONATION_ADDRESS
    } else {
      // Default to MetaMask address
      donationAddress = process.env.NEXT_PUBLIC_DONATION_ADDRESS
    }

    if (!donationAddress) {
      return NextResponse.json({ error: "Donation address not configured for this wallet type" }, { status: 500 })
    }

    // Return the donation address
    return NextResponse.json({
      donationAddress,
      // Add additional information to help with wallet verification
      organizationName: "SOLON Bitcoin Treasury",
      verificationMessage: "This is a legitimate donation to SOLON Bitcoin Treasury Organization",
    })
  } catch (error) {
    console.error("Error in donation API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

