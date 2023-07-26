import { FC } from 'react';

import { MdxPageProps } from '@/lib/mdxPageProps';

import { ContributorsSection } from '../contribute/ContributorsSection';

export const PageDetails: FC<{ mdxProperties: MdxPageProps }> = ({
    mdxProperties,
}) => {
    const shouldShowPageDetails = mdxProperties.meta?.showDetailsSection;

    if (!shouldShowPageDetails) {
        return <></>;
    }

    return (
        <div className="pagedetails_wrapper">
            <div className="pagedetails">
                <div className="pagedetails_inner">
                    <div className="mb-2 border-b border-blue-500 font-bold">
                        Details
                    </div>
                    <div className="leading-6">
                        {mdxProperties.meta?.contributors && (
                            <div className="flex justify-between text-xs">
                                <div>Contributors</div>
                                <ContributorsSection
                                    contributors={
                                        mdxProperties.meta.contributors
                                    }
                                />
                            </div>
                        )}
                        {/* <div className="flex justify-between text-xs">
                            <div>Last Modified</div>
                            <div>Yesterday</div>
                        </div> */}
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
