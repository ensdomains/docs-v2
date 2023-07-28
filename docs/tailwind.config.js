/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{pages,app,content,src,mdx}/**/*.{js,mjs,jsx,mdx,tsx}'],
    darkMode: 'class',
    theme: {
        fontSize: {
            '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
            xs: ['0.8125rem', { lineHeight: '1.5rem' }],
            sm: ['0.875rem', { lineHeight: '1.5rem' }],
            base: ['1rem', { lineHeight: '1.75rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '1.75rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
            '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
            '5xl': ['3rem', { lineHeight: '1' }],
            '6xl': ['3.75rem', { lineHeight: '1' }],
            '7xl': ['4.5rem', { lineHeight: '1' }],
            '8xl': ['6rem', { lineHeight: '1' }],
            '9xl': ['8rem', { lineHeight: '1' }],
        },
        typography: require('./src/typography'),
        extend: {
            blur: {
                xs: '0.8px',
            },
            boxShadow: {
                glow: '0 0 4px rgb(0 0 0 / 0.1)',
            },
            maxWidth: {
                lg: '33rem',
                '2xl': '40rem',
                '3xl': '50rem',
                '5xl': '66rem',
            },
            opacity: {
                1: '0.01',
                2.5: '0.025',
                7.5: '0.075',
                15: '0.15',
            },
            colors: {
                ens: {
                    DEFAULT: '#5298FF',
                    50: '#FFFFFF',
                    100: '#F5F9FF',
                    200: '#CCE1FF',
                    300: '#A4C9FF',
                    400: '#7BB0FF',
                    500: '#5298FF',
                    600: '#1A77FF',
                    700: '#005BE1',
                    800: '#0044A9',
                    900: '#002E71',
                },
                'ens-dao': {
                    400: '#AD76FF', // Core
                    500: '#8F54FF',
                },
                'ens-red': {
                    DEFAULT: '#FF2D55',
                    50: '#FFE5EA',
                    100: '#FFD0D9',
                    200: '#FFA7B8',
                    300: '#FF7F97',
                    400: '#FF5676',
                    500: '#FF2D55',
                    600: '#F4002E',
                    700: '#BC0024',
                    800: '#840019',
                    900: '#4C000E',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
