import { useRouter } from 'next/router';
import { FC } from 'react';
import { FiGithub } from 'react-icons/fi';

const ROOT_REPO = 'ensdomains/docs-v2';

export const ContributeButton: FC<{ url?: string }> = ({ url }) => {
    if (!url) {
        const { asPath } = useRouter();

        url = `/pages${asPath}.mdx`;
        console.warn(
            'Failed to get url, defaulting back to asPath from useRouter',
            url
        );
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
