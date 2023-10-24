import './globals.css';
import 'focus-visible';

export const metadata = {
    title: 'ENS Documentation',
    description: 'Documentation for the ENS protocol.',
};

export default function RootLayout(properties) {
    const { children } = properties;

    return (
        <html lang="en" className="dar">
            <body className="bg-ens-light-background-primary dark:bg-ens-dark-background-primary text-ens-light-text-primary dark:text-ens-dark-text-primary">
                {children}
            </body>
        </html>
    );
}
