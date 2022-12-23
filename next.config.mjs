import nextMDX from '@next/mdx'
import { remarkPlugins } from './mdx/remark.mjs'
import { rehypePlugins } from './mdx/rehype.mjs'
import { recmaPlugins } from './mdx/recma.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    scrollRestoration: true,
  },
  images: {
    unoptimized: true
  },
  redirects() {
    return [
      {
        source: '/terminology',
        destination: '/',
        permanent: false
      },
      {
        source: '/frequently-asked-questions',
        destination: '#',
        permanent: false
      },
      {
        source: '/ens-deployments',
        destination: '#',
        permanent: false
      },
      {
        source: '/permanent-registrar-faq',
        destination: '#',
        permanent: false
      },
      {
        source: '/deploying-ens-on-a-private-chain',
        destination: '#',
        permanent: false
      },
      {
        source: '/dns-registrar-guide',
        destination: '#',
        permanent: false
      },
      {
        source: '/bug-bounty-program',
        destination: '#',
        permanent: false
      },
      {
        source: '/ens-improvement-proposals/ensip-1-ens',
        destination: '#',
        permanent: false
      },
      {
        source: '/dapp-developer-guide/ens-enabling-your-dapp',
        destination: '/guides/dapp-quickstart',
        permanent: false
      },
      {
        source: '/dapp-developer-guide/ens-libraries',
        destination: '/libraries',
        permanent: false
      },
      {
        source: '/dapp-developer-guide/working-with-ens',
        destination: '/libraries',
        permanent: false
      },
      {
        source: '/dapp-developer-guide/resolving-names',
        destination: '/forward-resolution',
        permanent: false
      },
      {
        source: '/dapp-developer-guide/managing-names',
        destination: '/modify-name',
        permanent: false
      },
      {
        source: '/dapp-developer-guide/registering-and-renewing-names',
        destination: '#',
        permanent: false
      },
      {
        source: '/dapp-developer-guide/front-end-design-guidelines',
        destination: '/design-guidelines',
        permanent: false
      },
      {
        source: '/dapp-developer-guide/ens-as-nft',
        destination: '#',
        permanent: false
      },
      {
        source: '/dapp-developer-guide/ens-l2-offchain',
        destination: '/ccip',
        permanent: false
      }
    ]
  }
}

export default withMDX(nextConfig)
