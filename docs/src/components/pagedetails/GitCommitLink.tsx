// eslint-disable-next-line unicorn/prefer-node-protocol
import crypto from 'crypto';
import { FC, PropsWithChildren } from 'react';

const prefix = 'docs';
const repo = 'ensdomains/docs-v2';

export const GitCommitLink: FC<
    PropsWithChildren<{ file: string; hash: string }>
> = ({ file, hash, children }) => {
    const file_hash = crypto
        .createHash('sha256')
        .update(prefix + file)
        .digest('hex');

    return (
        <a
            href={`https://github.com/${repo}/commit/${hash}#diff-${file_hash}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-blue-500 hover:underline"
        >
            {children}
        </a>
    );
};
