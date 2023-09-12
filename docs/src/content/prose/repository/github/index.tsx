import { FC } from 'react';
import { FiFolderPlus, FiGitBranch, FiGithub, FiStar } from 'react-icons/fi';

import { RepositoryType } from '../Repository';
import { fetchGithubRepositoryData } from './fetch';

export const GithubRepository: FC<RepositoryType> = async ({
    src,
    name,
    description,
}) => {
    const {
        description: gh_description,
        html_url,
        forks_count,
        is_template,
        stargazers_count,
    } = await fetchGithubRepositoryData(src);

    name = name || src;
    description = description || gh_description;

    return (
        <span className="not-prose block">
            <a
                href={html_url}
                target="_blank"
                className="mb-2 flex w-full border p-4 hover:bg-gray-50"
            >
                <span className="block pt-1">
                    {is_template ? <FiFolderPlus /> : <FiGithub />}
                </span>
                <span className="grow pl-2 leading-5">
                    <b>{name}</b>
                    <p>{description}</p>
                </span>
                <span className="hidden items-start gap-2 md:flex">
                    {stargazers_count > 10 && (
                        <span className="flex items-center text-gray-400">
                            <FiStar className="mr-0.5" />
                            <span className="leading-3">
                                {stargazers_count}
                            </span>
                        </span>
                    )}
                    {forks_count > 10 && (
                        <span className="flex items-center text-gray-400">
                            <FiGitBranch className="mr-0.5" />
                            <span className="leading-3">{forks_count}</span>
                        </span>
                    )}
                </span>
            </a>
        </span>
    );
};
