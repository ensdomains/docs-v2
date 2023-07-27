import { useRouter } from 'next/router';
import { FC } from 'react';
import { FiClock, FiGitCommit } from 'react-icons/fi';

import { ccx } from '@/lib/cx';
import { MdxPageProps } from '@/lib/mdxPageProps';

import { ContributorsSection } from '../contribute/ContributorsSection';
import { TimeSince } from '../Timestamp';
import { DAOProposalDetails } from './DAOProposalDetails';
import { ENSIPDetails } from './ENSIPDetails';
import { GitCommitLink } from './GitCommitLink';

export const PageDetails: FC<{ mdxProperties: MdxPageProps }> = ({
    mdxProperties,
}) => {
    const shouldShowPageDetails = mdxProperties.meta?.showDetailsSection;

    const { route } = useRouter();
    const isDAO = route.startsWith('/dao');

    if (!shouldShowPageDetails) {
        return <></>;
    }

    const hasContributors = (mdxProperties.meta?.contributors?.length ?? 0) > 0;

    const hasCommit = mdxProperties.commit && mdxProperties.filepath;

    return (
        <div>
            <div
                className={ccx(
                    'mb-2 border-b font-bold',
                    isDAO ? 'border-ens-dao-400' : 'border-blue-500'
                )}
            >
                Details
            </div>
            <div className="leading-6">
                {mdxProperties.meta?.ensip && (
                    <ENSIPDetails mdxProperties={mdxProperties.meta.ensip} />
                )}
                {mdxProperties.meta?.proposal && (
                    <DAOProposalDetails
                        mdxProperties={mdxProperties.meta.proposal}
                    />
                )}
                {hasContributors && (
                    <div className="flex justify-between text-xs">
                        <div>Contributors</div>
                        <ContributorsSection
                            contributors={mdxProperties.meta.contributors}
                        />
                    </div>
                )}
                {hasCommit && (
                    <div className="flex items-center justify-between text-xs">
                        <div>Hash</div>
                        <GitCommitLink
                            file={mdxProperties.filepath}
                            hash={mdxProperties.commit.hash}
                        >
                            <FiGitCommit />
                            {mdxProperties.commit.hash}
                        </GitCommitLink>
                    </div>
                )}
                {hasCommit && (
                    <div className="flex items-center justify-between text-xs">
                        <div>Last Modified</div>
                        <GitCommitLink
                            file={mdxProperties.filepath}
                            hash={mdxProperties.commit.hash}
                        >
                            <FiClock />
                            <TimeSince date={mdxProperties.commit.date} />
                        </GitCommitLink>
                    </div>
                )}
                {/* {mdxProperties.filepath && (
                            <div className="flex justify-between text-xs">
                                <div>Path</div>
                                <div>{mdxProperties.filepath}</div>
                                </div>
                            )} */}
            </div>
        </div>
    );
};
