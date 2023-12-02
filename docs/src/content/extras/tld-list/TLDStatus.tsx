'use client';

import { FC } from 'react';
import { namehash } from 'viem';
import { useContractRead, WagmiConfig } from 'wagmi';
import { configureChains, createConfig, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { ClientOnly } from '@/ClientOnly';

const {
    chains: _chains,
    publicClient,
    webSocketPublicClient,
} = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
});

const ADDRESS_MAP = {
    '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85': 'ETH Registrar',
    '0x58774Bb8acD458A640aF0B88238369A167546ef2': 'DNS Registrar',
    '0x828D6e836e586B53f1da3403FEda923AEd431019': 'Protocol.ART Registrar',
};

export const Component: FC<{ tld: string }> = ({ tld }) => {
    const { data, error, isSuccess, isLoading, status, refetch } =
        useContractRead({
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
            abi: [
                {
                    name: 'owner',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [{ name: 'node', type: 'bytes32' }],
                    outputs: [{ name: 'owner', type: 'address' }],
                },
            ],
            args: [namehash(tld)],
            functionName: 'owner',
            chainId: 1,
        });

    return (
        <div className="flex gap-2 border">
            <div>{(data && ADDRESS_MAP[data as any]) || data}</div>
        </div>
    );
};

export const TLDStatus: FC<{ tld: string }> = ({ tld }) => (
    <ClientOnly
        child={() => (
            <WagmiConfig config={config}>
                <Component tld={tld} />
            </WagmiConfig>
        )}
    />
);

// https://enstate.rs/n/eth
// https://enstate.rs/n/com
// https://enstate.rs/n/xyz
// https://enstate.rs/n/net
