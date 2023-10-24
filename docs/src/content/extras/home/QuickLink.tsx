import Link from 'next/link';
import { FC } from 'react';
import { FiChevronRight } from 'react-icons/fi';

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
            className="card not-prose !m-0 flex flex-col !p-0 text-inherit hover:text-inherit hover:no-underline hover:brightness-95"
        >
            <div className="aspect-[21/9] w-full">
                {image && <img src={image} alt="" className="h-auto w-full" />}
            </div>
            <div className="flex grow p-3 pt-2">
                <div className="w-full">
                    <div className="font-bold">{title}</div>
                    <div className="leading-5">{description}</div>
                </div>
                <div className="flex h-full items-center">
                    <FiChevronRight />
                </div>
            </div>
        </Link>
    );
};
