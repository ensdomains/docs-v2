import clsx from 'clsx';
import { FC, PropsWithChildren, ReactNode } from 'react';

type AllProperties = {
    call: ReactNode;
    description?: string;
};

type EthCallProperties = {
    type?: 'call';
};

type EthTransactionProperties = {
    type?: 'transaction';
    gas: string;
};

export const EthCall: FC<
    PropsWithChildren<
        AllProperties & (EthCallProperties | EthTransactionProperties)
    >
> = ({ type = 'call', call, children, description }) => {
    const is_transaction = type == 'transaction';

    return (
        <div className="pt-2">
            <div className="border-ens-light-border dark:border-ens-dark-border space-y-2 rounded-lg border p-4">
                <div className="relative">
                    <div
                        className={clsx(
                            'bg-ens-light-background-primary dark:bg-ens-dark-background-primary absolute -top-4 w-fit -translate-y-1/2 px-2 font-bold',
                            is_transaction
                                ? 'text-ens-light-orange-primary dark:text-ens-dark-orange-primary'
                                : 'text-ens-light-blue-primary dark:text-ens-dark-blue-primary'
                        )}
                    >
                        {is_transaction ? 'Transaction' : 'ETH Call'}
                    </div>
                </div>
                <div className="text-ens-light-text-secondary dark:text-ens-dark-text-secondary inline">
                    {description}
                </div>
                <div className="border-ens-light-border dark:border-ens-dark-border break-all rounded-lg border p-2">
                    {call}
                </div>
                {children}
            </div>
        </div>
    );
};
