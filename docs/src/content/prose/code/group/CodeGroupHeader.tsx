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
        <div className="border-ens-light-border dark:border-ens-dark-border bg-ens-light-grey-surface dark:bg-ens-dark-grey-surface relative flex min-h-[calc(theme(spacing.12)+1px)] justify-between gap-x-4 border-b px-4">
            {title && (
                <div className="text-ens-light-text-primary dark:text-ens-dark-text-primary pt-3 text-xs font-semibold dark:text-white">
                    {title}
                </div>
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
