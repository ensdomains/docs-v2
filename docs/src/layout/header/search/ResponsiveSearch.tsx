'use client';

import { MagnifyingGlassSVG } from '@ensdomains/thorin';
import clsx from 'clsx';
import { useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import useSWR from 'swr';

import { searchFetcher } from './lib/fetcher';
import { SearchResults } from './SearchResults';

export const ResponsiveSearch = () => {
    const [search, setSearch] = useState('');
    const { data, error, isLoading, isValidating } = useSWR(
        { search },
        searchFetcher,
        {
            keepPreviousData: true,
        }
    );
    const [select, setSelect] = useState(-1);
    const showSearch = search.length > 0 && data;

    return (
        <div
            id="searchbar"
            className="bg-ens-light-background-primary dark:bg-ens-dark-background-primary w-full rounded-2xl text-[#18181b] dark:text-white"
        >
            <div className="space-y-3 p-4">
                <div className="relative z-10">
                    <input
                        type="text"
                        onClick={() => {
                            setSelect(-1);
                        }}
                        className="focus:outline-ens-light-blue-primary outline-ens-dark-blue-primary border-ens-light-border dark:border-ens-dark-border w-full rounded-xl border py-2 pl-10 text-xl"
                        placeholder="Search Content..."
                        // eslint-disable-next-line jsx-a11y/no-autofocus
                        autoFocus={true}
                        id="search-input"
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                const element = document.querySelector(
                                    '#search-result-link-0'
                                );

                                if (element && element instanceof HTMLElement) {
                                    element.focus();
                                    element.click();
                                }
                            }
                        }}
                    />
                    <div className="absolute inset-y-0 left-3 flex h-full items-center text-neutral-300">
                        <MagnifyingGlassSVG />
                    </div>
                    <div className="absolute inset-y-0 right-3 flex h-full items-center text-neutral-300">
                        {isLoading && <FiLoader />}
                    </div>
                </div>
                <div className="flex gap-2">
                    {[
                        'All',
                        'Intro',
                        'Using ENS',
                        'Smart Contracts',
                        'Governance',
                        'Improvement Proposals',
                    ].map((item, _index) => (
                        <button
                            className={clsx(
                                'tag',
                                _index == 0 ? 'tag-blue' : 'tag-grey'
                            )}
                            key={_index}
                            onClick={() => {
                                // TODO: Implement filtering by category
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-full">
                <div className="w-full">
                    {showSearch && (
                        <SearchResults
                            data={data}
                            select={select}
                            setSelect={setSelect}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
