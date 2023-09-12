'use client';

import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { FiGithub } from 'react-icons/fi';

const ROOT_REPO = 'ensdomains/docs-v2';

export const ContributeLink: FC<{ url?: string }> = ({ url }) => {
    if (!url) {
        const asPath = usePathname();

        url = `/pages${asPath}.mdx`;
        console.warn(
            'Failed to get url, defaulting back to asPath from useRouter',
            url
        );

        return <></>;
    }

    return (
        <a
            href={`https://github.com/${ROOT_REPO}/edit/main/docs${url}`}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-700"
            target="_blank"
            rel="nofollow"
        >
            <FiGithub />
            <span>Edit this page on Github</span>
        </a>
    );
};
