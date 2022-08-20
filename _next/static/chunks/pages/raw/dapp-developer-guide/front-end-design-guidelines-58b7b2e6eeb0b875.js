(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6122],{4408:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/raw/dapp-developer-guide/front-end-design-guidelines",function(){return n(8897)}])},2638:function(e,r,n){"use strict";n.d(r,{O:function(){return d},m:function(){return o}});var s=n(4637),t=n(9803),a=n.n(t),i=n(9496),o=function(e){var r=e.children,n=Array.isArray(r)?r:[r],t=(0,i.useState)(n.at(0).props.title),o=t[0],d=t[1];return(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("div",{className:"flex w-fit border-l border-l-ensl-border",style:{marginBottom:"-1px"},children:n.map((function(e,r){return(0,s.jsx)("button",{className:a()("p-2 pb-4 border-r border-t border-b",e.props.title==o?"bg-white border-ensl-border border-b-ensl-background border-b z-10":"bg-ensl-backgroundSecondary border-ensl-border hover:brightness-105"),onClick:function(){return d(e.props.title)},children:e.props.title},r)}))}),(0,s.jsx)("div",{className:"border border-ensl-border bg-ensl-background px-6",children:n.map((function(e,r){return(0,s.jsx)("div",{className:a()(o==e.props.title?"":"hidden"),children:e},r)}))})]})},d=function(e){e.title;var r=e.children;return(0,s.jsx)("div",{children:r})}},8859:function(e,r,n){"use strict";n.d(r,{zx:function(){return p},UW:function(){return g},OK:function(){return f.O},mQ:function(){return f.m}});var s=n(3712),t=n(8316);var a=n(668);var i=n(597);function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||(0,a.Z)(e,r)||(0,i.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n(4637),l=n(105),h=n(9803),c=n.n(h),u=n(9496),p=function(e){var r=o(u.useState(!1),2),n=r[0],a=r[1];return u.useEffect((function(){a(!0)}),[]),n?(0,d.jsx)(l.zx,(0,t.Z)((0,s.Z)({},e),{className:c()(e.className,"no-underline")})):(0,d.jsx)(d.Fragment,{})},m={default:"bg-ensl-accent dark:bg-ensd-accent bg-opacity-10 dark:bg-opacity-10 text-ensl-accent dark:text-ensw-accent dark:bg-ensd-accent",yellow:"bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200 dark:bg-opacity-10",error:"bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600 dark:bg-opacity-30",warning:"bg-yellow-200 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30"},g=function(e){var r=e.children,n=e.type,s=void 0===n?"default":n,t=e.emoji,a=void 0===t?"\ud83d\udca1":t;return(0,d.jsxs)("div",{className:"".concat(m[s]," flex rounded-lg callout mt-6"),children:[(0,d.jsx)("div",{className:"pl-6 pr-2 py-6 select-none text-xl",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:a}),(0,d.jsx)("div",{className:"pr-4 pl-2 py-6 noheadpats",children:r})]})},f=n(2638)},8897:function(e,r,n){"use strict";n.r(r);var s=n(4637),t=n(6988),a=n(1177),i=n(9577),o=n(8859),d=function(e){return(0,a.withSSG)((0,t.Z)({filename:"front-end-design-guidelines.mdx",route:"/raw/dapp-developer-guide/front-end-design-guidelines",meta:{description:"ENS is a tool to simplify the experience for your users. Here are a series of guidelines and tools that will help you make design choices and implement the best ENS user experience."},pageMap:[{name:"developer",children:[{name:"basics",route:"/developer/basics"},{name:"getting-started",route:"/developer/getting-started"},{name:"index",route:"/developer"},{name:"meta.json",meta:{index:{title:"Developer Documentation",type:"docs",theme:{}},"getting-started":{title:"Getting Started",type:"docs"},basics:{title:"Basics",type:"docs"},"working-directly-with-ens":{title:"Manual Contract API",type:"docs"}},locale:"en-US"},{name:"working-directly-with-ens",route:"/developer/working-directly-with-ens"}],route:"/developer"},{name:"governance",children:[{name:"index",route:"/governance"},{name:"meta.json",meta:{index:{title:"Governance Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/governance"},{name:"index",route:"/",frontMatter:{title:"Welcome"}},{name:"meta.json",meta:{index:{title:"Introduction",type:"docs",hidden:!0,theme:{}},about:{title:"About ENS",type:"docs",hidden:!0,theme:{}},user:{title:"User",type:"nav"},developer:{title:"Developer",type:"nav"},technical:{title:"Technical",type:"nav"},governance:{title:"Governance",type:"nav"},raw:{title:"Raw",type:"hidden"}},locale:"en-US"},{name:"raw",children:[{name:"SUMMARY",route:"/raw/SUMMARY"},{name:"bug-bounty-program",route:"/raw/bug-bounty-program"},{name:"contract-api-reference",children:[{name:"ENS-Contracts-Overview",route:"/raw/contract-api-reference/ENS-Contracts-Overview"},{name:"dns-registrar",route:"/raw/contract-api-reference/dns-registrar"},{name:"ens",route:"/raw/contract-api-reference/ens",frontMatter:{description:"The ENS registry."}},{name:"eth-permanent-registrar",children:[{name:"README",route:"/raw/contract-api-reference/eth-permanent-registrar/README"},{name:"controller",route:"/raw/contract-api-reference/eth-permanent-registrar/controller"},{name:"registrar",route:"/raw/contract-api-reference/eth-permanent-registrar/registrar"}],route:"/raw/contract-api-reference/eth-permanent-registrar"},{name:"name-processing",route:"/raw/contract-api-reference/name-processing",frontMatter:{description:"Describes how to normalize and hash ENS names."}},{name:"publicresolver",route:"/raw/contract-api-reference/publicresolver",frontMatter:{description:"The default public resolver."}},{name:"reverseregistrar",route:"/raw/contract-api-reference/reverseregistrar",frontMatter:{description:"The registrar responsible for managing reverse resolution via the .addr.reverse special-purpose TLD."}},{name:"testregistrar",route:"/raw/contract-api-reference/testregistrar"}],route:"/raw/contract-api-reference"},{name:"contract-developer-guide",children:[{name:"resolving-names-on-chain",route:"/raw/contract-developer-guide/resolving-names-on-chain"},{name:"writing-a-registrar",route:"/raw/contract-developer-guide/writing-a-registrar"},{name:"writing-a-resolver",route:"/raw/contract-developer-guide/writing-a-resolver"}],route:"/raw/contract-developer-guide"},{name:"dapp-developer-guide",children:[{name:"ens-as-nft",route:"/raw/dapp-developer-guide/ens-as-nft"},{name:"ens-l2-offchain",route:"/raw/dapp-developer-guide/ens-l2-offchain"},{name:"front-end-design-guidelines",route:"/raw/dapp-developer-guide/front-end-design-guidelines",frontMatter:{description:"ENS is a tool to simplify the experience for your users. Here are a series of guidelines and tools that will help you make design choices and implement the best ENS user experience."}},{name:"managing-names",route:"/raw/dapp-developer-guide/managing-names"},{name:"registering-and-renewing-names",route:"/raw/dapp-developer-guide/registering-and-renewing-names"},{name:"resolving-names",route:"/raw/dapp-developer-guide/resolving-names"}],route:"/raw/dapp-developer-guide"},{name:"deploying-ens-on-a-private-chain",route:"/raw/deploying-ens-on-a-private-chain"},{name:"dns-registrar-guide",route:"/raw/dns-registrar-guide"},{name:"ens-deployments",route:"/raw/ens-deployments"},{name:"ens-improvement-proposals",children:[{name:"README",route:"/raw/ens-improvement-proposals/README",frontMatter:{description:"Standards documentation describing the ENS protocol"}},{name:"ensip-1-ens",route:"/raw/ens-improvement-proposals/ensip-1-ens",frontMatter:{description:"Documentation of the basic ENS protocol (formerly EIP-137)."}},{name:"ensip-10-wildcard-resolution",route:"/raw/ens-improvement-proposals/ensip-10-wildcard-resolution",frontMatter:{description:"Provides a mechanism to support wildcard resolution of ENS names (formerly EIP-2544)."}},{name:"ensip-11-evmchain-address-resolution",route:"/raw/ens-improvement-proposals/ensip-11-evmchain-address-resolution",frontMatter:{description:"Introduces coinType for EVM compatible chains (amending ENSIP9)."}},{name:"ensip-12-avatar-text-records",route:"/raw/ens-improvement-proposals/ensip-12-avatar-text-records",frontMatter:{description:"A standard for storage of the avatar text record in ENS."}},{name:"ensip-2-initial-hash-registrar",route:"/raw/ens-improvement-proposals/ensip-2-initial-hash-registrar",frontMatter:{description:"Describes the hash registrar initially used to register ENS .eth domains (formerly EIP-162)."}},{name:"ensip-3-reverse-resolution",route:"/raw/ens-improvement-proposals/ensip-3-reverse-resolution",frontMatter:{description:"Specifies a TLD, registrar, and resolver interface for reverse resolution of Ethereum addresses using ENS (formerly EIP-181)."}},{name:"ensip-4-support-for-contract-abis",route:"/raw/ens-improvement-proposals/ensip-4-support-for-contract-abis",frontMatter:{description:"A mechanism for storing ABI definitions in ENS, for easy lookup of contract interfaces by callers (formerly EIP-205)."}},{name:"ensip-5-text-records",route:"/raw/ens-improvement-proposals/ensip-5-text-records",frontMatter:{description:"A standard for storage of text records in ENS (formerly EIP-634)."}},{name:"ensip-6-dns-in-ens",route:"/raw/ens-improvement-proposals/ensip-6-dns-in-ens",frontMatter:{description:"Defines a resolver profile for ENS that provides features for storage and lookup of DNS records (formerly EIP-1185)."}},{name:"ensip-7-contenthash-field",route:"/raw/ens-improvement-proposals/ensip-7-contenthash-field",frontMatter:{description:"Introduces a field for storing content addresses and hashes in ENS (formerly EIP-1577)."}},{name:"ensip-8-interface-discovery",route:"/raw/ens-improvement-proposals/ensip-8-interface-discovery",frontMatter:{description:"Defines a method of associating contract interfaces with ENS names and addresses, and of discovering those interfaces (formerly EIP-1844)."}},{name:"ensip-9-multichain-address-resolution",route:"/raw/ens-improvement-proposals/ensip-9-multichain-address-resolution",frontMatter:{description:"Introduces new overloads for the `addr` field for ENS resolvers, which permit resolution of addresses for other blockchains via ENS (formerly EIP-2304)."}}],route:"/raw/ens-improvement-proposals"},{name:"ens-migration-february-2020",children:[{name:"guide-for-dapp-developers",route:"/raw/ens-migration-february-2020/guide-for-dapp-developers"},{name:"technical-description",route:"/raw/ens-migration-february-2020/technical-description"}],route:"/raw/ens-migration-february-2020"},{name:"frequently-asked-questions",route:"/raw/frequently-asked-questions"},{name:"permanent-registrar-faq",route:"/raw/permanent-registrar-faq"},{name:"terminology",route:"/raw/terminology"}],route:"/raw"},{name:"technical",children:[{name:"about",route:"/technical/about"},{name:"index",route:"/technical"},{name:"meta.json",meta:{index:{title:"Technical Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/technical"},{name:"user",children:[{name:"index",route:"/user"},{name:"meta.json",meta:{index:{title:"User Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/user"}]},i.Z))(e)};function l(e){var r=Object.assign({h1:"h1",h3:"h3",p:"p",br:"br",ol:"ol",li:"li",strong:"strong",a:"a",h2:"h2",em:"em",img:"img",ul:"ul"},e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{children:"ENS Front-End Design Guidelines"}),"\n",(0,s.jsx)(r.h3,{children:"When to show ENS names"}),"\n",(0,s.jsxs)(r.p,{children:["In every instance a user might otherwise see an Ethereum address or content hash, you can instead display an ENS name.",(0,s.jsx)(r.br,{}),"\n","There are two primary use cases for allowing users to display ENS names in your dapp:"]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Replacing Ethereum addresses with ENS names"}),": When users are exploring the front-end of your dapp, wherever you would display an Ethereum address, you can instead display an ENS name."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Resolving input fields"}),": You can allow the user to write an ENS name in an input field that expects an Ethereum address, rather than entering the Ethereum address."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Beyond these use cases, remember that the ",(0,s.jsx)(r.a,{href:"../contract-api-reference/publicresolver.md",children:"ENS Public Resolver"})," allows you to link ",(0,s.jsx)(r.a,{href:"https://docs.ens.domains/contract-api-reference/publicresolver",children:"different kinds of resources"}),", such as content stored on IPFS or Swarm, or any arbitrary data like text fields, to ENS names. This means there are other situations in which you might want to use ENS in your dapp. For example, if you are using complicated IPFS or Swarm hashes it is possible to convert the hashes to human readable names using ENS. Learn more about the different use cases in the chapter about ",(0,s.jsx)(r.a,{href:"ens-enabling-your-dapp.md",children:"Enabling ENS in your DApp"}),"."]}),"\n",(0,s.jsx)(r.h2,{children:"1. Replacing Ethereum Addresses with ENS Names"}),"\n",(0,s.jsxs)(o.UW,{type:"warning",emoji:"\u26a0\ufe0f",children:[(0,s.jsxs)(r.p,{children:["An ENS name (as a substitute for an Ethereum Address) ",(0,s.jsx)(r.strong,{children:"should only be shown"})," if the user has set a ",(0,s.jsx)(r.a,{href:"https://docs.ens.domains/dapp-developer-guide/resolving-names#reverse-resolution",children:"Reverse Record"})," for their address, and if the reverse record (address > name) matches the ",(0,s.jsx)(r.a,{href:"https://docs.ens.domains/dapp-developer-guide/resolving-names#looking-up-ethereum-addresses",children:"forward resolution"})," (name > address)."]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["As a dApp developer you should therefore first check if the Reverse Record for a given address has been set by the user, and, because users can set the reverse record to be anything they want, even a name they don't own or a random string, you should immediately after check that the resolved name also resolves to the same address by performing the forward resolution. Read more ",(0,s.jsx)(r.a,{href:"https://docs.ens.domains/dapp-developer-guide/resolving-names#reverse-resolution",children:"here"})," and in the ",(0,s.jsx)(r.em,{children:"'other guidelines"}),"' section further down."]})]}),"\n",(0,s.jsx)(r.h3,{children:"1.1 - Displaying ENS names instead of Ethereum addresses"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"../../public/assets/ensguidelines_01_onlydomain_2x.jpg",alt:"example of showing just the name and the visual checksum"})}),"\n",(0,s.jsx)(r.p,{children:"When replacing Ethereum addresses with ENS names you should consider these facts and best practices:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Consider adding a visual checksum:"})," it is important to indicate to the user that a name is an ENS name that relates to an Ethereum address or other hash, rather than an http link. To do this, it is advisable to associate the ENS name with some form of visual checksum: ",(0,s.jsx)(r.a,{href:"http://discuss.conflux.network/t/comparing-the-efficacy-of-visual-checksums-identicons-vs-blockies-vs-custom/59",children:"identicons, Blockies"})," or other custom algorithmic representation of the address."]}),"\n"]}),"\n",(0,s.jsx)(o.UW,{type:"error",emoji:"\u2757",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Visual checksums"})," like ",(0,s.jsx)(r.a,{href:"https://medium.com/@austin_48503/vanity-blockie-miner-for-ethereum-902fccf0a427",children:"identicons can be spoofed"})," or imitated. Therefore they are ",(0,s.jsx)(r.strong,{children:"not meant as a security mechanism."})," They are only meant as an indicator, to let the user understand that the name is ",(0,s.jsx)(r.strong,{children:"just a different representation of an Ethereum Address."})]})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Design a truncated version of the ENS name:"})," ENS names can be very long; besides not being character-limited, users can create an infinite number of subdomains and subdomains of subdomains. If you do show a truncated version of the name, you should provide a way to view the full name, such as expanding it on hover."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Not all ENS names end with .eth"}),": ENS names normally end with .eth. However other top-level domains (TLD) are currently supported (.xyz, .luxe, .kred, .art, .club) and more will be in the future. Consider this if you are thinking about displaying the TLD part in the truncated view of long names."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{children:"1.2 - Always provide an option to see the Ethereum address associated with the ENS name"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"../../public/assets/ensguidelines_03_expanded1.jpg",alt:"by clicking the name, this expanded pop-up appears showing the name with the full address"})}),"\n",(0,s.jsx)(r.p,{children:"If you are showing the ENS name in its entirety or a truncated version, you should:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Always provide the user a way to display the full Ethereum address"}),": The above example illustrates a pop-up option. Another option would be to use a tooltip. However, consider that floating / pop-ups may be more appropriate than tooltips because the former also supports the other features described here."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Provide a view where you display both the ENS name"})," ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"and"})})," ",(0,s.jsx)(r.strong,{children:"the Ethereum address together"}),": If the pop-up hides the name and only shows the address it's less friendly than showing both at the same time."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Allow the user to copy the full Ethereum address"}),": Allow the user to copy the full address either through a copy button or by selecting it. Tooltips displaying the ENS name in this case should stay visible and not automatically disappear."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Optionally give the user a way to automatically open the Ethereum address in a block explorer"})," such as Etherscan (the external link icon in the above example)."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Optionally show the"})," ",(0,s.jsx)(r.strong,{children:"balance amount, but only to the current signed-in user."}),' User research shows that users tend to recognise their own Ethereum address through their balance, as well as the address itself. This is meant only for the currently "signed in" user: only show their own balance and avoid showing the balance of other users.']}),"\n"]}),"\n",(0,s.jsx)(r.h3,{children:"1.3 - Displaying ENS names and Ethereum addresses together"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"../../public/assets/ensguidelines_02_nameandaddress_2x.jpg",alt:"example of names with the address visible at the same time"})}),"\n",(0,s.jsxs)(r.p,{children:["In some situations you might want to display both the ENS name ",(0,s.jsx)(r.em,{children:"and"})," the Ethereum address to which it resolves. These layouts can be useful when:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Displaying the currently connected user"}),": For the user badge, for example, it could be appropriate to display both the ENS name and a short version of the Ethereum address."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"The user inputs an ENS name into an input field"}),": This will be described in greater detail in the next chapter that discusses input field resolution."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"In other high-risk situations"}),": These are situations where the user wants to confirm who a given user/address is, or if you notice that your users keep clicking ENS names because they want to see the Ethereum address in the pop-up, then you could substitute the simple version (only the ENS name) with one that displays both the name and the address."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{children:"2. Resolving Input Fields"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"../../public/assets/ensguidelines_02b_nameandaddressclear.jpg",alt:"when resolving an input show both the ENS name and the Address together"})}),"\n",(0,s.jsx)(r.p,{children:"Input fields where a user is supposed to insert Ethereum addresses should also accept and resolve ENS names. These inputs indicate that the user wants to interact with another user's Ethereum address or contract."}),"\n",(0,s.jsx)(r.p,{children:"Follow these guidelines to create the best experience:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Wait before resolving the ENS name"}),": Wait until the user has typed the last TLD, e.g. .eth, .xyz, .luxe or .kred before resolving the name. Alternatively wait until 0.2 - 1.0 seconds after the user has stopped typing in the input field (avoid the ",(0,s.jsx)(r.a,{href:"https://github.com/MetaMask/metamask-extension/issues/4380",children:"eager resolution problem"}),")."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Don't overwrite the input field with the Ethereum address:"})," Show the resolved ENS name near the input field instead."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Always display both the ENS name"})," ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"and"})})," ",(0,s.jsx)(r.strong,{children:"the Ethereum address together"})," : Do this after it has successfully been resolved and possibly add also a visual checksum following the suggestions in guideline 1.1."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{children:"Other guidelines and tips"}),"\n",(0,s.jsx)(r.h3,{children:"What to do if the Reverse Record doesn't correspond to the Forward Resolution?"}),"\n",(0,s.jsxs)(r.p,{children:["As mentioned before, user can set the ",(0,s.jsx)(r.a,{href:"https://docs.ens.domains/dapp-developer-guide/resolving-names#reverse-resolution",children:"Reverse Record"})," to be anything they want, even a name owned by another user or a completely random string. This is why, after retrieving the name written in the Reverse Record, a dApp developer should also check that it matches the forward resolution, which means the address that ENS name points to.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"If the two don't match, you MUST NOT show the human readable name and simply leave the plain Ethereum Address."})," If you don't, users may be able to impersonate other users in your dApp.",(0,s.jsx)(r.br,{}),"\n","The chapter on Reverse Resolution has ",(0,s.jsx)(r.a,{href:"https://docs.ens.domains/dapp-developer-guide/resolving-names#reverse-resolution",children:"code"})," for you to do this check."]}),"\n",(0,s.jsx)(r.h3,{children:"Options for displaying usernames"}),"\n",(0,s.jsx)(r.p,{children:"The obvious choice is to use the user's ENS name as a username. You can do this by providing a mechanism for your users to register a name under your own subdomain, or by looking up the user's ENS name using reverse resolution."}),"\n",(0,s.jsx)(r.h3,{children:(0,s.jsx)(r.strong,{children:"Caching and Updating ENS Names"})}),"\n",(0,s.jsxs)(r.p,{children:["If your dApp needs to display many Ethereum Addresses or ENS Names in the UI, you can also consider ",(0,s.jsx)(r.strong,{children:"caching"})," the ENS Name after it has been resolved (and verified) or after the user has added the name in an input field."]}),"\n",(0,s.jsxs)(r.p,{children:["Your ",(0,s.jsx)(r.strong,{children:"optimistic UI"})," can safely display the names from cache ",(0,s.jsx)(r.strong,{children:"in all non-risky situations"}),", in which your user for example is simply browsing, but doesn't need to act or make decisions, especially risky ones, based on the information displayed.",(0,s.jsx)(r.br,{}),"\n","However, ",(0,s.jsx)(r.strong,{children:"in all"})," ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"risky"})})," ",(0,s.jsx)(r.strong,{children:"situations"})," (eg transferring ETH, tokens or other value), or when the user is interacting with another ENS Name / Ethereum Address, you should ",(0,s.jsx)(r.strong,{children:"perform a direct live resolution"})," and get the most up to date information from the ENS Registry."]}),"\n",(0,s.jsxs)(r.p,{children:["Also consider that users can change their information in the ENS registry at any time so you should ",(0,s.jsx)(r.strong,{children:"periodically validate the information you cached"}),". For this you can also subscribe to certain ",(0,s.jsx)(r.strong,{children:"Events"})," made available by the contracts (especially ",(0,s.jsx)(r.a,{href:"https://docs.ens.domains/contract-api-reference/publicresolver#set-ethereum-address",children:"AddrChanged"}),", and ",(0,s.jsx)(r.a,{href:"https://docs.ens.domains/contract-api-reference/publicresolver#set-canonical-name",children:"NameChanged"}),")."]}),"\n",(0,s.jsx)(r.p,{children:"****"}),"\n",(0,s.jsx)(r.h3,{children:"Notes on displaying Ethereum Addresses (with or without ENS names)"}),"\n",(0,s.jsxs)(r.p,{children:["Even when ENS names are not available, ",(0,s.jsx)(r.a,{href:"https://medium.com/@lyricalpolymath/web3designdecisionframework-e84075816515",children:"research"})," ",(0,s.jsx)(r.a,{href:"https://medium.com/@lyricalpolymath/web3-design-principles-f21db2f240c1",children:"shows"})," that there are some good practices to follow when displaying Ethereum addresses in dApps."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Always show the initial ' 0x '"})," to indicate it's an address."]}),"\n",(0,s.jsxs)(r.li,{children:["When displaying the name in shorthand versions, ",(0,s.jsx)(r.strong,{children:"show the first 4 and last 4 characters of the address"}),". This is not a security requirement as vanity addresses can be spoofed relatively simply; this is a good practice because some users check the beginning of the name and others check the end of the name. Also, four is the highest number of elements that our mind can easily chunk, parse and remember well."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Always provide a way to display the full Ethereum address."})," Use the same pop-up component that you would use to display ENS names or a tooltip style."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"../../public/assets/ensguidelines_03_expanded2simple_justatooltip2.jpg",alt:"decentralandUI Tooltip showing the full Address"})}),"\n",(0,s.jsx)(r.p,{children:"Other guidelines previously mentioned also apply for simple Ethereum addresses:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Allow the user to copy the full Ethereum address"})," (which mean that tooltips might not be good practice)."]}),"\n",(0,s.jsxs)(r.li,{children:["(Optionally) allow the user to automatically ",(0,s.jsx)(r.strong,{children:"open the address in a block explorer."})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{children:"Front-End tools"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Aragon-UI"})," - ",(0,s.jsx)(r.a,{href:"https://github.com/aragon/design/issues/3",children:"Address Badge component"})," (",(0,s.jsx)(r.a,{href:"https://github.com/aragon/design",children:"Design Files"})," / ",(0,s.jsx)(r.a,{href:"https://github.com/aragon/aragon-ui/tree/master/src/components/Badge",children:"code"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Decentraland-UI"})," - ",(0,s.jsx)(r.a,{href:"https://ui.decentraland.org/?selectedKind=Address&selectedStory=Tooltip&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Fstories%2Fstories-panel",children:"address Tooltip"})," (not ENS specific)"]}),"\n"]})]})}r.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(d,Object.assign({},e,{children:(0,s.jsx)(l,e)}))}}},function(e){e.O(0,[4698,9214,9774,2888,179],(function(){return r=4408,e(e.s=r);var r}));var r=e.O();_N_E=r}]);