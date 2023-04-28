import { motion } from 'framer-motion';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/header/Header';
import { Prose } from '@/components/Prose';
import { SectionProvider } from '@/components/SectionProvider';

import { Navigation } from './Navigation';

export function Layout({ children, sections = [] }) {
    return (
        <SectionProvider sections={sections}>
            <div className="lg:ml-72 xl:ml-80">
                <motion.header
                    layoutScroll
                    className="lheader fixed inset-0 top-14 left-0 z-40 contents w-72 overflow-y-auto border-r-0 border-zinc-900/10 px-6 pt-2 pb-8 dark:border-white/10 lg:block xl:w-80"
                >
                    <Header />
                    {/* // TODO: */}
                    <Navigation className="hidden lg:mt-8 lg:block" />
                </motion.header>
                <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
                    <main className="py-16">
                        <Prose as="article">{children}</Prose>
                    </main>
                    <Footer />
                </div>
            </div>
        </SectionProvider>
    );
}
