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
            <div className="border-b px-2 py-4">
                <ul className="flex w-full flex-col gap-1">
                    {activeNavigation.map((section, sectionIndex) => (
                        <li key={section.name} className="w-full">
                            <Link
                                href={section.href}
                                className={clsx(
                                    'flex w-full items-center gap-2 rounded-md p-2 text-sm',
                                    section.activePattern.test(pathname)
                                        ? 'bg-ens-200/50 text-ens-700'
                                        : 'hover:bg-[#f5f5f5]'
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
            </div>
            <div className="scrollbar w-full overflow-auto py-4">
                <ul className="space-y-6 pl-2">
                    {activeSection &&
                        activeSection.links.map((group, groupIndex) => (
                            <NavigationGroup
                                key={group.title}
                                group={group}
                                className=""
                            />
                        ))}
                </ul>
            </div>
        </nav>
    );
};
