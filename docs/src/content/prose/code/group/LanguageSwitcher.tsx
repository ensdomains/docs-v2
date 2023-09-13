'use client';

import { FC, useCallback, useEffect, useState } from 'react';

import { sortLanguagesByPreset } from '../languageSorter';
import { CodeSnippetProperties } from './CodeGroup';

const EVENT = 'l-language-';

class LLanguageEvent extends Event {
    constructor(language: string, preset: string) {
        super(EVENT + preset);
        this.language = language;
    }

    language: string;
}

export const LanguageSwitcher: FC<{
    snippets: CodeSnippetProperties[];
    identifier: string;
    presets: string;
}> = ({ snippets, identifier, presets }) => {
    // Get active language from localstorage
    const [activeLanguage, setActiveLanguage] = useState<string>(
        snippets.at(0).preset
    );
    const setPreset = useCallback(
        (preferred_preset_key: string) => {
            // eslint-disable-next-line prefer-destructuring
            const rankedPresets = sortLanguagesByPreset(
                snippets,
                preferred_preset_key
            );

            // eslint-disable-next-line prefer-destructuring
            const newPreset = rankedPresets[0];

            const entries = document.querySelectorAll(
                '[data-code-group="' + identifier + '"]'
            );

            console.log(entries);

            for (const entry of entries) {
                if (
                    // @ts-ignore
                    entry.dataset.codeVariant === newPreset.preset ||
                    // @ts-ignore
                    entry.dataset.codeVariant === newPreset.title
                ) {
                    entry.classList.remove('hidden');
                } else {
                    entry.classList.add('hidden');
                }
            }

            setActiveLanguage(newPreset.preset);
        },
        [setActiveLanguage]
    );

    useEffect(() => {
        // when page first load
        // load query params
        const urlParameters = new URLSearchParams(
            (location as Location).search
        );

        // Prioritize query params
        // Then localstorage
        // Then default to first snippet
        const default_preset =
            urlParameters.get(presets) ??
            localStorage.getItem(EVENT + presets) ??
            snippets.at(0).preset;

        setPreset(default_preset.toLowerCase());

        const hook = (language: LLanguageEvent) => {
            setPreset(language.language);
        };

        // @ts-ignore
        document.addEventListener(EVENT + presets, hook);

        return () => {
            // @ts-ignore
            document.removeEventListener(EVENT + presets, hook);
        };
    }, [snippets]);

    if (!activeLanguage) return <></>;

    return (
        <div className="absolute left-auto right-2 top-2 w-fit text-right">
            <select
                onChange={(event) => {
                    localStorage.setItem(EVENT + presets, event.target.value);
                    // Inform the other codeblocks
                    document.dispatchEvent(
                        new LLanguageEvent(event.target.value, presets)
                    );
                }}
                value={activeLanguage}
            >
                {snippets.map((snippet) => {
                    return (
                        <option value={snippet.preset} key={snippet.preset}>
                            {snippet.title ??
                                snippet.config?.name ??
                                snippet.preset}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
