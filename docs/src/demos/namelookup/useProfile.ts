import useSWR from 'swr';

import { swrFetchEnstateProfile } from './fetch';

export type UseProfileParameters = {
    /**
     * The name of the profile to fetch.
     * @example 'luc.eth'
     */
    name: string;
    /**
     * URL of the enstate instance to use.
     * WARNING, the default instance is provided as is, please use it respectfully.
     * @default https://enstate.rs
     */
    instance?: string;
};

export const useProfile = ({ name, instance }: UseProfileParameters) => {
    const { data, error, isLoading, isValidating, mutate } = useSWR(
        ['enstate', name],
        swrFetchEnstateProfile(instance)
    );

    return {
        data,
        error,
        isLoading,
        isValidating,
        mutate,
    };
};
