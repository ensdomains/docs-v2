import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navigation } from '@/config/navigation';

export const SubHeader = () => {
    const pathname = usePathname();

    const sections = navigation.protocol;

    return (
        <div className="">
            <div className="border-b-ens-light-border dark:border-b-ens-dark-border bg-ens-light-background-primary dark:bg-ens-dark-background-primary fixed inset-x-0 top-16 z-50 border-b px-6 py-3">
                <ul className="hidden gap-10 sm:flex">
                    {sections.map(({ name, href, activePattern }) => (
                        <li key={href.toString()}>
                            <Link
                                href={href.toString()}
                                className={clsx(
                                    'text-ens-light-text-primary dark:text-ens-dark-text-primary hover:text-ens-light-text-secondary dark:hover:text-ens-dark-text-secondary',
                                    'text-sm',
                                    activePattern.test(pathname)
                                        ? 'font-bold'
                                        : 'font-normal'
                                )}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
