'use client';
import clsx from 'clsx';
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';

import { useSectionStore } from '@/components/SectionProvider';
import { Tag } from '@/components/Tag';
import { useIsInsideMobileNavigation } from '@/hooks/mobile';
import { remToPx } from '@/lib/remToPx';

function NavLink({ href, tag, active, isAnchorLink = false, children }) {
    return (
        <Link
            href={href}
            aria-current={active ? 'page' : undefined}
            className={clsx(
                'flex justify-between gap-2 py-1 pr-3 text-sm transition',
                isAnchorLink ? 'pl-7' : 'pl-4',
                active
                    ? 'text-zinc-900 dark:text-white'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
            )}
        >
            <span className="flex items-center gap-1 truncate">{children}</span>
            {tag && (
                <Tag variant="small" color="zinc">
                    {tag}
                </Tag>
            )}
        </Link>
    );
}

function ActivePageMarker({ group, pathname }) {
    const itemHeight = remToPx(2);
    const offset = remToPx(0.25);
    const activePageIndex = group.links.findIndex(
        (link) => link.href === pathname
    );
    const top = offset + activePageIndex * itemHeight;

    return (
        <motion.div
            layout
            className="bg-ens-500 absolute left-2 h-6 w-px"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            exit={{ opacity: 0 }}
            style={{ top }}
        />
    );
}

function useInitialValue(value, condition = true) {
    const initialValue = useRef(value).current;

    return condition ? initialValue : value;
}

function VisibleSectionHighlight({ group, pathname }) {
    const [sections, visibleSections] = useInitialValue(
        [
            useSectionStore((s) => s.sections),
            useSectionStore((s) => s.visibleSections),
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
        group.links.findIndex((link) => link.href === pathname) * itemHeight +
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

export const NavigationGroup = ({ group, className }) => {
    // If this is the mobile navigation then we always render the initial
    // state, so that the state does not change during the close animation.
    // The state will still update when we re-open (re-render) the navigation.
    const isInsideMobileNavigation = useIsInsideMobileNavigation();
    const [pathname, sections] = useInitialValue(
        [usePathname(), useSectionStore((s) => s.sections)],
        isInsideMobileNavigation
    );

    const isActiveGroup =
        group.links.findIndex((link) => link.href === pathname) !== -1;

    return (
        <li className={clsx('relative mt-6', className)}>
            <motion.h2
                layout="position"
                className="text-xs font-semibold text-zinc-900 dark:text-white"
            >
                {group.title}
            </motion.h2>
            <div className="relative mt-3 pl-2">
                <AnimatePresence initial={!isInsideMobileNavigation}>
                    {isActiveGroup && (
                        <VisibleSectionHighlight
                            group={group}
                            pathname={pathname}
                        />
                    )}
                </AnimatePresence>
                <motion.div
                    layout
                    className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
                />
                <AnimatePresence initial={false}>
                    {isActiveGroup && (
                        <ActivePageMarker group={group} pathname={pathname} />
                    )}
                </AnimatePresence>
                <ul className="border-l border-transparent">
                    {group.links.map((link) => (
                        <motion.li
                            key={link.href}
                            layout="position"
                            className="relative"
                        >
                            <NavLink
                                tag={undefined}
                                href={link.href}
                                active={link.href === pathname}
                            >
                                <span>{link.title}</span>
                                {link.external && <FiExternalLink />}
                                {link.wip && (
                                    <div className="text-2xs rounded-md border bg-slate-100 px-2 text-slate-500">
                                        WIP
                                    </div>
                                )}
                            </NavLink>
                            <AnimatePresence mode="popLayout" initial={false}>
                                {link.href === pathname &&
                                    sections.length > 0 && (
                                        <motion.ul
                                            role="list"
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: 1,
                                                transition: { delay: 0.1 },
                                            }}
                                            exit={{
                                                opacity: 0,
                                                transition: { duration: 0.15 },
                                            }}
                                        >
                                            {sections.map((section) => (
                                                <li key={section.id}>
                                                    <NavLink
                                                        active={undefined}
                                                        href={`${link.href}#${section.id}`}
                                                        tag={section.tag}
                                                        isAnchorLink
                                                    >
                                                        {section.navtitle ||
                                                            section.title}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                            </AnimatePresence>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </li>
    );
};
