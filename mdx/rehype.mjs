import { slugifyWithCounter } from '@sindresorhus/slugify';
import * as acorn from 'acorn';
import { toString } from 'mdast-util-to-string';
import { mdxAnnotations } from 'mdx-annotations';
import rehypeMdxTitle from 'rehype-mdx-title';
import shiki from 'shiki';
import { visit } from 'unist-util-visit';

function rehypeParseCodeBlocks() {
    return (tree) => {
        visit(tree, 'element', (node, _nodeIndex, parentNode) => {
            if (node.tagName === 'code' && node.properties.className) {
                parentNode.properties.language =
                    node.properties.className[0]?.replace(/^language-/, '');
            }
        });
    };
}

let highlighter;

function rehypeShiki() {
    return async (tree) => {
        // lightHighlighter =
        //     lightHighlighter ??
        //     (await shiki.getHighlighter({ theme: 'min-light' }));
        highlighter =
            highlighter ??
            (await shiki.getHighlighter({ theme: 'css-variables' }));

        visit(tree, 'element', (node) => {
            if (
                node.tagName === 'pre' &&
                node.children[0]?.tagName === 'code'
            ) {
                const codeNode = node.children[0];
                const textNode = codeNode.children[0];

                node.properties.code = textNode.value;

                if (node.properties.language) {
                    const lightTokens = highlighter.codeToThemedTokens(
                        textNode.value,
                        node.properties.language
                    );

                    const renderLight = shiki.renderToHtml(lightTokens, {
                        elements: {
                            pre: ({ children }) => children,
                            code: ({ children }) => children,
                            line: ({ children }) => children,
                        },
                    });

                    textNode.value = renderLight;
                }
            }
        });
    };
}

function rehypeSlugify() {
    return (tree) => {
        const slugify = slugifyWithCounter();

        visit(tree, 'element', (node) => {
            if (node.tagName === 'h2' && !node.properties.id) {
                node.properties.id = slugify(toString(node));
            }
        });
    };
}

function rehypeAddMDXExports(getExports) {
    return (tree) => {
        const exports = Object.entries(getExports(tree));

        for (const [name, value] of exports) {
            for (const node of tree.children) {
                if (
                    node.type === 'mdxjsEsm' &&
                    new RegExp(`export\\s+const\\s+${name}\\s*=`).test(
                        node.value
                    )
                ) {
                    return;
                }
            }

            const exportString = `export const ${name} = ${value}`;

            tree.children.push({
                type: 'mdxjsEsm',
                value: exportString,
                data: {
                    estree: acorn.parse(exportString, {
                        sourceType: 'module',
                        ecmaVersion: 'latest',
                    }),
                },
            });
        }
    };
}

function getSections(node) {
    const sections = [];

    for (const child of node.children ?? []) {
        if (child.type === 'element' && child.tagName === 'h2') {
            sections.push(`{
        title: ${JSON.stringify(toString(child))},
        id: ${JSON.stringify(child.properties.id)},
        ...${child.properties.annotation}
      }`);
        } else if (child.children) {
            sections.push(...getSections(child));
        }
    }

    return sections;
}

export const rehypePlugins = [
    mdxAnnotations.rehype,
    rehypeParseCodeBlocks,
    rehypeShiki,
    rehypeSlugify,
    rehypeMdxTitle,
    [
        rehypeAddMDXExports,
        (tree) => ({
            sections: `[${getSections(tree).join(',')}]`,
        }),
    ],
];
