import { TheConnector } from 'app/theme';
import { FC } from 'react';
import {
    useAccount,
    useChainId,
    useConnect,
    useDisconnect,
    useSwitchNetwork,
} from 'wagmi';

import { Button } from '@/components/Button';

const available_chains = new Set([5]);

export const ChainField: FC = () => {
    const { switchNetwork, chains, error, pendingChainId } = useSwitchNetwork();
    const chainId = useChainId();
    const { isConnected, address, connector } = useAccount();
    const { connect } = useConnect({
        connector: TheConnector,
        chainId: 5,
    });
    const { disconnectAsync } = useDisconnect();

    console.log({ switchNetwork });

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
                        onClick={async () => {
                            if (available_chains.has(id)) {
                                // if (switchNetwork) {
                                switchNetwork(id);
                                // } else {
                                await disconnectAsync();
                                connect({
                                    chainId: id,
                                    connector: TheConnector,
                                });

                                // }
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
