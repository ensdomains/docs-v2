'use client';
import { motion } from 'framer-motion';
import { FC } from 'react';

import { Header } from '@/components/navigation/header/header';
import { Navigation } from '@/components/navigation/sidenav/sidenav';
export const MotionHeader: FC = () => {
    return (
        <motion.header
            layoutScroll
            className="lheader fixed inset-0 top-14 z-40 contents w-72 overflow-y-auto border-r-0 border-zinc-900/10 px-6 pb-8 pt-2 dark:border-white/10 lg:block xl:w-80"
        >
            <Header />
            {/* // TODO: */}
            <Navigation className="hidden lg:mt-8 lg:block" />
        </motion.header>
    );
};
