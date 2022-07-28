import 'intersection-observer';

import { MDXProvider } from '@mdx-js/react';
import Slugger from 'github-slugger';
import Link from 'next/link';
import Highlight, { defaultProps } from 'prism-react-renderer';
import React, { useEffect, useMemo, useRef } from 'react';
import innerText from 'react-innertext';

import { useActiveAnchorSet } from './active-anchor';

const THEME = {
    plain: {
        backgroundColor: 'transparent',
    },
    styles: [
        {
            types: ['keyword', 'builtin'],
            style: {
                color: '#ff0078',
                fontWeight: 'bold',
            },
        },
        {
            types: ['comment'],
            style: {
                color: '#999',
                fontStyle: 'italic',
            },
        },
        {
            types: ['variable', 'language-javascript'],
            style: {
                color: '#0076ff',
            },
        },
        {
            types: ['attr-name'],
            style: {
                color: '#d9931e',
                fontStyle: 'normal',
            },
        },
        {
            types: ['boolean', 'regex'],
            style: {
                color: '#d9931e',
            },
        },
    ],
};

const ob = {};
const obCallback = {};
const createOrGetObserver = (rootMargin) => {
    // Only create 1 instance for performance reasons
    if (!ob[rootMargin]) {
        obCallback[rootMargin] = [];
        ob[rootMargin] = new IntersectionObserver(
            (e) => {
                for (const callback of obCallback[rootMargin]) callback(e);
            },
            {
                rootMargin,
                threshold: [0, 1],
            }
        );
    }

    return ob[rootMargin];
};

function useIntersect(margin, reference, callback_) {
    useEffect(() => {
        const callback = (entries) => {
            let e;

            for (const entry of entries) {
                if (entry.target === reference.current) {
                    e = entry;
                    break;
                }
            }

            if (e) callback_(e);
        };

        const observer = createOrGetObserver(margin);

        obCallback[margin].push(callback);

        if (reference.current) observer.observe(reference.current);

        return () => {
            const index = obCallback[margin].indexOf(callback);

            if (index >= 0) obCallback[margin].splice(index, 1);

            if (reference.current) observer.unobserve(reference.current);
        };
    }, []);
}

// Anchor links
const HeaderLink = ({
    tag: Tag,
    children,
    slugger,
    withObserver = true,
    ...properties
}) => {
    const setActiveAnchor = useActiveAnchorSet();
    const obReference = useRef();

    const slug = slugger.slug(innerText(children) || '');
    const anchor = (
        <span className="subheading-anchor" id={slug} ref={obReference} />
    );

    // We are pretty sure that this header link component will not be rerendered
    // separately, so we attach a mutable index property to slugger.
    const index = slugger.index++;

    useIntersect('0px 0px -50%', obReference, (e) => {
        const aboveHalfViewport =
            e.boundingClientRect.y + e.boundingClientRect.height <=
            e.rootBounds.y + e.rootBounds.height;
        const insideHalfViewport = e.intersectionRatio > 0;

        setActiveAnchor((f) => {
            const returnValue = {
                ...f,
                [slug]: {
                    index,
                    aboveHalfViewport,
                    insideHalfViewport,
                },
            };

            let activeSlug;
            let smallestIndexInViewport = Number.POSITIVE_INFINITY;
            let largestIndexAboveViewport = -1;

            for (const s in f) {
                returnValue[s].isActive = false;

                if (
                    returnValue[s].insideHalfViewport &&
                    returnValue[s].index < smallestIndexInViewport
                ) {
                    smallestIndexInViewport = returnValue[s].index;
                    activeSlug = s;
                }

                if (
                    smallestIndexInViewport === Number.POSITIVE_INFINITY &&
                    returnValue[s].aboveHalfViewport &&
                    returnValue[s].index > largestIndexAboveViewport
                ) {
                    largestIndexAboveViewport = returnValue[s].index;
                    activeSlug = s;
                }
            }

            if (returnValue[activeSlug])
                returnValue[activeSlug].isActive = true;

            return returnValue;
        });
    });

    return (
        <Tag {...properties}>
            {anchor}
            <a
                href={'#' + slug}
                className="text-current no-underline no-outline"
            >
                {children}
                <span className="anchor-icon" aria-hidden>
                    #
                </span>
            </a>
        </Tag>
    );
};

const H2 =
    ({ slugger }) =>
    ({ children, ...properties }) => {
        return (
            <HeaderLink tag="h2" slugger={slugger} {...properties}>
                {children}
            </HeaderLink>
        );
    };

const H3 =
    ({ slugger }) =>
    ({ children, ...properties }) => {
        return (
            <HeaderLink tag="h3" slugger={slugger} {...properties}>
                {children}
            </HeaderLink>
        );
    };

const H4 =
    ({ slugger }) =>
    ({ children, ...properties }) => {
        return (
            <HeaderLink tag="h4" slugger={slugger} {...properties}>
                {children}
            </HeaderLink>
        );
    };

const H5 =
    ({ slugger }) =>
    ({ children, ...properties }) => {
        return (
            <HeaderLink tag="h5" slugger={slugger} {...properties}>
                {children}
            </HeaderLink>
        );
    };

const H6 =
    ({ slugger }) =>
    ({ children, ...properties }) => {
        return (
            <HeaderLink tag="h6" slugger={slugger} {...properties}>
                {children}
            </HeaderLink>
        );
    };

const A = ({ children, ...properties }) => {
    const isExternal =
        properties.href && properties.href.startsWith('https://');

    if (isExternal) {
        return (
            <a target="_blank" {...properties}>
                {children}
            </a>
        );
    }

    return (
        <Link href={properties.href}>
            <a {...properties}>{children}</a>
        </Link>
    );
};

const Code = ({ children, className, highlight, ...properties }) => {
    const highlightedRanges = useMemo(() => {
        return highlight
            ? highlight.split(',').map((r) => {
                  if (r.includes('-')) {
                      return r.split('-');
                  }

                  return +r;
              })
            : [];
    }, [highlight]);

    if (!className) return <code {...properties}>{children}</code>;

    // https://mdxjs.com/guides/syntax-highlighting#all-together
    const language = className.replace(/language-/, '');

    return (
        <Highlight
            {...defaultProps}
            code={children.trim()}
            language={language}
            theme={THEME}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <code className={className} style={{ ...style }}>
                    {tokens.map((line, index) => (
                        <div
                            key={index}
                            {...getLineProps({ line, key: index })}
                            style={
                                highlightedRanges.some((r) =>
                                    Array.isArray(r)
                                        ? r.at(0) <= index + 1 &&
                                          index + 1 <= r.at(1)
                                        : r === index + 1
                                )
                                    ? {
                                          background: 'var(--c-highlight)',
                                          margin: '0 -1rem',
                                          padding: '0 1rem',
                                      }
                                    : null
                            }
                        >
                            {line.map((token, key) => (
                                <span
                                    key={key}
                                    {...getTokenProps({ token, key })}
                                />
                            ))}
                        </div>
                    ))}
                </code>
            )}
        </Highlight>
    );
};

const Table = ({ children }) => {
    return (
        <div className="table-container">
            <table>{children}</table>
        </div>
    );
};

const getComponents = (arguments_) => ({
    h2: H2(arguments_),
    h3: H3(arguments_),
    h4: H4(arguments_),
    h5: H5(arguments_),
    h6: H6(arguments_),
    a: A,
    code: Code,
    table: Table,
});

export default ({ components, children }) => {
    const slugger = new Slugger();

    slugger.index = 0;

    return (
        <MDXProvider
            components={{ ...getComponents({ slugger }), ...components }}
        >
            {children}
        </MDXProvider>
    );
};
