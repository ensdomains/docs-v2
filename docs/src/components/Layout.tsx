import { FC, ReactNode } from 'react';
import { Article, WithContext } from 'schema-dts';

import { Prose } from '@/components/mdx/Prose';
import { Footer } from '@/components/navigation/footer/Footer';
import { SectionProvider } from '@/components/SectionProvider';
import { MdxPageProps } from '@/lib/mdxPageProps';

import { MotionHeader } from './navigation/MotionHeader';
import { PageDetails } from './pagedetails/PageDetails';
import { ProposalData, SnapshotDetails } from './pagedetails/SnapshotDetails';
import { TallyDetails } from './pagedetails/TallyDetails';

export const Layout: FC<{
    children: ReactNode;
    mdxProperties: MdxPageProps;
    snapshotData?: ProposalData;
}> = ({ children, mdxProperties, snapshotData }) => {
    const schema: WithContext<Article> = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: mdxProperties.meta.title,
        // image: mdxProperties.meta.,
        author: mdxProperties.meta.contributors?.map((author) => ({
            '@type': 'Person',
            name: author,
            url: 'https://github.com/' + author,
        })),
    };

    return (
        <SectionProvider sections={mdxProperties.sections}>
            <div className="lg:ml-72 xl:ml-80" id="app">
                <MotionHeader />
                <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
                    <main className="relative py-16">
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(schema),
                            }}
                        />
                        <Prose>{children}</Prose>

                        <div className="pagedetails_wrapper">
                            <div className="pagedetails">
                                <div className="pagedetails_inner">
                                    <PageDetails
                                        mdxProperties={mdxProperties}
                                    />
                                    {mdxProperties.meta?.proposal?.snapshot && (
                                        <SnapshotDetails
                                            snapshotData={snapshotData}
                                            data={mdxProperties.meta.proposal}
                                        />
                                    )}
                                    {mdxProperties.meta?.proposal?.tally && (
                                        <TallyDetails
                                            data={mdxProperties.meta.proposal}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer mdxProperties={mdxProperties} />
                </div>
            </div>
        </SectionProvider>
    );
};
