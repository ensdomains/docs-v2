import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { Prose } from '@/components/mdx/Prose';
import { Header } from '@/components/navigation/header/header';
import { SectionProvider } from '@/components/SectionProvider';
import { MdxPageProps } from '@/lib/mdxPageProps';

import { Navigation } from './navigation/sidenav/sidenav';
import { PageDetails } from './pagedetails/PageDetails';

export const Layout: FC<{
    children: ReactNode;
    mdxProperties: MdxPageProps;
}> = ({ children, mdxProperties }) => {
    return (
        <SectionProvider sections={mdxProperties.sections}>
            <div className="lg:ml-72 xl:ml-80">
                <motion.header
                    layoutScroll
                    className="lheader fixed inset-0 top-14 z-40 contents w-72 overflow-y-auto border-r-0 border-zinc-900/10 px-6 pb-8 pt-2 dark:border-white/10 lg:block xl:w-80"
                >
                    <Header />
                    {/* // TODO: */}
                    <Navigation className="hidden lg:mt-8 lg:block" />
                </motion.header>
                <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
                    <main className="relative py-16">
                        <Prose>{children}</Prose>

                        <PageDetails mdxProperties={mdxProperties} />
                    </main>
                    <Footer mdxProperties={mdxProperties} />
                </div>
            </div>
        </SectionProvider>
    );
};
