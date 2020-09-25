var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function $(e){try{l(n["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):a(e.value).then(s,$)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:$(0),throw:$(1),return:$(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function $(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch($){s=[6,$];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],s=0,$=i.length;s<$;s++,a++)n[a]=i[s];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n=e("N","ionic");var a;var i;var s;var $=false;var l=false;var o=false;var f=false;var u=0;var c=false;var v=e("w",typeof window!=="undefined"?window:{});var d=e("C",v.CSS);var h=e("d",v.document||{head:{}});var m=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}});var p=function(){return(h.head.attachShadow+"").indexOf("[native")>-1}();var g=e("a",(function(e){return Promise.resolve(e)}));var y=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var b=function(e,t,r,n){if(r){r.map((function(r){var n=r[0],a=r[1],i=r[2];var s=N(e,n);var $=w(t,i);var l=R(n);m.ael(s,a,$,l);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return m.rel(s,a,$,l)}))}))}};var w=function(e,t){return function(r){{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,r])}}}};var N=function(e,t){if(t&4)return h;if(t&8)return v;if(t&32)return h.body;return e};var R=function(e){return(e&2)!==0};var x="r";var S="o";var k="s";var T="t";var _="s-id";var L="sty-id";var C="c-id";var A="{visibility:hidden}.hydrated{visibility:inherit}";var I="http://www.w3.org/1999/xlink";var j=function(e,t){if(t===void 0){t=""}{return function(){return}}};var E=function(e,t){{return function(){return}}};var M=new WeakMap;var P=function(e,t,r){var n=ot.get(e);if(y&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}ot.set(e,n)};var O=function(e,t,r,n){var a=q(t,r);var i=ot.get(a);e=e.nodeType===11?e:h;if(i){if(typeof i==="string"){e=e.head||e;var s=M.get(e);var $=void 0;if(!s){M.set(e,s=new Set)}if(!s.has(a)){if(e.host&&($=e.querySelector("["+L+'="'+a+'"]'))){$.innerHTML=i}else{if(m.$cssShim$){$=m.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var l=$["s-sc"];if(l){a=l;s=null}}else{$=h.createElement("style");$.innerHTML=i}e.insertBefore($,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var B=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=j("attachStyles",t.$tagName$);var i=O(p&&r.shadowRoot?r.shadowRoot:r.getRootNode(),t,e.$modeName$,r);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h");if(n&2){r.classList.add(i+"-s")}}a()};var q=function(e,t){return"sc-"+(t&&e.$flags$&32?e.$tagName$+"-"+t:e.$tagName$)};var z=function(e){return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{")};var U=function(e){return ft.map((function(t){return t(e)})).find((function(e){return!!e}))};var H=e("s",(function(e){return ft.push(e)}));var D=e("g",(function(e){return rt(e).$modeName$}));var V={};var W="http://www.w3.org/2000/svg";var F="http://www.w3.org/1999/xhtml";var G=function(e){return e!=null};var Q=function(){};var J=function(e){e=typeof e;return e==="object"||e==="function"};var K=typeof Deno!=="undefined";var X=!K&&typeof global!=="undefined"&&typeof require==="function"&&!!global.process&&typeof __filename==="string"&&(!global.origin||typeof global.origin!=="string");var Y=K&&Deno.build.os==="windows";var Z=X?process.cwd:K?Deno.cwd:function(){return"/"};var ee=X?process.exit:K?Deno.exit:Q;var te=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=null;var s=null;var $=false;var l=false;var o=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if($=typeof e!=="function"&&!J(a)){a=String(a)}if($&&l){o[o.length-1].$text$+=a}else{o.push($?re(null,a):a)}l=$}}};f(r);if(t){if(t.key){i=t.key}if(t.name){s=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,o,ie)}var c=re(e,null);c.$attrs$=t;if(o.length>0){c.$children$=o}{c.$key$=i}{c.$name$=s}return c}));var re=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$key$=null}{r.$name$=null}return r};var ne=e("H",{});var ae=function(e){return e&&e.$tag$===ne};var ie={forEach:function(e,t){return e.map(se).forEach(t)},map:function(e,t){return e.map(se).map(t).map($e)}};var se=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var $e=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return te.apply(void 0,__spreadArrays([e.vtag,t],e.vchildren||[]))}var r=re(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var le=function(e,t,r,n,a,i){if(r!==n){var s=it(e,t);var $=t.toLowerCase();if(t==="class"){var l=e.classList;var o=fe(r);var f=fe(n);l.remove.apply(l,o.filter((function(e){return e&&!f.includes(e)})));l.add.apply(l,f.filter((function(e){return e&&!o.includes(e)})))}else if(t==="style"){{for(var u in r){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!r||n[u]!==r[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(it(v,$)){t=$.slice(2)}else{t=$[2]+t.slice(3)}if(r){m.rel(e,t,r,false)}if(n){m.ael(e,t,n,false)}}else{var c=J(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(t==="list"){s=false}else if(r==null||e[t]!=d){e[t]=d}}else{e[t]=n}}catch(p){}}var h=false;{if($!==($=$.replace(/^xlink\:?/,""))){t=$;h=true}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){if(h){e.removeAttributeNS(I,t)}else{e.removeAttribute(t)}}}else if((!s||i&4||a)&&!c){n=n===true?"":n;if(h){e.setAttributeNS(I,t,n)}else{e.setAttribute(t,n)}}}}};var oe=/\s/;var fe=function(e){return!e?[]:e.split(oe)};var ue=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||V;var s=t.$attrs$||V;{for(n in i){if(!(n in s)){le(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){le(a,n,i[n],s[n],r,t.$flags$)}};var ce=function(e,t,r,n){var l=t.$children$[r];var u=0;var c;var v;var d;if(!$){o=true;if(l.$tag$==="slot"){if(a){n.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=h.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=h.createTextNode("")}else{if(!f){f=l.$tag$==="svg"}c=l.$elm$=h.createElementNS(f?W:F,l.$flags$&2?"slot-fb":l.$tag$);if(f&&l.$tag$==="foreignObject"){f=false}{ue(null,l,f)}if(G(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for(u=0;u<l.$children$.length;++u){v=ce(e,l,u,c);if(v){c.appendChild(v)}}}{if(l.$tag$==="svg"){f=false}else if(c.tagName==="foreignObject"){f=true}}}{c["s-hn"]=s;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";d=e&&e.$children$&&e.$children$[r];if(d&&d.$tag$===l.$tag$&&e.$elm$){ve(e.$elm$,false)}}}return c};var ve=function(e,t){m.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==s&&a["s-ol"]){ye(a).insertBefore(a,ge(a));a["s-ol"].remove();a["s-ol"]=undefined;o=true}if(t){ve(a,t)}}m.$flags$&=~1};var de=function(e,t,r,n,a,i){var $=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if($.shadowRoot&&$.tagName===s){$=$.shadowRoot}for(;a<=i;++a){if(n[a]){l=ce(null,r,a,e);if(l){n[a].$elm$=l;$.insertBefore(l,ge(t))}}}};var he=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;Se(n);{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{ve(a,true)}}a.remove()}}};var me=function(e,t,r,n){var a=0;var i=0;var s=0;var $=0;var l=t.length-1;var o=t[0];var f=t[l];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=l&&i<=u){if(o==null){o=t[++a]}else if(f==null){f=t[--l]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(pe(o,c)){be(o,c);o=t[++a];c=n[++i]}else if(pe(f,v)){be(f,v);f=t[--l];v=n[--u]}else if(pe(o,v)){if(o.$tag$==="slot"||v.$tag$==="slot"){ve(o.$elm$.parentNode,false)}be(o,v);e.insertBefore(o.$elm$,f.$elm$.nextSibling);o=t[++a];v=n[--u]}else if(pe(f,c)){if(o.$tag$==="slot"||v.$tag$==="slot"){ve(f.$elm$.parentNode,false)}be(f,c);e.insertBefore(f.$elm$,o.$elm$);f=t[--l];c=n[++i]}else{s=-1;{for($=a;$<=l;++$){if(t[$]&&t[$].$key$!==null&&t[$].$key$===c.$key$){s=$;break}}}if(s>=0){h=t[s];if(h.$tag$!==c.$tag$){d=ce(t&&t[i],r,s,e)}else{be(h,c);t[s]=undefined;d=h.$elm$}c=n[++i]}else{d=ce(t&&t[i],r,i,e);c=n[++i]}if(d){{ye(o.$elm$).insertBefore(d,ge(o.$elm$))}}}}if(a>l){de(e,n[u+1]==null?null:n[u+1].$elm$,r,n,i,u)}else if(i>u){he(t,a,l)}};var pe=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var ge=function(e){return e&&e["s-ol"]||e};var ye=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var be=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$tag$;var s=t.$text$;var $;if(s===null){{f=i==="svg"?true:i==="foreignObject"?false:f}{if(i==="slot");else{ue(e,t,f)}}if(n!==null&&a!==null){me(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}de(r,null,t,a,0,a.length-1)}else if(n!==null){he(n,0,n.length-1)}if(f&&i==="svg"){f=false}}else if($=r["s-cr"]){$.parentNode.textContent=s}else if(e.$text$!==s){r.data=s}};var we=function(e){var t=e.childNodes;var r;var n;var a;var i;var s;var $;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){s=r["s-sn"];r.hidden=false;for(i=0;i<a;i++){if(t[i]["s-hn"]!==r["s-hn"]){$=t[i].nodeType;if(s!==""){if($===1&&s===t[i].getAttribute("slot")){r.hidden=true;break}}else{if($===1||$===3&&t[i].textContent.trim()!==""){r.hidden=true;break}}}}}we(r)}}};var Ne=[];var Re=function(e){var t;var r;var n;var a;var i;var s;var $=0;var o=e.childNodes;var f=o.length;for(;$<f;$++){t=o[$];if(t["s-sr"]&&(r=t["s-cr"])){n=r.parentNode.childNodes;a=t["s-sn"];for(s=n.length-1;s>=0;s--){r=n[s];if(!r["s-cn"]&&!r["s-nr"]&&r["s-hn"]!==t["s-hn"]){if(xe(r,a)){i=Ne.find((function(e){return e.$nodeToRelocate$===r}));l=true;r["s-sn"]=r["s-sn"]||a;if(i){i.$slotRefNode$=t}else{Ne.push({$slotRefNode$:t,$nodeToRelocate$:r})}if(r["s-sr"]){Ne.map((function(e){if(xe(e.$nodeToRelocate$,r["s-sn"])){i=Ne.find((function(e){return e.$nodeToRelocate$===r}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!Ne.some((function(e){return e.$nodeToRelocate$===r}))){Ne.push({$nodeToRelocate$:r})}}}}if(t.nodeType===1){Re(t)}}};var xe=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var Se=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(Se)}};var ke=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var f=e.$vnode$||re(null,null);var u=ae(t)?t:te(null,null,t);s=r.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return u.$attrs$[n]=r[t]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=f.$elm$=r.shadowRoot||r;{a=r["s-sc"]}{i=r["s-cr"];$=p&&(n.$flags$&1)!==0;l=false}be(f,u);{m.$flags$|=1;if(o){Re(u.$elm$);var c=void 0;var v=void 0;var d=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<Ne.length;w++){c=Ne[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){d=h.createTextNode("");d["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=d,v)}}for(w=0;w<Ne.length;w++){c=Ne[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;d=v["s-ol"];while(d=d.previousSibling){b=d["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(l){we(u.$elm$)}m.$flags$&=~1;Ne.length=0}};var Te=e("i",(function(e){return rt(e).$hostElement$}));var _e=e("e",(function(e,t,r){var n=Te(e);return{emit:function(e){return Le(n,t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}}}));var Le=function(e,t,r){var n=m.ce(t,r);e.dispatchEvent(n);return n};var Ce=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var Ae=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}Ce(e,e.$ancestorComponent$);var r=function(){return Ie(e,t)};return bt(r)};var Ie=function(e,t){var r=j("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],r=e[1];return Be(n,t,r)}));e.$queuedListeners$=null}}{a=Be(n,"componentWillLoad")}}{a=qe(a,(function(){return Be(n,"componentWillRender")}))}r();return qe(a,(function(){return je(e,n,t)}))};var je=function(e,t,r){var n=e.$hostElement$;var a=j("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(r){B(e)}var s=j("render",e.$cmpMeta$.$tagName$);{{ke(e,Ee(e,t))}}if(m.$cssShim$){m.$cssShim$.updateHost(n)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var $=n["s-p"];var l=function(){return Me(e)};if($.length===0){l()}else{Promise.all($).then(l);e.$flags$|=4;$.length=0}}};var Ee=function(e,t){try{t=t.render&&t.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(r){st(r)}return t};var Me=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=j("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{ze(r)}{Be(a,"componentDidLoad")}n();{e.$onReadyResolve$(r);if(!i){Oe()}}}else{{Be(a,"componentDidUpdate")}n()}{e.$onInstanceResolve$(r)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){gt((function(){return Ae(e,false)}))}e.$flags$&=~(4|512)}};var Pe=e("j",(function(e){{var t=rt(e);var r=t.$hostElement$.isConnected;if(r&&(t.$flags$&(2|16))===2){Ae(t,false)}return r}}));var Oe=function(e){{ze(h.documentElement)}{m.$flags$|=2}gt((function(){return Le(v,"appload",{detail:{namespace:n}})}))};var Be=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){st(n)}}return undefined};var qe=function(e,t){return e&&e.then?e.then(t):t()};var ze=function(e){return e.classList.add("hydrated")};var Ue=function(e,t,r,n){var a=j("hydrateClient",t);var i=e.shadowRoot;var s=[];var $=[];var l=i?[]:null;var o=n.$vnode$=re(t,null);if(!m.$orgLocNodes$){De(h.body,m.$orgLocNodes$=new Map)}e[_]=r;e.removeAttribute(_);He(o,s,$,l,e,e,r);s.map((function(e){var r=e.$hostId$+"."+e.$nodeId$;var n=m.$orgLocNodes$.get(r);var a=e.$elm$;if(n&&p&&n["s-en"]===""){n.parentNode.insertBefore(a,n.nextSibling)}if(!i){a["s-hn"]=t;if(n){a["s-ol"]=n;a["s-ol"]["s-nr"]=a}}m.$orgLocNodes$.delete(r)}));if(i){l.map((function(e){if(e){i.appendChild(e)}}))}a()};var He=function(e,t,r,n,a,i,s){var $;var l;var o;var f;if(i.nodeType===1){$=i.getAttribute(C);if($){l=$.split(".");if(l[0]===s||l[0]==="0"){o={$flags$:0,$hostId$:l[0],$nodeId$:l[1],$depth$:l[2],$index$:l[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};t.push(o);i.removeAttribute(C);if(!e.$children$){e.$children$=[]}e.$children$[o.$index$]=o;e=o;if(n&&o.$depth$==="0"){n[o.$index$]=o.$elm$}}}for(f=i.childNodes.length-1;f>=0;f--){He(e,t,r,n,a,i.childNodes[f],s)}if(i.shadowRoot){for(f=i.shadowRoot.childNodes.length-1;f>=0;f--){He(e,t,r,n,a,i.shadowRoot.childNodes[f],s)}}}else if(i.nodeType===8){l=i.nodeValue.split(".");if(l[1]===s||l[1]==="0"){$=l[0];o={$flags$:0,$hostId$:l[1],$nodeId$:l[2],$depth$:l[3],$index$:l[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if($===T){o.$elm$=i.nextSibling;if(o.$elm$&&o.$elm$.nodeType===3){o.$text$=o.$elm$.textContent;t.push(o);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[o.$index$]=o;if(n&&o.$depth$==="0"){n[o.$index$]=o.$elm$}}}else if(o.$hostId$===s){if($===k){o.$tag$="slot";if(l[5]){i["s-sn"]=o.$name$=l[5]}else{i["s-sn"]=""}i["s-sr"]=true;if(n){o.$elm$=h.createElement(o.$tag$);if(o.$name$){o.$elm$.setAttribute("name",o.$name$)}i.parentNode.insertBefore(o.$elm$,i);i.remove();if(o.$depth$==="0"){n[o.$index$]=o.$elm$}}r.push(o);if(!e.$children$){e.$children$=[]}e.$children$[o.$index$]=o}else if($===x){if(n){i.remove()}else{a["s-cr"]=i;i["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){var u=re(null,i.textContent);u.$elm$=i;u.$index$="0";e.$children$=[u]}};var De=function(e,t){if(e.nodeType===1){var r=0;for(;r<e.childNodes.length;r++){De(e.childNodes[r],t)}if(e.shadowRoot){for(r=0;r<e.shadowRoot.childNodes.length;r++){De(e.shadowRoot.childNodes[r],t)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===S){t.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-en"]=n[3]}}};var Ve=function(e,t){if(e!=null&&!J(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var We=function(e,t){return rt(e).$instanceValues$.get(t)};var Fe=function(e,t,r,n){var a=rt(e);var i=a.$instanceValues$.get(t);var s=a.$flags$;var $=a.$lazyInstance$;r=Ve(r,n.$members$[t][0]);if((!(s&8)||i===undefined)&&r!==i){a.$instanceValues$.set(t,r);if($){if(n.$watchers$&&s&128){var l=n.$watchers$[t];if(l){l.map((function(e){try{$[e](r,i,t)}catch(n){st(n)}}))}}if((s&(2|16))===2){Ae(a,false)}}}};var Ge=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return We(this,n)},set:function(e){Fe(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=rt(this);return r.$onInstancePromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;m.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var Qe=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,(function(){var r,i,$,l,o,f,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=lt(a);if(!s.then)return[3,2];r=E();return[4,s];case 1:s=c.sent();r();c.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}Ge(s,a,2);s.isProxied=true}i=j("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(v){st(v)}{n.$flags$&=~8}{n.$flags$|=128}i();Je(n.$lazyInstance$);if(!s.style)return[3,5];$=s.style;if(typeof $!=="string"){$=$[n.$modeName$=U(e)]}l=q(a,n.$modeName$);if(!!ot.has(l))return[3,5];o=j("registerStyles",a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-7f0a8d9c.system.js").then((function(e){return e.scopeCss($,l,false)}))];case 3:$=c.sent();c.label=4;case 4:P(l,$,!!(a.$flags$&1));o();c.label=5;case 5:f=n.$ancestorComponent$;u=function(){return Ae(n,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var Je=function(e){{Be(e,"connectedCallback")}};var Ke=function(e){if((m.$flags$&1)===0){var t=rt(e);var r=t.$cmpMeta$;var n=j("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;var a=void 0;{a=e.getAttribute(_);if(a){if(p&&r.$flags$&1){var i=O(e.shadowRoot,r,e.getAttribute("s-mode"));e.classList.remove(i+"-h",i+"-s")}Ue(e,r.$tagName$,a,t)}}if(!a){if(r.$flags$&(4|8)){Xe(e)}}{var s=e;while(s=s.parentNode||s.host){if(s.nodeType===1&&s.hasAttribute("s-id")&&s["s-p"]||s["s-p"]){Ce(t,t.$ancestorComponent$=s);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{gt((function(){return Qe(e,t,r)}))}}else{b(e,t,r.$listeners$);Je(t.$lazyInstance$)}n()}};var Xe=function(e){var t=e["s-cr"]=h.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Ye=function(e){if((m.$flags$&1)===0){var t=rt(e);var r=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}if(m.$cssShim$){m.$cssShim$.removeHost(e)}{Be(r,"disconnectedCallback")}}};var Ze=e("b",(function(e,t){if(t===void 0){t={}}var r=j();var n=[];var a=t.exclude||[];var i=v.customElements;var s=h.head;var $=s.querySelector("meta[charset]");var l=h.createElement("style");var o=[];var f=h.querySelectorAll("["+L+"]");var u;var c=true;var d=0;Object.assign(m,t);m.$resourcesUrl$=new URL(t.resourcesUrl||"./",h.baseURI).href;{if(t.syncQueue){m.$flags$|=4}}{m.$flags$|=2}{for(;d<f.length;d++){P(f[d].getAttribute(L),z(f[d].innerHTML),true)}}e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}{r.$watchers$={}}if(!p&&r.$flags$&1){r.$flags$|=8}var s=r.$tagName$;var $=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;at(t,r);if(r.$flags$&1){if(p){{t.attachShadow({mode:"open",delegatesFocus:!!(r.$flags$&16)})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return n}t.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if(c){o.push(this)}else{m.jmp((function(){return Ke(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;m.jmp((function(){return Ye(e)}))};t.prototype.forceUpdate=function(){Pe(this)};t.prototype.componentOnReady=function(){return rt(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleId$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,Ge($,r,1))}}))}));{l.innerHTML=n+A;l.setAttribute("data-styles","");s.insertBefore(l,$?$.nextSibling:s.firstChild)}c=false;if(o.length){o.map((function(e){return e.connectedCallback()}))}else{{m.jmp((function(){return u=setTimeout(Oe,30)}))}}r()}));var et=e("k",(function(e){var t=new URL(e,m.$resourcesUrl$);return t.origin!==v.location.origin?t.href:t.pathname}));var tt=new WeakMap;var rt=function(e){return tt.get(e)};var nt=e("r",(function(e,t){return tt.set(t.$lazyInstance$=e,t)}));var at=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}b(e,r,t.$listeners$);return tt.set(e,r)};var it=function(e,t){return t in e};var st=function(e){return console.error(e)};var $t=new Map;var lt=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var s=$t.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{$t.set(i,e)}return e[a]}),st)};var ot=new Map;var ft=[];var ut=[];var ct=[];var vt=[];var dt=function(e,t){return function(r){e.push(r);if(!c){c=true;if(t&&m.$flags$&4){gt(pt)}else{m.raf(pt)}}}};var ht=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){st(r)}}e.length=0};var mt=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){st(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var pt=function(){{u++}ht(ut);{var e=(m.$flags$&6)===2?performance.now()+14*Math.ceil(u*(1/10)):Infinity;mt(ct,e);mt(vt,e);if(ct.length>0){vt.push.apply(vt,ct);ct.length=0}if(c=ut.length+ct.length+vt.length>0){m.raf(pt)}else{u=0}}};var gt=function(e){return g().then(e)};var yt=e("f",dt(ut,false));var bt=e("c",dt(ct,true));var wt=e("B",{isDev:false,isBrowser:true,isServer:false,isTesting:false})}}}));