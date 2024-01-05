import { FC } from 'react';
import { FiX } from 'react-icons/fi';
import { formatEther } from 'viem';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';

import { Button } from '@/components/Button';

import { ETHRegistrarABI } from '../ETHRegistryABI';

export const RegisterName: FC<{
    name: string;
    duration: number;
    owner: string;
    secret: string;
    resolver: string;
    rentPrice: bigint;
}> = ({ name, duration, owner, secret, resolver, rentPrice }) => {
    const isReady =
        name && duration && owner && secret && resolver && rentPrice > 0;

    const {
        data: registerCallResult,
        config: registerConfig,
        isError,
    } = usePrepareContractWrite({
        abi: ETHRegistrarABI,
        address: '0xcc5e7db10e65eed1bbd105359e7268aa660f6734',
        functionName: 'register',
        args: [name, owner, duration, secret, resolver, [], false, 0],
        value: rentPrice,
        enabled: isReady,
    });

    const { write: register } = useContractWrite(registerConfig);

    const rentPriceFormatted = formatEther(rentPrice || BigInt(0));

    return (
        <div>
            <div className="space-y-2 rounded-lg border border-ens-light-border p-4 dark:border-ens-dark-border">
                <div className="space-x-2">
                    <div className="tag tag-yellow">Transaction</div>
                    <div className="inline text-ens-light-text-secondary dark:text-ens-dark-text-secondary">
                        Register the name.
                    </div>
                </div>
                <div className="break-all rounded-lg border border-ens-light-border p-2 dark:border-ens-dark-border">
                    <span className="text-ens-light-blue-primary">
                        ETHRegistrarController
                    </span>
                    .register(
                    <span className="text-ens-light-pink-primary">
                        "{name}"
                    </span>
                    ,{' '}
                    <span className="text-ens-light-purple-primary">
                        {owner}
                    </span>
                    ,
                    <span className="text-ens-light-orange-primary">
                        {duration}
                    </span>
                    ,
                    <span className="text-ens-light-pink-primary">
                        {secret}
                    </span>
                    ,
                    <span className="text-ens-light-indigo-primary">
                        {resolver}
                    </span>
                    , [], false, 0 )
                </div>
                <div className="flex w-full items-center justify-end gap-4">
                    <div>xxx gas</div>
                    <div>{rentPriceFormatted} eth</div>
                    <Button
                        onClick={() => {
                            register();
                        }}
                        variant="primary"
                    >
                        Register
                    </Button>
                </div>
                {!isReady && (
                    <div className="flex items-center gap-1 rounded-lg border-ens-light-red-primary bg-ens-light-red-surface px-3 py-2 text-ens-light-red-primary dark:border-ens-dark-red-primary dark:bg-ens-dark-red-surface">
                        <FiX />
                        Not Ready
                    </div>
                )}
                {isError && (
                    <div className="flex items-center gap-1 rounded-lg border-ens-light-red-primary bg-ens-light-red-surface px-3 py-2 text-ens-light-red-primary dark:border-ens-dark-red-primary dark:bg-ens-dark-red-surface">
                        <FiX />
                        Problem
                    </div>
                )}
            </div>
        </div>
    );
};
