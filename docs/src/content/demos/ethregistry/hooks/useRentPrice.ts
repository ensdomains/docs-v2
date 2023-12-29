import { useContractRead } from 'wagmi';

import { ETHRegistrarABI } from '../ETHRegistryABI';

export const useRentPrice = (name: string, duration: number) => {
    const { data, isLoading } = useContractRead({
        address: '0xCc5e7dB10E65EED1BBD105359e7268aa660f6734' as `0x${string}`,
        abi: ETHRegistrarABI,
        functionName: 'rentPrice',
        args: [name, duration],
        enabled: !!name && name.length >= 3 && !!duration && duration > 0,
        chainId: 5,
    });

    return {
        rentPrice: data as { base: bigint; premium: bigint },
        isLoadingRentPrice: isLoading,
    };
};
