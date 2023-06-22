import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC, ReactElement, ReactNode, useContext } from 'react';

import { PresetConfig } from '@/lib/presets';

import {
    CodeGroup,
    CodeGroupContext,
    CodeGroupHeaderProperties,
    CodeGroupProperties,
    getPanelTitle,
} from './code/CodeGroup';
import { getCodeData } from './code/getCodeData';
import { LanguageIcon } from './code/LanguageIcon';

export const CodeGroupHeader: FC<
    {
        children: {
            element: ReactNode;
            data: PresetConfig;
            variant: string;
        }[];
    } & CodeGroupHeaderProperties
> = ({ title, children, selectedIndex }) => {
    const hasTabs = children.length > 1;
    const codeIndex = Math.floor(Math.random() * 1_000_000);

    if (!title && !hasTabs) {
        return;
    }

    return (
        <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b-4 bg-neutral-50 border-zinc-300 dark:bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
            {title && (
                <h3 className="pt-3 text-xs font-semibold text-black dark:text-white">
                    {title}
                </h3>
            )}
            {hasTabs && (
                <Tab.List className="-mb-[4px] flex gap-4 text-xs font-medium">
                    {children.map(({ data, element, variant }, childIndex) => {
                        return (
                            <Tab
                                className={clsx(
                                    'flex items-center relative px-0 gap-2 border-b-4 py-3 transition-all focus:[&:not(:focus-visible)]:outline-none',
                                    childIndex === selectedIndex
                                        ? 'border-ens-500 text-ens-400 px-3.5'
                                        : 'border-transparent text-zinc-400 hover:text-zinc-300'
                                )}
                            >
                                {childIndex === selectedIndex && (
                                    <motion.div
                                        className="absolute inset-0 bg-ens-500/10"
                                        layoutId={`code-group-header-${codeIndex}`}
                                    />
                                )}
                                <div className="flex flex-col items-start">
                                    <div>{getPanelTitle(element['props'])}</div>
                                    <div
                                        className={clsx(
                                            'flex transition-all',
                                            '-space-x-2.5'
                                        )}
                                    >
                                        {[variant, ...data.tags]
                                            .reverse()
                                            .map((tag, index) => (
                                                <div
                                                    className="border-2 border-white bg-white rounded-full overflow-hidden"
                                                    key={`language-tag-${index}`}
                                                >
                                                    <LanguageIcon
                                                        codeData={getCodeData({
                                                            variant: tag,
                                                        })}
                                                    />
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </Tab>
                        );
                    })}
                </Tab.List>
            )}
        </div>
    );
};

export function Code({ children, ...properties }) {
    const isGrouped = useContext(CodeGroupContext);

    // console.log(properties);

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
