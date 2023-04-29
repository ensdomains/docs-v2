import create from 'zustand';

export const usePreferredLanguageStore = create<{
    preferredLanguages: string[];
    addPreferredLanguage: (language: string) => void;
}>((set) => ({
    preferredLanguages: [],
    addPreferredLanguage: (language) =>
        set((state) => ({
            preferredLanguages: [
                ...state.preferredLanguages.filter(
                    (preferredLanguage) => preferredLanguage !== language
                ),
                language,
            ],
        })),
}));
