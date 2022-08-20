import { darkTheme, lightTheme } from '@ensdomains/thorin';
import { useTheme } from 'next-themes';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

const Wrapper = ({ children }) => {
    return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
};

const Theme: FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme();

    console.log(theme.theme);

    return (
        <ThemeProvider theme={theme.theme == 'dark' ? darkTheme : lightTheme}>
            {/* <ThorinGlobalStyles /> */}
            {children}
        </ThemeProvider>
    );
};

export const Root = ({ children }) => {
    return (
        <Wrapper>
            <Theme>{children}</Theme>
        </Wrapper>
    );
};
