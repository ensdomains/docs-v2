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
            className="card p-4 flex items-center not-prose text-black hover:text-black no-underline hover:outline-2 outline-blue-500"
        >
            <span className="flex flex-col w-full">
                <span className="font-bold">
                    {title}
                    {tag && (
                        <span className="ml-2 text-xs bg-yellow-100 border-yellow-300 border text-yellow-400 rounded-full px-2 py-1">
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
