// eslint-disable-next-line unicorn/prefer-node-protocol
import crypto from 'crypto';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

import { ccx } from '@/lib/cx';

const prefix = 'docs';
const repo = 'ensdomains/docs-v2';

export const GitCommitLink: FC<
    PropsWithChildren<{ file: string; hash: string }>
> = ({ file, hash, children }) => {
    const file_hash = crypto
        .createHash('sha256')
        .update(prefix + file)
        .digest('hex');
    const { route } = useRouter();
    const isDAO = route.startsWith('/dao');

    return (
        <a
            href={`https://github.com/${repo}/commit/${hash}#diff-${file_hash}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={ccx(
                'flex items-center gap-1 hover:underline',
                isDAO ? 'text-ens-dao-400' : 'text-blue-500'
            )}
        >
            {children}
        </a>
    );
};
