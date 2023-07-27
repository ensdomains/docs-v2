import { getAllPagesSlug } from '@/lib/pages';

type PageProperties = {
    params: { slug: string };
};

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function generateStaticParams() {
    const pages = getAllPagesSlug();

    console.log('pages', pages);

    return pages.map((slug) => ({
        slug: [slug],
    }));
}
export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>;
}
