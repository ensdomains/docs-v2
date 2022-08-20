/* eslint-disable jsx-a11y/anchor-is-valid */
import { Select } from '@ensdomains/thorin';
import { log } from 'console';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import GitHubIcon from '../src/github-icon';
import LocaleSwitch from '../src/locale-switch';
import Search from '../src/search';
import StorkSearch from '../src/stork-search';
import ThemeSwitch from '../src/theme-switch';
import { getFSRoute } from '../src/utils/get-fs-route';
import useMenuContext from '../src/utils/menu-context';
import renderComponent from '../src/utils/render-component';

export default function Navbar({
    config,
    isRTL,
    flatDirectories,
    flatPageDirectories,
}) {
    const { locale, asPath } = useRouter();
    const router = useRouter();

    const activeRoute = getFSRoute(asPath, locale).split('#').at(0);

    const { menu, setMenu } = useMenuContext();

    return (
        <nav className="flex items-center bg-white z-20 fixed top-0 left-0 right-0 h-16 border-b border-gray-200 px-6 dark:bg-dark dark:border-gray-900 bg-opacity-[.97] dark:bg-opacity-100">
            <div className="h-10 flex flex-shrink-0 items-center mr-4">
                <Link href="/">
                    <a className="h-full flex no-underline text-current items-center hover:opacity-75">
                        {renderComponent(config.logo, { locale })}
                    </a>
                </Link>
            </div>
            <div className="w-full hidden lg:block combofox h-full">
                {/* <Card> */}
                {flatPageDirectories && (
                    <Select
                        label={undefined}
                        autocomplete
                        options={flatPageDirectories.map((page) => {
                            if (page.hidden) return;

                            let href = page.route;

                            // If it's a directory
                            if (page.children) {
                                href = page.firstChildRoute;
                            }

                            const HARD = {
                                user: '📚',
                                developer: '🔧',
                                technical: '👷',
                                governance: '🏛️',
                            };

                            return {
                                value: page.name,
                                label: page.title,
                                prefix: HARD[page.name],
                                route: page.route,
                            };

                            // return (
                            //     <Link href={href} key={page.route}>
                            //         <a
                            //             className={cn(
                            //                 'font-bold no-underline whitespace-nowrap mr-4 hidden md:inline-block',
                            //                 page.route === activeRoute ||
                            //                     activeRoute.startsWith(
                            //                         page.route + '/'
                            //                     )
                            //                     ? 'text-ensl-accent dark:text-ensd-accent'
                            //                     : 'text-gray-500'
                            //             )}
                            //         >
                            //             {page.title}
                            //         </a>
                            //     </Link>
                            // );
                        })}
                        value={
                            flatPageDirectories.find((page) => {
                                if (page.hidden) return;

                                if (activeRoute.startsWith(page.route))
                                    return true;

                                return false;
                            })?.name
                        }
                        onChange={(event) => {
                            const navTo = event.target.value;

                            const findRoute = flatPageDirectories.find(
                                (page) => {
                                    if (page.hidden) return;

                                    if (page.name === navTo) return true;

                                    return false;
                                }
                            )?.route;

                            router.push(findRoute);
                        }}
                        style={{ zIndex: 101 }}
                    />
                )}
                {/* </Card> */}
                {/* {flatPageDirectories &&
                    flatPageDirectories.map((page) => {
                        if (page.hidden) return;

                        let href = page.route;

                        // If it's a directory
                        if (page.children) {
                            href = page.firstChildRoute;
                        }

                        return (
                            <Link href={href} key={page.route}>
                                <a
                                    className={cn(
                                        'font-bold no-underline whitespace-nowrap mr-4 hidden md:inline-block',
                                        page.route === activeRoute ||
                                            activeRoute.startsWith(
                                                page.route + '/'
                                            )
                                            ? 'text-ensl-accent dark:text-ensd-accent'
                                            : 'text-gray-500'
                                    )}
                                >
                                    {page.title}
                                </a>
                            </Link>
                        );
                    })} */}
            </div>

            <div className="flex-1">
                <div className="hidden md:inline-block mr-2">
                    {config.customSearch ||
                        (config.search &&
                            (config.unstable_stork ? (
                                <StorkSearch />
                            ) : (
                                <Search directories={flatDirectories} />
                            )))}
                </div>
            </div>

            {config.darkMode && <ThemeSwitch />}

            {config.i18n && (
                <LocaleSwitch options={config.i18n} isRTL={isRTL} />
            )}

            {(config.projectLink || config.github) && (
                <a
                    className="text-current p-2"
                    href={config.projectLink || config.github}
                    target="_blank"
                >
                    {config.projectLinkIcon ? (
                        renderComponent(config.projectLinkIcon, { locale })
                    ) : (
                        <GitHubIcon height={24} />
                    )}
                </a>
            )}

            <button
                className="block md:hidden p-2"
                onClick={() => setMenu(!menu)}
            >
                <svg
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            <div className="-mr-2" />
        </nav>
    );
}
