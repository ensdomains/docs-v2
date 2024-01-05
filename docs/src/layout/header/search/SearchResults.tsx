'use client';
import Link from 'next/link';
import { FC, useEffect } from 'react';

import { SearchResult } from './types/result';

export const SearchResults: FC<{
    data: SearchResult;
    select: any;
    setSelect: any;
}> = ({ data, select, setSelect }) => {
    useEffect(() => {
        const thateventlistener = (event) => {
            switch (event.key) {
                case 'ArrowDown': {
                    event.preventDefault();
                    setSelect((select) => {
                        return Math.min(select + 1, data.hits.length - 1);
                    });

                    break;
                }
                case 'ArrowUp': {
                    event.preventDefault();
                    setSelect((select) => {
                        return Math.max(select - 1, -1);
                    });

                    break;
                }
                case 'Enter': {
                    break;
                }
                default: {
                    setSelect(-1);
                }
            }
        };

        document.addEventListener('keydown', thateventlistener);

        return () => {
            document.removeEventListener('keydown', thateventlistener);
        };
    }, []);

    useEffect(() => {
        if (select !== -1) {
            const element = document.querySelector(
                '#search-result-link-' + select
            );

            if (element instanceof HTMLElement) {
                element.focus();
            }
        } else {
            const element = document.querySelector('#search-input');

            if (element instanceof HTMLElement) {
                element.focus();
            }
        }
    }, [select]);

    return (
        <>
            <div className="w-full bg-neutral-50 pt-4">
                {data.hits.length === 0 && (
                    <div className="flex w-full flex-col items-center bg-neutral-50 py-8 text-center">
                        <div className="text-4xl">🤷‍♀️</div>
                        <div className="">No results found</div>
                        <div className="text-sm">Try a different search</div>
                    </div>
                )}
                <ul className="bg-neutral-50 py-2">
                    {data.hits.map((hit, index) => (
                        <li
                            className="hlem outline-0 focus-within:bg-neutral-100"
                            id={'search-result-' + index}
                            key={hit.slug}
                        >
                            <Link
                                href={'/' + hit.slug}
                                id={'search-result-link-' + index}
                                className="z-10 flex w-full px-4 py-1"
                            >
                                <span className="grow overflow-hidden">
                                    <span className="w-full truncate font-bold">
                                        {hit.emoji || '✨'}&nbsp;&nbsp;
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: hit._formatted.title,
                                            }}
                                        />
                                    </span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                hit._formatted.content ??
                                                hit._formatted.description,
                                        }}
                                        className="block h-[2em] w-full truncate pl-8 text-[#3f3f46]"
                                    />
                                </span>
                                <span className="flex gap-2">
                                    {hit.slug.startsWith('dao') && (
                                        <span className="h-fit rounded-md bg-ens-dao-400 px-2 py-0.5 text-xs font-bold text-white">
                                            DAO
                                        </span>
                                    )}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex w-full justify-between rounded-b-xl border-t bg-neutral-50 px-4 py-1 text-2xs text-neutral-400">
                <div>{data.estimatedTotalHits} hits for search</div>
                <div>{data.processingTimeMs}ms</div>
            </div>
        </>
    );
};
