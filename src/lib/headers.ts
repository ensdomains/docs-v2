/* eslint-disable sonarjs/no-duplicate-string */
export const SubHeaders: [RegExp, SubHeaderConfig[]][] = [
    [
        /^\/dao(\/.*)?/,
        [
            [
                'About',
                '/dao',
                /^\/dao(\/|(\/(foundation|airdrop|constitution)))?$/,
            ],
            [
                'Governance Process',
                '/dao/governance',
                /^\/dao\/governance(\/.*)?/,
            ],
            ['Proposals', '/dao/proposals', /^\/dao\/proposals(\/.*)?/],
        ],
    ],
    [
        /.*/,
        [
            ['Intro', '/', /^\/(learn(\/.*)?)?$/],
            ['dApp Developer', '/web', /^\/web(\/.*)?/],
            [
                'Resolution',
                '/resolution',
                /^\/(resolvers|subnames|registry|resolution)(\/.*)?/,
            ],
            [
                'Records & Standardization',
                '/standards',
                /^\/(records|standards|ensip)(\/.*)?/,
            ],
        ],
    ],
];

type SubHeaderConfig = [string, string, RegExp];

type routeLink = {
    title: string;
    href: string;
    external?: boolean;
};

type routeGroup = {
    title: string;
    links: routeLink[];
};

type pathMatches = RegExp;

export const navigation: [pathMatches, routeGroup[]][] = [
    [
        /^\/web(\/.*)?/,
        [
            {
                title: '',
                links: [{ title: '👋 Welcome', href: '/web' }],
            },
            {
                title: '🌐 Web / Querying',
                links: [
                    { title: '⚡ Quickstart', href: '/web/quickstart' },
                    { title: '🛠️ Tools and Libraries', href: '/web/libraries' },
                    { title: '🔍 Address', href: '/web/resolution' },
                    { title: '🔍 Avatars', href: '/web/avatars' },
                    { title: '🔍 Primary Names', href: '/web/reverse' },
                    { title: '🔍 List Names', href: '/web/enumerate' },
                    {
                        title: '✍️ Sign In With Ethereum (SIWE)',
                        href: '/web/siwe',
                    },
                ],
            },
            {
                title: '⚙️ Advanced',
                links: [
                    {
                        title: 'Naming Smart-contracts',
                        href: '/web/naming-contracts',
                    },
                    {
                        title: 'Interfacing with ENS Contracts',
                        href: '/web/interfacing',
                    },
                    {
                        title: 'Subgraph',
                        href: '/web/subgraph',
                    },
                ],
            },
            {
                title: '🖼️ Design Guidelines',
                links: [
                    // eslint-disable-next-line quotes
                    { title: "Do's and Don'ts", href: '/web/design' },
                    {
                        title: 'Media kit',
                        href: 'https://github.com/ensdomains/media-kit',
                        external: true,
                    },
                ],
            },
        ],
    ],
    [
        /^\/(resolvers|subnames|registry|resolution)(\/.*)?/,
        [
            {
                title: '',
                links: [{ title: '👋 Welcome', href: '/resolution' }],
            },
            {
                title: '🌐 Resolution',
                links: [
                    { title: '✨ Start Here', href: '/resolution/quickstart' },
                    { title: '⚙️ Name Processing', href: '/resolution/names' },
                ],
            },
            {
                title: '🏛️ Registries',
                links: [
                    { title: '✨ Start Here', href: '/registry/quickstart' },
                    { title: '🗒️ ETH Registrar', href: '/registry/eth' },
                    { title: '🗒️ DNS Registrar', href: '/registry/dns' },
                    { title: '🗒️ Test Registrar', href: '/registry/test' },
                    {
                        title: '🗒️ Reverse Registrar',
                        href: '/registry/reverse',
                    },
                    {
                        title: '👉 Interacting with registry',
                        href: '/registry/interacting',
                    },
                    {
                        title: '✍️ Authoring a registry',
                        href: '/registry/writing',
                    },
                ],
            },
            {
                title: '🗺️ Resolvers',
                links: [
                    { title: '✨ Start Here', href: '/resolvers/quickstart' },
                    { title: '🤷‍♀️ Why Resolvers', href: '/resolvers/about' },
                    {
                        title: '🏛️ Public Resolver',
                        href: '/resolvers/public',
                    },
                    {
                        title: '✍️ Writing your own resolver',
                        href: '/resolvers/writing',
                    },
                    {
                        title: '👉 Interacting with a resolver',
                        href: '/resolvers/interacting',
                    },
                    {
                        title: '⛓️ Cross Chain Gateway',
                        href: '/resolvers/ccip',
                    },
                ],
            },
            {
                title: '📰 Subnames',
                links: [
                    { title: '⚡ Quickstart', href: '/subnames/quickstart' },
                    { title: '🎁 Namewrapper', href: '/subnames/wrapper' },
                    {
                        title: '🫂 Subdomain for every NFT Holder',
                        href: '/subnames/nfts',
                    },
                    {
                        title: '✍️ Writing your own Subdomain System',
                        href: '/subnames/writing-a-subdomain-system',
                    },
                ],
            },
        ],
    ],
    [
        /^\/(records|standards|ensip)(\/.*)?/,
        [
            {
                title: '',
                links: [{ title: '👋 Welcome', href: '/standards' }],
            },
            {
                title: '💾 Records',
                links: [
                    { title: '⚡ Quickstart', href: '/records/quickstart' },
                    {
                        title: '💾 Record Types and Standards',
                        href: '/records',
                    },
                    { title: '✍️ Modifying Records', href: '/records/modify' },
                ],
            },
            {
                title: '📖 Improvement Proposals (ENSIPs)',
                links: [
                    { title: '🧑‍🏫 Explained', href: '/ensip' },
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
        /^\/dao\/governance(\/.*)?/,
        [
            {
                title: '',
                links: [{ title: '👋 Welcome', href: '/dao/governance' }],
            },
            {
                title: 'Governance Process',
                links: [
                    {
                        title: 'Governance Process',
                        href: '/dao/governance/process',
                    },
                    {
                        title: 'Moderator Checklist',
                        href: '/dao/governance/moderator',
                    },
                ],
            },
        ],
    ],
    [
        /^\/dao\/proposals(\/.*)?/,
        [
            {
                title: '',
                links: [{ title: '👋 Welcome', href: '/dao/proposals' }],
            },
            {
                title: '🧠 Good to know',
                links: [
                    {
                        title: 'Submit Proposal',
                        href: '/dao/proposals/submit',
                    },
                    {
                        title: 'Voting Procedure',
                        href: '/dao/governance#passing-a-proposal',
                    },
                ],
            },
            {
                title: '📖 Proposals Term 3',
                links: [
                    {
                        title: '3.5 - [Executable] Activate new .eth Controller and Reverse Registrar',
                        href: '/dao/proposals/3.5',
                    },
                    {
                        title: '3.4 - [Executable] Fund the Endowment (first tranche)',
                        href: '/dao/proposals/3.4',
                    },
                    {
                        title: '3.3 - [Executable] Sell ETH to USDC',
                        href: '/dao/proposals/3.3',
                    },
                    {
                        title: '3.2 - [Executable] Q1/Q2 2023 Working Group Funding',
                        href: '/dao/proposals/3.2',
                    },
                    {
                        title: '3.1.3 - [Social] Q1/Q2 2023 Funding Request: Public Goods Working Group',
                        href: '/dao/proposals/3.1.3',
                    },
                    {
                        title: '3.1.2- [Social] Q1/Q2 2023 Funding Request: Meta-Governance Working Group',
                        href: '/dao/proposals/3.1.2',
                    },
                    {
                        title: '3.1.1 - [Social] Q1/Q2 2023 Funding Request: ENS Ecosystem Working Group',
                        href: '/dao/proposals/3.1.1',
                    },
                ],
            },
            {
                title: '📙 Proposals Term 2',
                links: [
                    {
                        title: '2.2.5 - [Social] Selection of an ENS endowment fund manager',
                        href: '/dao/proposals/2.2.5',
                    },
                    {
                        title: '2.2.4 - [Social] ENS Endaoment RFP',
                        href: '/dao/proposals/2.2.4',
                    },
                    {
                        title: '2.2.3 - [Executable] Q3 & Q4 2022 Public Goods WG Budget',
                        href: '/dao/proposals/2.2.3',
                    },
                    {
                        title: '2.2.2 - [Executable] Q3 & Q4 2022 Ecosystem WG Budget',
                        href: '/dao/proposals/2.2.2',
                    },
                    {
                        title: '2.2.1 - [Executable] Q3 & Q4 2022 Meta-Governance WG Budget',
                        href: '/dao/proposals/2.2.1',
                    },
                    {
                        title: '2.1 - [Executable] Funding True Names Ltd',
                        href: '/dao/proposals/2.1',
                    },
                ],
            },
            {
                title: '📗 Proposals Term 1',
                links: [
                    {
                        title: '1.9 - [Executable] Fund the Protocol Guild pilot with 200,000 $ENS',
                        href: '/dao/proposals/1.9',
                    },
                    {
                        title: '1.8 - [Social] Working Group Rules',
                        href: '/dao/proposals/1.8',
                    },
                    {
                        title: '1.7 - [Executable] End the $ENS and EP2 airdrops',
                        href: '/dao/proposals/1.7',
                    },
                    {
                        title: '1.6 - [Executable] A DAO-Governed Identity Server',
                        href: '/dao/proposals/1.6',
                    },
                    {
                        title: '1.5 - [Executable] Change to Exponential Premium Price Oracle',
                        href: '/dao/proposals/1.5',
                    },
                    {
                        title: '1.4 - [Executable] Reimburse True Names for expenses and tax obligations incurred for the DAO',
                        href: '/dao/proposals/1.4',
                    },
                    {
                        title: '1.3.4 - [Executable] Q1 & Q2 2022 Public Goods WG Budget',
                        href: '/dao/proposals/1.3.4',
                    },
                    {
                        title: '1.3.3 - [Executable] Q1 & Q2 2022 Community WG Budget',
                        href: '/dao/proposals/1.3.3',
                    },
                    {
                        title: '1.3.2 - [Executable] Q1 & Q2 2022 ENS Ecosystem WG Budget',
                        href: '/dao/proposals/1.3.2',
                    },
                    {
                        title: '1.3.1 - [Executable] Q1 & Q2 2022 Meta-Governance WG Budget',
                        href: '/dao/proposals/1.3.1',
                    },
                    {
                        title: '1.2.2 - [Social] Election of a new Director of The ENS Foundation',
                        href: '/dao/proposals/1.2.2',
                    },
                    {
                        title: '1.2.1 - [Social] Removal of Brantly Millegan as Director of the ENS Foundation',
                        href: '/dao/proposals/1.2.1',
                    },
                    {
                        title: '1.1 - [Executable] Set the temporary premium start price to $100,000',
                        href: '/dao/proposals/1.1',
                    },
                ],
            },
            {
                title: '📘 Proposals Term 0',
                links: [
                    {
                        title: '0.4 - [Social] Proposal: Creation of Foundational Working Groups and Working Group Rules',
                        href: '/dao/proposals/0.4',
                    },
                    {
                        title: '0.3 - [Social] Amend airdrop proposal to include accidentally returned funds',
                        href: '/dao/proposals/0.3',
                    },
                    {
                        title: '0.2 - [Executable] Retrospective airdrop for accounts that owned another account’s primary ENS 1',
                        href: '/dao/proposals/0.2',
                    },
                    {
                        title: '0.1 - [Social] Proposal: Transfer ENS Treasury and Contract Ownership',
                        href: '/dao/proposals/0.1',
                    },
                ],
            },
        ],
    ],
    [
        /^\/dao(\/.*)?/,
        [
            {
                title: '',
                links: [{ title: '👋 Welcome', href: '/dao' }],
            },
            {
                title: '🧑‍🎓 The interesting bits',
                links: [
                    { title: '📜 Constitution', href: '/dao/constitution' },
                    { title: '🏛️ Foundation', href: '/dao/foundation' },
                    { title: '🪂 Airdrop', href: '/dao/airdrop' },
                ],
            },
            {
                title: '🔗 Links',
                links: [
                    {
                        title: 'Discourse',
                        href: 'https://discuss.ens.domains',
                        external: true,
                    },
                    {
                        title: 'Snapshot',
                        href: 'https://snapshot.org/#/ens.eth',
                        external: true,
                    },
                    {
                        title: 'Tally',
                        href: 'https://www.withtally.com/governance/ens',
                        external: true,
                    },
                    {
                        title: 'Sybil',
                        href: 'https://sybil.org/#/delegates/ens',
                        external: true,
                    },
                ],
            },
        ],
    ],
    [
        /^\/\.*/,
        [
            {
                title: '',
                links: [{ title: '👋 Welcome', href: '/' }],
            },
            {
                title: '🧑‍🎓 Learn',
                links: [
                    { title: '📖 The Protocol', href: '/learn/protocol' },
                    { title: '📰 Deployments', href: '/learn/deployments' },
                    { title: '🔍 Resolution', href: '/learn/resolution' },
                    { title: '⛓️ Multichain', href: '/learn/multichain' },
                    { title: '🌐 DNS-Compatability', href: '/learn/dns' },
                    {
                        title: '🔗 EIP-3668 (CCIP)',
                        href: '/learn/ccip',
                    },
                ],
            },
            {
                title: '📰 A brief history',
                links: [
                    { title: '📝 Changelog', href: '/changelog' },
                    { title: '🪲 Bug Bounties', href: '/bugs' },
                    { title: '📓 Glossary', href: '/glossary' },
                ],
            },
            {
                title: '📚 Guides',
                links: [
                    {
                        title: 'Registering a .eth',
                        href: 'https://support.ens.domains/docs/core/registration/registration-steps',
                        external: true,
                    },
                    {
                        title: 'Import a DNS name',
                        href: 'https://support.ens.domains/dnstoens/importguide/connect-dns-to-ens',
                        external: true,
                    },
                    {
                        title: 'Identity in your dApps',
                        href: '/web/quickstart',
                    },
                    {
                        title: 'Subdomains for everyone',
                        href: '/subnames/quickstart',
                    },
                    {
                        title: 'The Magic of Multichain',
                        href: '/resolvers/cross-chain-resolution',
                    },
                ],
            },
        ],
    ],
];
