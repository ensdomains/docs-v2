import { PresetConfig, presets } from '@/lib/presets';

type IconKey = 'h' | 'b';

export type CodeConfig = {
    icon: string;
    language: string;
    tags: string[];
};

const aliases: Record<string, string> = {
    ts: 'typescript',
    tsx: 'react',
    jsx: 'react',
    rs: 'rust',
};

export const naiveGetVariant = (x: {
    variant: string;
    language: string;
    icon: IconKey & (string & {});
}): string => {
    return aliases[x.variant] || x.variant || aliases[x.language] || x.language;
};

export const getCodeData = (x: {
    icon?: IconKey & (string & {});
    language?: string;
    variant: string;
}): PresetConfig => {
    const { icon: _icon, language, variant } = x;

    const codeConfig =
        presets[variant] ||
        presets[aliases[variant]] ||
        presets[language] ||
        presets[aliases[language]];

    if (!codeConfig)
        console.error('No code config found for variant: ' + variant);

    return (
        codeConfig ?? {
            icon: 'unknown',
            language: 'unknown',
            tags: [],
        }
    );
};
