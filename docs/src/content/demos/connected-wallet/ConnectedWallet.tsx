'use client';

import { FC } from 'react';

export const ConnectedWalletDemo: FC = () => {
    return (
        <div className="flex flex-row justify-center text-base font-semibold">
            <div className="text-ens-light-text-primary bg-ens-light-background-primary  flex w-fit flex-row items-center gap-2 rounded-full p-0.5 pr-12 shadow">
                <img
                    src="https://i.imgur.com/ga6y0c0.jpg"
                    alt="ens.eth avatar"
                    className="rounded-full"
                    width={40}
                    height={40}
                />
                <span>ens.eth</span>
            </div>
        </div>
    );
};
