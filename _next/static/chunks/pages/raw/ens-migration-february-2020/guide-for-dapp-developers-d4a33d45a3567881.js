(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7233],{4198:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/raw/ens-migration-february-2020/guide-for-dapp-developers",function(){return t(8201)}])},8201:function(e,r,t){"use strict";t.r(r);var n=t(4637),a=t(6988),o=t(1177),s=t(2370),i=function(e){return(0,o.withSSG)((0,a.Z)({filename:"guide-for-dapp-developers.mdx",route:"/raw/ens-migration-february-2020/guide-for-dapp-developers",meta:{},pageMap:[{name:"developer",children:[{name:"basics",route:"/developer/basics"},{name:"getting-started",route:"/developer/getting-started"},{name:"index",route:"/developer"},{name:"meta.json",meta:{index:{title:"Developer Documentation",type:"docs",theme:{}},"getting-started":{title:"Getting Started",type:"docs"},basics:{title:"Basics",type:"docs"},"working-directly-with-ens":{title:"Manual Contract API",type:"docs"}},locale:"en-US"},{name:"working-directly-with-ens",route:"/developer/working-directly-with-ens"}],route:"/developer"},{name:"governance",children:[{name:"index",route:"/governance"},{name:"meta.json",meta:{index:{title:"Governance Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/governance"},{name:"index",route:"/",frontMatter:{title:"Welcome"}},{name:"meta.json",meta:{index:{title:"Introduction",type:"docs",hidden:!0,theme:{}},about:{title:"About ENS",type:"docs",hidden:!0,theme:{}},user:{title:"User",type:"nav"},developer:{title:"Developer",type:"nav"},technical:{title:"Technical",type:"nav"},governance:{title:"Governance",type:"nav"},raw:{title:"Raw",type:"hidden"}},locale:"en-US"},{name:"raw",children:[{name:"SUMMARY",route:"/raw/SUMMARY"},{name:"bug-bounty-program",route:"/raw/bug-bounty-program"},{name:"contract-api-reference",children:[{name:"ENS-Contracts-Overview",route:"/raw/contract-api-reference/ENS-Contracts-Overview"},{name:"dns-registrar",route:"/raw/contract-api-reference/dns-registrar"},{name:"ens",route:"/raw/contract-api-reference/ens",frontMatter:{description:"The ENS registry."}},{name:"eth-permanent-registrar",children:[{name:"README",route:"/raw/contract-api-reference/eth-permanent-registrar/README"},{name:"controller",route:"/raw/contract-api-reference/eth-permanent-registrar/controller"},{name:"registrar",route:"/raw/contract-api-reference/eth-permanent-registrar/registrar"}],route:"/raw/contract-api-reference/eth-permanent-registrar"},{name:"name-processing",route:"/raw/contract-api-reference/name-processing",frontMatter:{description:"Describes how to normalize and hash ENS names."}},{name:"publicresolver",route:"/raw/contract-api-reference/publicresolver",frontMatter:{description:"The default public resolver."}},{name:"reverseregistrar",route:"/raw/contract-api-reference/reverseregistrar",frontMatter:{description:"The registrar responsible for managing reverse resolution via the .addr.reverse special-purpose TLD."}},{name:"testregistrar",route:"/raw/contract-api-reference/testregistrar"}],route:"/raw/contract-api-reference"},{name:"contract-developer-guide",children:[{name:"resolving-names-on-chain",route:"/raw/contract-developer-guide/resolving-names-on-chain"},{name:"writing-a-registrar",route:"/raw/contract-developer-guide/writing-a-registrar"},{name:"writing-a-resolver",route:"/raw/contract-developer-guide/writing-a-resolver"}],route:"/raw/contract-developer-guide"},{name:"dapp-developer-guide",children:[{name:"ens-as-nft",route:"/raw/dapp-developer-guide/ens-as-nft"},{name:"ens-l2-offchain",route:"/raw/dapp-developer-guide/ens-l2-offchain"},{name:"front-end-design-guidelines",route:"/raw/dapp-developer-guide/front-end-design-guidelines",frontMatter:{description:"ENS is a tool to simplify the experience for your users. Here are a series of guidelines and tools that will help you make design choices and implement the best ENS user experience."}},{name:"managing-names",route:"/raw/dapp-developer-guide/managing-names"},{name:"registering-and-renewing-names",route:"/raw/dapp-developer-guide/registering-and-renewing-names"},{name:"resolving-names",route:"/raw/dapp-developer-guide/resolving-names"}],route:"/raw/dapp-developer-guide"},{name:"deploying-ens-on-a-private-chain",route:"/raw/deploying-ens-on-a-private-chain"},{name:"dns-registrar-guide",route:"/raw/dns-registrar-guide"},{name:"ens-deployments",route:"/raw/ens-deployments"},{name:"ens-improvement-proposals",children:[{name:"README",route:"/raw/ens-improvement-proposals/README",frontMatter:{description:"Standards documentation describing the ENS protocol"}},{name:"ensip-1-ens",route:"/raw/ens-improvement-proposals/ensip-1-ens",frontMatter:{description:"Documentation of the basic ENS protocol (formerly EIP-137)."}},{name:"ensip-10-wildcard-resolution",route:"/raw/ens-improvement-proposals/ensip-10-wildcard-resolution",frontMatter:{description:"Provides a mechanism to support wildcard resolution of ENS names (formerly EIP-2544)."}},{name:"ensip-11-evmchain-address-resolution",route:"/raw/ens-improvement-proposals/ensip-11-evmchain-address-resolution",frontMatter:{description:"Introduces coinType for EVM compatible chains (amending ENSIP9)."}},{name:"ensip-12-avatar-text-records",route:"/raw/ens-improvement-proposals/ensip-12-avatar-text-records",frontMatter:{description:"A standard for storage of the avatar text record in ENS."}},{name:"ensip-2-initial-hash-registrar",route:"/raw/ens-improvement-proposals/ensip-2-initial-hash-registrar",frontMatter:{description:"Describes the hash registrar initially used to register ENS .eth domains (formerly EIP-162)."}},{name:"ensip-3-reverse-resolution",route:"/raw/ens-improvement-proposals/ensip-3-reverse-resolution",frontMatter:{description:"Specifies a TLD, registrar, and resolver interface for reverse resolution of Ethereum addresses using ENS (formerly EIP-181)."}},{name:"ensip-4-support-for-contract-abis",route:"/raw/ens-improvement-proposals/ensip-4-support-for-contract-abis",frontMatter:{description:"A mechanism for storing ABI definitions in ENS, for easy lookup of contract interfaces by callers (formerly EIP-205)."}},{name:"ensip-5-text-records",route:"/raw/ens-improvement-proposals/ensip-5-text-records",frontMatter:{description:"A standard for storage of text records in ENS (formerly EIP-634)."}},{name:"ensip-6-dns-in-ens",route:"/raw/ens-improvement-proposals/ensip-6-dns-in-ens",frontMatter:{description:"Defines a resolver profile for ENS that provides features for storage and lookup of DNS records (formerly EIP-1185)."}},{name:"ensip-7-contenthash-field",route:"/raw/ens-improvement-proposals/ensip-7-contenthash-field",frontMatter:{description:"Introduces a field for storing content addresses and hashes in ENS (formerly EIP-1577)."}},{name:"ensip-8-interface-discovery",route:"/raw/ens-improvement-proposals/ensip-8-interface-discovery",frontMatter:{description:"Defines a method of associating contract interfaces with ENS names and addresses, and of discovering those interfaces (formerly EIP-1844)."}},{name:"ensip-9-multichain-address-resolution",route:"/raw/ens-improvement-proposals/ensip-9-multichain-address-resolution",frontMatter:{description:"Introduces new overloads for the `addr` field for ENS resolvers, which permit resolution of addresses for other blockchains via ENS (formerly EIP-2304)."}}],route:"/raw/ens-improvement-proposals"},{name:"ens-migration-february-2020",children:[{name:"guide-for-dapp-developers",route:"/raw/ens-migration-february-2020/guide-for-dapp-developers"},{name:"technical-description",route:"/raw/ens-migration-february-2020/technical-description"}],route:"/raw/ens-migration-february-2020"},{name:"frequently-asked-questions",route:"/raw/frequently-asked-questions"},{name:"permanent-registrar-faq",route:"/raw/permanent-registrar-faq"},{name:"terminology",route:"/raw/terminology"}],route:"/raw"},{name:"technical",children:[{name:"about",route:"/technical/about"},{name:"index",route:"/technical"},{name:"meta.json",meta:{index:{title:"Technical Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/technical"},{name:"user",children:[{name:"index",route:"/user"},{name:"meta.json",meta:{index:{title:"User Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/user"}]},s.Z))(e)};function d(e){var r=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ol:"ol",li:"li",a:"a"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:"Guide for DApp Developers"}),"\n",(0,n.jsx)(r.p,{children:"If you maintain a DApp, wallet, or library that depends on ENS, you will need to take action to ensure no disruption occurs for your users during and after the migration period. This document describes what you will need to do in order to update your app."}),"\n",(0,n.jsx)(r.h2,{children:"What you need to do"}),"\n",(0,n.jsx)(r.h3,{children:"Wallets, libraries, and DApps that resolve names"}),"\n",(0,n.jsx)(r.p,{children:"You should update the ENS registry address in your code to the new address of 0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e as soon as possible. This new address is functional now, and will return the same results as the old one. Switching now ensures your users will not experience any disruption or interruption of service."}),"\n",(0,n.jsx)(r.p,{children:"If you do not update the registry address by the time the migration process begins on February 3rd, your users will begin to see out-of-date results: Names registered or updated after the migration will not resolve correctly for your users."}),"\n",(0,n.jsx)(r.p,{children:"If you maintain a library, you should release a new version with the updated address, and notify users that they should update as soon as possible. You may wish to consider publishing instructions for 'monkeypatching' the new address, in situations where users cannot easily upgrade to the latest version."}),"\n",(0,n.jsx)(r.p,{children:"All ENS deployments across mainnet and all testnets now use the same addresses."}),"\n",(0,n.jsx)(r.h3,{children:"Wallets, libraries, and DApps that register or update names"}),"\n",(0,n.jsx)(r.p,{children:"If your DApp or library allows users to register names, or to make changes to existing names, you have two options:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Simply switch over to the new registry address as soon as possible. When you do, users will be temporarily unable to make changes to their names using your app until their name is migrated between the 3rd and 5th of February."}),"\n",(0,n.jsx)(r.li,{children:"When making a change to a name, call the `recordExists` function on the new registry. If it returns `true`, send the modification transaction to the new registry; otherwise, send it to the old one. If you take this option, you should still prohibit transfers of .ETH ERC721 tokens; a transfer that happens as the name is migrated could result in confusing results for users."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The migration process will automatically transfer .ETH second-level domains (eg, foo.eth) to the new registry and registrar. Subdomains (eg, bar.foo.eth) and other top-level domains (eg, foo.xyz) will need to be migrated by their owners. For more details on this process, see ",(0,n.jsx)(r.a,{href:"technical-description.md",children:"our documentation"}),", or reach out to us for help."]}),"\n",(0,n.jsx)(r.h3,{children:"ENS Secondary Marketplaces"}),"\n",(0,n.jsx)(r.p,{children:"If you operate a marketplace that trades ENS names, you should immediately stop trading them. Although this vulnerability has not been exploited so far, once its existence is publicised we expect that attackers will reverse-engineer it and exploit it. Halting trading on the current registrar will prevent your users being affected by this."}),"\n",(0,n.jsx)(r.p,{children:"After a name has been migrated, tokens on the old registrar at 0xfac7bea255a6990f749363002136af6556b31e04 no longer correspond to ENS names, and are worthless; as a result you must disable trading of these before February 3rd 00:00UTC at the very latest."}),"\n",(0,n.jsx)(r.p,{children:"You can immediately enable trading of names on the new registrar, at address 0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85. When names are migrated to this contract starting on February 3rd 00:00 UTC, domain owners will automatically have new ERC721 tokens created on this new registrar, with the same ID as those on the current registrar."})]})}r.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(i,Object.assign({},e,{children:(0,n.jsx)(d,e)}))}}},function(e){e.O(0,[8164,3248,9774,2888,179],(function(){return r=4198,e(e.s=r);var r}));var r=e.O();_N_E=r}]);