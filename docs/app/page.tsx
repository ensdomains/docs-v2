import { ResolvingMetadata } from 'next';

import { Layout } from '@/components/Layout';
import { createMetadata } from '@/lib/metadata';
import { getPageBySlug } from '@/lib/pages';

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
