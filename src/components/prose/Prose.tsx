import clsx from 'clsx';
import { FC } from 'react';

export const Prose: FC<{
    as: 'article';
    className: string;
}> = ({ as: Component = 'div', className, ...properties }) => {
    return (
        <article
            className={clsx(className, 'prose dark:prose-invert')}
            {...properties}
        />
    );
};
