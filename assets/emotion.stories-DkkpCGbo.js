import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{S as n}from"./iframe-BDSeeNGH.js";import{t as r}from"./jsx-runtime-CDqeXLwx.js";import{o as i,t as a}from"./src-Z0NFvIUt.js";import{a as o,c as s,n as c,o as l,r as u,s as d,t as f}from"./emotion-utils.browser.esm-CR4rEAtB.js";function p(e,t){if(e.inserted[t.name]===void 0)return e.insert(``,t,e.sheet,!0)}function m(e,t,n){var r=[],i=f(e,r,n);return r.length<2?n:i+t(r)}var h,g,_=e((()=>{s(),o(),c(),h=function(e){var t=d(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var n=function(){var e=l([...arguments],t.registered,void 0);return u(t,e,!1),t.key+`-`+e.name};return{css:n,cx:function(){var e=[...arguments];return m(t.registered,n,g(e))},injectGlobal:function(){p(t,l([...arguments],t.registered))},keyframes:function(){var e=l([...arguments],t.registered),n=`animation-`+e.name;return p(t,{name:e.name,styles:`@keyframes `+n+`{`+e.styles+`}`}),n},hydrate:function(e){e.forEach(function(e){t.inserted[e]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:f.bind(null,t.registered),merge:m.bind(null,t.registered,n)}},g=function e(t){for(var n=``,r=0;r<t.length;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case`boolean`:break;case`object`:if(Array.isArray(i))a=e(i);else for(var o in a=``,i)i[o]&&o&&(a&&(a+=` `),a+=o);break;default:a=i}a&&(n&&(n+=` `),n+=a)}}return n}})),v,y,b=e((()=>{_(),v=h({key:`css`}),v.flush,v.hydrate,v.cx,v.merge,v.getRegisteredStyles,v.injectGlobal,v.keyframes,y=v.css,v.sheet,v.cache})),x,S,C,w,T;e((()=>{x=t(n(),1),a(),b(),S=r(),C={component:i},w={render:()=>{let e=i([{transform:`rotate(0deg)`,borderRadius:`1rem`},{transform:`rotate(360deg)`,borderRadius:`50%`},{transform:`rotate(720deg)`,borderRadius:`1rem`}],{duration:1e3,iterations:1/0,easing:`ease-in-out`});return(0,x.useEffect)(()=>{e.play()},[]),(0,S.jsx)(`div`,{ref:e,className:y({border:`solid 0.1rem #135569`,height:`6rem`,width:`6rem`,margin:`2rem 0 2rem 2rem`}),onMouseEnter:()=>{e.pause()},onMouseLeave:()=>{e.play()}})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const animate = useAnimation([{
      transform: "rotate(0deg)",
      borderRadius: "1rem"
    }, {
      transform: "rotate(360deg)",
      borderRadius: "50%"
    }, {
      transform: "rotate(720deg)",
      borderRadius: "1rem"
    }], {
      duration: 1000,
      iterations: Infinity,
      easing: "ease-in-out"
    });
    useEffect(() => {
      animate.play();
    }, []);
    return <div ref={animate} className={css({
      border: "solid 0.1rem #135569",
      height: "6rem",
      width: "6rem",
      margin: "2rem 0 2rem 2rem"
    })} onMouseEnter={() => {
      animate.pause();
    }} onMouseLeave={() => {
      animate.play();
    }} />;
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`]}))();export{w as Default,T as __namedExportsOrder,C as default};