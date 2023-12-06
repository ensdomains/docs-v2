import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navigation } from '@/config/navigation';

export const SubHeader = () => {
    const pathname = usePathname();

    const sections = navigation.protocol;

    return (
        <div className="">
            <div className="border-b-ens-light-border dark:border-b-ens-dark-border bg-ens-light-background-primary dark:bg-ens-dark-background-primary fixed inset-x-0 top-16 z-50 hidden h-9 border-b px-6 lg:block">
                <ul className="mx-auto flex h-full w-fit gap-10">
                    {sections.map(({ name, href, activePattern }) => {
                        const active = activePattern.test(pathname);

                        return (
                            <li
                                key={href.toString()}
                                className={clsx(
                                    'translate-y-[1px]',
                                    active
                                        ? 'border-b-ens-light-blue-primary dark:border-b-ens-dark-blue-primary border-b'
                                        : ''
                                )}
                            >
                                <Link
                                    href={href.toString()}
                                    className={clsx(
                                        '',
                                        'text-sm',
                                        active
                                            ? 'text-ens-light-blue-primary dark:text-ens-dark-blue-primary hover:text-ens-light-blue-bright dark:hover:text-ens-dark-blue-bright'
                                            : 'text-ens-light-text-primary dark:text-ens-dark-text-primary hover:text-ens-light-text-secondary dark:hover:text-ens-dark-text-secondary'
                                    )}
                                >
                                    {name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
