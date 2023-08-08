import { FC } from 'react';
import { FiGithub } from 'react-icons/fi';

type RepositoryData = {
    description: string;
};

const fetchRepositoryData = async (name: string): Promise<RepositoryData> => {
    return {
        description: 'My fun repository description here',
    };
};

export const Repository: FC<{
    src: string;
    name: string;
    description: string;
    type?: 'github';
}> = async ({ src, type = 'github' }) => {
    if (type !== 'github') return <p>Unsupported Repository Type</p>;

    const { description } = await fetchRepositoryData(src);

    return (
        <span className="not-prose block">
            <a
                href={'https://github.com/' + src}
                target="_blank"
                className="mb-2 flex w-full border p-4 hover:bg-gray-50"
            >
                <span className="block pt-1">
                    <FiGithub />
                </span>
                <span className="pl-2 leading-5">
                    <b>ensdomains/offchain-resolver</b>
                    <p>{description}</p>
                </span>
            </a>
        </span>
    );
};
