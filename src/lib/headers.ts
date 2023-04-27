/* eslint-disable sonarjs/no-duplicate-string */
export const SubHeaders: [RegExp, SubHeaderConfig[]][] = [
    [
        /\/dao(\/.*)?/,
        [
            [
                'About',
                '/dao',
                /\/dao(\/|(\/(foundation|airdrop|constitution)))?$/,
            ],
            [
                'Governance Process',
                '/dao/governance',
                /\/dao\/governance(\/.*)?/,
            ],
            ['Proposals', '/dao/proposals', /\/dao\/proposals(\/.*)?/],
        ],
    ],
    [
        /.*/,
        [
            ['Intro', '/learn/protocol', /\/(learn(\/.*)?)?$/],
            ['dApp Developer', '/web/quickstart', /\/web(\/.*)?/],
            [
                'Resolution',
                '/resolvers/quickstart',
                /\/(resolvers|subnames)(\/.*)?/,
            ],
            [
                'Records & Standardization',
                '/records/quickstart',
                /\/(records|standards|ensip)(\/.*)?/,
            ],
        ],
    ],
];

type SubHeaderConfig = [string, string, RegExp];

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
                    { title: 'Getting Avatars', href: '/web/avatars' },
                    { title: 'Getting Primary Names', href: '/web/reverse' },
                    {
                        title: 'Sign In With Ethereum (SIWE)',
                        href: '/web/siwe',
                    },
                ],
            },
            {
                title: 'Advanced',
                links: [
                    {
                        title: 'Naming Smart-contracts',
                        href: '/web/naming-contracts',
                    },
                    {
                        title: 'Interfacing with ENS Contracts',
                        href: '/web/interfacing',
                    },
                ],
            },
            {
                title: 'Design Guidelines',
                links: [
                    // eslint-disable-next-line quotes
                    { title: "Do's and Don'ts", href: '/web/design' },
                    { title: 'Media kit', href: '/web/design' },
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
        /\/dao\/governance(\/.*)?/,
        [
            {
                title: 'Governance Process',
                links: [
                    { title: 'Governance Process', href: '/dao/governance' },
                    {
                        title: 'Moderator Checklist',
                        href: '/dao/governance/moderator',
                    },
                ],
            },
        ],
    ],
    [
        /\/dao\/proposals(\/.*)?/,
        [
            {
                title: '',
                links: [{ title: 'Welcome', href: '/dao/proposals' }],
            },
            {
                title: 'Proposals Term 3',
                links: [
                    {
                        title: 'EP3.1.1 - [Social] Q1/Q2 2023 Funding Request: ENS Ecosystem Working Group',
                        href: '/dao/proposals/term-0/ep3.1.1',
                    },
                    {
                        title: 'EP3.1.2- [Social] Q1/Q2 2023 Funding Request: Meta-Governance Working Group',
                        href: '/dao/proposals/term-0/ep3.1.2',
                    },
                    {
                        title: 'EP3.1.3 - [Social] Q1/Q2 2023 Funding Request: Public Goods Working Group',
                        href: '/dao/proposals/term-0/ep3.1.3',
                    },
                    {
                        title: 'EP3.2 - [Executable] Q1/Q2 2023 Working Group Funding',
                        href: '/dao/proposals/term-0/ep3.2',
                    },
                    {
                        title: 'EP3.3 - [Executable] Sell ETH to USDC',
                        href: '/dao/proposals/term-0/ep3.3',
                    },
                    {
                        title: 'EP3.4 - [Executable] Fund the Endowment (first tranche)',
                        href: '/dao/proposals/term-0/ep3.4',
                    },
                    {
                        title: 'EP3.5 - [Executable] Activate new .eth Controller and Reverse Registrar',
                        href: '/dao/proposals/term-0/ep3.5',
                    },
                ],
            },
            {
                title: 'Proposals Term 2',
                links: [
                    {
                        title: '1 - [Social] Transfer ENS Treasury and Contract Ownership',
                        href: '/dao/venues',
                    },
                ],
            },
            {
                title: 'Proposals Term 1',
                links: [
                    {
                        title: '1 - [Social] Transfer ENS Treasury and Contract Ownership',
                        href: '/dao/venues',
                    },
                ],
            },
            {
                title: 'Proposals Term 0',
                links: [
                    {
                        title: '1 - [Social] Transfer ENS Treasury and Contract Ownership',
                        href: '/dao/venues',
                    },
                ],
            },
        ],
    ],
    [
        /\/dao(\/.*)?/,
        [
            {
                title: '',
                links: [{ title: 'Welcome', href: '/dao' }],
            },
            {
                title: 'The interesting bits',
                links: [
                    { title: 'Constitution', href: '/dao/constitution' },
                    { title: 'Foundation', href: '/dao/foundation' },
                    { title: 'Airdrop', href: '/dao/airdrop' },
                ],
            },
            {
                title: 'Links',
                links: [
                    {
                        title: 'Discourse',
                        href: 'https://discuss.ens.domains',
                    },
                    {
                        title: 'Snapshot',
                        href: 'https://snapshot.org/#/ens.eth',
                    },
                    {
                        title: 'Tally',
                        href: 'https://www.withtally.com/governance/ens',
                    },
                    {
                        title: 'Sybil',
                        href: 'https://sybil.org/#/delegates/ens',
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
