import Link from 'next/link';
import { FC } from 'react';
import { FiChevronRight } from 'react-icons/fi';

export const EmbedLink: FC<{
    title: string;
    href: string;
    tag?: string;
    description: string;
}> = ({ title, href, description, tag }) => {
    return (
        <Link
            href={href}
            className="card1 not-prose flex items-center gap-1.5 p-6 text-ens-light-text-primary no-underline outline-blue-500 transition-all hover:shadow-md hover:outline-2 dark:text-ens-dark-text-primary"
        >
            <span className="flex w-full flex-col">
                <span className="font-bold">{title}</span>
                <span className="font-normal">{description}</span>
            </span>

            {tag && (
                <span className="ml-2 rounded-full bg-ens-light-yellow-surface px-2 text-xs text-ens-light-yellow-active dark:bg-ens-dark-yellow-surface dark:text-ens-dark-yellow-active">
                    {tag}
                </span>
            )}
            <FiChevronRight className="text-2xl" />
        </Link>
    );
};
