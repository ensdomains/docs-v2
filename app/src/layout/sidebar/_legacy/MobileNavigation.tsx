'use client';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';

import {
    isRouteGroup,
    navigation,
    routeElement,
    routeGroup,
} from '@/config/navigation';
import { Header } from '@/layout/header/Header';
import {
    IsInsideMobileNavigationContext,
    useIsInsideMobileNavigation,
    useMobileNavigationStore,
} from '@/lib/mobile';

import { MenuIcon } from '../../../components/icons/MenuIcon';
import { XIcon } from '../../../components/icons/XIcon';
import { NavLink } from './navgroup';

export const MobileNavigation = () => {
    const isInsideMobileNavigation = useIsInsideMobileNavigation();
    const { isOpen, toggle, close } = useMobileNavigationStore();
    const ToggleIcon = isOpen ? XIcon : MenuIcon;

    return (
        <IsInsideMobileNavigationContext.Provider value={true}>
            <button
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                aria-label="Toggle navigation"
                onClick={toggle}
            >
                <ToggleIcon className="w-4 stroke-zinc-900 dark:stroke-white" />
            </button>
            {!isInsideMobileNavigation && (
                <Transition.Root show={isOpen} as={Fragment}>
                    <Dialog
                        onClose={close}
                        className="fixed inset-0 z-50 lg:hidden"
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="duration-300 ease-out"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="duration-200 ease-in"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-sm dark:bg-black/40" />
                        </Transition.Child>

                        <Dialog.Panel>
                            <Transition.Child
                                as={Fragment}
                                enter="duration-300 ease-out"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="duration-200 ease-in"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Header />
                            </Transition.Child>

                            <Transition.Child
                                as={Fragment}
                                enter="duration-500 ease-in-out"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="duration-500 ease-in-out"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <motion.div
                                    layoutScroll
                                    className="ring-zinc-900/7.5 fixed bottom-0 left-0 top-14 z-50 w-full overflow-y-auto bg-white pb-8 shadow-lg shadow-zinc-900/10 ring-1 dark:bg-zinc-900 dark:ring-zinc-800 min-[416px]:max-w-sm sm:pl-6"
                                >
                                    {/* <Navigation /> */}
                                    <ActualNavigation />
                                </motion.div>
                            </Transition.Child>
                        </Dialog.Panel>
                    </Dialog>
                </Transition.Root>
            )}
        </IsInsideMobileNavigationContext.Provider>
    );
};

const ActualNavigation = () => {
    const { navStack } = useMobileNavigationStore();

    const activeNavigation = navigation['protocol'];

    return (
        <ul className="mb-32 list-none p-4">
            {navStack.length === 0 ? (
                activeNavigation.map((section, sectionIndex) => (
                    <NavItem
                        key={sectionIndex}
                        item={{
                            title: section.name,
                            links: section.links,
                        }}
                        index={sectionIndex}
                    />
                ))
            ) : (
                <SectionItems />
            )}
        </ul>
    );
};

const SectionItems = () => {
    const { navStack, popNav } = useMobileNavigationStore();

    const activeNavigation = navigation['protocol'];

    const [activeGroup, setActiveGroup] = useState<routeGroup | undefined>();

    useEffect(() => {
        const items = navStack.reduce(
            (accumulator, index) => {
                const item = accumulator.links[index];

                return item && isRouteGroup(item) ? item : accumulator;
            },
            {
                title: 'root',
                links: activeNavigation.map(
                    (section) =>
                        ({
                            title: section.name,
                            links: section.links,
                        } as routeGroup)
                ),
            } as routeGroup
        );

        setActiveGroup(items);
    }, [navStack]);

    return (
        <>
            {/* back button with <FiChevronLeft /> and activeGroup title triggering popNav */}

            <li className="text-ens-light-text-primary dark:text-ens-dark-text-primary py-1.5 text-sm font-bold">
                <button onClick={popNav} className="flex items-center">
                    <FiChevronLeft className='text-xl' />
                    <span className="ml-1">{activeGroup?.title}</span>
                </button>
            </li>

            {/* hr */}
            <div className="border-ens-light-border border-b dark:border-ens-dark-border my-3" />

            {activeGroup?.links.map((group, index) => (
                <NavItem key={group.title} item={group} index={index} />
            ))}
        </>
    );
};

const NavItem = ({ item, index }: { item: routeElement; index: number }) => {
    const { pushNav } = useMobileNavigationStore();
    const pathname = usePathname();

    return 'links' in item ? (
        <li key={item.title} className="">
            <button
                onClick={() => pushNav(index)}
                className="w-full text-ens-light-text-primary hover:bg-ens-light-background-secondary dark:text-ens-dark-text-primary dark:hover:bg-ens-dark-background-secondary flex items-center gap-2 rounded-lg border-none py-2 pl-4 pr-0 text-sm outline-none ring-offset-1 transition"
            >
                <span className="flex items-center gap-1 truncate leading-5">
                    {item.title || 'Untitled'}
                </span>
                <FiChevronRight className="text-xl ml-auto" />
            </button>
        </li>
    ) : (
        <li key={item.href} className="">
            <NavLink
                tag={undefined}
                href={item.href}
                active={item.href === pathname}
            >
                <span>{item.title ?? 'Untitled'}</span>
                {item.external && <FiExternalLink />}
                {item.wip && (
                    <div className="bg-ens-light-blue-surface text-3xs text-ens-light-blue-primary dark:bg-ens-dark-blue-surface dark:text-ens-dark-blue-primary rounded-md px-1 font-bold">
                        {item.wip == 1 ? 'WIP' : `${item.wip}%`}
                    </div>
                )}
                {item.design_wip && (
                    <div className="bg-ens-light-pink-primary dark:bg-ens-dark-pink-primary h-1.5 w-1.5 rounded-full"></div>
                )}
            </NavLink>
        </li>
    );
};
