import { Button } from '@/components/Button';

import { Heading } from './mdx/heading';

export const ensLibraries = [
    {
        href: 'https://wagmi.sh/',
        name: 'Wagmi',
        description:
            'wagmi is a collection of React Hooks containing everything you need to start working with Ethereum. wagmi makes it easy to "Connect Wallet," display ENS and balance information, sign messages, interact with contracts, and much more',
        logo: '/icons/legacy/logos/wagmi.svg',
        tags: ['react', 'ethers', 'typescript', 'javascript'],
    },
    {
        href: 'https://docs.ethers.org/',
        name: 'Ethers',
        description:
            'The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem.',
        logo: '/icons/legacy/logos/ethers.svg',
        tags: ['ethers', 'typescript', 'javascript'],
    },
    {
        href: 'https://github.com/ensdomains/ensjs-v3',
        name: 'ENSjs',
        description:
            'The ultimate ENS javascript library, with ethers.js under the hood.',
        logo: '/icons/legacy/logos/ensjs.svg',
        tags: ['ethers', 'typescript', 'javascript'],
        official: true,
    },
    {
        href: 'https://web3js.readthedocs.io/',
        name: 'Web3.js',
        description:
            'web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.',
        logo: '/icons/legacy/logos/web3js.svg',
        tags: ['typescript', 'javascript'],
    },
    {
        href: 'https://ethers.rs/',
        name: 'Ethers.rs',
        description: 'Etherem library for Rust.',
        logo: undefined,
        tags: ['verified'],
    },
    {
        href: 'https://github.com/Nethereum/Nethereum/',
        name: 'Nethereum',
        description:
            'Nethereum is the .Net integration library for Ethereum, simplifying the access and smart contract interaction with Ethereum nodes both public or permissioned like Geth, Parity or Quorum.',
        logo: '/icons/legacy/logos/nuget.svg',
        tags: ['nuget'],
    },
    {
        href: 'https://github.com/komputing/KEthereum',
        name: 'KEthereum',
        description: 'Kotlin library for Ethereum.',
        logo: '/icons/legacy/logos/kethereum.png',
        tags: ['kotlin'],
    },
    {
        href: 'https://docs.web3j.io/',
        name: 'web3j',
        description:
            'Web3j is a highly modular, reactive, type safe Java and Android library for working with Smart Contracts and integrating with clients (nodes) on the Ethereum network.',
        logo: '/icons/legacy/logos/web3j.png',
        tags: ['java'],
    },
    {
        href: 'https://github.com/wealdtech/go-ens',
        name: 'go-ens',
        description:
            'Go module to simplify interacting with the Ethereum Name Service contracts.',
        logo: '/icons/legacy/logos/go.svg',
        tags: ['go'],
    },
    {
        href: 'https://github.com/wealdtech/ethereal',
        name: 'ethereal',
        description:
            'A command-line tool for managing common tasks in Ethereum.',
        logo: undefined, // -
        tags: ['cli', 'go'],
    },
    {
        href: 'https://github.com/svanas/delphereum',
        name: 'delphereum',
        description: 'web3 implementation for the Delphi programming language.',
        logo: undefined, // -
        tags: [],
    },
];

const locations = [
    {
        href: '#',
        name: 'React',
        description:
            'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.',
        logo: '/icons/legacy/logos/react.svg',
    },
    {
        href: '#',
        name: 'Node.js',
        description:
            'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
        logo: '/icons/legacy/logos/node.svg',
    },
    {
        href: '#',
        name: 'PHP',
        description:
            'A popular general-purpose scripting language that is especially suited to web development.',
        logo: '/icons/legacy/logos/php.svg',
    },
    {
        href: '#',
        name: 'Ruby',
        description:
            'A dynamic, open source programming language with a focus on simplicity and productivity.',
        logo: '/icons/legacy/logos/ruby.svg',
    },
    {
        href: '#',
        name: 'Python',
        description:
            'Python is a programming language that lets you work quickly and integrate systems more effectively.',
        logo: '/icons/legacy/logos/python.svg',
    },
    {
        href: '#',
        name: 'Go',
        description:
            'An open-source programming language supported by Google with built-in concurrency.',
        logo: '/icons/legacy/logos/go.svg',
    },
];

const tagLogos = {
    typescript: {
        src: '/icons/legacy/logos/typescript.svg',
        name: 'Typescript',
    },
    javascript: {
        src: '/icons/legacy/logos/javascript.svg',
        name: 'Javascript',
    },
    react: {
        src: '/icons/legacy/logos/react.svg',
        name: 'React',
    },
    ethers: {
        src: '/icons/legacy/logos/ethers.svg',
        name: 'Ethers.js',
    },
};

export function Libraries() {
    return (
        <div className="xl:max-w-none">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
                {ensLibraries.map((library) => (
                    <div
                        key={library.name}
                        className="not-prose flex flex-col rounded-xl bg-zinc-100 p-4 ring-1 ring-black/20 dark:bg-zinc-800 dark:ring-white/20"
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
                            <span className="flex gap-1">
                                {library.tags
                                    .map((tag) => tagLogos[tag] || undefined)
                                    .filter((a) => !!a)
                                    .map((tag) => (
                                        <div
                                            key={tag.src.src}
                                            className="flex h-4 w-4 items-center justify-center"
                                        >
                                            <img
                                                src={tag.src.src}
                                                className="h-4 w-4"
                                                alt={tag}
                                            />
                                        </div>
                                    ))}
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
