import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{S as n}from"./iframe-BDSeeNGH.js";import{t as r}from"./jsx-runtime-CDqeXLwx.js";import{i,s as a,t as o}from"./src-Z0NFvIUt.js";var s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{s=t(n(),1),o(),c=r(),l={component:i},u=e=>{let t=(0,s.useRef)(e);return(0,s.useEffect)(()=>{t.current=e},[e]),t.current},d=({children:e})=>{let t=u(e),n={duration:800,easing:`ease-out`};return(0,c.jsx)(`span`,{ref:i({enter:[[{transform:`translateY(-20px)`,opacity:.2},{transform:`translateY(0px)`,opacity:1}],n],exit:[[{transform:`translateY(0px)`,opacity:1},{transform:`translateY(20px)`,opacity:.2}],n],update:[[{transform:`rotateX(360deg)`},{transform:`rotateX(0deg)`}],e===t?void 0:n]}),style:{display:`inline-block`,whiteSpace:`pre`,fontSize:32},children:e})},f={render:()=>{let[e,t]=(0,s.useState)(`Animation`);return(0,c.jsxs)(`div`,{style:{margin:20},children:[(0,c.jsx)(`div`,{style:{marginBottom:100},children:(0,c.jsx)(`input`,{value:e,onChange:e=>t(e.target.value)})}),(0,c.jsx)(`div`,{children:(0,c.jsx)(a,{children:e.split(``).map((e,t)=>(0,c.jsx)(d,{children:e},t))})})]})}},p=e=>{for(let t=e.length-1;t>=0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},m=({children:e,i:t})=>{let n=t*20,r=u(n),a={duration:800,easing:`ease-in-out`};return(0,c.jsx)(`text`,{ref:i({update:[e=>[{fill:e.fill,transform:`translateX(${r-n}px)`},{fill:`#333`,transform:`translateX(0px)`}],a],enter:[[{fill:`green`,fillOpacity:`0`,transform:`translateY(-20px)`},{fill:`green`,fillOpacity:`1`,transform:`translateY(0px)`}],a],exit:[{fill:`brown`,fillOpacity:`0`,transform:`translateY(20px)`},a]}),x:n,y:0,fill:`#333`,children:e})},h=`abcdefghijklmnopqrstuvwxyz`.split(``),g={render:()=>{let[e,t]=(0,s.useState)(h);return(0,s.useEffect)(()=>{let e=setInterval(()=>{t(p(h).slice(0,Math.floor(Math.random()*26)).sort())},1e3);return()=>{clearInterval(e)}},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`svg`,{width:600,height:400,children:(0,c.jsx)(`g`,{transform:`translate(25,50)`,children:(0,c.jsx)(a,{children:e.map((e,t)=>(0,c.jsx)(m,{i:t,children:e},e))})})}),(0,c.jsx)(`style`,{children:`text { font: bold 28px monospace; }`})]})}},_=({i:e,length:t})=>{let n={easing:`ease-in-out`,direction:`alternate`,duration:1e3},r=(e,t)=>{let n=e.transform,r=n.slice(7,n.indexOf(`,`)-1)||t;return{backgroundColor:e.backgroundColor,transform:`scale(${r})`,opacity:e.opacity}};return(0,c.jsx)(`div`,{ref:i({enter:[e=>[r(e,0),{backgroundColor:`skyblue`,transform:`scale(1)`,opacity:1}],{...n,delay:e*100}],exit:[e=>[r(e,1),{backgroundColor:`limegreen`,transform:`scale(0)`,opacity:0}],{...n,delay:(t-e)*100}]}),style:{width:`100px`,height:`100px`,background:`#efefff`,margin:4,backgroundColor:`limegreen`,transform:`scale(0)`,opacity:0}})},v={render:()=>{let[e,t]=(0,s.useState)(!0),[n]=(0,s.useState)(()=>Array.from({length:16}).map((e,t)=>t));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`button`,{onClick:()=>t(e=>!e),style:{marginBottom:10},children:e?`close`:`open`}),(0,c.jsx)(`div`,{style:{background:`whitesmoke`,width:`500px`,height:`500px`,display:`flex`,alignItems:`flex-start`,justifyContent:`flex-start`,flexWrap:`wrap`,alignContent:`flex-start`},children:(0,c.jsx)(a,{children:e?n.map(e=>(0,c.jsx)(_,{i:e,length:16},e)):[]})})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Animation");
    return <div style={{
      margin: 20
    }}>
        <div style={{
        marginBottom: 100
      }}>
          <input value={value} onChange={e => setValue(e.target.value)} />
        </div>
        <div>
          <TransitionGroup>
            {value.split("").map((t, i) => <Text key={i}>{t}</Text>)}
          </TransitionGroup>
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [texts, setTexts] = useState(ALPHABETS);
    useEffect(() => {
      const id = setInterval(() => {
        const shuffled = shuffle(ALPHABETS).slice(0, Math.floor(Math.random() * 26)).sort();
        setTexts(shuffled);
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }, []);
    return <>
        <svg width={600} height={400}>
          <g transform={\`translate(\${25},\${50})\`}>
            <TransitionGroup>
              {texts.map((t, i) => <SvgText key={t} i={i}>
                  {t}
                </SvgText>)}
            </TransitionGroup>
          </g>
        </svg>
        <style>{\`text { font: bold 28px monospace; }\`}</style>
      </>;
  }
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [expanded, setExpanded] = useState(true);
    const length = 16;
    const [rects] = useState(() => Array.from({
      length
    }).map((_, i) => i));
    return <>
        <button onClick={() => setExpanded(prev => !prev)} style={{
        marginBottom: 10
      }}>
          {expanded ? "close" : "open"}
        </button>
        <div style={{
        background: "whitesmoke",
        width: "500px",
        height: "500px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        alignContent: "flex-start"
      }}>
          <TransitionGroup>
            {expanded ? rects.map(i => <ExpandRect key={i} i={i} length={length} />) : []}
          </TransitionGroup>
        </div>
      </>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Input`,`Alphabet`,`Expand`]}))();export{g as Alphabet,v as Expand,f as Input,y as __namedExportsOrder,l as default};