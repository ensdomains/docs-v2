import clsx from 'clsx';
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';

import { Button } from '@/components/Button';
import { useIsInsideMobileNavigation } from '@/components/MobileNavigation';
import { useSectionStore } from '@/components/SectionProvider';
import { Tag } from '@/components/Tag';
import { navigation } from '@/lib/headers';
import { remToPx } from '@/lib/remToPx';

function useInitialValue(value, condition = true) {
    const initialValue = useRef(value).current;

    return condition ? initialValue : value;
}

function TopLevelNavItem({ href, children }) {
    return (
        <li className="md:hidden">
            <Link
                href={href}
                className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
                {children}
            </Link>
        </li>
    );
}

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
            <span className="truncate flex gap-1 items-center">{children}</span>
            {tag && (
                <Tag variant="small" color="zinc">
                    {tag}
                </Tag>
            )}
        </Link>
    );
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
            className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"
            style={{ borderRadius: 8, height, top }}
        />
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
            className="absolute left-2 h-6 w-px bg-ens-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            exit={{ opacity: 0 }}
            style={{ top }}
        />
    );
}

function NavigationGroup({ group, className }) {
    // If this is the mobile navigation then we always render the initial
    // state, so that the state does not change during the close animation.
    // The state will still update when we re-open (re-render) the navigation.
    const isInsideMobileNavigation = useIsInsideMobileNavigation();
    const [router, sections] = useInitialValue(
        [useRouter(), useSectionStore((s) => s.sections)],
        isInsideMobileNavigation
    );

    const isActiveGroup =
        group.links.findIndex((link) => link.href === router.pathname) !== -1;

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
                            pathname={router.pathname}
                        />
                    )}
                </AnimatePresence>
                <motion.div
                    layout
                    className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
                />
                <AnimatePresence initial={false}>
                    {isActiveGroup && (
                        <ActivePageMarker
                            group={group}
                            pathname={router.pathname}
                        />
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
                                href={link.href}
                                active={link.href === router.pathname}
                            >
                                <span>{link.title}</span>
                                {link.external && <FiExternalLink />}
                            </NavLink>
                            <AnimatePresence mode="popLayout" initial={false}>
                                {link.href === router.pathname &&
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
                                                        href={`${link.href}#${section.id}`}
                                                        tag={section.tag}
                                                        isAnchorLink
                                                    >
                                                        {section.title}
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
}

/**
Learn

The Protocol
Resolution
CCIP Cross Chain Interoperability Protocol
DNS-Compatability
Web / Querying

Tools and Libraries
Quickstart
Interfacing with ENS Contracts
Getting Avatars
Sign In With Ethereum (SIWE)
Resolvers

Why Resolvers
Quickstart
Public Resolver
Writing your own resolver
Cross Chain Resolution
Records

Record Types and Standards
Quickstart
Modifying Records
Subnames

Namewrapper
Quickstart
Subdomain for every NFT Holder
Writing your own Subdomain System
Guides

Registering a .eth
Import a DNS name
Identity in your dApps
Subdomains for everyone
The Magic of Multichain

*/

// export const navigation = [
//     {
//         title: '',
//         links: [{ title: 'Welcome', href: '/' }],
//     },
//     {
//         title: 'Learn',
//         links: [
//             { title: 'The Protocol', href: '/learn/protocol' },
//             { title: 'Resolution', href: '/learn/resolution' },
//             {
//                 title: 'CCIP Cross Chain Interoperability Protocol',
//                 href: '/learn/ccip',
//             },
//             { title: 'DNS-Compatability', href: '/learn/dnssec' },
//         ],
//     },
//     {
//         title: 'Web / Querying',
//         links: [
//             { title: 'Tools and Libraries', href: '/web/libraries' },
//             { title: 'Quickstart', href: '/web/quickstart' },
//             {
//                 title: 'Interfacing with ENS Contracts',
//                 href: '/web/interfacing',
//             },
//             { title: 'Getting Avatars', href: '/web/avatars' },
//             { title: 'Sign In With Ethereum (SIWE)', href: '/web/siwe' },
//         ],
//     },
//     {
//         title: 'Resolvers',
//         links: [
//             { title: 'Why Resolvers', href: '/resolvers/about' },
//             { title: 'Quickstart', href: '/resolvers/quickstart' },
//             { title: 'Public Resolver', href: '/resolvers/public-resolver' },
//             {
//                 title: 'Writing your own resolver',
//                 href: '/resolvers/writing-a-resolver',
//             },
//             {
//                 title: 'Cross Chain Resolution',
//                 href: '/resolvers/cross-chain-resolution',
//             },
//         ],
//     },
//     {
//         title: 'Records',
//         links: [
//             { title: 'Record Types and Standards', href: '/records' },
//             { title: 'Quickstart', href: '/records/quickstart' },
//             { title: 'Modifying Records', href: '/records/modify' },
//         ],
//     },
//     {
//         title: 'Subnames',
//         links: [
//             { title: 'Namewrapper', href: '/subnames/wrapper' },
//             { title: 'Quickstart', href: '/subnames/quickstart' },
//             { title: 'Subdomain for every NFT Holder', href: '/subnames/nfts' },
//             {
//                 title: 'Writing your own Subdomain System',
//                 href: '/subnames/writing-a-subdomain-system',
//             },
//         ],
//     },
//     {
//         title: 'Guides',
//         links: [
//             {
//                 title: 'Registering a .eth',
//                 href: 'https://support.ens.domains/docs/core/registration/registration-steps',
//             },
//             {
//                 title: 'Import a DNS name',
//                 href: 'https://support.ens.domains/docs/howto/link-dns-name',
//             },
//             { title: 'Identity in your dApps', href: '/web/quickstart' },
//             { title: 'Subdomains for everyone', href: '/subnames/quickstart' },
//             { title: 'The Magic of Multichain', href: '/learn/ccip' },
//         ],
//     },
// ];

export function Navigation(properties) {
    const { pathname } = useRouter();

    const foundNavigation = navigation.find(
        ([url, group]) => pathname.match(url) && group
    );

    if (!foundNavigation) {
        return;
    }

    const [, activeNavigation] = foundNavigation;

    return (
        <nav {...properties}>
            <ul>
                <TopLevelNavItem
                    href="https://eips.ethereum.org/EIPS/eip-137"
                    target="_blank"
                >
                    Whitepaper
                </TopLevelNavItem>
                <TopLevelNavItem href="/">Documentation</TopLevelNavItem>
                <TopLevelNavItem
                    href="https://support.ens.domains/?ref=docs"
                    target="_blank"
                >
                    Support
                </TopLevelNavItem>
                {activeNavigation &&
                    activeNavigation.map((group, groupIndex) => (
                        <NavigationGroup
                            key={group.title}
                            group={group}
                            className={groupIndex === 0 && 'md:mt-0'}
                        />
                    ))}
                <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
                    <Button href="#" variant="filled" className="w-full">
                        Sign in
                    </Button>
                </li>
            </ul>
        </nav>
    );
}
