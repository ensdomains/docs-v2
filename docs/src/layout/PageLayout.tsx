import { FC, ReactNode } from 'react';
import { Article, WithContext } from 'schema-dts';

import { Prose } from '@/components/mdx/Prose';
import { SectionProvider } from '@/components/SectionProvider';
import { Breadcrumbs } from '@/content/prose/breadcrumbs/Breadcrumbs';
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
    isHome?: boolean;
}> = ({ children, mdxProperties, snapshotData, isHome = false }) => {
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
                <div className="relative mt-24 px-4 sm:px-6">
                    {isHome ? (
                        <>
                            <main className="relative space-y-4 py-4">
                                <div className="prose mt-4 w-full space-y-6">
                                    {children}
                                </div>
                            </main>
                            <div className="prose">
                                <div className="notprose w-full">
                                    <Footer mdxProperties={mdxProperties} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="lg:ml-72 lg:px-8 xl:ml-80">
                            <main className="relative my-4 space-y-4 py-4">
                                <div className="prose x text-ens-light-text-secondary dark:text-ens-dark-text-secondary">
                                    <Breadcrumbs />
                                </div>

                                <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.stringify(schema),
                                    }}
                                />

                                <Prose>{children}</Prose>

                                <div className="prose pt-8">
                                    <PageDetails
                                        mdxProperties={mdxProperties}
                                        snapshotData={snapshotData}
                                    />
                                </div>
                            </main>
                            <div className="prose">
                                <div className="notprose w-full">
                                    <Footer mdxProperties={mdxProperties} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </SectionProvider>
    );
};
