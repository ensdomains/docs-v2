import { FC, useEffect } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

import { EthCall } from '../../call/EthCall';
import { useIsAvailable } from '../hooks/isAvailable';

export const AvailabilityCheck: FC<{
    name: string;
    setAvailable?: (_available: boolean) => void;
}> = ({ name, setAvailable }) => {
    const { isAvailable, isLoadingAvailability } = useIsAvailable(name);

    useEffect(() => {
        setAvailable(isAvailable);
    }, [isAvailable]);

    return (
        <div>
            <EthCall
                description="This checks if the name is available."
                call={
                    <div className="">
                        <span className="text-ens-light-blue-primary">
                            ETHRegistrarController
                        </span>
                        .available(
                        <span className="text-ens-light-pink-primary">
                            "{name}"
                        </span>
                        )
                    </div>
                }
            >
                {isLoadingAvailability ? (
                    <div className="border-ens-light-blue-primary bg-ens-light-blue-surface text-ens-light-blue-primary dark:border-ens-dark-blue-primary dark:bg-ens-dark-blue-surface flex items-center gap-1 rounded-lg px-3 py-2">
                        Loading...
                    </div>
                ) : (
                    <div>
                        {isAvailable ? (
                            <div className="border-ens-light-green-primary bg-ens-light-green-surface text-ens-light-green-primary dark:border-ens-dark-green-primary dark:bg-ens-dark-green-surface flex items-center gap-1 rounded-lg px-3 py-2">
                                <FiCheck />
                                Name is Available
                            </div>
                        ) : (
                            <div className="border-ens-light-red-primary bg-ens-light-red-surface text-ens-light-red-primary dark:border-ens-dark-red-primary dark:bg-ens-dark-red-surface flex items-center gap-1 rounded-lg px-3 py-2">
                                <FiX />
                                Name Taken
                            </div>
                        )}
                    </div>
                )}
            </EthCall>
        </div>
    );
};
