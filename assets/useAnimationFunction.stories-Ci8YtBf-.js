import{j as s}from"./jsx-runtime-CEUyKYtZ.js";import{r as u}from"./iframe-TjBDW_oQ.js";import{u as C,a as j,_ as E,b as k,c as F,d as _,e as T,f as w,g as A,h as I,i as M,j as P}from"./useLatestRef-owQNpOig.js";import"./preload-helper-D9Z9MdNV.js";const S=(n,o,a)=>{const r=()=>{const e=n.effect?.getComputedTiming();if(!e)return;e.progress!=null&&o()(e,a),n.playState==="running"&&requestAnimationFrame(r)};n.ready.then(r)},h=(n,o)=>{const a=C(n),r=C(o),[e,l]=j(()=>{const t=()=>a.current;let d;const v=(i={})=>{const b=r.current;if(d){const[m,R]=d;if(P(b,R))return m.playState!=="running"&&S(m,t,i.args),m;m.cancel()}const y=M(null,null,b);return S(y,t,i.args),d=[y,b],y},p=()=>d?.[0],c={play:(...i)=>(I(v(i[0]),i[0]),c),reverse:()=>(A(v()),c),cancel:()=>(w(p()),c),finish:()=>(T(p()),c),pause:()=>(_(p()),c),setTime:i=>(F(p(),i),c),setPlaybackRate:i=>(k(p(),i),c),waitFor:i=>E(p(),i).then(()=>c)};return[c,c.cancel]});return u.useEffect(()=>l,[]),e},L={component:h},f={render:()=>{const[n,o]=u.useState(!0),[a,r]=u.useState(0),e=h(({progress:t})=>{r(t)},{duration:1e3,easing:"ease-in-out",iterations:1/0,direction:"alternate"});u.useEffect(()=>{e.play()},[e]);const l=u.useCallback(()=>{o(t=>!t),n?e.pause():e.play()},[e,n]);return s.jsxs("div",{children:[s.jsx("button",{onClick:l,children:n?"stop":"start"}),s.jsx("div",{children:a.toFixed(6)})]})}},g={render:()=>{const[n,o]=u.useState(0),a=h(({progress:r},e)=>{o(e.start*(1-r)+r*e.end)},{duration:600,easing:"ease-in-out"});return u.useEffect(()=>{a.play({args:{start:n,end:Math.random()*100}})},[]),s.jsxs(s.Fragment,{children:[s.jsx("div",{children:s.jsx("progress",{value:n,max:100,style:{width:600}})}),s.jsxs("div",{children:[s.jsx("button",{onClick:()=>a.play({args:{start:n,end:0}}),children:"0%"}),s.jsx("button",{onClick:()=>a.play({args:{start:n,end:50}}),children:"50%"}),s.jsx("button",{onClick:()=>a.play({args:{start:n,end:100}}),children:"100%"})]})]})}},x={render:()=>{const n=u.useRef(null),o=u.useRef(null),a=400,r=400,e=h(l=>{if(!n.current)return;const t=o.current||(o.current=n.current.getContext("2d"));t.clearRect(0,0,a,r);const d=["red","blue","green"][l.currentIteration%3];t.fillStyle=d,t.font=t.font.replace(/\d+px/,`${Math.floor(l.progress*50)}px`),t.fillText(d,40,80),t.beginPath(),t.arc(a/2,r/2,50*l.progress,0,Math.PI*2),t.fill()},{easing:"ease-in-out",duration:1e3,iterations:1/0});return u.useEffect(()=>{e.play()},[e]),s.jsx("canvas",{ref:n,width:a,height:r})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const $=["Text","Progress","Canvas"];export{x as Canvas,g as Progress,f as Text,$ as __namedExportsOrder,L as default};
