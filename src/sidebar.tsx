/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames';
import cn from 'classnames';
import Slugger from 'github-slugger';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import innerText from 'react-innertext';

import { useActiveAnchor } from './misc/active-anchor';
import Search from './search';
import StorkSearch from './stork-search';
import { getFSRoute } from './utils/get-fs-route';
import useMenuContext from './utils/menu-context';

const TreeState = new Map();

function Folder({ item, anchors }) {
    const { asPath, locale } = useRouter();
    const routeOriginal = getFSRoute(asPath, locale);
    const route = routeOriginal.split('#').at(0) + '/';
    const active = route === item.route + '/';
    const { defaultMenuCollapsed } = useMenuContext();
    const open = TreeState[item.route] ?? !defaultMenuCollapsed;
    const [_, render] = useState(false);

    useEffect(() => {
        if (active) {
            TreeState[item.route] = true;
        }
    }, [active]);

    return (
        <li className={classNames(open ? 'active' : '', 'mb-8')}>
            <button
                onClick={() => {
                    if (active) return;

                    TreeState[item.route] = !open;
                    render((x) => !x);
                }}
                className="font-bold"
            >
                {item.title}
            </button>
            <div
                style={{
                    display: open ? 'initial' : 'none',
                }}
            >
                <div className="flex border-l-2 ml-2 border-ensl-borderSecondary">
                    <Menu
                        directories={item.children}
                        base={item.route}
                        anchors={anchors}
                    />
                </div>
            </div>
        </li>
    );
}

function File({ item, anchors }) {
    const { setMenu } = useMenuContext();
    const { asPath, locale } = useRouter();
    const route = getFSRoute(asPath, locale) + '/';
    const active = route === item.route + '/';
    const slugger = new Slugger();
    const activeAnchor = useActiveAnchor();

    const { title } = item;

    // if (item.title.startsWith('> ')) {
    // title = title.substr(2)
    if (anchors && anchors.length > 0 && active) {
        let activeIndex = 0;
        const anchorInfo = anchors.map((anchor, index) => {
            const text = innerText(anchor) || '';
            const slug = slugger.slug(text);

            if (activeAnchor[slug] && activeAnchor[slug].isActive) {
                activeIndex = index;
            }

            return { text, slug };
        });

        return (
            <li className={active ? 'active' : ''}>
                <Link href={item.route}>
                    <a>{title}</a>
                </Link>
                <ul>
                    {anchors.map((_, index) => {
                        const { slug, text } = anchorInfo[index];
                        const isActive = index === activeIndex;

                        return (
                            <li key={`a-${slug}`}>
                                <a
                                    href={'#' + slug}
                                    onClick={() => setMenu(false)}
                                    className={isActive ? 'active-anchor' : ''}
                                >
                                    <span className="flex text-sm">
                                        <span className="opacity-25">#</span>
                                        <span className="mr-2"></span>
                                        <span className="inline-block">
                                            {text}
                                        </span>
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </li>
        );
    }

    return (
        <li className={active ? 'active' : ''}>
            <Link href={item.route}>
                <a onClick={() => setMenu(false)}>{title}</a>
            </Link>
        </li>
    );
}

const Menu: FC<{
    directories: { children: unknown; name: string }[];
    anchors: unknown;
    base?: unknown;
}> = ({ directories, anchors }) => {
    return (
        <ul>
            {directories.map((item) => {
                if (item.children) {
                    return (
                        <Folder key={item.name} item={item} anchors={anchors} />
                    );
                }

                return <File key={item.name} item={item} anchors={anchors} />;
            })}
        </ul>
    );
};

export default function Sidebar({
    directories,
    flatDirectories,
    fullDirectories,
    anchors = [],
    mdShow = true,
    config,
}) {
    const { menu } = useMenuContext();

    useEffect(() => {
        if (menu) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [menu]);

    return (
        <aside
            className={cn(
                'pt-8 ml-8 flex-shrink-0 w-full md:w-64 xl:w-96 md:static mt-16',
                menu ? '' : 'hidden',
                mdShow ? 'md:block' : ''
            )}
            style={{
                top: '4rem',
                height: 'calc(100vh - 4rem)',
            }}
        >
            <div className="sidebar border-gray-200 dark:border-gray-900 w-full p-4 pb-40 md:pb-16 h-full overflow-y-auto">
                <div className="mb-4 block md:hidden">
                    {config.customSearch ||
                        (config.search &&
                            (config.unstable_stork ? (
                                <StorkSearch />
                            ) : (
                                <Search directories={flatDirectories} />
                            )))}
                </div>
                <div className="hidden md:block">
                    <Menu directories={directories} anchors={anchors} />
                </div>
                <div className="md:hidden">
                    <Menu directories={fullDirectories} anchors={anchors} />
                </div>
            </div>
        </aside>
    );
}
