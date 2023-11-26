'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navigation } from '@/config/navigation';

import { NavigationGroup } from './navgroup';

export const Navigation = (properties) => {
    const pathname = usePathname();

    const isDAO = pathname.match(/\/dao/);

    const activeNavigation = navigation[isDAO ? 'dao' : 'protocol'];

    const activeSection = activeNavigation.find((group) => {
        return group.activePattern.test(pathname);
    });

    return (
        <nav className="flex h-full flex-col">
            <div className="scrollbar w-full overflow-auto py-[16px]">
                <ul className="border-ens-light-border dark:border-ens-dark-border w-full border-b px-[16px] pb-2">
                    {activeNavigation.map((section, sectionIndex) => (
                        <li key={section.name} className="">
                            <Link
                                href={section.href}
                                className={clsx(
                                    'text-ens-light-text-secondary dark:text-ens-light-text-secondary flex w-full items-center gap-2 rounded-md p-2 text-sm',
                                    section.activePattern.test(pathname)
                                        ? 'bg-ens-light-grey-surface dark:bg-ens-dark-background-surface dark:bg-ens-dark-blue-surface'
                                        : 'bg-ens-light-background-primary dark:bg-ens-dark-background-primary'
                                )}
                            >
                                <span className="text-md aspect-square">
                                    {section.icon}
                                </span>
                                <span>{section.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* {activeSection?.href == section.href && ( */}
                <ul className="space-y-6 px-3">
                    {activeSection.links.map((group, groupIndex) => (
                        <NavigationGroup
                            key={group.title}
                            group={group}
                            className=""
                        />
                    ))}
                </ul>
                {/* )} */}
            </div>
        </nav>
    );
};
