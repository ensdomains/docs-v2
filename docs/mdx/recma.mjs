import { generate } from 'astring';
import { mdxAnnotations } from 'mdx-annotations';
import { writeFile } from 'node:fs/promises';
// import recmaNextjsStaticProps from 'recma-nextjs-static-props';
import { simpleGit } from 'simple-git';

function recmaRemoveNamedExports() {
    return (tree) => {
        tree.body = tree.body.map((node) => {
            if (node.type === 'ExportNamedDeclaration') {
                return node.declaration;
            }

            return node;
        });
    };
}

/**
 * @type {import('unified').Plugin<[], import('estree').Program>}
 */
const recmaExportFilepath = () => {
    return (tree, file) => {
        const relativePath = file.path.replace(file.cwd, '');

        tree.body.push({
            type: 'ExportNamedDeclaration',
            declaration: {
                type: 'VariableDeclaration',
                kind: 'const',
                declarations: [
                    {
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: 'filepath',
                        },
                        init: {
                            type: 'Literal',
                            value: relativePath,
                        },
                    },
                ],
            },
        });
    };
};

/**
 * @type {import('unified').Plugin<[], import('estree').Program>}
 */
const recmaExportFile = () => {
    return async (tree, file) => {
        const string = generate(tree);

        console.log('mdx file', string);
        // filepath example: file.path = '/home/jakob/dev/v3xlabs/docs-v2/docs/app/FILENAME.mdx';
        // instruction: Save string to a file using fs/promises at file.path but change /app/ to /app-output/
        // Write the code bellow

        await writeFile(file.path.replace('/app/', '/app-output/'), string);
    };
};

/** @type {import('simple-git').SimpleGit} */
let git;

/**
 * @type {import('unified').Plugin<[], import('estree').Program>}
 */
const recmaExportCommit = () => {
    return async (tree, file) => {
        const filePath = file.path;

        if (!git) git = simpleGit();

        const log = await git
            .log({
                file: filePath,
                maxCount: 1,
                format: { hash: '%h', date: '%at' },
            })
            .then((log) => {
                if (log.total === 0) return { hash: 'undefined', date: 0 };

                return {
                    hash: log.latest.hash,
                    date: Number(log.latest.date) * 1000,
                };
            })
            .catch((error) => {
                console.error(error);

                return { hash: 'undefined', date: 0 };
            });

        console.log({ filePath, log });

        tree.body.push({
            type: 'ExportNamedDeclaration',
            declaration: {
                type: 'VariableDeclaration',
                kind: 'const',
                declarations: [
                    {
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: 'commit',
                        },
                        init: {
                            type: 'ObjectExpression',
                            properties: [
                                {
                                    type: 'Property',
                                    key: {
                                        type: 'Identifier',
                                        name: 'hash',
                                    },
                                    value: {
                                        type: 'Literal',
                                        value: log.hash,
                                    },
                                    kind: 'init',
                                },
                                {
                                    type: 'Property',
                                    key: {
                                        type: 'Identifier',
                                        name: 'date',
                                    },
                                    value: {
                                        type: 'Literal',
                                        value: log.date,
                                    },
                                    kind: 'init',
                                },
                            ],
                        },
                    },
                ],
            },
        });
    };
};

// /**
//  * @type {import('unified').Plugin<[], import('estree').Program>}
//  */
// export const recmaSnapshotPlugin = () => {
//     return (tree, file) => {

//         if (tree.)

//     };
// };

export const recmaPlugins = [
    /**
     * Add support for annotations to MDX.
     * An annotation is a JavaScript object associated with an MDX node. The object properties are passed to the resulting JSX element as props.
     * @see https://www.npmjs.com/package/mdx-annotations
     */
    mdxAnnotations.recma,
    /**
     * Add an `export const filepath` to MDX with the relative path to the file.
     */
    recmaExportFilepath,
    /**
     * Add an `export const commit` to MDX with the latest commit hash and date.
     */
    recmaExportCommit,
    // /**
    //  * Remove named exports from MDX.
    //  */
    // recmaRemoveNamedExports,
    // /**
    //  * Add an `export const getStaticProps` to MDX with all top level identifiers.
    //  * @see https://github.com/remcohaszing/recma-nextjs-static-props
    //  */
    // recmaNextjsStaticProps,
    // recmaExportFile,
];
