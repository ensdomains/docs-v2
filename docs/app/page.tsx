import { getPageBySlug } from 'data/get_page';
import { ResolvingMetadata } from 'next';

import { Layout } from '@/layout/PageLayout';
import { createMetadata } from '@/lib/metadata';

export const generateMetadata = async (_x: any, parent: ResolvingMetadata) => {
    const {
        pageProperties: { meta },
    } = await getPageBySlug('index');
    const parentMetadata = await parent;

    return createMetadata(
        {
            title: 'ENS Documentation',
            description: meta.description,
            path: '/',
        },
        parentMetadata,
        { openGraph: { type: 'article' } }
    );
};

export default async function Page() {
    const { Page, pageProperties } = await getPageBySlug('index');

    return (
        <Layout mdxProperties={pageProperties}>
            <Page {...pageProperties} />
        </Layout>
    );
}
