/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import cn from 'classnames';
import GraphemeSplitter from 'grapheme-splitter';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import React, {
    Fragment,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

const splitter = new GraphemeSplitter();

// @ts-ignore
const TextWithHighlights = React.memo(({ content, ranges }) => {
    const splittedText = content ? splitter.splitGraphemes(content) : [];

    // eslint-disable-next-line unicorn/prevent-abbreviations
    const res = [];

    let id = 0,
        index = 0;

    for (const range of ranges) {
        res.push(
            <Fragment key={id++}>
                {splittedText.splice(0, range.beginning - index).join('')}
            </Fragment>,
            <span className="highlight" key={id++}>
                {splittedText.splice(0, range.end - range.beginning).join('')}
            </span>
        );
        index = range.end;
    }
    res.push(<Fragment key={id++}>{splittedText.join('')}</Fragment>);

    return res;
});

const Item = ({ title, active, href, onMouseOver, excerpt }) => {
    return (
        <Link href={href}>
            <a className="block no-underline" onMouseOver={onMouseOver}>
                <li className={cn('py-2 px-4', { active })}>
                    <span className="font-semibold">{title}</span>
                    {excerpt && (
                        <div className="text-gray-600">
                            <TextWithHighlights
                                // @ts-ignore
                                content={excerpt.text}
                                ranges={excerpt.highlight_ranges}
                            />
                        </div>
                    )}
                </li>
            </a>
        </Link>
    );
};

// This can be global for better caching.
const stork = {};

export default function Search() {
    const router = useRouter();

    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');

    const [active, setActive] = useState(0);
    const setStork = useState({}).at(1);

    const input = useRef(null);

    const results = useMemo(() => {
        if (!search) return [];

        const localeCode = Router.locale || 'default';

        if (!stork[localeCode]) return [];

        try {
            const json = stork[localeCode].wasm_search(
                `index-${localeCode}`,
                search
            );
            const object = JSON.parse(json);

            if (!object.results) return [];

            return object.results.slice(0, 20).map((result) => {
                return {
                    title: result.entry.title,
                    route: result.entry.url,
                    excerpt: result.excerpts.at(0),
                };
            });
        } catch (error) {
            console.error(error);

            return [];
        }
    }, [search]);

    const handleKeyDown = useCallback(
        (event) => {
            switch (event.key) {
                case 'ArrowDown': {
                    event.preventDefault();

                    if (active + 1 < results.length) {
                        setActive(active + 1);
                        const activeElement = document.querySelector(
                            `.nextra-stork ul > :nth-child(${active + 2})`
                        );

                        if (
                            activeElement &&
                            // @ts-ignore
                            activeElement.scrollIntoViewIfNeeded
                        ) {
                            // @ts-ignore
                            activeElement.scrollIntoViewIfNeeded();
                        }
                    }

                    break;
                }
                case 'ArrowUp': {
                    event.preventDefault();

                    if (active - 1 >= 0) {
                        setActive(active - 1);
                        const activeElement = document.querySelector(
                            `.nextra-stork ul > :nth-child(${active})`
                        );

                        if (
                            activeElement &&
                            // @ts-ignore
                            activeElement.scrollIntoViewIfNeeded
                        ) {
                            // @ts-ignore
                            activeElement.scrollIntoViewIfNeeded();
                        }
                    }

                    break;
                }
                case 'Enter': {
                    router.push(results[active].route);
                    break;
                }
            }
        },
        [active, results, router]
    );

    const load = async () => {
        const localeCode = Router.locale || 'default';

        if (!stork[localeCode]) {
            stork[localeCode] = await import('./wasm-loader');
            // @ts-ignore
            setStork({});

            const init = stork[localeCode].init('/stork.wasm');
            const response = await fetch(`/index-${localeCode}.st`);

            const buf = await response.arrayBuffer();

            await init;
            stork[localeCode].wasm_register_index(
                `index-${localeCode}`,
                new Uint8Array(buf)
            );
        }
    };

    useEffect(() => {
        setActive(0);
    }, [search]);

    useEffect(() => {
        const inputs = new Set(['input', 'select', 'button', 'textarea']);

        const down = (event) => {
            if (
                document.activeElement &&
                !inputs.has(document.activeElement.tagName.toLowerCase())
            ) {
                if (event.key === '/') {
                    event.preventDefault();
                    input.current.focus();
                } else if (event.key === 'Escape') {
                    setShow(false);
                }
            }
        };

        window.addEventListener('keydown', down);

        return () => window.removeEventListener('keydown', down);
    }, []);

    const renderList = show && results.length > 0;

    return (
        <div className="nextra-search nextra-stork relative w-full md:w-64">
            {renderList && (
                <div
                    className="search-overlay z-10"
                    onClick={() => setShow(false)}
                />
            )}
            <input
                onChange={(event) => {
                    setSearch(event.target.value);
                    setShow(true);
                }}
                className="appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:ring w-full"
                type="search"
                placeholder='Search ("/" to focus)'
                onKeyDown={handleKeyDown}
                onFocus={() => {
                    load();
                    setShow(true);
                }}
                ref={input}
                spellCheck={false}
            />
            {renderList && (
                <ul className="p-0 m-0 mt-1 top-full absolute divide-y z-20">
                    {results.map((response, index) => {
                        return (
                            <Item
                                key={`search-item-${index}`}
                                title={response.title}
                                href={response.route}
                                excerpt={response.excerpt}
                                active={index === active}
                                onMouseOver={() => setActive(index)}
                            />
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
