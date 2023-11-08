import './globals.css';
import 'focus-visible';

import { Theme } from './theme';

export const metadata = {
    title: 'ENS Documentation',
    description: 'Documentation for the ENS protocol.',
};

export default function RootLayout(properties) {
    const { children } = properties;

    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-ens-light-background-primary dark:bg-ens-dark-background-primary text-ens-light-text-primary dark:text-ens-dark-text-primary">
                <Theme>{children}</Theme>
            </body>
        </html>
    );
}
