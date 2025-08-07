import{j as t}from"./jsx-runtime-B4y4_ZYH.js";import{r as l}from"./iframe-2ubdBSbI.js";import{u as d,a as m,k as u}from"./useLatestRef-BUZ-4JWQ.js";import{S as p}from"./internal-C9afPPc5.js";import{u as c}from"./useAnimation-CDt8DyLI.js";import"./preload-helper-D9Z9MdNV.js";const a=(r={})=>{const o=d(r);return m(()=>{let e;return u(n=>{e=n},{_type:p,_get:()=>{const{axis:n}=o.current;return new ScrollTimeline({source:e||document.documentElement,axis:n})}})})},w={component:a},i={render:()=>{const e=c([{transform:"translate(0px, 1900px) rotate(3600deg)"}],{duration:500,easing:"ease-in",timeline:a()});return l.useEffect(()=>{e.play()},[]),t.jsxs("div",{style:{position:"relative",height:2e3},children:["Please scroll down!",t.jsx("div",{ref:e,style:{position:"absolute",background:"pink",height:100,width:100,top:0,left:200}})]})}},s={render:()=>{const e=a(),n=c([{transform:"translate(0px, 1900px) rotate(3600deg)"}],{duration:500,easing:"ease-in",timeline:e});return l.useEffect(()=>{n.play()},[]),t.jsx("div",{style:{background:"lightgray",padding:100},children:t.jsx("div",{ref:e,style:{background:"white",overflow:"scroll",width:400,height:400},children:t.jsxs("div",{style:{position:"relative",height:2e3},children:["Please scroll down!",t.jsx("div",{ref:n,style:{position:"absolute",background:"pink",height:100,width:100,top:0,left:200}})]})})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const size = 100;
    const height = 2000;
    const animate = useAnimation([{
      transform: \`translate(0px, \${height - size}px) rotate(3600deg)\`
    }], {
      duration: 500,
      easing: "ease-in",
      timeline: useScrollTimeline()
    });
    useEffect(() => {
      animate.play();
    }, []);
    return <div style={{
      position: "relative",
      height
    }}>
        Please scroll down!
        <div ref={animate} style={{
        position: "absolute",
        background: "pink",
        height: size,
        width: size,
        top: 0,
        left: 200
      }} />
      </div>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const size = 100;
    const height = 2000;
    const timeline = useScrollTimeline();
    const animate = useAnimation([{
      transform: \`translate(0px, \${height - size}px) rotate(3600deg)\`
    }], {
      duration: 500,
      easing: "ease-in",
      timeline
    });
    useEffect(() => {
      animate.play();
    }, []);
    return <div style={{
      background: "lightgray",
      padding: 100
    }}>
        <div ref={timeline} style={{
        background: "white",
        overflow: "scroll",
        width: 400,
        height: 400
      }}>
          <div style={{
          position: "relative",
          height
        }}>
            Please scroll down!
            <div ref={animate} style={{
            position: "absolute",
            background: "pink",
            height: size,
            width: size,
            top: 0,
            left: 200
          }} />
          </div>
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const z=["Document","Overflow"];export{i as Document,s as Overflow,z as __namedExportsOrder,w as default};
