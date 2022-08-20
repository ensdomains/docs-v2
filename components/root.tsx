import { darkTheme, lightTheme, ThorinGlobalStyles } from '@ensdomains/thorin';
import { useTheme } from 'next-themes';
import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

export const Root: FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme.theme == 'dark' ? darkTheme : lightTheme}>
            <ThorinGlobalStyles />
            {children}
        </ThemeProvider>
    );
};
