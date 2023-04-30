import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import {
    Children,
    createContext,
    FC,
    PropsWithChildren,
    ReactElement,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import { Tag } from '@/components/Tag';
import { usePreferredLanguageStore } from '@/hooks/preferredLanguage';

const languageNames = {
    js: 'JavaScript',
    ts: 'TypeScript',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    php: 'PHP',
    python: 'Python',
    ruby: 'Ruby',
    go: 'Go',
};

function getPanelTitle({ title, language }) {
    return title ?? languageNames[language] ?? 'Code';
}

function ClipboardIcon(properties) {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true" {...properties}>
            <path
                strokeWidth="0"
                d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
            />
            <path
                fill="none"
                strokeLinejoin="round"
                d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
            />
        </svg>
    );
}

function CopyButton({ code }) {
    const [copyCount, setCopyCount] = useState(0);
    const copied = copyCount > 0;

    useEffect(() => {
        if (copyCount > 0) {
            const timeout = setTimeout(() => setCopyCount(0), 1000);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [copyCount]);

    return (
        <button
            type="button"
            className={clsx(
                'group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100',
                copied
                    ? 'bg-ens-400/10 ring-1 ring-inset ring-ens-400/20'
                    : 'bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5'
            )}
            onClick={() => {
                window.navigator.clipboard.writeText(code).then(() => {
                    setCopyCount((count) => count + 1);
                });
            }}
        >
            <span
                aria-hidden={copied}
                className={clsx(
                    'pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300',
                    copied && '-translate-y-1.5 opacity-0'
                )}
            >
                <ClipboardIcon className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400" />
                Copy
            </span>
            <span
                aria-hidden={!copied}
                className={clsx(
                    'pointer-events-none absolute inset-0 flex items-center justify-center text-ens-400 transition duration-300',
                    !copied && 'translate-y-1.5 opacity-0'
                )}
            >
                Copied!
            </span>
        </button>
    );
}

function CodePanelHeader({ tag, label }) {
    if (!tag && !label) {
        return;
    }

    return (
        <div className="flex h-9 items-center gap-2 border-y border-t-transparent border-b-white/7.5 bg-zinc-900 bg-white/2.5 px-4 dark:border-b-white/5 dark:bg-white/1">
            {tag && (
                <div className="dark flex">
                    <Tag variant="small">{tag}</Tag>
                </div>
            )}
            {tag && label && (
                <span className="h-0.5 w-0.5 rounded-full bg-zinc-500" />
            )}
            {label && (
                <span className="font-mono text-xs text-zinc-400">{label}</span>
            )}
        </div>
    );
}

type CodePanelProperties = {
    tag?: string;
    label?: string;
    code?: string;
    hideCopy?: boolean;
    meta?: string;
};

const CodePanel: FC<CodePanelProperties & PropsWithChildren> = ({
    tag,
    label,
    code,
    hideCopy,
    children,
    meta,
}) => {
    const preReference = useRef<HTMLPreElement>(null);
    const child = Children.only(children) as ReactElement;

    const focus = useMemo<number[]>(() => {
        if (!meta || !meta.includes('focus=')) return [];

        const focus = meta.split('focus=')[1].split(',');

        return focus.reduce((accumulator, part) => {
            const range = part.split(':');

            if (range.length === 1) {
                accumulator.push(Number.parseInt(range[0]) - 1);
            } else {
                const start = Number.parseInt(range[0]) - 1;
                const end = Number.parseInt(range[1]);

                for (let index = start; index < end; index++) {
                    accumulator.push(index);
                }
            }

            return accumulator;
        }, [] as number[]);
    }, [meta]);

    useEffect(() => {
        if (focus.length === 0 || !preReference.current) return;

        [...(preReference.current.children[0].children as any)].map(
            (node, index) => {
                if (focus.includes(index)) {
                    node.classList.add(
                        'bg-ens-400/5',
                        'w-full',
                        'inline-block'
                    );
                } else {
                    node.classList.add(
                        'opacity-40',
                        'blur-xs',
                        'group-hover:blur-0',
                        'group-hover:opacity-100',
                        'transition-all'
                    );
                }
            }
        );
    }, [focus]);

    return (
        <div className="group dark:bg-white/2.5">
            <CodePanelHeader
                tag={child.props.tag ?? tag}
                label={child.props.label ?? label}
            />
            <div className="relative">
                <pre
                    className="overflow-x-auto p-4 text-xs text-black"
                    ref={preReference}
                >
                    {children}
                </pre>
                {child.props.hideCopy || (
                    <CopyButton code={child.props.code ?? code} />
                )}
            </div>
        </div>
    );
};

type CodeGroupHeaderProperties = {
    title?: string;
    selectedIndex?: number;
};

export const CodeGroupHeader: FC<
    PropsWithChildren & CodeGroupHeaderProperties
> = ({ title, children, selectedIndex }) => {
    const hasTabs = Children.count(children) > 1;

    if (!title && !hasTabs) {
        return;
    }

    return (
        <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b bg-neutral-50 border-zinc-700 dark:bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
            {title && (
                <h3 className="mr-auto pt-3 text-xs font-semibold text-black dark:text-white">
                    {title}
                </h3>
            )}
            {hasTabs && (
                <Tab.List className="-mb-px flex gap-4 text-xs font-medium">
                    {Children.map(
                        children,
                        (child: ReactElement, childIndex) => (
                            <Tab
                                className={clsx(
                                    'border-b py-3 transition focus:[&:not(:focus-visible)]:outline-none',
                                    childIndex === selectedIndex
                                        ? 'border-ens-500 text-ens-400'
                                        : 'border-transparent text-zinc-400 hover:text-zinc-300'
                                )}
                            >
                                {getPanelTitle(child.props)}
                            </Tab>
                        )
                    )}
                </Tab.List>
            )}
        </div>
    );
};

const CodeGroupPanels: FC<PropsWithChildren> = ({
    children,
    ...properties
}) => {
    const hasTabs = Children.count(children) > 1;

    if (hasTabs) {
        return (
            <Tab.Panels>
                {Children.map(children, (child) => (
                    <Tab.Panel>
                        <CodePanel {...properties}>{child}</CodePanel>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        );
    }

    return <CodePanel {...properties}>{children}</CodePanel>;
};

function usePreventLayoutShift() {
    const positionReference = useRef<HTMLDivElement>();
    const rafReference = useRef<any>();

    useEffect(() => {
        return () => {
            window.cancelAnimationFrame(rafReference.current as any as number);
        };
    }, []);

    return {
        positionRef: positionReference,
        preventLayoutShift(callback) {
            if (positionReference.current) {
                const initialTop =
                    positionReference.current.getBoundingClientRect().top;

                callback();

                rafReference.current = window.requestAnimationFrame(() => {
                    const newTop =
                        positionReference.current?.getBoundingClientRect().top;

                    window.scrollBy(0, newTop - initialTop);
                }) as any;
            }
        },
    };
}

function useTabGroupProperties(availableLanguages) {
    const { preferredLanguages, addPreferredLanguage } =
        usePreferredLanguageStore();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const activeLanguage = [...availableLanguages].sort(
        (a, z) => preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a)
    )[0];

    const languageIndex = availableLanguages.indexOf(activeLanguage);
    const newSelectedIndex =
        languageIndex === -1 ? selectedIndex : languageIndex;

    if (newSelectedIndex !== selectedIndex) {
        setSelectedIndex(newSelectedIndex);
    }

    const { positionRef, preventLayoutShift } = usePreventLayoutShift();

    return {
        as: 'div',
        ref: positionRef,
        selectedIndex,
        onChange: (newSelectedIndex) => {
            preventLayoutShift(() =>
                addPreferredLanguage(availableLanguages[newSelectedIndex])
            );
        },
    };
}

const CodeGroupContext = createContext(false);

type CodeGroupProperties = {
    title?: string;
};

export const CodeGroup: FC<PropsWithChildren & CodeGroupProperties> = ({
    children,
    title,
    ...properties
}) => {
    const languages = Children.map(children, (child: ReactElement) =>
        getPanelTitle(child.props)
    );

    const tabGroupProperties = useTabGroupProperties(languages);
    const hasTabs = Children.count(children) > 1;
    const Container = hasTabs ? Tab.Group : 'div';
    const containerProperties = hasTabs ? tabGroupProperties : {};
    const headerProperties = hasTabs
        ? { selectedIndex: tabGroupProperties.selectedIndex }
        : {};

    return (
        <CodeGroupContext.Provider value={true}>
            <Container
                {...containerProperties}
                className="not-prose my-6 overflow-hidden rounded-lg bg-[--var(--shiki-color-background)] shadow-sm dark:shadow-md ring-1 ring-black/10 dark:ring-white/10"
            >
                <CodeGroupHeader title={title} {...headerProperties}>
                    {children}
                </CodeGroupHeader>
                <CodeGroupPanels {...properties}>{children}</CodeGroupPanels>
            </Container>
        </CodeGroupContext.Provider>
    );
};

export function Code({ children, ...properties }) {
    const isGrouped = useContext(CodeGroupContext);

    if (isGrouped) {
        return (
            <code
                {...properties}
                dangerouslySetInnerHTML={{ __html: children }}
            />
        );
    }

    return <code {...properties}>{children}</code>;
}

export const Pre: FC<CodeGroupProperties & { children: ReactElement }> = ({
    children,
    ...properties
}) => {
    const isGrouped = useContext(CodeGroupContext);

    if (isGrouped) {
        return children;
    }

    return <CodeGroup {...properties}>{children}</CodeGroup>;
};
