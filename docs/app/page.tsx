import { ResolvingMetadata } from 'next';

import { Layout } from '@/components/Layout';
import { createMetadata } from '@/lib/metadata';
import { getPageBySlug } from '@/lib/pages';

type PageProperties = {
    params: { slug: string[] };
};

export const generateMetadata = async (
    { params }: PageProperties,
    parent: ResolvingMetadata
) => {
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

export default async function Page({ params }: PageProperties) {
    const { Page, pageProperties } = await getPageBySlug('index');

    return (
        <Layout mdxProperties={pageProperties}>
            <Page {...pageProperties} />
        </Layout>
    );
}
