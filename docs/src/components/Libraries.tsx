import { Button } from '@/components/Button';

import { Heading } from './mdx/heading';

export const ensLibraries = [
    {
        href: 'https://wagmi.sh/',
        name: 'Wagmi',
        description: '',
        logo: '/icons/legacy/logos/wagmi.svg',
    },
    {
        href: 'https://viem.sh/',
        name: 'Viem',
        description: '',
        logo: '/icons/legacy/logos/viem.svg',
    },
    {
        href: 'https://docs.ethers.org/',
        name: 'Ethers',
        description: '',
        logo: '/icons/legacy/logos/ethers.svg',
    },
    {
        href: 'https://github.com/ensdomains/ensjs-v3',
        name: 'ENSjs',
        description: '',
        logo: '/icons/legacy/logos/ensjs.svg',
        official: true,
    },
    {
        href: 'https://web3js.readthedocs.io/',
        name: 'Web3.js',
        description: '',
        logo: '/icons/legacy/logos/web3js.svg',
    },
    {
        href: 'https://ethers.rs/',
        name: 'Ethers.rs',
        description: '',
        logo: undefined,
    },
    {
        href: 'https://github.com/Nethereum/Nethereum/',
        name: 'Nethereum',
        description: '',
        logo: '/icons/legacy/logos/nuget.svg',
    },
    {
        href: 'https://github.com/komputing/KEthereum',
        name: 'KEthereum',
        description: '',
        logo: '/icons/legacy/logos/kethereum.png',
    },
    {
        href: 'https://docs.web3j.io/',
        name: 'web3j',
        description: '',
        logo: '/icons/legacy/logos/web3j.png',
    },
    {
        href: 'https://github.com/wealdtech/go-ens',
        name: 'go-ens',
        description: '',
        logo: '/icons/legacy/logos/go.svg',
    },
    {
        href: 'https://github.com/wealdtech/ethereal',
        name: 'ethereal',
        description: '',
        logo: undefined, // -
    },
    {
        href: 'https://github.com/svanas/delphereum',
        name: 'delphereum',
        description: '',
        logo: undefined, // -
    },
];

export function Libraries() {
    return (
        <div className="mt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
                {ensLibraries.map((library) => (
                    <div
                        key={library.name}
                        className="not-prose flex flex-col rounded-md bg-zinc-100 p-2 ring-1 ring-black/20 dark:bg-zinc-800 dark:ring-white/20"
                    >
                        <Heading
                            level={3}
                            id={library.name
                                .toLowerCase()
                                .replace('-', '')
                                .replace('.', '')}
                            className="flex items-center"
                        >
                            <span className="flex items-center gap-4">
                                {(library.logo && (
                                    <img
                                        src={library.logo}
                                        alt=""
                                        className="h-12 w-12 object-contain"
                                    />
                                )) || (
                                    <div>
                                        <div className="rounded-lg border border-zinc-300/10 p-4"></div>
                                    </div>
                                )}
                                <span className="flex flex-col">
                                    <span className="flex flex-row">
                                        <span className="font-bold text-black dark:text-white">
                                            {library.name}
                                        </span>

                                        {library.official && (
                                            <span className="">
                                                <img
                                                    className="no-prose m-0 h-3 w-3"
                                                    width="10"
                                                    height="10"
                                                    src={
                                                        '/icons/legacy/logos/verified.svg'
                                                    }
                                                    alt="Official"
                                                />
                                            </span>
                                        )}
                                    </span>
                                </span>
                            </span>
                        </Heading>
                        <p className="mt-2 grow text-sm text-zinc-600 dark:text-zinc-400">
                            {library.description}
                        </p>
                        <p className="mt-4 text-right">
                            <Button
                                href={library.href}
                                target="_blank"
                                variant="text"
                                arrow="right"
                            >
                                Read more
                            </Button>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
