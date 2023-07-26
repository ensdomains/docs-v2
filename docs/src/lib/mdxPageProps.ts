/* eslint-disable unicorn/prevent-abbreviations */
import { z } from 'zod';

export const mdxPagePropsSchema = z
    .object({
        /**
         * Auto generated title from first h1 element
         */
        title: z.string().optional(),
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
             * Wether or not to show the details section
             */
            showDetailsSection: z.boolean().default(true),
            /**
             * Optional list of github usernames of contributors
             * @example ['lucemans', 'svemat01']
             */
            contributors: z
                .array(
                    // Validate using github username regex (source: https://github.com/shinnn/github-username-regex/blob/master/index.js)
                    z.string().regex(/^[\da-z](?:[\da-z]|-(?=[\da-z])){0,38}$/i)
                )
                .optional(),
        }),
        sections: z.array(
            z.object({
                title: z.string(),
                navtitle: z.string(),
                id: z.string(),
            })
        ),
        filepath: z.string({
            errorMap: (error, ctx) => {
                if (
                    error.code === z.ZodIssueCode.invalid_type &&
                    error.received === 'undefined'
                ) {
                    return {
                        message:
                            'Missing filepath variable from recmaExportFilepath plugin',
                    };
                }

                return { message: ctx.defaultError };
            },
        }),
    })
    .passthrough();

export type MdxPageProps = z.infer<typeof mdxPagePropsSchema>;
export type MdxMetaProps = z.infer<typeof mdxPagePropsSchema['shape']['meta']>;
