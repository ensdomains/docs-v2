import { FC } from 'react';
import { FiFolderPlus, FiGitBranch, FiGithub, FiStar } from 'react-icons/fi';

type RepositoryData = {
    id: string;
    node_id: string;
    name: 'docs-v2';
    full_name: 'ensdomains/docs-v2';
    private: false;
    // Big
    owner: object;
    html_url: 'https://github.com/ensdomains/docs-v2';
    description: 'The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain. This repository contains documentation, examples, and much more.';
    fork: false;
    url: 'https://api.github.com/repos/ensdomains/docs-v2';
    forks_url: 'https://api.github.com/repos/ensdomains/docs-v2/forks';
    keys_url: 'https://api.github.com/repos/ensdomains/docs-v2/keys{/key_id}';
    collaborators_url: 'https://api.github.com/repos/ensdomains/docs-v2/collaborators{/collaborator}';
    teams_url: 'https://api.github.com/repos/ensdomains/docs-v2/teams';
    hooks_url: 'https://api.github.com/repos/ensdomains/docs-v2/hooks';
    issue_events_url: 'https://api.github.com/repos/ensdomains/docs-v2/issues/events{/number}';
    events_url: 'https://api.github.com/repos/ensdomains/docs-v2/events';
    assignees_url: 'https://api.github.com/repos/ensdomains/docs-v2/assignees{/user}';
    branches_url: 'https://api.github.com/repos/ensdomains/docs-v2/branches{/branch}';
    tags_url: 'https://api.github.com/repos/ensdomains/docs-v2/tags';
    blobs_url: 'https://api.github.com/repos/ensdomains/docs-v2/git/blobs{/sha}';
    git_tags_url: 'https://api.github.com/repos/ensdomains/docs-v2/git/tags{/sha}';
    git_refs_url: 'https://api.github.com/repos/ensdomains/docs-v2/git/refs{/sha}';
    trees_url: 'https://api.github.com/repos/ensdomains/docs-v2/git/trees{/sha}';
    statuses_url: 'https://api.github.com/repos/ensdomains/docs-v2/statuses/{sha}';
    languages_url: 'https://api.github.com/repos/ensdomains/docs-v2/languages';
    stargazers_url: 'https://api.github.com/repos/ensdomains/docs-v2/stargazers';
    contributors_url: 'https://api.github.com/repos/ensdomains/docs-v2/contributors';
    subscribers_url: 'https://api.github.com/repos/ensdomains/docs-v2/subscribers';
    subscription_url: 'https://api.github.com/repos/ensdomains/docs-v2/subscription';
    commits_url: 'https://api.github.com/repos/ensdomains/docs-v2/commits{/sha}';
    git_commits_url: 'https://api.github.com/repos/ensdomains/docs-v2/git/commits{/sha}';
    comments_url: 'https://api.github.com/repos/ensdomains/docs-v2/comments{/number}';
    issue_comment_url: 'https://api.github.com/repos/ensdomains/docs-v2/issues/comments{/number}';
    contents_url: 'https://api.github.com/repos/ensdomains/docs-v2/contents/{+path}';
    compare_url: 'https://api.github.com/repos/ensdomains/docs-v2/compare/{base}...{head}';
    merges_url: 'https://api.github.com/repos/ensdomains/docs-v2/merges';
    archive_url: 'https://api.github.com/repos/ensdomains/docs-v2/{archive_format}{/ref}';
    downloads_url: 'https://api.github.com/repos/ensdomains/docs-v2/downloads';
    issues_url: 'https://api.github.com/repos/ensdomains/docs-v2/issues{/number}';
    pulls_url: 'https://api.github.com/repos/ensdomains/docs-v2/pulls{/number}';
    milestones_url: 'https://api.github.com/repos/ensdomains/docs-v2/milestones{/number}';
    notifications_url: 'https://api.github.com/repos/ensdomains/docs-v2/notifications{?since,all,participating}';
    labels_url: 'https://api.github.com/repos/ensdomains/docs-v2/labels{/name}';
    releases_url: 'https://api.github.com/repos/ensdomains/docs-v2/releases{/id}';
    deployments_url: 'https://api.github.com/repos/ensdomains/docs-v2/deployments';
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: null;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    has_discussions: boolean;
    forks_count: number;
    mirror_url: null;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: {
        key: string;
        name: string;
        spdx_id: string;
        url: string;
        node_id: string;
    };
    // Forking
    allow_forking: true;
    // Template
    is_template: boolean;
    web_commit_signoff_required: boolean;
    // Tags
    topics: string[]; // ['alpha', 'docs', 'documentation', 'ens']
    visibility: 'public';
    // Public Stats
    forks: number;
    // Public Stats
    open_issues: number;
    // Public Stats
    watchers: number;
    default_branch: string;
    temp_clone_token: null;
    organization: {
        login: 'ensdomains';
        id: number;
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjM0MTY3NjU4';
        avatar_url: 'https://avatars.githubusercontent.com/u/34167658?v=4';
        gravatar_id: '';
        url: 'https://api.github.com/users/ensdomains';
        html_url: 'https://github.com/ensdomains';
        followers_url: 'https://api.github.com/users/ensdomains/followers';
        following_url: 'https://api.github.com/users/ensdomains/following{/other_user}';
        gists_url: 'https://api.github.com/users/ensdomains/gists{/gist_id}';
        starred_url: 'https://api.github.com/users/ensdomains/starred{/owner}{/repo}';
        subscriptions_url: 'https://api.github.com/users/ensdomains/subscriptions';
        organizations_url: 'https://api.github.com/users/ensdomains/orgs';
        repos_url: 'https://api.github.com/users/ensdomains/repos';
        events_url: 'https://api.github.com/users/ensdomains/events{/privacy}';
        received_events_url: 'https://api.github.com/users/ensdomains/received_events';
        type: 'Organization';
        site_admin: boolean;
    };
    network_count: number;
    subscribers_count: number;
};

const fetchRepositoryData = async (name: string): Promise<RepositoryData> => {
    const response = await fetch('https://api.github.com/repos/' + name);

    return (await response.json()) as RepositoryData;
};

export const Repository: FC<{
    src: string;
    name?: string;
    description?: string;
    type?: 'github';
}> = async ({ src, type = 'github', name, description }) => {
    if (type !== 'github') return <p>Unsupported Repository Type</p>;

    const {
        description: gh_description,
        html_url,
        forks_count,
        is_template,
        stargazers_count,
    } = await fetchRepositoryData(src);

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
