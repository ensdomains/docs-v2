import { FC, ReactNode } from 'react';
import { Article, WithContext } from 'schema-dts';

import { Prose } from '@/components/mdx/Prose';
import { SectionProvider } from '@/components/SectionProvider';
import { MdxPageProps } from '@/lib/mdxPageProps';

import { PageDetails } from './details/PageDetails';
import { ProposalData } from './details/variations/SnapshotDetails';
import { Footer } from './footer/PageFooter';
import { Header } from './header/Header';
import { Sidebar } from './sidebar/Sidebar';

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
            <div className="h-full max-h-screen" id="app">
                <Header />
                <Sidebar />

                <div className="relative mt-28 px-4 sm:px-6 lg:ml-72 lg:px-8 xl:ml-80">
                    <main className="relative py-14">
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
                                        snapshotData={snapshotData}
                                    />
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
