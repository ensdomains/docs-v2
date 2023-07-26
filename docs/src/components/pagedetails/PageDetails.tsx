import { FC } from 'react';

import { MdxPageProps } from '@/lib/mdxPageProps';

import { ContributorsSection } from '../contribute/ContributorsSection';
import { TimeSince } from '../Timestamp';
import { GitCommitLink } from './GitCommitLink';

export const PageDetails: FC<{ mdxProperties: MdxPageProps }> = ({
    mdxProperties,
}) => {
    const shouldShowPageDetails = mdxProperties.meta?.showDetailsSection;

    if (!shouldShowPageDetails) {
        return <></>;
    }

    const hasContributors = (mdxProperties.meta?.contributors?.length ?? 0) > 0;

    const hasCommit = mdxProperties.commit && mdxProperties.filepath;

    return (
        <div className="pagedetails_wrapper">
            <div className="pagedetails">
                <div className="pagedetails_inner">
                    <div className="mb-2 border-b border-blue-500 font-bold">
                        Details
                    </div>
                    <div className="leading-6">
                        {hasContributors && (
                            <div className="flex justify-between text-xs">
                                <div>Contributors</div>
                                <ContributorsSection
                                    contributors={
                                        mdxProperties.meta.contributors
                                    }
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
                                    <TimeSince
                                        date={mdxProperties.commit.date}
                                    />
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
            </div>
        </div>
    );
};
