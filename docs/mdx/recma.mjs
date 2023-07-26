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

export const recmaPlugins = [
    /**
     * Add support for annotations to MDX.
     * An annotation is a JavaScript object associated with an MDX node. The object properties are passed to the resulting JSX element as props.
     * @see https://www.npmjs.com/package/mdx-annotations
     */
    mdxAnnotations.recma,
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
