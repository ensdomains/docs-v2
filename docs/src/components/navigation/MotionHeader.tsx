'use client';
import { motion } from 'framer-motion';
import { FC } from 'react';

import { Header } from '@/components/navigation/header/header';
import { Navigation } from '@/components/navigation/sidenav/sidenav';

export const MotionHeader: FC = () => {
    return (
        <>
            <Header />
            <motion.div
                layoutScroll
                className="lheader fixed inset-0 top-[5.5rem] z-40 hidden w-72 overflow-y-auto border-r-0 border-zinc-900/10 pb-8 pl-6 pr-2 pt-2 dark:border-white/10 lg:block xl:w-80"
            >
                {/* // TODO: */}
                <Navigation />
            </motion.div>
        </>
    );
};
