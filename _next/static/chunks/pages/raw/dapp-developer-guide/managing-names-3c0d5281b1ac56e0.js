(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2013],{1419:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/raw/dapp-developer-guide/managing-names",function(){return n(333)}])},2638:function(e,r,n){"use strict";n.d(r,{O:function(){return c},m:function(){return i}});var t=n(4637),a=n(9803),s=n.n(a),o=n(9496),i=function(e){var r=e.children,n=Array.isArray(r)?r:[r],a=(0,o.useState)(n.at(0).props.title),i=a[0],c=a[1];return(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)("div",{className:"flex w-fit border-l border-l-ensl-border",style:{marginBottom:"-1px"},children:n.map((function(e,r){return(0,t.jsx)("button",{className:s()("p-2 pb-4 border-r border-t border-b",e.props.title==i?"bg-white border-ensl-border border-b-ensl-background border-b z-10":"bg-ensl-backgroundSecondary border-ensl-border hover:brightness-105"),onClick:function(){return c(e.props.title)},children:e.props.title},r)}))}),(0,t.jsx)("div",{className:"border border-ensl-border bg-ensl-background px-6",children:n.map((function(e,r){return(0,t.jsx)("div",{className:s()(i==e.props.title?"":"hidden"),children:e},r)}))})]})},c=function(e){e.title;var r=e.children;return(0,t.jsx)("div",{children:r})}},8859:function(e,r,n){"use strict";n.d(r,{zx:function(){return h},UW:function(){return g},OK:function(){return f.O},mQ:function(){return f.m}});var t=n(3712),a=n(8316);var s=n(668);var o=n(597);function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||(0,s.Z)(e,r)||(0,o.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n(4637),d=n(105),l=n(9803),p=n.n(l),m=n(9496),h=function(e){var r=i(m.useState(!1),2),n=r[0],s=r[1];return m.useEffect((function(){s(!0)}),[]),n?(0,c.jsx)(d.zx,(0,a.Z)((0,t.Z)({},e),{className:p()(e.className,"no-underline dark:shadow-none")})):(0,c.jsx)(c.Fragment,{})},u={default:"bg-ensl-accent dark:bg-ensd-accent bg-opacity-10 dark:bg-opacity-10 text-ensl-accent dark:text-ensw-accent dark:bg-ensd-accent",yellow:"bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200 dark:bg-opacity-10",error:"bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600 dark:bg-opacity-30",warning:"bg-yellow-200 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30"},g=function(e){var r=e.children,n=e.type,t=void 0===n?"default":n,a=e.emoji,s=void 0===a?"\ud83d\udca1":a;return(0,c.jsxs)("div",{className:"".concat(u[t]," flex rounded-lg callout mt-6"),children:[(0,c.jsx)("div",{className:"pl-6 pr-2 py-6 select-none text-xl",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:s}),(0,c.jsx)("div",{className:"pr-4 pl-2 py-6 noheadpats",children:r})]})},f=n(2638)},333:function(e,r,n){"use strict";n.r(r);var t=n(4637),a=n(6988),s=n(1177),o=n(9577),i=n(8859),c=function(e){return(0,s.withSSG)((0,a.Z)({filename:"managing-names.mdx",route:"/raw/dapp-developer-guide/managing-names",meta:{},pageMap:[{name:"developer",children:[{name:"basics",route:"/developer/basics"},{name:"getting-started",route:"/developer/getting-started"},{name:"index",route:"/developer"},{name:"meta.json",meta:{index:{title:"Developer Documentation",type:"docs",theme:{}},"getting-started":{title:"Getting Started",type:"docs"},basics:{title:"Basics",type:"docs"},"working-directly-with-ens":{title:"Manual Contract API",type:"docs"}},locale:"en-US"},{name:"working-directly-with-ens",route:"/developer/working-directly-with-ens"}],route:"/developer"},{name:"governance",children:[{name:"index",route:"/governance"},{name:"meta.json",meta:{index:{title:"Governance Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/governance"},{name:"index",route:"/",frontMatter:{title:"Welcome"}},{name:"meta.json",meta:{index:{title:"Introduction",type:"docs",hidden:!0,theme:{}},about:{title:"About ENS",type:"docs",hidden:!0,theme:{}},user:{title:"User",type:"nav"},developer:{title:"Developer",type:"nav"},technical:{title:"Technical",type:"nav"},governance:{title:"Governance",type:"nav"},raw:{title:"Raw",type:"hidden"}},locale:"en-US"},{name:"raw",children:[{name:"SUMMARY",route:"/raw/SUMMARY"},{name:"bug-bounty-program",route:"/raw/bug-bounty-program"},{name:"contract-api-reference",children:[{name:"ENS-Contracts-Overview",route:"/raw/contract-api-reference/ENS-Contracts-Overview"},{name:"dns-registrar",route:"/raw/contract-api-reference/dns-registrar"},{name:"ens",route:"/raw/contract-api-reference/ens",frontMatter:{description:"The ENS registry."}},{name:"eth-permanent-registrar",children:[{name:"README",route:"/raw/contract-api-reference/eth-permanent-registrar/README"},{name:"controller",route:"/raw/contract-api-reference/eth-permanent-registrar/controller"},{name:"registrar",route:"/raw/contract-api-reference/eth-permanent-registrar/registrar"}],route:"/raw/contract-api-reference/eth-permanent-registrar"},{name:"name-processing",route:"/raw/contract-api-reference/name-processing",frontMatter:{description:"Describes how to normalize and hash ENS names."}},{name:"publicresolver",route:"/raw/contract-api-reference/publicresolver",frontMatter:{description:"The default public resolver."}},{name:"reverseregistrar",route:"/raw/contract-api-reference/reverseregistrar",frontMatter:{description:"The registrar responsible for managing reverse resolution via the .addr.reverse special-purpose TLD."}},{name:"testregistrar",route:"/raw/contract-api-reference/testregistrar"}],route:"/raw/contract-api-reference"},{name:"contract-developer-guide",children:[{name:"resolving-names-on-chain",route:"/raw/contract-developer-guide/resolving-names-on-chain"},{name:"writing-a-registrar",route:"/raw/contract-developer-guide/writing-a-registrar"},{name:"writing-a-resolver",route:"/raw/contract-developer-guide/writing-a-resolver"}],route:"/raw/contract-developer-guide"},{name:"dapp-developer-guide",children:[{name:"ens-as-nft",route:"/raw/dapp-developer-guide/ens-as-nft"},{name:"ens-l2-offchain",route:"/raw/dapp-developer-guide/ens-l2-offchain"},{name:"front-end-design-guidelines",route:"/raw/dapp-developer-guide/front-end-design-guidelines",frontMatter:{description:"ENS is a tool to simplify the experience for your users. Here are a series of guidelines and tools that will help you make design choices and implement the best ENS user experience."}},{name:"managing-names",route:"/raw/dapp-developer-guide/managing-names"},{name:"registering-and-renewing-names",route:"/raw/dapp-developer-guide/registering-and-renewing-names"},{name:"resolving-names",route:"/raw/dapp-developer-guide/resolving-names"}],route:"/raw/dapp-developer-guide"},{name:"deploying-ens-on-a-private-chain",route:"/raw/deploying-ens-on-a-private-chain"},{name:"dns-registrar-guide",route:"/raw/dns-registrar-guide"},{name:"ens-deployments",route:"/raw/ens-deployments"},{name:"ens-improvement-proposals",children:[{name:"README",route:"/raw/ens-improvement-proposals/README",frontMatter:{description:"Standards documentation describing the ENS protocol"}},{name:"ensip-1-ens",route:"/raw/ens-improvement-proposals/ensip-1-ens",frontMatter:{description:"Documentation of the basic ENS protocol (formerly EIP-137)."}},{name:"ensip-10-wildcard-resolution",route:"/raw/ens-improvement-proposals/ensip-10-wildcard-resolution",frontMatter:{description:"Provides a mechanism to support wildcard resolution of ENS names (formerly EIP-2544)."}},{name:"ensip-11-evmchain-address-resolution",route:"/raw/ens-improvement-proposals/ensip-11-evmchain-address-resolution",frontMatter:{description:"Introduces coinType for EVM compatible chains (amending ENSIP9)."}},{name:"ensip-12-avatar-text-records",route:"/raw/ens-improvement-proposals/ensip-12-avatar-text-records",frontMatter:{description:"A standard for storage of the avatar text record in ENS."}},{name:"ensip-2-initial-hash-registrar",route:"/raw/ens-improvement-proposals/ensip-2-initial-hash-registrar",frontMatter:{description:"Describes the hash registrar initially used to register ENS .eth domains (formerly EIP-162)."}},{name:"ensip-3-reverse-resolution",route:"/raw/ens-improvement-proposals/ensip-3-reverse-resolution",frontMatter:{description:"Specifies a TLD, registrar, and resolver interface for reverse resolution of Ethereum addresses using ENS (formerly EIP-181)."}},{name:"ensip-4-support-for-contract-abis",route:"/raw/ens-improvement-proposals/ensip-4-support-for-contract-abis",frontMatter:{description:"A mechanism for storing ABI definitions in ENS, for easy lookup of contract interfaces by callers (formerly EIP-205)."}},{name:"ensip-5-text-records",route:"/raw/ens-improvement-proposals/ensip-5-text-records",frontMatter:{description:"A standard for storage of text records in ENS (formerly EIP-634)."}},{name:"ensip-6-dns-in-ens",route:"/raw/ens-improvement-proposals/ensip-6-dns-in-ens",frontMatter:{description:"Defines a resolver profile for ENS that provides features for storage and lookup of DNS records (formerly EIP-1185)."}},{name:"ensip-7-contenthash-field",route:"/raw/ens-improvement-proposals/ensip-7-contenthash-field",frontMatter:{description:"Introduces a field for storing content addresses and hashes in ENS (formerly EIP-1577)."}},{name:"ensip-8-interface-discovery",route:"/raw/ens-improvement-proposals/ensip-8-interface-discovery",frontMatter:{description:"Defines a method of associating contract interfaces with ENS names and addresses, and of discovering those interfaces (formerly EIP-1844)."}},{name:"ensip-9-multichain-address-resolution",route:"/raw/ens-improvement-proposals/ensip-9-multichain-address-resolution",frontMatter:{description:"Introduces new overloads for the `addr` field for ENS resolvers, which permit resolution of addresses for other blockchains via ENS (formerly EIP-2304)."}}],route:"/raw/ens-improvement-proposals"},{name:"ens-migration-february-2020",children:[{name:"guide-for-dapp-developers",route:"/raw/ens-migration-february-2020/guide-for-dapp-developers"},{name:"technical-description",route:"/raw/ens-migration-february-2020/technical-description"}],route:"/raw/ens-migration-february-2020"},{name:"frequently-asked-questions",route:"/raw/frequently-asked-questions"},{name:"permanent-registrar-faq",route:"/raw/permanent-registrar-faq"},{name:"terminology",route:"/raw/terminology"}],route:"/raw"},{name:"technical",children:[{name:"about",route:"/technical/about"},{name:"index",route:"/technical"},{name:"meta.json",meta:{index:{title:"Technical Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/technical"},{name:"user",children:[{name:"index",route:"/user"},{name:"meta.json",meta:{index:{title:"User Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/user"}]},o.Z))(e)};function d(e){var r=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",a:"a"},e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{children:"Managing Names"}),"\n",(0,t.jsx)(r.h2,{children:"Transferring a Name"}),"\n",(0,t.jsx)(r.p,{children:"Each name in ENS has an owner. This account or contract is the only one that may make changes to the name in the ENS registry. The owner of a name can transfer ownership to any other account."}),"\n",(0,t.jsxs)(i.mQ,{children:[(0,t.jsx)(i.OK,{title:"ensjs",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"await ens.name('alice.eth').setOwner('0x1234...');\n"})})}),(0,t.jsx)(i.OK,{title:"go-ens",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'// opts are go-ethereum\'s bind.TransactOpts\nerr := registry.SetOwner(opts, "alice.eth", common.HexToAddress("0x1234..."))\n'})})}),(0,t.jsx)(i.OK,{title:"web3.py",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"ns.setup_owner('alice.eth', '0x1234...')\n"})})})]}),"\n",(0,t.jsx)(r.h2,{children:"Creating Subdomains"}),"\n",(0,t.jsx)(r.p,{children:"The owner of any domain can configure subdomains as desired. This is achieved by creating a subdomain and setting its owner to the desired address - this can be the same as the owner of the parent domain, or any other address."}),"\n",(0,t.jsxs)(i.mQ,{children:[(0,t.jsx)(i.OK,{title:"ensjs",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"await ens.name('alice.eth').createSubdomain('iam');\n"})})}),(0,t.jsx)(i.OK,{title:"go-ens",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'// opts are go-ethereum\'s bind.TransactOpts\nerr := registry.SetSubdomainOwner(opts, "alice.eth", "iam", common.HexToAddress("0x1234..."))\n'})})}),(0,t.jsxs)(i.OK,{title:"web3.py",children:[(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"ns.setup_owner('iam.alice.eth', '0x1234...')\n"})}),(0,t.jsx)(r.p,{children:"Additionally, web3.py provides a convenience method to create a subdomain, set a resolver, and configure an address record all at once:"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"ns.setup_address('iam.alice.eth', '0x1234...')\n"})}),(0,t.jsx)(r.p,{children:"In the common case that the name should be pointed to the owner's address, the second argument is optional."})]})]}),"\n",(0,t.jsx)(r.h2,{children:"Setting a Resolver"}),"\n",(0,t.jsx)(r.p,{children:"Before a newly created domain or subdomain can be used, a resolver address must be set. You may also want to do this if an updated resolver implementation is available that supports features that you want to make use of."}),"\n",(0,t.jsx)(r.p,{children:"Most commonly, names are set to use a 'standard' resolver called the public resolver, which provides commonly-used functionality, but anyone may write and deploy their own special-purpose resolver; see the resolver interface definition for details."}),"\n",(0,t.jsxs)(i.mQ,{children:[(0,t.jsxs)(i.OK,{title:"ensjs",children:[(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"await ens.name('iam.alice.eth').setResolver('0x1234');\n"})}),(0,t.jsx)(r.p,{children:"On mainnet and the Kovan test network, 'resolver.eth' is configured to point to the latest deployed version of the public resolver, making it possible to easily configure a name to use the public resolver:"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const resolver = await ens.resolver('resolver.eth').addr();\nawait ens.setResolver('iam.alice.eth', resolver, {from: ...});\n"})})]}),(0,t.jsx)(i.OK,{title:"go-ens",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'// opts are go-ethereum\'s bind.TransactOpts\nerr := registry.SetResolver(opts, "iam.alice.eth", common.HexToAddress("0x1234..."))\n'})})}),(0,t.jsx)(i.OK,{title:"web3.py",children:(0,t.jsxs)(r.p,{children:["Not supported. web3.py automatically uses the public resolver when ",(0,t.jsx)(r.code,{children:"setup_address"})," is called, and does not support setting custom resolvers."]})})]}),"\n",(0,t.jsx)(r.p,{children:"Note that changing the resolver for a name will not automatically migrate records from the old resolver over; to do this you will need to follow the process outlined below for updating records."}),"\n",(0,t.jsx)(r.h2,{children:"Updating Records"}),"\n",(0,t.jsx)(r.p,{children:"To change the resources an address resolves to, it's necessary to update that name's records in its resolver."}),"\n",(0,t.jsx)(r.p,{children:"Each resolver may specify its own mechanism for updating records, but a standard method is implemented by the public resolver and many others. Some libraries provide functionality for updating a resolver's records using this interface."}),"\n",(0,t.jsx)(r.h3,{children:"Updating the Address Record"}),"\n",(0,t.jsxs)(i.mQ,{children:[(0,t.jsx)(i.OK,{title:"ensjs",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"await ens.name('iam.alice.eth').setAddr('ETH', '0x1234...');\n"})})}),(0,t.jsx)(i.OK,{title:"go-ens",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'resolver, err := ens.NewResolver(client, "iam.alice.eth")\n// opts are go-ethereum\'s bind.TransactOpts\nerr := resolver.SetAddress(opts, common.HexToAddress("0x1234..."))\n'})})}),(0,t.jsx)(i.OK,{title:"web3.js",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"ens.setAddress('iam.alice.eth, '0x1234...', {from: ...});\n"})})}),(0,t.jsx)(i.OK,{title:"web3.py",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"ns.setup_address('iam.alice.eth', '0x1234...')\n"})})})]}),"\n",(0,t.jsx)(r.h3,{children:"Updating Other Records"}),"\n",(0,t.jsx)(r.p,{children:"Some libraries - presently only ensjs, go-ens and web3.js - support updating other record types, such as content hashes and text records, using the same pattern. For example, to set or update a text record:"}),"\n",(0,t.jsxs)(i.mQ,{children:[(0,t.jsx)(i.OK,{title:"ensjs",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"ens.name('iam.alice.eth').setText('test', 'Test record');\n"})})}),(0,t.jsx)(i.OK,{title:"go-ens",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'// opts are go-ethereum\'s bind.TransactOpts\nerr := resolver.SetContenthash(opts, []byte{0x12, 0x34...})\nerr := resolver.SetAbi(opts, "Sample", `[{"constant":true,"inputs":...}]`, big.NewInt(1))\nerr := resolver.SetText(opts, "Sample", `Hello, world`)\n'})})}),(0,t.jsx)(i.OK,{title:"web3.js",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"ens.setText('iam.alice.eth', 'Test', 'Test record', {from: ...});\n"})})})]}),"\n",(0,t.jsx)(r.h3,{children:"Updating multiple records in one transaction"}),"\n",(0,t.jsxs)(r.p,{children:["Public Resolver has  ",(0,t.jsx)(r.code,{children:"multicall"}),"  that permits users to set multiple records in a single operation. Read ",(0,t.jsx)(r.a,{href:"https://docs.ens.domains/contract-api-reference/publicresolver#multicall",children:"PublicResolver"})," section for more detail."]}),"\n",(0,t.jsx)(r.h2,{children:"Configuring Reverse Resolution"}),"\n",(0,t.jsx)(r.p,{children:"While 'regular' resolution involves mapping from a name to an address, reverse resolution maps from an address back to a name - or other metadata. ENS supports reverse resolution to allow applications to display ENS names in place of hexadecimal addresses."}),"\n",(0,t.jsxs)(r.p,{children:["Before this can be done, the owner of the address has to configure reverse resolution for their address. This is done by calling the ",(0,t.jsx)(r.code,{children:"claim()"})," method on the reverse resolver, found at the special name 'addr.reverse'."]}),"\n",(0,t.jsxs)(r.p,{children:["Most commonly this is accomplished via a user-interface such as the ",(0,t.jsx)(r.a,{href:"https://manager.ens.domains/",children:"ENS Manager DApp"}),". go-ens and web3.py also provide functionality for this:"]}),"\n",(0,t.jsxs)(i.mQ,{children:[(0,t.jsx)(i.OK,{title:"go-ens",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'reverseRegistrar, err := ens.NewReverseRegistrar(client)\n// opts are go-ethereum\'s bind.TransactOpts\nerr := reverseRegistrar.SetName(opts, "iam.alice.eth")\n'})})}),(0,t.jsx)(i.OK,{title:"web3.py",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"ns.setup_name('iam.alice.eth', '0x1234...')\n"})})})]})]})}r.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(c,Object.assign({},e,{children:(0,t.jsx)(d,e)}))}}},function(e){e.O(0,[4698,9214,9774,2888,179],(function(){return r=1419,e(e.s=r);var r}));var r=e.O();_N_E=r}]);