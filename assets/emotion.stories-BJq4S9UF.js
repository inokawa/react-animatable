import{j as b}from"./jsx-runtime-DK9fd3sa.js";import{r as E}from"./iframe-CN_-6um8.js";import{c as R,g as h,s as l,i as w}from"./emotion-utils.browser.esm-D7rxl85_.js";import{u as y}from"./useAnimation-BDPWjMuH.js";import"./preload-helper-D9Z9MdNV.js";import"./Serializer-DjNAPGEo.js";import"./useLatestRef-BowaJWF7.js";function v(n,m){if(n.inserted[m.name]===void 0)return n.insert("",m,n.sheet,!0)}function p(n,m,e){var s=[],i=h(n,s,e);return s.length<2?e:i+m(s)}var x=function(m){var e=R(m);e.sheet.speedy=function(f){this.isSpeedy=f},e.compat=!0;var s=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var u=l(a,e.registered,void 0);return w(e,u,!1),e.key+"-"+u.name},i=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var u=l(a,e.registered),g="animation-"+u.name;return v(e,{name:u.name,styles:"@keyframes "+g+"{"+u.styles+"}"}),g},o=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var u=l(a,e.registered);v(e,u)},c=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return p(e.registered,s,S(a))};return{css:s,cx:c,injectGlobal:o,keyframes:i,hydrate:function(t){t.forEach(function(a){e.inserted[a]=!0})},flush:function(){e.registered={},e.inserted={},e.sheet.flush()},sheet:e.sheet,cache:e,getRegisteredStyles:h.bind(null,e.registered),merge:p.bind(null,e.registered,s)}},S=function n(m){for(var e="",s=0;s<m.length;s++){var i=m[s];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=n(i);else{o="";for(var c in i)i[c]&&c&&(o&&(o+=" "),o+=c)}break}default:o=i}o&&(e&&(e+=" "),e+=o)}}return e},j=x({key:"css"}),M=j.css;const A={component:y},d={render:()=>{const n=y([{transform:"rotate(0deg)",borderRadius:"1rem"},{transform:"rotate(360deg)",borderRadius:"50%"},{transform:"rotate(720deg)",borderRadius:"1rem"}],{duration:1e3,iterations:1/0,easing:"ease-in-out"});return E.useEffect(()=>{n.play()},[]),b.jsx("div",{ref:n,className:M({border:"solid 0.1rem #135569",height:"6rem",width:"6rem",margin:"2rem 0 2rem 2rem"}),onMouseEnter:()=>{n.pause()},onMouseLeave:()=>{n.play()}})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const O=["Default"];export{d as Default,O as __namedExportsOrder,A as default};
