import { mdxAnnotations } from 'mdx-annotations';
import recmaNextjsStaticProps from 'recma-nextjs-static-props';

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
    }
}

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
     * Remove named exports from MDX.
     */
    recmaRemoveNamedExports,
    /**
     * Add an `export const getStaticProps` to MDX with all top level identifiers.
     * @see https://github.com/remcohaszing/recma-nextjs-static-props
     */
    recmaNextjsStaticProps,
];
