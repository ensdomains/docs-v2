import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { useSectionStore } from '@/components/SectionProvider';
import { remToPx } from '@/lib/remToPx';

import { Anchor } from './Anchor';
import { Eyebrow } from './Eyebrow';

export const Heading = ({
    level = 2,
    children,
    id,
    tag,
    label,
    anchor = true,
    ...properties
}) => {
    const Component = `h${level}`;
    const reference = useRef();
    const registerHeading = useSectionStore((s) => s.registerHeading);

    const inView = useInView(reference, {
        margin: `${remToPx(-3.5)}px 0px 0px 0px`,
        amount: 'all',
    });

    useEffect(() => {
        if (level === 2) {
            registerHeading({
                id,
                ref: reference,
                offsetRem: tag || label ? 8 : 6,
            });
        }
    });

    return (
        <>
            <Eyebrow tag={tag} label={label} />
            <Component
                ref={reference}
                id={anchor ? id : undefined}
                className={tag || label ? 'mt-2 scroll-mt-32' : 'scroll-mt-24'}
                {...properties}
            >
                {anchor ? (
                    <Anchor id={id} inView={inView}>
                        {children}
                    </Anchor>
                ) : (
                    children
                )}
            </Component>
        </>
    );
};
