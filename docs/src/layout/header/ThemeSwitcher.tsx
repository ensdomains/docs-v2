'use client';

import { useTheme } from 'next-themes';
import { FiSun } from 'react-icons/fi';

import { Button } from '@/components/Button';

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
            variant="primary"
            className="flex h-8 items-center"
        >
            <FiSun />
        </Button>
    );
};
