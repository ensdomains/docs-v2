import logo from './assets/ens_docs_logo.svg';
import ogPreview from './assets/og_preview.png';

export default {
    github: 'https://github.com/ensdomains/docs-v2',
    docsRepositoryBase: 'https://github.com/ensdomains/docs-v2/blob/main',
    titleSuffix: ' — ENS Documentation',
    logo: (
        <>
            <img src={logo.src} alt="ENS Docs" className="h-full" />
        </>
    ),
    head: (
        <>
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="Content-Language" content="en" />
            <meta name="description" content="ENS Documentation" />
            <meta name="og:description" content="ENS Documentation" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={ogPreview.src} />
            <meta name="twitter:site:domain" content="docs.ens.domains" />
            <meta name="twitter:url" content="https://docs.ens.domains" />
            <meta name="og:title" content="ENS Domains Documentation" />
            <meta name="og:image" content={ogPreview.src} />
            <meta name="apple-mobile-web-app-title" content="Nextra" />
            {/* <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicons/apple-icon-180x180.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/favicons/android-icon-192x192.png"
            /> */}
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicons/favicon-32x32.png"
            />
            {/* <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="/favicons/favicon-96x96.png"
            /> */}
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicons/favicon-16x16.png"
            />
            {/* <meta
                name="msapplication-TileImage"
                content="/favicons/ms-icon-144x144.png"
            /> */}
        </>
    ),
    search: true,
    prevLinks: true,
    nextLinks: true,
    footer: true,
    footerEditLink: 'Edit this page on GitHub',
    footerText: <>GPLv3 {new Date().getFullYear()} © ENS Labs</>,
};
