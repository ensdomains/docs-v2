import { useContractRead } from 'wagmi';

import { ETHRegistrarABI } from '../ETHRegistryABI';

export const useCommitment = (
    name: string,
    owner: string,
    duration: number,
    secret: string,
    resolver: string
) => {
    const { data, isLoading } = useContractRead({
        address: '0xCc5e7dB10E65EED1BBD105359e7268aa660f6734' as `0x${string}`,
        abi: ETHRegistrarABI,
        functionName: 'makeCommitment',
        args: [name, owner, duration, secret, resolver, [], false, 0],
        enabled:
            !!name &&
            name.length >= 3 &&
            !!owner &&
            !!duration &&
            duration > 0 &&
            !!secret &&
            !!resolver,
    });

    return {
        commithash: data as string,
        isLoadingCommithash: isLoading,
    };
};
