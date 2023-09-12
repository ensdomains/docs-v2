import { getPageBySlug } from 'data/get_page';
import { getAllPageSlugs } from 'data/get_pages';
import { NextResponse } from 'next/server';

export async function GET() {
    const slugs = await getAllPageSlugs();

    const posts = await Promise.all(
        slugs.map(async (slug) => {
            const { pageProperties } = await getPageBySlug(slug);

            return {
                pageProperties,
                slug,
            };
        })
    );

    const data = posts.map((post) => ({
        ...post.pageProperties.meta,
        id: post.slug.replace('/', '--').replace(/[^\w-]/g, ''),
        slug: post.slug,
        content: post.pageProperties.plainContent,
    }));

    return NextResponse.json(data);
}
