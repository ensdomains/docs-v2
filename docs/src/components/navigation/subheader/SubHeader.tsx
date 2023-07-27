'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

import { ccx } from '@/lib/cx';
import { SubHeaders } from '@/lib/headers';

export const SubHeader = () => {
    const pathname = usePathname();

    const isDao = pathname.match(/\/dao(\/.*)?/);
    const [_, subHeaders] = SubHeaders.find(([match, _config]) =>
        pathname.match(match)
    );

    const activePredicate = subHeaders.find(([_label, url, urlMatch]) =>
        pathname.match(urlMatch || url)
    );

    const [isMobileSubOpen, setMobileSubOpen] = useState(false);

    const daoStyle = isDao ? 'bg-ens-dao-400' : 'bg-ens-500';

    return (
        <>
            <div className="absolute inset-x-0 top-full md:hidden">
                <button
                    className={ccx(
                        'w-full flex text-white items-center justify-between',
                        daoStyle
                    )}
                    type="button"
                    aria-expanded="false"
                    id="sub-header-menu-button"
                    onClick={() => {
                        setMobileSubOpen(!isMobileSubOpen);
                    }}
                >
                    <div
                        className={ccx(
                            'w-full flex text-white pl-3 pr-4 items-center justify-between',
                            isMobileSubOpen && 'bg-gray-300/10'
                        )}
                    >
                        {activePredicate && (
                            <div
                                className={ccx(
                                    'flex gap-1 items-center font-bold py-1 text-xs'
                                )}
                            >
                                <FiChevronRight />
                                {activePredicate[0]}
                            </div>
                        )}
                        <FiChevronDown />
                    </div>
                </button>
                {isMobileSubOpen && (
                    <ul
                        className={ccx(
                            'w-full text-white grid grid-flow-row',
                            daoStyle
                        )}
                    >
                        {subHeaders
                            .filter((a) => a != activePredicate)
                            .map(([label, url, urlMatch]) => (
                                <Link
                                    href={url}
                                    className={ccx(
                                        'font-bold py-1 px-7 text-xs hover:bg-white/10',
                                        pathname.match(urlMatch || url) &&
                                            'bg-black/10'
                                    )}
                                    key={url}
                                    onClick={() => {
                                        setMobileSubOpen(false);
                                    }}
                                >
                                    {label}
                                </Link>
                            ))}
                    </ul>
                )}
            </div>
            <div
                className={ccx(
                    'hidden md:flex absolute top-full left-0 right-0 text-white px-4',
                    daoStyle
                )}
            >
                {subHeaders.map(([label, url, urlMatch]) => (
                    <Link
                        href={url}
                        className={ccx(
                            'font-bold py-1 px-3 text-xs hover:bg-white/10',
                            pathname.match(urlMatch || url) && 'bg-black/10'
                        )}
                        key={url}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </>
    );
};
