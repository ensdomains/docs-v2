import { FC, ReactNode } from 'react';
import { Article, WithContext } from 'schema-dts';

import { Prose } from '@/components/mdx/Prose';
import { SectionProvider } from '@/components/SectionProvider';
import { MdxPageProps } from '@/lib/mdxPageProps';

import { PageDetails } from './details/PageDetails';
import { ProposalData } from './details/variations/SnapshotDetails';
import { Feedback } from './footer/feedback/FeedbackSection';
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
                    <main className="relative space-y-4 py-4">
                        <div className="prose text-ens-light-text-secondary dark:text-ens-dark-text-secondary">
                            <nav className="breadcrumb" aria-label="Breadcrumb">
                                <ul>
                                    {/* Todo make this work */}
                                    {[
                                        'Home',
                                        'Using ENS',
                                        'Web',
                                        'Querying',
                                    ].map((item, index, array) => (
                                        <li>
                                            <span
                                                aria-current={
                                                    array.length - 1 == index
                                                        ? 'page'
                                                        : undefined
                                                }
                                            >
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(schema),
                            }}
                        />
                        <Prose>{children}</Prose>

                        <div className="prose">
                            <div className="w-full py-4">
                                <div className="mx-auto w-fit">
                                    <Feedback />
                                </div>
                            </div>
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
            </div>
        </SectionProvider>
    );
};
