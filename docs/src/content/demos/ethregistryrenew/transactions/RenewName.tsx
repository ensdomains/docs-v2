import { FC } from 'react';
import { FiX } from 'react-icons/fi';
import { formatEther } from 'viem';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';

import { Button } from '@/components/Button';

import { ETHRegistrarABI } from '../../ethregistry/ETHRegistryABI';

export const RenewName: FC<{
    name: string;
    duration: number;
    rentPrice: bigint;
}> = ({ name, duration, rentPrice }) => {
    const isReady = name && duration && rentPrice > 0;

    const {
        data: renewCallResult,
        config: renewConfig,
        isError,
    } = usePrepareContractWrite({
        abi: ETHRegistrarABI,
        address: '0xcc5e7db10e65eed1bbd105359e7268aa660f6734',
        functionName: 'renew',
        args: [name, duration],
        value: rentPrice,
        enabled: isReady,
    });

    const { write: renew } = useContractWrite(renewConfig);

    const rentPriceFormatted = formatEther(rentPrice || BigInt(0));

    return (
        <div>
            <div className="border-ens-light-border dark:border-ens-dark-border space-y-2 rounded-lg border p-4">
                <div className="space-x-2">
                    <div className="tag tag-yellow">Transaction</div>
                    <div className="text-ens-light-text-secondary dark:text-ens-dark-text-secondary inline">
                        Renew the name.
                    </div>
                </div>
                <div className="border-ens-light-border dark:border-ens-dark-border break-all rounded-lg border p-2">
                    <span className="text-ens-light-blue-primary">
                        ETHRegistrarController
                    </span>
                    .renew(
                    <span className="text-ens-light-pink-primary">
                        "{name}"
                    </span>
                    ,
                    <span className="text-ens-light-orange-primary">
                        {duration}
                    </span>
                    )
                </div>
                <div className="flex w-full items-center justify-end gap-4">
                    <div>xxx gas</div>
                    <div>{rentPriceFormatted} eth</div>
                    <Button
                        onClick={() => {
                            renew();
                        }}
                        variant="primary"
                    >
                        Renew
                    </Button>
                </div>
                {!isReady && (
                    <div className="text-ens-light-red-primary border-ens-light-red-primary dark:border-ens-dark-red-primary bg-ens-light-red-surface dark:bg-ens-dark-red-surface flex items-center gap-1 rounded-lg px-3 py-2">
                        <FiX />
                        Not Ready
                    </div>
                )}
                {isError && (
                    <div className="text-ens-light-red-primary border-ens-light-red-primary dark:border-ens-dark-red-primary bg-ens-light-red-surface dark:bg-ens-dark-red-surface flex items-center gap-1 rounded-lg px-3 py-2">
                        <FiX />
                        Problem
                    </div>
                )}
            </div>
        </div>
    );
};
