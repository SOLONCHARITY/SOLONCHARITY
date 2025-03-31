import { createConfig, configureChains } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"
import { InjectedConnector } from "wagmi/connectors/injected"
import { publicProvider } from "wagmi/providers/public"

// Configure chains & providers
const { chains, publicClient, webSocketPublicClient } = configureChains([mainnet, sepolia], [publicProvider()])

// Set up wagmi config
export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        name: "MetaMask",
        shimDisconnect: true,
      },
    }),
  ],
})

