'use client';

import { ThemeProvider } from 'next-themes';
import { goerli, sepolia } from 'viem/chains';
import { configureChains, createConfig, mainnet, WagmiConfig } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

export const TheConnector = new InjectedConnector({
    options: {
        name: 'My Injected Wallet',
        shimDisconnect: true,
        getProvider: () =>
            typeof window !== 'undefined' ? window['ethereum'] : undefined,
    },
});

const {
    chains: _chains,
    publicClient,
    webSocketPublicClient,
} = configureChains(
    [goerli, sepolia, mainnet],
    [
        jsonRpcProvider({
            rpc: (chain) => {
                if (chain.id == 5)
                    return {
                        http: 'https://rpc.ankr.com/eth_goerli',
                        webSocket: undefined,
                    };

                // eslint-disable-next-line unicorn/no-useless-undefined
                return undefined;
            },
        }),
        publicProvider(),
    ]
);

const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors: [TheConnector],
});

export const Theme = ({ children }) => {
    return (
        <ThemeProvider attribute="class">
            <WagmiConfig config={config}>{children}</WagmiConfig>
        </ThemeProvider>
    );
};
