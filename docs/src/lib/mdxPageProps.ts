/* eslint-disable unicorn/prevent-abbreviations */
import { z } from 'zod';

export const mdxPagePropsSchema = z
    .object({
        /**
         * Auto generated title from first h1 element
         */
        title: z.string(),
        /**
         * Meta data
         */
        meta: z.object({
            /**
             * Optional title, defaults to auto generated title
             */
            title: z.string().default(''),
            description: z.string(),
            /**
             * Optional list of github usernames of contributors
             * @example ['lucemans', 'svemat01']
             */
            contributors: z.array(z.string()).optional(),
        }),
        sections: z.array(
            z.object({
                title: z.string(),
                navtitle: z.string(),
                id: z.string(),
            })
        ),
    })
    .passthrough();

export type MdxPageProps = z.infer<typeof mdxPagePropsSchema>;
export type MdxMetaProps = z.infer<typeof mdxPagePropsSchema['shape']['meta']>;
