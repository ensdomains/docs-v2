'use client';

import '@ens-tools/thorin-core';
import 'webcomponent-qr-code';

import { setupConfig } from '@ens-tools/thorin-core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { goerli, mainnet, sepolia } from 'viem/chains';
import { createConfig, http, WagmiProvider } from 'wagmi';

export const config = createConfig({
    chains: [mainnet, goerli, sepolia],
    transports: {
        [mainnet.id]: http(),
        [goerli.id]: http(),
        [sepolia.id]: http(),
    },
});

setupConfig(config as any);

declare module 'wagmi' {
    interface Register {
        config: typeof config;
    }
}

const queryClient = new QueryClient();

export const Theme = ({ children }) => {
    return (
        <ThemeProvider attribute="class">
            <QueryClientProvider client={queryClient}>
                <WagmiProvider config={config}>{children}</WagmiProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
};
