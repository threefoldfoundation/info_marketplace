(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/+cc":function(e,t,a){
/*!
 * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function a(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=a(1),i=a(7),d=i.get,h=(i.deepValue,i.isArray),s=function(){function e(t,a){var o=a.location,n=void 0===o?0:o,r=a.distance,i=void 0===r?100:r,h=a.threshold,s=void 0===h?.6:h,c=a.maxPatternLength,l=void 0===c?32:c,u=a.caseSensitive,p=void 0!==u&&u,f=a.tokenSeparator,v=void 0===f?/ +/g:f,g=a.findAllMatches,b=void 0!==g&&g,m=a.minMatchCharLength,y=void 0===m?1:m,w=a.id,k=void 0===w?null:w,M=a.keys,x=void 0===M?[]:M,S=a.shouldSort,C=void 0===S||S,_=a.getFn,T=void 0===_?d:_,A=a.sortFn,W=void 0===A?function(e,t){return e.score-t.score}:A,P=a.tokenize,F=void 0!==P&&P,O=a.matchAllTokens,I=void 0!==O&&O,D=a.includeMatches,j=void 0!==D&&D,L=a.includeScore,N=void 0!==L&&L,H=a.verbose,z=void 0!==H&&H;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:n,distance:i,threshold:s,maxPatternLength:l,isCaseSensitive:p,tokenSeparator:v,findAllMatches:b,minMatchCharLength:y,id:k,keys:x,includeMatches:j,includeScore:N,shouldSort:C,getFn:T,sortFn:W,verbose:z,tokenize:F,matchAllTokens:I},this.setCollection(t),this._processKeys(x)}var t,a;return t=e,(a=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,a=e.length;t<a;t+=1){var o=e[t];this._keyWeights[o]=1,this._keyNames.push(o)}else{for(var n=null,r=null,i=0,d=0,h=e.length;d<h;d+=1){var s=e[d];if(!s.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var c=s.name;if(this._keyNames.push(c),!s.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var l=s.weight;if(l<0||l>1)throw new Error('"weight" property in key must bein the range of [0, 1)');r=null==r?l:Math.max(r,l),n=null==n?l:Math.min(n,l),this._keyWeights[c]=l,i+=l}if(i>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var a=this._prepareSearchers(e),o=a.tokenSearchers,n=a.fullSearcher,r=this._search(o,n);return this._computeScore(r),this.options.shouldSort&&this._sort(r),t.limit&&"number"==typeof t.limit&&(r=r.slice(0,t.limit)),this._format(r)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var a=e.split(this.options.tokenSeparator),o=0,n=a.length;o<n;o+=1)t.push(new r(a[o],this.options));return{tokenSearchers:t,fullSearcher:new r(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=this.list,o={},n=[];if("string"==typeof a[0]){for(var r=0,i=a.length;r<i;r+=1)this._analyze({key:"",value:a[r],record:r,index:r},{resultMap:o,results:n,tokenSearchers:e,fullSearcher:t});return n}for(var d=0,h=a.length;d<h;d+=1)for(var s=a[d],c=0,l=this._keyNames.length;c<l;c+=1){var u=this._keyNames[c];this._analyze({key:u,value:this.options.getFn(s,u),record:s,index:d},{resultMap:o,results:n,tokenSearchers:e,fullSearcher:t})}return n}},{key:"_analyze",value:function(e,t){var a=this,o=e.key,n=e.arrayIndex,r=void 0===n?-1:n,i=e.value,d=e.record,s=e.index,c=t.tokenSearchers,l=void 0===c?[]:c,u=t.fullSearcher,p=t.resultMap,f=void 0===p?{}:p,v=t.results,g=void 0===v?[]:v;!function e(t,n,r,i){if(null!=n)if("string"==typeof n){var d=!1,s=-1,c=0;a._log("\nKey: ".concat(""===o?"--":o));var p=u.search(n);if(a._log('Full text: "'.concat(n,'", score: ').concat(p.score)),a.options.tokenize){for(var v=n.split(a.options.tokenSeparator),b=v.length,m=[],y=0,w=l.length;y<w;y+=1){var k=l[y];a._log('\nPattern: "'.concat(k.pattern,'"'));for(var M=!1,x=0;x<b;x+=1){var S=v[x],C=k.search(S),_={};C.isMatch?(_[S]=C.score,d=!0,M=!0,m.push(C.score)):(_[S]=1,a.options.matchAllTokens||m.push(1)),a._log('Token: "'.concat(S,'", score: ').concat(_[S]))}M&&(c+=1)}s=m[0];for(var T=m.length,A=1;A<T;A+=1)s+=m[A];s/=T,a._log("Token score average:",s)}var W=p.score;s>-1&&(W=(W+s)/2),a._log("Score average:",W);var P=!a.options.tokenize||!a.options.matchAllTokens||c>=l.length;if(a._log("\nCheck Matches: ".concat(P)),(d||p.isMatch)&&P){var F={key:o,arrayIndex:t,value:n,score:W};a.options.includeMatches&&(F.matchedIndices=p.matchedIndices);var O=f[i];O?O.output.push(F):(f[i]={item:r,output:[F]},g.push(f[i]))}}else if(h(n))for(var I=0,D=n.length;I<D;I+=1)e(I,n[I],r,i)}(r,i,d,s)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,a=!!Object.keys(t).length,o=0,n=e.length;o<n;o+=1){for(var r=e[o],i=r.output,d=i.length,h=1,s=0;s<d;s+=1){var c=i[s],l=c.key,u=a?t[l]:1,p=0===c.score&&t&&t[l]>0?Number.EPSILON:c.score;h*=Math.pow(p,u)}r.score=h,this._log(r)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var a=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===o(t)&&null!==t){if(-1!==a.indexOf(t))return;a.push(t)}return t}),2)),a=null}var n=[];this.options.includeMatches&&n.push((function(e,t){var a=e.output;t.matches=[];for(var o=0,n=a.length;o<n;o+=1){var r=a[o];if(0!==r.matchedIndices.length){var i={indices:r.matchedIndices,value:r.value};r.key&&(i.key=r.key),r.hasOwnProperty("arrayIndex")&&r.arrayIndex>-1&&(i.arrayIndex=r.arrayIndex),t.matches.push(i)}}})),this.options.includeScore&&n.push((function(e,t){t.score=e.score}));for(var r=0,i=e.length;r<i;r+=1){var d=e[r];if(this.options.id&&(d.item=this.options.getFn(d.item,this.options.id)[0]),n.length){for(var h={item:d.item},s=0,c=n.length;s<c;s+=1)n[s](d,h);t.push(h)}else t.push(d.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&n(t.prototype,a),e}();e.exports=s},function(e,t,a){function o(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var n=a(2),r=a(3),i=a(6),d=function(){function e(t,a){var o=a.location,n=void 0===o?0:o,r=a.distance,d=void 0===r?100:r,h=a.threshold,s=void 0===h?.6:h,c=a.maxPatternLength,l=void 0===c?32:c,u=a.isCaseSensitive,p=void 0!==u&&u,f=a.tokenSeparator,v=void 0===f?/ +/g:f,g=a.findAllMatches,b=void 0!==g&&g,m=a.minMatchCharLength,y=void 0===m?1:m,w=a.includeMatches,k=void 0!==w&&w;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:n,distance:d,threshold:s,maxPatternLength:l,isCaseSensitive:p,tokenSeparator:v,findAllMatches:b,includeMatches:k,minMatchCharLength:y},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=l&&(this.patternAlphabet=i(this.pattern))}var t,a;return t=e,(a=[{key:"search",value:function(e){var t=this.options,a=t.isCaseSensitive,o=t.includeMatches;if(a||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return o&&(i.matchedIndices=[[0,e.length-1]]),i}var d=this.options,h=d.maxPatternLength,s=d.tokenSeparator;if(this.pattern.length>h)return n(e,this.pattern,s);var c=this.options,l=c.location,u=c.distance,p=c.threshold,f=c.findAllMatches,v=c.minMatchCharLength;return r(e,this.pattern,this.patternAlphabet,{location:l,distance:u,threshold:p,findAllMatches:f,minMatchCharLength:v,includeMatches:o})}}])&&o(t.prototype,a),e}();e.exports=d},function(e,t){var a=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,n=new RegExp(t.replace(a,"\\$&").replace(o,"|")),r=e.match(n),i=!!r,d=[];if(i)for(var h=0,s=r.length;h<s;h+=1){var c=r[h];d.push([e.indexOf(c),c.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:d}}},function(e,t,a){var o=a(4),n=a(5);e.exports=function(e,t,a,r){for(var i=r.location,d=void 0===i?0:i,h=r.distance,s=void 0===h?100:h,c=r.threshold,l=void 0===c?.6:c,u=r.findAllMatches,p=void 0!==u&&u,f=r.minMatchCharLength,v=void 0===f?1:f,g=r.includeMatches,b=void 0!==g&&g,m=d,y=e.length,w=l,k=e.indexOf(t,m),M=t.length,x=[],S=0;S<y;S+=1)x[S]=0;if(-1!==k){var C=o(t,{errors:0,currentLocation:k,expectedLocation:m,distance:s});if(w=Math.min(C,w),-1!==(k=e.lastIndexOf(t,m+M))){var _=o(t,{errors:0,currentLocation:k,expectedLocation:m,distance:s});w=Math.min(_,w)}}k=-1;for(var T=[],A=1,W=M+y,P=1<<(M<=31?M-1:30),F=0;F<M;F+=1){for(var O=0,I=W;O<I;)o(t,{errors:F,currentLocation:m+I,expectedLocation:m,distance:s})<=w?O=I:W=I,I=Math.floor((W-O)/2+O);W=I;var D=Math.max(1,m-I+1),j=p?y:Math.min(m+I,y)+M,L=Array(j+2);L[j+1]=(1<<F)-1;for(var N=j;N>=D;N-=1){var H=N-1,z=a[e.charAt(H)];if(z&&(x[H]=1),L[N]=(L[N+1]<<1|1)&z,0!==F&&(L[N]|=(T[N+1]|T[N])<<1|1|T[N+1]),L[N]&P&&(A=o(t,{errors:F,currentLocation:H,expectedLocation:m,distance:s}))<=w){if(w=A,(k=H)<=m)break;D=Math.max(1,2*m-k)}}if(o(t,{errors:F+1,currentLocation:m,expectedLocation:m,distance:s})>w)break;T=L}var E={isMatch:k>=0,score:0===A?.001:A};return b&&(E.matchedIndices=n(x,v)),E}},function(e,t){e.exports=function(e,t){var a=t.errors,o=void 0===a?0:a,n=t.currentLocation,r=void 0===n?0:n,i=t.expectedLocation,d=void 0===i?0:i,h=t.distance,s=void 0===h?100:h,c=o/e.length,l=Math.abs(d-r);return s?c+l/s:l?1:c}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=[],o=-1,n=-1,r=0,i=e.length;r<i;r+=1){var d=e[r];d&&-1===o?o=r:d||-1===o||((n=r-1)-o+1>=t&&a.push([o,n]),o=-1)}return e[r-1]&&r-o>=t&&a.push([o,r-1]),a}},function(e,t){e.exports=function(e){for(var t={},a=e.length,o=0;o<a;o+=1)t[e.charAt(o)]=0;for(var n=0;n<a;n+=1)t[e.charAt(n)]|=1<<a-n-1;return t}},function(e,t){var a=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},o=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},n=function(e){return"string"==typeof e},r=function(e){return"number"==typeof e};e.exports={get:function(e,t){var i=[];return function e(t,d){if(d){var h=d.indexOf("."),s=d,c=null;-1!==h&&(s=d.slice(0,h),c=d.slice(h+1));var l=t[s];if(null!=l)if(c||!n(l)&&!r(l))if(a(l))for(var u=0,p=l.length;u<p;u+=1)e(l[u],c);else c&&e(l,c);else i.push(o(l))}else i.push(t)}(e,t),i},isArray:a,isString:n,isNum:r,toString:o}}])},GKVU:function(e,t,a){"use strict";var o=a("I+eb"),n=a("hXpO");o({target:"String",proto:!0,forced:a("rwPt")("anchor")},{anchor:function(e){return n(this,"a","name",e)}})},wQbG:function(e,t,a){"use strict";a.r(t);a("QWBl"),a("2B1R"),a("+2oP"),a("rB9j"),a("hByQ"),a("GKVU"),a("FZtP");var o=a("VTBJ"),n=a("/+cc"),r=a.n(n),i=a("CjXH"),d={components:{ChevronRightIcon:i.d,SearchIcon:i.j},data:function(){return{query:"",focusIndex:-1,focused:!1}},computed:{results:function(){return new r.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings:function(){var e=[];return this.$static.allMarkdownPage.edges.map((function(e){return e.node})).forEach((function(t){t.headings.forEach((function(a){e.push(Object(o.a)(Object(o.a)({},a),{},{path:t.path,title:t.title}))}))})),e},showResult:function(){return this.focused&&this.query.length>0}},methods:{increment:function(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement:function(){this.focusIndex>=0&&this.focusIndex--},go:function(){var e;0!==this.results.length&&(e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query="")}}},h=a("KHd+"),s=a("Kw5r"),c=s.a.config.optionMergeStrategies.computed,l={allMarkdownPage:{edges:[{node:{id:"ffc73ec625b7dc839df8ba0a0ad83eea",path:"/docs/zeroci/img/readme/",title:"",headings:[]}},{node:{id:"9f5324fef2420ad6fba5c3f41c9601c0",path:"/docs/wiki-publisher/img/readme/",title:"",headings:[]}},{node:{id:"c337a9ec045e10973cb5562d7ef4248e",path:"/docs/virtual-spaces/img/readme/",title:"",headings:[]}},{node:{id:"31bbae45d4bd15b9459d4d31864464cd",path:"/docs/video-sharing/img/readme/",title:"",headings:[]}},{node:{id:"88ff8e8b12269f44b557e9e5ead0c050",path:"/docs/video-conf/img/readme/",title:"",headings:[]}},{node:{id:"37f5bf02284941e29a91dbd845f3085d",path:"/docs/tomochain/img/readme/",title:"",headings:[]}},{node:{id:"30ecda009e1e5fbc8834ff3a2d2ad72f",path:"/docs/tfgrid/img/readme/",title:"",headings:[]}},{node:{id:"35119380ad86153e9676367e7f0baa01",path:"/docs/serverless/img/readme/",title:"",headings:[]}},{node:{id:"82a02f186b83895dbae12f29eabc922d",path:"/docs/publishing-tool/img/readme/",title:"",headings:[]}},{node:{id:"f23e4fe26e68024afc26956a814bb34f",path:"/docs/index/img/readme/",title:"",headings:[]}},{node:{id:"9f96b199d07a8c10bf8aeb68f103506e",path:"/docs/harmony/img/readme/",title:"",headings:[]}},{node:{id:"1970b306a481a1088077c6c3b0d1ba70",path:"/docs/gridsome/img/readme/",title:"",headings:[]}},{node:{id:"4f7cc9c8659717f39e5d7bf95edac043",path:"/docs/gitea/img/readme/",title:"",headings:[]}},{node:{id:"d8523f3f6f2a4ed6e632b7181d04e155",path:"/docs/dmoffice/img/readme/",title:"",headings:[]}},{node:{id:"01dbe3967310f6ed05652e8d93139116",path:"/docs/dmcustomers/img/readme/",title:"",headings:[]}},{node:{id:"a6ab280727a86e102f27f1d8f332bac9",path:"/docs/dmcollab/img/readme/",title:"",headings:[]}},{node:{id:"776ba9e54c45a751c7d3022ca2904b89",path:"/docs/dmcircles/img/readme/",title:"",headings:[]}},{node:{id:"993a9ab882d70c0cce70ce79d0439d77",path:"/docs/digitalme/img/readme/",title:"",headings:[]}},{node:{id:"9fff3bfabf2015fbb1da1d6755a97857",path:"/docs/dash/img/readme/",title:"",headings:[]}},{node:{id:"efb1d193a8442420790ed00729c68c3b",path:"/docs/digibyte/img/readme/",title:"",headings:[]}},{node:{id:"08193b648915a4e0b7b54c3c01e4fb8f",path:"/docs/crystaltwin/img/readme/",title:"",headings:[]}},{node:{id:"a453efabaa19c1d3137f1d10823477c2",path:"/docs/commento/img/readme/",title:"",headings:[]}},{node:{id:"181de75bffb8a49ec0661eb296de04dc",path:"/docs/blog-publisher/img/readme/",title:"",headings:[]}},{node:{id:"b5928a0e261f26575203fb432484bc05",path:"/docs/zeroci/",title:"ZeroCI",headings:[{depth:1,value:"ZeroCI",anchor:"#zeroci"},{depth:2,value:"What is ZeroCI?",anchor:"#what-is-zeroci"},{depth:2,value:"Why use ZeroCI?",anchor:"#why-use-zeroci"},{depth:2,value:"How to Deploy",anchor:"#how-to-deploy"},{depth:2,value:"FAQs",anchor:"#faqs"}]}},{node:{id:"453ae698914fa78c86a3068f69c114ab",path:"/docs/wiki-publisher/",title:"Wiki Publisher",headings:[{depth:1,value:"Wiki Publisher",anchor:"#wiki-publisher"},{depth:2,value:"How does it work?",anchor:"#how-does-it-work"},{depth:2,value:"What do you need to do?",anchor:"#what-do-you-need-to-do"}]}},{node:{id:"a35c5cfd5a6331ea3441adc1666db943",path:"/docs/waykichain/",title:"WaykiChain",headings:[{depth:1,value:"WaykiChain",anchor:"#waykichain"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About WayKiChain",anchor:"#about-waykichain"},{depth:2,value:"WaykiChain and ThreeFold",anchor:"#waykichain-and-threefold"},{depth:2,value:"Get started",anchor:"#get-started"}]}},{node:{id:"6d665a675a80017621dac59edfcef4d7",path:"/docs/virtual-spaces/",title:"Mozilla Hubs",headings:[{depth:1,value:"Mozilla Hubs",anchor:"#mozilla-hubs"},{depth:2,value:"Taking collaboration to the next level",anchor:"#taking-collaboration-to-the-next-level"},{depth:2,value:"Do you know about Mozilla Hubs?",anchor:"#do-you-know-about-mozilla-hubs"},{depth:2,value:"A few use cases for Hubs",anchor:"#a-few-use-cases-for-hubs"},{depth:2,value:"Hubs on the ThreeFold Grid",anchor:"#hubs-on-the-threefold-grid"}]}},{node:{id:"2c615a4706ffdd246a21f457a022f81d",path:"/docs/video-sharing/",title:"PeerTube",headings:[{depth:1,value:"PeerTube",anchor:"#peertube"},{depth:2,value:"What is a video sharing platform?",anchor:"#what-is-a-video-sharing-platform"},{depth:2,value:"Why is video sharing getting popular?",anchor:"#why-is-video-sharing-getting-popular"},{depth:2,value:"What makes our solution different?",anchor:"#what-makes-our-solution-different"},{depth:2,value:"Decentralized video sharing platform",anchor:"#decentralized-video-sharing-platform"},{depth:2,value:"PeerTube - Want to join now?",anchor:"#peertube---want-to-join-now"},{depth:2,value:"Deploy your own YouTube, super powerful & decentralized",anchor:"#deploy-your-own-youtube-super-powerful--decentralized"},{depth:3,value:"You can access PeerTube on the ThreeFold Now Marketplace directly .",anchor:"https://marketplace.threefold.io/marketplace/#/solutions/peertube"}]}},{node:{id:"dcef1acef0d4f6e1acf70f9c131ce37f",path:"/docs/video-conf/",title:"Video Chat",headings:[{depth:1,value:"Video Chat",anchor:"#video-chat"},{depth:2,value:"Quick Background",anchor:"#quick-background"},{depth:2,value:"How do other solutions work?",anchor:"#how-do-other-solutions-work"},{depth:2,value:"Example of the current solution",anchor:"#example-of-the-current-solution"},{depth:2,value:"How our solution works and what makes it different",anchor:"#how-our-solution-works-and-what-makes-it-different"}]}},{node:{id:"1bcac4487c441dd67a63b9f4ce7c4209",path:"/docs/upcoming-projects/",title:"Coming Up!",headings:[{depth:1,value:"Coming Up!",anchor:"#coming-up"},{depth:2,value:"Presearch",anchor:"#presearch"},{depth:2,value:"Origin",anchor:"#origin"},{depth:2,value:"Polkadot",anchor:"#polkadot"},{depth:2,value:"Near",anchor:"#near"},{depth:2,value:"Ethereum",anchor:"#ethereum"},{depth:2,value:"Stellar",anchor:"#stellar"},{depth:2,value:"Chainlink",anchor:"#chainlink"},{depth:2,value:"Oasis Labs",anchor:"#oasis-labs"}]}},{node:{id:"1598c69024e549e695c9c956bb03713d",path:"/docs/tomochain/",title:"TomoChain",headings:[{depth:1,value:"TomoChain",anchor:"#tomochain"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About TomoChain",anchor:"#about-tomochain"},{depth:2,value:"TomoChain and ThreeFold",anchor:"#tomochain-and-threefold"},{depth:2,value:"Get Started",anchor:"#get-started"}]}},{node:{id:"629f2ff0944c019064380c6bbc8de838",path:"/docs/tfgrid/",title:"ThreeFold Grid ",headings:[{depth:1,value:"ThreeFold Grid",anchor:"#threefold-grid"},{depth:2,value:"Decentralized Cloud",anchor:"#decentralized-cloud"},{depth:2,value:"The ThreeFold Grid",anchor:"#the-threefold-grid"},{depth:2,value:"Centralized Cloud",anchor:"#centralized-cloud"}]}},{node:{id:"f1d1af59ac475eb26df0343bd79ecd70",path:"/docs/stellar/",title:"Stellar",headings:[{depth:1,value:"Stellar",anchor:"#stellar"}]}},{node:{id:"5280fbee8a7c8ebe4ff1b91ea02cef06",path:"/docs/skalelabs/",title:"SKALE Network",headings:[{depth:1,value:"SKALE Network",anchor:"#skale-network"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About SKALE Labs",anchor:"#about-skale-labs"},{depth:2,value:"SKALE Labs and ThreeFold",anchor:"#skale-labs-and-threefold"},{depth:2,value:"Get Started",anchor:"#get-started"}]}},{node:{id:"7e0abe47312453d071d6344900a4d11f",path:"/docs/serverless/",title:"Serverless",headings:[{depth:1,value:"Serverless",anchor:"#serverless"},{depth:2,value:"What is Serverless?",anchor:"#what-is-serverless"},{depth:2,value:"Why use Serverless?",anchor:"#why-use-serverless"},{depth:2,value:"How is it related to our grid?",anchor:"#how-is-it-related-to-our-grid"},{depth:2,value:"Serverless Apps that can run on the grid",anchor:"#serverless-apps-that-can-run-on-the-grid"}]}},{node:{id:"86a56b095d5af75b56d50f6c79809d4e",path:"/docs/publishing-tool/",title:"Publishing Tools",headings:[{depth:1,value:"Publishing Tools",anchor:"#publishing-tools"},{depth:2,value:"How does it work?",anchor:"#how-does-it-work"},{depth:2,value:"What do you need to do?",anchor:"#what-do-you-need-to-do"},{depth:2,value:"Examples",anchor:"#examples"},{depth:3,value:"You can access Website Publisher on the ThreeFold Now Marketplace directly .",anchor:"https://marketplace.threefold.io/marketplace/#/solutions/website"},{depth:3,value:"You can access Blog Publisher on the ThreeFold Now Marketplace directly .",anchor:"https://marketplace.threefold.io/marketplace/#/solutions/blog"},{depth:3,value:"You can access Wiki Publisher on the ThreeFold Now Marketplace directly .",anchor:"https://marketplace.threefold.io/marketplace/#/solutions/wiki"}]}},{node:{id:"7cfc396287f06b22b65f59ea6837ba23",path:"/docs/neo/",title:"NEO",headings:[{depth:1,value:"NEO",anchor:"#neo"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About NEO",anchor:"#about-neo"},{depth:2,value:"Neo and ThreeFold",anchor:"#neo-and-threefold"},{depth:2,value:"Get Started with NEO",anchor:"#get-started-with-neo"}]}},{node:{id:"64be92bbc2b341e8fdadd74aafccdbb4",path:"/docs/mattermost/",title:"Mattermost",headings:[{depth:1,value:"Mattermost",anchor:"#mattermost"},{depth:2,value:"What is Mattermost?",anchor:"#what-is-mattermost"},{depth:2,value:"Why use Mattermost?",anchor:"#why-use-mattermost"},{depth:3,value:"You can access Mattermost on the ThreeFold Now Marketplace directly .",anchor:"https://marketplace.threefold.io/marketplace/#/solutions/mattermost"}]}},{node:{id:"68ce2e0b556cf215a3070671695b2708",path:"/docs/matic/",title:"Matic Network",headings:[{depth:1,value:"Matic Network",anchor:"#matic-network"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About Matic Network",anchor:"#about-matic-network"},{depth:2,value:"Matic Network and ThreeFold",anchor:"#matic-network-and-threefold"},{depth:2,value:"Get started with Matic",anchor:"#get-started-with-matic"}]}},{node:{id:"b52680dc2ce3c499939cf64cff77672f",path:"/docs/knowledge-base/",title:"BookStack",headings:[{depth:1,value:"BookStack",anchor:"#bookstack"},{depth:2,value:"What is BookStack?",anchor:"#what-is-bookstack"},{depth:2,value:"Why use BookStack?",anchor:"#why-use-bookstack"}]}},{node:{id:"45b37496b420988860daea28d67ada28",path:"/docs/harmony/",title:"Harmony",headings:[{depth:1,value:"Harmony",anchor:"#harmony"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About Harmony",anchor:"#about-harmony"},{depth:2,value:"Harmony and ThreeFold",anchor:"#harmony-and-threefold"},{depth:2,value:"Get started with Harmony",anchor:"#get-started-with-harmony"}]}},{node:{id:"cf5bd4f173011f4c239d0a05ce48e2b2",path:"/docs/gridsome/",title:"Gridsome",headings:[{depth:1,value:"Gridsome",anchor:"#gridsome"},{depth:2,value:"What is Gridsome?",anchor:"#what-is-gridsome"},{depth:2,value:"How does it work?",anchor:"#how-does-it-work"},{depth:2,value:"Why use Gridsome?",anchor:"#why-use-gridsome"},{depth:2,value:"How is it related to our grid?",anchor:"#how-is-it-related-to-our-grid"},{depth:2,value:"How to Deploy",anchor:"#how-to-deploy"},{depth:2,value:"FAQs",anchor:"#faqs"}]}},{node:{id:"4ee6f96a38bcd9c1331d3d58446b5d72",path:"/docs/gitea/",title:"Gitea",headings:[{depth:1,value:"Gitea",anchor:"#gitea"},{depth:2,value:"What is Gitea?",anchor:"#what-is-gitea"},{depth:3,value:"How it all started",anchor:"#how-it-all-started"},{depth:3,value:"Naming",anchor:"#naming"},{depth:2,value:"Why use Gitea?",anchor:"#why-use-gitea"},{depth:2,value:"How to Deploy",anchor:"#how-to-deploy"},{depth:2,value:"FAQs (Coming Soon)",anchor:"#faqs-coming-soon"},{depth:3,value:"You can access Gitea on the ThreeFold Now Marketplace directly .*",anchor:"https://marketplace.threefold.io/marketplace/#/solutions/gitea"}]}},{node:{id:"7e6a2437ce9ccd186e2452e27e9e561b",path:"/docs/elrond/",title:"Elrond",headings:[{depth:1,value:"Elrond",anchor:"#elrond"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About Elrond",anchor:"#about-elrond"},{depth:2,value:"Elrond and ThreeFold",anchor:"#elrond-and-threefold"},{depth:2,value:"Get Started with Elrond",anchor:"#get-started-with-elrond"}]}},{node:{id:"1aa5ba5190a9bd85327d2547c7375800",path:"/docs/dmoffice/",title:"Office Tools",headings:[{depth:1,value:"Office Tools",anchor:"#office-tools"},{depth:2,value:'A brief overview of "Office"',anchor:"#a-brief-overview-of-office"},{depth:2,value:"Why use the tools offered by ThreeFold?",anchor:"#why-use-the-tools-offered-by-threefold"}]}},{node:{id:"a0ae2ffe7d41c2354a4dc427955e7388",path:"/docs/dmcustomers/",title:"OroCRM",headings:[{depth:1,value:"OroCRM",anchor:"#orocrm"},{depth:2,value:"Did you know about OroCRM?",anchor:"#did-you-know-about-orocrm"},{depth:2,value:"How to Deploy on the TF Grid",anchor:"#how-to-deploy-on-the-tf-grid"}]}},{node:{id:"a5d307463fe72ce9f0b5ae3edf6c8a6a",path:"/docs/dmcollab/",title:"CryptPad",headings:[{depth:1,value:"CryptPad",anchor:"#cryptpad"},{depth:2,value:"Why CryptPad?",anchor:"#why-cryptpad"},{depth:2,value:"A rich text editor",anchor:"#a-rich-text-editor"},{depth:2,value:"A code editor",anchor:"#a-code-editor"},{depth:2,value:"A presentation creation tool",anchor:"#a-presentation-creation-tool"},{depth:2,value:"A spreadsheet creator and editor",anchor:"#a-spreadsheet-creator-and-editor"},{depth:2,value:"A poll creation tool",anchor:"#a-poll-creation-tool"},{depth:2,value:"A Kanban project management tool",anchor:"#a-kanban-project-management-tool"},{depth:2,value:"A Whiteboard tool",anchor:"#a-whiteboard-tool"},{depth:2,value:"An encrypted drive to store files",anchor:"#an-encrypted-drive-to-store-files"},{depth:3,value:"You can access CryptPad on the ThreeFold Now Marketplace directly .",anchor:"https://marketplace.threefold.io/marketplace/#/solutions/cryptpad"}]}},{node:{id:"f2713ac69b5551164f741bb7ece9e8f3",path:"/docs/dmcircles/",title:"Taiga",headings:[{depth:1,value:"Taiga",anchor:"#taiga"},{depth:2,value:"Are you familiar with Agile?",anchor:"#are-you-familiar-with-agile"},{depth:2,value:"Agile tool: Taiga",anchor:"#agile-tool-taiga"},{depth:2,value:"How we work at ThreeFold",anchor:"#how-we-work-at-threefold"},{depth:2,value:"How can you and your business benefit?",anchor:"#how-can-you-and-your-business-benefit"},{depth:3,value:"You can access Taiga on the ThreeFold Now Marketplace directly .",anchor:"https://marketplace.threefold.io/marketplace/#/solutions/taiga"}]}},{node:{id:"6b3972f507676502c9ef1aae0af3cdeb",path:"/docs/discourse/",title:"Discourse",headings:[{depth:1,value:"Discourse",anchor:"#discourse"},{depth:2,value:"What is Discourse?",anchor:"#what-is-discourse"},{depth:2,value:"Why use Discourse?",anchor:"#why-use-discourse"},{depth:3,value:"You can access Discourse on the ThreeFold Now Marketplace directly .",anchor:"https://marketplace.threefold.io/marketplace/#/solutions/discourse"}]}},{node:{id:"7e3c520af0a95044fa9391a9431c6462",path:"/docs/digitalme/",title:"DigitalMe",headings:[{depth:1,value:"DigitalMe",anchor:"#digitalme"},{depth:2,value:"What is happening today?",anchor:"#what-is-happening-today"},{depth:2,value:"What should be done and How are we solving the problem?",anchor:"#what-should-be-done-and-how-are-we-solving-the-problem"}]}},{node:{id:"3ba9f1de6a7a340bd6fcdd71777b397f",path:"/docs/digitalme-id/",title:"DigitalMe ID",headings:[{depth:1,value:"DigitalMe ID",anchor:"#digitalme-id"},{depth:2,value:"What is happening today?",anchor:"#what-is-happening-today"},{depth:2,value:"What should be done and How are we solving the problem?",anchor:"#what-should-be-done-and-how-are-we-solving-the-problem"}]}},{node:{id:"81b82663b17d32e9abc583cdadef346e",path:"/docs/digibyte/",title:"DigiByte",headings:[{depth:1,value:"DigiByte",anchor:"#digibyte"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About DigiByte",anchor:"#about-digibyte"},{depth:2,value:"Digibyte and ThreeFold",anchor:"#digibyte-and-threefold"},{depth:2,value:"Get Started",anchor:"#get-started"}]}},{node:{id:"179dc29441f1259e2b0775dee3a67a8f",path:"/docs/dash/",title:"Dash",headings:[{depth:1,value:"Dash",anchor:"#dash"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About Dash ",anchor:"#about-dash"},{depth:2,value:"Dash and ThreeFold",anchor:"#dash-and-threefold"},{depth:2,value:"Get started with Dash",anchor:"#get-started-with-dash"}]}},{node:{id:"a53b30027bb583574c1609c09bbfaf29",path:"/docs/crystaltwin/",title:"Crystal Twin",headings:[{depth:1,value:"Crystal Twin",anchor:"#crystal-twin"},{depth:2,value:"What is happening today?",anchor:"#what-is-happening-today"},{depth:2,value:"What should be done and How are we solving the problem?",anchor:"#what-should-be-done-and-how-are-we-solving-the-problem"},{depth:2,value:"Why is Crystal Twin important?",anchor:"#why-is-crystal-twin-important"}]}},{node:{id:"71f2d6bb180b95781023f0826ca988a3",path:"/docs/commento/",title:"Commento",headings:[{depth:1,value:"Commento",anchor:"#commento"},{depth:2,value:"What is Commento?",anchor:"#what-is-commento"},{depth:2,value:"Why use Commento?",anchor:"#why-use-commento"},{depth:2,value:"How to Deploy",anchor:"#how-to-deploy"},{depth:2,value:"FAQs",anchor:"#faqs"}]}},{node:{id:"5e5cc1a5b5d6213519e46d4cd10d0bab",path:"/docs/blog-publisher/",title:"Blog Publisher",headings:[{depth:1,value:"Blog Publisher",anchor:"#blog-publisher"},{depth:2,value:"How does it work?",anchor:"#how-does-it-work"},{depth:2,value:"What do you need to do?",anchor:"#what-do-you-need-to-do"}]}},{node:{id:"95d82bcf962b71caa6da2dbe0cf63701",path:"/docs/",title:"Introduction",headings:[{depth:1,value:"Introduction",anchor:"#introduction"},{depth:2,value:"What Is ThreeFold Now?",anchor:"#what-is-threefold-now"},{depth:2,value:"Why It Matters",anchor:"#why-it-matters"},{depth:2,value:"Why Use ThreeFold Now (Features / Benefits)",anchor:"#why-use-threefold-now-features--benefits"},{depth:2,value:"How to Use ",anchor:"#how-to-use"}]}}]}},u=function(e){var t=e.options;t.__staticData?t.__staticData.data=l:(t.__staticData=s.a.observable({data:l}),t.computed=c({$static:function(){return t.__staticData.data}},t.computed))},p=Object(h.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(t)}]}},[a("label",{staticClass:"relative block"},[a("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),a("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[a("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),a("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){e.focusIndex=-1,e.query=t.target.value},change:function(t){e.query=t.target.value}}})]),e.showResult?a("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[a("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?a("li",{staticClass:"px-2"},[e._v("\n        No results for "),a("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n      ")]):e._l(e.results,(function(t,o){return a("li",{key:t.path+t.anchor,staticClass:"border-ui-sidebar",class:{"border-b":o+1!==e.results.length},on:{mouseenter:function(t){e.focusIndex=o},mousedown:e.go}},[a("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===o},attrs:{to:t.path+t.anchor}},[t.value===t.title?a("span",[e._v("\n            "+e._s(t.value)+"\n          ")]):a("span",{staticClass:"flex items-center"},[e._v("\n            "+e._s(t.title)+"\n            "),a("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),a("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(t.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof u&&u(p);t.default=p.exports}}]);