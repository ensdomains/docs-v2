(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[278],{6312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ensip/12",function(){return s(1304)}])},1304:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return i}});var r=s(1527),a=s(313);function n(e){let t=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",a:"a",tbody:"tbody",td:"td",h2:"h2",p:"p",h3:"h3",code:"code",ol:"ol",li:"li",pre:"pre"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"ENSIP-12: Avatar Text Records"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Author"})}),(0,r.jsxs)(t.th,{children:["Nick Johnson <",(0,r.jsx)(t.a,{href:"mailto:nick@ens.domains",children:"nick@ens.domains"}),">, Makoto Inoue <",(0,r.jsx)(t.a,{href:"mailto:makoto@ens.domains",children:"makoto@ens.domains"}),">"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Status"})}),(0,r.jsx)(t.td,{children:"Draft"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Submitted"})}),(0,r.jsx)(t.td,{children:"2022-01-18"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"abstract",children:"Abstract"}),"\n",(0,r.jsxs)(t.p,{children:["This ENSIP defines a process for retrieving avatar URIs from ENS, several ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc3986",children:"URI"})," schemes for the ENS 'avatar' text field, and how they should be interpreted by clients wishing to display a user's avatar image."]}),"\n",(0,r.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,r.jsx)(t.p,{children:"ENS primary name (formerly known as reverse record) has been widely integrated as a de facto web3 user name across many Ethereum based applications. As multiple apps started specifying avatar profile image as well as let users pick NFT as pfp (profile image), it became obvious to store such information within ENS so that the avatar information can be shared across different applications."}),"\n",(0,r.jsxs)(t.p,{children:["This specification standardises a way to store and retrieve this information using ",(0,r.jsx)(t.a,{href:"ensip-5-text-records.md",children:"ENSIP-5: Avatar Text Records"})]}),"\n",(0,r.jsx)(t.h2,{id:"specification",children:"Specification"}),"\n",(0,r.jsx)(t.h3,{children:"Retrieving the avatar URI"}),"\n",(0,r.jsx)(t.p,{children:"The process for retrieving the avatar URI depends on whether the client has an Ethereum address or an ENS name to start with."}),"\n",(0,r.jsx)(t.h3,{children:"ENS Name"}),"\n",(0,r.jsxs)(t.p,{children:["To determine the avatar URI for an ENS name, the client MUST first look up the resolver for the name and call ",(0,r.jsx)(t.code,{children:".text(namehash(name), 'avatar')"})," on it to retrieve the avatar URI for the name."]}),"\n",(0,r.jsxs)(t.p,{children:["The client MUST treat the absence of a resolver, an revert when calling the ",(0,r.jsx)(t.code,{children:"addr"})," method on the resolver, or an empty string returned by the resolver identically, as a failure to find a valid avatar URI."]}),"\n",(0,r.jsx)(t.h3,{children:"Ethereum Address"}),"\n",(0,r.jsxs)(t.p,{children:["To determine the avatar URI for an Ethereum address, the client MUST reverse-resolve the address by querying the ENS registry for the resolver of ",(0,r.jsx)(t.code,{children:"<address>.addr.reverse"}),", where ",(0,r.jsx)(t.code,{children:"<address>"})," is the lowercase hex-encoded Ethereum address, without leading '0x'. Then, the client calls ",(0,r.jsx)(t.code,{children:".text(namehash('<address>.addr.reverse'), 'avatar')"})," to retrieve the avatar URI for the address."]}),"\n",(0,r.jsxs)(t.p,{children:["If a resolver is returned for the reverse record, but calling ",(0,r.jsx)(t.code,{children:"text"})," causes a revert or returns an empty string, the client MUST call ",(0,r.jsx)(t.code,{children:".name(namehash('<address>.addr.reverse'))"}),". If this method returns a valid ENS name, the client MUST:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Validate that the reverse record is valid, by resolving the returned name and calling ",(0,r.jsx)(t.code,{children:"addr"})," on the resolver, checking it matches the original Ethereum address."]}),"\n",(0,r.jsx)(t.li,{children:"Perform the process described under 'ENS Name' to look for a valid avatar URI on the name."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"A failure at any step of this process MUST be treated by the client identically as a failure to find a valid avatar URI."}),"\n",(0,r.jsx)(t.h3,{children:"General Format"}),"\n",(0,r.jsx)(t.p,{children:"The 'avatar' text field MUST be formatted as a URI. Clients MUST ignore URI types they do not recognise, treating them the same as if no value was set for the field."}),"\n",(0,r.jsx)(t.h3,{children:"Image Types"}),"\n",(0,r.jsxs)(t.p,{children:["Clients MUST support images with mime types of ",(0,r.jsx)(t.code,{children:"image/jpeg"}),", ",(0,r.jsx)(t.code,{children:"image/png"}),", and ",(0,r.jsx)(t.code,{children:"image/svg+xml"}),". Clients MAY support additional image types."]}),"\n",(0,r.jsx)(t.h3,{children:"URI Types"}),"\n",(0,r.jsx)(t.p,{children:"All clients SHOULD support the URI schemes defined below. They MAY implement additional schemes not defined in this specification."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"https"})})}),"\n",(0,r.jsx)(t.p,{children:"If an https URI is provided, it MUST resolve to an avatar image directly. https URLs MUST NOT resolve to HTML pages, metadata, or other content containing the avatar image."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"ipfs"})})}),"\n",(0,r.jsxs)(t.p,{children:["If an ",(0,r.jsx)(t.a,{href:"https://docs.ipfs.io/how-to/address-ipfs-on-web/#native-urls",children:"ipfs URI"})," is provided, it MUST resolve to an avatar image directly. Clients without built-in IPFS support MAY rewrite the URI to an https URL referencing an IPFS gateway as described in ",(0,r.jsx)(t.a,{href:"https://docs.ipfs.io/how-to/address-ipfs-on-web/",children:"this document"})," before resolving it as an https URL."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"data"})})}),"\n",(0,r.jsxs)(t.p,{children:["If a ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc2397",children:"data URL"})," is provided, it MUST resolve to an avatar image directly."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NFTs"})}),"\n",(0,r.jsxs)(t.p,{children:["A reference to an NFT may be used as an avatar URI, following the standards defined in ",(0,r.jsx)(t.a,{href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-22.md",children:"CAIP-22"})," and ",(0,r.jsx)(t.a,{href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-29.md",children:"CAIP-29"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Clients MUST support at least ERC721 and ERC1155 type NFTs, and MAY support additional types of NFT."}),"\n",(0,r.jsx)(t.p,{children:"To resolve an NFT URI, a client follows this process:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Retrieve the metadata URI for the token specified in the ",(0,r.jsx)(t.code,{children:"avatar"})," field URI."]}),"\n",(0,r.jsx)(t.li,{children:"Resolve the metadata URI, fetching the ERC721 or ERC1155 metadata."}),"\n",(0,r.jsx)(t.li,{children:"Extract the image URL specified in the NFT metadata."}),"\n",(0,r.jsx)(t.li,{children:"Resolve the image URL and use it as the avatar."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Clients MUST support at least ",(0,r.jsx)(t.code,{children:"https"})," and ",(0,r.jsx)(t.code,{children:"ipfs"})," URIs for resolving the metadata URI and the avatar image, and MAY support additional schemes. Clients MAY implement ",(0,r.jsx)(t.code,{children:"ifps"})," scheme support by rewriting the URI to an HTTPS URL referencing an IPFS gateway as described above."]}),"\n",(0,r.jsx)(t.p,{children:"Clients SHOULD additionally take the following verification steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Where the avatar URI was retrieved via forward resolution (starting from an ENS name), call the ",(0,r.jsx)(t.code,{children:"addr"})," function on the same resolver and for the same name to retrieve the Ethereum address to which the name resolves. Otherwise, if the avatar URI was retrieved via reverse resolution (starting from an Ethereum address), use that address."]}),"\n",(0,r.jsx)(t.li,{children:"Verify that the address from step 1 is an owner of the NFT specified in the URI. If it is not, the client MUST treat the URI as invalid and behave in the same manner as they would if no avatar URI was specified."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Clients MAY support NFT URIs by rewriting them to ",(0,r.jsx)(t.code,{children:"https"})," URIs for a service that provides NFT avatar image resolution support."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"The following examples all resolve to the same avatar image:"}),"\n",(0,r.jsx)(t.pre,{code:"eip155:1/erc721:0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/0 # BAYC token 0\nipfs://QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ # IPFS hash for BAYC token 0 image\nhttps://ipfs.io/ipfs/QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ # HTTPS URL to IPFS gateway for BAYC token 0 image\n",children:(0,r.jsx)(t.code,{children:"eip155:1/erc721:0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/0 # BAYC token 0\nipfs://QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ # IPFS hash for BAYC token 0 image\nhttps://ipfs.io/ipfs/QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ # HTTPS URL to IPFS gateway for BAYC token 0 image\n"})}),"\n",(0,r.jsx)(t.h2,{id:"backwards-compatibility",children:"Backwards Compatibility"}),"\n",(0,r.jsx)(t.p,{children:"Not applicable."}),"\n",(0,r.jsx)(t.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,r.jsx)(t.p,{children:"None."}),"\n",(0,r.jsx)(t.h2,{id:"copyright",children:"Copyright"}),"\n",(0,r.jsxs)(t.p,{children:["Copyright and related rights waived via ",(0,r.jsx)(t.a,{href:"https://creativecommons.org/publicdomain/zero/1.0/",children:"CC0"}),"."]})]})}var i=!0;t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(n,e)})):n(e)}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6312)}),_N_E=e.O()}]);