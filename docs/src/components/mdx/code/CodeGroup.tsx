import { Children, cloneElement, FC, PropsWithChildren } from 'react';

import { CodePanel } from './CodePanel';
import { getLanguage } from './getlanguage';
import { CodeGroupHeader } from './Header';
import { LanguageSettings } from './languagetypes';

export type CodeGroupProperties = {
    title?: string;
    isChild?: boolean;
    // Key for what type of presets to use
    presets?: string;
};

export type CodeSnippetProperties = {
    language: string;
    title?: string;
    preset?: string;
    config?: LanguageSettings;
};

export const CodeGroup: FC<PropsWithChildren<CodeGroupProperties>> = ({
    children,
    title,
    presets = 'code',
    ...properties
}) => {
    const identifier = Math.round(Math.random() * 1000);

    const codeSnippets = Children.map(children, (child) => {
        //
        const preset =
            child['props'].preset ??
            child['props'].variant ??
            child['props'].title ??
            child['props'].language;

        return {
            element: child,
            data: {
                title: child['props'].title,
                language: child['props'].language,
                preset,
                config: getLanguage(preset || child['props'].language),
            } as CodeSnippetProperties,
        };
    });

    const hasTabs = Children.count(children) > 1;

    return (
        <div className="not-prose my-6 overflow-hidden rounded-lg bg-[--var(--shiki-color-background)] shadow-sm ring-1 ring-black/10 dark:shadow-md dark:ring-white/10">
            <CodeGroupHeader
                snippets={codeSnippets}
                title={title}
                identifier={identifier.toString()}
                presets={presets}
            />
            {hasTabs ? (
                <div className="">
                    {codeSnippets.map((child) => {
                        return cloneElement(child.element as any, {
                            isChild: true,
                            data: child.data,
                            identifier,
                            title: child.data.title,
                        });
                    })}
                </div>
            ) : (
                <CodePanel {...(properties as any)} identifier={identifier}>
                    {codeSnippets.map((v) => v.element)}
                </CodePanel>
            )}
        </div>
    );
};
