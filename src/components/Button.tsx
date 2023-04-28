import clsx from 'clsx';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import { ccx, cx } from '@/lib/cx';

const ArrowIcon: FC = (properties) => {
    return (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...properties}>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
            />
        </svg>
    );
};

const variantStyles = {
    primary: cx(
        'rounded-lg py-1 px-3',
        'bg-ens-400/10 text-ens-600 ring-1 ring-inset ring-ens-400/20 hover:bg-ens-400/10 hover:text-ens-300 hover:ring-ens-300',
        'bg-ens-400/10 text-ens-400 ring-1 ring-inset ring-ens-400/20 hover:bg-ens-400/10 hover:text-ens-300 hover:ring-ens-300'
    ),
    red: cx(
        'rounded-lg py-1 px-3',
        'bg-ens-red-400/10 text-ens-red-400 ring-1 ring-inset ring-ens-red-400/20 hover:bg-ens-red-400/10 hover:text-ens-red-300 hover:ring-ens-red-300',
        'bg-ens-red-400/10 text-ens-red-400 ring-1 ring-inset ring-ens-red-400/20 hover:bg-ens-red-400/10 hover:text-ens-red-300 hover:ring-ens-red-300'
    ),
    secondary:
        'rounded-lg bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300',
    filled: 'rounded-lg bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-ens-500 dark:text-white dark:hover:bg-ens-400',
    outline:
        'rounded-lg py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
    text: 'text-ens-500 hover:text-ens-600 dark:text-ens-400 dark:hover:text-ens-500',
};

export const Button: FC<
    {
        variant: string;
        className?: string;
        arrow?: 'left' | 'right';
        href?: string;
        target?: string;
    } & PropsWithChildren
> = ({ variant = 'primary', className, children, arrow, ...properties }) => {
    const Component = properties.href ? Link : 'button';

    className = clsx(
        'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
        variantStyles[variant],
        className
    );

    const arrowIcon = (
        <ArrowIcon
            // @ts-ignore
            className={ccx(
                'mt-0.5 h-5 w-5',
                variant === 'text' && 'relative top-px',
                arrow === 'left' && '-ml-1 rotate-180',
                arrow === 'right' && '-mr-1'
            )}
        />
    );

    return (
        <Component
            href={properties.href}
            target={properties.target}
            className={className}
            {...properties}
        >
            {arrow === 'left' && arrowIcon}
            {children}
            {arrow === 'right' && arrowIcon}
        </Component>
    );
};
