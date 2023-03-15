import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';

import { Button } from '@/components/Button';
import { useIsInsideMobileNavigation } from '@/components/MobileNavigation';
import { useSectionStore } from '@/components/SectionProvider';
import { Tag } from '@/components/Tag';
import { remToPx } from '@/lib/remToPx';

function useInitialValue(value, condition = true) {
    let initialValue = useRef(value).current;
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
            <span className="truncate">{children}</span>
            {tag && (
                <Tag variant="small" color="zinc">
                    {tag}
                </Tag>
            )}
        </Link>
    );
}

function VisibleSectionHighlight({ group, pathname }) {
    let [sections, visibleSections] = useInitialValue(
        [
            useSectionStore((s) => s.sections),
            useSectionStore((s) => s.visibleSections),
        ],
        useIsInsideMobileNavigation()
    );

    let isPresent = useIsPresent();
    let firstVisibleSectionIndex = Math.max(
        0,
        [{ id: '_top' }, ...sections].findIndex(
            (section) => section.id === visibleSections[0]
        )
    );
    let itemHeight = remToPx(2);
    let height = isPresent
        ? Math.max(1, visibleSections.length) * itemHeight
        : itemHeight;
    let top =
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
    let itemHeight = remToPx(2);
    let offset = remToPx(0.25);
    let activePageIndex = group.links.findIndex(
        (link) => link.href === pathname
    );
    let top = offset + activePageIndex * itemHeight;

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
    let isInsideMobileNavigation = useIsInsideMobileNavigation();
    let [router, sections] = useInitialValue(
        [useRouter(), useSectionStore((s) => s.sections)],
        isInsideMobileNavigation
    );

    let isActiveGroup =
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
                <ul role="list" className="border-l border-transparent">
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
                                {link.title}
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

export const navigation = [
    {
        title: 'Learn',
        links: [
            { title: 'The Protocol', href: '/' },
            { title: 'Resolution', href: '/resolution' },
            { title: 'CCIP Cross Chain Interoperability Protocol', href: '/ccip' },
            { title: 'DNS-Compatability', href: '/dnssec' },
          ],
    },
    {
        title: 'Web / Querying',
        links: [
            { title: 'Tools and Libraries', href: '/web/libraries' },
            { title: 'Quickstart', href: '/quickstart-dapp' },
            { title: 'Interfacing with ENS Contracts', href: '/interfacing' },
            { title: 'Getting Avatars', href: '/avatars' },
            { title: 'Sign In With Ethereum (SIWE)', href: '/siwe' },
        ],
    },
    {
        title: 'Resolvers',
        links: [
            { title: 'Why Resolvers', href: '/resolvers' },
            { title: 'Quickstart', href: '/quickstart-resolver' },
            { title: 'Public Resolver', href: '/public-resolver' },
            { title: 'Writing your own resolver', href: '/writing-a-resolver' },
            { title: 'Cross Chain Resolution', href: '/cross-chain-resolution' },
        ],
    },
    {
        title: 'Records',
        links: [
            { title: 'Record Types and Standards', href: '/records' },
            { title: 'Quickstart', href: '/quickstart-records' },
            { title: 'Modifying Records', href: '/modifying-records' },
        ],
    },
    {
        title: 'Subnames',
        links: [
            { title: 'Namewrapper', href: '/namewrapper' },
            { title: 'Quickstart', href: '/quickstart-namewrapper' },
            { title: 'Subdomain for every NFT Holder', href: '/subdomains' },
            { title: 'Writing your own Subdomain System', href: '/writing-a-subdomain-system' },
        ],
    },
    {
        title: 'Guides',
        links: [  
            { title: 'Registering a .eth', href: '/registering-a-eth' },
            { title: 'Import a DNS name', href: '/import-a-dns-name' },
            { title: 'Identity in your dApps', href: '/quickstart-dapp' },
            { title: 'Subdomains for everyone', href: '/subdomains-for-everyone' },
            { title: 'The Magic of Multichain', href: '/the-magic-of-multichain' },
        ],

    },
    // {
    //     title: 'Docs',
    //     links: [
    //         { title: 'Introduction', href: '/' },
    //         { title: 'What is ENS?', href: '/foreword' },
    //         { title: 'Libraries', href: '/libraries' },
    //         { title: 'Forward Resolution', href: '/forward-resolution' },
    //         { title: 'Reverse Resolution', href: '/reverse-resolution' },
    //         { title: 'Writing a Resolver', href: '/writing-a-resolver' },
    //         { title: 'Cross Chain Interoperability Protocol', href: '/ccip' },
    //         { title: 'DNS on ENS', href: '/dnssec' },
    //         { title: 'Subdomains', href: '/subdomains' },
    //     ],
    // },
    // {
    //     title: 'Guides',
    //     links: [{ title: 'Identity in your dApps', href: '/quickstart-dapp' }],
    // },
    // {
    //     title: 'Resources',
    //     links: [
    //         { title: 'Discord', href: 'https://chat.ens.domains/?ref=ensdocs' },
    //         {
    //             title: 'Governance Forum',
    //             href: 'https://discuss.ens.domains/?ref=ensdocs',
    //         },
    //         {
    //             title: 'Support Docs',
    //             href: 'https://support.ens.domains/?ref=ensdocs',
    //         },
    //     ],
    // },
];

export function Navigation(props) {
    return (
        <nav {...props}>
            <ul role="list">
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
                {navigation.map((group, groupIndex) => (
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
