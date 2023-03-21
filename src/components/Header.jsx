import { forwardRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

import { Button } from '@/components/Button';
import { HLogo, Logo } from '@/components/Logo';
import {
    MobileNavigation,
    useIsInsideMobileNavigation,
} from '@/components/MobileNavigation';
import { useMobileNavigationStore } from '@/components/MobileNavigation';
import { ModeToggle } from '@/components/ModeToggle';
import { MobileSearch, Search } from '@/components/Search';
import logo from '@/images/logo.svg';
import mark from '@/images/mark.svg';
import Image from 'next/image';

function TopLevelNavItem({ href, children, ...props }) {
    return (
        <li>
            <Link
                href={href}
                className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                {...props}
            >
                {children}
            </Link>
        </li>
    );
}

export const Header = forwardRef(function Header({ className }, ref) {
    let { isOpen: mobileNavIsOpen } = useMobileNavigationStore();
    let isInsideMobileNavigation = useIsInsideMobileNavigation();

    let { scrollY } = useScroll();
    let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9]);
    let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8]);

    return (
        <motion.div
            ref={ref}
            className={clsx(
                className,
                'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-start gap-6 px-4 transition sm:px-6 lg:z-30 lg:px-4',
                !isInsideMobileNavigation &&
                    'backdrop-blur-sm dark:backdrop-blur left-0',
                isInsideMobileNavigation
                    ? 'bg-white dark:bg-zinc-900'
                    : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]'
            )}
            style={{
                '--bg-opacity-light': bgOpacityLight,
                '--bg-opacity-dark': bgOpacityDark,
            }}
        >
            <div className="flex items-center gap-5 lg:hidden">
                <MobileNavigation />
                <Link href="/" aria-label="Home">
                    <Image
                        src={logo}
                        className="h-8"
                        alt="ENS Logo"
                        height={'32'}
                    />
                </Link>
            </div>
            <div className="hidden lg:flex w-fit">
                <Link href="/" aria-label="Home">
                    <Image
                        src={mark}
                        className="h-8 ml-1"
                        alt="ENS Logo"
                        height={'32'}
                    />
                </Link>
            </div>
            <div
                className={clsx(
                    'absolute inset-x-0 top-full h-px transition',
                    (isInsideMobileNavigation || !mobileNavIsOpen) &&
                        'bg-zinc-900/7.5 dark:bg-white/7.5'
                )}
            />
            <Search />
            <div className="h-full w-auto grow"></div>
            <div className="flex gap-4 items-center">
                <div className="hidden min-[786px]:flex gap-2">
                    <Button
                        href="https://app.ens.domains?ref=ens-docs-v2"
                        target="_blank"
                        variant="primary"
                    >
                        Manager App
                    </Button>
                    <Button
                        href="https://alpha.ens.domains?ref=ens-docs-v2"
                        target="_blank"
                        variant="red"
                    >
                        Manager v3 (Goerli only)
                    </Button>
                </div>
                {/* <nav className="hidden md:block">
                    <ul role="list" className="flex items-center gap-4">
                        <TopLevelNavItem
                            href="https://eips.ethereum.org/EIPS/eip-137"
                            target="_blank"
                        >
                            x
                        </TopLevelNavItem>
                        <TopLevelNavItem href="/">x</TopLevelNavItem>
                        <TopLevelNavItem
                            href="https://support.ens.domains/?ref=docs"
                            target="_blank"
                        >
                            x
                        </TopLevelNavItem>
                    </ul>
                </nav> */}
                <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
                <div className="flex gap-4">
                    <MobileSearch />
                    <Link
                        href="https://github.com/ensdomains/docs-v2"
                        target="_blank"
                    >
                        <FaGithub
                            size={'1.4rem'}
                            className="opacity-90 hover:opacity-100"
                        />
                    </Link>
                    {/* <ModeToggle /> */}
                </div>
            </div>
        </motion.div>
    );
});
