import { FC, useEffect } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

import { useCommitment } from '../hooks/useCommitment';

export const CommitmentCheck: FC<{
    name: string;
    duration: number;
    owner: string;
    secret: string;
    resolver: string;
    setCommithash?: (_commithash: string) => void;
}> = ({ name, duration, owner, secret, resolver, setCommithash }) => {
    const { commithash, isLoadingCommithash } = useCommitment(
        name,
        owner,
        duration,
        secret,
        resolver
    );

    const isReady =
        name && duration && owner && secret && resolver && !isLoadingCommithash;

    useEffect(() => {
        if (isReady) {
            setCommithash(commithash);
        } else {
            setCommithash('');
        }
    }, [commithash, isReady, isLoadingCommithash]);

    return (
        <div>
            <div className="border-ens-light-border dark:border-ens-dark-border space-y-2 rounded-lg border p-4">
                <div className="space-x-2">
                    <div className="tag tag-blue">ETH Call</div>
                    <div className="text-ens-light-text-secondary dark:text-ens-dark-text-secondary inline">
                        This generates the commitment hash that we will then
                        commit to chain.{' '}
                    </div>
                </div>
                <div className="border-ens-light-border dark:border-ens-dark-border break-all rounded-lg border p-2">
                    <span className="text-ens-light-blue-primary">
                        ETHRegistrarController
                    </span>
                    .makeCommitment(
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
                {isLoadingCommithash ? (
                    <div className="text-ens-light-blue-primary border-ens-light-blue-primary dark:border-ens-dark-blue-primary bg-ens-light-blue-surface dark:bg-ens-dark-blue-surface flex items-center gap-1 rounded-lg px-3 py-2">
                        Loading...
                    </div>
                ) : (
                    <div>
                        {commithash ? (
                            <div className="text-ens-light-green-primary border-ens-light-green-primary dark:border-ens-dark-green-primary bg-ens-light-green-surface dark:bg-ens-dark-green-surface flex items-center gap-1 rounded-lg px-3 py-2">
                                <FiCheck />
                                CommitHash: {commithash}
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
