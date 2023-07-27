import '@/styles/tailwind.css';
import 'focus-visible';

import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';
import { FC } from 'react';

import { Layout } from '@/components/Layout';
import { mdxComponents } from '@/components/mdx/index';
import { useMobileNavigationStore } from '@/hooks/mobile';
import { mdxPagePropsSchema } from '@/lib/mdxPageProps';

function onRouteChange() {
    useMobileNavigationStore.getState().close();
}

Router.events.on('hashChangeStart', onRouteChange);
Router.events.on('routeChangeComplete', onRouteChange);
Router.events.on('routeChangeError', onRouteChange);

const App = ({ Component, pageProps: rawPageProperties }: AppProps) => {
    const router = useRouter();

    const pageProperties = mdxPagePropsSchema.parse(rawPageProperties);

    if (!pageProperties.meta.title || pageProperties.meta.title == '')
        pageProperties.meta.title = pageProperties.title;

    return (
        <>
            <Head>
                {router.route == '/' ? (
                    <title>ENS Documentation</title>
                ) : (
                    <title>{`${pageProperties.meta.title} | ENS Docs`}</title>
                )}
                <meta
                    name="description"
                    content={pageProperties.meta.description}
                />
            </Head>
            <MDXProvider components={mdxComponents as Record<string, FC>}>
                <Layout mdxProperties={pageProperties}>
                    <Component {...pageProperties} />
                </Layout>
            </MDXProvider>
        </>
    );
};

export default App;
