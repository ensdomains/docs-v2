type IconKey = 'h' | 'b';

export type CodeConfig = {
    icon: string;
    language: string;
    tags: string[];
};

const presets: Record<string, CodeConfig> = {
    typescript: {
        icon: '/icons/typescript.png',
        language: 'typescript',
        tags: ['ts', 'typescript', 'tsx', 'jsx'],
    },
    rust: {
        icon: '/icons/react.svg',
        language: 'rust',
        tags: ['rust', 'rs'],
    },
    react: {
        icon: '/icons/react.svg',
        language: 'typescript',
        tags: ['react'],
    },
};

const aliases: Record<string, string> = {
    ts: 'typescript',
    tsx: 'react',
    jsx: 'react',
    rs: 'rust',
};

export const getCodeData = ({
    icon,
    language,
    tag,
}: {
    icon?: IconKey & (string & {});
    language?: string;
    tag: string;
}): CodeConfig => {
    const codeConfig =
        presets[tag] ||
        presets[aliases[tag]] ||
        presets[language] ||
        presets[aliases[language]];

    return (
        codeConfig ?? {
            icon: 'unknown',
            language: 'unknown',
            tags: [],
        }
    );
};
