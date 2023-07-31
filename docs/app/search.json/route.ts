import { NextResponse } from 'next/server';

import { getAllPagesSlug, getPageBySlug } from '@/lib/pages';

export async function GET() {
    const slugs = getAllPagesSlug();

    const posts = await Promise.all(
        slugs.map(async (slug) => {
            const page = await getPageBySlug(slug);

            return {
                ...page,
                slug,
            };
        })
    );

    const data = posts.map((post) => ({
        ...post.pageProperties.meta,
        slug: post.slug,
        content: post.pageProperties.plainContent,
    }));

    return NextResponse.json(data);
}
