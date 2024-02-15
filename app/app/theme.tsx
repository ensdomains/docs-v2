'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { goerli, mainnet, sepolia } from 'viem/chains';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { injected } from 'wagmi/connectors';

const config = createConfig({
    chains: [mainnet, goerli, sepolia],
    connectors: [injected({})],
    transports: {
        [mainnet.id]: http(),
        [goerli.id]: http(),
        [sepolia.id]: http(),
    },
});

declare module 'wagmi' {
    interface Register {
        config: typeof config;
    }
}

const queryClient = new QueryClient();

export const Theme = ({ children }) => {
    useEffect(() => {
        import('@ens-tools/thorin-core').finally(console.log);
    }, []);

    return (
        <ThemeProvider attribute="class">
            <QueryClientProvider client={queryClient}>
                <WagmiProvider config={config}>{children}</WagmiProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
};
