/* eslint-disable sonarjs/no-duplicate-string */
export const SubHeaders: [string, string, RegExp][] = [
    ['Intro', '/learn/protocol', /\/(learn(\/.*)?)?$/],
    ['dApp Developer', '/web/quickstart', /\/web(\/.*)?/],
    ['Resolution', '/resolvers/quickstart', /\/(resolvers|subnames)(\/.*)?/],
    [
        'Records & Standardization',
        '/records/quickstart',
        /\/(records|standards|ensip)(\/.*)?/,
    ],
];

type routeLink = {
    title: string;
    href: string;
};

type routeGroup = {
    title: string;
    links: routeLink[];
};

type pathMatches = RegExp;

export const navigation: [pathMatches, routeGroup[]][] = [
    [
        /\/web(\/.*)?/,
        [
            {
                title: 'Web / Querying',
                links: [
                    { title: 'Tools and Libraries', href: '/web/libraries' },
                    { title: 'Quickstart', href: '/web/quickstart' },
                    {
                        title: 'Interfacing with ENS Contracts',
                        href: '/web/interfacing',
                    },
                    { title: 'Getting Avatars', href: '/web/avatars' },
                    {
                        title: 'Sign In With Ethereum (SIWE)',
                        href: '/web/siwe',
                    },
                ],
            },
        ],
    ],
    [
        /\/(resolvers|subnames)(\/.*)?/,
        [
            {
                title: 'Resolvers',
                links: [
                    { title: 'Why Resolvers', href: '/resolvers/about' },
                    { title: 'Quickstart', href: '/resolvers/quickstart' },
                    {
                        title: 'Public Resolver',
                        href: '/resolvers/public-resolver',
                    },
                    {
                        title: 'Writing your own resolver',
                        href: '/resolvers/writing-a-resolver',
                    },
                    {
                        title: 'Cross Chain Resolution',
                        href: '/resolvers/cross-chain-resolution',
                    },
                ],
            },
            {
                title: 'Subnames',
                links: [
                    { title: 'Namewrapper', href: '/subnames/wrapper' },
                    { title: 'Quickstart', href: '/subnames/quickstart' },
                    {
                        title: 'Subdomain for every NFT Holder',
                        href: '/subnames/nfts',
                    },
                    {
                        title: 'Writing your own Subdomain System',
                        href: '/subnames/writing-a-subdomain-system',
                    },
                ],
            },
        ],
    ],
    [
        /\/(records|standards|ensip)(\/.*)?/,
        [
            {
                title: 'Records',
                links: [
                    { title: 'Record Types and Standards', href: '/records' },
                    { title: 'Quickstart', href: '/records/quickstart' },
                    { title: 'Modifying Records', href: '/records/modify' },
                ],
            },
            {
                title: 'Improvement Proposals (ENSIPs)',
                links: [
                    { title: '1 - ENS', href: '/ensip/1' },
                    { title: '2 - Hash Registrar', href: '/ensip/2' },
                    { title: '3 - Reverse Resolution', href: '/ensip/3' },
                    { title: '4 - Contract ABIs', href: '/ensip/4' },
                    { title: '5 - Text Records', href: '/ensip/5' },
                    { title: '6 - DNS-in-ENS', href: '/ensip/6' },
                    { title: '7 - Contenthash', href: '/ensip/7' },
                    { title: '8 - Interface Discovery', href: '/ensip/8' },
                    { title: '9 - Multichain Addresses', href: '/ensip/9' },
                    { title: '10 - Wildcard Resolution', href: '/ensip/10' },
                    {
                        title: '11 - EVM Compatible Chain Address',
                        href: '/ensip/11',
                    },
                    { title: '12 - Avatar Text Records', href: '/ensip/12' },
                    { title: '13 - SAFE Authentication', href: '/ensip/13' },
                    {
                        title: '14 - On-chain Source Parameter',
                        href: '/ensip/14',
                    },
                ],
            },
        ],
    ],
    [
        /\/\.*/,
        [
            {
                title: '',
                links: [{ title: 'Welcome', href: '/' }],
            },
            {
                title: 'Learn',
                links: [
                    { title: 'The Protocol', href: '/learn/protocol' },
                    { title: 'Resolution', href: '/learn/resolution' },
                    {
                        title: 'CCIP Cross Chain Interoperability Protocol',
                        href: '/learn/ccip',
                    },
                    { title: 'DNS-Compatability', href: '/learn/dnssec' },
                ],
            },
            // {
            //     title: 'Guides',
            //     links: [
            //         {
            //             title: 'Registering a .eth',
            //             href: 'https://support.ens.domains/docs/core/registration/registration-steps',
            //         },
            //         {
            //             title: 'Import a DNS name',
            //             href: 'https://support.ens.domains/docs/howto/link-dns-name',
            //         },
            //         {
            //             title: 'Identity in your dApps',
            //             href: '/web/quickstart',
            //         },
            //         {
            //             title: 'Subdomains for everyone',
            //             href: '/subnames/quickstart',
            //         },
            //         { title: 'The Magic of Multichain', href: '/learn/ccip' },
            //     ],
            // },
        ],
    ],
];
