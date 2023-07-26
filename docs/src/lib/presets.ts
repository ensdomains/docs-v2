import create from 'zustand';

import { getCodeData } from '@/components/mdx/code/getCodeData';

export type PresetConfig = {
    icon: string;
    name: string;
    tags: string[];
    language: string;
};

export const availablePresets: PresetKey[] = [
    'connectkit',
    'rainbowkit',
    'wagmi',
    'react',
    'ethers',
    'viem',
    // 'typescript',
    // 'javascript',
    'rust',
    'go',
];

export const presets = {
    typescript: {
        icon: '/icons/typescript.png',
        name: 'Typescript',
        language: 'typescript',
        tags: ['javascript'],
    },
    javascript: {
        icon: '/icons/javascript.png',
        name: 'Javascript',
        language: 'javascript',
        tags: [],
    },
    ethers: {
        icon: '/icons/ethers.svg',
        language: 'typescript',
        name: 'Ethers',
        tags: ['typescript', 'javascript'],
    },
    viem: {
        icon: '/icons/viem.svg',
        language: 'typescript',
        name: 'Viem',
        tags: ['typescript', 'javascript'],
    },
    rust: {
        icon: '/icons/rust.svg',
        name: 'Rust',
        language: 'rust',
        tags: [],
    },
    go: {
        icon: '/icons/go.svg',
        name: 'Go',
        language: 'go',
        tags: [],
    },
    react: {
        icon: '/icons/react.svg',
        name: 'React',
        language: 'typescript',
        tags: ['typescript'],
    },
    wagmi: {
        icon: '/icons/wagmi.svg',
        name: 'Wagmi',
        language: 'typescript',
        tags: ['react', 'viem', 'typescript', 'javascript'],
    },
    rainbowkit: {
        icon: '/icons/rainbow.svg',
        name: 'Rainbowkit',
        language: 'typescript',
        tags: ['wagmi', 'react', 'viem', 'typescript', 'javascript'],
    },
    connectkit: {
        icon: '/icons/family.svg',
        name: 'Connectkit',
        language: 'typescript',
        tags: ['wagmi', 'react', 'viem', 'typescript', 'javascript'],
    },
} satisfies Record<string, PresetConfig>;

export type PresetKey = keyof typeof presets;

export const useActivePreset = create<{
    activePreset: string;
    setActivePreset: (preset: string) => void;
}>((set) => ({
    activePreset: 'connectkit',
    setActivePreset: (preset) =>
        set((state) => ({
            activePreset: preset,
        })),
}));

export const useActivePresetConfig = () => {
    const { activePreset } = useActivePreset();

    return {
        activePreset,
        config: getCodeData({ variant: activePreset }) as PresetConfig,
    };
};
