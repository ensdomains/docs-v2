(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50],{5166:function(n,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pagination",function(){return e(4171)}])},4171:function(n,s,e){"use strict";e.r(s),e.d(s,{__N_SSG:function(){return r}});var t=e(1527),o=e(313);function a(n){let s=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},(0,o.ah)(),n.components),{Row:e,Col:a,Properties:r,Property:p}=s;return a||i("Col",!0),r||i("Properties",!0),p||i("Property",!0),e||i("Row",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{children:"Pagination"}),"\n",(0,t.jsxs)(s.p,{children:["In this guide, we will look at how to work with paginated responses when querying the Protocol API. By default, all responses limit results to ten. However, you can go as high as 100 by adding a ",(0,t.jsx)(s.code,{children:"limit"})," parameter to your requests. If you are using one of the official Protocol API client libraries, you don't need to worry about pagination, as it's all being taken care of behind the scenes."],className:"lead"}),"\n",(0,t.jsxs)(s.p,{children:["When an API response returns a list of objects, no matter the amount, pagination is supported. In paginated responses, objects are nested in a ",(0,t.jsx)(s.code,{children:"data"})," attribute and have a ",(0,t.jsx)(s.code,{children:"has_more"})," attribute that indicates whether you have reached the end of the last page. You can use the ",(0,t.jsx)(s.code,{children:"starting_after"})," and ",(0,t.jsx)(s.code,{children:"endding_before"})," query parameters to browse pages."]}),"\n",(0,t.jsx)(s.h2,{id:"example-using-cursors",children:"Example using cursors"}),"\n",(0,t.jsxs)(e,{children:[(0,t.jsxs)(a,{children:[(0,t.jsxs)(s.p,{children:["In this example, we request the page that starts after the conversation with id ",(0,t.jsx)(s.code,{children:"s4WycXedwhQrEFuM"}),". As a result, we get a list of three conversations and can tell by the ",(0,t.jsx)(s.code,{children:"has_more"})," attribute that we have reached the end of the resultset."]}),(0,t.jsxs)(r,{children:[(0,t.jsx)(p,{name:"starting_after",type:"string",children:(0,t.jsx)(s.p,{children:"The last ID on the page you're currently on when you want to fetch the next page."})}),(0,t.jsx)(p,{name:"ending_before",type:"string",children:(0,t.jsx)(s.p,{children:"The first ID on the page you're currently on when you want to fetch the previous page."})}),(0,t.jsx)(p,{name:"limit",type:"integer",children:(0,t.jsx)(s.p,{children:"Limit the number of items returned."})})]})]}),(0,t.jsxs)(a,{children:[(0,t.jsx)(s.pre,{language:"bash",code:'curl -G https://api.protocol.chat/v1/conversations \\\n  -H "Authorization: Bearer {token}" \\\n  -d starting_after="s4WycXedwhQrEFuM" \\\n  -d limit=10\n',children:(0,t.jsx)(s.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">curl -G https://api.protocol.chat/v1/conversations \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d starting_after=</span><span style="color: var(--shiki-token-string-expression)">&quot;s4WycXedwhQrEFuM&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d limit=10</span></span>\n<span></span>'}),title:"Manual pagination using cURL"}),(0,t.jsx)(s.pre,{language:"json",code:'{\n  "has_more": false,\n  "data": [\n    {\n      "id": "WAz8eIbvDR60rouK",\n      // ...\n    },\n    {\n      "id": "hSIhXBhNe8X1d8Et"\n      // ...\n    },\n    {\n      "id": "fbwYwpi9C2ybt6Yb"\n      // ...\n    }\n  ]\n}\n',children:(0,t.jsx)(s.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;has_more&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;data&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;hSIhXBhNe8X1d8Et&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;fbwYwpi9C2ybt6Yb&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"Paginated response"})]})]})]})}var r=!0;function i(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}s.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.ah)(),n.components);return s?(0,t.jsx)(s,Object.assign({},n,{children:(0,t.jsx)(a,n)})):a(n)}}},function(n){n.O(0,[774,888,179],function(){return n(n.s=5166)}),_N_E=n.O()}]);