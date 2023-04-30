/* eslint-disable sonarjs/no-duplicate-string */
import nextMDX from '@next/mdx';

import { recmaPlugins } from './mdx/recma.mjs';
import { rehypePlugins } from './mdx/rehype.mjs';
import { remarkPlugins } from './mdx/remark.mjs';

const withMDX = nextMDX({
    options: {
        remarkPlugins,
        rehypePlugins,
        recmaPlugins,
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    experimental: {
        scrollRestoration: true,
    },
    images: {
        unoptimized: true,
    },
    redirects() {
        return [
            {
                source: '/quickstart',
                destination: '/web/quickstart',
                permanent: false,
            },
            {
                source: '/namewrapper',
                destination: '/subnames/wrapper',
                permanent: false,
            },
            {
                source: '/ccip',
                destination: '/learn/ccip',
                permanent: false,
            },
            // Backwards Compatibility with v1
            {
                source: '/terminology',
                destination: '/glossary',
                permanent: false,
            },
            {
                source: '/frequently-asked-questions',
                destination: '/faq',
                permanent: false,
            },
            {
                source: '/ens-deployments',
                destination: '/learn/deployments',
                permanent: false,
            },
            {
                source: '/permanent-registrar-faq',
                destination: '#',
                permanent: false,
            },
            {
                source: '/deploying-ens-on-a-private-chain',
                destination: '/dissapeared',
                permanent: false,
            },
            {
                source: '/dns-registrar-guide',
                destination: '/_/dns-registrar-guide',
                permanent: false,
            },
            {
                source: '/bug-bounty-program',
                destination: '/bugs',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-1-ens',
                destination: '/ensip/1',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-2-initial-hash-registrar',
                destination: '/ensip/2',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-3-reverse-resolution',
                destination: '/ensip/3',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-4-support-for-contract-abis',
                destination: '/ensip/4',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-5-text-records',
                destination: '/ensip/5',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-6-dns-in-ens',
                destination: '/ensip/6',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-7-contenthash-field',
                destination: '/ensip/7',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-8-interface-discovery',
                destination: '/ensip/8',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-9-multichain-address-resolution',
                destination: '/ensip/9',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-10-wildcard-resolution',
                destination: '/ensip/10',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-11-evmchain-address-resolution',
                destination: '/ensip/11',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-12-avatar-text-records',
                destination: '/ensip/12',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-13-secondary-authentication-for-ens',
                destination: '/ensip/13',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-14-platform-source-parameter',
                destination: '/ensip/14',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/ens-enabling-your-dapp',
                destination: '/web/quickstart',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/ens-libraries',
                destination: '/web/libraries',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/working-with-ens',
                destination: '/libraries',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/resolving-names',
                destination: '/web/resolution',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/managing-names',
                destination: '/resolvers/interacting',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/registering-and-renewing-names',
                destination: '/registry/interacting',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/front-end-design-guidelines',
                destination: '/web/design',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/ens-as-nft',
                destination: '/registry/about',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/ens-l2-offchain',
                destination: '/resolvers/ccip',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/ens-data-guide',
                destination: '/web/libraries',
                permanent: false,
            },
            {
                source: '/contract-api-reference/name-processing',
                destination: '/resolution/names',
                permanent: false,
            },
            {
                source: '/contract-api-reference/ens',
                destination: '/registry/about',
                permanent: false,
            },
            {
                source: '/contract-api-reference/reverseregistrar',
                destination: '/registry/reverse',
                permanent: false,
            },
            {
                source: '/contract-api-reference/testregistrar',
                destination: '/registry/test',
                permanent: false,
            },
            {
                source: '/contract-api-reference/publicresolver',
                destination: '/resolvers/public',
                permanent: false,
            },
            {
                source: '/contract-api-reference/.eth-permanent-registrar',
                destination: '/registry/eth',
                permanent: false,
            },
            {
                source: '/contract-api-reference/subgraphdata',
                destination: '/web/subgraph',
                permanent: false,
            },
            {
                source: '/contract-api-reference/subgraphdata/entities',
                destination: '/web/subgraph',
                permanent: false,
            },
            {
                source: '/contract-api-reference/subgraphdata/queries',
                destination: '/web/subgraph',
                permanent: false,
            },
            {
                source: '/contract-developer-guide/resolving-names-on-chain',
                destination: '/dissapeared',
                permanent: false,
            },
            {
                source: '/contract-developer-guide/writing-a-resolver',
                destination: '/resolvers/writing',
                permanent: false,
            },
            {
                source: '/contract-developer-guide/writing-a-registrar',
                destination: '/registry/writing',
                permanent: false,
            },
            {
                source: '/ens-migration-february-2020/guide-for-dapp-developers',
                destination: '/dissapeared',
                permanent: false,
            },
            {
                source: '/ens-migration-february-2020/technical-description',
                destination: '/dissapeared',
                permanent: false,
            },
            {
                source: '/v/governance/',
                destination: '/dao',
                permanent: false,
            },
            {
                source: '/v/governance/process',
                destination: '/dao/governance/process',
                permanent: false,
            },
            {
                source: '/v/governance/process/moderator-checklists',
                destination: '/dao/governance/moderator',
                permanent: false,
            },
            {
                source: '/v/governance/ens-dao-constitution',
                destination: '/dao/constitution',
                permanent: false,
            },
            {
                source: '/v/governance/the-ens-foundation',
                destination: '/dao/foundation',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals',
                destination: '/dao/proposals',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-0',
                destination: '/dao/proposals',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-1',
                destination: '/dao/proposals',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-2',
                destination: '/dao/proposals',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-3',
                destination: '/dao/proposals',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-0/ep1-social-proposal-transfer-ens-treasury-and-contract-ownership',
                destination: '/dao/proposals/0.1',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-0/ep2-executable-retrospective-airdrop-for-accounts-that-owned-another-accounts-primary-ens-1',
                destination: '/dao/proposals/0.2',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-0/ep3-social-amend-airdrop-proposal-to-include-accidentally-returned-funds',
                destination: '/dao/proposals/0.3',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-0/ep4-social-proposal-creation-of-foundational-working-groups-and-working-group-rules',
                destination: '/dao/proposals/0.4',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-1/ep5-executable-set-the-temporary-premium-start-price-to-usd100-000',
                destination: '/dao/proposals/1.1',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-1/ep6.1-social-removal-of-brantly-millegan-as-director-of-the-ens-foundation',
                destination: '/dao/proposals/1.2.1',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-1/ep6.2-social-election-of-a-new-director-of-the-ens-foundation',
                destination: '/dao/proposals/1.2.2',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-1/ep7.1-executable-q1-and-q2-2022-meta-governance-wg-budget',
                destination: '/dao/proposals/1.3.1',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-1/ep7.2-executable-q1-and-q2-2022-ens-ecosystem-wg-budget',
                destination: '/dao/proposals/1.3.2',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-1/ep7.3-executable-q1-and-q2-2022-community-wg-budget',
                destination: '/dao/proposals/1.3.3',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-1/ep7.4-executable-q1-and-q2-2022-public-goods-wg-budget',
                destination: '/dao/proposals/1.3.4',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-1/ep8-executable-reimburse-true-names-for-expenses-and-tax-obligations-incurred-for-the-dao',
                destination: '/dao/proposals/1.4',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-1/ep9-executable-change-to-exponential-premium-price-oracle',
                destination: '/dao/proposals/1.5',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-1/ep10-executable-a-dao-governed-identity-server',
                destination: '/dao/proposals/1.6',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-1/ep11-executable-end-airdrop',
                destination: '/dao/proposals/1.7',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-1/ep12-working-group-rules',
                destination: '/dao/proposals/1.8',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-1/ep13-protocol-guild-pilot',
                destination: '/dao/proposals/1.9',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-2/ep14-funding-true-names-ltd',
                destination: '/dao/proposals/2.1',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-2/ep16.1-executable-q3-and-q4-2022-meta-governance-wg-budget',
                destination: '/dao/proposals/2.2.1',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-2/ep16.2-executable-q3-and-q4-2022-ens-ecosystem-wg-budget',
                destination: '/dao/proposals/2.2.2',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-2/ep16.3-executable-q3-and-q4-2022-public-goods-wg-budget',
                destination: '/dao/proposals/2.2.3',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-2/ep2.2.4-social-ens-endaoment-rfp',
                destination: '/dao/proposals/2.2.4',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-2/social-ep2.2.5-selection-of-an-ens-endowment-fund-manager',
                destination: '/dao/proposals/2.2.5',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-3/ep3.1.1-social-q1-q2-2023-funding-request-ens-ecosystem-working-group',
                destination: '/dao/proposals/3.1.1',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-3/ep3.1.2-social-q1-q2-2023-funding-request-meta-governance-working-group',
                destination: '/dao/proposals/3.1.2',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-3/ep3.1.3-social-q1-q2-2023-funding-request-public-goods-working-group',
                destination: '/dao/proposals/3.1.3',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-3/ep3.2-executable-q1-q2-2023-working-group-funding',
                destination: '/dao/proposals/3.2',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-3/ep3.3-executable-sell-eth-to-usdc',
                destination: '/dao/proposals/3.3',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-3/ep3.4-fund-the-endowment',
                destination: '/dao/proposals/3.4',
                permanent: false,
            },
            {
                source: '/v/governance/governance-proposals/term-3/ep3.5-executable-activate-new-eth-controller-and-reverse-registrar',
                destination: '/dao/proposals/3.5',
                permanent: false,
            },
        ];
    },
};

export default withMDX(nextConfig);
