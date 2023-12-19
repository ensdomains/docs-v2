import Link from 'next/link';
import { FC } from 'react';

export const QuickBannerLink: FC<{
    title: string;
    description: string;
    href: string;
    image: string;
}> = ({ title, description, href, image }) => {
    return (
        <Link
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            className="bg-ens-light-background-secondary dark:bg-ens-dark-background-secondary not-prose active:ring-ens-light-blue-primary active:dark:ring-ens-dark-blue-primary !m-0 flex flex-col overflow-hidden rounded-lg !p-0 text-inherit hover:text-inherit hover:no-underline hover:brightness-95 active:ring"
        >
            <div className="aspect-[21/9] w-full">
                {image && <img src={image} alt="" className="h-auto w-full" />}
            </div>
            <div className="flex grow items-center p-6">
                <div className="w-full">
                    <div className="text-ens-light-blue-primary dark:text-ens-dark-blue-primary font-bold">
                        {title}
                    </div>
                    <div className="leading-5">{description}</div>
                </div>
            </div>
        </Link>
    );
};
