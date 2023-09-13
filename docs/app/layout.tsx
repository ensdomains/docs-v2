import './globals.css';
import 'focus-visible';

export const metadata = {
    title: 'ENS Documentation',
    description: 'Documentation for the ENS protocol.',
};

export default function RootLayout(properties) {
    const { children } = properties;

    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
