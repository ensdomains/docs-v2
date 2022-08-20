import { Button as ThorinButton } from '@ensdomains/thorin';
import { Props } from '@ensdomains/thorin/dist/types/components/atoms/Button/Button';
import classNames from 'classnames';
import * as React from 'react';

export const Button = (properties: Props) => {
    const [v, setV] = React.useState(false);

    React.useEffect(() => {
        setV(true);
    }, []);

    if (!v) return <></>;

    return (
        <ThorinButton
            {...properties}
            className={classNames(
                properties.className,
                'no-underline dark:shadow-none'
            )}
        />
    );
};
