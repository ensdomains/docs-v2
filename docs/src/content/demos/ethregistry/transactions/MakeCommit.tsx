import { FC } from 'react';
import { FiX } from 'react-icons/fi';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';

import { Button } from '@/components/Button';

import { ETHRegistrarABI } from '../ETHRegistryABI';

export const MakeCommit: FC<{ commithash: string }> = ({ commithash }) => {
    const {
        data: commitCallResult,
        config,
        isError,
    } = usePrepareContractWrite({
        abi: ETHRegistrarABI,
        address: '0xcc5e7db10e65eed1bbd105359e7268aa660f6734',
        functionName: 'commit',
        args: [commithash],
        enabled: !!commithash,
    });

    const { write } = useContractWrite(config);

    console.log(commitCallResult);

    return (
        <div>
            <div className="border-ens-light-border dark:border-ens-dark-border space-y-2 rounded-lg border p-4">
                <div className="space-x-2">
                    <div className="tag tag-yellow">Transaction</div>
                    <div className="text-ens-light-text-secondary dark:text-ens-dark-text-secondary inline">
                        This checks if the name is available.
                    </div>
                </div>
                <div className="border-ens-light-border dark:border-ens-dark-border break-all rounded-lg border p-2">
                    <span className="text-ens-light-blue-primary">
                        ETHRegistrarController
                    </span>
                    .commit(
                    <span className="text-ens-light-pink-primary">
                        "{commithash}"
                    </span>
                    )
                </div>
                <div className="flex w-full items-center justify-end gap-4">
                    <div>xxx gas</div>
                    <Button
                        onClick={() => {
                            write();
                        }}
                        variant="primary"
                    >
                        Commit
                    </Button>
                </div>
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
