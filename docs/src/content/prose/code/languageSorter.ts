import { LanguagePresets } from '@/config/languages';

import { CodeSnippetProperties } from './snippet/CodeSnippet';
import { LanguageSettings } from './types/language';

export const getLanguage = (
    preset: string
): LanguageSettings<any> | undefined => {
    for (const [key, value] of Object.entries(LanguagePresets)) {
        if (key == preset || value['language'] === preset) {
            return value as LanguageSettings<any>;
        }
    }

    return undefined;
};

const toMax = (a: number, b: number) => (a == -1 ? 0 : b - a);

/**
 * Sorts the languages array by
 * 1. Exact match of preset name and preferred preset
 * 2. Instances where the preset is a fallback of the preferred preset
 * 3. Instances where the preferred preset is a fallback of the preset
 */
export const sortLanguagesByPreset = (
    languages: CodeSnippetProperties[],
    preset: string
) => {
    console.log('Sorting snippets by ' + preset);

    const preferred_preset = getLanguage(preset);
    const fallback_preset = preferred_preset?.fallback ?? [];

    return languages.sort((a, b) => {
        if (a.preset === preset) {
            return -1;
        }

        if (b.preset === preset) {
            return 1;
        }

        const a_has_fallback = fallback_preset.indexOf(a.preset);
        const b_has_fallback = fallback_preset.indexOf(b.preset);

        console.log(a_has_fallback, b_has_fallback);

        if (a_has_fallback != 0 || b_has_fallback != 0) {
            return toMax(a_has_fallback, fallback_preset.length) >
                toMax(b_has_fallback, fallback_preset.length)
                ? -1
                : 1;
        }

        return 0;
    });
};
