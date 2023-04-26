import Link from 'next/link';
import { useRouter } from 'next/router';

import { ccx } from '@/lib/cx';
import { SubHeaders } from '@/lib/headers';

export const SubHeader = () => {
    const { pathname } = useRouter();

    return (
        <div className="absolute hidden md:flex top-full left-0 right-0 bg-ens-500 text-white px-4">
            {SubHeaders.map(([label, url, urlMatch]) => (
                <Link
                    href={url}
                    className={ccx(
                        'font-bold py-1 px-3 text-xs hover:bg-white/10',
                        pathname.match(urlMatch || url) && 'bg-black/10'
                    )}
                    key={url}
                >
                    {label}
                </Link>
            ))}
        </div>
    );
};
