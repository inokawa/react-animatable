/*! For license information please see hooks-useTransitionAnimation-stories.1103c0b3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[480],{"./node_modules/@storybook/react/dist/index.mjs":(module,__webpack_exports__,__webpack_require__)=>{var _a,_chunk_RE33ZCRP_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-RE33ZCRP.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");__webpack_require__("@storybook/client-logger");module=__webpack_require__.hmd(module);var{window:globalWindow}=_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global;globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_RE33ZCRP_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_RE33ZCRP_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_RE33ZCRP_mjs__WEBPACK_IMPORTED_MODULE_0__.s;null==(_a=null==module?void 0:module.hot)||_a.decline()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/hooks/useTransitionAnimation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alphabet:()=>Alphabet,Expand:()=>Expand,Input:()=>Input,default:()=>useTransitionAnimation_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js")),utils=__webpack_require__("./src/core/utils.ts");const toMap=elements=>elements.reduce(((acc,e,i)=>(acc[e.key||i]=e,acc)),{}),TransitionStateContext=(0,react.createContext)("update"),TransitionNotifierContext=(0,react.createContext)(utils.ZT),Provider=({_state:state,_element:element})=>{const[show,setShow]=(0,react.useState)(!0),hasExitRef=(0,react.useRef)(!1),showChildren="exit"!==state||!!hasExitRef.current&&show;return(0,react.useEffect)((()=>{"enter"===state&&setShow(!0)}),[state]),(0,jsx_runtime.jsx)(TransitionStateContext.Provider,{value:state,children:(0,jsx_runtime.jsx)(TransitionNotifierContext.Provider,{value:(0,react.useCallback)((s=>{2===s?setShow(!1):hasExitRef.current=1===s}),[]),children:showChildren?element:null})})},TransitionGroup=({children})=>{const elemsRef=(0,react.useRef)(null),prevElems=elemsRef.current||[],elems=react.Children.map(children,(c=>c));(0,react.useEffect)((()=>{elemsRef.current=elems}));const elemsByKey=toMap(elems),prevElemsByKey=toMap(prevElems),res=[];return prevElems.forEach(((v,i)=>{const key=v.key||i;elemsByKey[key]?res.push((0,jsx_runtime.jsx)(Provider,{_state:"update",_element:elemsByKey[key]},key)):res.push((0,jsx_runtime.jsx)(Provider,{_state:"exit",_element:v},key))})),elems.forEach(((v,i)=>{const key=v.key||i;prevElemsByKey[key]||res.push((0,jsx_runtime.jsx)(Provider,{_state:"enter",_element:v},key))})),(0,jsx_runtime.jsx)(react.Fragment,{children:res})};try{TransitionGroup.displayName="TransitionGroup",TransitionGroup.__docgenInfo={description:"A component to manage enter/update/exit of its children by key, that works similar to [TransitionGroup of react-transition-group](https://reactcommunity.org/react-transition-group/transition-group).",displayName:"TransitionGroup",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react/components/TransitionGroup.tsx#TransitionGroup"]={docgenInfo:TransitionGroup.__docgenInfo,name:"TransitionGroup",path:"src/react/components/TransitionGroup.tsx#TransitionGroup"})}catch(__react_docgen_typescript_loader_error){}var useAnimation=__webpack_require__("./src/react/hooks/useAnimation.ts"),useIsomorphicLayoutEffect=__webpack_require__("./src/react/hooks/useIsomorphicLayoutEffect.ts");const useTransitionAnimation=keyframes=>{const keys=(0,utils.RR)(keyframes),animations=keys.reduce(((acc,k)=>{const def=keyframes[k];return def?(acc[k]=(0,useAnimation._)(def[0],def[1]),acc):acc}),{}),animationsRef=(0,react.useRef)(animations),[animation,cleanup]=(0,react.useState)((()=>{const forAllHandle=fn=>{(0,utils.RR)(animationsRef.current).forEach((name=>fn(animationsRef.current[name])))};return[ref=>{forAllHandle((h=>{h(ref)}))},()=>{forAllHandle((handle=>{handle.cancel()}))}]}))[0];(0,useIsomorphicLayoutEffect.L)((()=>{animationsRef.current=animations})),(0,react.useEffect)((()=>cleanup),[]);const currentState=(0,react.useContext)(TransitionStateContext),notify=(0,react.useContext)(TransitionNotifierContext);return(0,useIsomorphicLayoutEffect.L)((()=>{keys.includes("exit")?notify(1):notify(0)}),keys),(0,useIsomorphicLayoutEffect.L)((()=>{var _a;"update"===currentState&&(null==(_a=animationsRef.current[currentState])||_a.play())})),(0,useIsomorphicLayoutEffect.L)((()=>{var _a;"update"!==currentState&&(null==(_a=animationsRef.current[currentState])||_a.play().waitFor("finish").then((()=>{"exit"===currentState&&notify(2)})).catch((()=>{})))}),[currentState]),animation};var _a,_b,_c;const useTransitionAnimation_stories={component:useTransitionAnimation},usePrevious=value=>{const prev=(0,react.useRef)(value);return(0,react.useEffect)((()=>{prev.current=value}),[value]),prev.current},Text=({children})=>{const prev=usePrevious(children),timing={duration:800,easing:"ease-out"},animate=useTransitionAnimation({enter:[[{transform:"translateY(-20px)",opacity:.2},{transform:"translateY(0px)",opacity:1}],timing],exit:[[{transform:"translateY(0px)",opacity:1},{transform:"translateY(20px)",opacity:.2}],timing],update:[[{transform:"rotateX(360deg)"},{transform:"rotateX(0deg)"}],children!==prev?timing:void 0]});return(0,jsx_runtime.jsx)("span",{ref:animate,style:{display:"inline-block",whiteSpace:"pre",fontSize:32},children})},Input={render:()=>{const[value,setValue]=(0,react.useState)("Animation");return(0,jsx_runtime.jsxs)("div",{style:{margin:20},children:[(0,jsx_runtime.jsx)("div",{style:{marginBottom:100},children:(0,jsx_runtime.jsx)("input",{value,onChange:e=>setValue(e.target.value)})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(TransitionGroup,{children:value.split("").map(((t,i)=>(0,jsx_runtime.jsx)(Text,{children:t},i)))})})]})}},SvgText=({children,i})=>{const x=20*i,prevX=usePrevious(x),timing={duration:800,easing:"ease-in-out"},transition=useTransitionAnimation({update:[prev=>[{fill:prev.fill,transform:`translateX(${prevX-x}px)`},{fill:"#333",transform:"translateX(0px)"}],timing],enter:[[{fill:"green",fillOpacity:"0",transform:"translateY(-20px)"},{fill:"green",fillOpacity:"1",transform:"translateY(0px)"}],timing],exit:[{fill:"brown",fillOpacity:"0",transform:"translateY(20px)"},timing]});return(0,jsx_runtime.jsx)("text",{ref:transition,x,y:0,fill:"#333",children})},ALPHABETS="abcdefghijklmnopqrstuvwxyz".split(""),Alphabet={render:()=>{const[texts,setTexts]=(0,react.useState)(ALPHABETS);return(0,react.useEffect)((()=>{const id=setInterval((()=>{const shuffled=(array=>{for(let i=array.length-1;i>=0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]]}return array})(ALPHABETS).slice(0,Math.floor(26*Math.random())).sort();setTexts(shuffled)}),1e3);return()=>{clearInterval(id)}}),[]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("svg",{width:600,height:400,children:(0,jsx_runtime.jsx)("g",{transform:"translate(25,50)",children:(0,jsx_runtime.jsx)(TransitionGroup,{children:texts.map(((t,i)=>(0,jsx_runtime.jsx)(SvgText,{i,children:t},t)))})})}),(0,jsx_runtime.jsx)("style",{children:"text { font: bold 28px monospace; }"})]})}},ExpandRect=({i,length})=>{const timing={easing:"ease-in-out",direction:"alternate",duration:1e3},startStyle=(s,defaultScale)=>{const transform=s.transform,scale=transform.slice("matrix".length+1,transform.indexOf(",")-1)||defaultScale;return{backgroundColor:s.backgroundColor,transform:`scale(${scale})`,opacity:s.opacity}},transition=useTransitionAnimation({enter:[prev=>[startStyle(prev,0),{backgroundColor:"skyblue",transform:"scale(1)",opacity:1}],{...timing,delay:100*i}],exit:[prev=>[startStyle(prev,1),{backgroundColor:"limegreen",transform:"scale(0)",opacity:0}],{...timing,delay:100*(length-i)}]});return(0,jsx_runtime.jsx)("div",{ref:transition,style:{width:"100px",height:"100px",background:"#efefff",margin:4,backgroundColor:"limegreen",transform:"scale(0)",opacity:0}})},Expand={render:()=>{const[expanded,setExpanded]=(0,react.useState)(!0),[rects]=(0,react.useState)((()=>Array.from({length:16}).map(((_,i)=>i))));return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{onClick:()=>setExpanded((prev=>!prev)),style:{marginBottom:10},children:expanded?"close":"open"}),(0,jsx_runtime.jsx)("div",{style:{background:"whitesmoke",width:"500px",height:"500px",display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexWrap:"wrap",alignContent:"flex-start"},children:(0,jsx_runtime.jsx)(TransitionGroup,{children:expanded?rects.map((i=>(0,jsx_runtime.jsx)(ExpandRect,{i,length:16},i))):[]})})]})}};Input.parameters={...Input.parameters,storySource:{source:'{\n  render: () => {\n    const [value, setValue] = useState("Animation");\n    return <div style={{\n      margin: 20\n    }}>\n        <div style={{\n        marginBottom: 100\n      }}>\n          <input value={value} onChange={e => setValue(e.target.value)} />\n        </div>\n        <div>\n          <TransitionGroup>\n            {value.split("").map((t, i) => <Text key={i}>{t}</Text>)}\n          </TransitionGroup>\n        </div>\n      </div>;\n  }\n}',...null==(_a=Input.parameters)?void 0:_a.storySource}},Alphabet.parameters={...Alphabet.parameters,storySource:{source:"{\n  render: () => {\n    const [texts, setTexts] = useState(ALPHABETS);\n    useEffect(() => {\n      const id = setInterval(() => {\n        const shuffled = shuffle(ALPHABETS).slice(0, Math.floor(Math.random() * 26)).sort();\n        setTexts(shuffled);\n      }, 1000);\n      return () => {\n        clearInterval(id);\n      };\n    }, []);\n    return <>\n        <svg width={600} height={400}>\n          <g transform={`translate(${25},${50})`}>\n            <TransitionGroup>\n              {texts.map((t, i) => <SvgText key={t} i={i}>\n                  {t}\n                </SvgText>)}\n            </TransitionGroup>\n          </g>\n        </svg>\n        <style>{`text { font: bold 28px monospace; }`}</style>\n      </>;\n  }\n}",...null==(_b=Alphabet.parameters)?void 0:_b.storySource}},Expand.parameters={...Expand.parameters,storySource:{source:'{\n  render: () => {\n    const [expanded, setExpanded] = useState(true);\n    const length = 16;\n    const [rects] = useState(() => Array.from({\n      length\n    }).map((_, i) => i));\n    return <>\n        <button onClick={() => setExpanded(prev => !prev)} style={{\n        marginBottom: 10\n      }}>\n          {expanded ? "close" : "open"}\n        </button>\n        <div style={{\n        background: "whitesmoke",\n        width: "500px",\n        height: "500px",\n        display: "flex",\n        alignItems: "flex-start",\n        justifyContent: "flex-start",\n        flexWrap: "wrap",\n        alignContent: "flex-start"\n      }}>\n          <TransitionGroup>\n            {expanded ? rects.map(i => <ExpandRect key={i} i={i} length={length} />) : []}\n          </TransitionGroup>\n        </div>\n      </>;\n  }\n}',...null==(_c=Expand.parameters)?void 0:_c.storySource}}},"./src/core/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Iq:()=>isSameObject,RR:()=>getKeys,ZT:()=>noop,bT:()=>isSameObjectArray,f0:()=>assign,qo:()=>toArray});const noop=()=>{},getKeys=Object.keys,assign=Object.assign,isArray=Array.isArray,getStyle=e=>getComputedStyle(e),isSameObject=(target={},prev={})=>{const keys=getKeys(target);return keys.length===getKeys(prev).length&&keys.every((k=>target[k]===prev[k]))},isSameObjectArray=(target,prev)=>target.length===prev.length&&target.every(((t,i)=>isSameObject(t,prev[i]))),toArray=items=>isArray(items)?items:[items]},"./src/core/waapi.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cz:()=>_finish,DR:()=>_waitFor,H9:()=>_cancel,K:()=>_setRate,KU:()=>_play,NU:()=>_pause,YQ:()=>_setTime,eo:()=>_reverse,ih:()=>createAnimation,m7:()=>normalizeKeyframe});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/utils.ts");const normalizeKeyframe=(el,keyframe,args)=>"function"==typeof keyframe?keyframe((0,_utils__WEBPACK_IMPORTED_MODULE_0__.C2)(el),args):(0,_utils__WEBPACK_IMPORTED_MODULE_0__.qo)(keyframe),createAnimation=(el,keyframes,options)=>{const modifiedOptions={fill:"both",...options};try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions))}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=(animation,opts={})=>{animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,(p=>-p)),opts.restart&&_setTime(animation,0),animation.play()},_reverse=animation=>{animation&&animation.reverse()},_cancel=animation=>{animation&&animation.cancel()},_finish=animation=>{animation&&animation.finish()},_pause=animation=>{animation&&animation.pause()},_setTime=(animation,arg)=>{animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=(animation,arg)=>{animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=(animation,name)=>animation?new Promise((resolve=>{animation.onfinish=()=>{("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}})):Promise.resolve()},"./src/react/hooks/useAnimation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>useAnimation});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/core/utils.ts"),_core_waapi__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core/waapi.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/react/hooks/useIsomorphicLayoutEffect.ts");const useAnimation=(keyframe,options)=>{const keyframeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(keyframe),optionsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(options),handleRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[handle,cleanup]=handleRef.current||(handleRef.current=(()=>{let cache,target=null;const getAnimation=()=>null==cache?void 0:cache[0],externalHandle=(0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.f0)((ref=>{(target=ref)||(cache=void 0)}),{play:(...opts)=>target?((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.KU)(((el,opts={})=>{const keyframes=(0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.m7)(el,keyframeRef.current,opts.args),options2=optionsRef.current;if(cache){const[prevAnimation,prevKeyframes,prevOptions]=cache;if((0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.bT)(keyframes,prevKeyframes)&&(0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.Iq)(options2,prevOptions))return prevAnimation;prevAnimation.cancel()}const animation=(0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.ih)(el,keyframes,options2);return cache=[animation,keyframes,options2],animation})(target,opts[0]),opts[0]),externalHandle):externalHandle,reverse:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.eo)(getAnimation()),externalHandle),cancel:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.H9)(getAnimation()),externalHandle),finish:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.Cz)(getAnimation()),externalHandle),pause:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.NU)(getAnimation()),externalHandle),setTime:time=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.YQ)(getAnimation(),time),externalHandle),setPlaybackRate:rate=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.K)(getAnimation(),rate),externalHandle),waitFor:event=>(0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.DR)(getAnimation(),event).then((()=>externalHandle))});return[externalHandle,externalHandle.cancel]})());return(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.L)((()=>{keyframeRef.current=keyframe,optionsRef.current=options})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>cleanup),[]),handle}},"./src/react/hooks/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect}}]);