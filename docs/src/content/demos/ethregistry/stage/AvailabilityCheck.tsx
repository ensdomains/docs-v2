import { FC, useEffect } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

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
            <div className="border-ens-light-border dark:border-ens-dark-border space-y-2 rounded-lg border p-4">
                <div className="space-x-2">
                    <div className="tag tag-blue">ETH Call</div>
                    <div className="text-ens-light-text-secondary dark:text-ens-dark-text-secondary inline">
                        This checks if the name is available.
                    </div>
                </div>
                <div className="border-ens-light-border dark:border-ens-dark-border break-all rounded-lg border p-2">
                    <span className="text-ens-light-blue-primary">
                        ETHRegistrarController
                    </span>
                    .available(
                    <span className="text-ens-light-pink-primary">
                        "{name}"
                    </span>
                    )
                </div>
                {isLoadingAvailability ? (
                    <div className="text-ens-light-blue-primary border-ens-light-blue-primary dark:border-ens-dark-blue-primary bg-ens-light-blue-surface dark:bg-ens-dark-blue-surface flex items-center gap-1 rounded-lg px-3 py-2">
                        Loading...
                    </div>
                ) : (
                    <div>
                        {isAvailable ? (
                            <div className="text-ens-light-green-primary border-ens-light-green-primary dark:border-ens-dark-green-primary bg-ens-light-green-surface dark:bg-ens-dark-green-surface flex items-center gap-1 rounded-lg px-3 py-2">
                                <FiCheck />
                                Name is Available
                            </div>
                        ) : (
                            <div className="text-ens-light-red-primary border-ens-light-red-primary dark:border-ens-dark-red-primary bg-ens-light-red-surface dark:bg-ens-dark-red-surface flex items-center gap-1 rounded-lg px-3 py-2">
                                <FiX />
                                Name Taken
                            </div>
                        )}
                    </div>
                )}

                {/* <div className="helper-green">
                    <FiCheck />
                    Name is Available
                </div> */}
            </div>
        </div>
    );
};
