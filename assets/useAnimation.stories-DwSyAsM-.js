import{j as e}from"./jsx-runtime-CuWC-ldB.js";import{r as s}from"./iframe-C1D3SbRn.js";import{u}from"./useAnimation-D2Z2b5b5.js";import"./preload-helper-D9Z9MdNV.js";import"./useLatestRef-BOEH2WHL.js";function P(n){return r=>{n.forEach(t=>{typeof t=="function"?t(r):t!=null&&(t.current=r)})}}const R=(n,r)=>{let t=null;return(...i)=>{t!=null&&clearTimeout(t),t=setTimeout(()=>{t=null,n(...i)},r)}},F={component:u},f={render:()=>{const[n,r]=s.useState(1e3),[t,i]=s.useState(2),[o,m]=s.useState("alternate"),[l,d]=s.useState("cubic-bezier"),[h,v]=s.useState([.65,0,.35,1]),[g,b]=s.useState([20,"end"]),[z,V]=s.useState(0),[N,B]=s.useState(0),p=u([{transform:"translateX(0px)"},{transform:"translateX(100px) scale(2.0)",fill:"red"}],{duration:n,easing:l==="cubic-bezier"?`cubic-bezier(${h.join(",")})`:l==="steps"?`steps(${g.join(",")})`:l,direction:o,iterations:t,delay:z,endDelay:N});return s.useEffect(()=>{p.play()},[n,l,h,g,t,o,z]),e.jsxs("div",{children:[e.jsx("svg",{width:600,height:300,viewBox:"0 0 600 300",children:e.jsx("g",{transform:"translate(100, 100)",children:e.jsx("g",{ref:p,fontSize:"24px",fill:"dimgray",children:e.jsx("text",{children:"Hello world"})})})}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>p.play(),children:"play"}),e.jsx("button",{onClick:p.pause,children:"pause"}),e.jsx("button",{onClick:p.reverse,children:"reverse"}),e.jsx("button",{onClick:p.finish,children:"finish"}),e.jsx("button",{onClick:p.cancel,children:"cancel"})]}),e.jsx("div",{children:e.jsxs("label",{children:["duration:",e.jsx("input",{type:"number",min:0,value:n,onChange:a=>{r(Number(a.target.value))}}),"ms"]})}),e.jsx("div",{children:e.jsxs("label",{children:["iteration:",e.jsx("input",{type:"number",min:1,value:t,onChange:a=>{i(Number(a.target.value))}})]})}),e.jsxs("div",{children:["easing:",["linear","ease","ease-in","ease-out","ease-in-out"].map(a=>e.jsxs("label",{children:[e.jsx("input",{type:"radio",value:a,checked:l===a,onChange:c=>{d(c.target.value)}}),a]},a)),e.jsxs("label",{children:[e.jsx("input",{type:"radio",value:"cubic-bezier",checked:l.indexOf("cubic-bezier")===0,onChange:a=>{d(a.target.value)}}),"cubic-bezier(",h.map((a,c)=>e.jsx("input",{value:a,type:"number",step:.01,min:0,max:1,onChange:A=>{d("cubic-bezier"),v(M=>{const D=[...M];return D[c]=Number(A.target.value),D})}},c)).reduce((a,c,A)=>(a.push(c),A!==h.length-1&&a.push(","),a),[]),")"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",value:"steps",checked:l.indexOf("steps")===0,onChange:a=>{d(a.target.value)}}),"steps(",e.jsx("input",{type:"number",step:1,min:1,value:g[0],onChange:a=>{d("steps"),b(c=>[Number(a.target.value),c[1]])}}),",",e.jsx("select",{value:g[1],onChange:a=>{d("steps"),b(c=>[c[0],a.target.value])},children:["jump-start","jump-end","jump-none","jump-both","start","end"].map(a=>e.jsx("option",{value:a,children:a},a))}),")"]})]}),e.jsxs("div",{children:["direction:",["normal","reverse","alternate","alternate-reverse"].map(a=>e.jsxs("label",{children:[e.jsx("input",{type:"radio",value:a,checked:o===a,onChange:c=>{m(c.target.value)}}),a]},a))]}),e.jsx("div",{children:e.jsxs("label",{children:["delay:",e.jsx("input",{type:"number",min:0,value:z,onChange:a=>{V(Number(a.target.value))}}),"ms"]})}),e.jsx("div",{children:e.jsxs("label",{children:["endDelay:",e.jsx("input",{type:"number",min:0,value:N,onChange:a=>{B(Number(a.target.value))}}),"ms"]})}),e.jsx("div",{children:e.jsxs("label",{children:["time:",e.jsx("input",{type:"range",defaultValue:"0",min:0,max:100,onChange:a=>{p.setTime(c=>c*(Number(a.target.value)/100))}})]})}),e.jsx("div",{children:e.jsxs("label",{children:["playback rate:",e.jsx("input",{type:"number",min:-100,max:100,defaultValue:1,onChange:a=>{p.setPlaybackRate(Number(a.target.value))}})]})})]})}},$=({value:n,i:r,height:t,keep:i})=>{const o={height:`${n}px`,transform:`translateY(-${n}px)`,opacity:String(1-r*.025)},m=u(i?l=>[{height:l.height,transform:l.transform,opacity:l.opacity},o]:[o],{duration:150,easing:"ease-out",delay:r*100});return s.useEffect(()=>{m.play()},[n,i]),e.jsx("rect",{ref:m,x:r*20,y:t,width:18,height:0,opacity:o.opacity,fill:"steelblue"})},y={render:()=>{const n=()=>Array.from({length:30}).map(()=>300*Math.random()**2),[r,t]=s.useState(n),[i,o]=s.useState(!1),m=800,l=400,d=10,h=l-d*2,v=()=>t(n());return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("button",{onClick:v,children:"refresh"}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:i,onChange:g=>{o(g.target.checked),v()}}),"keep"]})]}),e.jsx("div",{children:e.jsx("svg",{width:m,height:l,children:e.jsx("g",{transform:`translate(${d},${d})`,children:r.map((g,b)=>e.jsx($,{i:b,value:g,height:h,keep:i},b))})})})]})}},x={render:()=>{const n=u([{transform:"rotate(0deg)",borderRadius:"1rem"},{transform:"rotate(360deg)",borderRadius:"50%"},{transform:"rotate(720deg)",borderRadius:"1rem"}],{duration:1e3,iterations:1/0,easing:"ease-in-out"}),r=u((t,i)=>[{transform:t.transform},{transform:`translate(${i.x}px, ${i.y}px)`}],{duration:400,easing:"ease-in-out"});return s.useEffect(()=>{n.play();const t=R(i=>{r.play({args:{x:i.clientX,y:i.clientY}})},100);return window.addEventListener("pointermove",t),()=>{window.removeEventListener("pointermove",t)}},[]),e.jsxs("div",{children:[e.jsx("div",{children:"Move mouse cursor."}),e.jsx("div",{ref:r,children:e.jsx("div",{ref:n,style:{position:"fixed",border:"solid 0.1rem #135569",height:"6rem",width:"6rem",top:"-3rem",left:"-3rem"}})})]})}},j={render:()=>{const n=u({transform:"translate3d(400px, 0, 0)"},{duration:800,easing:"ease-in-out"});return s.useEffect(()=>{n.play()},[n]),e.jsxs("div",{children:[e.jsx("button",{onClick:n.reverse,children:"Toggle"}),e.jsx("div",{className:"rail",children:e.jsx("div",{ref:n,className:"block"})}),e.jsx("style",{children:`
.rail {
  border-radius: 4px;
  background-color: rgb(240, 240, 232);
  position: relative;
  margin: 5px 3px 10px;
  width: 450px;
  height: 50px;
}
.block {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: rgb(130, 181, 198);
}
`})]})}},k={render:()=>{const n=u([{d:"path('M50,50L150,50L150,150L50,150z')"},{d:"path('M100,30L170,170L30,170L30,170z')"}],{duration:1e3,easing:"ease-in-out",iterations:1/0,direction:"alternate"});s.useEffect(()=>{n.play()},[]);const r=400,t=300;return e.jsx("svg",{width:r,height:t,viewBox:`0 0 ${r} ${t}`,children:e.jsx("path",{ref:n,fill:"orange"})})}},w={render:()=>{const[n,r]=s.useState({x:1,y:1}),t=u({transform:`rotate3d(${n.y/100}, ${n.x/100}, 0, 360deg)`},{duration:1e3,iterations:1/0});return s.useEffect(()=>{t.play()},[n]),s.useEffect(()=>{const i=o=>{r({x:o.clientX,y:o.clientY})};return window.addEventListener("pointermove",i),()=>{window.removeEventListener("pointermove",i)}},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:t,style:{width:100,height:100,margin:100,transformStyle:"preserve-3d"},children:[e.jsx("div",{className:"face front"}),e.jsx("div",{className:"face back"}),e.jsx("div",{className:"face right"}),e.jsx("div",{className:"face left"}),e.jsx("div",{className:"face top"}),e.jsx("div",{className:"face bottom"})]}),e.jsx("style",{children:`
            .face {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              position: absolute;
              backface-visibility: inherit;
              font-size: 60px;
              color: #fff;
            }
            .front {
              background: rgba(90,90,90,.7);
              transform: translateZ(50px);
            }
            .back {
              background: rgba(0,210,0,.7);
              transform: rotateY(180deg) translateZ(50px);
            }
            .right {
              background: rgba(210,0,0,.7);
              transform: rotateY(90deg) translateZ(50px);
            }
            .left {
              background: rgba(0,0,210,.7);
              transform: rotateY(-90deg) translateZ(50px);
            }
            .top {
              background: rgba(210,210,0,.7);
              transform: rotateX(90deg) translateZ(50px);
            }
            .bottom {
              background: rgba(210,0,210,.7);
              transform: rotateX(-90deg) translateZ(50px);
            }
            `})]})},name:"3D"},C={render:()=>{const n=u((t,i)=>[{fill:t.fill},{fill:i}],{duration:600,easing:"ease-out"}),r=s.useCallback(async()=>{try{await n.play({args:"red"}).waitFor("finish"),await n.play({args:"blue"}).waitFor("finish"),await n.play({args:"green"}).waitFor("finish")}catch{}},[]);return s.useEffect(()=>{r()},[]),e.jsxs("div",{children:[e.jsx("svg",{width:150,height:150,children:e.jsx("path",{ref:n,d:"M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"})}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>{n.play({args:"red"})},children:"Red"}),e.jsx("button",{onClick:()=>{n.play({args:"blue"})},children:"Blue"}),e.jsx("button",{onClick:()=>{n.play({args:"green"})},children:"Green"}),e.jsx("button",{onClick:r,children:"All"})]})]})}},L=({i:n})=>{const r={easing:"ease-in-out",iterations:1/0,direction:"alternate",delay:n*98},t=u([{transform:"translateY(0) scaleX(.8)"},{transform:"translateY(95vh) scaleX(1)"}],{...r,duration:2500}),i=u([{opacity:1},{opacity:0}],{...r,duration:2e3}),o=u([{backgroundColor:"rgb(239, 239, 255)"},{backgroundColor:"#e4c349"}],{...r,duration:3e3});return s.useEffect(()=>{t.play(),i.play(),o.play()},[]),e.jsx("div",{ref:P([t,i,o]),style:{width:"5vw",height:"2.5vh",background:"#efefff",borderRadius:"1vh"}})},S={render:()=>{const[n]=s.useState(()=>Array.from({length:20}).map((r,t)=>t));return e.jsx("div",{style:{background:"#e45349",width:"100vw",height:"100vh",display:"flex",justifyContent:"center"},children:n.map(r=>e.jsx(L,{i:r},r))})}},E={render:()=>{const[n,r]=s.useState(10),t=u([{opacity:1,transform:"scale(.6)"},{opacity:.5,transform:"scale(1)"}],{duration:500,easing:"linear",delay:0,iterations:1e3,direction:"alternate"}),i=u([{opacity:0,transform:"scale(.01) rotate(0deg)",color:"white",offset:0},{opacity:1,transform:"scale(6) rotate(360deg)",color:"orange",offset:.8},{opacity:1,transform:"scale(1) rotate(720deg)",color:"white",offset:1}],{duration:2e3,easing:"ease-out",delay:0,iterations:1});return s.useEffect(()=>{t.play();let o=n;const m=setInterval(()=>{o-=1,r(l=>l-1),o>0?t.setPlaybackRate(l=>Math.min(l*1.15,6)):(clearInterval(m),i.play())},1e3);return()=>{clearInterval(m)}},[]),e.jsx("div",{style:{background:"gray",width:400,height:400,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{ref:P([t,i]),style:{color:"white",fontSize:64,fontWeight:"bold"},children:n})})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [duration, setDuration] = useState(1000);
    const [iteration, setIteration] = useState(2);
    const [direction, setDirection] = useState<PlaybackDirection>("alternate");
    const [easing, setEasing] = useState<TypedEasing>("cubic-bezier");
    const [cubicBezierValues, setCubicBezierValues] = useState<[number, number, number, number]>([0.65, 0, 0.35, 1]);
    const [stepsValues, setStepsValues] = useState<[number, string]>([20, "end"]);
    const [delay, setDelay] = useState(0);
    const [endDelay, setEndDelay] = useState(0);
    const animate = useAnimation([{
      transform: "translateX(0px)"
    }, {
      transform: "translateX(100px) scale(2.0)",
      fill: "red"
    }], {
      duration: duration,
      easing: easing === "cubic-bezier" ? \`cubic-bezier(\${cubicBezierValues.join(",")})\` : easing === "steps" ? \`steps(\${stepsValues.join(",")})\` : easing,
      direction: direction,
      iterations: iteration,
      delay,
      endDelay
    });
    useEffect(() => {
      animate.play();
    }, [duration, easing, cubicBezierValues, stepsValues, iteration, direction, delay]);
    return <div>
        <svg width={600} height={300} viewBox="0 0 600 300">
          <g transform="translate(100, 100)">
            <g ref={animate} fontSize="24px" fill="dimgray">
              <text>Hello world</text>
            </g>
          </g>
        </svg>
        <div>
          <button onClick={() => animate.play()}>play</button>
          <button onClick={animate.pause}>pause</button>
          <button onClick={animate.reverse}>reverse</button>
          <button onClick={animate.finish}>finish</button>
          <button onClick={animate.cancel}>cancel</button>
        </div>
        <div>
          <label>
            duration:
            <input type="number" min={0} value={duration} onChange={e => {
            setDuration(Number(e.target.value));
          }} />
            ms
          </label>
        </div>
        <div>
          <label>
            iteration:
            <input type="number" min={1} value={iteration} onChange={e => {
            setIteration(Number(e.target.value));
          }} />
          </label>
        </div>
        <div>
          easing:
          {["linear", "ease", "ease-in", "ease-out", "ease-in-out"].map(v => <label key={v}>
              <input type="radio" value={v} checked={easing === v} onChange={e => {
            setEasing(e.target.value as TypedEasing);
          }} />
              {v}
            </label>)}
          <label>
            <input type="radio" value="cubic-bezier" checked={easing.indexOf("cubic-bezier") === 0} onChange={e => {
            setEasing(e.target.value as TypedEasing);
          }} />
            cubic-bezier(
            {cubicBezierValues.map((v, i) => <input key={i} value={v} type="number" step={0.01} min={0} max={1} onChange={e => {
            setEasing("cubic-bezier");
            setCubicBezierValues(prev => {
              const next: [number, number, number, number] = [...prev];
              next[i] = Number(e.target.value);
              return next;
            });
          }} />).reduce((acc, v, i) => {
            acc.push(v);
            if (i !== cubicBezierValues.length - 1) {
              acc.push(",");
            }
            return acc;
          }, [] as React.ReactNode[])}
            )
          </label>
          <label>
            <input type="radio" value="steps" checked={easing.indexOf("steps") === 0} onChange={e => {
            setEasing(e.target.value as TypedEasing);
          }} />
            steps(
            {<input type="number" step={1} min={1} value={stepsValues[0]} onChange={e => {
            setEasing("steps");
            setStepsValues(prev => [Number(e.target.value), prev[1]]);
          }} />}
            ,
            <select value={stepsValues[1]} onChange={e => {
            setEasing("steps");
            setStepsValues(prev => [prev[0], e.target.value]);
          }}>
              {["jump-start", "jump-end", "jump-none", "jump-both", "start", "end"].map(v => <option key={v} value={v}>
                  {v}
                </option>)}
            </select>
            )
          </label>
        </div>
        <div>
          direction:
          {["normal", "reverse", "alternate", "alternate-reverse"].map(v => <label key={v}>
              <input type="radio" value={v} checked={direction === v} onChange={e => {
            setDirection(e.target.value as PlaybackDirection);
          }} />
              {v}
            </label>)}
        </div>
        <div>
          <label>
            delay:
            <input type="number" min={0} value={delay} onChange={e => {
            setDelay(Number(e.target.value));
          }} />
            ms
          </label>
        </div>
        <div>
          <label>
            endDelay:
            <input type="number" min={0} value={endDelay} onChange={e => {
            setEndDelay(Number(e.target.value));
          }} />
            ms
          </label>
        </div>
        <div>
          <label>
            time:
            <input type="range" defaultValue="0" min={0} max={100} onChange={e => {
            animate.setTime(end => end * (Number(e.target.value) / 100));
          }} />
          </label>
        </div>
        <div>
          <label>
            playback rate:
            <input type="number" min={-100} max={100} defaultValue={1} onChange={e => {
            animate.setPlaybackRate(Number(e.target.value));
          }} />
          </label>
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const init = () => Array.from({
      length: 30
    }).map(() => 300 * Math.random() ** 2);
    const [rects, setRects] = useState(init);
    const [keep, setKeep] = useState(false);
    const width = 800;
    const height = 400;
    const margin = 10;
    const maxBarHeight = height - margin * 2;
    const refresh = () => setRects(init());
    return <>
        <div>
          <button onClick={refresh}>refresh</button>
          <label>
            <input type="checkbox" checked={keep} onChange={e => {
            setKeep(e.target.checked);
            refresh();
          }} />
            keep
          </label>
        </div>
        <div>
          <svg width={width} height={height}>
            <g transform={\`translate(\${margin},\${margin})\`}>
              {rects.map((v, i) => <Bar key={i} i={i} value={v} height={maxBarHeight} keep={keep} />)}
            </g>
          </svg>
        </div>
      </>;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rotate = useAnimation([{
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
    const move = useAnimation<{
      x: number;
      y: number;
    }>((prev, pos) => [{
      transform: prev.transform
    }, {
      transform: \`translate(\${pos.x}px, \${pos.y}px)\`
    }], {
      duration: 400,
      easing: "ease-in-out"
    });
    useEffect(() => {
      rotate.play();
      const onPointerMove = debounce((e: PointerEvent) => {
        move.play({
          args: {
            x: e.clientX,
            y: e.clientY
          }
        });
      }, 100);
      window.addEventListener("pointermove", onPointerMove);
      return () => {
        window.removeEventListener("pointermove", onPointerMove);
      };
    }, []);
    return <div>
        <div>Move mouse cursor.</div>
        <div ref={move}>
          <div ref={rotate} style={{
          position: "fixed",
          border: "solid 0.1rem #135569",
          height: "6rem",
          width: "6rem",
          top: "-3rem",
          left: "-3rem"
        }} />
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const animate = useAnimation({
      transform: "translate3d(400px, 0, 0)"
    }, {
      duration: 800,
      easing: "ease-in-out"
    });
    useEffect(() => {
      animate.play();
    }, [animate]);
    return <div>
        <button onClick={animate.reverse}>Toggle</button>
        <div className="rail">
          <div ref={animate} className="block" />
        </div>
        <style>
          {\`
.rail {
  border-radius: 4px;
  background-color: rgb(240, 240, 232);
  position: relative;
  margin: 5px 3px 10px;
  width: 450px;
  height: 50px;
}
.block {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: rgb(130, 181, 198);
}
\`}
        </style>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const animate = useAnimation([{
      d: "path('M50,50L150,50L150,150L50,150z')"
    }, {
      d: "path('M100,30L170,170L30,170L30,170z')"
    }], {
      duration: 1000,
      easing: "ease-in-out",
      iterations: Infinity,
      direction: "alternate"
    });
    useEffect(() => {
      animate.play();
    }, []);
    const width = 400;
    const height = 300;
    return <svg width={width} height={height} viewBox={\`0 0 \${width} \${height}\`}>
        <path ref={animate} fill="orange" />
      </svg>;
  }
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pos, setPos] = useState({
      x: 1,
      y: 1
    });
    const animate = useAnimation({
      transform: \`rotate3d(\${pos.y / 100}, \${pos.x / 100}, 0, 360deg)\`
    }, {
      duration: 1000,
      iterations: Infinity
    });
    useEffect(() => {
      animate.play();
    }, [pos]);
    useEffect(() => {
      const onPointerMove = (e: PointerEvent) => {
        setPos({
          x: e.clientX,
          y: e.clientY
        });
      };
      window.addEventListener("pointermove", onPointerMove);
      return () => {
        window.removeEventListener("pointermove", onPointerMove);
      };
    }, []);
    return <>
        <div ref={animate} style={{
        width: 100,
        height: 100,
        margin: 100,
        transformStyle: "preserve-3d"
      }}>
          <div className="face front" />
          <div className="face back" />
          <div className="face right" />
          <div className="face left" />
          <div className="face top" />
          <div className="face bottom" />
        </div>
        <style>
          {\`
            .face {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              position: absolute;
              backface-visibility: inherit;
              font-size: 60px;
              color: #fff;
            }
            .front {
              background: rgba(90,90,90,.7);
              transform: translateZ(50px);
            }
            .back {
              background: rgba(0,210,0,.7);
              transform: rotateY(180deg) translateZ(50px);
            }
            .right {
              background: rgba(210,0,0,.7);
              transform: rotateY(90deg) translateZ(50px);
            }
            .left {
              background: rgba(0,0,210,.7);
              transform: rotateY(-90deg) translateZ(50px);
            }
            .top {
              background: rgba(210,210,0,.7);
              transform: rotateX(90deg) translateZ(50px);
            }
            .bottom {
              background: rgba(210,0,210,.7);
              transform: rotateX(-90deg) translateZ(50px);
            }
            \`}
        </style>
      </>;
  },
  name: "3D"
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const animate = useAnimation<string>((prev, color) => [{
      fill: prev.fill
    }, {
      fill: color
    }], {
      duration: 600,
      easing: "ease-out"
    });
    const onClickAll = useCallback(async () => {
      try {
        await animate.play({
          args: "red"
        }).waitFor("finish");
        await animate.play({
          args: "blue"
        }).waitFor("finish");
        await animate.play({
          args: "green"
        }).waitFor("finish");
      } catch (e) {
        // ignore uncaught promise error
      }
    }, []);
    useEffect(() => {
      onClickAll();
    }, []);
    return <div>
        <svg width={150} height={150}>
          <path ref={animate} d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />
        </svg>
        <div>
          <button onClick={() => {
          animate.play({
            args: "red"
          });
        }}>
            Red
          </button>
          <button onClick={() => {
          animate.play({
            args: "blue"
          });
        }}>
            Blue
          </button>
          <button onClick={() => {
          animate.play({
            args: "green"
          });
        }}>
            Green
          </button>
          <button onClick={onClickAll}>All</button>
        </div>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [rects] = useState(() => Array.from({
      length: 20
    }).map((_, i) => i));
    return <div style={{
      background: "#e45349",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center"
    }}>
        {rects.map(i => <WavedRect key={i} i={i} />)}
      </div>;
  }
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(10);
    const countAnimation = useAnimation([{
      opacity: 1,
      transform: "scale(.6)"
    }, {
      opacity: 0.5,
      transform: "scale(1)"
    }], {
      duration: 500,
      easing: "linear",
      delay: 0,
      iterations: 1000,
      direction: "alternate"
    });
    const boomAnimation = useAnimation([{
      opacity: 0,
      transform: "scale(.01) rotate(0deg)",
      color: "white",
      offset: 0
    }, {
      opacity: 1,
      transform: "scale(6) rotate(360deg)",
      color: "orange",
      offset: 0.8
    }, {
      opacity: 1,
      transform: "scale(1) rotate(720deg)",
      color: "white",
      offset: 1
    }], {
      duration: 2000,
      easing: "ease-out",
      delay: 0,
      iterations: 1
    });
    useEffect(() => {
      countAnimation.play();
      let startCount = count;
      const id = setInterval(() => {
        startCount -= 1;
        setCount(p => p - 1);
        if (startCount > 0) {
          countAnimation.setPlaybackRate(prev => Math.min(prev * 1.15, 6));
        } else {
          clearInterval(id);
          boomAnimation.play();
        }
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }, []);
    return <div style={{
      background: "gray",
      width: 400,
      height: 400,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
        <span ref={mergeRefs([countAnimation, boomAnimation])} style={{
        color: "white",
        fontSize: 64,
        fontWeight: "bold"
      }}>
          {count}
        </span>
      </div>;
  }
}`,...E.parameters?.docs?.source}}};const W=["Playground","Bars","Mouse","Toggle","Path","ThreeDimentional","Sequence","Wave","Countdown"];export{y as Bars,E as Countdown,x as Mouse,k as Path,f as Playground,C as Sequence,w as ThreeDimentional,j as Toggle,S as Wave,W as __namedExportsOrder,F as default};
