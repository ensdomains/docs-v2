(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3836],{6714:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/raw/contract-api-reference/ens",function(){return n(6850)}])},6850:function(e,r,n){"use strict";n.r(r);var t=n(4637),s=n(6988),a=n(1177),o=n(2370),i=function(e){return(0,a.withSSG)((0,s.Z)({filename:"ens.mdx",route:"/raw/contract-api-reference/ens",meta:{description:"The ENS registry."},pageMap:[{name:"developer",children:[{name:"basics",route:"/developer/basics"},{name:"getting-started",route:"/developer/getting-started"},{name:"index",route:"/developer"},{name:"meta.json",meta:{index:{title:"Developer Documentation",type:"docs",theme:{}},"getting-started":{title:"Getting Started",type:"docs"},basics:{title:"Basics",type:"docs"},"working-directly-with-ens":{title:"Manual Contract API",type:"docs"}},locale:"en-US"},{name:"working-directly-with-ens",route:"/developer/working-directly-with-ens"}],route:"/developer"},{name:"governance",children:[{name:"index",route:"/governance"},{name:"meta.json",meta:{index:{title:"Governance Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/governance"},{name:"index",route:"/",frontMatter:{title:"Welcome"}},{name:"meta.json",meta:{index:{title:"Introduction",type:"docs",hidden:!0,theme:{}},about:{title:"About ENS",type:"docs",hidden:!0,theme:{}},user:{title:"User",type:"nav"},developer:{title:"Developer",type:"nav"},technical:{title:"Technical",type:"nav"},governance:{title:"Governance",type:"nav"},raw:{title:"Raw",type:"hidden"}},locale:"en-US"},{name:"raw",children:[{name:"SUMMARY",route:"/raw/SUMMARY"},{name:"bug-bounty-program",route:"/raw/bug-bounty-program"},{name:"contract-api-reference",children:[{name:"ENS-Contracts-Overview",route:"/raw/contract-api-reference/ENS-Contracts-Overview"},{name:"dns-registrar",route:"/raw/contract-api-reference/dns-registrar"},{name:"ens",route:"/raw/contract-api-reference/ens",frontMatter:{description:"The ENS registry."}},{name:"eth-permanent-registrar",children:[{name:"README",route:"/raw/contract-api-reference/eth-permanent-registrar/README"},{name:"controller",route:"/raw/contract-api-reference/eth-permanent-registrar/controller"},{name:"registrar",route:"/raw/contract-api-reference/eth-permanent-registrar/registrar"}],route:"/raw/contract-api-reference/eth-permanent-registrar"},{name:"name-processing",route:"/raw/contract-api-reference/name-processing",frontMatter:{description:"Describes how to normalize and hash ENS names."}},{name:"publicresolver",route:"/raw/contract-api-reference/publicresolver",frontMatter:{description:"The default public resolver."}},{name:"reverseregistrar",route:"/raw/contract-api-reference/reverseregistrar",frontMatter:{description:"The registrar responsible for managing reverse resolution via the .addr.reverse special-purpose TLD."}},{name:"testregistrar",route:"/raw/contract-api-reference/testregistrar"}],route:"/raw/contract-api-reference"},{name:"contract-developer-guide",children:[{name:"resolving-names-on-chain",route:"/raw/contract-developer-guide/resolving-names-on-chain"},{name:"writing-a-registrar",route:"/raw/contract-developer-guide/writing-a-registrar"},{name:"writing-a-resolver",route:"/raw/contract-developer-guide/writing-a-resolver"}],route:"/raw/contract-developer-guide"},{name:"dapp-developer-guide",children:[{name:"ens-as-nft",route:"/raw/dapp-developer-guide/ens-as-nft"},{name:"ens-l2-offchain",route:"/raw/dapp-developer-guide/ens-l2-offchain"},{name:"front-end-design-guidelines",route:"/raw/dapp-developer-guide/front-end-design-guidelines",frontMatter:{description:"ENS is a tool to simplify the experience for your users. Here are a series of guidelines and tools that will help you make design choices and implement the best ENS user experience."}},{name:"managing-names",route:"/raw/dapp-developer-guide/managing-names"},{name:"registering-and-renewing-names",route:"/raw/dapp-developer-guide/registering-and-renewing-names"},{name:"resolving-names",route:"/raw/dapp-developer-guide/resolving-names"}],route:"/raw/dapp-developer-guide"},{name:"deploying-ens-on-a-private-chain",route:"/raw/deploying-ens-on-a-private-chain"},{name:"dns-registrar-guide",route:"/raw/dns-registrar-guide"},{name:"ens-deployments",route:"/raw/ens-deployments"},{name:"ens-improvement-proposals",children:[{name:"README",route:"/raw/ens-improvement-proposals/README",frontMatter:{description:"Standards documentation describing the ENS protocol"}},{name:"ensip-1-ens",route:"/raw/ens-improvement-proposals/ensip-1-ens",frontMatter:{description:"Documentation of the basic ENS protocol (formerly EIP-137)."}},{name:"ensip-10-wildcard-resolution",route:"/raw/ens-improvement-proposals/ensip-10-wildcard-resolution",frontMatter:{description:"Provides a mechanism to support wildcard resolution of ENS names (formerly EIP-2544)."}},{name:"ensip-11-evmchain-address-resolution",route:"/raw/ens-improvement-proposals/ensip-11-evmchain-address-resolution",frontMatter:{description:"Introduces coinType for EVM compatible chains (amending ENSIP9)."}},{name:"ensip-12-avatar-text-records",route:"/raw/ens-improvement-proposals/ensip-12-avatar-text-records",frontMatter:{description:"A standard for storage of the avatar text record in ENS."}},{name:"ensip-2-initial-hash-registrar",route:"/raw/ens-improvement-proposals/ensip-2-initial-hash-registrar",frontMatter:{description:"Describes the hash registrar initially used to register ENS .eth domains (formerly EIP-162)."}},{name:"ensip-3-reverse-resolution",route:"/raw/ens-improvement-proposals/ensip-3-reverse-resolution",frontMatter:{description:"Specifies a TLD, registrar, and resolver interface for reverse resolution of Ethereum addresses using ENS (formerly EIP-181)."}},{name:"ensip-4-support-for-contract-abis",route:"/raw/ens-improvement-proposals/ensip-4-support-for-contract-abis",frontMatter:{description:"A mechanism for storing ABI definitions in ENS, for easy lookup of contract interfaces by callers (formerly EIP-205)."}},{name:"ensip-5-text-records",route:"/raw/ens-improvement-proposals/ensip-5-text-records",frontMatter:{description:"A standard for storage of text records in ENS (formerly EIP-634)."}},{name:"ensip-6-dns-in-ens",route:"/raw/ens-improvement-proposals/ensip-6-dns-in-ens",frontMatter:{description:"Defines a resolver profile for ENS that provides features for storage and lookup of DNS records (formerly EIP-1185)."}},{name:"ensip-7-contenthash-field",route:"/raw/ens-improvement-proposals/ensip-7-contenthash-field",frontMatter:{description:"Introduces a field for storing content addresses and hashes in ENS (formerly EIP-1577)."}},{name:"ensip-8-interface-discovery",route:"/raw/ens-improvement-proposals/ensip-8-interface-discovery",frontMatter:{description:"Defines a method of associating contract interfaces with ENS names and addresses, and of discovering those interfaces (formerly EIP-1844)."}},{name:"ensip-9-multichain-address-resolution",route:"/raw/ens-improvement-proposals/ensip-9-multichain-address-resolution",frontMatter:{description:"Introduces new overloads for the `addr` field for ENS resolvers, which permit resolution of addresses for other blockchains via ENS (formerly EIP-2304)."}}],route:"/raw/ens-improvement-proposals"},{name:"ens-migration-february-2020",children:[{name:"guide-for-dapp-developers",route:"/raw/ens-migration-february-2020/guide-for-dapp-developers"},{name:"technical-description",route:"/raw/ens-migration-february-2020/technical-description"}],route:"/raw/ens-migration-february-2020"},{name:"frequently-asked-questions",route:"/raw/frequently-asked-questions"},{name:"permanent-registrar-faq",route:"/raw/permanent-registrar-faq"},{name:"terminology",route:"/raw/terminology"}],route:"/raw"},{name:"technical",children:[{name:"about",route:"/technical/about"},{name:"index",route:"/technical"},{name:"meta.json",meta:{index:{title:"Technical Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/technical"},{name:"user",children:[{name:"index",route:"/user"},{name:"meta.json",meta:{index:{title:"User Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/user"}]},o.Z))(e)};function d(e){var r=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",em:"em",h3:"h3"},e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{children:"Registry"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/ensdomains/ens/blob/master/contracts/ENS.sol",children:"Source"})}),"\n",(0,t.jsx)(r.p,{children:"The ENS registry is the core contract that lies at the heart of ENS resolution. All ENS lookups start by querying the registry. The registry maintains a list of domains, recording the owner, resolver, and TTL for each, and allows the owner of a domain to make changes to that data."}),"\n",(0,t.jsxs)(r.p,{children:["The ENS registry is specified in ",(0,t.jsx)(r.a,{href:"https://eips.ethereum.org/EIPS/eip-137",children:"EIP 137"}),"."]}),"\n",(0,t.jsx)(r.h2,{children:"Get Owner"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"function owner(bytes32 node) external view returns (address);\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Returns the owner of the name specified by ",(0,t.jsx)(r.code,{children:"node"}),"."]}),"\n",(0,t.jsx)(r.h2,{children:"Get Resolver"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"function resolver(bytes32 node) external view returns (address);\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Returns the address of the resolver responsible for the name specified by ",(0,t.jsx)(r.code,{children:"node"}),"."]}),"\n",(0,t.jsx)(r.h2,{children:"Get TTL"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"function ttl(bytes32 node) external view returns (uint64);\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Returns the caching time-to-live of the name specified by ",(0,t.jsx)(r.code,{children:"node"}),". Systems that wish to cache information about a name, including ownership, resolver address, and records, should respect this value. If TTL is zero, new data should be fetched on each query."]}),"\n",(0,t.jsx)(r.h2,{children:"Set Owner"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"function setOwner(bytes32 node, address owner) external;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Reassigns ownership of the name identified by ",(0,t.jsx)(r.code,{children:"node"})," to ",(0,t.jsx)(r.code,{children:"owner"}),". Only callable by the current owner of the name."]}),"\n",(0,t.jsx)(r.p,{children:"Emits the following event:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"event Transfer(bytes32 indexed node, address owner);\n"})}),"\n",(0,t.jsx)(r.h2,{children:"Set Resolver"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"function setResolver(bytes32 node, address resolver) external;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Updates the resolver associated with the name identified by ",(0,t.jsx)(r.code,{children:"node"})," to ",(0,t.jsx)(r.code,{children:"resolver"}),".  Only callable by the current owner of the name. ",(0,t.jsx)(r.code,{children:"resolver"})," must specify the address of a contract that implements the Resolver interface."]}),"\n",(0,t.jsx)(r.p,{children:"Emits the following event:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"event NewResolver(bytes32 indexed node, address resolver);\n"})}),"\n",(0,t.jsx)(r.h2,{children:"Set TTL"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"function setTTL(bytes32 node, uint64 ttl) external;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Updates the caching time-to-live of the name identified by ",(0,t.jsx)(r.code,{children:"node"}),". Only callable by the current owner of the name."]}),"\n",(0,t.jsx)(r.p,{children:"Emits the following event:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"event NewTTL(bytes32 indexed node, uint64 ttl);\n"})}),"\n",(0,t.jsx)(r.h2,{children:"Set Subdomain Owner"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"function setSubnodeOwner(bytes32 node, bytes32 label, address owner) external;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Creates a new subdomain of ",(0,t.jsx)(r.code,{children:"node"}),", assigning ownership of it to the specified ",(0,t.jsx)(r.code,{children:"owner"}),". If the domain already exists, ownership is reassigned but the resolver and TTL are left unmodified."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"label"})," is the keccak256 hash of the subdomain label to create. For example, if you own ",(0,t.jsx)(r.em,{children:"alice.eth"})," and want to create the subdomain ",(0,t.jsx)(r.em,{children:"iam.alice.eth"}),", supply  ",(0,t.jsx)(r.code,{children:"namehash('alice.eth')"})," as the ",(0,t.jsx)(r.code,{children:"node"}),", and ",(0,t.jsx)(r.code,{children:"keccak256('iam')"})," as the ",(0,t.jsx)(r.code,{children:"label"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Emits the following event:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"event NewOwner(bytes32 indexed node, bytes32 indexed label, address owner);\n"})}),"\n",(0,t.jsx)(r.h3,{children:"Set Record"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"function setRecord(bytes32 node, address owner, address resolver, uint64 ttl);\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Sets the owner, resolver, and TTL for an ENS record in a single operation. This function is offered for convenience, and is exactly equivalent to calling ",(0,t.jsx)(r.code,{children:"setResolver"}),", ",(0,t.jsx)(r.code,{children:"setTTL"})," and ",(0,t.jsx)(r.code,{children:"setOwner"})," in that order."]}),"\n",(0,t.jsx)(r.h3,{children:"Set Subdomain Record"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"function setSubnodeRecord(bytes32 node, bytes32 label, address owner, address resolver, uint64 ttl);\n"})}),"\n",(0,t.jsx)(r.p,{children:"Sets the owner, resolver and TTL for a subdomain, creating it if necessary. This function is offered for convenience, and permits setting all three fields without first transferring ownership of the subdomain to the caller."}),"\n",(0,t.jsx)(r.h3,{children:"Set Approval"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"function setApprovalForAll(address operator, bool approved);\n"})}),"\n",(0,t.jsx)(r.p,{children:"Sets or clears an approval. Approved accounts can execute all ENS registry operations on behalf of the caller."}),"\n",(0,t.jsx)(r.h3,{children:"Check Approval"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"function isApprovedForAll(address owner, address operator) external view returns (bool);\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Returns true if ",(0,t.jsx)(r.code,{children:"operator"})," is approved to make ENS registry operations on behalf of ",(0,t.jsx)(r.code,{children:"owner"}),"."]}),"\n",(0,t.jsx)(r.h3,{children:"Check Record Existence"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"function recordExists(bytes32 node) public view returns (bool);\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Returns true if ",(0,t.jsx)(r.code,{children:"node"})," exists in this ENS registry. This will return false for records that are in the legacy ENS registry but have not yet been migrated to the new one."]})]})}r.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(d,e)}))}}},function(e){e.O(0,[8164,3248,9774,2888,179],(function(){return r=6714,e(e.s=r);var r}));var r=e.O();_N_E=r}]);