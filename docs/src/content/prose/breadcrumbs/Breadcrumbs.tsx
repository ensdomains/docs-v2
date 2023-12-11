'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome } from 'react-icons/fa';

import {
    isRouteLink,
    isSectionData,
    routeElement,
    routeGroup,
} from '@/config/navigation';
import { navigation } from '@/config/navigation/protocol';

const getPageAndGroup = (
    routes: routeGroup[],
    path: string
): routeElement[] | undefined => {
    for (const group of routes) {
        for (const link of group.links) {
            if (isRouteLink(link) && link.href == path) {
                return [group, link];
            }
        }
    }

    return undefined;
};

export const Breadcrumbs = () => {
    const path = usePathname();

    const section = navigation.find((section) =>
        section.activePattern.test(path)
    );

    const [group, page] = getPageAndGroup(section.links, path) || [
        undefined,
        undefined,
    ];

    const crumbs = [section, group, page].filter((a) => !!a);

    const crumbs2 = crumbs.map((crumb) => {
        if (isSectionData(crumb)) {
            return (
                <Link
                    href={crumb.href}
                    className="text-inherit hover:text-inherit"
                >
                    {crumb.name}
                </Link>
            );
        }

        if (isRouteLink(crumb)) {
            return (
                <Link
                    href={crumb.href}
                    className="text-inherit hover:text-inherit"
                >
                    {crumb.title}
                </Link>
            );
        }

        return crumb.title;
    });

    return (
        <nav className="breadcrumb" aria-label="Breadcrumb">
            <ul className="flex items-center gap-1">
                {/* Todo make this work */}
                {[
                    <Link
                        href="/"
                        className="text-inherit hover:scale-105 hover:text-inherit"
                    >
                        <FaHome className="text-md" />
                    </Link>,
                    ...crumbs2,
                ]
                    .filter((a) => !!a)
                    .map((item, index, array) => (
                        <li
                            key={index}
                            aria-current={
                                array.length - 1 == index ? 'page' : undefined
                            }
                            className="flex items-center"
                        >
                            {item}
                        </li>
                    ))}
            </ul>
        </nav>
    );
};
