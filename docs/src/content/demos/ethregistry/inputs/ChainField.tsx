import { FC } from 'react';
import { goerli } from 'viem/chains';
import {
    useAccount,
    useChainId,
    useConnect,
    useNetwork,
    useSwitchNetwork,
} from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

import { Button } from '@/components/Button';

const available_chains = new Set([5]);

export const ChainField: FC = () => {
    const { switchNetwork } = useSwitchNetwork();
    const chainId = useChainId();
    const { isConnected, address } = useAccount();
    const { chains } = useNetwork();
    const { connect } = useConnect();

    console.log(chains);

    return (
        <div className="">
            <span>Chain (currently {chainId})</span>
            <div className="flex gap-4">
                {(
                    [
                        [5, 'Goerli'],
                        [1, 'Mainnet'],
                        [11_155_111, 'Sepolia'],
                        [17_000, 'Holesky'],
                    ] as [number, string][]
                ).map(([id, name]) => (
                    <Button
                        key={id}
                        variant={
                            (available_chains.has(id)
                                ? 'secondary'
                                : 'disabled') as unknown as 'primary'
                        }
                        onClick={() => {
                            if (available_chains.has(id)) {
                                // TODO: Change Chain ID
                                // switchNetwork(id);
                                connect({
                                    chainId: id,
                                    connector: new InjectedConnector({
                                        chains: [goerli],
                                    }),
                                });
                            }
                        }}
                    >
                        <span>{name}</span>
                    </Button>
                ))}
            </div>
        </div>
    );
};
