'use client';

import { useEffect, useState } from 'react';
import { createPublicClient, http } from 'viem';
import { goerli } from 'viem/chains';
import { useAccount, useChainId, useConnect } from 'wagmi';
import { createConfig, WagmiConfig } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

import { ClientOnly } from '@/ClientOnly';
import { Button } from '@/components/Button';

import { ChainField } from './inputs/ChainField';
import { DurationField } from './inputs/DurationField';
import { GenerateSecret } from './inputs/GenerateSecret';
import { LabelField } from './inputs/LabelField';
import { OwnerField } from './inputs/OwnerField';
import { ResolverField } from './inputs/ResolverField';
import { AvailabilityCheck } from './stage/AvailabilityCheck';
import { CommitmentCheck } from './stage/CommitmentCheck';
import { RentPriceCheck } from './stage/RentPriceCheck';
import { MakeCommit } from './transactions/MakeCommit';
import { RegisterName } from './transactions/RegisterName';

// const {
//     chains: _chains,
//     publicClient,
//     webSocketPublicClient,
// } = configureChains(
//     [goerli],
//     [
//         // publicProvider(),
//         jsonRpcProvider({
//             rpc: (chain) => {
//                 return {
//                     http: 'https://rpc.ankr.com/eth_goerli',
//                 };
//             },
//         }),
//     ]
// );
const publicClient = createPublicClient({
    chain: goerli,
    transport: http('https://rpc.ankr.com/eth_goerli'),
});

const config = createConfig({
    autoConnect: false,
    publicClient,
    // webSocketPublicClient,
});

const RESOLVER_REGEX = /^0x[\dA-Fa-f]{40}$/;
const NAME_REGEX = /^[\w-]+$/;
const ALLOWED_METHODS = ['addr', 'text', 'contenthash', 'ttl'];

const Demo = () => {
    const { address } = useAccount();
    const chainId = useChainId();

    /* User Configurable Values */
    const [label, setLabel] = useState('testname123456');
    const [owner, setOwner] = useState(
        '0x225f137127d9067788314bc7fcc1f36746a3c3B5'
    );
    const [resolver, setResolver] = useState(
        '0x225f137127d9067788314bc7fcc1f36746a3c3B5'
    );
    const [duration, setDuration] = useState(60 * 60 * 24 * 365);
    const [secret, setSecret] = useState(
        '0x0000000000000000000000000000000000000000000000000000000000000000'
    );

    /* State Values */
    const [available, setAvailable] = useState(false);
    const [commithash, setCommithash] = useState('');
    // eslint-disable-next-line unicorn/no-useless-undefined
    const [rentPrice, setRentPrice] = useState<bigint | null>(undefined);

    const { connect } = useConnect({
        connector: new InjectedConnector({ chains: [goerli] }),
        // TODO: Hardcoded chainid
        chainId: 5,
    });

    useEffect(() => {
        connect();
    }, []);

    const { isConnected } = useAccount();

    return (
        <div className="-m-4">
            <div className="border-ens-light-border dark:border-ens-dark-border w-full border-b px-4 py-2">
                Register a Name (Live Demo)
            </div>
            <div className="space-y-4 p-4">
                {!isConnected && (
                    <div>
                        <Button
                            variant="primary"
                            onClick={() => {
                                connect();
                            }}
                        >
                            Connect
                        </Button>
                    </div>
                )}
                <ChainField />
                <LabelField label={label} setLabel={setLabel} />
                <AvailabilityCheck name={label} setAvailable={setAvailable} />
                <DurationField duration={duration} setDuration={setDuration} />
                <GenerateSecret secret={secret} setSecret={setSecret} />
                <OwnerField owner={owner} setOwner={setOwner} />
                <ResolverField resolver={resolver} setResolver={setResolver} />
                <CommitmentCheck
                    name={label}
                    duration={duration}
                    owner={owner}
                    secret={secret}
                    resolver={resolver}
                    setCommithash={setCommithash}
                />
                <MakeCommit commithash={commithash} />
                <div>Wait 60 seconds.</div>
                <RentPriceCheck
                    name={label}
                    duration={duration}
                    setRentPrice={setRentPrice}
                />
                <RegisterName
                    name={label}
                    duration={duration}
                    owner={owner}
                    secret={secret}
                    resolver={resolver}
                    rentPrice={rentPrice}
                />
            </div>
        </div>
    );
};

export const ETHRegistryDemo = () => {
    return (
        <ClientOnly
            child={() => (
                <WagmiConfig config={config}>
                    <Demo />
                </WagmiConfig>
            )}
        />
    );
};
