'use client';

import { motion } from 'framer-motion';

import { Navigation } from './_legacy/sidenav';

export const Sidebar = () => {
    return (
        <motion.div
            layoutScroll
            className="border-ens-light-border dark:border-ens-dark-border fixed inset-0 top-[6rem] z-40 hidden w-72 border-r lg:block"
        >
            <Navigation />
        </motion.div>
    );
};
