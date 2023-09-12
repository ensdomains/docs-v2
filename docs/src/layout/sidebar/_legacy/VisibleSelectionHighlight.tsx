import { motion } from 'framer-motion';
import { useIsPresent } from 'framer-motion';

import { useSectionStore } from '@/components/SectionProvider';
import { useIsInsideMobileNavigation } from '@/hooks/mobile';
import { remToPx } from '@/lib/remToPx';

import { useInitialValue } from './useInitialValue';

export function VisibleSectionHighlight({ group, pathname }) {
    const [sections, visibleSections] = useInitialValue(
        [
            useSectionStore((s) => s.sections || []),
            useSectionStore((s) => s.visibleSections || []),
        ],
        useIsInsideMobileNavigation()
    );

    const isPresent = useIsPresent();
    const firstVisibleSectionIndex = Math.max(
        0,
        [{ id: '_top' }, ...sections].findIndex(
            (section) => section.id === visibleSections[0]
        )
    );
    const itemHeight = remToPx(2);
    const height = isPresent
        ? Math.max(1, visibleSections.length) * itemHeight
        : itemHeight;
    const top =
        group.links?.findIndex((link) => link.href === pathname) * itemHeight +
        firstVisibleSectionIndex * itemHeight;

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            exit={{ opacity: 0 }}
            className="bg-zinc-800/2.5 dark:bg-white/2.5 absolute inset-x-0 top-0 will-change-transform"
            style={{ borderRadius: 8, height, top }}
        />
    );
}
