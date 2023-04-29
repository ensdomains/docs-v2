import '@/styles/tailwind.css';
import 'focus-visible';

import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';
import { FC } from 'react';

import { Layout } from '@/components/Layout';
import { mdxComponents } from '@/components/mdx/index';
import { useMobileNavigationStore } from '@/hooks/mobile';

function onRouteChange() {
    useMobileNavigationStore.getState().close();
}

Router.events.on('hashChangeStart', onRouteChange);
Router.events.on('routeChangeComplete', onRouteChange);
Router.events.on('routeChangeError', onRouteChange);

const App = ({ Component, pageProps }) => {
    const router = useRouter();

    return (
        <>
            <Head>
                {router.pathname === '/' ? (
                    <title>ENS Dev Documentation</title>
                ) : (
                    <title>{`${pageProps.title} - ENS Documentation`}</title>
                )}
                <meta name="description" content={pageProps.description} />
            </Head>
            <MDXProvider components={mdxComponents as Record<string, FC>}>
                <Layout {...pageProps}>
                    <Component {...pageProps} />
                </Layout>
            </MDXProvider>
        </>
    );
};

export default App;
