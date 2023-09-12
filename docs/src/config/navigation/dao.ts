import { SectionData } from '../navigation';

export const navigation: SectionData[] = [
    {
        name: 'The ENS DAO',
        href: '/dao',
        icon: '🏛️',
        activePattern: /^\/dao(\/|(\/(foundation|airdrop|constitution)))?$/,
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
        ],
    },
    {
        name: 'Governance',
        href: '/dao/governance',
        icon: '🏛️',
        activePattern: /^\/dao\/governance(\/.*)?/,
        links: [
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
    },
    {
        name: 'Proposals',
        href: '/dao/proposals',
        icon: '📜',
        activePattern: /^\/dao\/proposals(\/.*)?/,
        links: [
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
];
