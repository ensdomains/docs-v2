import clsx from 'clsx';

export function Prose({ as: Component = 'div', className, ...properties }) {
    return (
        <Component
            className={clsx(className, 'prose dark:prose-invert')}
            {...properties}
        />
    );
}
