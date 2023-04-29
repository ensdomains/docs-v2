import { useInView } from 'framer-motion';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';

import { useSectionStore } from '@/components/SectionProvider';
import { ccx } from '@/lib/cx';
import { remToPx } from '@/lib/remToPx';

import { Anchor } from './Anchor';
import { Eyebrow } from './Eyebrow';

export const Heading: FC<
    PropsWithChildren & {
        level?: 2 | 3 | 4 | 5 | 6;
        id: string;
        tag?: string;
        label?: string;
        anchor?: boolean;
        className?: string;
    }
> = ({ level = 2, children, id, tag, label, anchor = true, ...properties }) => {
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
            <Component
                ref={reference}
                id={anchor ? id : undefined}
                className={ccx(
                    properties.className,
                    'mt-8 scroll-mt-32',
                    'flex justify-between items-center w-full'
                )}
                {...properties}
            >
                {anchor ? (
                    <Anchor id={id} inView={inView}>
                        {children}
                    </Anchor>
                ) : (
                    children
                )}
                <div>
                    <Eyebrow tag={tag} label={label} />
                </div>
            </Component>
        </>
    );
};
