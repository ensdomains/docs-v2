(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[904],{1307:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return d.ImageLoaderProps}}),t.default=function(e){let t,i;var o,{src:n,sizes:p,unoptimized:b=!1,priority:w=!1,loading:y,className:E,quality:S,width:C,height:_,fill:j,style:z,onLoad:x,onLoadingComplete:$,placeholder:P="empty",blurDataURL:k,layout:I,objectFit:O,objectPosition:R,lazyBoundary:L,lazyRoot:A}=e,N=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let M=l.useContext(c.ImageConfigContext),B=l.useMemo(()=>{let e=g||M||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:i})},[M]),D=N,W=D.loader||f.default;if(delete D.loader,"__next_img_default"in W){if("custom"===B.loader)throw Error(`Image with src "${n}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{let F=W;W=e=>{let{config:t}=e,i=a(e,["config"]);return F(i)}}if(I){"fill"===I&&(j=!0);let T={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];T&&(z=r({},z,T));let q={responsive:"100vw",fill:"100vw"}[I];q&&!p&&(p=q)}let G="",Z=m(C),U=m(_);if("object"==typeof(o=n)&&(h(o)||void 0!==o.src)){let V=h(n)?n.default:n;if(!V.src)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(V)}`);if(!V.height||!V.width)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(V)}`);if(t=V.blurWidth,i=V.blurHeight,k=k||V.blurDataURL,G=V.src,!j){if(Z||U){if(Z&&!U){let J=Z/V.width;U=Math.round(V.height*J)}else if(!Z&&U){let H=U/V.height;Z=Math.round(V.width*H)}}else Z=V.width,U=V.height}}let K=!w&&("lazy"===y||void 0===y);((n="string"==typeof n?n:G).startsWith("data:")||n.startsWith("blob:"))&&(b=!0,K=!1),B.unoptimized&&(b=!0);let[Q,X]=l.useState(!1),[Y,ee]=l.useState(!1),et=m(S),ei=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:R}:{},Y?{}:{color:"transparent"},z),er="blur"===P&&k&&!Q?{backgroundSize:ei.objectFit||"cover",backgroundPosition:ei.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:`url("data:image/svg+xml;charset=utf-8,${u.getImageBlurSvg({widthInt:Z,heightInt:U,blurWidth:t,blurHeight:i,blurDataURL:k})}")`}:{},eo=function(e){let{config:t,src:i,unoptimized:r,width:o,quality:n,sizes:a,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,i){let{deviceSizes:r,allSizes:o}=e;if(i){let n=/(^|\s)(1?\d?\d)vw/g,a=[];for(let l;l=n.exec(i);l)a.push(parseInt(l[2]));if(a.length){let s=.01*Math.min(...a);return{widths:o.filter(e=>e>=r[0]*s),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let u=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:u,kind:"x"}}(t,o,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,r)=>`${l({config:t,src:i,quality:n,width:e})} ${"w"===u?e:r+1}${u}`).join(", "),src:l({config:t,src:i,quality:n,width:s[d]})}}({config:B,src:n,unoptimized:b,width:Z,quality:et,sizes:p,loader:W}),en=n,ea={imageSrcSet:eo.srcSet,imageSizes:eo.sizes,crossOrigin:D.crossOrigin},el=l.useRef(x);l.useEffect(()=>{el.current=x},[x]);let es=l.useRef($);l.useEffect(()=>{es.current=$},[$]);let eu=r({isLazy:K,imgAttributes:eo,heightInt:U,widthInt:Z,qualityInt:et,className:E,imgStyle:ei,blurStyle:er,loading:y,config:B,fill:j,unoptimized:b,placeholder:P,loader:W,srcString:en,onLoadRef:el,onLoadingCompleteRef:es,setBlurComplete:X,setShowAltText:ee},D);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},eu)),w?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+eo.src+eo.srcSet+eo.sizes,rel:"preload",as:"image",href:eo.srcSet?void 0:eo.src},ea))):null)};var r=i(5506).Z,o=i(7022).Z,n=i(8889).Z,a=i(5997).Z,l=n(i(959)),s=o(i(130)),u=i(415),d=i(8029),c=i(7671);i(5033);var f=o(i(7110));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,o,n,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist(){},preventDefault(){l=!0,t.preventDefault()},stopPropagation(){s=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let v=e=>{var{imgAttributes:t,heightInt:i,widthInt:o,qualityInt:n,className:s,imgStyle:u,blurStyle:d,isLazy:c,fill:f,placeholder:g,loading:h,srcString:m,config:v,unoptimized:b,loader:w,onLoadRef:y,onLoadingCompleteRef:E,setBlurComplete:S,setShowAltText:C,onLoad:_,onError:j}=e,z=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=c?"lazy":h,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},z,t,{width:o,height:i,decoding:"async","data-nimg":f?"fill":"1",className:s,loading:h,style:r({},u,d),ref:l.useCallback(e=>{e&&(j&&(e.src=e.src),e.complete&&p(e,m,g,y,E,S,b))},[m,g,y,E,S,j,b]),onLoad(e){let t=e.currentTarget;p(t,m,g,y,E,S,b)},onError(e){C(!0),"blur"===g&&S(!0),j&&j(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},415:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:o,blurDataURL:n}=e,a=r||t,l=o||i,s=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?`%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ${a} ${l}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${r&&o?"1":"20"}'/%3E${s}%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='${n}'/%3E%3C/svg%3E`:`%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='${n}'/%3E%3C/svg%3E`}},7110:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:o}=e;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:`${t.path}?url=${encodeURIComponent(i)}&w=${r}&q=${o||75}`}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},9904:function(e,t,i){e.exports=i(1307)}}]);