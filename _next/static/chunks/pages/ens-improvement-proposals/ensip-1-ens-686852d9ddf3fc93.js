(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1778],{6974:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ens-improvement-proposals/ensip-1-ens",function(){return r(8953)}])},8953:function(e,n,r){"use strict";r.r(n);var s=r(4637),t=r(6988),o=r(1177),i=r(2370),a=function(e){return(0,o.withSSG)((0,t.Z)({filename:"ensip-1-ens.mdx",route:"/ens-improvement-proposals/ensip-1-ens",meta:{description:"Documentation of the basic ENS protocol (formerly EIP-137)."},pageMap:[{name:"README",route:"/README"},{name:"SUMMARY",route:"/SUMMARY"},{name:"bug-bounty-program",route:"/bug-bounty-program"},{name:"contract-api-reference",children:[{name:"ENS-Contracts-Overview",route:"/contract-api-reference/ENS-Contracts-Overview"},{name:"dns-registrar",route:"/contract-api-reference/dns-registrar"},{name:"ens",route:"/contract-api-reference/ens",frontMatter:{description:"The ENS registry."}},{name:"eth-permanent-registrar",children:[{name:"README",route:"/contract-api-reference/eth-permanent-registrar/README"},{name:"controller",route:"/contract-api-reference/eth-permanent-registrar/controller"},{name:"registrar",route:"/contract-api-reference/eth-permanent-registrar/registrar"}],route:"/contract-api-reference/eth-permanent-registrar"},{name:"name-processing",route:"/contract-api-reference/name-processing",frontMatter:{description:"Describes how to normalize and hash ENS names."}},{name:"publicresolver",route:"/contract-api-reference/publicresolver",frontMatter:{description:"The default public resolver."}},{name:"reverseregistrar",route:"/contract-api-reference/reverseregistrar",frontMatter:{description:"The registrar responsible for managing reverse resolution via the .addr.reverse special-purpose TLD."}},{name:"testregistrar",route:"/contract-api-reference/testregistrar"}],route:"/contract-api-reference"},{name:"contract-developer-guide",children:[{name:"resolving-names-on-chain",route:"/contract-developer-guide/resolving-names-on-chain"},{name:"writing-a-registrar",route:"/contract-developer-guide/writing-a-registrar"},{name:"writing-a-resolver",route:"/contract-developer-guide/writing-a-resolver"}],route:"/contract-developer-guide"},{name:"dapp-developer-guide",children:[{name:"ens-as-nft",route:"/dapp-developer-guide/ens-as-nft"},{name:"ens-enabling-your-dapp",route:"/dapp-developer-guide/ens-enabling-your-dapp"},{name:"ens-l2-offchain",route:"/dapp-developer-guide/ens-l2-offchain"},{name:"ens-libraries",route:"/dapp-developer-guide/ens-libraries"},{name:"front-end-design-guidelines",route:"/dapp-developer-guide/front-end-design-guidelines",frontMatter:{description:"ENS is a tool to simplify the experience for your users. Here are a series of guidelines and tools that will help you make design choices and implement the best ENS user experience."}},{name:"managing-names",route:"/dapp-developer-guide/managing-names"},{name:"registering-and-renewing-names",route:"/dapp-developer-guide/registering-and-renewing-names"},{name:"resolving-names",route:"/dapp-developer-guide/resolving-names"},{name:"working-with-ens",route:"/dapp-developer-guide/working-with-ens"}],route:"/dapp-developer-guide"},{name:"deploying-ens-on-a-private-chain",route:"/deploying-ens-on-a-private-chain"},{name:"developer",children:[{name:"index",route:"/developer"},{name:"meta.json",meta:{index:{title:"Developer Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/developer"},{name:"dns-registrar-guide",route:"/dns-registrar-guide"},{name:"ens-deployments",route:"/ens-deployments"},{name:"ens-improvement-proposals",children:[{name:"README",route:"/ens-improvement-proposals/README",frontMatter:{description:"Standards documentation describing the ENS protocol"}},{name:"ensip-1-ens",route:"/ens-improvement-proposals/ensip-1-ens",frontMatter:{description:"Documentation of the basic ENS protocol (formerly EIP-137)."}},{name:"ensip-10-wildcard-resolution",route:"/ens-improvement-proposals/ensip-10-wildcard-resolution",frontMatter:{description:"Provides a mechanism to support wildcard resolution of ENS names (formerly EIP-2544)."}},{name:"ensip-11-evmchain-address-resolution",route:"/ens-improvement-proposals/ensip-11-evmchain-address-resolution",frontMatter:{description:"Introduces coinType for EVM compatible chains (amending ENSIP9)."}},{name:"ensip-12-avatar-text-records",route:"/ens-improvement-proposals/ensip-12-avatar-text-records",frontMatter:{description:"A standard for storage of the avatar text record in ENS."}},{name:"ensip-2-initial-hash-registrar",route:"/ens-improvement-proposals/ensip-2-initial-hash-registrar",frontMatter:{description:"Describes the hash registrar initially used to register ENS .eth domains (formerly EIP-162)."}},{name:"ensip-3-reverse-resolution",route:"/ens-improvement-proposals/ensip-3-reverse-resolution",frontMatter:{description:"Specifies a TLD, registrar, and resolver interface for reverse resolution of Ethereum addresses using ENS (formerly EIP-181)."}},{name:"ensip-4-support-for-contract-abis",route:"/ens-improvement-proposals/ensip-4-support-for-contract-abis",frontMatter:{description:"A mechanism for storing ABI definitions in ENS, for easy lookup of contract interfaces by callers (formerly EIP-205)."}},{name:"ensip-5-text-records",route:"/ens-improvement-proposals/ensip-5-text-records",frontMatter:{description:"A standard for storage of text records in ENS (formerly EIP-634)."}},{name:"ensip-6-dns-in-ens",route:"/ens-improvement-proposals/ensip-6-dns-in-ens",frontMatter:{description:"Defines a resolver profile for ENS that provides features for storage and lookup of DNS records (formerly EIP-1185)."}},{name:"ensip-7-contenthash-field",route:"/ens-improvement-proposals/ensip-7-contenthash-field",frontMatter:{description:"Introduces a field for storing content addresses and hashes in ENS (formerly EIP-1577)."}},{name:"ensip-8-interface-discovery",route:"/ens-improvement-proposals/ensip-8-interface-discovery",frontMatter:{description:"Defines a method of associating contract interfaces with ENS names and addresses, and of discovering those interfaces (formerly EIP-1844)."}},{name:"ensip-9-multichain-address-resolution",route:"/ens-improvement-proposals/ensip-9-multichain-address-resolution",frontMatter:{description:"Introduces new overloads for the `addr` field for ENS resolvers, which permit resolution of addresses for other blockchains via ENS (formerly EIP-2304)."}}],route:"/ens-improvement-proposals"},{name:"ens-migration-february-2020",children:[{name:"guide-for-dapp-developers",route:"/ens-migration-february-2020/guide-for-dapp-developers"},{name:"technical-description",route:"/ens-migration-february-2020/technical-description"}],route:"/ens-migration-february-2020"},{name:"frequently-asked-questions",route:"/frequently-asked-questions"},{name:"governance",children:[{name:"index",route:"/governance"},{name:"meta.json",meta:{index:{title:"Governance Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/governance"},{name:"index",route:"/",frontMatter:{title:"Welcome"}},{name:"meta.json",meta:{index:{title:"Introduction",type:"docs",hidden:!0,theme:{}},governance:{title:"Governance",type:"nav"},user:{title:"User",type:"nav"},developer:{title:"Developer",type:"nav"},technical:{title:"Technical",type:"nav"}},locale:"en-US"},{name:"permanent-registrar-faq",route:"/permanent-registrar-faq"},{name:"technical",children:[{name:"index",route:"/technical"},{name:"meta.json",meta:{index:{title:"Technical Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/technical"},{name:"terminology",route:"/terminology"},{name:"user",children:[{name:"index",route:"/user"},{name:"meta.json",meta:{index:{title:"User Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/user"}]},i.Z))(e)};function d(e){var n=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",h2:"h2",p:"p",a:"a",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code",h4:"h4"},e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"ENSIP-1: ENS"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Author"})}),(0,s.jsxs)(n.th,{children:["Nick Johnson ","arachnid@notdot.net"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Status"})}),(0,s.jsx)(n.td,{children:"Final"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Created"})}),(0,s.jsx)(n.td,{children:"2016-04-04"})]})]})]}),"\n",(0,s.jsx)(n.h2,{children:"Abstract"}),"\n",(0,s.jsx)(n.p,{children:"This ENSIP describes the details of the Ethereum Name Service, a proposed protocol and ABI definition that provides flexible resolution of short, human-readable names to service and resource identifiers. This permits users and developers to refer to human-readable and easy to remember names, and permits those names to be updated as necessary when the underlying resource (contract, content-addressed data, etc) changes."}),"\n",(0,s.jsxs)(n.p,{children:["The goal of domain names is to provide stable, human-readable identifiers that can be used to specify network resources. In this way, users can enter a memorable string, such as 'vitalik.wallet' or '",(0,s.jsx)(n.a,{href:"http://www.mysite.swarm",children:"www.mysite.swarm"}),"',"," and be directed to the appropriate resource. The mapping between names and resources may change over time, so a user may change wallets, a website may change hosts, or a swarm document may be updated to a new version, without the domain name changing. Further, a domain need not specify a single resource; different record types allow the same domain to reference different resources. For instance, a browser may resolve 'mysite.swarm' to the IP address of its server by fetching its A (address) record, while a mail client may resolve the same address to a mail server by fetching its MX (mail exchanger) record."]}),"\n",(0,s.jsx)(n.h2,{children:"Motivation"}),"\n",(0,s.jsxs)(n.p,{children:["Existing ",(0,s.jsx)(n.a,{href:"https://github.com/ethereum/wiki/wiki/Registrar-ABI",children:"specifications"})," and ",(0,s.jsx)(n.a,{href:"https://ethereum.gitbooks.io/frontier-guide/content/registrar_services.html",children:"implementations"})," for name resolution in Ethereum provide basic functionality, but suffer several shortcomings that will significantly limit their long-term usefulness:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A single global namespace for all names with a single 'centralised' resolver."}),"\n",(0,s.jsx)(n.li,{children:"Limited or no support for delegation and sub-names/sub-domains."}),"\n",(0,s.jsx)(n.li,{children:"Only one record type, and no support for associating multiple copies of a record with a domain."}),"\n",(0,s.jsx)(n.li,{children:"Due to a single global implementation, no support for multiple different name allocation systems."}),"\n",(0,s.jsx)(n.li,{children:"Conflation of responsibilities: Name resolution, registration, and whois information."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Use-cases that these features would permit include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Support for subnames/sub-domains - eg, live.mysite.tld and forum.mysite.tld."}),"\n",(0,s.jsx)(n.li,{children:"Multiple services under a single name, such as a DApp hosted in Swarm, a Whisper address, and a mail server."}),"\n",(0,s.jsx)(n.li,{children:"Support for DNS record types, allowing blockchain hosting of 'legacy' names. This would permit an Ethereum client such as Mist to resolve the address of a traditional website, or the mail server for an email address, from a blockchain name."}),"\n",(0,s.jsx)(n.li,{children:"DNS gateways, exposing ENS domains via the Domain Name Service, providing easier means for legacy clients to resolve and connect to blockchain services."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The first two use-cases, in particular, can be observed everywhere on the present-day internet under DNS, and we believe them to be fundamental features of a name service that will continue to be useful as the Ethereum platform develops and matures."}),"\n",(0,s.jsx)(n.p,{children:"The normative parts of this document does not specify an implementation of the proposed system; its purpose is to document a protocol that different resolver implementations can adhere to in order to facilitate consistent name resolution. An appendix provides sample implementations of resolver contracts and libraries, which should be treated as illustrative examples only."}),"\n",(0,s.jsx)(n.p,{children:"Likewise, this document does not attempt to specify how domains should be registered or updated, or how systems can find the owner responsible for a given domain. Registration is the responsibility of registrars, and is a governance matter that will necessarily vary between top-level domains."}),"\n",(0,s.jsx)(n.p,{children:"Updating of domain records can also be handled separately from resolution. Some systems, such as swarm, may require a well defined interface for updating domains, in which event we anticipate the development of a standard for this."}),"\n",(0,s.jsx)(n.h2,{children:"Specification"}),"\n",(0,s.jsx)(n.h3,{children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"The ENS system comprises three main parts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The ENS registry"}),"\n",(0,s.jsx)(n.li,{children:"Resolvers"}),"\n",(0,s.jsx)(n.li,{children:"Registrars"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The registry is a single contract that provides a mapping from any registered name to the resolver responsible for it, and permits the owner of a name to set the resolver address, and to create subdomains, potentially with different owners to the parent domain."}),"\n",(0,s.jsx)(n.p,{children:"Resolvers are responsible for performing resource lookups for a name - for instance, returning a contract address, a content hash, or IP address(es) as appropriate. The resolver specification, defined here and extended in other ENSIPs, defines what methods a resolver may implement to support resolving different types of records."}),"\n",(0,s.jsx)(n.p,{children:"Registrars are responsible for allocating domain names to users of the system, and are the only entities capable of updating the ENS; the owner of a node in the ENS registry is its registrar. Registrars may be contracts or externally owned accounts, though it is expected that the root and top-level registrars, at a minimum, will be implemented as contracts."}),"\n",(0,s.jsx)(n.p,{children:"Resolving a name in ENS is a two-step process. First, the ENS registry is called with the name to resolve, after hashing it using the procedure described below. If the record exists, the registry returns the address of its resolver. Then, the resolver is called, using the method appropriate to the resource being requested. The resolver then returns the desired result."}),"\n",(0,s.jsx)(n.p,{children:"For example, suppose you wish to find the address of the token contract associated with 'beercoin.eth'. First, get the resolver:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'var node = namehash("beercoin.eth");\nvar resolver = ens.resolver(node);\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then, ask the resolver for the address for the contract:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var address = resolver.addr(node);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Because the ",(0,s.jsx)(n.code,{children:"namehash"})," procedure depends only on the name itself, this can be precomputed and inserted into a contract, removing the need for string manipulation, and permitting O(1) lookup of ENS records regardless of the number of components in the raw name."]}),"\n",(0,s.jsx)(n.h3,{children:"Name Syntax"}),"\n",(0,s.jsx)(n.p,{children:"ENS names must conform to the following syntax:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-raw",children:'<domain> ::= <label> | <domain> "." <label>\n<label> ::= any valid string label per [UTS46](https://unicode.org/reports/tr46/)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In short, names consist of a series of dot-separated labels. Each label must be a valid normalised label as described in ",(0,s.jsx)(n.a,{href:"https://unicode.org/reports/tr46/",children:"UTS46"})," with the options ",(0,s.jsx)(n.code,{children:"transitional=false"})," and ",(0,s.jsx)(n.code,{children:"useSTD3AsciiRules=true"}),". For Javascript implementations, a ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/idna-uts46",children:"library"})," is available that normalises and checks names."]}),"\n",(0,s.jsx)(n.p,{children:"Note that while upper and lower case letters are allowed in names, the UTS46 normalisation process case-folds labels before hashing them, so two names with different case but identical spelling will produce the same namehash."}),"\n",(0,s.jsx)(n.p,{children:"Labels and domains may be of any length, but for compatibility with legacy DNS, it is recommended that labels be restricted to no more than 64 characters each, and complete ENS names to no more than 255 characters. For the same reason, it is recommended that labels do not start or end with hyphens, or start with digits."}),"\n",(0,s.jsx)(n.h3,{children:"namehash algorithm"}),"\n",(0,s.jsx)(n.p,{children:"Before being used in ENS, names are hashed using the 'namehash' algorithm. This algorithm recursively hashes components of the name, producing a unique, fixed-length string for any valid input domain. The output of namehash is referred to as a 'node'."}),"\n",(0,s.jsx)(n.p,{children:"Pseudocode for the namehash algorithm is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def namehash(name):\n  if name == '':\n    return '\\0' * 32\n  else:\n    label, _, remainder = name.partition('.')\n    return sha3(namehash(remainder) + sha3(label))\n"})}),"\n",(0,s.jsx)(n.p,{children:"Informally, the name is split into labels, each label is hashed. Then, starting with the last component, the previous output is concatenated with the label hash and hashed again. The first component is concatenated with 32 '0' bytes. Thus, 'mysite.swarm' is processed as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"node = '\\0' * 32\nnode = sha3(node + sha3('swarm'))\nnode = sha3(node + sha3('mysite'))\n"})}),"\n",(0,s.jsx)(n.p,{children:"Implementations should conform to the following test vectors for namehash:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"namehash('') = 0x0000000000000000000000000000000000000000000000000000000000000000\nnamehash('eth') = 0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae\nnamehash('foo.eth') = 0xde9b09fd7c5f901e23a3f19fecc54828e9c848539801e86591bd9801b019f84f\n"})}),"\n",(0,s.jsx)(n.h3,{children:"Registry specification"}),"\n",(0,s.jsx)(n.p,{children:"The ENS registry contract exposes the following functions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function owner(bytes32 node) constant returns (address);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the owner (registrar) of the specified node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function resolver(bytes32 node) constant returns (address);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the resolver for the specified node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function ttl(bytes32 node) constant returns (uint64);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the time-to-live (TTL) of the node; that is, the maximum duration for which a node's information may be cached."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function setOwner(bytes32 node, address owner);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Transfers ownership of a node to another registrar. This function may only be called by the current owner of ",(0,s.jsx)(n.code,{children:"node"}),". A successful call to this function logs the event ",(0,s.jsx)(n.code,{children:"Transfer(bytes32 indexed, address)"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function setSubnodeOwner(bytes32 node, bytes32 label, address owner);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Creates a new node, ",(0,s.jsx)(n.code,{children:"sha3(node, label)"})," and sets its owner to ",(0,s.jsx)(n.code,{children:"owner"}),", or updates the node with a new owner if it already exists. This function may only be called by the current owner of ",(0,s.jsx)(n.code,{children:"node"}),". A successful call to this function logs the event ",(0,s.jsx)(n.code,{children:"NewOwner(bytes32 indexed, bytes32 indexed, address)"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function setResolver(bytes32 node, address resolver);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Sets the resolver address for ",(0,s.jsx)(n.code,{children:"node"}),". This function may only be called by the owner of ",(0,s.jsx)(n.code,{children:"node"}),". A successful call to this function logs the event ",(0,s.jsx)(n.code,{children:"NewResolver(bytes32 indexed, address)"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function setTTL(bytes32 node, uint64 ttl);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sets the TTL for a node. A node's TTL applies to the 'owner' and 'resolver' records in the registry, as well as to any information returned by the associated resolver."}),"\n",(0,s.jsx)(n.h3,{children:"Resolver specification"}),"\n",(0,s.jsx)(n.p,{children:"Resolvers may implement any subset of the record types specified here. Where a record types specification requires a resolver to provide multiple functions, the resolver MUST implement either all or none of them. Resolvers MUST specify a fallback function that throws."}),"\n",(0,s.jsx)(n.p,{children:"Resolvers have one mandatory function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function supportsInterface(bytes4 interfaceID) constant returns (bool)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"supportsInterface"})," function is documented in ENSIP-165, and returns true if the resolver implements the interface specified by the provided 4 byte identifier. An interface identifier consists of the XOR of the function signature hashes of the functions provided by that interface; in the degenerate case of single-function interfaces, it is simply equal to the signature hash of that function. If a resolver returns ",(0,s.jsx)(n.code,{children:"true"})," for ",(0,s.jsx)(n.code,{children:"supportsInterface()"}),", it must implement the functions specified in that interface."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"supportsInterface"})," must always return true for ",(0,s.jsx)(n.code,{children:"0x01ffc9a7"}),", which is the interface ID of ",(0,s.jsx)(n.code,{children:"supportsInterface"})," itself."]}),"\n",(0,s.jsx)(n.p,{children:"Currently standardised resolver interfaces are specified in the table below."}),"\n",(0,s.jsx)(n.p,{children:"The following interfaces are defined:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Interface name"}),(0,s.jsx)(n.th,{children:"Interface hash"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"addr"})}),(0,s.jsx)(n.td,{children:"0x3b3b57de"}),(0,s.jsx)(n.td,{children:"Contract address"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"name"})}),(0,s.jsx)(n.td,{children:"0x691f3431"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"ensip-3-reverse-resolution.md",children:"ENSIP-3"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ABI"})}),(0,s.jsx)(n.td,{children:"0x2203ab56"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"ensip-4-support-for-contract-abis.md",children:"ENSIP-4"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"0x59d1d43c"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"ensip-5-text-records.md",children:"ENSIP-5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"contenthash"}),(0,s.jsx)(n.td,{children:"0xbc1c58d1"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"ensip-7-contenthash-field.md",children:"ENSIP-7"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"interfaceImplementer"}),(0,s.jsx)(n.td,{children:"0xb8f2bbb4"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"ensip-8-interface-discovery.md",children:"ENSIP-8"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"addr(bytes32,uint256)"}),(0,s.jsx)(n.td,{children:"0xf1cb7e06"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"ensip-9-multichain-address-resolution.md",children:"ENSIP-9"})})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"ENSIPs may define new interfaces to be added to this registry."}),"\n",(0,s.jsxs)(n.h4,{children:["Contract Address Interface ",(0,s.jsx)("a",{href:"#addr",id:"addr"})]}),"\n",(0,s.jsx)(n.p,{children:"Resolvers wishing to support contract address resources must provide the following function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function addr(bytes32 node) constant returns (address);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the resolver supports ",(0,s.jsx)(n.code,{children:"addr"})," lookups but the requested node does not have an addr record, the resolver MUST return the zero address."]}),"\n",(0,s.jsxs)(n.p,{children:["Clients resolving the ",(0,s.jsx)(n.code,{children:"addr"})," record MUST check for a zero return value, and treat this in the same manner as a name that does not have a resolver specified - that is, refuse to send funds to or interact with the address. Failure to do this can result in users accidentally sending funds to the 0 address."]}),"\n",(0,s.jsx)(n.p,{children:"Changes to an address MUST trigger the following event:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"event AddrChanged(bytes32 indexed node, address a);\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Appendix A: Registry Implementation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"contract ENS {\n    struct Record {\n        address owner;\n        address resolver;\n        uint64 ttl;\n    }\n\n    mapping(bytes32=>Record) records;\n\n    event NewOwner(bytes32 indexed node, bytes32 indexed label, address owner);\n    event Transfer(bytes32 indexed node, address owner);\n    event NewResolver(bytes32 indexed node, address resolver);\n\n    modifier only_owner(bytes32 node) {\n        if(records[node].owner != msg.sender) throw;\n        _\n    }\n\n    function ENS(address owner) {\n        records[0].owner = owner;\n    }\n\n    function owner(bytes32 node) constant returns (address) {\n        return records[node].owner;\n    }\n\n    function resolver(bytes32 node) constant returns (address) {\n        return records[node].resolver;\n    }\n\n    function ttl(bytes32 node) constant returns (uint64) {\n        return records[node].ttl;\n    }\n\n    function setOwner(bytes32 node, address owner) only_owner(node) {\n        Transfer(node, owner);\n        records[node].owner = owner;\n    }\n\n    function setSubnodeOwner(bytes32 node, bytes32 label, address owner) only_owner(node) {\n        var subnode = sha3(node, label);\n        NewOwner(node, label, owner);\n        records[subnode].owner = owner;\n    }\n\n    function setResolver(bytes32 node, address resolver) only_owner(node) {\n        NewResolver(node, resolver);\n        records[node].resolver = resolver;\n    }\n\n    function setTTL(bytes32 node, uint64 ttl) only_owner(node) {\n        NewTTL(node, ttl);\n        records[node].ttl = ttl;\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Appendix B: Sample Resolver Implementations"}),"\n",(0,s.jsx)(n.h4,{children:"Built-in resolver"}),"\n",(0,s.jsx)(n.p,{children:"The simplest possible resolver is a contract that acts as its own name resolver by implementing the contract address resource profile:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"contract DoSomethingUseful {\n    // Other code\n\n    function addr(bytes32 node) constant returns (address) {\n        return this;\n    }\n\n    function supportsInterface(bytes4 interfaceID) constant returns (bool) {\n        return interfaceID == 0x3b3b57de || interfaceID == 0x01ffc9a7;\n    }\n\n    function() {\n        throw;\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Such a contract can be inserted directly into the ENS registry, eliminating the need for a separate resolver contract in simple use-cases. However, the requirement to 'throw' on unknown function calls may interfere with normal operation of some types of contract."}),"\n",(0,s.jsx)(n.h4,{children:"Standalone resolver"}),"\n",(0,s.jsx)(n.p,{children:"A basic resolver that implements the contract address profile, and allows only its owner to update records:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"contract Resolver {\n    event AddrChanged(bytes32 indexed node, address a);\n\n    address owner;\n    mapping(bytes32=>address) addresses;\n\n    modifier only_owner() {\n        if(msg.sender != owner) throw;\n        _\n    }\n\n    function Resolver() {\n        owner = msg.sender;\n    }\n\n    function addr(bytes32 node) constant returns(address) {\n        return addresses[node];    \n    }\n\n    function setAddr(bytes32 node, address addr) only_owner {\n        addresses[node] = addr;\n        AddrChanged(node, addr);\n    }\n\n    function supportsInterface(bytes4 interfaceID) constant returns (bool) {\n        return interfaceID == 0x3b3b57de || interfaceID == 0x01ffc9a7;\n    }\n\n    function() {\n        throw;\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After deploying this contract, use it by updating the ENS registry to reference this contract for a name, then calling ",(0,s.jsx)(n.code,{children:"setAddr()"})," with the same node to set the contract address it will resolve to."]}),"\n",(0,s.jsx)(n.h4,{children:"Public resolver"}),"\n",(0,s.jsx)(n.p,{children:"Similar to the resolver above, this contract only supports the contract address profile, but uses the ENS registry to determine who should be allowed to update entries:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"contract PublicResolver {\n    event AddrChanged(bytes32 indexed node, address a);\n    event ContentChanged(bytes32 indexed node, bytes32 hash);\n\n    ENS ens;\n    mapping(bytes32=>address) addresses;\n\n    modifier only_owner(bytes32 node) {\n        if(ens.owner(node) != msg.sender) throw;\n        _\n    }\n\n    function PublicResolver(address ensAddr) {\n        ens = ENS(ensAddr);\n    }\n\n    function addr(bytes32 node) constant returns (address ret) {\n        ret = addresses[node];\n    }\n\n    function setAddr(bytes32 node, address addr) only_owner(node) {\n        addresses[node] = addr;\n        AddrChanged(node, addr);\n    }\n\n    function supportsInterface(bytes4 interfaceID) constant returns (bool) {\n        return interfaceID == 0x3b3b57de || interfaceID == 0x01ffc9a7;\n    }\n\n    function() {\n        throw;\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Appendix C: Sample Registrar Implementation"}),"\n",(0,s.jsx)(n.p,{children:"This registrar allows users to register names at no cost if they are the first to request them."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"contract FIFSRegistrar {\n    ENS ens;\n    bytes32 rootNode;\n\n    function FIFSRegistrar(address ensAddr, bytes32 node) {\n        ens = ENS(ensAddr);\n        rootNode = node;\n    }\n\n    function register(bytes32 subnode, address owner) {\n        var node = sha3(rootNode, subnode);\n        var currentOwner = ens.owner(node);\n        if(currentOwner != 0 && currentOwner != msg.sender)\n            throw;\n\n        ens.setSubnodeOwner(rootNode, subnode, owner);\n    }\n}\n"})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(a,Object.assign({},e,{children:(0,s.jsx)(d,e)}))}}},function(e){e.O(0,[8164,3248,9774,2888,179],(function(){return n=6974,e(e.s=n);var n}));var n=e.O();_N_E=n}]);