import{j as i}from"./jsx-runtime-DlcTwMfw.js";import{r as u}from"./iframe-CLym-1vj.js";import{u as C,a as j,_ as E,b as k,c as F,d as _,i as T,e as w,f as A,g as I,h as M,j as P}from"./useLatestRef-CA1t_R2X.js";import"./preload-helper-D9Z9MdNV.js";const S=(e,o,r)=>{const s=()=>{const t=e.effect?.getComputedTiming();if(!t)return;t.progress!=null&&o()(t,r),e.playState==="running"&&requestAnimationFrame(s)};e.ready.then(s)},b=(e,o)=>{const r=C(e),s=C(o),[t,d]=j(()=>{const a=()=>r.current;let m;const v=(n={})=>{const l=s.current;if(m){const[p,R]=m;if(T(l,R))return p.playState!=="running"&&S(p,a,n.args),p;p.cancel()}const y=_(null,null,l);return S(y,a,n.args),m=[y,l],y},f=()=>m?.[0],c={play:(...n)=>(F(v(n[0]),n[0]),c),reverse:()=>(k(v()),c),cancel:()=>{const n=f();return n&&P(n),c},finish:()=>{const n=f();return n&&M(n),c},pause:()=>{const n=f();return n&&I(n),c},setTime:n=>{const l=f();return l&&A(l,n),c},setPlaybackRate:n=>{const l=f();return l&&w(l,n),c},waitFor:n=>E(f(),n).then(()=>c)};return[c,c.cancel]});return u.useEffect(()=>d,[]),t},L={component:b},g={render:()=>{const[e,o]=u.useState(!0),[r,s]=u.useState(0),t=b(({progress:a})=>{s(a)},{duration:1e3,easing:"ease-in-out",iterations:1/0,direction:"alternate"});u.useEffect(()=>{t.play()},[t]);const d=u.useCallback(()=>{o(a=>!a),e?t.pause():t.play()},[t,e]);return i.jsxs("div",{children:[i.jsx("button",{onClick:d,children:e?"stop":"start"}),i.jsx("div",{children:r.toFixed(6)})]})}},x={render:()=>{const[e,o]=u.useState(0),r=b(({progress:s},t)=>{o(t.start*(1-s)+s*t.end)},{duration:600,easing:"ease-in-out"});return u.useEffect(()=>{r.play({args:{start:e,end:Math.random()*100}})},[]),i.jsxs(i.Fragment,{children:[i.jsx("div",{children:i.jsx("progress",{value:e,max:100,style:{width:600}})}),i.jsxs("div",{children:[i.jsx("button",{onClick:()=>r.play({args:{start:e,end:0}}),children:"0%"}),i.jsx("button",{onClick:()=>r.play({args:{start:e,end:50}}),children:"50%"}),i.jsx("button",{onClick:()=>r.play({args:{start:e,end:100}}),children:"100%"})]})]})}},h={render:()=>{const e=u.useRef(null),o=u.useRef(null),r=400,s=400,t=b(d=>{if(!e.current)return;const a=o.current||(o.current=e.current.getContext("2d"));a.clearRect(0,0,r,s);const m=["red","blue","green"][d.currentIteration%3];a.fillStyle=m,a.font=a.font.replace(/\d+px/,`${Math.floor(d.progress*50)}px`),a.fillText(m,40,80),a.beginPath(),a.arc(r/2,s/2,50*d.progress,0,Math.PI*2),a.fill()},{easing:"ease-in-out",duration:1e3,iterations:1/0});return u.useEffect(()=>{t.play()},[t]),i.jsx("canvas",{ref:e,width:r,height:s})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const $=["Text","Progress","Canvas"];export{h as Canvas,x as Progress,g as Text,$ as __namedExportsOrder,L as default};
