(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1974],{5364:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contract-api-reference/eth-permanent-registrar/registrar",function(){return n(7949)}])},7949:function(e,r,n){"use strict";n.r(r);var t=n(4637),i=n(6988),s=n(1177),o=n(2370),a=function(e){return(0,s.withSSG)((0,i.Z)({filename:"registrar.mdx",route:"/contract-api-reference/eth-permanent-registrar/registrar",meta:{},pageMap:[{name:"README",route:"/README"},{name:"SUMMARY",route:"/SUMMARY"},{name:"bug-bounty-program",route:"/bug-bounty-program"},{name:"contract-api-reference",children:[{name:"ENS-Contracts-Overview",route:"/contract-api-reference/ENS-Contracts-Overview"},{name:"dns-registrar",route:"/contract-api-reference/dns-registrar"},{name:"ens",route:"/contract-api-reference/ens",frontMatter:{description:"The ENS registry."}},{name:"eth-permanent-registrar",children:[{name:"README",route:"/contract-api-reference/eth-permanent-registrar/README"},{name:"controller",route:"/contract-api-reference/eth-permanent-registrar/controller"},{name:"registrar",route:"/contract-api-reference/eth-permanent-registrar/registrar"}],route:"/contract-api-reference/eth-permanent-registrar"},{name:"name-processing",route:"/contract-api-reference/name-processing",frontMatter:{description:"Describes how to normalize and hash ENS names."}},{name:"publicresolver",route:"/contract-api-reference/publicresolver",frontMatter:{description:"The default public resolver."}},{name:"reverseregistrar",route:"/contract-api-reference/reverseregistrar",frontMatter:{description:"The registrar responsible for managing reverse resolution via the .addr.reverse special-purpose TLD."}},{name:"testregistrar",route:"/contract-api-reference/testregistrar"}],route:"/contract-api-reference"},{name:"contract-developer-guide",children:[{name:"resolving-names-on-chain",route:"/contract-developer-guide/resolving-names-on-chain"},{name:"writing-a-registrar",route:"/contract-developer-guide/writing-a-registrar"},{name:"writing-a-resolver",route:"/contract-developer-guide/writing-a-resolver"}],route:"/contract-developer-guide"},{name:"dapp-developer-guide",children:[{name:"ens-as-nft",route:"/dapp-developer-guide/ens-as-nft"},{name:"ens-enabling-your-dapp",route:"/dapp-developer-guide/ens-enabling-your-dapp"},{name:"ens-l2-offchain",route:"/dapp-developer-guide/ens-l2-offchain"},{name:"ens-libraries",route:"/dapp-developer-guide/ens-libraries"},{name:"front-end-design-guidelines",route:"/dapp-developer-guide/front-end-design-guidelines",frontMatter:{description:"ENS is a tool to simplify the experience for your users. Here are a series of guidelines and tools that will help you make design choices and implement the best ENS user experience."}},{name:"managing-names",route:"/dapp-developer-guide/managing-names"},{name:"registering-and-renewing-names",route:"/dapp-developer-guide/registering-and-renewing-names"},{name:"resolving-names",route:"/dapp-developer-guide/resolving-names"},{name:"working-with-ens",route:"/dapp-developer-guide/working-with-ens"}],route:"/dapp-developer-guide"},{name:"deploying-ens-on-a-private-chain",route:"/deploying-ens-on-a-private-chain"},{name:"developer",children:[{name:"index",route:"/developer"},{name:"meta.json",meta:{index:{title:"Developer Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/developer"},{name:"dns-registrar-guide",route:"/dns-registrar-guide"},{name:"ens-deployments",route:"/ens-deployments"},{name:"ens-improvement-proposals",children:[{name:"README",route:"/ens-improvement-proposals/README",frontMatter:{description:"Standards documentation describing the ENS protocol"}},{name:"ensip-1-ens",route:"/ens-improvement-proposals/ensip-1-ens",frontMatter:{description:"Documentation of the basic ENS protocol (formerly EIP-137)."}},{name:"ensip-10-wildcard-resolution",route:"/ens-improvement-proposals/ensip-10-wildcard-resolution",frontMatter:{description:"Provides a mechanism to support wildcard resolution of ENS names (formerly EIP-2544)."}},{name:"ensip-11-evmchain-address-resolution",route:"/ens-improvement-proposals/ensip-11-evmchain-address-resolution",frontMatter:{description:"Introduces coinType for EVM compatible chains (amending ENSIP9)."}},{name:"ensip-12-avatar-text-records",route:"/ens-improvement-proposals/ensip-12-avatar-text-records",frontMatter:{description:"A standard for storage of the avatar text record in ENS."}},{name:"ensip-2-initial-hash-registrar",route:"/ens-improvement-proposals/ensip-2-initial-hash-registrar",frontMatter:{description:"Describes the hash registrar initially used to register ENS .eth domains (formerly EIP-162)."}},{name:"ensip-3-reverse-resolution",route:"/ens-improvement-proposals/ensip-3-reverse-resolution",frontMatter:{description:"Specifies a TLD, registrar, and resolver interface for reverse resolution of Ethereum addresses using ENS (formerly EIP-181)."}},{name:"ensip-4-support-for-contract-abis",route:"/ens-improvement-proposals/ensip-4-support-for-contract-abis",frontMatter:{description:"A mechanism for storing ABI definitions in ENS, for easy lookup of contract interfaces by callers (formerly EIP-205)."}},{name:"ensip-5-text-records",route:"/ens-improvement-proposals/ensip-5-text-records",frontMatter:{description:"A standard for storage of text records in ENS (formerly EIP-634)."}},{name:"ensip-6-dns-in-ens",route:"/ens-improvement-proposals/ensip-6-dns-in-ens",frontMatter:{description:"Defines a resolver profile for ENS that provides features for storage and lookup of DNS records (formerly EIP-1185)."}},{name:"ensip-7-contenthash-field",route:"/ens-improvement-proposals/ensip-7-contenthash-field",frontMatter:{description:"Introduces a field for storing content addresses and hashes in ENS (formerly EIP-1577)."}},{name:"ensip-8-interface-discovery",route:"/ens-improvement-proposals/ensip-8-interface-discovery",frontMatter:{description:"Defines a method of associating contract interfaces with ENS names and addresses, and of discovering those interfaces (formerly EIP-1844)."}},{name:"ensip-9-multichain-address-resolution",route:"/ens-improvement-proposals/ensip-9-multichain-address-resolution",frontMatter:{description:"Introduces new overloads for the `addr` field for ENS resolvers, which permit resolution of addresses for other blockchains via ENS (formerly EIP-2304)."}}],route:"/ens-improvement-proposals"},{name:"ens-migration-february-2020",children:[{name:"guide-for-dapp-developers",route:"/ens-migration-february-2020/guide-for-dapp-developers"},{name:"technical-description",route:"/ens-migration-february-2020/technical-description"}],route:"/ens-migration-february-2020"},{name:"frequently-asked-questions",route:"/frequently-asked-questions"},{name:"governance",children:[{name:"index",route:"/governance"},{name:"meta.json",meta:{index:{title:"Governance Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/governance"},{name:"index",route:"/",frontMatter:{title:"Welcome"}},{name:"meta.json",meta:{index:{title:"Introduction",type:"docs",hidden:!0,theme:{}},governance:{title:"Governance",type:"nav"},user:{title:"User",type:"nav"},developer:{title:"Developer",type:"nav"},technical:{title:"Technical",type:"nav"}},locale:"en-US"},{name:"permanent-registrar-faq",route:"/permanent-registrar-faq"},{name:"technical",children:[{name:"index",route:"/technical"},{name:"meta.json",meta:{index:{title:"Technical Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/technical"},{name:"terminology",route:"/terminology"},{name:"user",children:[{name:"index",route:"/user"},{name:"meta.json",meta:{index:{title:"User Documentation",type:"docs",theme:{}}},locale:"en-US"}],route:"/user"}]},o.Z))(e)};function d(e){var r=Object.assign({h1:"h1",p:"p",a:"a",ul:"ul",li:"li",code:"code",h2:"h2",em:"em",strong:"strong",h3:"h3",pre:"pre"},e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{children:"Registrar"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/ensdomains/ethregistrar/blob/master/contracts/BaseRegistrarImplementation.sol",children:"Source"})}),"\n",(0,t.jsx)(r.p,{children:"This contract implements the core functionality of the permanent registrar, with the following features:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"The owner of the registrar may add and remove 'controllers'."}),"\n",(0,t.jsx)(r.li,{children:"Controllers may register new domains and extend the expiry of (renew) existing domains. They can not change the ownership or reduce the expiration time of existing domains."}),"\n",(0,t.jsx)(r.li,{children:"Name owners may transfer ownership to another address."}),"\n",(0,t.jsx)(r.li,{children:"Name owners may reclaim ownership in the ENS registry if they have lost it."}),"\n",(0,t.jsx)(r.li,{children:"Owners of names in the legacy registrar may transfer them to the new registrar, during the 1 year transition period. When they do so, their deposit is returned to them in its entirety."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"This section documents the parts of the registrar interface relevant to implementers of tools that interact with it. Functionality exclusive to the registrar owner or to controllers is omitted for brevity."}),"\n",(0,t.jsxs)(r.p,{children:["The registrar works exclusively with label hashes - the ",(0,t.jsx)(r.code,{children:"keccak256"})," of the first component of the label (eg, ",(0,t.jsx)(r.code,{children:"keccak256('ens')"})," for ",(0,t.jsx)(r.code,{children:"ens.eth"}),"). For compatibility with ERC721, these are expressed as uint256 values rather than bytes32, but can be cast backwards and forwards transparently. The namehash of a name can be derived by computing ",(0,t.jsx)(r.code,{children:"keccak256(baseNode, labelHash)"}),", where ",(0,t.jsx)(r.code,{children:"basenode"})," is the namehash of the TLD the registrar manages - eg, ",(0,t.jsx)(r.code,{children:"namehash('eth')"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Registrations and renewals are handled via the ",(0,t.jsx)(r.a,{href:"controller.md",children:"controller"}),"."]}),"\n",(0,t.jsx)(r.h2,{children:"Names and Registrations"}),"\n",(0,t.jsxs)(r.p,{children:["All names inside ENS have an owner. The owner of a name can transfer the name to a new owner, set a resolver, and create and reassign subdomains. This functionality is all contained in the ",(0,t.jsx)(r.a,{href:"../ens.md",children:"ENS registry"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Allocation of names directly under .eth (eg, second-level domains ending with .eth, such as ",(0,t.jsx)(r.em,{children:"alice.eth"}),") is governed by the .eth Permanent Registrar, described here. While buying a name from the registrar grants ownership of it in ENS, the registrar itself keeps independent track of who owns the ",(0,t.jsx)(r.strong,{children:"registration"}),". The concept of a ",(0,t.jsx)(r.strong,{children:"registrant"})," - the owner of a registration - is unique to the .eth permanent registrar."]}),"\n",(0,t.jsxs)(r.p,{children:["The registrant of a name can transfer the registration to another account, and they can recover ownership of the name by calling ",(0,t.jsx)(r.a,{href:"registrar.md#reclaim-ens-record",children:"reclaim"}),", which resets ownership of the ENS name to the registrant's account."]}),"\n",(0,t.jsx)(r.p,{children:"Separating the concept of owning a name from owning a registration makes it possible to more easily build systems that make automated updates to ENS. The registrant can transfer ownership of the name to another account or to a smart contract that manages records, subdomains, etc, while still retaining the ability to recover ownership for upgrades, or in the case of a compromise."}),"\n",(0,t.jsxs)(r.p,{children:["When thinking about ownership, it's important to be clear whether you're considering ownership of the ",(0,t.jsx)(r.strong,{children:"name"})," or the ",(0,t.jsx)(r.strong,{children:"registration"}),"."]}),"\n",(0,t.jsx)(r.h2,{children:"Read Operations"}),"\n",(0,t.jsx)(r.h3,{children:"Get Name Expiry"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"function nameExpires(uint256 label) external view returns(uint);\n"})}),"\n",(0,t.jsx)(r.p,{children:"Returns the unix timestamp at which a registration currently expires. Names that do not exist or are not yet migrated from the legacy registrar will return 0."}),"\n",(0,t.jsx)(r.h3,{children:"Check Name Availability"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"function available(uint256 label) public view returns(bool);\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Returns ",(0,t.jsx)(r.code,{children:"true"})," if a name is available for registration. Takes into account not-yet-migrated registrations from the legacy registrar. Registrar controllers may impose more restrictions on registrations than this contract (for example, a minimum name length), so this function ",(0,t.jsx)(r.strong,{children:"should not"})," be used to check if a name can be registered by a user. To check if a name can be registered by a user, ",(0,t.jsx)(r.a,{href:"controller.md#check-name-availability",children:"check name availability via the controller"}),"."]}),"\n",(0,t.jsx)(r.h3,{children:"Get Transfer Period End"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"uint public transferPeriodEnds;\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"transferPeriodEnds"})," documents the unix timestamp at which it is no longer possible to migrate over registrations from the legacy registrar, and any non-migrated registrations become available for registration by anyone."]}),"\n",(0,t.jsx)(r.h3,{children:"Get Controller Status"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"mapping(address=>bool) public controllers;\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"controllers"})," allows callers to check if the supplied address is authorized as a registrar controller."]}),"\n",(0,t.jsx)(r.h3,{children:"Check Token Approval"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"function getApproved(uint256 tokenId) public view returns (address operator);\n"})}),"\n",(0,t.jsx)(r.p,{children:"Returns the address of the approved operator for this name."}),"\n",(0,t.jsx)(r.p,{children:"This function is part of ERC721."}),"\n",(0,t.jsx)(r.h3,{children:"Check All Tokens Approval"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"function isApprovedForAll(address owner, address operator) public view returns (bool);\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Returns true if ",(0,t.jsx)(r.code,{children:"operator"})," is authorized to transfer all tokens for ",(0,t.jsx)(r.code,{children:"owner"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"This function is part of ERC721."}),"\n",(0,t.jsx)(r.h3,{children:"Get Name Owner"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"function ownerOf(uint256 label) external view returns(address);\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"ownerOf"})," returns the address that owns the registration identified by the label hash, or reverts if the registration does not exist. Registrations that have not yet been migrated from the legacy registrar are treated the same as registrations that do not exist."]}),"\n",(0,t.jsxs)(r.p,{children:["This function is part of ",(0,t.jsx)(r.a,{href:"https://github.com/ensdomains/ens/blob/master/docs/ethregistrar.rst#id7",children:"ERC721"}),"."]}),"\n",(0,t.jsx)(r.h2,{children:"Write Operations"}),"\n",(0,t.jsx)(r.h3,{children:"Transfer a Name"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"function transferFrom(address from, address to, uint256 tokenId) public;\nfunction safeTransferFrom(address from, address to, uint256 tokenId) public;\nfunction safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public;\n"})}),"\n",(0,t.jsx)(r.p,{children:"These functions transfer the registration."}),"\n",(0,t.jsxs)(r.p,{children:["They behave as specified in ",(0,t.jsx)(r.a,{href:"https://github.com/ensdomains/ens/blob/master/docs/ethregistrar.rst#id9",children:"ERC721"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Emits the following event on a successful transfer:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\n"})}),"\n",(0,t.jsx)(r.h3,{children:"Approve Operator"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"function approve(address to, uint256 tokenId) public;\nfunction setApprovalForAll(address operator, bool _approved) public;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["These functions manage approvals as documented in ",(0,t.jsx)(r.a,{href:"https://github.com/ensdomains/ens/blob/master/docs/ethregistrar.rst#id11",children:"ERC721"}),"."]}),"\n",(0,t.jsx)(r.h3,{children:"Reclaim ENS Record"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"function reclaim(uint256 label) external;\n"})}),"\n",(0,t.jsx)(r.p,{children:"Sets the owner record of the name in the ENS registry to match the owner of the registration in this registry. May only be called by the owner of the registration."}),"\n",(0,t.jsx)(r.h2,{children:"Events"}),"\n",(0,t.jsx)(r.h3,{children:"Name Migrated"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"event NameMigrated(uint256 indexed hash, address indexed owner, uint expires);\n"})}),"\n",(0,t.jsx)(r.p,{children:"This event is emitted when a name is migrated from the legacy registrar."}),"\n",(0,t.jsx)(r.h3,{children:"Name Registered"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"event NameRegistered(uint256 indexed hash, address indexed owner, uint expires);\n"})}),"\n",(0,t.jsx)(r.p,{children:"This event is emitted when a controller registers a new name."}),"\n",(0,t.jsx)(r.h3,{children:"Name Renewed"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"event NameRenewed(uint256 indexed hash, uint expires);\n"})}),"\n",(0,t.jsx)(r.p,{children:"This event is emitted when a controller renews (extends the registration of) a name."}),"\n",(0,t.jsx)(r.h3,{children:"Transfer"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\n"})}),"\n",(0,t.jsxs)(r.p,{children:["This event is emitted when registration is transferred to a new owner. This is distinct from the ",(0,t.jsx)(r.a,{href:"../ens.md",children:"ENS Registry"}),"'s Transfer event, which records transfers of ownership of the ENS record."]})]})}r.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(d,e)}))}}},function(e){e.O(0,[8164,3248,9774,2888,179],(function(){return r=5364,e(e.s=r);var r}));var r=e.O();_N_E=r}]);