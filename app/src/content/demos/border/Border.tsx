import { FC, PropsWithChildren } from 'react';

import { BorderConnection } from './BorderConnection';

export const DemoBorder: FC<
    PropsWithChildren<{
        showConnect: boolean;
        title: string;
        chains?: Set<number>;
    }>
> = ({ children, showConnect, title, chains }) => {
    return (
        <div className="bg-ens-light-blue-surface dark:bg-ens-dark-blue-surface rounded-2xl p-2">
            <div className="flex items-center justify-between p-2 pb-4">
                <div className="font-bold">{title}</div>
                <div>{showConnect && <BorderConnection chains={chains} />}</div>
            </div>
            <div className="bg-ens-light-background-primary dark:bg-ens-dark-background-primary rounded-xl">
                {children}
            </div>
        </div>
    );
};
