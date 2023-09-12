import { ReactNode } from 'react';

import { navigation as daoNavigation } from './navigation/dao';
import { navigation as protocolNavigation } from './navigation/protocol';

export type SectionData = {
    name: string;
    href: string;
    icon: ReactNode;
    activePattern?: RegExp;
    links: routeGroup[];
};

export type routeLink = {
    title: string;
    href: string;
    external?: boolean;
    wip?: boolean;
};

export type routeGroup = {
    title: string;
    links: (routeLink | routeGroup)[];
};

export const navigation = {
    dao: daoNavigation,
    protocol: protocolNavigation,
};
