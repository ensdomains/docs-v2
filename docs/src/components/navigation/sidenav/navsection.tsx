'use client';

import { FC } from 'react';

import { routeGroup } from '@/lib/headers';

import { NavigationGroup } from './navgroup';

export const NavigationSection: FC<{ section: routeGroup; first: boolean }> = ({
    section,
    first,
}) => {
    return (
        <div className="w-full">
            {section.title && (
                <div className="p-4 text-sm font-bold">{section.title}</div>
            )}
            <ul className="pl-6 pr-2">
                {section.links &&
                    section.links.map((group, groupIndex) => (
                        <NavigationGroup
                            key={group.title}
                            group={group}
                            className={groupIndex === 0 && 'md:mt-0'}
                        />
                    ))}
            </ul>
        </div>
    );
};
