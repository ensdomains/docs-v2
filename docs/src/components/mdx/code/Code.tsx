import { FC, PropsWithChildren } from 'react';

import { CodeGroup } from './CodeGroup';
import { CodePanel, CodePanelProperties } from './CodePanel';

export function Code({ children, ...properties }) {
    return (
        <code {...properties} dangerouslySetInnerHTML={{ __html: children }} />
    );
}

export const Pre: FC<PropsWithChildren<CodePanelProperties>> = ({
    children,
    title,
    isChild,
    ...properties
}) => {
    if (isChild) {
        return <CodePanel {...properties}>{children}</CodePanel>;
    }

    return (
        <CodeGroup {...properties} isChild={true}>
            {children}
        </CodeGroup>
    );
};
