import { ReactNode } from 'react';
import { FaJava, FaReact, FaRust } from 'react-icons/fa';
import { SiDelphi, SiKotlin, SiNuget } from 'react-icons/si';
import { TbBrandGolang, TbBrandJavascript } from 'react-icons/tb';

type Language = {
    name: string;
    logo: ReactNode | string;
    libraries: Library[];
};

type Library = {
    name: string;
    description: string;
    href: string;
    logo?: string;
    official?: boolean;
};

export const ensLibraries: Language[] = [
    {
        name: 'React',
        logo: <FaReact />,
        libraries: [
            {
                href: 'https://wagmi.sh/',
                name: 'Wagmi',
                description: '',
                logo: '/icons/legacy/logos/wagmi.svg',
            },
        ],
    },
    {
        name: 'JavaScript',
        logo: <TbBrandJavascript />,
        libraries: [
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
        ],
    },
    {
        name: 'Rust',
        logo: <FaRust />,
        libraries: [
            {
                href: 'https://ethers.rs/',
                name: 'Ethers.rs',
                description: '',
                logo: undefined,
            },
            {
                href: 'https://github.com/alloy-rs/',
                name: 'Alloy',
                description: '',
                logo: undefined,
            },
        ],
    },
    {
        name: 'NuGet',
        logo: <SiNuget />,
        libraries: [
            {
                href: 'https://github.com/Nethereum/Nethereum/',
                name: 'Nethereum',
                description: '',
                logo: '/icons/legacy/logos/nuget.svg',
            },
        ],
    },
    {
        name: 'Kotlin',
        logo: <SiKotlin />,
        libraries: [
            {
                href: 'https://github.com/komputing/KEthereum',
                name: 'KEthereum',
                description: '',
                logo: '/icons/legacy/logos/kethereum.png',
            },
        ],
    },
    {
        name: 'Java',
        logo: <FaJava />,
        libraries: [
            {
                href: 'https://docs.web3j.io/',
                name: 'web3j',
                description: '',
                logo: '/icons/legacy/logos/web3j.png',
            },
        ],
    },
    {
        name: 'Go',
        logo: <TbBrandGolang />,
        libraries: [
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
        ],
    },
    {
        name: 'Delphi',
        logo: <SiDelphi />,
        libraries: [
            {
                href: 'https://github.com/svanas/delphereum',
                name: 'delphereum',
                description: '',
                logo: undefined, // -
            },
        ],
    },
];

export function Libraries() {
    return (
        <div className="not-prose mt-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {ensLibraries.map((language) => (
                    <div className="card !m-0 p-3">
                        <div className="flex items-center gap-1 px-2 text-lg">
                            <div>{language.logo}</div>
                            <div className="grow">{language.name}</div>
                            <div className="text-xs opacity-40">
                                {language.libraries.length > 0
                                    ? language.libraries.length
                                    : ''}
                            </div>
                        </div>
                        <ul>
                            {language.libraries.map((library) => (
                                <li className="flex items-center gap-2">
                                    -
                                    <a
                                        href={library.href}
                                        target="_blank"
                                        className="inline-flex items-center gap-0.5 text-blue-500 hover:underline"
                                    >
                                        {library.logo &&
                                            typeof library.logo == 'string' ? (
                                            <img
                                                src={library.logo}
                                                className="h-4 w-4 object-contain"
                                                alt=""
                                            />
                                        ) : (
                                            <span className="h-fit">
                                                {library.logo}
                                            </span>
                                        )}
                                        {library.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
