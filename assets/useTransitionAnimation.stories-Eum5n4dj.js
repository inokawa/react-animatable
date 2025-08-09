import{j as s}from"./jsx-runtime-DlcTwMfw.js";import{r as o}from"./iframe-CLym-1vj.js";import{n as S,l as j,u as R,a as I,m as v}from"./useLatestRef-CA1t_R2X.js";import{u as G}from"./useAnimation-ofOQFSsv.js";import"./preload-helper-D9Z9MdNV.js";const T=e=>e.reduce((n,t,r)=>(n[t.key||r]=t,n),{}),C=o.createContext("update"),B=0,b=1,w=2,A=o.createContext(S),E=({_state:e,_element:n})=>{const[t,r]=o.useState(!0),a=o.useRef(!1),l=e==="exit"?a.current?t:!1:!0;return o.useEffect(()=>{e==="enter"&&r(!0)},[e]),s.jsx(C.Provider,{value:e,children:s.jsx(A.Provider,{value:o.useCallback(i=>{i===w?r(!1):a.current=i===b},[]),children:l?n:null})})},h=({children:e})=>{const n=o.useRef(null),t=n.current||[],r=o.Children.map(e,c=>c);o.useEffect(()=>{n.current=r});const a=T(r),l=T(t),i=[];return t.forEach((c,u)=>{const p=c.key||u;a[p]?i.push(s.jsx(E,{_state:"update",_element:a[p]},p)):i.push(s.jsx(E,{_state:"exit",_element:c},p))}),r.forEach((c,u)=>{const p=c.key||u;l[p]||i.push(s.jsx(E,{_state:"enter",_element:c},p))}),s.jsx(o.Fragment,{children:i})};h.__docgenInfo={description:"A component to manage enter/update/exit of its children by key, that works similar to [TransitionGroup of react-transition-group](https://reactcommunity.org/react-transition-group/transition-group).",methods:[],displayName:"TransitionGroup",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""}}};const g=e=>{const n=j(e),t=n.reduce((u,p)=>{const d=e[p];return d&&(u[p]=G(d[0],d[1])),u},{}),r=R(t),[a,l]=I(()=>{const u=d=>{j(r.current).forEach(y=>d(r.current[y]))};return[d=>{u(y=>{y(d)})},()=>{u(d=>{d.cancel()})}]});o.useEffect(()=>l,[]);const i=o.useContext(C),c=o.useContext(A);return v(()=>{n.includes("exit")?c(b):c(B)},n),v(()=>{i==="update"&&r.current[i]?.play()}),v(()=>{i!=="update"&&r.current[i]?.play().waitFor("finish").then(()=>{i==="exit"&&c(w)}).catch(S)},[i]),a},N={component:g},_=e=>{const n=o.useRef(e);return o.useEffect(()=>{n.current=e},[e]),n.current},X=({children:e})=>{const n=_(e),t={duration:800,easing:"ease-out"},r=g({enter:[[{transform:"translateY(-20px)",opacity:.2},{transform:"translateY(0px)",opacity:1}],t],exit:[[{transform:"translateY(0px)",opacity:1},{transform:"translateY(20px)",opacity:.2}],t],update:[[{transform:"rotateX(360deg)"},{transform:"rotateX(0deg)"}],e!==n?t:void 0]});return s.jsx("span",{ref:r,style:{display:"inline-block",whiteSpace:"pre",fontSize:32},children:e})},m={render:()=>{const[e,n]=o.useState("Animation");return s.jsxs("div",{style:{margin:20},children:[s.jsx("div",{style:{marginBottom:100},children:s.jsx("input",{value:e,onChange:t=>n(t.target.value)})}),s.jsx("div",{children:s.jsx(h,{children:e.split("").map((t,r)=>s.jsx(X,{children:t},r))})})]})}},M=e=>{for(let n=e.length-1;n>=0;n--){const t=Math.floor(Math.random()*(n+1));[e[n],e[t]]=[e[t],e[n]]}return e},P=({children:e,i:n})=>{const t=n*20,r=_(t),a={duration:800,easing:"ease-in-out"},l=g({update:[i=>[{fill:i.fill,transform:`translateX(${r-t}px)`},{fill:"#333",transform:"translateX(0px)"}],a],enter:[[{fill:"green",fillOpacity:"0",transform:"translateY(-20px)"},{fill:"green",fillOpacity:"1",transform:"translateY(0px)"}],a],exit:[{fill:"brown",fillOpacity:"0",transform:"translateY(20px)"},a]});return s.jsx("text",{ref:l,x:t,y:0,fill:"#333",children:e})},k="abcdefghijklmnopqrstuvwxyz".split(""),f={render:()=>{const[e,n]=o.useState(k);return o.useEffect(()=>{const t=setInterval(()=>{const r=M(k).slice(0,Math.floor(Math.random()*26)).sort();n(r)},1e3);return()=>{clearInterval(t)}},[]),s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:600,height:400,children:s.jsx("g",{transform:"translate(25,50)",children:s.jsx(h,{children:e.map((t,r)=>s.jsx(P,{i:r,children:t},t))})})}),s.jsx("style",{children:"text { font: bold 28px monospace; }"})]})}},Y=({i:e,length:n})=>{const t={easing:"ease-in-out",direction:"alternate",duration:1e3},r=(l,i)=>{const c=l.transform,u=c.slice(7,c.indexOf(",")-1)||i;return{backgroundColor:l.backgroundColor,transform:`scale(${u})`,opacity:l.opacity}},a=g({enter:[l=>[r(l,0),{backgroundColor:"skyblue",transform:"scale(1)",opacity:1}],{...t,delay:e*100}],exit:[l=>[r(l,1),{backgroundColor:"limegreen",transform:"scale(0)",opacity:0}],{...t,delay:(n-e)*100}]});return s.jsx("div",{ref:a,style:{width:"100px",height:"100px",background:"#efefff",margin:4,backgroundColor:"limegreen",transform:"scale(0)",opacity:0}})},x={render:()=>{const[e,n]=o.useState(!0),t=16,[r]=o.useState(()=>Array.from({length:t}).map((a,l)=>l));return s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>n(a=>!a),style:{marginBottom:10},children:e?"close":"open"}),s.jsx("div",{style:{background:"whitesmoke",width:"500px",height:"500px",display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexWrap:"wrap",alignContent:"flex-start"},children:s.jsx(h,{children:e?r.map(a=>s.jsx(Y,{i:a,length:t},a)):[]})})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const K=["Input","Alphabet","Expand"];export{f as Alphabet,x as Expand,m as Input,K as __namedExportsOrder,N as default};
