import { MDXProps } from 'mdx/types';
import { notFound } from 'next/navigation';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { ReactNode } from 'react';

import {
    MdxPageProps as MdxPageProperties,
    mdxPagePropsSchema as mdxPagePropertiesSchema,
} from '../src/lib/mdxPageProps';

const contentDirectory = join(process.cwd(), '../content');

export const getPageBySlug = async (
    // ex 'index' or 'web' or 'web/quickstart'
    slug: string
): Promise<{
    Page: (properties: MDXProps) => ReactNode;
    pageProperties: MdxPageProperties;
}> => {
    console.log('🔍 -> ' + slug);

    const potentialPaths = [slug, slug + '/index'];
    let foundPath: string | undefined;

    for (const path of potentialPaths) {
        const exists = existsSync(join(contentDirectory, path + '.mdx'));

        if (exists) {
            foundPath = path;
            break;
        }
    }

    if (!foundPath) {
        console.warn('Tried to find page by slug but couldnt find:', slug);

        return notFound();
    }

    const file = await import('../../content/' + foundPath + '.mdx');

    const { default: Page, ...rawPageProperties } =
        file as MdxPageProperties & {
            default: (properties: MDXProps) => ReactNode;
        };

    // const { default: Page, ...rawPageProperties } = (await import(
    //     join(contentDirectory, slug + '.mdx')
    // )) as MdxPageProperties & {
    //     default: (properties: MDXProps) => ReactNode;
    // };

    const pageProperties = mdxPagePropertiesSchema.parse(rawPageProperties);

    // const pageProperties = mdxPagePropertiesSchema.parse(rawPageProperties);

    if (!pageProperties.meta.title || pageProperties.meta.title == '')
        pageProperties.meta.title = pageProperties.title;

    return {
        pageProperties,
        Page,
    };

    // return {
    //     pageProperties: {
    //         title: 'PAGE TITLE',
    //         meta: {
    //             title: 'OTHER TITLE',
    //             contributors: [],
    //             description: 'DESCRIPTION',
    //             emoji: '📖',
    //             showDetailsSection: false,
    //         },
    //     },
    //     Page: () => <div>Page {contentDirectory}</div>,
    // };
};
