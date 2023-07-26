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
            className="card not-prose flex items-center p-4 text-black no-underline outline-blue-500 transition-all hover:text-black hover:shadow-md hover:outline-2"
        >
            <span className="flex w-full flex-col">
                <span className="font-bold">
                    {title}
                    {tag && (
                        <span className="ml-2 rounded-full border border-yellow-300 bg-yellow-100 px-2 py-1 text-xs text-yellow-400">
                            {tag}
                        </span>
                    )}
                </span>
                <span className="font-normal">{description}</span>
            </span>
            <FiChevronRight className="text-2xl" />
        </Link>
    );
};
