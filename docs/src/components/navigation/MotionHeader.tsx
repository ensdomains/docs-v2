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
                className="lheader fixed inset-0 top-[3.5rem] z-40 hidden w-72 overflow-y-auto border-r border-zinc-900/10 lg:block xl:w-80"
            >
                {/* // TODO: */}
                <Navigation />
            </motion.div>
        </>
    );
};
