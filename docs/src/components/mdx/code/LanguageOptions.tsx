'use client';

import { FC, useCallback, useEffect, useState } from 'react';

import { CodeSnippetProperties } from './CodeGroup';
import { sortLanguagesByPreset } from './getlanguage';

const score = (a: number, b: number) => {
    if (a > b) return 1;

    if (b === a) return 0;

    if (a < b) return -1;
};

const rankDependency = (dependencies: string[], dependency: string) => {
    if (!dependency) return 0;

    if (!dependencies) return 0;

    const index = dependencies.indexOf(dependency);

    if (index != -1) return dependencies.length - index;

    return 0;
};

const EVENT = 'l-language';

class LLanguageEvent extends Event {
    constructor(language: string) {
        super(EVENT);
        this.language = language;
    }

    language: string;
}

export const LanguageOptions: FC<{
    snippets: CodeSnippetProperties[];
    identifier: string;
}> = ({ snippets, identifier }) => {
    // Get active language from localstorage
    const [activeLanguage, setActiveLanguage] = useState<string>();
    const setPreset = useCallback(
        (preferred_preset_key: string) => {
            // eslint-disable-next-line prefer-destructuring
            const rankedPresets = sortLanguagesByPreset(
                snippets,
                preferred_preset_key
            );

            console.log('Ranked Results', rankedPresets);

            const newPreset = rankedPresets[0];

            //
            const entries = document.querySelectorAll(
                '[data-code-group="' + identifier + '"]'
            );

            for (const entry of entries) {
                // @ts-ignore
                if (entry.dataset.codeVariant === newPreset.preset) {
                    entry.classList.remove('hidden');
                } else {
                    entry.classList.add('hidden');
                }
            }

            console.log('Changing preset to ' + newPreset.preset);
            setActiveLanguage(newPreset.preset);
        },
        [setActiveLanguage]
    );

    useEffect(() => {
        // when page first load
        console.log('loaded code segment ' + identifier);

        setPreset(localStorage.getItem(EVENT));

        const hook = (language: LLanguageEvent) => {
            setPreset(language.language);
        };

        // @ts-ignore
        document.addEventListener(EVENT, hook);

        return () => {
            // @ts-ignore
            document.removeEventListener(EVENT, hook);
        };
    }, []);

    if (!activeLanguage) return <></>;

    return (
        <div className="absolute left-auto right-2 top-2 w-fit text-right">
            <select
                onChange={(event) => {
                    console.log('changed to ' + event.target.value);
                    localStorage.setItem(EVENT, event.target.value);
                    document.dispatchEvent(
                        new LLanguageEvent(event.target.value)
                    );
                    // setPreset(event.target.value);
                }}
                value={activeLanguage}
            >
                {snippets.map((snippet) => {
                    return (
                        <option value={snippet.preset} key={snippet.preset}>
                            {snippet.config?.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
