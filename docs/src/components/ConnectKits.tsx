import { cx } from '@/lib/cx';

export const ensLibraries = [
    {
        name: 'ConnectKit',
        creator: 'Family',
        creator_url: 'https://family.co',
        logo: '/icons/legacy/logos/connectkit.png',
        url: 'https://docs.family.co/connectkit/try-it-out',
    },
    {
        name: 'Rainbowkit',
        creator: 'Rainbow',
        creator_url: 'https://rainbow.me',
        logo: '/icons/legacy/logos/rainbow.svg',
        url: 'https://www.rainbowkit.com/docs/introduction',
    },
    {
        name: 'Web3Modalv2',
        creator: 'WalletConnect',
        creator_url: 'https://walletconnect.org',
        logo: '/icons/legacy/logos/walletconnect.svg',
        url: 'https://docs.walletconnect.com/2.0/web3modal/about',
    },
];

export const ConnectKits = () => {
    return (
        <div className="xl:max-w-none">
            <div className="flex gap-3">
                {ensLibraries.map((library) => (
                    <div
                        key={library.name}
                        className="w-42 not-prose items-center justify-center rounded-md bg-neutral-100 p-4 text-center ring-1 ring-black/20 hover:ring-black/30 dark:bg-zinc-800 dark:ring-white/20 dark:hover:ring-white/30"
                    >
                        <div className="flex items-center gap-2">
                            <div className="aspect-square w-6">
                                <img
                                    src={library.logo}
                                    className={cx(
                                        'w-6',
                                        library.name.toLowerCase() ==
                                            'rainbowkit'
                                            ? 'rounded-xl'
                                            : ''
                                    )}
                                    alt={library.name}
                                />
                            </div>
                            <div className="block text-left">
                                <div className="font-bold leading-4">
                                    {library.name}
                                </div>
                                <span className="block text-xs leading-3 text-zinc-500">
                                    by{' '}
                                    <a
                                        href={library.creator_url}
                                        className="text-zinc-700 dark:text-zinc-100"
                                    >
                                        {library.creator}
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div>
                            <ul>
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <li>react-existing-thing</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
