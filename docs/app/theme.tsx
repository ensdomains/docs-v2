'use client';

import { ThemeProvider } from 'next-themes';

export const Theme = ({ children }) => {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
