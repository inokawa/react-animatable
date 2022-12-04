/*! For license information please see with-libraries-css-in-js-stitches-stories.501a2715.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[331],{"./stories/with-libraries/css-in-js/stitches.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>stitches_stories});var X,_a,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js")),useAnimation=__webpack_require__("./src/react/hooks/useAnimation.ts"),e="colors",t="sizes",r="space",n={gap:r,gridGap:r,columnGap:r,gridColumnGap:r,rowGap:r,gridRowGap:r,inset:r,insetBlock:r,insetBlockEnd:r,insetBlockStart:r,insetInline:r,insetInlineEnd:r,insetInlineStart:r,margin:r,marginTop:r,marginRight:r,marginBottom:r,marginLeft:r,marginBlock:r,marginBlockEnd:r,marginBlockStart:r,marginInline:r,marginInlineEnd:r,marginInlineStart:r,padding:r,paddingTop:r,paddingRight:r,paddingBottom:r,paddingLeft:r,paddingBlock:r,paddingBlockEnd:r,paddingBlockStart:r,paddingInline:r,paddingInlineEnd:r,paddingInlineStart:r,top:r,right:r,bottom:r,left:r,scrollMargin:r,scrollMarginTop:r,scrollMarginRight:r,scrollMarginBottom:r,scrollMarginLeft:r,scrollMarginX:r,scrollMarginY:r,scrollMarginBlock:r,scrollMarginBlockEnd:r,scrollMarginBlockStart:r,scrollMarginInline:r,scrollMarginInlineEnd:r,scrollMarginInlineStart:r,scrollPadding:r,scrollPaddingTop:r,scrollPaddingRight:r,scrollPaddingBottom:r,scrollPaddingLeft:r,scrollPaddingX:r,scrollPaddingY:r,scrollPaddingBlock:r,scrollPaddingBlockEnd:r,scrollPaddingBlockStart:r,scrollPaddingInline:r,scrollPaddingInlineEnd:r,scrollPaddingInlineStart:r,fontSize:"fontSizes",background:e,backgroundColor:e,backgroundImage:e,borderImage:e,border:e,borderBlock:e,borderBlockEnd:e,borderBlockStart:e,borderBottom:e,borderBottomColor:e,borderColor:e,borderInline:e,borderInlineEnd:e,borderInlineStart:e,borderLeft:e,borderLeftColor:e,borderRight:e,borderRightColor:e,borderTop:e,borderTopColor:e,caretColor:e,color:e,columnRuleColor:e,fill:e,outline:e,outlineColor:e,stroke:e,textDecorationColor:e,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:t,minBlockSize:t,maxBlockSize:t,inlineSize:t,minInlineSize:t,maxInlineSize:t,width:t,minWidth:t,maxWidth:t,height:t,minHeight:t,maxHeight:t,flexBasis:t,gridTemplateColumns:t,gridTemplateRows:t,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},i=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,o=()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(e=>JSON.stringify(e,i))(t);return o in e?e[o]:e[o]=r(t,...n)}},l=Symbol.for("sxs.internal"),s=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),a=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:c}=Object.prototype,d=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),g=/\s+(?![^()]*\))/,p=e=>t=>e(..."string"==typeof t?String(t).split(g):[t]),u={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:p(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:p(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:p(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:p(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:p(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:p(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},h=/([\d.]+)([^]*)/,f=(e,t)=>e.length?e.reduce(((e,r)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(e)?`:is(${r})`:r):r+" "+e))),e)),[]):t,m=(e,t)=>e in b&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,r,n,i)=>r+("stretch"===n?`-moz-available${i};${d(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${d(e)}:${r}fit-content`)+i)):String(t),b={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},S=e=>e?e+"-":"",k=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,n,i,o,l)=>"$"==o==!!i?e:(n||"--"==o?"calc(":"")+"var(--"+("$"===o?S(t)+(l.includes("$")?"":S(r))+l.replace(/\$/g,"-"):l)+")"+(n||"--"==o?"*"+(n||"")+(i||"1")+")":""))),y=/\s*,\s*(?![^()]*\))/,B=Object.prototype.toString,$=(e,t,r,n,i)=>{let o,l,s;const a=(e,t,r)=>{let c,g;const p=e=>{for(c in e){const R=64===c.charCodeAt(0),z=R&&Array.isArray(e[c])?e[c]:[e[c]];for(g of z){const e=/[A-Z]/.test($=c)?$:$.replace(/-[^]/g,(e=>e[1].toUpperCase())),z="object"==typeof g&&g&&g.toString===B&&(!n.utils[e]||!t.length);if(e in n.utils&&!z){const t=n.utils[e];if(t!==l){l=t,p(t(g)),l=null;continue}}else if(e in u){const t=u[e];if(t!==s){s=t,p(t(g)),s=null;continue}}if(R&&(b=c.slice(1)in n.media?"@media "+n.media[c.slice(1)]:c,c=b.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,r,n,i,o)=>{const l=h.test(t),s=.0625*(l?-1:1),[a,c]=l?[n,t]:[t,n];return"("+("="===r[0]?"":">"===r[0]===l?"max-":"min-")+a+":"+("="!==r[0]&&1===r.length?c.replace(h,((e,t,n)=>Number(t)+s*(">"===r?1:-1)+n)):c)+(i?") and ("+(">"===i[0]?"min-":"max-")+a+":"+(1===i.length?o.replace(h,((e,t,r)=>Number(t)+s*(">"===i?-1:1)+r)):o):"")+")"}))),z){const e=R?r.concat(c):[...r],n=R?[...t]:f(t,c.split(y));void 0!==o&&i(x(...o)),o=void 0,a(g,n,e)}else void 0===o&&(o=[[],t,r]),c=R||36!==c.charCodeAt(0)?c:`--${S(n.prefix)}${c.slice(1).replace(/\$/g,"-")}`,g=z?g:"number"==typeof g?g&&e in I?String(g)+"px":String(g):k(m(e,null==g?"":g),n.prefix,n.themeMap[e]),o[0].push(`${R?`${c} `:`${d(c)}:`}${g}`)}}var b,$};p(e),void 0!==o&&i(x(...o)),o=void 0};a(e,t,r)},x=(e,t,r)=>`${r.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,I={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},R=e=>String.fromCharCode(e+(e>25?39:97)),z=e=>(e=>{let t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=R(t%52)+r;return R(t%52)+r})(((e,t)=>{let r=t.length;for(;r;)e=33*e^t.charCodeAt(--r);return e})(5381,JSON.stringify(e))>>>0),W=["themed","global","styled","onevar","resonevar","allvar","inline"],j=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch(e){return!1}},E=e=>{let t;const r=()=>{const{cssRules:e}=t.sheet;return[].map.call(e,((r,n)=>{const{cssText:i}=r;let o="";if(i.startsWith("--sxs"))return"";if(e[n-1]&&(o=e[n-1].cssText).startsWith("--sxs")){if(!r.cssRules.length)return"";for(const e in t.rules)if(t.rules[e].group===r)return`--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${i}`;return r.cssRules.length?`${o}${i}`:""}return i})).join("")},n=()=>{if(t){const{rules:e,sheet:r}=t;if(!r.deleteRule){for(;3===Object(Object(r.cssRules)[0]).type;)r.cssRules.splice(0,1);r.cssRules=[]}for(const t in e)delete e[t]}const i=Object(e).styleSheets||[];for(const e of i)if(j(e)){for(let i=0,o=e.cssRules;o[i];++i){const l=Object(o[i]);if(1!==l.type)continue;const s=Object(o[i+1]);if(4!==s.type)continue;++i;const{cssText:a}=l;if(!a.startsWith("--sxs"))continue;const c=a.slice(14,-3).trim().split(/\s+/),d=W[c[0]];d&&(t||(t={sheet:e,reset:n,rules:{},toString:r}),t.rules[d]={group:s,index:i,cache:new Set(c)})}if(t)break}if(!t){const i=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,i(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:i("","text/css"),rules:{},reset:n,toString:r}}const{sheet:o,rules:l}=t;for(let e=W.length-1;e>=0;--e){const t=W[e];if(!l[t]){const r=W[e+1],n=l[r]?l[r].index:o.cssRules.length;o.insertRule("@media{}",n),o.insertRule(`--sxs{--sxs:${e}}`,n),l[t]={group:o.cssRules[n+1],index:n,cache:new Set([e])}}v(l[t])}};return n(),t},v=e=>{const t=e.group;let r=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,r),++r}catch(e){}}},T=Symbol(),w=o(),M=(e,t)=>w(e,(()=>(...r)=>{let n={type:null,composers:new Set};for(const t of r)if(null!=t)if(t[l]){null==n.type&&(n.type=t[l].type);for(const e of t[l].composers)n.composers.add(e)}else t.constructor!==Object||t.$$typeof?null==n.type&&(n.type=t):n.composers.add(C(t,e));return null==n.type&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),P(e,n,t)})),C=({variants:e,compoundVariants:t,defaultVariants:r,...n},i)=>{const o=`${S(i.prefix)}c-${z(n)}`,l=[],s=[],d=Object.create(null),g=[];for(const e in r)d[e]=String(r[e]);if("object"==typeof e&&e)for(const t in e){p=d,u=t,c.call(p,u)||(d[t]="undefined");const r=e[t];for(const e in r){const n={[t]:String(e)};"undefined"===String(e)&&g.push(t);const i=r[e],o=[n,i,!a(i)];l.push(o)}}var p,u;if("object"==typeof t&&t)for(const e of t){let{css:t,...r}=e;t="object"==typeof t&&t||{};for(const e in r)r[e]=String(r[e]);const n=[r,t,!a(t)];s.push(n)}return[o,n,l,s,d,g]},P=(e,t,r)=>{const[n,i,o,a]=L(t.composers),c="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let r=0;r<t[T].length;r++){const[n,i]=t[T][r];e.rules[n].apply(i)}return t[T]=[],null}return t[T]=[],t.rules={},W.forEach((e=>t.rules[e]={apply:r=>t[T].push([e,r])})),t})(r):null,d=(c||r).rules,g=`.${n}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,p=l=>{l="object"==typeof l&&l||A;const{css:s,...p}=l,u={};for(const e in o)if(delete p[e],e in l){let t=l[e];"object"==typeof t&&t?u[e]={"@initial":o[e],...t}:(t=String(t),u[e]="undefined"!==t||a.has(e)?t:o[e])}else u[e]=o[e];const h=new Set([...i]);for(const[n,i,o,l]of t.composers){r.rules.styled.cache.has(n)||(r.rules.styled.cache.add(n),$(i,[`.${n}`],[],e,(e=>{d.styled.apply(e)})));const t=O(o,u,e.media),s=O(l,u,e.media,!0);for(const i of t)if(void 0!==i)for(const[t,o,l]of i){const i=`${n}-${z(o)}-${t}`;h.add(i);const s=(l?r.rules.resonevar:r.rules.onevar).cache,a=l?d.resonevar:d.onevar;s.has(i)||(s.add(i),$(o,[`.${i}`],[],e,(e=>{a.apply(e)})))}for(const t of s)if(void 0!==t)for(const[i,o]of t){const t=`${n}-${z(o)}-${i}`;h.add(t),r.rules.allvar.cache.has(t)||(r.rules.allvar.cache.add(t),$(o,[`.${t}`],[],e,(e=>{d.allvar.apply(e)})))}}if("object"==typeof s&&s){const t=`${n}-i${z(s)}-css`;h.add(t),r.rules.inline.cache.has(t)||(r.rules.inline.cache.add(t),$(s,[`.${t}`],[],e,(e=>{d.inline.apply(e)})))}for(const e of String(l.className||"").trim().split(/\s+/))e&&h.add(e);const f=p.className=[...h].join(" ");return{type:t.type,className:f,selector:g,props:p,toString:()=>f,deferredInjector:c}};return s(p,{className:n,selector:g,[l]:t,toString:()=>(r.rules.styled.cache.has(n)||p(),n)})},L=e=>{let t="";const r=[],n={},i=[];for(const[o,,,,l,s]of e){""===t&&(t=o),r.push(o),i.push(...s);for(const e in l){const t=l[e];(void 0===n[e]||"undefined"!==t||s.includes(t))&&(n[e]=t)}}return[t,r,n,new Set(i)]},O=(e,t,r,n)=>{const i=[];e:for(let[o,l,s]of e){if(s)continue;let e,a=0,c=!1;for(e in o){const n=o[e];let i=t[e];if(i!==n){if("object"!=typeof i||!i)continue e;{let e,t,o=0;for(const l in i){if(n===String(i[l])){if("@initial"!==l){const e=l.slice(1);(t=t||[]).push(e in r?r[e]:l.replace(/^@media ?/,"")),c=!0}a+=o,e=!0}++o}if(t&&t.length&&(l={["@media "+t.join(", ")]:l}),!e)continue e}}}(i[a]=i[a]||[]).push([n?"cv":`${e}-${o[e]}`,l,c])}return i},A={},N=o(),D=(e,t)=>N(e,(()=>(...r)=>{const n=()=>{for(let n of r){n="object"==typeof n&&n||{};let r=z(n);if(!t.rules.global.cache.has(r)){if(t.rules.global.cache.add(r),"@import"in n){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let r of[].concat(n["@import"]))r=r.includes('"')||r.includes("'")?r:`"${r}"`,t.sheet.insertRule(`@import ${r};`,e++);delete n["@import"]}$(n,[],[],e,(e=>{t.rules.global.apply(e)}))}}return""};return s(n,{toString:n})})),H=o(),V=(e,t)=>H(e,(()=>r=>{const n=`${S(e.prefix)}k-${z(r)}`,i=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];$(r,[],[],e,(e=>i.push(e)));const o=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(o)}return n};return s(i,{get name(){return i()},toString:i})})),G=class{constructor(e,t,r,n){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==r?"":String(r),this.prefix=null==n?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+S(this.prefix)+S(this.scale)+this.token}toString(){return this.computedValue}},F=o(),J=(e,t)=>F(e,(()=>(r,n)=>{n="object"==typeof r&&r||Object(n);const i=`.${r=(r="string"==typeof r?r:"")||`${S(e.prefix)}t-${z(n)}`}`,o={},l=[];for(const t in n){o[t]={};for(const r in n[t]){const i=`--${S(e.prefix)}${t}-${r}`,s=k(String(n[t][r]),e.prefix,t);o[t][r]=new G(r,s,t,e.prefix),l.push(`${i}:${s}`)}}const s=()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const i=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(i)}return r};return{...o,get className(){return s()},selector:i,toString:s}})),U=o(),Y=o(),K=()=>X||(X=(e=>{const t=(e=>{let t=!1;const r=U(e,(e=>{t=!0;const r="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",i="object"==typeof e.media&&e.media||{},o="object"==typeof e.root?e.root||null:globalThis.document||null,l="object"==typeof e.theme&&e.theme||{},s={prefix:r,media:i,theme:l,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...n},utils:"object"==typeof e.utils&&e.utils||{}},a=E(o),c={css:M(s,a),globalCss:D(s,a),keyframes:V(s,a),createTheme:J(s,a),reset(){a.reset(),c.theme.toString()},theme:{},sheet:a,config:s,prefix:r,getCssText:a.toString,toString:a.toString};return String(c.theme=c.createTheme(l)),c}));return t||r.reset(),r})(e);return t.styled=(({config:e,sheet:t})=>Y(e,(()=>{const r=M(e,t);return(...e)=>{const t=r(...e),n=t[l].type,i=react.forwardRef(((e,r)=>{const i=e&&e.as||n,{props:o,deferredInjector:l}=t(e);return delete o.as,o.ref=r,l?react.createElement(react.Fragment,null,react.createElement(i,o),react.createElement(l,null)):react.createElement(i,o)}));return i.className=t.className,i.displayName=`Styled.${n.displayName||n.name||n}`,i.selector=t.selector,i.toString=()=>t.selector,i[l]=t[l],i}})))(t),t})());const stitches_stories={component:useAnimation._},Comp=((...e)=>K().styled(...e))("div",{border:"solid 0.1rem #135569",height:"6rem",width:"6rem",margin:" 2rem 0 2rem 2rem"}),Default={render:()=>{const animate=(0,useAnimation._)([{transform:"rotate(0deg)",borderRadius:"1rem"},{transform:"rotate(360deg)",borderRadius:"50%"},{transform:"rotate(720deg)",borderRadius:"1rem"}],{duration:1e3,iterations:1/0,easing:"ease-in-out"});return(0,react.useEffect)((()=>{animate.play()}),[]),(0,jsx_runtime.jsx)(Comp,{ref:animate,onMouseEnter:()=>{animate.pause()},onMouseLeave:()=>{animate.play()}})}};Default.parameters={...Default.parameters,storySource:{source:'{\n  render: () => {\n    const animate = useAnimation([{\n      transform: "rotate(0deg)",\n      borderRadius: "1rem"\n    }, {\n      transform: "rotate(360deg)",\n      borderRadius: "50%"\n    }, {\n      transform: "rotate(720deg)",\n      borderRadius: "1rem"\n    }], {\n      duration: 1000,\n      iterations: Infinity,\n      easing: "ease-in-out"\n    });\n    useEffect(() => {\n      animate.play();\n    }, []);\n    return <Comp ref={animate} onMouseEnter={() => {\n      animate.pause();\n    }} onMouseLeave={() => {\n      animate.play();\n    }} />;\n  }\n}',...null===(_a=Default.parameters)||void 0===_a?void 0:_a.storySource}};const __namedExportsOrder=["Default"]},"./src/core/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Iq:()=>isSameObject,RR:()=>getKeys,ZT:()=>noop,bT:()=>isSameObjectArray,f0:()=>assign,qo:()=>toArray});const noop=()=>{},getKeys=Object.keys,assign=Object.assign,isArray=Array.isArray,getStyle=e=>getComputedStyle(e),isSameObject=(target={},prev={})=>{const keys=getKeys(target);return keys.length===getKeys(prev).length&&keys.every((k=>target[k]===prev[k]))},isSameObjectArray=(target,prev)=>target.length===prev.length&&target.every(((t,i)=>isSameObject(t,prev[i]))),toArray=items=>isArray(items)?items:[items]},"./src/core/waapi.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cz:()=>_finish,DR:()=>_waitFor,H9:()=>_cancel,K:()=>_setRate,KU:()=>_play,NU:()=>_pause,YQ:()=>_setTime,eo:()=>_reverse,ih:()=>createAnimation,m7:()=>normalizeKeyframe});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/utils.ts");const normalizeKeyframe=(el,keyframe,args)=>"function"==typeof keyframe?keyframe((0,_utils__WEBPACK_IMPORTED_MODULE_0__.C2)(el),args):(0,_utils__WEBPACK_IMPORTED_MODULE_0__.qo)(keyframe),createAnimation=(el,keyframes,options)=>{const modifiedOptions={fill:"both",...options};try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions))}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=(animation,opts={})=>{animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,(p=>-p)),opts.restart&&_setTime(animation,0),animation.play()},_reverse=animation=>{animation&&animation.reverse()},_cancel=animation=>{animation&&animation.cancel()},_finish=animation=>{animation&&animation.finish()},_pause=animation=>{animation&&animation.pause()},_setTime=(animation,arg)=>{animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=(animation,arg)=>{animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=(animation,name)=>animation?new Promise((resolve=>{animation.onfinish=()=>{("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}})):Promise.resolve()},"./src/react/hooks/useAnimation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>useAnimation});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/core/utils.ts"),_core_waapi__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core/waapi.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/react/hooks/useIsomorphicLayoutEffect.ts");const useAnimation=(keyframe,options)=>{const keyframeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(keyframe),optionsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(options),[animation,cleanup]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>{let cache,target=null;const getAnimation=()=>null==cache?void 0:cache[0],externalHandle=(0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.f0)((ref=>{(target=ref)||(cache=void 0)}),{play:(...opts)=>target?((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.KU)(((el,opts={})=>{const keyframes=(0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.m7)(el,keyframeRef.current,opts.args),options=optionsRef.current;if(cache){const[prevAnimation,prevKeyframes,prevOptions]=cache;if((0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.bT)(keyframes,prevKeyframes)&&(0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.Iq)(options,prevOptions))return prevAnimation;prevAnimation.cancel()}const animation=(0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.ih)(el,keyframes,options);return cache=[animation,keyframes,options],animation})(target,opts[0]),opts[0]),externalHandle):externalHandle,reverse:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.eo)(getAnimation()),externalHandle),cancel:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.H9)(getAnimation()),externalHandle),finish:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.Cz)(getAnimation()),externalHandle),pause:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.NU)(getAnimation()),externalHandle),setTime:time=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.YQ)(getAnimation(),time),externalHandle),setPlaybackRate:rate=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.K)(getAnimation(),rate),externalHandle),waitFor:event=>(0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.DR)(getAnimation(),event).then((()=>externalHandle))});return[externalHandle,externalHandle.cancel]}))[0];return(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.L)((()=>{keyframeRef.current=keyframe,optionsRef.current=options})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>cleanup),[]),animation}},"./src/react/hooks/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_LSK4KSW4_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-LSK4KSW4.mjs"),global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/global/window.js"),global__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),global__WEBPACK_IMPORTED_MODULE_1___default());globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_LSK4KSW4_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_LSK4KSW4_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_LSK4KSW4_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);