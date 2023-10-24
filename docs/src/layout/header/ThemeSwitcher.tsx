'use client';

import { useEffect, useState } from 'react';
import { FiSun } from 'react-icons/fi';

import { Button } from '@/components/Button';

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(
        window &&
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
    );

    useEffect(() => {
        document.querySelectorAll('html')[0].classList.remove('dark', 'light');
        document.querySelectorAll('html')[0].classList.add(theme);
    }, [theme]);

    return (
        <Button
            onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
            }}
            variant="primary"
            className="flex h-8 items-center"
        >
            <FiSun />
        </Button>
    );
};
