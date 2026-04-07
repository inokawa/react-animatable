import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{S as n}from"./iframe-BDSeeNGH.js";import{t as r}from"./jsx-runtime-CDqeXLwx.js";import{o as i,r as a,t as o}from"./src-Z0NFvIUt.js";var s,c,l,u,d,f;e((()=>{s=t(n(),1),o(),c=r(),l={component:a},u={render:()=>{let e=2e3,t=i([{transform:`translate(0px, ${e-100}px) rotate(3600deg)`}],{duration:500,easing:`ease-in`,timeline:a()});return(0,s.useEffect)(()=>{t.play()},[]),(0,c.jsxs)(`div`,{style:{position:`relative`,height:e},children:[`Please scroll down!`,(0,c.jsx)(`div`,{ref:t,style:{position:`absolute`,background:`pink`,height:100,width:100,top:0,left:200}})]})}},d={render:()=>{let e=2e3,t=a(),n=i([{transform:`translate(0px, ${e-100}px) rotate(3600deg)`}],{duration:500,easing:`ease-in`,timeline:t});return(0,s.useEffect)(()=>{n.play()},[]),(0,c.jsx)(`div`,{style:{background:`lightgray`,padding:100},children:(0,c.jsx)(`div`,{ref:t,style:{background:`white`,overflow:`scroll`,width:400,height:400},children:(0,c.jsxs)(`div`,{style:{position:`relative`,height:e},children:[`Please scroll down!`,(0,c.jsx)(`div`,{ref:n,style:{position:`absolute`,background:`pink`,height:100,width:100,top:0,left:200}})]})})})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Document`,`Overflow`]}))();export{u as Document,d as Overflow,f as __namedExportsOrder,l as default};