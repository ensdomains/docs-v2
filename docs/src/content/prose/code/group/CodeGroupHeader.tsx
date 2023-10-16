import { FC, ReactNode } from 'react';

import { CodeSnippetProperties } from '../snippet/CodeSnippet';
import { LanguageSwitcher } from './LanguageSwitcher';

export const CodeGroupHeader: FC<{
    snippets: {
        element: ReactNode;
        data: CodeSnippetProperties;
    }[];
    identifier: string;
    title: string;
    presets: string;
}> = ({ title, snippets, identifier, presets }) => {
    const hasTabs = snippets.length > 1;

    if (!title && !hasTabs) {
        return;
    }

    return (
        <div className="relative flex min-h-[calc(theme(spacing.12)+1px)] justify-between gap-x-4 border-b border-black/10 px-4 dark:border-zinc-800 dark:bg-zinc-800">
            {title && (
                <h3 className="pt-3 text-xs font-semibold text-black dark:text-white">
                    {title}
                </h3>
            )}
            {hasTabs && (
                <LanguageSwitcher
                    snippets={snippets.map((entry) => entry.data)}
                    identifier={identifier}
                    presets={presets}
                />
            )}
        </div>
    );
};
