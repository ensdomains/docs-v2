'use client';

import { formatAddress } from '@ens-tools/format';
import { FC, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { useDebounce } from 'use-debounce';

import { useProfile } from './logic/useProfile';
import { Chains } from './parts/chains';
import { Records } from './parts/records';

export const NameLookupDemo: FC = () => {
    const [temporaryName, setTemporaryName] = useState('luc.eth');
    const [name] = useDebounce(temporaryName, 120);

    const { data, isLoading, error } = useProfile({ name });

    return (
        <div className="text-ens-light-text-primary dark:text-ens-dark-text-primary mx-auto flex gap-2 p-4">
            <div className="max-w-xs">
                <div>Find user</div>
                <input
                    className="border-ens-light-border dark:border-ens-dark-border w-full rounded-md border pl-2"
                    placeholder="luc.eth"
                    onChange={(event) => setTemporaryName(event.target.value)}
                    value={temporaryName}
                />
            </div>
            <div className="border-ens-light-border dark:border-ens-dark-border mt-2 flex h-fit flex-col gap-1.5 rounded-lg border p-4">
                {isLoading && <BiLoaderAlt className="animate-spin" />}
                {!isLoading && (
                    <>
                        {error && <div>Error {JSON.stringify(error)}</div>}
                        {!data && (
                            <div>
                                <div>Unknown Name 🤷‍♀️</div>
                                <div>
                                    Try <b>luc.eth</b>
                                </div>
                            </div>
                        )}
                        {data && (
                            <>
                                <div className="flex gap-2">
                                    <div className="bg-ens-light-blue-100 h-8 w-8 overflow-hidden rounded-full">
                                        {data?.avatar && (
                                            <img
                                                src={data.avatar}
                                                alt="Avatar"
                                                className="aspect-square w-full rounded-full"
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="font-bold leading-none">
                                            {data.name}
                                        </div>

                                        <div className="text-xs leading-none">
                                            {data?.address &&
                                                formatAddress(data.address)}
                                        </div>
                                    </div>
                                </div>
                                <Records records={data?.records} />
                                <Chains chains={data?.chains} />
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
