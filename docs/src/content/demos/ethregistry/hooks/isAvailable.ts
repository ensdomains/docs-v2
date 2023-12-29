import { useContractRead } from 'wagmi';

import { ETHRegistrarABI } from '../ETHRegistryABI';

export const useIsAvailable = (name: string) => {
    const { data, isLoading } = useContractRead({
        address: '0xCc5e7dB10E65EED1BBD105359e7268aa660f6734' as `0x${string}`,
        abi: ETHRegistrarABI,
        functionName: 'available',
        args: [name],
        enabled: !!name && name.length >= 3,
    });

    return {
        isAvailable: data as boolean,
        isLoadingAvailability: isLoading,
    };
};
