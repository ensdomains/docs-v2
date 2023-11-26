'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiExternalLink } from 'react-icons/fi';

import { useSectionStore } from '@/components/SectionProvider';
import { Tag } from '@/components/Tag';
import { useIsInsideMobileNavigation } from '@/lib/mobile';
import { remToPx } from '@/lib/remToPx';

import { useInitialValue } from './useInitialValue';

function NavLink({ href, tag, active, isAnchorLink = false, children }) {
    // To hide the sections of a page, uncomment this line:
    if (isAnchorLink) return <></>;

    return (
        <Link
            href={href}
            aria-current={active ? 'page' : undefined}
            className={clsx(
                'flex justify-between gap-2 rounded-lg py-2 pr-0 text-xs transition',
                isAnchorLink ? 'pl-8' : 'pl-4',
                active
                    ? 'text-ens-light-text-primary dark:text-ens-dark-text-primary bg-ens-light-blue-surface dark:bg-ens-dark-blue-surface'
                    : 'text-ens-light-text-primary dark:text-ens-dark-text-primary hover:bg-ens-light-background-secondary dark:hover:bg-ens-dark-background-secondary'
            )}
        >
            <span className="flex items-center gap-1 truncate leading-5">
                {children}
            </span>
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
    const activePageIndex = group.links?.findIndex(
        (link) => link.href === pathname
    );
    const top = offset + activePageIndex * itemHeight;

    return (
        <motion.div
            layout
            className="bg-ens-light-blue-500 absolute left-2 h-6 w-px"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            exit={{ opacity: 0 }}
            style={{ top }}
        />
    );
}

// // Attempt at preventing next.js from rendering the bar in a semi-visible state
// if (typeof window == 'undefined') return <></>;

export const NavigationGroup = ({ group, className }) => {
    // If this is the mobile navigation then we always render the initial
    // state, so that the state does not change during the close animation.
    // The state will still update when we re-open (re-render) the navigation.
    const isInsideMobileNavigation = useIsInsideMobileNavigation();
    const [pathname, sections] = useInitialValue(
        [usePathname(), useSectionStore((s) => s.sections || [])],
        isInsideMobileNavigation
    );

    const isActiveGroup =
        group.links?.findIndex((link) => link.href === pathname) !== -1;

    return (
        <li className={clsx('relative', className)}>
            <motion.h2
                layout="position"
                className="text-ens-light-text-secondary dark:text-ens-dark-text-secondary py-2 pl-0.5 text-xs font-bold leading-5 dark:text-white"
            >
                {group.icon && group.icon + ' '}
                {group.title}
            </motion.h2>
            <div className="relative">
                {/* <AnimatePresence initial={!isInsideMobileNavigation}>
                    {isActiveGroup && (
                        <ClientOnly
                            child={() => {
                                return (
                                    <VisibleSectionHighlight
                                        group={group}
                                        pathname={pathname}
                                    />
                                );
                            }}
                        />
                    )}
                </AnimatePresence>
                <motion.div
                    layout
                    className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
                />
                <AnimatePresence initial={false}>
                    {isActiveGroup && (
                        <ClientOnly
                            child={() => {
                                return (
                                    <ActivePageMarker
                                        group={group}
                                        pathname={pathname}
                                    />
                                );
                            }}
                        />
                    )}
                </AnimatePresence> */}
                <ul className="">
                    {group.links?.map((link) => (
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
                                    <div className="text-3xs dark:text-ens-dark-blue-primary text-ens-light-blue-primary rounded-md">
                                        WIP
                                    </div>
                                )}
                            </NavLink>
                            {/* <AnimatePresence mode="popLayout" initial={false}>
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
                            </AnimatePresence> */}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </li>
    );
};
