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
                links: [{ title: '👋 Welcome', href: '/' }],
            },
            {
                title: '🧑‍🎓 Learn',
                links: [
                    {
                        title: '📖 The Protocol',
                        href: '/learn/protocol',
                    },
                    {
                        title: '📰 Deployments',
                        href: '/learn/deployments',
                    },
                    {
                        title: '🔍 Resolution',
                        href: '/learn/resolution',
                    },
                    {
                        title: '⛓️ Multichain',
                        href: '/learn/multichain',
                    },
                    { title: '🌐 DNS Names', href: '/learn/dns' },
                    {
                        title: '🔗 Offchain Names',
                        href: '/learn/ccip',
                        wip: true,
                    },
                ],
            },
            {
                title: '📰 A brief history',
                links: [
                    {
                        title: '📝 Changelog',
                        href: '/changelog',
                        wip: true,
                    },
                    {
                        title: '🪲 Bug Bounties',
                        href: '/bugs',
                        wip: true,
                    },
                    {
                        title: '📓 Glossary',
                        href: '/glossary',
                        wip: true,
                    },
                ],
            },
        ],
    },
    {
        name: 'Getting Started',
        href: '/web',
        icon: '📖',
        activePattern: /^\/web(\/.*)?/,
        links: [
            {
                title: '',
                links: [{ title: '👋 Welcome', href: '/web' }],
            },
            {
                title: '🌐 Web / Querying',
                links: [
                    {
                        title: '⚡ Quickstart',
                        href: '/web/quickstart',
                    },
                    {
                        title: '🛠️ Tools and Libraries',
                        href: '/web/libraries',
                    },
                    { title: '🔍 Address', href: '/web/resolution' },
                    { title: '🔍 Records', href: '/web/records' },
                    { title: '🔍 Avatars', href: '/web/avatars' },
                    {
                        title: '🔍 Primary Names',
                        href: '/web/reverse',
                    },
                    {
                        title: '🔍 List Names',
                        href: '/web/enumerate',
                    },
                    {
                        title: '✍️ Sign In With Ethereum (SIWE)',
                        href: '/web/siwe',
                        wip: true,
                    },
                ],
            },
            {
                title: '⚙️ Advanced',
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
                title: '🖼️ Design Guidelines',
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
        name: 'Advanced Usage',
        href: '/resolution',
        icon: '⚙️',
        activePattern: /^\/(resolvers|subnames|registry|resolution)(\/.*)?/,
        links: [
            {
                title: '',
                links: [{ title: '👋 Welcome', href: '/resolution' }],
            },
            {
                title: '🌐 Resolution',
                links: [
                    {
                        title: '✨ Start Here',
                        href: '/resolution/quickstart',
                        wip: true,
                    },
                    {
                        title: '⚙️ Name Processing',
                        href: '/resolution/names',
                        wip: true,
                    },
                ],
            },
            {
                title: '🗺️ Resolvers',
                links: [
                    {
                        title: '✨ Start Here',
                        href: '/resolvers/quickstart',
                        wip: true,
                    },
                    {
                        title: '🤷‍♀️ Why Resolvers',
                        href: '/resolvers/about',
                        wip: true,
                    },
                    {
                        title: '🏛️ Public Resolver',
                        href: '/resolvers/public',
                        wip: true,
                    },
                    {
                        title: '✍️ Writing your own resolver',
                        href: '/resolvers/writing',
                        wip: true,
                    },
                    {
                        title: '👉 Interacting with a resolver',
                        href: '/resolvers/interacting',
                        wip: true,
                    },
                    {
                        title: '⛓️ Cross Chain Resolution',
                        href: '/resolvers/ccip',
                        wip: true,
                    },
                ],
            },
            {
                title: '🏛️ Registries',
                links: [
                    {
                        title: '✨ Start Here',
                        href: '/registry/quickstart',
                        wip: true,
                    },
                    {
                        title: '🗒️ ETH Registrar',
                        href: '/registry/eth',
                        wip: true,
                    },
                    {
                        title: '🗒️ DNS Registrar',
                        href: '/registry/dns',
                        wip: true,
                    },
                    {
                        title: '🗒️ Test Registrar',
                        href: '/registry/test',
                        wip: true,
                    },
                    {
                        title: '🗒️ Reverse Registrar',
                        href: '/registry/reverse',
                        wip: true,
                    },
                    {
                        title: '👉 Interacting with registry',
                        wip: true,
                        href: '/registry/interacting',
                    },
                    {
                        title: '✍️ Authoring a registry',
                        wip: true,
                        href: '/registry/writing',
                    },
                ],
            },
            {
                title: '📰 Subnames',
                links: [
                    {
                        title: '⚡ Quickstart',
                        href: '/subnames/quickstart',
                        wip: true,
                    },
                    {
                        title: '🎁 Namewrapper',
                        href: '/subnames/wrapper',
                        wip: true,
                    },
                    {
                        title: '🫂 Subdomain for every NFT Holder',
                        href: '/subnames/nfts',
                        wip: true,
                    },
                    {
                        title: '✍️ Writing your own Subdomain System',
                        href: '/subnames/writing-a-subdomain-system',
                        wip: true,
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
                links: [{ title: '👋 Welcome', href: '/ensip' }],
            },
            {
                title: '📖 Improvement Proposals (ENSIPs)',
                links: [
                    {
                        title: '🧑‍🏫 Explained',
                        href: '/ensip',
                        wip: true,
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
