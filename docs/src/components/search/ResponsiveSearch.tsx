'use client';

import { MagnifyingGlassSVG } from '@ensdomains/thorin';
import Link from 'next/link';
import { useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import useSWR, { Fetcher } from 'swr';

type MatchesPosition = { start: number; length: number }[];

type SearchEntry = {
    slug: string;
    title: string;
    description: string;
    _formatted: {
        content: string;
        slug: string;
        title: string;
        description: string;
    };
    _matchesPosition: {
        content: MatchesPosition;
        slug: MatchesPosition;
        title: MatchesPosition;
        description: MatchesPosition;
    };
};

type SearchResult = {
    estimatedTotalHits: number;
    hits: SearchEntry[];
    limit: number;
    offset: number;
    processingTimeMs: number;
};

const fetcher: Fetcher<SearchResult, { search: string }> = async ({
    search,
}) => {
    // @ts-ignore
    const result = await fetch(
        'https://search.v3x.systems/indexes/ens-docs/search',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer c0d2602b5da01b4f1baacbc2a8391ddaa5ff2fe19727f8715900b882cc515661',
            } as any,
            body: JSON.stringify({
                q: search,
                limit: 5,
                showMatchesPosition: true,
                attributesToCrop: ['content'],
                attributesToRetrieve: [
                    'title',
                    'slug',
                    'description',
                    'authors',
                    'tags',
                ],
                cropLength: 10,
                attributesToHighlight: ['content', 'title'],
            }) as any,
        }
    );

    return result.json();
};

export const ResponsiveSearch = () => {
    const [search, setSearch] = useState('');
    const { data, error, isLoading, isValidating } = useSWR(
        { search },
        fetcher,
        {
            keepPreviousData: true,
        }
    );

    const showSearch = search.length > 0 && data;

    return (
        <div className="w-full text-[#18181b]">
            <div className="relative z-10 overflow-hidden rounded-xl border bg-white">
                <input
                    type="text"
                    className="w-full rounded-xl py-2 pl-10 text-xl"
                    placeholder="Search for anything..."
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus={true}
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                />
                <div className="absolute inset-y-0 left-3 flex h-full items-center text-neutral-300">
                    <MagnifyingGlassSVG />
                </div>
                <div className="absolute inset-y-0 right-3 flex h-full items-center text-neutral-300">
                    {isLoading && <FiLoader />}
                </div>
            </div>
            <div className="w-full -translate-y-4">
                <div className="w-full overflow-hidden rounded-b-xl">
                    {showSearch && (
                        <>
                            <div className="w-full bg-neutral-50 pt-4">
                                {data.hits.length === 0 && (
                                    <div className="flex w-full flex-col items-center bg-neutral-50 py-8 text-center">
                                        <div className="text-4xl">🤷‍♀️</div>
                                        <div className="">No results found</div>
                                        <div className="text-sm">
                                            Try a different search
                                        </div>
                                    </div>
                                )}
                                <ul className="bg-neutral-50 py-2">
                                    {data.hits.map((hit) => (
                                        <li className="hlem">
                                            <Link
                                                href={hit.slug}
                                                className="z-10 block w-full px-4 py-1"
                                            >
                                                <div className="truncate font-bold">
                                                    ✨&nbsp;&nbsp;
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: hit
                                                                ._formatted
                                                                .title,
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: hit._formatted
                                                            .description,
                                                    }}
                                                    className="h-[2em] truncate pl-8 text-[#3f3f46]"
                                                />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-2xs flex w-full justify-between rounded-b-xl border-t bg-neutral-50 px-2 py-1">
                                <div>
                                    {data.estimatedTotalHits} hits for search
                                </div>
                                <div>{data.processingTimeMs}ms</div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
