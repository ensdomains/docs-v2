import { FC } from 'react';
import { useAccount, useSwitchNetwork } from 'wagmi';

import { Button } from '@/components/Button';

export const ChainField: FC = () => {
    const { switchNetwork } = useSwitchNetwork();
    const { isConnected, address } = useAccount();

    return (
        <div className="">
            <span>Chain</span>
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
                            (id === 5
                                ? 'secondary'
                                : 'disabled') as unknown as 'primary'
                        }
                        onClick={() => {
                            if (id === 5) {
                                // TODO: Change Chain ID
                                switchNetwork(id);
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
