'use client';

import { FC, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import {
    FaClock,
    FaDiscord,
    FaGithub,
    FaGlobe,
    FaTelegram,
    FaTwitter,
} from 'react-icons/fa';
import { useDebounce } from 'use-debounce';

import { RecordType } from './profile';
import { useProfile } from './useProfile';

const multicoinIcons = {
    btc: '/icons/multicoin/bitcoin.svg',
    eth: '/icons/multicoin/ethereum.svg',
} as const;

const recordIcons = {
    'com.discord': <FaDiscord />,
    'com.github': <FaGithub />,
    'com.twitter': <FaTwitter />,
    'org.telegram': <FaTelegram />,
    url: <FaGlobe />,
    timezone: <FaClock />,
} as const;

const Records: FC<{ records?: Record<RecordType, string> }> = ({ records }) => {
    if (!records) return <></>;

    if (Object.keys(records).length === 0) return <></>;

    return (
        <div
            className="grid w-full gap-x-3"
            style={{ gridTemplateColumns: 'auto 1fr' }}
        >
            {Object.keys(records)
                .sort((a, b) => b.length - a.length)
                .map((record) => (
                    <>
                        <div>
                            {recordIcons[record] ? (
                                <div className="flex items-center gap-0.5">
                                    <div className="flex h-4 w-4 items-center justify-center">
                                        {typeof recordIcons[record] ===
                                        'string' ? (
                                            <img
                                                src={recordIcons[record]}
                                                alt={record}
                                                className="aspect-square w-full rounded-full"
                                            />
                                        ) : (
                                            recordIcons[record]
                                        )}
                                    </div>
                                    <div className="font-bold leading-none">
                                        {record}
                                    </div>
                                </div>
                            ) : (
                                <div className="font-bold leading-none">
                                    {record}
                                </div>
                            )}
                        </div>
                        <div className="truncate leading-none">
                            {records[record]}
                        </div>
                    </>
                ))}
        </div>
    );
};

const Chains: FC<{ chains?: Record<string, string> }> = ({ chains }) => {
    if (!chains) return <></>;

    if (Object.keys(chains).length === 0) return <></>;

    return (
        <div
            className="grid w-full gap-x-3"
            style={{ gridTemplateColumns: 'auto 1fr' }}
        >
            {Object.keys(chains)
                .sort((a, b) => b.length - a.length)
                .map((chain) => (
                    <>
                        <div>
                            {multicoinIcons[chain] ? (
                                <div className="flex items-center gap-0.5">
                                    <div className="flex h-4 w-4 items-center justify-center">
                                        <img
                                            src={multicoinIcons[chain]}
                                            alt={chain}
                                            className="aspect-square w-full rounded-full"
                                        />
                                    </div>
                                    <div className="font-bold leading-none">
                                        {chain}
                                    </div>
                                </div>
                            ) : (
                                <div className="font-bold leading-none">
                                    {chain}
                                </div>
                            )}
                        </div>
                        <div className="truncate leading-none">
                            {chains[chain]}
                        </div>
                    </>
                ))}
        </div>
    );
};

export const NameLookupDemo: FC = () => {
    const [temporaryName, setTemporaryName] = useState('luc.eth');
    const [name] = useDebounce(temporaryName, 120);

    const { data, isLoading, error } = useProfile({ name });

    return (
        <div className="mx-auto max-w-xs">
            <div>Find user</div>
            <input
                className="w-full rounded-md border pl-2"
                placeholder="luc.eth"
                onChange={(event) => setTemporaryName(event.target.value)}
                value={temporaryName}
            />
            <div className="mt-2 flex h-fit flex-col gap-1.5 rounded-lg border p-4">
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
                                    <div className="bg-ens-100 h-8 w-8 overflow-hidden rounded-full">
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
                                                `${data.address.slice(
                                                    0,
                                                    5
                                                )}...${data.address.slice(-4)}`}
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
