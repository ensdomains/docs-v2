/* eslint-disable sonarjs/no-duplicate-string */
import { SectionData } from '../navigation';

export const navigation: SectionData[] = [
    {
        name: 'Intro',
        href: '/learn/protocol',
        icon: '🏠',
        activePattern: /^\/((learn|glossary|changelog|bugs)(\/.*)?)?$/,
        links: [
            // {
            //     title: '',
            //     links: [{ title: 'Welcome', href: '/', icon: '👋' }],
            // },
            {
                title: 'Learn',
                icon: '🧑‍🎓',
                links: [
                    {
                        title: 'The Protocol',
                        href: '/learn/protocol',
                        icon: '📖',
                    },
                    {
                        title: 'Deployments',
                        href: '/learn/deployments',
                        icon: '📰',
                    },
                    {
                        title: 'Resolution',
                        href: '/learn/resolution',
                        icon: '🔍',
                    },
                    {
                        title: 'Multichain',
                        href: '/learn/multichain',
                        icon: '⛓️',
                    },
                    { title: 'DNS Names', href: '/learn/dns', icon: '🌐' },
                    {
                        title: 'Offchain Names',
                        icon: '🔗',
                        href: '/learn/ccip',
                        wip: true,
                    },
                ],
            },
            {
                title: 'A brief history',
                icon: '📰',
                links: [
                    {
                        title: 'Changelog',
                        href: '/changelog',
                        wip: true,
                        icon: '📝',
                    },
                    {
                        title: 'Bug Bounties',
                        href: '/bugs',
                        wip: true,
                        icon: '🪲',
                    },
                    {
                        title: 'Glossary',
                        href: '/glossary',
                        wip: true,
                        icon: '📓',
                    },
                ],
            },
        ],
    },
    {
        name: 'Using ENS',
        href: '/web',
        icon: '📖',
        activePattern: /^\/web(\/.*)?/,
        links: [
            {
                title: '',
                links: [{ title: 'Getting Started', href: '/web', icon: '👋' }],
            },
            {
                title: 'Web / Querying',
                icon: '🌐',
                links: [
                    {
                        title: 'Quickstart',
                        href: '/web/quickstart',
                        icon: '⚡',
                    },
                    {
                        title: 'Tools and Libraries',
                        href: '/web/libraries',
                        icon: '🛠️',
                    },
                    {
                        title: 'Address Lookup',
                        href: '/web/resolution',
                        icon: '🔍',
                    },
                    { title: 'Text Records', href: '/web/records', icon: '🔍' },
                    { title: 'Avatars', href: '/web/avatars', icon: '🔍' },
                    {
                        title: 'Primary Names',
                        href: '/web/reverse',
                        icon: '🔍',
                    },
                    {
                        title: 'List Names',
                        href: '/web/enumerate',
                        icon: '🔍',
                    },
                    {
                        title: 'Sign In With Ethereum (SIWE)',
                        href: '/web/siwe',
                        wip: true,
                        icon: '✍️',
                    },
                ],
            },
            {
                title: 'Advanced',
                icon: '⚙️',
                links: [
                    {
                        title: 'Naming Smart-contracts',
                        href: '/web/naming-contracts',
                        wip: true,
                    },
                    {
                        title: 'Issuing Subdomains',
                        href: '/web/subdomains',
                        wip: true,
                    },
                    {
                        title: 'Subgraph',
                        href: '/web/subgraph',
                        wip: true,
                    },
                ],
            },
            {
                title: 'Design Guidelines',
                icon: '🖼️',
                links: [
                    // eslint-disable-next-line quotes
                    {
                        // eslint-disable-next-line prettier/prettier
                        title: 'Do\'s and Dont\'s',
                        href: '/web/design',
                        wip: true,
                    },
                    {
                        title: 'Media kit',
                        href: 'https://github.com/ensdomains/media-kit',
                        external: true,
                    },
                ],
            },
        ],
    },
    {
        name: 'Smart Contracts',
        href: '/contracts',
        icon: '⚙️',
        activePattern:
            /^\/(resolvers|contracts|subnames|registry|resolution)(\/.*)?/,
        links: [
            {
                title: '',
                links: [{ title: 'Welcome', href: '/contracts', icon: '👋' }],
            },
            {
                title: 'Resolution',
                icon: '🌐',
                links: [
                    {
                        title: 'Start Here',
                        href: '/resolution',
                        wip: true,
                        icon: '✨',
                    },
                    {
                        title: 'Name Processing',
                        href: '/resolution/names',
                        wip: true,
                        icon: '⚙️',
                    },
                ],
            },
            {
                title: 'Resolvers',
                icon: '🗺️',
                links: [
                    {
                        title: 'Start Here',
                        href: '/resolvers/quickstart',
                        icon: '✨',
                    },
                    {
                        title: 'Public Resolver',
                        href: '/resolvers/public',
                        wip: true,
                        icon: '🏛️',
                    },
                    {
                        title: 'Writing your own resolver',
                        href: '/resolvers/writing',
                        wip: true,
                        icon: '✍️',
                    },
                    {
                        title: 'Interacting with a resolver',
                        href: '/resolvers/interacting',
                        wip: true,
                        icon: '👉',
                    },
                    {
                        title: 'Cross Chain Resolution',
                        href: '/resolvers/ccip',
                        wip: true,
                        icon: '⛓️',
                    },
                    {
                        title: 'Interface Reference',
                        href: '/resolvers/interfaces',
                        wip: true,
                        icon: '✍️',
                    },
                ],
            },
            {
                title: 'Registries',
                icon: '🏛️',
                links: [
                    {
                        title: 'Start Here',
                        href: '/registry/quickstart',
                        wip: true,
                        icon: '✨',
                    },
                    {
                        title: 'ETH Registrar',
                        href: '/registry/eth',
                        wip: true,
                        icon: '🗒️',
                    },
                    {
                        title: 'DNS Registrar',
                        href: '/registry/dns',
                        wip: true,
                        icon: '🗒️',
                    },
                    {
                        title: 'Test Registrar',
                        href: '/registry/test',
                        wip: true,
                        icon: '🗒️',
                    },
                    {
                        title: 'Reverse Registrar',
                        href: '/registry/reverse',
                        wip: true,
                        icon: '🗒️',
                    },
                    {
                        title: 'Interacting with registry',
                        wip: true,
                        href: '/registry/interacting',
                        icon: '👉',
                    },
                    {
                        title: 'Authoring a registry',
                        wip: true,
                        href: '/registry/writing',
                        icon: '✍️',
                    },
                ],
            },
            {
                title: 'Subnames',
                icon: '📰',
                links: [
                    {
                        title: 'Quickstart',
                        href: '/subnames/quickstart',
                        wip: true,
                        icon: '⚡',
                    },
                    {
                        title: 'Namewrapper',
                        href: '/subnames/wrapper',
                        wip: true,
                        icon: '🎁',
                    },
                    {
                        title: 'Subdomain for every NFT Holder',
                        href: '/subnames/nfts',
                        wip: true,
                        icon: '🫂',
                    },
                    {
                        title: 'Writing your own Subdomain System',
                        href: '/subnames/writing-a-subdomain-system',
                        wip: true,
                        icon: '✍️',
                    },
                ],
            },
        ],
    },
    {
        name: 'Governance',
        href: '/dao',
        icon: '🏛️',
        activePattern: /^\/(dao|governance)(\/.*)?/,
        links: [
            {
                title: '',
                links: [{ title: '👋 Welcome', href: '/dao' }],
            },
            {
                title: '🧑‍🎓 The interesting bits',
                links: [
                    {
                        title: '📜 Constitution',
                        href: '/dao/constitution',
                    },
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
            // {
            //     title: 'Governance Process',
            //     links: [
            //         {
            //             title: 'Governance Process',
            //             href: '/dao/governance/process',
            //         },
            //         {
            //             title: 'Moderator Checklist',
            //             href: '/dao/governance/moderator',
            //         },
            //     ],
            // },
            {
                title: '🧠 Good to know',
                links: [
                    {
                        title: 'Submit Proposal',
                        href: '/dao/proposals/submit',
                    },
                    {
                        title: 'Voting Procedure',
                        href: '/dao/proposals/voting',
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
    },
    {
        name: 'Improvement Proposals',
        href: '/ensip',
        icon: '📜',
        activePattern: /^\/(standards|ensip)(\/.*)?/,
        links: [
            {
                title: '',
                links: [{ title: 'Welcome', href: '/ensip', icon: '👋' }],
            },
            {
                title: 'Improvement Proposals (ENSIPs)',
                icon: '📖',
                links: [
                    {
                        title: 'Explained',
                        href: '/ensip',
                        wip: true,
                        icon: '🧑‍🏫',
                    },
                    { title: '1 - ENS', href: '/ensip/1' },
                    { title: '2 - Hash Registrar', href: '/ensip/2' },
                    {
                        title: '3 - Reverse Resolution',
                        href: '/ensip/3',
                    },
                    { title: '4 - Contract ABIs', href: '/ensip/4' },
                    { title: '5 - Text Records', href: '/ensip/5' },
                    { title: '6 - DNS-in-ENS', href: '/ensip/6' },
                    { title: '7 - Contenthash', href: '/ensip/7' },
                    {
                        title: '8 - Interface Discovery',
                        href: '/ensip/8',
                    },
                    {
                        title: '9 - Multichain Addresses',
                        href: '/ensip/9',
                    },
                    {
                        title: '10 - Wildcard Resolution',
                        href: '/ensip/10',
                    },
                    {
                        title: '11 - EVM Compatible Chain Address',
                        href: '/ensip/11',
                    },
                    {
                        title: '12 - Avatar Text Records',
                        href: '/ensip/12',
                    },
                    {
                        title: '13 - SAFE Authentication',
                        href: '/ensip/13',
                    },
                    {
                        title: '14 - On-chain Source Parameter',
                        href: '/ensip/14',
                    },
                ],
            },
        ],
    },
    // TODO: Uncomment this
    // {
    //     name: 'Learn',
    //     href: '/learn/protocol',
    //     icon: '🎓',
    //     activePattern: /^\/learn(\/.*)?/,
    //     links: [],
    // },
];
