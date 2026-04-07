import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{S as n}from"./iframe-BDSeeNGH.js";import{t as r}from"./jsx-runtime-CDqeXLwx.js";import{a as i,t as a}from"./src-Z0NFvIUt.js";var o,s,c,l,u,d,f;e((()=>{o=t(n(),1),a(),s=r(),c={component:i},l={render:()=>{let[e,t]=(0,o.useState)(!0),[n,r]=(0,o.useState)(0),a=i(({progress:e})=>{r(e)},{duration:1e3,easing:`ease-in-out`,iterations:1/0,direction:`alternate`});return(0,o.useEffect)(()=>{a.play()},[a]),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`button`,{onClick:(0,o.useCallback)(()=>{t(e=>!e),e?a.pause():a.play()},[a,e]),children:e?`stop`:`start`}),(0,s.jsx)(`div`,{children:n.toFixed(6)})]})}},u={render:()=>{let[e,t]=(0,o.useState)(0),n=i(({progress:e},n)=>{t(n.start*(1-e)+e*n.end)},{duration:600,easing:`ease-in-out`});return(0,o.useEffect)(()=>{n.play({args:{start:e,end:Math.random()*100}})},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`div`,{children:(0,s.jsx)(`progress`,{value:e,max:100,style:{width:600}})}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`button`,{onClick:()=>n.play({args:{start:e,end:0}}),children:`0%`}),(0,s.jsx)(`button`,{onClick:()=>n.play({args:{start:e,end:50}}),children:`50%`}),(0,s.jsx)(`button`,{onClick:()=>n.play({args:{start:e,end:100}}),children:`100%`})]})]})}},d={render:()=>{let e=(0,o.useRef)(null),t=(0,o.useRef)(null),n=i(n=>{if(!e.current)return;let r=t.current||=e.current.getContext(`2d`);r.clearRect(0,0,400,400);let i=[`red`,`blue`,`green`][n.currentIteration%3];r.fillStyle=i,r.font=r.font.replace(/\d+px/,`${Math.floor(n.progress*50)}px`),r.fillText(i,40,80),r.beginPath(),r.arc(400/2,400/2,50*n.progress,0,Math.PI*2),r.fill()},{easing:`ease-in-out`,duration:1e3,iterations:1/0});return(0,o.useEffect)(()=>{n.play()},[n]),(0,s.jsx)(`canvas`,{ref:e,width:400,height:400})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [enable, setEnable] = useState(true);
    const [time, setTime] = useState(0);
    const animate = useAnimationFunction(({
      progress
    }) => {
      setTime(progress);
    }, {
      duration: 1000,
      easing: "ease-in-out",
      iterations: Infinity,
      direction: "alternate"
    });
    useEffect(() => {
      animate.play();
    }, [animate]);
    const onClick = useCallback(() => {
      setEnable(p => !p);
      if (enable) {
        animate.pause();
      } else {
        animate.play();
      }
    }, [animate, enable]);
    return <div>
        <button onClick={onClick}>{enable ? "stop" : "start"}</button>
        <div>{time.toFixed(6)}</div>
      </div>;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    const animate = useAnimationFunction<{
      start: number;
      end: number;
    }>(({
      progress
    }, arg) => {
      setValue(arg.start * (1 - progress) + progress * arg.end);
    }, {
      duration: 600,
      easing: "ease-in-out"
    });
    useEffect(() => {
      animate.play({
        args: {
          start: value,
          end: Math.random() * 100
        }
      });
    }, []);
    return <>
        <div>
          <progress value={value} max={100} style={{
          width: 600
        }} />
        </div>
        <div>
          <button onClick={() => animate.play({
          args: {
            start: value,
            end: 0
          }
        })}>
            0%
          </button>
          <button onClick={() => animate.play({
          args: {
            start: value,
            end: 50
          }
        })}>
            50%
          </button>
          <button onClick={() => animate.play({
          args: {
            start: value,
            end: 100
          }
        })}>
            100%
          </button>
        </div>
      </>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const width = 400;
    const height = 400;
    const animate = useAnimationFunction(timing => {
      if (!ref.current) return;
      const ctx = ctxRef.current || (ctxRef.current = ref.current.getContext("2d")!);
      ctx.clearRect(0, 0, width, height);
      const fillStyle = ["red", "blue", "green"][timing.currentIteration % 3];
      ctx.fillStyle = fillStyle;
      ctx.font = ctx.font.replace(/\\d+px/, \`\${Math.floor(timing.progress * 50)}px\`);
      ctx.fillText(fillStyle, 40, 80);
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 50 * timing.progress, 0, Math.PI * 2);
      ctx.fill();
    }, {
      easing: "ease-in-out",
      duration: 1000,
      iterations: Infinity
    });
    useEffect(() => {
      animate.play();
    }, [animate]);
    return <canvas ref={ref} width={width} height={height} />;
  }
}`,...d.parameters?.docs?.source}}},f=[`Text`,`Progress`,`Canvas`]}))();export{d as Canvas,u as Progress,l as Text,f as __namedExportsOrder,c as default};