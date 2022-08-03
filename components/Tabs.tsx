import classNames from 'classnames';
import { FC, PropsWithChildren, ReactElement, useState } from 'react';

export const Tabs: FC<{ children: ReactElement<{ title: string }>[] }> = ({
    children,
}) => {
    const children2 = Array.isArray(children) ? children : [children];
    const [active, setActive] = useState(children2.at(0).props.title);

    return (
        <div className="mt-4">
            <div
                className="flex w-fit border-l border-l-ensl-border"
                style={{ marginBottom: '-1px' }}
            >
                {children2.map((tab, index) => (
                    <button
                        key={index}
                        className={classNames(
                            'p-2 pb-4 border-r border-t border-b',
                            tab.props.title == active
                                ? 'bg-white border-ensl-border border-b-ensl-background border-b z-10'
                                : 'bg-ensl-backgroundSecondary border-ensl-border hover:brightness-105'
                        )}
                        onClick={() => setActive(tab.props.title)}
                    >
                        {tab.props.title}
                    </button>
                ))}
            </div>
            <div className="border border-ensl-border bg-ensl-background px-6">
                {children2.map((tab, index) => (
                    <div
                        className={classNames(
                            active == tab.props.title ? '' : 'hidden'
                        )}
                        key={index}
                    >
                        {tab}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Tab: FC<{ title: string } & PropsWithChildren> = ({
    title,
    children,
}) => {
    return <div>{children}</div>;
};
