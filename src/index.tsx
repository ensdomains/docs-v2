import 'focus-visible';

// import { SkipNavContent } from '@reach/skip-nav';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import React, { useMemo, useState } from 'react';
import innerText from 'react-innertext';

import Head from '../components/Header';
import Navbar from '../components/Navbar';
import { Root } from '../components/root';
import Footer, { NavLinks } from './footer';
import { ActiveAnchor } from './misc/active-anchor';
import defaultConfig from './misc/default.config';
import Theme from './misc/theme';
import Sidebar from './sidebar';
import ToC from './toc';
import { getFSRoute } from './utils/get-fs-route';
import { MenuContext } from './utils/menu-context';
import normalizePages from './utils/normalize-pages';

const titleType = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

function useDirectoryInfo(pageMap) {
    const { locale, defaultLocale, asPath } = useRouter();

    return useMemo(() => {
        const fsPath = getFSRoute(asPath, locale).split('#').at(0);

        return normalizePages({
            list: pageMap,
            locale,
            defaultLocale,
            route: fsPath,
        });
    }, [pageMap, locale, defaultLocale, asPath]);
}

function Body({ meta, config, toc, filepathWithName, navLinks, children }) {
    return (
        <React.Fragment>
            {/* <SkipNavContent /> */}
            {meta.full ? (
                <article className="relative pt-16 w-full overflow-x-hidden">
                    {children}
                </article>
            ) : (
                <article className="docs-container relative pt-16 pb-16 px-6 md:px-8 w-full max-w-full flex min-w-0">
                    <main className="max-w-screen-md w-full mx-auto pt-4 z-10 min-w-0">
                        <Theme components={config.components}>{children}</Theme>
                        <Footer
                            config={config}
                            filepathWithName={filepathWithName}
                        >
                            {navLinks}
                        </Footer>
                    </main>
                    {toc}
                </article>
            )}
        </React.Fragment>
    );
}

const Layout = ({ filename, config: _config, pageMap, meta, children }) => {
    const { route, locale } = useRouter();

    // @TODO: config should be in a context.
    const config = Object.assign({}, defaultConfig, _config);

    const {
        activeType,
        activeIndex,
        // pageDirectories,
        flatPageDirectories,
        docsDirectories,
        flatDirectories,
        flatDocsDirectories,
        directories,
    } = useDirectoryInfo(pageMap);

    const filepath = route.slice(0, route.lastIndexOf('/') + 1);
    const filepathWithName = filepath + filename;
    const titles = React.Children.toArray(children).filter(
        //@ts-ignore
        (child) => child['props'] && titleType.has(child.props.mdxType)
    );
    const titleElement = titles.find(
        //@ts-ignore
        (child) => child.props && child.props.mdxType === 'h1'
    );
    const title =
        meta.title ||
        //@ts-ignore
        (titleElement ? innerText(titleElement.props.children) : 'Untitled');
    const anchors = titles
        .filter(
            (child) =>
                //@ts-ignore
                child.props && (config.floatTOC || child.props.mdxType === 'h2')
        )
        //@ts-ignore
        .map((child) => child.props.children);

    const isRTL = useMemo(() => {
        if (!config.i18n) return config.direction === 'rtl' || undefined;

        const localeConfig = config.i18n.find((l) => l.locale === locale);

        return localeConfig && localeConfig.direction === 'rtl';
    }, [config.i18n, locale]);

    const [menu, setMenu] = useState(false);

    if (activeType === 'nav') {
        return (
            <React.Fragment>
                <Head
                    config={config}
                    title={title}
                    locale={locale}
                    meta={meta}
                />
                <MenuContext.Provider
                    value={{
                        menu,
                        setMenu,
                        //@ts-ignore
                        defaultMenuCollapsed: !!config.defaultMenuCollapsed,
                    }}
                >
                    <div
                        className={cn(
                            'nextra-container main-container flex flex-col',
                            {
                                rtl: isRTL,
                                page: true,
                            }
                        )}
                    >
                        <Navbar
                            config={config}
                            isRTL={isRTL}
                            flatDirectories={flatDirectories}
                            flatPageDirectories={flatPageDirectories}
                        />
                        <ActiveAnchor>
                            <div className="flex flex-1 h-full">
                                <Sidebar
                                    directories={flatPageDirectories}
                                    flatDirectories={flatDirectories}
                                    fullDirectories={directories}
                                    mdShow={false}
                                    config={config}
                                />
                                <Body
                                    meta={meta}
                                    config={config}
                                    filepathWithName={filepathWithName}
                                    navLinks={undefined}
                                    toc={undefined}
                                >
                                    {children}
                                </Body>
                            </div>
                        </ActiveAnchor>
                    </div>
                </MenuContext.Provider>
            </React.Fragment>
        );
    }

    // Docs layout
    return (
        <React.Fragment>
            <Head config={config} title={title} locale={locale} meta={meta} />
            <MenuContext.Provider
                value={{
                    menu,
                    setMenu,
                    //@ts-ignore
                    defaultMenuCollapsed: !!config.defaultMenuCollapsed,
                }}
            >
                <div
                    className={cn(
                        'nextra-container main-container flex flex-col',
                        {
                            rtl: isRTL,
                        }
                    )}
                >
                    <Navbar
                        config={config}
                        isRTL={isRTL}
                        flatDirectories={flatDirectories}
                        flatPageDirectories={flatPageDirectories}
                    />
                    <ActiveAnchor>
                        <div className="flex flex-1 h-full">
                            <Sidebar
                                directories={docsDirectories}
                                flatDirectories={flatDirectories}
                                fullDirectories={directories}
                                anchors={config.floatTOC ? [] : anchors}
                                config={config}
                            />
                            <Body
                                meta={meta}
                                config={config}
                                filepathWithName={filepathWithName}
                                toc={
                                    <ToC
                                        titles={
                                            config.floatTOC ? titles : undefined
                                        }
                                    />
                                }
                                navLinks={
                                    <NavLinks
                                        flatDirectories={flatDocsDirectories}
                                        currentIndex={activeIndex}
                                        config={config}
                                        isRTL={isRTL}
                                    />
                                }
                            >
                                {children}
                            </Body>
                        </div>
                    </ActiveAnchor>
                </div>
            </MenuContext.Provider>
        </React.Fragment>
    );
};

export default (options, config) => (properties) => {
    return (
        <ThemeProvider attribute="class">
            <Root>
                <Layout config={config} {...options} {...properties} />
            </Root>
        </ThemeProvider>
    );
};
