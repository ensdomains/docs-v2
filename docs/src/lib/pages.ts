import { MDXProps } from 'mdx/types';
import fs from 'node:fs';
import { join } from 'node:path';
import { JSX } from 'react';

import {
    MdxPageProps as MdxPageProperties,
    mdxPagePropsSchema as mdxPagePropertiesSchema,
} from './mdxPageProps';

const contentDirectory = join(process.cwd(), 'content');

export const getAllPagesSlug = () => {
    const walkSync = (directory: string, filelist: string[] = []) => {
        for (const file of fs.readdirSync(directory)) {
            if (directory === contentDirectory && file === 'index.mdx')
                continue;

            // console.log({ file, directory });
            filelist = fs.statSync(join(directory, file)).isDirectory()
                ? walkSync(join(directory, file), filelist)
                : filelist.concat(
                      join(directory, file)
                          .replace(/\.mdx$/, '')
                          // if filename is index.mdx, then we want to remove the index part
                          .replace(/\/index$/, '')
                  );
        }

        return filelist;
    };

    return walkSync(contentDirectory).map((file) =>
        file.replace(`${contentDirectory}/`, '')
    );
};

export const getPageBySlug = async (
    slug: string
): Promise<{
    Page: (properties: MDXProps) => JSX.Element;
    pageProperties: MdxPageProperties;
}> => {
    const { default: Page, ...rawPageProperties } = (await import(
        `../../content/${slug}.mdx`
    )) as MdxPageProperties & {
        default: (properties: MDXProps) => JSX.Element;
    };

    const pageProperties = mdxPagePropertiesSchema.parse(rawPageProperties);

    if (!pageProperties.meta.title || pageProperties.meta.title == '')
        pageProperties.meta.title = pageProperties.title;

    return {
        pageProperties,
        Page,
    };
};

export const getAllPages = async () => {
    const slugs = getAllPagesSlug();

    return await Promise.all(slugs.map((slug) => getPageBySlug(slug)));
};
