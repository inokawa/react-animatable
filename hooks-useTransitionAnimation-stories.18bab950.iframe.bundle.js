/*! For license information please see hooks-useTransitionAnimation-stories.18bab950.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[480],{"./stories/hooks/useTransitionAnimation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alphabet:()=>Alphabet,Expand:()=>Expand,Input:()=>Input,default:()=>useTransitionAnimation_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/core/utils.ts");const toMap=elements=>elements.reduce(((acc,e,i)=>(acc[e.key||i]=e,acc)),{}),TransitionStateContext=(0,react.createContext)("update"),TransitionNotifierContext=(0,react.createContext)(utils.ZT),Provider=({_state:state,_element:element})=>{const[show,setShow]=(0,react.useState)(!0),hasExitRef=(0,react.useRef)(!1),showChildren="exit"!==state||!!hasExitRef.current&&show;return(0,react.useEffect)((()=>{"enter"===state&&setShow(!0)}),[state]),(0,jsx_runtime.jsx)(TransitionStateContext.Provider,{value:state,children:(0,jsx_runtime.jsx)(TransitionNotifierContext.Provider,{value:(0,react.useCallback)((s=>{2===s?setShow(!1):hasExitRef.current=1===s}),[]),children:showChildren?element:null})})},TransitionGroup=({children})=>{const elemsRef=(0,react.useRef)(null),prevElems=elemsRef.current||[],elems=react.Children.map(children,(c=>c));(0,react.useEffect)((()=>{elemsRef.current=elems}));const elemsByKey=toMap(elems),prevElemsByKey=toMap(prevElems),res=[];return prevElems.forEach(((v,i)=>{const key=v.key||i;elemsByKey[key]?res.push((0,jsx_runtime.jsx)(Provider,{_state:"update",_element:elemsByKey[key]},key)):res.push((0,jsx_runtime.jsx)(Provider,{_state:"exit",_element:v},key))})),elems.forEach(((v,i)=>{const key=v.key||i;prevElemsByKey[key]||res.push((0,jsx_runtime.jsx)(Provider,{_state:"enter",_element:v},key))})),(0,jsx_runtime.jsx)(react.Fragment,{children:res})};var useAnimation=__webpack_require__("./src/react/hooks/useAnimation.ts"),useIsomorphicLayoutEffect=__webpack_require__("./src/react/hooks/useIsomorphicLayoutEffect.ts"),useStatic=__webpack_require__("./src/react/hooks/useStatic.ts");const useTransitionAnimation=keyframes=>{const keys=(0,utils.RR)(keyframes),animations=keys.reduce(((acc,k)=>{const def=keyframes[k];return def?(acc[k]=(0,useAnimation._)(def[0],def[1]),acc):acc}),{}),animationsRef=(0,react.useRef)(animations),[animation,cleanup]=(0,useStatic.T)((()=>{const forAllHandle=fn=>{(0,utils.RR)(animationsRef.current).forEach((name=>fn(animationsRef.current[name])))};return[ref=>{forAllHandle((h=>{h(ref)}))},()=>{forAllHandle((handle=>{handle.cancel()}))}]}));(0,useIsomorphicLayoutEffect.L)((()=>{animationsRef.current=animations})),(0,react.useEffect)((()=>cleanup),[]);const currentState=(0,react.useContext)(TransitionStateContext),notify=(0,react.useContext)(TransitionNotifierContext);return(0,useIsomorphicLayoutEffect.L)((()=>{keys.includes("exit")?notify(1):notify(0)}),keys),(0,useIsomorphicLayoutEffect.L)((()=>{var _a;"update"===currentState&&(null==(_a=animationsRef.current[currentState])||_a.play())})),(0,useIsomorphicLayoutEffect.L)((()=>{var _a;"update"!==currentState&&(null==(_a=animationsRef.current[currentState])||_a.play().waitFor("finish").then((()=>{"exit"===currentState&&notify(2)})).catch((()=>{})))}),[currentState]),animation};const useTransitionAnimation_stories={parameters:{storySource:{source:'import { StoryObj } from "@storybook/react";\nimport React, { useEffect, useRef, useState } from "react";\nimport {\n  TransitionGroup,\n  AnimationOptions,\n  useTransitionAnimation,\n} from "../../src";\n\nexport default { component: useTransitionAnimation };\n\nconst usePrevious = <T,>(value: T) => {\n  const prev = useRef(value);\n  useEffect(() => {\n    prev.current = value;\n  }, [value]);\n  return prev.current;\n};\n\nconst Text = ({ children }: { children: string }) => {\n  const prev = usePrevious(children);\n\n  const timing = { duration: 800, easing: "ease-out" };\n  const animate = useTransitionAnimation({\n    enter: [\n      [\n        { transform: "translateY(-20px)", opacity: 0.2 },\n        { transform: "translateY(0px)", opacity: 1 },\n      ],\n      timing,\n    ],\n    exit: [\n      [\n        { transform: "translateY(0px)", opacity: 1 },\n        { transform: "translateY(20px)", opacity: 0.2 },\n      ],\n      timing,\n    ],\n    update: [\n      [{ transform: "rotateX(360deg)" }, { transform: "rotateX(0deg)" }],\n      children !== prev ? timing : undefined,\n    ],\n  });\n\n  return (\n    <span\n      ref={animate}\n      style={{ display: "inline-block", whiteSpace: "pre", fontSize: 32 }}\n    >\n      {children}\n    </span>\n  );\n};\n\nexport const Input: StoryObj = {\n  render: () => {\n    const [value, setValue] = useState("Animation");\n    return (\n      <div style={{ margin: 20 }}>\n        <div style={{ marginBottom: 100 }}>\n          <input value={value} onChange={(e) => setValue(e.target.value)} />\n        </div>\n        <div>\n          <TransitionGroup>\n            {value.split("").map((t, i) => (\n              <Text key={i}>{t}</Text>\n            ))}\n          </TransitionGroup>\n        </div>\n      </div>\n    );\n  },\n};\n\nconst shuffle = <T,>(array: T[]): T[] => {\n  for (let i = array.length - 1; i >= 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [array[i], array[j]] = [array[j], array[i]];\n  }\n  return array;\n};\n\nconst SvgText = ({ children, i }: { children: string; i: number }) => {\n  const x = i * 20;\n  const prevX = usePrevious(x);\n  const timing = { duration: 800, easing: "ease-in-out" };\n  const transition = useTransitionAnimation({\n    update: [\n      (prev) => [\n        { fill: prev.fill, transform: `translateX(${prevX - x}px)` },\n        { fill: "#333", transform: `translateX(0px)` },\n      ],\n      timing,\n    ],\n    enter: [\n      [\n        { fill: "green", fillOpacity: "0", transform: "translateY(-20px)" },\n        { fill: "green", fillOpacity: "1", transform: "translateY(0px)" },\n      ],\n      timing,\n    ],\n    exit: [\n      { fill: "brown", fillOpacity: "0", transform: "translateY(20px)" },\n      timing,\n    ],\n  });\n\n  return (\n    <text ref={transition} x={x} y={0} fill="#333">\n      {children}\n    </text>\n  );\n};\n\nconst ALPHABETS = "abcdefghijklmnopqrstuvwxyz".split("");\n\nexport const Alphabet: StoryObj = {\n  render: () => {\n    const [texts, setTexts] = useState(ALPHABETS);\n    useEffect(() => {\n      const id = setInterval(() => {\n        const shuffled = shuffle(ALPHABETS)\n          .slice(0, Math.floor(Math.random() * 26))\n          .sort();\n        setTexts(shuffled);\n      }, 1000);\n      return () => {\n        clearInterval(id);\n      };\n    }, []);\n\n    return (\n      <>\n        <svg width={600} height={400}>\n          <g transform={`translate(${25},${50})`}>\n            <TransitionGroup>\n              {texts.map((t, i) => (\n                <SvgText key={t} i={i}>\n                  {t}\n                </SvgText>\n              ))}\n            </TransitionGroup>\n          </g>\n        </svg>\n        <style>{`text { font: bold 28px monospace; }`}</style>\n      </>\n    );\n  },\n};\n\nconst ExpandRect = ({ i, length }: { i: number; length: number }) => {\n  const timing: AnimationOptions = {\n    easing: "ease-in-out",\n    direction: "alternate",\n    duration: 1000,\n  };\n\n  const startStyle = (s: CSSStyleDeclaration, defaultScale: number) => {\n    const transform = s.transform;\n    const scale =\n      transform.slice("matrix".length + 1, transform.indexOf(",") - 1) ||\n      defaultScale;\n    return {\n      backgroundColor: s.backgroundColor,\n      transform: `scale(${scale})`,\n      opacity: s.opacity,\n    };\n  };\n\n  const transition = useTransitionAnimation({\n    enter: [\n      (prev) => [\n        startStyle(prev, 0),\n        { backgroundColor: "skyblue", transform: "scale(1)", opacity: 1 },\n      ],\n      { ...timing, delay: i * 100 },\n    ],\n    exit: [\n      (prev) => [\n        startStyle(prev, 1),\n        {\n          backgroundColor: "limegreen",\n          transform: "scale(0)",\n          opacity: 0,\n        },\n      ],\n      { ...timing, delay: (length - i) * 100 },\n    ],\n  });\n\n  return (\n    <div\n      ref={transition}\n      style={{\n        width: "100px",\n        height: "100px",\n        background: "#efefff",\n        margin: 4,\n        backgroundColor: "limegreen",\n        transform: "scale(0)",\n        opacity: 0,\n      }}\n    />\n  );\n};\n\nexport const Expand: StoryObj = {\n  render: () => {\n    const [expanded, setExpanded] = useState(true);\n    const length = 16;\n    const [rects] = useState(() => Array.from({ length }).map((_, i) => i));\n\n    return (\n      <>\n        <button\n          onClick={() => setExpanded((prev) => !prev)}\n          style={{ marginBottom: 10 }}\n        >\n          {expanded ? "close" : "open"}\n        </button>\n        <div\n          style={{\n            background: "whitesmoke",\n            width: "500px",\n            height: "500px",\n            display: "flex",\n            alignItems: "flex-start",\n            justifyContent: "flex-start",\n            flexWrap: "wrap",\n            alignContent: "flex-start",\n          }}\n        >\n          <TransitionGroup>\n            {expanded\n              ? rects.map((i) => <ExpandRect key={i} i={i} length={length} />)\n              : []}\n          </TransitionGroup>\n        </div>\n      </>\n    );\n  },\n};\n',locationsMap:{input:{startLoc:{col:31,line:54},endLoc:{col:1,line:72},startBody:{col:31,line:54},endBody:{col:1,line:72}},alphabet:{startLoc:{col:34,line:116},endLoc:{col:1,line:148},startBody:{col:34,line:116},endBody:{col:1,line:148}},expand:{startLoc:{col:32,line:206},endLoc:{col:1,line:241},startBody:{col:32,line:206},endBody:{col:1,line:241}}}}},component:useTransitionAnimation},usePrevious=value=>{const prev=(0,react.useRef)(value);return(0,react.useEffect)((()=>{prev.current=value}),[value]),prev.current},Text=({children})=>{const prev=usePrevious(children),timing={duration:800,easing:"ease-out"},animate=useTransitionAnimation({enter:[[{transform:"translateY(-20px)",opacity:.2},{transform:"translateY(0px)",opacity:1}],timing],exit:[[{transform:"translateY(0px)",opacity:1},{transform:"translateY(20px)",opacity:.2}],timing],update:[[{transform:"rotateX(360deg)"},{transform:"rotateX(0deg)"}],children!==prev?timing:void 0]});return(0,jsx_runtime.jsx)("span",{ref:animate,style:{display:"inline-block",whiteSpace:"pre",fontSize:32},children})},Input={render:()=>{const[value,setValue]=(0,react.useState)("Animation");return(0,jsx_runtime.jsxs)("div",{style:{margin:20},children:[(0,jsx_runtime.jsx)("div",{style:{marginBottom:100},children:(0,jsx_runtime.jsx)("input",{value,onChange:e=>setValue(e.target.value)})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(TransitionGroup,{children:value.split("").map(((t,i)=>(0,jsx_runtime.jsx)(Text,{children:t},i)))})})]})}},SvgText=({children,i})=>{const x=20*i,prevX=usePrevious(x),timing={duration:800,easing:"ease-in-out"},transition=useTransitionAnimation({update:[prev=>[{fill:prev.fill,transform:`translateX(${prevX-x}px)`},{fill:"#333",transform:"translateX(0px)"}],timing],enter:[[{fill:"green",fillOpacity:"0",transform:"translateY(-20px)"},{fill:"green",fillOpacity:"1",transform:"translateY(0px)"}],timing],exit:[{fill:"brown",fillOpacity:"0",transform:"translateY(20px)"},timing]});return(0,jsx_runtime.jsx)("text",{ref:transition,x,y:0,fill:"#333",children})},ALPHABETS="abcdefghijklmnopqrstuvwxyz".split(""),Alphabet={render:()=>{const[texts,setTexts]=(0,react.useState)(ALPHABETS);return(0,react.useEffect)((()=>{const id=setInterval((()=>{const shuffled=(array=>{for(let i=array.length-1;i>=0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]]}return array})(ALPHABETS).slice(0,Math.floor(26*Math.random())).sort();setTexts(shuffled)}),1e3);return()=>{clearInterval(id)}}),[]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("svg",{width:600,height:400,children:(0,jsx_runtime.jsx)("g",{transform:"translate(25,50)",children:(0,jsx_runtime.jsx)(TransitionGroup,{children:texts.map(((t,i)=>(0,jsx_runtime.jsx)(SvgText,{i,children:t},t)))})})}),(0,jsx_runtime.jsx)("style",{children:"text { font: bold 28px monospace; }"})]})}},ExpandRect=({i,length})=>{const timing={easing:"ease-in-out",direction:"alternate",duration:1e3},startStyle=(s,defaultScale)=>{const transform=s.transform,scale=transform.slice(7,transform.indexOf(",")-1)||defaultScale;return{backgroundColor:s.backgroundColor,transform:`scale(${scale})`,opacity:s.opacity}},transition=useTransitionAnimation({enter:[prev=>[startStyle(prev,0),{backgroundColor:"skyblue",transform:"scale(1)",opacity:1}],{...timing,delay:100*i}],exit:[prev=>[startStyle(prev,1),{backgroundColor:"limegreen",transform:"scale(0)",opacity:0}],{...timing,delay:100*(length-i)}]});return(0,jsx_runtime.jsx)("div",{ref:transition,style:{width:"100px",height:"100px",background:"#efefff",margin:4,backgroundColor:"limegreen",transform:"scale(0)",opacity:0}})},Expand={render:()=>{const[expanded,setExpanded]=(0,react.useState)(!0),[rects]=(0,react.useState)((()=>Array.from({length:16}).map(((_,i)=>i))));return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{onClick:()=>setExpanded((prev=>!prev)),style:{marginBottom:10},children:expanded?"close":"open"}),(0,jsx_runtime.jsx)("div",{style:{background:"whitesmoke",width:"500px",height:"500px",display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexWrap:"wrap",alignContent:"flex-start"},children:(0,jsx_runtime.jsx)(TransitionGroup,{children:expanded?rects.map((i=>(0,jsx_runtime.jsx)(ExpandRect,{i,length:16},i))):[]})})]})}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/core/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Iq:()=>isSameObject,RR:()=>getKeys,ZT:()=>noop,bT:()=>isSameObjectArray,f0:()=>assign,qo:()=>toArray});const noop=()=>{},getKeys=Object.keys,assign=Object.assign,isArray=Array.isArray,getStyle=e=>getComputedStyle(e),isSameObject=(target={},prev={})=>{const keys=getKeys(target);return keys.length===getKeys(prev).length&&keys.every((k=>target[k]===prev[k]))},isSameObjectArray=(target,prev)=>target.length===prev.length&&target.every(((t,i)=>isSameObject(t,prev[i]))),toArray=items=>isArray(items)?items:[items]},"./src/core/waapi.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cz:()=>_finish,DR:()=>_waitFor,H9:()=>_cancel,K:()=>_setRate,KU:()=>_play,NU:()=>_pause,YQ:()=>_setTime,eo:()=>_reverse,ih:()=>createAnimation});const createAnimation=(el,keyframes,options)=>{const modifiedOptions={fill:"both",...options};try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions))}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=(animation,opts={})=>{animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,(p=>-p)),opts.restart&&_setTime(animation,0),animation.play()},_reverse=animation=>{animation&&animation.reverse()},_cancel=animation=>{animation&&animation.cancel()},_finish=animation=>{animation&&animation.finish()},_pause=animation=>{animation&&animation.pause()},_setTime=(animation,arg)=>{animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=(animation,arg)=>{animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=(animation,name)=>animation?new Promise((resolve=>{animation.onfinish=()=>{("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}})):Promise.resolve()},"./src/react/hooks/useAnimation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>useAnimation});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_core_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core/utils.ts"),_core_waapi__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/core/waapi.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/react/hooks/useIsomorphicLayoutEffect.ts"),_useStatic__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/react/hooks/useStatic.ts");const normalizeKeyframe=(el,keyframe,args)=>"function"==typeof keyframe?keyframe((0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.C2)(el),args):(0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.qo)(keyframe);class AnimationState{_init(el,keyframes,options){if(this._active){if(this._isConditionSame(keyframes,options))return this._active._animation;this._active._animation.cancel()}return(this._active={_animation:(0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.ih)(el,keyframes,options),_keyframes:keyframes,_options:options})._animation}_isConditionSame(keyframes,options){return!!this._active&&((0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.bT)(keyframes,this._active._keyframes)&&(0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.Iq)(options,this._active._options))}_get(){var _a;return null==(_a=this._active)?void 0:_a._animation}_clear(){this._active&&(this._active._animation.cancel(),this._active=void 0)}}const useAnimation=(keyframe,options)=>{const keyframeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(keyframe),optionsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(options),[handle,s]=(0,_useStatic__WEBPACK_IMPORTED_MODULE_3__.T)((()=>{let target=null;const state=new AnimationState,externalHandle=(0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.f0)((ref=>{(target=ref)||state._clear()}),{play:(...opts)=>{if(!target)return externalHandle;const keyframes=normalizeKeyframe(target,keyframeRef.current,(opts[0]||{}).args);return(0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.KU)(state._init(target,keyframes,optionsRef.current),opts[0]),externalHandle},reverse:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.eo)(state._get()),externalHandle),cancel:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.H9)(state._get()),externalHandle),finish:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.Cz)(state._get()),externalHandle),pause:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.NU)(state._get()),externalHandle),setTime:time=>{let animation=state._get();if(!animation){if(!target||"function"==typeof keyframeRef.current)return externalHandle;const keyframes=normalizeKeyframe(target,keyframeRef.current,void 0);animation=state._init(target,keyframes,optionsRef.current)}return(0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.YQ)(animation,time),externalHandle},setPlaybackRate:rate=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.K)(state._get(),rate),externalHandle),waitFor:event=>(0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.DR)(state._get(),event).then((()=>externalHandle))});return[externalHandle,state]}));return(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__.L)((()=>{keyframeRef.current=keyframe,optionsRef.current=options,(null==options?void 0:options.autoPlay)&&"function"!=typeof keyframe&&!s._isConditionSame((0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.qo)(keyframe),options)&&handle.play()})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>{s._clear()}),[]),handle}},"./src/react/hooks/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/react/hooks/useStatic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useStatic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useStatic=init=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref.current||(ref.current=init())}}}]);