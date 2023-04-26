import Image from 'next/image';

import ConnectKitLogo from '@/images/logos/connectkit.png';
import RainbowkitLogo from '@/images/logos/rainbow.svg';
import Web3Modalv2Logo from '@/images/logos/walletconnect.svg';
import { ccx } from '@/lib/cx';

export const ensLibraries = [
    {
        name: 'ConnectKit',
        creator: 'Family',
        creator_url: 'https://family.co',
        logo: ConnectKitLogo,
        url: 'https://docs.family.co/connectkit/try-it-out',
    },
    {
        name: 'Rainbowkit',
        creator: 'Rainbow',
        creator_url: 'https://rainbow.me',
        logo: RainbowkitLogo,
        url: 'https://www.rainbowkit.com/docs/introduction',
    },
    {
        name: 'Web3Modalv2',
        creator: 'WalletConnect',
        creator_url: 'https://walletconnect.org',
        logo: Web3Modalv2Logo,
        url: 'https://docs.walletconnect.com/2.0/web3modal/about',
    },
];

export const ConnectKits = () => {
    return (
        <div className="xl:max-w-none">
            <div className="flex gap-3">
                {ensLibraries.map((library) => (
                    <a
                        href={library.url}
                        target="_blank"
                        key={library.name}
                        className="w-42 p-4 text-center not-prose items-center justify-center rounded-md bg-neutral-100 dark:bg-zinc-800 ring-1 ring-black/20 hover:ring-black/30 dark:ring-white/20 dark:hover:ring-white/30"
                        rel="noreferrer"
                    >
                        <div className="w-20 mx-auto aspect-square flex items-center justify-center">
                            <Image
                                src={library.logo}
                                className={ccx(
                                    'w-20',
                                    library.name.toLowerCase() == 'rainbowkit'
                                        ? 'rounded-xl'
                                        : ''
                                )}
                                alt={library.name}
                            />
                        </div>
                        <div className="pt-4 font-bold">{library.name}</div>
                        <p className="w-32 text-zinc-500">
                            by{' '}
                            <a
                                href={library.creator_url}
                                className="text-zinc-700 dark:text-zinc-100"
                            >
                                {library.creator}
                            </a>
                        </p>
                    </a>
                ))}
            </div>
        </div>
    );
};
