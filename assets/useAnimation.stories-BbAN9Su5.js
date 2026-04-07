import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{S as n}from"./iframe-BDSeeNGH.js";import{t as r}from"./jsx-runtime-CDqeXLwx.js";import{o as i,t as a}from"./src-Z0NFvIUt.js";function o(e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var s=e((()=>{})),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{c=t(n(),1),a(),s(),l=r(),u=(e,t)=>{let n=null;return(...r)=>{n!=null&&clearTimeout(n),n=setTimeout(()=>{n=null,e(...r)},t)}},d={component:i},f={render:()=>{let[e,t]=(0,c.useState)(1e3),[n,r]=(0,c.useState)(2),[a,o]=(0,c.useState)(`normal`),[s,u]=(0,c.useState)(`cubic-bezier`),[d,f]=(0,c.useState)([.65,0,.35,1]),[p,m]=(0,c.useState)([20,`end`]),[h,g]=(0,c.useState)(0),[_,v]=(0,c.useState)(0),y=i([{transform:`translateX(0px)`},{transform:`translateX(100px) scale(2.0)`,fill:`red`}],{duration:e,easing:s===`cubic-bezier`?`cubic-bezier(${d.join(`,`)})`:s===`steps`?`steps(${p.join(`,`)})`:s,direction:a,iterations:n,delay:h,endDelay:_});return(0,c.useEffect)(()=>{y.play()},[e,s,d,p,n,a,h]),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`svg`,{width:600,height:300,viewBox:`0 0 600 300`,children:(0,l.jsx)(`g`,{transform:`translate(100, 100)`,children:(0,l.jsx)(`g`,{ref:y,fontSize:`24px`,fill:`dimgray`,children:(0,l.jsx)(`text`,{children:`Hello world`})})})}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`button`,{onClick:()=>y.play(),children:`play`}),(0,l.jsx)(`button`,{onClick:y.pause,children:`pause`}),(0,l.jsx)(`button`,{onClick:y.reverse,children:`reverse`}),(0,l.jsx)(`button`,{onClick:y.finish,children:`finish`}),(0,l.jsx)(`button`,{onClick:y.cancel,children:`cancel`})]}),(0,l.jsx)(`div`,{children:(0,l.jsxs)(`label`,{children:[`duration:`,(0,l.jsx)(`input`,{type:`number`,min:0,value:e,onChange:e=>{t(Number(e.target.value))}}),`ms`]})}),(0,l.jsx)(`div`,{children:(0,l.jsxs)(`label`,{children:[`iteration:`,(0,l.jsx)(`input`,{type:`number`,min:1,value:n,onChange:e=>{r(Number(e.target.value))}})]})}),(0,l.jsxs)(`div`,{children:[`easing:`,[`linear`,`ease`,`ease-in`,`ease-out`,`ease-in-out`].map(e=>(0,l.jsxs)(`label`,{children:[(0,l.jsx)(`input`,{type:`radio`,value:e,checked:s===e,onChange:e=>{u(e.target.value)}}),e]},e)),(0,l.jsxs)(`label`,{children:[(0,l.jsx)(`input`,{type:`radio`,value:`cubic-bezier`,checked:s.indexOf(`cubic-bezier`)===0,onChange:e=>{u(e.target.value)}}),`cubic-bezier(`,d.map((e,t)=>(0,l.jsx)(`input`,{value:e,type:`number`,step:.01,min:0,max:1,onChange:e=>{u(`cubic-bezier`),f(n=>{let r=[...n];return r[t]=Number(e.target.value),r})}},t)).reduce((e,t,n)=>(e.push(t),n!==d.length-1&&e.push(`,`),e),[]),`)`]}),(0,l.jsxs)(`label`,{children:[(0,l.jsx)(`input`,{type:`radio`,value:`steps`,checked:s.indexOf(`steps`)===0,onChange:e=>{u(e.target.value)}}),`steps(`,(0,l.jsx)(`input`,{type:`number`,step:1,min:1,value:p[0],onChange:e=>{u(`steps`),m(t=>[Number(e.target.value),t[1]])}}),`,`,(0,l.jsx)(`select`,{value:p[1],onChange:e=>{u(`steps`),m(t=>[t[0],e.target.value])},children:[`jump-start`,`jump-end`,`jump-none`,`jump-both`,`start`,`end`].map(e=>(0,l.jsx)(`option`,{value:e,children:e},e))}),`)`]})]}),(0,l.jsxs)(`div`,{children:[`direction:`,[`normal`,`reverse`,`alternate`,`alternate-reverse`].map(e=>(0,l.jsxs)(`label`,{children:[(0,l.jsx)(`input`,{type:`radio`,value:e,checked:a===e,onChange:e=>{o(e.target.value)}}),e]},e))]}),(0,l.jsx)(`div`,{children:(0,l.jsxs)(`label`,{children:[`delay:`,(0,l.jsx)(`input`,{type:`number`,min:0,value:h,onChange:e=>{g(Number(e.target.value))}}),`ms`]})}),(0,l.jsx)(`div`,{children:(0,l.jsxs)(`label`,{children:[`endDelay:`,(0,l.jsx)(`input`,{type:`number`,min:0,value:_,onChange:e=>{v(Number(e.target.value))}}),`ms`]})}),(0,l.jsx)(`div`,{children:(0,l.jsxs)(`label`,{children:[`time:`,(0,l.jsx)(`input`,{type:`range`,defaultValue:`0`,min:0,max:100,onChange:e=>{y.setTime(t=>t*(Number(e.target.value)/100))}})]})}),(0,l.jsx)(`div`,{children:(0,l.jsxs)(`label`,{children:[`playback rate:`,(0,l.jsx)(`input`,{type:`number`,min:-100,max:100,defaultValue:1,onChange:e=>{y.setPlaybackRate(Number(e.target.value))}})]})})]})}},p=({value:e,i:t,height:n,keep:r})=>{let a={height:`${e}px`,transform:`translateY(-${e}px)`,opacity:String(1-t*.025)},o=i(r?e=>[{height:e.height,transform:e.transform,opacity:e.opacity},a]:[a],{duration:150,easing:`ease-out`,delay:t*100});return(0,c.useEffect)(()=>{o.play()},[e,r]),(0,l.jsx)(`rect`,{ref:o,x:t*20,y:n,width:18,height:0,opacity:a.opacity,fill:`steelblue`})},m={render:()=>{let e=()=>Array.from({length:30}).map(()=>300*Math.random()**2),[t,n]=(0,c.useState)(e),[r,i]=(0,c.useState)(!1),a=()=>n(e());return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`button`,{onClick:a,children:`refresh`}),(0,l.jsxs)(`label`,{children:[(0,l.jsx)(`input`,{type:`checkbox`,checked:r,onChange:e=>{i(e.target.checked),a()}}),`keep`]})]}),(0,l.jsx)(`div`,{children:(0,l.jsx)(`svg`,{width:800,height:400,children:(0,l.jsx)(`g`,{transform:`translate(10,10)`,children:t.map((e,t)=>(0,l.jsx)(p,{i:t,value:e,height:380,keep:r},t))})})})]})}},h={render:()=>{let e=i([{transform:`rotate(0deg)`,borderRadius:`1rem`},{transform:`rotate(360deg)`,borderRadius:`50%`},{transform:`rotate(720deg)`,borderRadius:`1rem`}],{duration:1e3,iterations:1/0,easing:`ease-in-out`}),t=i((e,t)=>[{transform:e.transform},{transform:`translate(${t.x}px, ${t.y}px)`}],{duration:400,easing:`ease-in-out`});return(0,c.useEffect)(()=>{e.play();let n=u(e=>{t.play({args:{x:e.clientX,y:e.clientY}})},100);return window.addEventListener(`pointermove`,n),()=>{window.removeEventListener(`pointermove`,n)}},[]),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{children:`Move mouse cursor.`}),(0,l.jsx)(`div`,{ref:t,children:(0,l.jsx)(`div`,{ref:e,style:{position:`fixed`,border:`solid 0.1rem #135569`,height:`6rem`,width:`6rem`,top:`-3rem`,left:`-3rem`}})})]})}},g={render:()=>{let e=i({transform:`translate3d(400px, 0, 0)`},{duration:800,easing:`ease-in-out`});return(0,c.useEffect)(()=>{e.play()},[e]),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`button`,{onClick:e.reverse,children:`Toggle`}),(0,l.jsx)(`div`,{className:`rail`,children:(0,l.jsx)(`div`,{ref:e,className:`block`})}),(0,l.jsx)(`style`,{children:`
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
`})]})}},_={render:()=>{let e=i([{d:`path('M50,50L150,50L150,150L50,150z')`},{d:`path('M100,30L170,170L30,170L30,170z')`}],{duration:1e3,easing:`ease-in-out`,iterations:1/0,direction:`alternate`});return(0,c.useEffect)(()=>{e.play()},[]),(0,l.jsx)(`svg`,{width:400,height:300,viewBox:`0 0 400 300`,children:(0,l.jsx)(`path`,{ref:e,fill:`orange`})})}},v={render:()=>{let[e,t]=(0,c.useState)({x:1,y:1}),n=i({transform:`rotate3d(${e.y/100}, ${e.x/100}, 0, 360deg)`},{duration:1e3,iterations:1/0});return(0,c.useEffect)(()=>{n.play()},[e]),(0,c.useEffect)(()=>{let e=e=>{t({x:e.clientX,y:e.clientY})};return window.addEventListener(`pointermove`,e),()=>{window.removeEventListener(`pointermove`,e)}},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(`div`,{ref:n,style:{width:100,height:100,margin:100,transformStyle:`preserve-3d`},children:[(0,l.jsx)(`div`,{className:`face front`}),(0,l.jsx)(`div`,{className:`face back`}),(0,l.jsx)(`div`,{className:`face right`}),(0,l.jsx)(`div`,{className:`face left`}),(0,l.jsx)(`div`,{className:`face top`}),(0,l.jsx)(`div`,{className:`face bottom`})]}),(0,l.jsx)(`style`,{children:`
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
            `})]})},name:`3D`},y={render:()=>{let e=i((e,t)=>[{fill:e.fill},{fill:t}],{duration:600,easing:`ease-out`}),t=(0,c.useCallback)(async()=>{try{await e.play({args:`red`}).waitFor(`finish`),await e.play({args:`blue`}).waitFor(`finish`),await e.play({args:`green`}).waitFor(`finish`)}catch{}},[]);return(0,c.useEffect)(()=>{t()},[]),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`svg`,{width:150,height:150,children:(0,l.jsx)(`path`,{ref:e,d:`M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z`})}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`button`,{onClick:()=>{e.play({args:`red`})},children:`Red`}),(0,l.jsx)(`button`,{onClick:()=>{e.play({args:`blue`})},children:`Blue`}),(0,l.jsx)(`button`,{onClick:()=>{e.play({args:`green`})},children:`Green`}),(0,l.jsx)(`button`,{onClick:t,children:`All`})]})]})}},b=({i:e})=>{let t={easing:`ease-in-out`,iterations:1/0,direction:`alternate`,delay:e*98},n=i([{transform:`translateY(0) scaleX(.8)`},{transform:`translateY(95vh) scaleX(1)`}],{...t,duration:2500}),r=i([{opacity:1},{opacity:0}],{...t,duration:2e3}),a=i([{backgroundColor:`rgb(239, 239, 255)`},{backgroundColor:`#e4c349`}],{...t,duration:3e3});return(0,c.useEffect)(()=>{n.play(),r.play(),a.play()},[]),(0,l.jsx)(`div`,{ref:o([n,r,a]),style:{width:`5vw`,height:`2.5vh`,background:`#efefff`,borderRadius:`1vh`}})},x={render:()=>{let[e]=(0,c.useState)(()=>Array.from({length:20}).map((e,t)=>t));return(0,l.jsx)(`div`,{style:{background:`#e45349`,width:`100vw`,height:`100vh`,display:`flex`,justifyContent:`center`},children:e.map(e=>(0,l.jsx)(b,{i:e},e))})}},S={render:()=>{let[e,t]=(0,c.useState)(10),n=i([{opacity:1,transform:`scale(.6)`},{opacity:.5,transform:`scale(1)`}],{duration:500,easing:`linear`,delay:0,iterations:1e3,direction:`alternate`}),r=i([{opacity:0,transform:`scale(.01) rotate(0deg)`,color:`white`,offset:0},{opacity:1,transform:`scale(6) rotate(360deg)`,color:`orange`,offset:.8},{opacity:1,transform:`scale(1) rotate(720deg)`,color:`white`,offset:1}],{duration:2e3,easing:`ease-out`,delay:0,iterations:1});return(0,c.useEffect)(()=>{n.play();let i=e,a=setInterval(()=>{--i,t(e=>e-1),i>0?n.setPlaybackRate(e=>Math.min(e*1.15,6)):(clearInterval(a),r.play())},1e3);return()=>{clearInterval(a)}},[]),(0,l.jsx)(`div`,{style:{background:`gray`,width:400,height:400,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,l.jsx)(`span`,{ref:o([n,r]),style:{color:`white`,fontSize:64,fontWeight:`bold`},children:e})})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [duration, setDuration] = useState(1000);
    const [iteration, setIteration] = useState(2);
    const [direction, setDirection] = useState<PlaybackDirection>("normal");
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
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`Bars`,`Mouse`,`Toggle`,`Path`,`ThreeDimentional`,`Sequence`,`Wave`,`Countdown`]}))();export{m as Bars,S as Countdown,h as Mouse,_ as Path,f as Playground,y as Sequence,v as ThreeDimentional,g as Toggle,x as Wave,C as __namedExportsOrder,d as default};