import { usePathname } from 'next/navigation';

import { navigation } from '@/lib/headers';

import { NavigationGroup } from './navgroup';

export const Navigation = (properties) => {
    const pathname = usePathname();

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
                {activeNavigation &&
                    activeNavigation.map((group, groupIndex) => (
                        <NavigationGroup
                            key={group.title}
                            group={group}
                            className={groupIndex === 0 && 'md:mt-0'}
                        />
                    ))}
            </ul>
        </nav>
    );
};
