/* eslint-disable sonarjs/no-duplicate-string */
import { SectionData } from '../navigation';

export const navigation: SectionData[] = [
    {
        name: 'Home',
        href: '/',
        icon: '🏠',
        activePattern: /^\/((learn|glossary|changelog|bugs)(\/.*)?)?$/,
        links: [
            {
                title: '',
                links: [{ title: 'Welcome', href: '/', icon: '👋' }],
            },
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
                links: [{ title: 'Welcome', href: '/web', icon: '👋' }],
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
                        title: 'Do\'s and Don\'ts',
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
        href: '/resolution',
        icon: '⚙️',
        activePattern: /^\/(resolvers|subnames|registry|resolution)(\/.*)?/,
        links: [
            {
                title: '',
                links: [{ title: 'Welcome', href: '/resolution', icon: '👋' }],
            },
            {
                title: 'Resolution',
                icon: '🌐',
                links: [
                    {
                        title: 'Start Here',
                        href: '/resolution/quickstart',
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
                        wip: true,
                        icon: '✨',
                    },
                    {
                        title: 'Why Resolvers',
                        href: '/resolvers/about',
                        wip: true,
                        icon: '🤷‍♀️',
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
