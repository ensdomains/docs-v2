import { FC } from 'react';

export type UsertagVariant = 'full' | 'small';

export const Usertag: FC<{
    name?: string;
    image?: string;
    variant?: UsertagVariant;
}> = ({ name = 'nick.eth', image = '/nick.eth.png', variant = 'full' }) => {
    return (
        <div className="not-prose">
            <div className="border-ens-light-border dark:border-ens-dark-border flex h-fit items-center gap-1 overflow-hidden !rounded-full border">
                {variant == 'full' && (
                    <div className="aspect-square h-12 w-12 overflow-hidden rounded-full p-1">
                        <img
                            src={image}
                            alt=""
                            className="border-ens-light-border dark:border-ens-dark-border rounded-full border"
                        />
                    </div>
                )}
                <div className="text-ens-light-blue-primary dark:text-ens-dark-blue-primary px-3 pl-0 font-bold first-of-type:pl-3">
                    {name}
                </div>
            </div>
        </div>
    );
};
