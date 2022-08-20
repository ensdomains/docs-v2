(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[403],{1125:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/raw/ens-improvement-proposals/ensip-3-reverse-resolution",function(){return n(3091)}])},3091:function(e,r,n){"use strict";n.r(r);var t=n(4637),s=n(6988),a=n(1177),o=n(2370),i=function(e){return(0,a.withSSG)((0,s.Z)({filename:"ensip-3-reverse-resolution.mdx",route:"/raw/ens-improvement-proposals/ensip-3-reverse-resolution",meta:{description:"Specifies a TLD, registrar, and resolver interface for reverse resolution of Ethereum addresses using ENS (formerly EIP-181)."},pageMap:[{name:"developer",children:[{name:"basics",route:"/developer/basics"},{name:"getting-started",route:"/developer/getting-started"},{name:"index",route:"/developer"},{name:"meta.json",meta:{index:{title:"Developer Documentation",type:"docs",theme:{}},"getting-started":{title:"Getting Started",type:"docs"},basics:{title:"Basics",type:"docs"},"working-directly-with-ens":{title:"Manual Contract API",type:"docs"}},locale:"en-US"},{name:"working-directly-with-ens",route:"/developer/working-directly-with-ens"}],route:"/developer"},{name:"governance",children:[{name:"index",route:"/governance"},{name:"meta.json",meta:{index:{title:"Governance Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/governance"},{name:"index",route:"/",frontMatter:{title:"Welcome"}},{name:"meta.json",meta:{index:{title:"Introduction",type:"docs",hidden:!0,theme:{}},about:{title:"About ENS",type:"docs",hidden:!0,theme:{}},user:{title:"User",type:"nav"},developer:{title:"Developer",type:"nav"},technical:{title:"Technical",type:"nav"},governance:{title:"Governance",type:"nav"},raw:{title:"Raw",type:"hidden"}},locale:"en-US"},{name:"raw",children:[{name:"SUMMARY",route:"/raw/SUMMARY"},{name:"bug-bounty-program",route:"/raw/bug-bounty-program"},{name:"contract-api-reference",children:[{name:"ENS-Contracts-Overview",route:"/raw/contract-api-reference/ENS-Contracts-Overview"},{name:"dns-registrar",route:"/raw/contract-api-reference/dns-registrar"},{name:"ens",route:"/raw/contract-api-reference/ens",frontMatter:{description:"The ENS registry."}},{name:"eth-permanent-registrar",children:[{name:"README",route:"/raw/contract-api-reference/eth-permanent-registrar/README"},{name:"controller",route:"/raw/contract-api-reference/eth-permanent-registrar/controller"},{name:"registrar",route:"/raw/contract-api-reference/eth-permanent-registrar/registrar"}],route:"/raw/contract-api-reference/eth-permanent-registrar"},{name:"name-processing",route:"/raw/contract-api-reference/name-processing",frontMatter:{description:"Describes how to normalize and hash ENS names."}},{name:"publicresolver",route:"/raw/contract-api-reference/publicresolver",frontMatter:{description:"The default public resolver."}},{name:"reverseregistrar",route:"/raw/contract-api-reference/reverseregistrar",frontMatter:{description:"The registrar responsible for managing reverse resolution via the .addr.reverse special-purpose TLD."}},{name:"testregistrar",route:"/raw/contract-api-reference/testregistrar"}],route:"/raw/contract-api-reference"},{name:"contract-developer-guide",children:[{name:"resolving-names-on-chain",route:"/raw/contract-developer-guide/resolving-names-on-chain"},{name:"writing-a-registrar",route:"/raw/contract-developer-guide/writing-a-registrar"},{name:"writing-a-resolver",route:"/raw/contract-developer-guide/writing-a-resolver"}],route:"/raw/contract-developer-guide"},{name:"dapp-developer-guide",children:[{name:"ens-as-nft",route:"/raw/dapp-developer-guide/ens-as-nft"},{name:"ens-l2-offchain",route:"/raw/dapp-developer-guide/ens-l2-offchain"},{name:"front-end-design-guidelines",route:"/raw/dapp-developer-guide/front-end-design-guidelines",frontMatter:{description:"ENS is a tool to simplify the experience for your users. Here are a series of guidelines and tools that will help you make design choices and implement the best ENS user experience."}},{name:"managing-names",route:"/raw/dapp-developer-guide/managing-names"},{name:"registering-and-renewing-names",route:"/raw/dapp-developer-guide/registering-and-renewing-names"},{name:"resolving-names",route:"/raw/dapp-developer-guide/resolving-names"}],route:"/raw/dapp-developer-guide"},{name:"deploying-ens-on-a-private-chain",route:"/raw/deploying-ens-on-a-private-chain"},{name:"dns-registrar-guide",route:"/raw/dns-registrar-guide"},{name:"ens-deployments",route:"/raw/ens-deployments"},{name:"ens-improvement-proposals",children:[{name:"README",route:"/raw/ens-improvement-proposals/README",frontMatter:{description:"Standards documentation describing the ENS protocol"}},{name:"ensip-1-ens",route:"/raw/ens-improvement-proposals/ensip-1-ens",frontMatter:{description:"Documentation of the basic ENS protocol (formerly EIP-137)."}},{name:"ensip-10-wildcard-resolution",route:"/raw/ens-improvement-proposals/ensip-10-wildcard-resolution",frontMatter:{description:"Provides a mechanism to support wildcard resolution of ENS names (formerly EIP-2544)."}},{name:"ensip-11-evmchain-address-resolution",route:"/raw/ens-improvement-proposals/ensip-11-evmchain-address-resolution",frontMatter:{description:"Introduces coinType for EVM compatible chains (amending ENSIP9)."}},{name:"ensip-12-avatar-text-records",route:"/raw/ens-improvement-proposals/ensip-12-avatar-text-records",frontMatter:{description:"A standard for storage of the avatar text record in ENS."}},{name:"ensip-2-initial-hash-registrar",route:"/raw/ens-improvement-proposals/ensip-2-initial-hash-registrar",frontMatter:{description:"Describes the hash registrar initially used to register ENS .eth domains (formerly EIP-162)."}},{name:"ensip-3-reverse-resolution",route:"/raw/ens-improvement-proposals/ensip-3-reverse-resolution",frontMatter:{description:"Specifies a TLD, registrar, and resolver interface for reverse resolution of Ethereum addresses using ENS (formerly EIP-181)."}},{name:"ensip-4-support-for-contract-abis",route:"/raw/ens-improvement-proposals/ensip-4-support-for-contract-abis",frontMatter:{description:"A mechanism for storing ABI definitions in ENS, for easy lookup of contract interfaces by callers (formerly EIP-205)."}},{name:"ensip-5-text-records",route:"/raw/ens-improvement-proposals/ensip-5-text-records",frontMatter:{description:"A standard for storage of text records in ENS (formerly EIP-634)."}},{name:"ensip-6-dns-in-ens",route:"/raw/ens-improvement-proposals/ensip-6-dns-in-ens",frontMatter:{description:"Defines a resolver profile for ENS that provides features for storage and lookup of DNS records (formerly EIP-1185)."}},{name:"ensip-7-contenthash-field",route:"/raw/ens-improvement-proposals/ensip-7-contenthash-field",frontMatter:{description:"Introduces a field for storing content addresses and hashes in ENS (formerly EIP-1577)."}},{name:"ensip-8-interface-discovery",route:"/raw/ens-improvement-proposals/ensip-8-interface-discovery",frontMatter:{description:"Defines a method of associating contract interfaces with ENS names and addresses, and of discovering those interfaces (formerly EIP-1844)."}},{name:"ensip-9-multichain-address-resolution",route:"/raw/ens-improvement-proposals/ensip-9-multichain-address-resolution",frontMatter:{description:"Introduces new overloads for the `addr` field for ENS resolvers, which permit resolution of addresses for other blockchains via ENS (formerly EIP-2304)."}}],route:"/raw/ens-improvement-proposals"},{name:"ens-migration-february-2020",children:[{name:"guide-for-dapp-developers",route:"/raw/ens-migration-february-2020/guide-for-dapp-developers"},{name:"technical-description",route:"/raw/ens-migration-february-2020/technical-description"}],route:"/raw/ens-migration-february-2020"},{name:"frequently-asked-questions",route:"/raw/frequently-asked-questions"},{name:"permanent-registrar-faq",route:"/raw/permanent-registrar-faq"},{name:"terminology",route:"/raw/terminology"}],route:"/raw"},{name:"technical",children:[{name:"about",route:"/technical/about"},{name:"index",route:"/technical"},{name:"meta.json",meta:{index:{title:"Technical Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/technical"},{name:"user",children:[{name:"index",route:"/user"},{name:"meta.json",meta:{index:{title:"User Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/user"}]},o.Z))(e)};function d(e){var r=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4",pre:"pre",a:"a"},e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{children:"ENSIP-3: Reverse Resolution"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Author"})}),(0,t.jsxs)(r.th,{children:["Nick Johnson ","<nick@ens.domains>"]})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Status"})}),(0,t.jsx)(r.td,{children:"Final"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Submitted"})}),(0,t.jsx)(r.td,{children:"2016-12-01"})]})]})]}),"\n",(0,t.jsx)(r.h2,{children:"Abstract"}),"\n",(0,t.jsx)(r.p,{children:"This ENSIP specifies a TLD, registrar, and resolver interface for reverse resolution of Ethereum addresses using ENS. This permits associating a human-readable name with any Ethereum blockchain address. Resolvers can be certain that the reverse record was published by the owner of the Ethereum address in question."}),"\n",(0,t.jsx)(r.h2,{children:"Motivation"}),"\n",(0,t.jsx)(r.p,{children:"While name services are mostly used for forward resolution - going from human-readable identifiers to machine-readable ones - there are many use-cases in which reverse resolution is useful as well:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Applications that allow users to monitor accounts benefit from showing the name of an account instead of its address, even if it was originally added by address."}),"\n",(0,t.jsx)(r.li,{children:"Attaching metadata such as descriptive information to an address allows retrieving this information regardless of how the address was originally discovered."}),"\n",(0,t.jsx)(r.li,{children:"Anyone can configure a name to resolve to an address, regardless of ownership of that address. Reverse records allow the owner of an address to claim a name as authoritative for that address."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{children:"Specification"}),"\n",(0,t.jsxs)(r.p,{children:["Reverse ENS records are stored in the ENS hierarchy in the same fashion as regular records, under a reserved domain, ",(0,t.jsx)(r.code,{children:"addr.reverse"}),". To generate the ENS name for a given account's reverse records, convert the account to hexadecimal representation in lower-case, and append ",(0,t.jsx)(r.code,{children:"addr.reverse"}),". For instance, the ENS registry's address at ",(0,t.jsx)(r.code,{children:"0x112234455c3a32fd11230c42e7bccd4a84e02010"})," has any reverse records stored at ",(0,t.jsx)(r.code,{children:"112234455c3a32fd11230c42e7bccd4a84e02010.addr.reverse"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Note that this means that contracts wanting to do dynamic reverse resolution of addresses will need to perform hex encoding in the contract."}),"\n",(0,t.jsx)(r.h3,{children:"Registrar"}),"\n",(0,t.jsxs)(r.p,{children:["The owner of the ",(0,t.jsx)(r.code,{children:"addr.reverse"})," domain will be a registrar that permits the caller to take ownership of the reverse record for their own address. It provides the following methods:"]}),"\n",(0,t.jsx)(r.h4,{children:"function claim(address owner) returns (bytes32 node)"}),"\n",(0,t.jsxs)(r.p,{children:["When called by account ",(0,t.jsx)(r.code,{children:"x"}),", instructs the ENS registry to transfer ownership of the name ",(0,t.jsx)(r.code,{children:"hex(x) + '.addr.reverse'"})," to the provided address, and return the namehash of the ENS record thus transferred."]}),"\n",(0,t.jsx)(r.p,{children:"Allowing the caller to specify an owner other than themselves for the relevant node facilitates contracts that need accurate reverse ENS entries delegating this to their creators with a minimum of code inside their constructor:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"reverseRegistrar.claim(msg.sender)\n"})}),"\n",(0,t.jsx)(r.h4,{children:"function claimWithResolver(address owner, address resolver) returns (bytes32 node)"}),"\n",(0,t.jsxs)(r.p,{children:["When called by account ",(0,t.jsx)(r.code,{children:"x"}),", instructs the ENS registry to set the resolver of the name ",(0,t.jsx)(r.code,{children:"hex(x) + '.addr.reverse'"})," to the specified resolver, then transfer ownership of the name to the provided address, and return the namehash of the ENS record thus transferred. This method facilitates setting up a custom resolver and owner in fewer transactions than would be required if calling ",(0,t.jsx)(r.code,{children:"claim"}),"."]}),"\n",(0,t.jsx)(r.h4,{children:"function setName(string name) returns (bytes32 node)"}),"\n",(0,t.jsxs)(r.p,{children:["When called by account ",(0,t.jsx)(r.code,{children:"x"}),", sets the resolver for the name ",(0,t.jsx)(r.code,{children:"hex(x) + '.addr.reverse'"})," to a default resolver, and sets the name record on that name to the specified name. This method facilitates setting up simple reverse records for users in a single transaction."]}),"\n",(0,t.jsx)(r.h3,{children:"Resolver interface"}),"\n",(0,t.jsx)(r.p,{children:"A new resolver interface is defined, consisting of the following method:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"function name(bytes32 node) constant returns (string);\n"})}),"\n",(0,t.jsx)(r.p,{children:"Resolvers that implement this interface must return a valid ENS name for the requested node, or the empty string if no name is defined for the requested node."}),"\n",(0,t.jsx)(r.p,{children:"The interface ID of this interface is 0x691f3431."}),"\n",(0,t.jsx)(r.p,{children:"Future ENSIPs may specify more record types appropriate to reverse ENS records."}),"\n",(0,t.jsx)(r.h2,{children:"Appendix 1: Registrar implementation"}),"\n",(0,t.jsx)(r.p,{children:"This registrar, written in Solidity, implements the specifications outlined above."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-solidity",children:"pragma solidity ^0.4.10;\n\nimport \"./AbstractENS.sol\";\n\ncontract Resolver {\n    function setName(bytes32 node, string name) public;\n}\n\n/**\n * @dev Provides a default implementation of a resolver for reverse records,\n * which permits only the owner to update it.\n */\ncontract DefaultReverseResolver is Resolver {\n    AbstractENS public ens;\n    mapping(bytes32=>string) public name;\n\n    /**\n     * @dev Constructor\n     * @param ensAddr The address of the ENS registry.\n     */\n    function DefaultReverseResolver(AbstractENS ensAddr) {\n        ens = ensAddr;\n    }\n\n    /**\n     * @dev Only permits calls by the reverse registrar.\n     * @param node The node permission is required for.\n     */\n    modifier owner_only(bytes32 node) {\n        require(msg.sender == ens.owner(node));\n        _;\n    }\n\n    /**\n     * @dev Sets the name for a node.\n     * @param node The node to update.\n     * @param _name The name to set.\n     */\n    function setName(bytes32 node, string _name) public owner_only(node) {\n        name[node] = _name;\n    }\n}\n\ncontract ReverseRegistrar {\n    // namehash('addr.reverse')\n    bytes32 constant ADDR_REVERSE_NODE = 0x91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e2;\n\n    AbstractENS public ens;\n    Resolver public defaultResolver;\n\n    /**\n     * @dev Constructor\n     * @param ensAddr The address of the ENS registry.\n     * @param resolverAddr The address of the default reverse resolver.\n     */\n    function ReverseRegistrar(AbstractENS ensAddr, Resolver resolverAddr) {\n        ens = ensAddr;\n        defaultResolver = resolverAddr;\n    }\n\n    /**\n     * @dev Transfers ownership of the reverse ENS record associated with the\n     *      calling account.\n     * @param owner The address to set as the owner of the reverse record in ENS.\n     * @return The ENS node hash of the reverse record.\n     */\n    function claim(address owner) returns (bytes32 node) {\n        return claimWithResolver(owner, 0);\n    }\n\n    /**\n     * @dev Transfers ownership of the reverse ENS record associated with the\n     *      calling account.\n     * @param owner The address to set as the owner of the reverse record in ENS.\n     * @param resolver The address of the resolver to set; 0 to leave unchanged.\n     * @return The ENS node hash of the reverse record.\n     */\n    function claimWithResolver(address owner, address resolver) returns (bytes32 node) {\n        var label = sha3HexAddress(msg.sender);\n        node = sha3(ADDR_REVERSE_NODE, label);\n        var currentOwner = ens.owner(node);\n\n        // Update the resolver if required\n        if(resolver != 0 && resolver != ens.resolver(node)) {\n            // Transfer the name to us first if it's not already\n            if(currentOwner != address(this)) {\n                ens.setSubnodeOwner(ADDR_REVERSE_NODE, label, this);\n                currentOwner = address(this);\n            }\n            ens.setResolver(node, resolver);\n        }\n\n        // Update the owner if required\n        if(currentOwner != owner) {\n            ens.setSubnodeOwner(ADDR_REVERSE_NODE, label, owner);\n        }\n\n        return node;\n    }\n\n    /**\n     * @dev Sets the `name()` record for the reverse ENS record associated with\n     * the calling account. First updates the resolver to the default reverse\n     * resolver if necessary.\n     * @param name The name to set for this address.\n     * @return The ENS node hash of the reverse record.\n     */\n    function setName(string name) returns (bytes32 node) {\n        node = claimWithResolver(this, defaultResolver);\n        defaultResolver.setName(node, name);\n        return node;\n    }\n\n    /**\n     * @dev Returns the node hash for a given account's reverse records.\n     * @param addr The address to hash\n     * @return The ENS node hash.\n     */\n    function node(address addr) constant returns (bytes32 ret) {\n        return sha3(ADDR_REVERSE_NODE, sha3HexAddress(addr));\n    }\n\n    /**\n     * @dev An optimised function to compute the sha3 of the lower-case\n     *      hexadecimal representation of an Ethereum address.\n     * @param addr The address to hash\n     * @return The SHA3 hash of the lower-case hexadecimal encoding of the\n     *         input address.\n     */\n    function sha3HexAddress(address addr) private returns (bytes32 ret) {\n        addr; ret; // Stop warning us about unused variables\n        assembly {\n            let lookup := 0x3031323334353637383961626364656600000000000000000000000000000000\n            let i := 40\n        loop:\n            i := sub(i, 1)\n            mstore8(i, byte(and(addr, 0xf), lookup))\n            addr := div(addr, 0x10)\n            i := sub(i, 1)\n            mstore8(i, byte(and(addr, 0xf), lookup))\n            addr := div(addr, 0x10)\n            jumpi(loop, i)\n            ret := sha3(0, 40)\n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(r.h3,{children:"Copyright"}),"\n",(0,t.jsxs)(r.p,{children:["Copyright and related rights waived via ",(0,t.jsx)(r.a,{href:"https://creativecommons.org/publicdomain/zero/1.0/",children:"CC0"}),"."]})]})}r.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(d,e)}))}}},function(e){e.O(0,[8164,3248,9774,2888,179],(function(){return r=1125,e(e.s=r);var r}));var r=e.O();_N_E=r}]);