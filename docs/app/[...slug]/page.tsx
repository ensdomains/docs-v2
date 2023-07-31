import { ResolvingMetadata } from 'next';

import { Layout } from '@/components/Layout';
import { createMetadata } from '@/lib/metadata';
import { getAllPagesSlug, getPageBySlug } from '@/lib/pages';

type PageProperties = {
    params: { slug: string[] };
};

export const generateMetadata = async (
    { params }: PageProperties,
    parent: ResolvingMetadata
) => {
    const {
        pageProperties: { meta },
    } = await getPageBySlug(params.slug.join('/'));
    const parentMetadata = await parent;

    return createMetadata(
        {
            title: `${meta.title} | ENS Docs`,
            description: meta.description,
            path: params.slug.join('/'),
        },
        parentMetadata,
        { openGraph: { type: 'article' } }
    );
};

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function generateStaticParams() {
    const pages = getAllPagesSlug();

    return pages.map((slug) => ({
        slug: slug.split('/'),
    }));
}

const Page = async ({ params }: PageProperties) => {
    const { Page, pageProperties } = await getPageBySlug(params.slug.join('/'));

    return (
        <Layout mdxProperties={pageProperties}>
            <Page {...pageProperties} />
        </Layout>
    );
};

export default Page;
