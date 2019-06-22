!function(e){function t(t){for(var n,o,a=t[0],d=t[1],c=t[2],i=t[3]||[],s=0,l=[];s<a.length;s++)o=a[s],C[o]&&l.push(C[o][0]),C[o]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);for(q&&q(t),S.push.apply(S,i);l.length;)l.shift()();return H.push.apply(H,c||[]),r()}function r(){for(var e,t=0;t<H.length;t++){for(var r=H[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==C[a]&&(n=!1)}n&&(H.splice(t--,1),e=T(T.s=r[0]))}return 0===H.length&&(S.forEach(function(e){if(void 0===C[e]){C[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",T.nc&&t.setAttribute("nonce",T.nc),t.rel="prefetch",t.as="script",t.href=N(e),document.head.appendChild(t)}}),S.length=0),e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!E[e]||!w[e])return;for(var r in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(g[r]=t[r]);0===--y&&0===b&&P()}(e,t),n&&n(e,t)};var o,a=!0,d="5db76a2f45cf9168a089",c=1e4,i={},s=[],l=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"===typeof e)t._selfAccepted=e;else if("object"===typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:O,apply:_,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:i[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var m,g,v,y=0,b=0,x={},w={},E={};function j(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=c,t=t||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=T.p+""+d+".hot-update.json";n.open("GET",o,!0),n.timeout=t,n.send(null)}catch(a){return r(a)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(a){return void r(a)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;w={},x={},E=e.c,v=e.h,h("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var r in g={},C)k(r);return"prepare"===f&&0===b&&0===y&&P(),t});var t}function k(e){E[e]?(w[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=T.p+""+e+"."+d+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):x[e]=!0}function P(){h("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then(function(){return _(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in g)Object.prototype.hasOwnProperty.call(g,r)&&t.push(j(r));e.resolve(t)}}function _(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,n,o,a,c;function l(e){for(var t=[e],r={},n=t.map(function(e){return{chain:[e],id:e}});n.length>0;){var o=n.pop(),d=o.id,c=o.chain;if((a=D[d])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:d};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:d};for(var i=0;i<a.parents.length;i++){var s=a.parents[i],l=D[s];if(l){if(l.hot._declinedDependencies[d])return{type:"declined",chain:c.concat([s]),moduleId:d,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[d]?(r[s]||(r[s]=[]),u(r[s],[d])):(delete r[s],t.push(s),n.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var p={},m=[],y={},b=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var x in g)if(Object.prototype.hasOwnProperty.call(g,x)){var w;c=j(x);var O=!1,k=!1,P=!1,_="";switch((w=g[x]?l(c):{type:"disposed",moduleId:x}).chain&&(_="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+w.moduleId+_));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+_));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(O=new Error("Aborted because "+c+" is not accepted"+_));break;case"accepted":t.onAccepted&&t.onAccepted(w),k=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),P=!0;break;default:throw new Error("Unexception type "+w.type)}if(O)return h("abort"),Promise.reject(O);if(k)for(c in y[c]=g[c],u(m,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,c)&&(p[c]||(p[c]=[]),u(p[c],w.outdatedDependencies[c]));P&&(u(m,[w.moduleId]),y[c]=b)}var A,H=[];for(n=0;n<m.length;n++)c=m[n],D[c]&&D[c].hot._selfAccepted&&y[c]!==b&&H.push({module:c,errorHandler:D[c].hot._selfAccepted});h("dispose"),Object.keys(E).forEach(function(e){!1===E[e]&&function(e){delete C[e]}(e)});for(var S,N,I=m.slice();I.length>0;)if(c=I.pop(),a=D[c]){var B={},M=a.hot._disposeHandlers;for(o=0;o<M.length;o++)(r=M[o])(B);for(i[c]=B,a.hot.active=!1,delete D[c],delete p[c],o=0;o<a.children.length;o++){var q=D[a.children[o]];q&&((A=q.parents.indexOf(c))>=0&&q.parents.splice(A,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=D[c]))for(N=p[c],o=0;o<N.length;o++)S=N[o],(A=a.children.indexOf(S))>=0&&a.children.splice(A,1);for(c in h("apply"),d=v,y)Object.prototype.hasOwnProperty.call(y,c)&&(e[c]=y[c]);var L=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=D[c])){N=p[c];var U=[];for(n=0;n<N.length;n++)if(S=N[n],r=a.hot._acceptedDependencies[S]){if(-1!==U.indexOf(r))continue;U.push(r)}for(n=0;n<U.length;n++){r=U[n];try{r(N)}catch(R){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:N[n],error:R}),t.ignoreErrored||L||(L=R)}}}for(n=0;n<H.length;n++){var z=H[n];c=z.module,s=[c];try{T(c)}catch(R){if("function"===typeof z.errorHandler)try{z.errorHandler(R)}catch(G){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:G,originalError:R}),t.ignoreErrored||L||(L=G),L||(L=R)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:R}),t.ignoreErrored||L||(L=R)}}return L?(h("fail"),Promise.reject(L)):(h("idle"),new Promise(function(e){e(m)}))}var D={},A={1:0},C=(A={1:0},A={1:0},A={1:0},{1:0}),H=[],S=[];function N(e){return T.p+"static/js/"+({2:"docs-area",3:"docs-bar",4:"docs-index",5:"docs-line",6:"docs-pre"}[e]||e)+"."+{2:"ca16c1c3",3:"149ea568",4:"07dab594",5:"3b83aa14",6:"a17f0842"}[e]+".js"}function T(t){if(D[t])return D[t].exports;var r=D[t]={i:t,l:!1,exports:{},hot:u(t),parents:(l=s,s=[],l),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=D[e];if(!t)return T;var r=function(r){return t.hot.active?(D[r]?-1===D[r].parents.indexOf(e)&&D[r].parents.push(e):(s=[e],o=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),T(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return T[e]},set:function(t){T[e]=t}}};for(var a in T)Object.prototype.hasOwnProperty.call(T,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,n(a));return r.e=function(e){return"ready"===f&&h("prepare"),b++,T.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(x[e]||k(e),0===b&&0===y&&P())}},r.t=function(e,t){return 1&t&&(e=r(e)),T.t(e,-2&t)},r}(t)),r.l=!0,r.exports}T.e=function(e){var t=[],r={6:1};A[e]?t.push(A[e]):0!==A[e]&&r[e]&&t.push(A[e]=new Promise(function(t,r){for(var n="static/css/"+({2:"docs-area",3:"docs-bar",4:"docs-index",5:"docs-line",6:"docs-pre"}[e]||e)+"."+d+".css",o=T.p+n,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var i=(l=a[c]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===n||i===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var l;if((i=(l=s[c]).getAttribute("data-href"))===n||i===o)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var n=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.request=n,delete A[e],u.parentNode.removeChild(u),r(a)},u.href=o,document.getElementsByTagName("head")[0].appendChild(u)}).then(function(){A[e]=0}));r={6:1};A[e]?t.push(A[e]):0!==A[e]&&r[e]&&t.push(A[e]=new Promise(function(t,r){for(var n="static/css/"+({2:"docs-area",3:"docs-bar",4:"docs-index",5:"docs-line",6:"docs-pre"}[e]||e)+"."+d+".css",o=T.p+n,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var i=(l=a[c]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===n||i===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var l;if((i=(l=s[c]).getAttribute("data-href"))===n||i===o)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var n=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.request=n,delete A[e],u.parentNode.removeChild(u),r(a)},u.href=o,document.getElementsByTagName("head")[0].appendChild(u)}).then(function(){A[e]=0}));r={6:1};A[e]?t.push(A[e]):0!==A[e]&&r[e]&&t.push(A[e]=new Promise(function(t,r){for(var n="static/css/"+({2:"docs-area",3:"docs-bar",4:"docs-index",5:"docs-line",6:"docs-pre"}[e]||e)+"."+d+".css",o=T.p+n,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var i=(l=a[c]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===n||i===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var l;if((i=(l=s[c]).getAttribute("data-href"))===n||i===o)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var n=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.request=n,delete A[e],u.parentNode.removeChild(u),r(a)},u.href=o,document.getElementsByTagName("head")[0].appendChild(u)}).then(function(){A[e]=0}));r={6:1};A[e]?t.push(A[e]):0!==A[e]&&r[e]&&t.push(A[e]=new Promise(function(t,r){for(var n="static/css/"+({2:"docs-area",3:"docs-bar",4:"docs-index",5:"docs-line",6:"docs-pre"}[e]||e)+"."+d+".css",o=T.p+n,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var i=(l=a[c]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===n||i===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var l;if((i=(l=s[c]).getAttribute("data-href"))===n||i===o)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var n=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.request=n,delete A[e],u.parentNode.removeChild(u),r(a)},u.href=o,document.getElementsByTagName("head")[0].appendChild(u)}).then(function(){A[e]=0}));var n=C[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,r){n=C[e]=[t,r]});t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,T.nc&&c.setAttribute("nonce",T.nc),c.src=N(e),0!==c.src.indexOf(window.location.origin+"/")&&(c.crossOrigin="anonymous");var i=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var r=C[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}C[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},T.m=e,T.c=D,T.d=function(e,t,r){T.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},T.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},T.t=function(e,t){if(1&t&&(e=T(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(T.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)T.d(r,n,function(t){return e[t]}.bind(null,n));return r},T.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return T.d(t,"a",t),t},T.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},T.p="/rc-charts/",T.oe=function(e){throw console.error(e),e},T.h=function(){return d};var I=window.webpackJsonp=window.webpackJsonp||[],B=I.push.bind(I);I.push=t,I=I.slice();for(var M=0;M<I.length;M++)t(I[M]);var q=B,L=(H.push([0,0]),r());t([[],{},0,[0,2,3,4,5,6]])}({"./.docz/app/db.json":function(e){e.exports={config:{title:"Rc Charts",description:"G2 \u56fe\u8868",menu:[],version:"0.1.3",repository:!1,native:!1,codeSandbox:!0,themeConfig:{logo:{src:"/rc-charts/public/logo.svg",width:"60px"}},separator:"-",typescript:!0,theme:"/Users/wxk/Documents/project/alita/rc-charts/node_modules/docz-theme-umi/es/index.js",base:"/rc-charts",propsParser:!1,htmlContext:{favicon:"/rc-charts/public/favicon.png",head:{scripts:[{src:"https://gw.alipayobjects.com/os/lib/react/16.8.6/umd/react.production.min.js"},{src:"https://gw.alipayobjects.com/os/lib/react-dom/16.8.6/umd/react-dom.production.min.js"}]}},public:"docs/public",indexHtml:"docs/index.html",plugins:[{},{},{},{},{}]},entries:[{key:"docs/area.mdx",value:{route:"/rc-charts/area",name:"Area",id:"90766d6754219a622cefbca0d8e4dd44",filepath:"docs/area.mdx",link:"https://github.com/alitajs/rc-charts/edit/master/docs/area.mdx",slug:"docs-area",menu:"",headings:[{slug:"area",depth:1,value:"Area"},{slug:"\u57fa\u7840\u9762\u79ef\u56fe",depth:2,value:"\u57fa\u7840\u9762\u79ef\u56fe"},{slug:"\u5149\u6ed1\u9762\u79ef\u56fe",depth:2,value:"\u5149\u6ed1\u9762\u79ef\u56fe"},{slug:"\u5806\u53e0\u7ebf\u56fe",depth:2,value:"\u5806\u53e0\u7ebf\u56fe"},{slug:"\u81ea\u5b9a\u4e491",depth:2,value:"\u81ea\u5b9a\u4e491"},{slug:"\u81ea\u5b9a\u4e492",depth:2,value:"\u81ea\u5b9a\u4e492"}]}},{key:"docs/bar.mdx",value:{route:"/rc-charts/bar",name:"Bar",id:"67a1267f54288469d72796e2c95c3251",filepath:"docs/bar.mdx",link:"https://github.com/alitajs/rc-charts/edit/master/docs/bar.mdx",slug:"docs-bar",menu:"",headings:[{slug:"linechart",depth:1,value:"LineChart"},{slug:"\u57fa\u7840\u67f1\u72b6\u56fe",depth:2,value:"\u57fa\u7840\u67f1\u72b6\u56fe"},{slug:"\u5806\u53e0\u67f1\u72b6\u56fe",depth:1,value:"\u5806\u53e0\u67f1\u72b6\u56fe"},{slug:"\u57fa\u7840\u6761\u5f62\u56fe",depth:2,value:"\u57fa\u7840\u6761\u5f62\u56fe"},{slug:"\u5750\u6807\u8f74\u81ea\u5b9a\u4e49",depth:2,value:"\u5750\u6807\u8f74\u81ea\u5b9a\u4e49"}]}},{key:"docs/index.mdx",value:{name:"Getting Started",route:"/rc-charts/",id:"73498ad0e1e62a714b08085d318f9de1",filepath:"docs/index.mdx",link:"https://github.com/alitajs/rc-charts/edit/master/docs/index.mdx",slug:"docs-index",menu:"",headings:[]}},{key:"docs/line.mdx",value:{route:"/rc-charts/line",name:"Line",id:"695f0e344f6d5df57be3c5c490341df1",filepath:"docs/line.mdx",link:"https://github.com/alitajs/rc-charts/edit/master/docs/line.mdx",slug:"docs-line",menu:"",headings:[{slug:"line-chart",depth:1,value:"Line Chart"},{slug:"\u57fa\u672c\u6298\u7ebf\u56fe",depth:2,value:"\u57fa\u672c\u6298\u7ebf\u56fe"},{slug:"\u5e73\u6ed1\u7ebf\u56fe",depth:2,value:"\u5e73\u6ed1\u7ebf\u56fe"},{slug:"\u5806\u53e0\u7ebf\u56fe",depth:2,value:"\u5806\u53e0\u7ebf\u56fe"}]}},{key:"docs/pre.mdx",value:{route:"/rc-charts/pie",name:"Pie",id:"52ad8a76ed207d0a95705ddb34bdbde7",filepath:"docs/pre.mdx",link:"https://github.com/alitajs/rc-charts/edit/master/docs/pre.mdx",slug:"docs-pre",menu:"",headings:[{slug:"piechart",depth:1,value:"PieChart"},{slug:"\u57fa\u672c\u4f7f\u7528",depth:2,value:"\u57fa\u672c\u4f7f\u7528"},{slug:"\u81ea\u5b9a\u4e49\u989c\u8272",depth:2,value:"\u81ea\u5b9a\u4e49\u989c\u8272"},{slug:"\u767e\u5206\u6bd4",depth:2,value:"\u767e\u5206\u6bd4"}]}}]}},"./.docz/app/index.jsx":function(e,t,r){"use strict";r.r(t);var n=r("react"),o=r.n(n),a=r("react-dom"),d=r.n(a),c=r("./node_modules/docz/dist/index.esm.js"),i=r("./node_modules/docz-theme-umi/es/index.js"),s={"docs/area.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./docs/area.mdx"))},"docs/bar.mdx":function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"./docs/bar.mdx"))},"docs/index.mdx":function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"./docs/index.mdx"))},"docs/line.mdx":function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"./docs/line.mdx"))},"docs/pre.mdx":function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"./docs/pre.mdx"))}},l=r("./.docz/app/db.json"),u=function(){return o.a.createElement(i.a,{linkComponent:c.b,db:l},o.a.createElement(c.e,{imports:s}))},p=[],f=[],h=function(){return f.forEach(function(e){return e&&e()})},m=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;p.forEach(function(e){return e&&e()}),d.a.render(o.a.createElement(e,null),m,h)}(u)},0:function(e,t,r){e.exports=r("./.docz/app/index.jsx")},react:function(e,t){e.exports=window.React},"react-dom":function(e,t){e.exports=window.ReactDOM}});