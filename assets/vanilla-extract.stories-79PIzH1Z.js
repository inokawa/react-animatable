import{j as n}from"./jsx-runtime-CuWC-ldB.js";import{r as t}from"./iframe-C1D3SbRn.js";import{u as a}from"./useAnimation-D2Z2b5b5.js";import"./preload-helper-D9Z9MdNV.js";import"./useLatestRef-BOEH2WHL.js";var o="_16hjy5z0";const f={component:a},r={render:()=>{const e=a([{transform:"rotate(0deg)",borderRadius:"1rem"},{transform:"rotate(360deg)",borderRadius:"50%"},{transform:"rotate(720deg)",borderRadius:"1rem"}],{duration:1e3,iterations:1/0,easing:"ease-in-out"});return t.useEffect(()=>{e.play()},[]),n.jsx("div",{ref:e,className:o,onMouseEnter:()=>{e.pause()},onMouseLeave:()=>{e.play()}})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    return <div ref={animate} className={myStyle} onMouseEnter={() => {
      animate.pause();
    }} onMouseLeave={() => {
      animate.play();
    }} />;
  }
}`,...r.parameters?.docs?.source}}};const p=["Default"];export{r as Default,p as __namedExportsOrder,f as default};
