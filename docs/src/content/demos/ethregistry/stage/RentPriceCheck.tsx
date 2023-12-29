import { FC, useEffect } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

import { useRentPrice } from '../hooks/useRentPrice';

export const RentPriceCheck: FC<{
    name: string;
    duration: number;
    setRentPrice?: (_price: bigint | null) => void;
}> = ({ name, duration, setRentPrice }) => {
    const { rentPrice, isLoadingRentPrice } = useRentPrice(name, duration);

    useEffect(() => {
        if (isLoadingRentPrice || !rentPrice) {
            // eslint-disable-next-line unicorn/no-null
            setRentPrice?.(null);
        } else {
            setRentPrice?.((rentPrice?.base + rentPrice?.premium) as bigint);
        }
    }, [isLoadingRentPrice, rentPrice]);

    return (
        <div>
            <div className="border-ens-light-border dark:border-ens-dark-border space-y-2 rounded-lg border p-4">
                <div className="space-x-2">
                    <div className="tag tag-blue">ETH Call</div>
                    <div className="text-ens-light-text-secondary dark:text-ens-dark-text-secondary inline">
                        Get the price of the name.
                    </div>
                </div>
                <div className="border-ens-light-border dark:border-ens-dark-border break-all rounded-lg border p-2">
                    <span className="text-ens-light-blue-primary">
                        ETHRegistrarController
                    </span>
                    .rentPrice(
                    <span className="text-ens-light-pink-primary">
                        "{name}"
                    </span>
                    ,{' '}
                    <span className="text-ens-light-orange-primary">
                        {duration}
                    </span>
                    )
                </div>
                {isLoadingRentPrice ? (
                    <div className="text-ens-light-blue-primary border-ens-light-blue-primary dark:border-ens-dark-blue-primary bg-ens-light-blue-surface dark:bg-ens-dark-blue-surface flex items-center gap-1 rounded-lg px-3 py-2">
                        Loading...
                    </div>
                ) : (
                    <div>
                        {rentPrice ? (
                            <div className="text-ens-light-green-primary border-ens-light-green-primary dark:border-ens-dark-green-primary bg-ens-light-green-surface dark:bg-ens-dark-green-surface flex items-center gap-1 rounded-lg px-3 py-2">
                                <FiCheck />
                                Rent Price: (Base:{' '}
                                {rentPrice?.base.toLocaleString()}, Premium:{' '}
                                {rentPrice?.premium.toLocaleString()})
                            </div>
                        ) : (
                            <div className="text-ens-light-red-primary border-ens-light-red-primary dark:border-ens-dark-red-primary bg-ens-light-red-surface dark:bg-ens-dark-red-surface flex items-center gap-1 rounded-lg px-3 py-2">
                                <FiX />
                                Problem
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
