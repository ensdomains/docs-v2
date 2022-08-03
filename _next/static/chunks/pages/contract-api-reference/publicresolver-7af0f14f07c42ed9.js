(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8981],{7813:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contract-api-reference/publicresolver",function(){return r(3461)}])},2638:function(e,n,r){"use strict";r.d(n,{O:function(){return a},m:function(){return d}});var t=r(4637),s=r(9803),i=r.n(s),o=r(9496),d=function(e){var n=e.children,r=Array.isArray(n)?n:[n],s=(0,o.useState)(r.at(0).props.title),d=s[0],a=s[1];return(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)("div",{className:"flex w-fit border-l border-l-ensl-border",style:{marginBottom:"-1px"},children:r.map((function(e,n){return(0,t.jsx)("button",{className:i()("p-2 pb-4 border-r border-t border-b",e.props.title==d?"bg-white border-ensl-border border-b-ensl-background border-b z-10":"bg-ensl-backgroundSecondary border-ensl-border hover:brightness-105"),onClick:function(){return a(e.props.title)},children:e.props.title},n)}))}),(0,t.jsx)("div",{className:"border border-ensl-border bg-ensl-background px-6",children:r.map((function(e,n){return(0,t.jsx)("div",{className:i()(d==e.props.title?"":"hidden"),children:e},n)}))})]})},a=function(e){e.title;var n=e.children;return(0,t.jsx)("div",{children:n})}},8965:function(e,n,r){"use strict";r.d(n,{UW:function(){return i},OK:function(){return o.O},mQ:function(){return o.m}});var t=r(4637),s=(r(9496),{default:"bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200 dark:bg-opacity-10",error:"bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600 dark:bg-opacity-30",warning:"bg-yellow-200 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30"}),i=function(e){var n=e.children,r=e.type,i=void 0===r?"default":r,o=e.emoji,d=void 0===o?"\ud83d\udca1":o;return(0,t.jsxs)("div",{className:"".concat(s[i]," flex rounded-lg callout mt-6"),children:[(0,t.jsx)("div",{className:"pl-3 pr-2 py-2 select-none text-xl",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:d}),(0,t.jsx)("div",{className:"pr-4 py-2",children:n})]})},o=r(2638)},3461:function(e,n,r){"use strict";r.r(n);var t=r(4637),s=r(6988),i=r(1177),o=r(2370),d=r(8965),a=function(e){return(0,i.withSSG)((0,s.Z)({filename:"publicresolver.mdx",route:"/contract-api-reference/publicresolver",meta:{description:"The default public resolver."},pageMap:[{name:"README",route:"/README"},{name:"SUMMARY",route:"/SUMMARY"},{name:"bug-bounty-program",route:"/bug-bounty-program"},{name:"contract-api-reference",children:[{name:"ENS-Contracts-Overview",route:"/contract-api-reference/ENS-Contracts-Overview"},{name:"dns-registrar",route:"/contract-api-reference/dns-registrar"},{name:"ens",route:"/contract-api-reference/ens",frontMatter:{description:"The ENS registry."}},{name:"eth-permanent-registrar",children:[{name:"README",route:"/contract-api-reference/eth-permanent-registrar/README"},{name:"controller",route:"/contract-api-reference/eth-permanent-registrar/controller"},{name:"registrar",route:"/contract-api-reference/eth-permanent-registrar/registrar"}],route:"/contract-api-reference/eth-permanent-registrar"},{name:"name-processing",route:"/contract-api-reference/name-processing",frontMatter:{description:"Describes how to normalize and hash ENS names."}},{name:"publicresolver",route:"/contract-api-reference/publicresolver",frontMatter:{description:"The default public resolver."}},{name:"reverseregistrar",route:"/contract-api-reference/reverseregistrar",frontMatter:{description:"The registrar responsible for managing reverse resolution via the .addr.reverse special-purpose TLD."}},{name:"testregistrar",route:"/contract-api-reference/testregistrar"}],route:"/contract-api-reference"},{name:"contract-developer-guide",children:[{name:"resolving-names-on-chain",route:"/contract-developer-guide/resolving-names-on-chain"},{name:"writing-a-registrar",route:"/contract-developer-guide/writing-a-registrar"},{name:"writing-a-resolver",route:"/contract-developer-guide/writing-a-resolver"}],route:"/contract-developer-guide"},{name:"dapp-developer-guide",children:[{name:"ens-as-nft",route:"/dapp-developer-guide/ens-as-nft"},{name:"ens-enabling-your-dapp",route:"/dapp-developer-guide/ens-enabling-your-dapp"},{name:"ens-l2-offchain",route:"/dapp-developer-guide/ens-l2-offchain"},{name:"ens-libraries",route:"/dapp-developer-guide/ens-libraries"},{name:"front-end-design-guidelines",route:"/dapp-developer-guide/front-end-design-guidelines",frontMatter:{description:"ENS is a tool to simplify the experience for your users. Here are a series of guidelines and tools that will help you make design choices and implement the best ENS user experience."}},{name:"managing-names",route:"/dapp-developer-guide/managing-names"},{name:"registering-and-renewing-names",route:"/dapp-developer-guide/registering-and-renewing-names"},{name:"resolving-names",route:"/dapp-developer-guide/resolving-names"},{name:"working-with-ens",route:"/dapp-developer-guide/working-with-ens"}],route:"/dapp-developer-guide"},{name:"deploying-ens-on-a-private-chain",route:"/deploying-ens-on-a-private-chain"},{name:"developer",children:[{name:"index",route:"/developer"},{name:"meta.json",meta:{index:{title:"Developer Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/developer"},{name:"dns-registrar-guide",route:"/dns-registrar-guide"},{name:"ens-deployments",route:"/ens-deployments"},{name:"ens-improvement-proposals",children:[{name:"README",route:"/ens-improvement-proposals/README",frontMatter:{description:"Standards documentation describing the ENS protocol"}},{name:"ensip-1-ens",route:"/ens-improvement-proposals/ensip-1-ens",frontMatter:{description:"Documentation of the basic ENS protocol (formerly EIP-137)."}},{name:"ensip-10-wildcard-resolution",route:"/ens-improvement-proposals/ensip-10-wildcard-resolution",frontMatter:{description:"Provides a mechanism to support wildcard resolution of ENS names (formerly EIP-2544)."}},{name:"ensip-11-evmchain-address-resolution",route:"/ens-improvement-proposals/ensip-11-evmchain-address-resolution",frontMatter:{description:"Introduces coinType for EVM compatible chains (amending ENSIP9)."}},{name:"ensip-12-avatar-text-records",route:"/ens-improvement-proposals/ensip-12-avatar-text-records",frontMatter:{description:"A standard for storage of the avatar text record in ENS."}},{name:"ensip-2-initial-hash-registrar",route:"/ens-improvement-proposals/ensip-2-initial-hash-registrar",frontMatter:{description:"Describes the hash registrar initially used to register ENS .eth domains (formerly EIP-162)."}},{name:"ensip-3-reverse-resolution",route:"/ens-improvement-proposals/ensip-3-reverse-resolution",frontMatter:{description:"Specifies a TLD, registrar, and resolver interface for reverse resolution of Ethereum addresses using ENS (formerly EIP-181)."}},{name:"ensip-4-support-for-contract-abis",route:"/ens-improvement-proposals/ensip-4-support-for-contract-abis",frontMatter:{description:"A mechanism for storing ABI definitions in ENS, for easy lookup of contract interfaces by callers (formerly EIP-205)."}},{name:"ensip-5-text-records",route:"/ens-improvement-proposals/ensip-5-text-records",frontMatter:{description:"A standard for storage of text records in ENS (formerly EIP-634)."}},{name:"ensip-6-dns-in-ens",route:"/ens-improvement-proposals/ensip-6-dns-in-ens",frontMatter:{description:"Defines a resolver profile for ENS that provides features for storage and lookup of DNS records (formerly EIP-1185)."}},{name:"ensip-7-contenthash-field",route:"/ens-improvement-proposals/ensip-7-contenthash-field",frontMatter:{description:"Introduces a field for storing content addresses and hashes in ENS (formerly EIP-1577)."}},{name:"ensip-8-interface-discovery",route:"/ens-improvement-proposals/ensip-8-interface-discovery",frontMatter:{description:"Defines a method of associating contract interfaces with ENS names and addresses, and of discovering those interfaces (formerly EIP-1844)."}},{name:"ensip-9-multichain-address-resolution",route:"/ens-improvement-proposals/ensip-9-multichain-address-resolution",frontMatter:{description:"Introduces new overloads for the `addr` field for ENS resolvers, which permit resolution of addresses for other blockchains via ENS (formerly EIP-2304)."}}],route:"/ens-improvement-proposals"},{name:"ens-migration-february-2020",children:[{name:"guide-for-dapp-developers",route:"/ens-migration-february-2020/guide-for-dapp-developers"},{name:"technical-description",route:"/ens-migration-february-2020/technical-description"}],route:"/ens-migration-february-2020"},{name:"frequently-asked-questions",route:"/frequently-asked-questions"},{name:"governance",children:[{name:"index",route:"/governance"},{name:"meta.json",meta:{index:{title:"Governance Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/governance"},{name:"index",route:"/",frontMatter:{title:"Welcome"}},{name:"meta.json",meta:{index:{title:"Introduction",type:"docs",hidden:!0,theme:{}},governance:{title:"Governance",type:"nav"},user:{title:"User",type:"nav"},developer:{title:"Developer",type:"nav"},technical:{title:"Technical",type:"nav"}},locale:"en-US"},{name:"permanent-registrar-faq",route:"/permanent-registrar-faq"},{name:"technical",children:[{name:"index",route:"/technical"},{name:"meta.json",meta:{index:{title:"Technical Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/technical"},{name:"terminology",route:"/terminology"},{name:"user",children:[{name:"index",route:"/user"},{name:"meta.json",meta:{index:{title:"User Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/user"}]},o.Z))(e)};function c(e){var n=Object.assign({h1:"h1",p:"p",a:"a",ul:"ul",li:"li",code:"code",strong:"strong",h2:"h2",pre:"pre",em:"em",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"PublicResolver"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/ensdomains/resolvers/blob/master/contracts/PublicResolver.sol",children:"Source"})}),"\n",(0,t.jsx)(n.p,{children:"PublicResolver implements a general-purpose ENS resolver that is suitable for most standard ENS use-cases. The public resolver permits updates to ENS records by the owner of the corresponding name."}),"\n",(0,t.jsx)(n.p,{children:"The public resolver implements the following EIPs:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-137",children:"EIP 137"})," - Contract address interface (",(0,t.jsx)(n.code,{children:"addr()"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-165",children:"EIP 165 "}),"- Interface Detection (",(0,t.jsx)(n.code,{children:"supportsInterface()"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-181",children:"EIP 181"})," - Reverse resolution (",(0,t.jsx)(n.code,{children:"name()"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-205",children:"EIP 205"})," - ABI support (",(0,t.jsx)(n.code,{children:"ABI()"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/ethereum/EIPs/pull/619",children:"EIP 619"})," - SECP256k1 public keys (",(0,t.jsx)(n.code,{children:"pubkey()"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-634",children:"EIP 634"})," - Text records (",(0,t.jsx)(n.code,{children:"text()"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1577",children:"EIP 1577"})," - Content hash support (",(0,t.jsx)(n.code,{children:"contenthash()"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-2304",children:"EIP 2304"})," - Multicoin support (",(0,t.jsx)(n.code,{children:"addr()"}),")."]}),"\n"]}),"\n",(0,t.jsx)(d.UW,{type:"warning",emoji:"\u26a0\ufe0f",children:(0,t.jsxs)(n.p,{children:["While the ",(0,t.jsx)(n.code,{children:"PublicResolver"}),"provides a convenient default implementation, many resolver implementations and versions exist. Callers ",(0,t.jsx)(n.strong,{children:"must not"})," assume that a domain uses the current version of the public resolver, or that all of the methods described here are present. To check if a resolver supports a feature, see ",(0,t.jsx)(n.a,{href:"publicresolver.md#check-interface-support",children:"Check Interface Support"}),"."]})}),"\n",(0,t.jsx)(n.h2,{children:"Check Interface Support"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function supportsInterface(bytes4 interfaceID) external pure returns (bool)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["ENS uses ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-165",children:"ERC 165"})," for interface detection. ERC 165 requires that supporting contracts implement a function, ",(0,t.jsx)(n.code,{children:"supportsInterface"}),", which takes an interface ID and returns a boolean value indicating if this interface is supported or not."]}),"\n",(0,t.jsxs)(n.p,{children:["Interface IDs are calculated as the exclusive-or of the four-byte function identifiers of each function included in the interface. For example, ",(0,t.jsx)(n.code,{children:"addr(bytes32)"})," has the function ID ",(0,t.jsx)(n.em,{children:"0x3b3b57de"}),". Because it is the only function in the Ethereum Address interface, its interface ID is also ",(0,t.jsx)(n.em,{children:"0x3b3b57de"}),", and so calling ",(0,t.jsx)(n.code,{children:"supportsInterface(0x3b3b57de)"})," will return ",(0,t.jsx)(n.em,{children:"true"})," for any resolver that supports ",(0,t.jsx)(n.code,{children:"addr()"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["ERC 165 has an interface ID of ",(0,t.jsx)(n.em,{children:"0x01ffc9a7"}),", so ",(0,t.jsx)(n.code,{children:"supportsInterface(0x01ffc9a7)"})," will always return true for any ERC 165 supporting contract (and hence for any resolver)."]}),"\n",(0,t.jsx)(n.p,{children:"Note that the public resolver does not expose explicit interfaces for setter functions, so there are no automated means to check for support for a given setter function."}),"\n",(0,t.jsx)(n.h2,{children:"Get Ethereum Address"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function addr(bytes32 node) external view returns (address)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns the Ethereum address associated with the provided ",(0,t.jsx)(n.code,{children:"node"}),", or 0 if none."]}),"\n",(0,t.jsxs)(n.p,{children:["This function has interface ID ",(0,t.jsx)(n.em,{children:"0x3b3b57de"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This function is specified in ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-137",children:"EIP 137"}),"."]}),"\n",(0,t.jsx)(n.h2,{children:"Set Ethereum Address"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function setAddr(bytes32 node, address addr) external;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Sets the Ethereum address associated with the provided ",(0,t.jsx)(n.code,{children:"node"})," to ",(0,t.jsx)(n.code,{children:"addr"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Only callable by the owner of ",(0,t.jsx)(n.code,{children:"node"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Emits the following event:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"event AddrChanged(bytes32 indexed node, address a);\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Get Blockchain Address"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function addr(bytes32 node, uint coinType) external view returns(bytes memory);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns the Blockchain address associated with the provided ",(0,t.jsx)(n.code,{children:"node"})," and ",(0,t.jsx)(n.code,{children:"coinType"}),", or 0 if none."]}),"\n",(0,t.jsxs)(n.p,{children:["This function has interface ID ",(0,t.jsx)(n.em,{children:"0xf1cb7e06"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This function is specified in ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-2304",children:"EIP 2304"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The return value is the cryptocurrency address in its native binary format and each blockchain address has a different encoding and decoding method."}),"\n",(0,t.jsxs)(n.p,{children:["For example, the Bitcoin address ",(0,t.jsx)(n.code,{children:"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"})," base58check decodes to the 21 bytes ",(0,t.jsx)(n.code,{children:"0062e907b15cbf27d5425399ebf6f0fb50ebb88f18"})," then scriptPubkey encodes to 25 bytes ",(0,t.jsx)(n.code,{children:"76a91462e907b15cbf27d5425399ebf6f0fb50ebb88f1888ac"})," whereas the BNB address ",(0,t.jsx)(n.code,{children:"bnb1grpf0955h0ykzq3ar5nmum7y6gdfl6lxfn46h2"})," Bech32 decodes to the binary representation ",(0,t.jsx)(n.code,{children:"40c2979694bbc961023d1d27be6fc4d21a9febe6"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To convert the binary representation into the address, use ",(0,t.jsx)(n.code,{children:"formatsByCoinType[SYMBOL].encoder(binary)"})," of ",(0,t.jsx)(n.a,{href:"https://github.com/ensdomains/address-encoder",children:"address-encoder"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"A zero-length string will be returned if the specified coin ID does not exist on the specified node."}),"\n",(0,t.jsx)(n.h2,{children:"Set Blockchain Address"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function setAddr(bytes32 node, uint coinType, bytes calldata a) external;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Sets the blockchain address associated with the provided ",(0,t.jsx)(n.code,{children:"node"})," and ",(0,t.jsx)(n.code,{children:"coinType"})," to ",(0,t.jsx)(n.code,{children:"addr"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"coinType"})," is the cryptocurrency coin type index from ",(0,t.jsx)(n.a,{href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md",children:"SLIP44"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To convert the address into the binary representation, use ",(0,t.jsx)(n.code,{children:"formatsByName[SYMBOL].decoder(text)"})," of ",(0,t.jsx)(n.a,{href:"https://github.com/ensdomains/address-encoder",children:"address-encoder"})]}),"\n",(0,t.jsxs)(n.p,{children:["Only callable by the owner of ",(0,t.jsx)(n.code,{children:"node"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Emits the following event:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"event AddressChanged(bytes32 indexed node, uint coinType, bytes newAddress);\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Get Canonical Name"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function name(bytes32 node) external view returns (string memory);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns the canonical ENS name associated with the provided ",(0,t.jsx)(n.code,{children:"node"}),". Used exclusively for reverse resolution."]}),"\n",(0,t.jsxs)(n.p,{children:["This function has interface ID ",(0,t.jsx)(n.em,{children:"0x691f3431"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This function is specified in ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-181",children:"EIP 181"}),"."]}),"\n",(0,t.jsx)(n.h2,{children:"Set Canonical Name"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function setName(bytes32 node, string calldata name) external;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Sets the canonical ENS name for the provided ",(0,t.jsx)(n.code,{children:"node"})," to ",(0,t.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Only callable by the owner of ",(0,t.jsx)(n.code,{children:"node"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Emits the following event:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"event NameChanged(bytes32 indexed node, string name);\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Get Content Hash"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function contenthash(bytes32 node) external view returns (bytes memory);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns the content hash for ",(0,t.jsx)(n.code,{children:"node"}),", if one exists. Values are formatted as machine-readable ",(0,t.jsx)(n.a,{href:"https://github.com/multiformats/multicodec",children:"multicodecs"}),", as specified in ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1577",children:"EIP 1577"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"contenthash"})," is used to store IPFS and Swarm content hashes, which permit resolving ENS addresses to distributed content (eg, websites) hosted on these distributed networks."]}),"\n",(0,t.jsxs)(n.p,{children:["This function has interface ID ",(0,t.jsx)(n.em,{children:"0xbc1c58d1"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This function is specified in ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1157",children:"EIP 1577"}),"."]}),"\n",(0,t.jsx)(n.h2,{children:"Set Content Hash"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function setContenthash(bytes32 node, bytes calldata hash) external;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Sets the content hash for the provided ",(0,t.jsx)(n.code,{children:"node"})," to ",(0,t.jsx)(n.code,{children:"hash"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Only callable by the owner of ",(0,t.jsx)(n.code,{children:"node"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Values are formatted as machine-readable ",(0,t.jsx)(n.a,{href:"https://github.com/multiformats/multicodec",children:"multicodecs"}),", as specified in ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1577",children:"EIP 1577"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Emits the following event:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"event ContenthashChanged(bytes32 indexed node, bytes hash);\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Get Contract ABI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"ABI(bytes32 node, uint256 contentTypes) external view returns (uint256, bytes memory);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns a matching ABI definition for the provided ",(0,t.jsx)(n.code,{children:"node"}),", if one exists. ",(0,t.jsx)(n.code,{children:"contentTypes"})," is the bitwise-OR of the encodings that the caller can accept. If multiple content types are specified, the resolver will select one to return. Currently supported content types are:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Content Type ID"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"zlib-compressed JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://cbor.io",children:"CBOR"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"URI"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ABI"})," returns a two-tuple of the content type ID and the ABI data. If no data of the appropriate content type ID was found, 0 is returned for the content type ID, and the ABI data will be the empty string."]}),"\n",(0,t.jsxs)(n.p,{children:["This function has interface ID ",(0,t.jsx)(n.em,{children:"0x2203ab56"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This function is specified in ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-205",children:"EIP 205"}),"."]}),"\n",(0,t.jsx)(n.h2,{children:"Set Contract ABI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function setABI(bytes32 node, uint256 contentType, bytes calldata data) external\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Sets or updates ABI data for ",(0,t.jsx)(n.code,{children:"node"}),". ",(0,t.jsx)(n.code,{children:"contentType"})," specifies the content type ID (see ",(0,t.jsx)(n.a,{href:"publicresolver.md#get-contract-abi",children:"Get Contract ABI"})," for valid values); exactly one type ID must be specified. ",(0,t.jsx)(n.code,{children:"data"})," contains the encoded ABI data. To clear ABI data for a name, specify the empty string for ",(0,t.jsx)(n.code,{children:"data"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Only callable by the owner of ",(0,t.jsx)(n.code,{children:"node"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Emits the following event:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"event ABIChanged(bytes32 indexed node, uint256 indexed contentType);\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Get Public Key"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function pubkey(bytes32 node) external view returns (bytes32 x, bytes32 y)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns the ECDSA SECP256k1 public key for ",(0,t.jsx)(n.code,{children:"node"}),", as a 2-tuple ",(0,t.jsx)(n.code,{children:"(x, y)"}),". If no public key is set, ",(0,t.jsx)(n.code,{children:"(0, 0)"})," is returned."]}),"\n",(0,t.jsxs)(n.p,{children:["This function has interface ID ",(0,t.jsx)(n.em,{children:"0xc8690233"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This function is specified in ",(0,t.jsx)(n.a,{href:"https://github.com/ethereum/EIPs/issues/619",children:"EIP 619"}),"."]}),"\n",(0,t.jsx)(n.h2,{children:"Set Public Key"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function setPubkey(bytes32 node, bytes32 x, bytes32 y) external\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Sets the ECDSA SECP256k1 public key for ",(0,t.jsx)(n.code,{children:"node"})," to ",(0,t.jsx)(n.code,{children:"(x, y)"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Only callable by the owner of ",(0,t.jsx)(n.code,{children:"node"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Emits the following event:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"event PubkeyChanged(bytes32 indexed node, bytes32 x, bytes32 y);\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Get Text Data"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function text(bytes32 node, string calldata key) external view returns (string memory)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Retrieves text metadata for ",(0,t.jsx)(n.code,{children:"node"}),". Each name may have multiple pieces of metadata, identified by a unique string ",(0,t.jsx)(n.code,{children:"key"}),". If no text data exists for ",(0,t.jsx)(n.code,{children:"node"})," with the key ",(0,t.jsx)(n.code,{children:"key"}),", the empty string is returned."]}),"\n",(0,t.jsxs)(n.p,{children:["Standard values for ",(0,t.jsx)(n.code,{children:"key"})," are:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"key"}),(0,t.jsx)(n.th,{children:"Meaning"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"email"}),(0,t.jsx)(n.td,{children:"An email address"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"url"}),(0,t.jsx)(n.td,{children:"A URL"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"avatar"}),(0,t.jsx)(n.td,{children:"A URL to an image used as an avatar or logo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"description"}),(0,t.jsx)(n.td,{children:"A description of the name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"notice"}),(0,t.jsx)(n.td,{children:"A notice regarding this name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"keywords"}),(0,t.jsx)(n.td,{children:"A list of comma-separated keywords, ordered by most significant first; clients that interpresent this field may choose a threshold beyond which to ignore"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["In addition, anyone may specify vendor-specific keys, which must be prefixed with ",(0,t.jsx)(n.code,{children:"vnd."}),". The following vendor-specific keys are currently known:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"key"}),(0,t.jsx)(n.th,{children:"Meaning"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"com.twitter"}),(0,t.jsx)(n.td,{children:"Twitter handle"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"com.github"}),(0,t.jsx)(n.td,{children:"Github username"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"This function has interface ID 0x59d1d43c."}),"\n",(0,t.jsxs)(n.p,{children:["This function is specified in ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-634",children:"EIP 634"}),"."]}),"\n",(0,t.jsx)(n.h2,{children:"Set Text Data"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function setText(bytes32 node, string calldata key, string calldata value) external\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Sets text metadata for ",(0,t.jsx)(n.code,{children:"node"})," with the unique key ",(0,t.jsx)(n.code,{children:"key"})," to ",(0,t.jsx)(n.code,{children:"value"}),", overwriting anything previously stored for ",(0,t.jsx)(n.code,{children:"node"})," and ",(0,t.jsx)(n.code,{children:"key"}),". To clear a text field, set it to the empty string."]}),"\n",(0,t.jsxs)(n.p,{children:["Only callable by the owner of ",(0,t.jsx)(n.code,{children:"node"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Emits the following event:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"event TextChanged(bytes32 indexed node, string indexedKey, string key);\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Multicall"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function multicall(bytes[] calldata data) external returns(bytes[] memory results)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Permits users to set multiple records in a single operation."}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"encodeABI"})," function to encode your contract calls and pass it to ",(0,t.jsx)(n.code,{children:"data"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The frontend usage will be as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'var addrSet = resolver.contract.methods[\'setAddr(bytes32,address)\'](node, accounts[1]).encodeABI();\nvar textSet = resolver.contract.methods.setText(node, "url", "https://ethereum.org/").encodeABI();\nvar tx = await resolver.multicall([addrSet, textSet], {from: accounts[0]});\n'})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(c,e)}))}}},function(e){e.O(0,[8164,3248,9774,2888,179],(function(){return n=7813,e(e.s=n);var n}));var n=e.O();_N_E=n}]);