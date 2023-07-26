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
            className="card !p-0 not-prose !m-0 text-inherit flex flex-col hover:brightness-95 hover:no-underline hover:text-inherit"
        >
            <div className="aspect-[21/9] bg-white w-full">
                {image && <img src={image} alt="" className="w-full h-auto" />}
            </div>
            <div className="flex pt-2 p-3 bg-gray-50 grow">
                <div className="w-full">
                    <div className="font-bold">{title}</div>
                    <div className="leading-5">{description}</div>
                </div>
                <div className="h-full flex items-center">
                    <FiChevronRight />
                </div>
            </div>
        </Link>
    );
};
