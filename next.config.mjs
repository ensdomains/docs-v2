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
            {
                source: '/resolvers',
                destination: '/resolvers/quickstart',
                permanent: false,
            },
            // Backwards Compatibility with v1
            {
                source: '/terminology',
                destination: '/',
                permanent: false,
            },
            {
                source: '/frequently-asked-questions',
                destination: '#',
                permanent: false,
            },
            {
                source: '/ens-deployments',
                destination: '#',
                permanent: false,
            },
            {
                source: '/permanent-registrar-faq',
                destination: '#',
                permanent: false,
            },
            {
                source: '/deploying-ens-on-a-private-chain',
                destination: '#',
                permanent: false,
            },
            {
                source: '/dns-registrar-guide',
                destination: '#',
                permanent: false,
            },
            {
                source: '/bug-bounty-program',
                destination: '#',
                permanent: false,
            },
            {
                source: '/ens-improvement-proposals/ensip-1-ens',
                destination: '#',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/ens-enabling-your-dapp',
                destination: '/guides/dapp-quickstart',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/ens-libraries',
                destination: '/libraries',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/working-with-ens',
                destination: '/libraries',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/resolving-names',
                destination: '/forward-resolution',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/managing-names',
                destination: '/modify-name',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/registering-and-renewing-names',
                destination: '#',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/front-end-design-guidelines',
                destination: '/design-guidelines',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/ens-as-nft',
                destination: '#',
                permanent: false,
            },
            {
                source: '/dapp-developer-guide/ens-l2-offchain',
                destination: '/ccip',
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
