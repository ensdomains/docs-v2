'use client';

import { FC, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useProfile } from './useProfile';

export const NameLookupDemo: FC = () => {
    const [temporaryName, setTemporaryName] = useState('luc.eth');
    const [name] = useDebounce(temporaryName, 120);

    const { data, isLoading, error } = useProfile({ name });

    return (
        <div className="mx-auto max-w-xs">
            <div>Find user</div>
            <input
                className="w-full rounded-md border pl-2 shadow-xl"
                placeholder="luc.eth"
                onChange={(event) => setTemporaryName(event.target.value)}
                value={temporaryName}
            />
            <div className="mt-2 flex h-fit items-center gap-1">
                <div className="bg-ens-100 h-8 w-8 overflow-hidden rounded-full">
                    {data?.avatar && (
                        <img
                            src={data.avatar}
                            alt="Avatar"
                            className="aspect-square w-full rounded-full"
                        />
                    )}
                </div>
                <span>
                    {data?.address &&
                        `${data.address.slice(0, 5)}...${data.address.slice(
                            -4
                        )}`}
                </span>
            </div>
        </div>
    );
};
