import Link from 'next/link';

export const TopLevelNavItem = ({ href, children, ...properties }) => {
    return (
        <li>
            <Link
                href={href}
                className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                {...properties}
            >
                {children}
            </Link>
        </li>
    );
};
