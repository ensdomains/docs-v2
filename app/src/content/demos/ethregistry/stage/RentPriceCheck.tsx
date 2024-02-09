import { FC, useEffect } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

import { EthCall } from '../../call/EthCall';
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
            <EthCall
                description="Get the price of the name."
                call={
                    <div className="">
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
                }
            >
                <div>
                    {rentPrice ? (
                        <div className="border-ens-light-green-primary bg-ens-light-green-surface text-ens-light-green-primary dark:border-ens-dark-green-primary dark:bg-ens-dark-green-surface flex items-center gap-1 rounded-lg px-3 py-2">
                            <FiCheck />
                            Rent Price: (Base:{' '}
                            {rentPrice?.base.toLocaleString()}, Premium:{' '}
                            {rentPrice?.premium.toLocaleString()})
                        </div>
                    ) : (
                        <div className="border-ens-light-red-primary bg-ens-light-red-surface text-ens-light-red-primary dark:border-ens-dark-red-primary dark:bg-ens-dark-red-surface flex items-center gap-1 rounded-lg px-3 py-2">
                            <FiX />
                            Problem
                        </div>
                    )}
                </div>
            </EthCall>
        </div>
    );
};
