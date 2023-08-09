import { Children, cloneElement, FC, PropsWithChildren } from 'react';

import { CodePanel } from './CodePanel';
import { getLanguage } from './getlanguage';
import { CodeGroupHeader } from './Header';
import { LanguageSettings } from './languagetypes';

export type CodeGroupProperties = {
    title?: string;
    isChild?: boolean;
};

export type CodeSnippetProperties = {
    language: string;
    preset?: string;
    config?: LanguageSettings;
};

export const CodeGroup: FC<PropsWithChildren<CodeGroupProperties>> = ({
    children,
    title,
    ...properties
}) => {
    const identifier = Math.round(Math.random() * 1000);

    const codeSnippets = Children.map(children, (child) => {
        //
        const preset = child['props'].preset ?? child['props'].variant;

        return {
            element: child,
            data: {
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
            />
            {hasTabs ? (
                <div className="">
                    {codeSnippets.map((child) => {
                        return cloneElement(child.element as any, {
                            isChild: true,
                            data: child.data,
                            identifier,
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
