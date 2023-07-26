import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import {
    Children,
    createContext,
    FC,
    PropsWithChildren,
    ReactElement,
    ReactNode,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { FiPaperclip } from 'react-icons/fi';

import { ClipboardIcon } from '@/components/icons/ClipboardIcon';
import { Tag } from '@/components/Tag';
import {
    PresetConfig,
    useActivePreset,
    useActivePresetConfig,
} from '@/lib/presets';

import { CodeGroupHeader } from '../Code';
import { getCodeData, naiveGetVariant } from './getCodeData';

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

export const CodeGroupContext = createContext(false);

export type CodeGroupProperties = {
    title?: string;
};

export function getPanelTitle({ title, language }) {
    return title ?? languageNames[language] ?? 'Code';
}

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

function useTabGroupProperties(
    codes: {
        element: unknown;
        data: PresetConfig;
        variant: string;
    }[]
) {
    const { setActivePreset } = useActivePreset();
    const { activePreset, config } = useActivePresetConfig();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const { positionRef, preventLayoutShift } = usePreventLayoutShift();

    useEffect(() => {
        const shouldFocusOnIndex = codes.findIndex(
            (v) => v.variant === activePreset
        );

        if (shouldFocusOnIndex < 0) return;

        console.log('PING CHANGE', shouldFocusOnIndex);
        setSelectedIndex(shouldFocusOnIndex);
    }, [activePreset, codes]);

    return {
        as: 'div',
        ref: positionRef,
        selectedIndex,
        onChange: (newSelectedIndex) => {
            preventLayoutShift(() => {
                console.log({ v: codes[newSelectedIndex].variant }, codes);
                setSelectedIndex(newSelectedIndex);
                // setActivePreset(codes[newSelectedIndex].data.language);
                // addPreferredLanguage(availableLanguages[newSelectedIndex])
            });
        },
    };
}

type CodePanelProperties = {
    tag?: string;
    label?: string;
    code?: string;
    hideCopy?: boolean;
    meta?: string;
};

export type CodeGroupHeaderProperties = {
    title?: string;
    selectedIndex?: number;
};

function CodePanelHeader({ tag, label }) {
    if (!tag && !label) {
        return;
    }

    return (
        <div className="border-b-white/7.5 bg-white/2.5 dark:bg-white/1 flex h-9 items-center gap-2 border-y border-t-transparent px-4 dark:border-b-white/5">
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

const onlyChild = (children: unknown | unknown[]) => {
    return Array.isArray(children) ? children[0] : children;
};

const CodePanel: FC<CodePanelProperties & PropsWithChildren> = ({
    tag,
    label,
    code,
    hideCopy: _hideCopy,
    children,
    meta,
}) => {
    const preReference = useRef<HTMLPreElement>(null);
    const child = onlyChild(children) as ReactElement;

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
                    node.classList.add('focus-code');
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
        // eslint-disable-next-line tailwindcss/no-custom-classname
        <div className="dark:bg-white/2.5 group">
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

const getCopiedLabel = (copyCount) => {
    if (copyCount > 120) {
        return 'Copied!';
    }

    if (copyCount > 100) {
        // Writen by co-pilot
        return 'Determination... I like it';
    }

    if (copyCount > 60) {
        // Writen by co-pilot
        return 'Sigh.... you are still copying?';
    }

    if (copyCount > 50) {
        // Writen by co-pilot
        return 'You are a mad lad';
    }

    if (copyCount > 45) {
        // Writen by co-pilot
        return 'Ok... you are just showing off now';
    }

    if (copyCount > 35) {
        // Writen by co-pilot
        return 'I hope you actually know what code youre copying 🤔';
    }

    if (copyCount > 30) {
        // Writen by co-pilot
        return 'BUILD BUILD BUILD BUILD BUILD BUILD!!!!';
    }

    if (copyCount > 25) {
        return 'Coding Powers Unlocked 😎🚀';
    }

    if (copyCount > 20) {
        return 'Seriously? You have got to be kidding right?!';
    }

    if (copyCount > 15) {
        return 'Aaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhh!';
    }

    if (copyCount > 10) {
        return 'Ok chill you have a copy!';
    }

    if (copyCount > 4) {
        return 'Yes its Copied!';
    }

    return 'Copied!';
};

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
        <AnimatePresence>
            <motion.button
                type="button"
                className={clsx(
                    'group/button text-2xs absolute right-4 top-3.5 h-7 w-auto overflow-hidden whitespace-nowrap rounded-full py-1 pl-2 pr-3 font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100',
                    copied
                        ? 'bg-ens-400/10 ring-ens-400/20 ring-1 ring-inset'
                        : 'hover:bg-white/7.5 dark:bg-white/2.5 bg-white/5 dark:hover:bg-white/5'
                )}
                onClick={() => {
                    window.navigator.clipboard.writeText(code).then(() => {
                        setCopyCount((count) => count + 1);
                    });
                }}
                initial={{ height: '1.75rem' }}
                animate={{ width: 'auto', height: '1.75rem' }}
            >
                <AnimatePresence>
                    <motion.span
                        aria-hidden={copied}
                        className={clsx(
                            'pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300',
                            copied && 'opacity-0'
                        )}
                        initial={{ y: 0 }}
                        animate={{ y: copied ? '-100%' : 0 }}
                        exit={{ y: '-200%' }}
                        hidden={copied}
                    >
                        <ClipboardIcon className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400" />
                        Copy
                    </motion.span>
                    <motion.span
                        aria-hidden={!copied}
                        className={clsx(
                            'text-ens-400 pointer-events-none flex w-full items-center justify-end gap-1 whitespace-nowrap transition duration-300',
                            !copied && 'opacity-0'
                        )}
                        initial={{ y: 0 }}
                        animate={{ y: copied ? '-100%' : 0 }}
                        exit={{ y: '-200%' }}
                        key={`copied-${getCopiedLabel(copyCount)}`}
                    >
                        <FiPaperclip /> {getCopiedLabel(copyCount)}
                    </motion.span>
                </AnimatePresence>
            </motion.button>
        </AnimatePresence>
    );
}

export const CodeGroupPanels: FC<{
    entries: {
        variant: string;
        element: ReactNode;
        data: PresetConfig;
    }[];
}> = ({ entries, ...properties }) => {
    const hasTabs = entries.length > 1;
    const { activePreset, config } = useActivePresetConfig();

    if (hasTabs) {
        return (
            <Tab.Panels>
                {entries.map((child) => (
                    <Tab.Panel>
                        <CodePanel
                            {...properties}
                            meta={child.element['props']['meta']}
                        >
                            {child.element}
                        </CodePanel>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        );
    }

    return (
        <CodePanel {...properties}>{entries.map((v) => v.element)}</CodePanel>
    );
};

export const CodeGroup: FC<PropsWithChildren & CodeGroupProperties> = ({
    children,
    title,
    ...properties
}) => {
    const languages = Children.map(children, (child: ReactElement) => {
        return getPanelTitle(child.props);
    });

    const { activePreset, config } = useActivePresetConfig();

    const __children = useMemo(
        () =>
            Children.map(children, (child) => {
                const variant = naiveGetVariant(child['props']);
                const data = getCodeData(child['props']);

                return {
                    element: child,
                    data,
                    variant,
                };
            }).sort((a, b) => {
                const tags = [activePreset, ...config.tags];

                const indexOfBVariant = tags.indexOf(b.variant);
                const indexOfAVariant = tags.indexOf(a.variant);

                console.log(config.tags);

                if (indexOfAVariant == -1) return 1;

                if (indexOfBVariant == -1) return -1;

                if (indexOfAVariant > indexOfBVariant) return 1;

                if (indexOfAVariant < indexOfBVariant) return -1;

                return 0;
                // return b.data.tags.length > a.data.tags.length ? -1 : 1;
            }),
        [activePreset, config]
    );

    const tabGroupProperties = useTabGroupProperties(__children);
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
                className="not-prose my-6 overflow-hidden rounded-lg bg-[--var(--shiki-color-background)] shadow-sm ring-1 ring-black/10 dark:shadow-md dark:ring-white/10"
            >
                <CodeGroupHeader
                    children={__children}
                    title={title}
                    {...headerProperties}
                />
                <CodeGroupPanels {...properties} entries={__children} />
            </Container>
        </CodeGroupContext.Provider>
    );
};
