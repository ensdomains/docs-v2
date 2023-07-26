import clsx from 'clsx';
import { useScroll } from 'framer-motion';
import { useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';
import { FaGithub } from 'react-icons/fa';

import {
    useIsInsideMobileNavigation,
    useMobileNavigationStore,
} from '@/hooks/mobile';
import { ccx } from '@/lib/cx';

import logo from '../../../images/logo.svg';
import mark from '../../../images/mark.svg';
import markDao from '../../../images/mark_dao.svg';
import { Button } from '../../Button';
import { MobileNavigation } from '../../MobileNavigation';
import { MobileSearch, Search } from '../../Search';
import { SubHeader } from '../subheader/SubHeader';
import { PresetSettings } from './PresetSettings';

export const Header = forwardRef<HTMLDivElement, { className?: string }>(
    ({ className }, reference) => {
        const { isOpen: mobileNavIsOpen } = useMobileNavigationStore();
        const isInsideMobileNavigation = useIsInsideMobileNavigation();
        const { pathname } = useRouter();

        const { scrollY } = useScroll();
        const bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9]);
        const bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8]);

        const isDao = pathname.match(/\/dao(\/.*)?/);

        return (
            <motion.div
                ref={reference}
                className={clsx(
                    className,
                    'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-start gap-6 px-4 transition sm:px-6 md:shadow-2xl lg:z-30 lg:px-4',
                    !isInsideMobileNavigation &&
                        'left-0 backdrop-blur-sm dark:backdrop-blur',
                    isInsideMobileNavigation
                        ? 'bg-white dark:bg-zinc-900'
                        : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]'
                )}
                style={
                    {
                        '--bg-opacity-light': bgOpacityLight,
                        '--bg-opacity-dark': bgOpacityDark,
                    } as any
                }
            >
                <SubHeader />
                <div className="flex items-center gap-2">
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
                    <div className="hidden w-fit lg:flex">
                        <Link href={isDao ? '/dao' : '/'} aria-label="Home">
                            <Image
                                src={isDao ? markDao : mark}
                                className="fill-ens-dao-400 ml-1 h-8"
                                alt="ENS Logo"
                                height={'32'}
                            />
                        </Link>
                    </div>

                    <div
                        className={ccx(
                            'rounded-md px-2 text-xs font-bold text-white',
                            isDao ? 'bg-ens-dao-400' : 'bg-ens-500'
                        )}
                    >
                        ALPHA
                    </div>
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
                <div className="flex h-full items-center gap-4">
                    <div className="hidden gap-2 min-[786px]:flex">
                        <Button
                            href="https://app.ens.domains?ref=ens-docs-v2"
                            target="_blank"
                            variant="primary"
                        >
                            App
                        </Button>
                        {isDao ? (
                            <Button href="/" variant="primary" className="">
                                Protocol Docs
                            </Button>
                        ) : (
                            <Button href="/dao" variant="primary" className="">
                                DAO Docs
                            </Button>
                        )}
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
                    <div className="md:dark:bg-white/15 hidden md:block md:h-5 md:w-px md:bg-zinc-900/10" />
                    <PresetSettings />
                    <div className="md:dark:bg-white/15 hidden md:block md:h-5 md:w-px md:bg-zinc-900/10" />
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
    }
);
