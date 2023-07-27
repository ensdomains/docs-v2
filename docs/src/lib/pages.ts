import fs from 'node:fs';
import { join } from 'node:path';

const contentDirectory = join(process.cwd(), 'content');

export type Post = {
    slug: string;
};

export const getAllPagesSlug = () => {
    return (
        fs
            .readdirSync(contentDirectory)
            // ignore index file
            .filter((filename) => filename !== 'index.tsx')
            // remove .mdx extension from filename
            .map((filename) => filename.replace(/\.mdx$/, ''))
    );
};

export const getPageBySlug = async (slug: string): Promise<Post> => {
    const pageModule = await import(`../../content/${slug}.mdx`);

    return {
        slug,
    };
};

export const getAllPages = async () => {
    const slugs = getAllPagesSlug();

    return await Promise.all(slugs.map((slug) => getPageBySlug(slug)));
};
