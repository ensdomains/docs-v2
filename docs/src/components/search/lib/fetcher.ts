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
