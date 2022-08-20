import { lightTheme, ThorinGlobalStyles } from '@ensdomains/thorin';
import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

export const Root: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ThorinGlobalStyles />
            {children}
        </ThemeProvider>
    );
};
