import Link from 'next/link';
import { FC } from 'react';
import { FiChevronRight } from 'react-icons/fi';

export const EmbedLink: FC<{
    title: string;
    href: string;
    description: string;
}> = ({ title, href, description }) => {
    return (
        <Link
            href={href}
            className="card p-4 flex items-center not-prose text-black"
        >
            <span className="flex flex-col">
                <span className="font-bold">{title}</span>
                <span className="font-normal">{description}</span>
            </span>
            <FiChevronRight className="text-2xl" />
        </Link>
    );
};
