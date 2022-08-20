const colors = require('tailwindcss/colors');
const { lightTheme, darkTheme } = require('@ensdomains/thorin');

const makePrimaryColor =
    (l) =>
    ({ opacityValue }) => {
        if (opacityValue === undefined) {
            return `hsl(var(--nextra-primary-hue) 100% ${l}%)`;
        }

        return `hsl(var(--nextra-primary-hue) 100% ${l}% / ${opacityValue})`;
    };

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{html,js,ts,jsx,tsx,md,mdx}',
        './src/**/*.{html,js,ts,jsx,tsx,md,mdx}',
        './pages/**/*.{html,js,ts,jsx,tsx,md,mdx}',
        './pages/_app.tsx',
        './pages/_document.tsx',
        './theme.config.tsx',
        './src/styles.css',
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
        letterSpacing: {
            tight: '-0.015em',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000',
            white: '#fff',
            gray: colors.gray,
            slate: colors.slate,
            neutral: colors.neutral,
            red: colors.red,
            orange: colors.orange,
            blue: colors.blue,
            yellow: colors.yellow,
            primary: {
                50: makePrimaryColor(97),
                100: makePrimaryColor(94),
                200: makePrimaryColor(86),
                300: makePrimaryColor(77),
                400: makePrimaryColor(66),
                500: makePrimaryColor(50),
                600: makePrimaryColor(45),
                700: makePrimaryColor(39),
                750: makePrimaryColor(35),
                800: makePrimaryColor(32),
                900: makePrimaryColor(24),
                1000: makePrimaryColor(12),
            },
            ensl: lightTheme.colors,
            ensd: darkTheme.colors,
        },
        extend: {
            colors: {
                dark: '#111',
            },
            boxShadow: {
                'ensl-0': lightTheme.boxShadows['0'],
                'ensl-0.02': lightTheme.boxShadows['0.02'],
                'ensl-0.25': lightTheme.boxShadows['0.25'],
                'ensl-0.5': lightTheme.boxShadows['0.5'],
                'ensl-1': lightTheme.boxShadows['1'],
                'ensd-0': darkTheme.boxShadows['0'],
                'ensd-0.02': darkTheme.boxShadows['0.02'],
                'ensd-0.25': darkTheme.boxShadows['0.25'],
                'ensd-0.5': darkTheme.boxShadows['0.5'],
                'ensd-1': darkTheme.boxShadows['1'],
            },
            dropShadow: {
                'ensl-none': lightTheme.shadows['none'],
                'ensl-px': lightTheme.shadows['-px'],
                'ensl-0': lightTheme.shadows['0'],
                'ensl-0.02': lightTheme.shadows['0.05'],
                'ensl-0.25': lightTheme.shadows['0.25'],
                'ensl-0.5': lightTheme.shadows['0.5'],
                'ensl-1': lightTheme.shadows['1'],
                'ensl-2': lightTheme.shadows['2'],
            },
        },
    },
    darkMode: 'class',
};
