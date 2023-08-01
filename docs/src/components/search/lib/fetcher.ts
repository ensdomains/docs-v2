import { Fetcher } from 'swr';

import { SearchResult } from '../types/result';

export const searchFetcher: Fetcher<SearchResult, { search: string }> = async ({
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
                    'Bearer c8d13cd93144118c61d5cb355b4950e59ca4bd848f0220b39e807797b0af91b6',
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
                    'emoji',
                ],
                cropLength: 10,
                attributesToHighlight: ['content', 'title'],
            }) as any,
        }
    );

    return result.json();
};
