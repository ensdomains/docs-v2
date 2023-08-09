import { LanguagePresets } from './languages';

export type LanguageSettings<LanguageTypes extends string = string> = {
    name: string;
    icon?: string;
    language?: string;
    fallback?: LanguageTypes[];
};
export type languages = keyof typeof LanguagePresets;

export const configureLanguages = <K extends string, V extends string = K>(
    preset: Record<K, LanguageSettings<V>>
) => {
    return preset as Record<K, LanguageSettings<V>>;
};
