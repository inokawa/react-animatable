/*! For license information please see hooks-useAnimationFunction-stories.29db09bc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[4],{"./stories/hooks/useAnimationFunction.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Canvas:()=>Canvas,Progress:()=>Progress,Text:()=>Text,default:()=>useAnimationFunction_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/core/utils.ts"),waapi=__webpack_require__("./src/core/waapi.ts"),useStatic=__webpack_require__("./src/react/hooks/useStatic.ts"),useLatestRef=__webpack_require__("./src/react/hooks/useLatestRef.ts");const bindUpdateFunction=(animation,getUpdateFunction,args)=>{const update=()=>{var _a;const timing=null==(_a=animation.effect)?void 0:_a.getComputedTiming();if(!timing)return;null!=timing.progress&&getUpdateFunction()(timing,args),"running"===animation.playState&&requestAnimationFrame(update)};animation.ready.then(update)},useAnimationFunction=(onUpdate,options)=>{const onUpdateRef=(0,useLatestRef.I)(onUpdate),optionsRef=(0,useLatestRef.I)(options),[handle,cleanup]=(0,useStatic.T)((()=>{const getOnUpdate=()=>onUpdateRef.current;let cache;const initAnimation=(opts={})=>{const options2=optionsRef.current;if(cache){const[prevAnimation,prevOptions]=cache;if((0,utils.Iq)(options2,prevOptions))return"running"!==prevAnimation.playState&&bindUpdateFunction(prevAnimation,getOnUpdate,opts.args),prevAnimation;prevAnimation.cancel()}const animation=(0,waapi.ih)(null,null,options2);return bindUpdateFunction(animation,getOnUpdate,opts.args),cache=[animation,options2],animation},getAnimation=()=>null==cache?void 0:cache[0],externalHandle={play:(...opts)=>((0,waapi.KU)(initAnimation(opts[0]),opts[0]),externalHandle),reverse:()=>((0,waapi.eo)(initAnimation()),externalHandle),cancel:()=>((0,waapi.H9)(getAnimation()),externalHandle),finish:()=>((0,waapi.Cz)(getAnimation()),externalHandle),pause:()=>((0,waapi.NU)(getAnimation()),externalHandle),setTime:time=>((0,waapi.YQ)(getAnimation(),time),externalHandle),setPlaybackRate:rate=>((0,waapi.K)(getAnimation(),rate),externalHandle),waitFor:event=>(0,waapi.DR)(getAnimation(),event).then((()=>externalHandle))};return[externalHandle,externalHandle.cancel]}));return(0,react.useEffect)((()=>cleanup),[]),handle};const useAnimationFunction_stories={parameters:{storySource:{source:'import { StoryObj } from "@storybook/react";\nimport React, { useCallback, useEffect, useRef, useState } from "react";\nimport { useAnimationFunction } from "../../src";\n\nexport default { component: useAnimationFunction };\n\nexport const Text: StoryObj = {\n  render: () => {\n    const [enable, setEnable] = useState(true);\n    const [time, setTime] = useState(0);\n    const animate = useAnimationFunction(\n      ({ progress }) => {\n        setTime(progress);\n      },\n      {\n        duration: 1000,\n        easing: "ease-in-out",\n        iterations: Infinity,\n        direction: "alternate",\n      }\n    );\n\n    useEffect(() => {\n      animate.play();\n    }, [animate]);\n\n    const onClick = useCallback(() => {\n      setEnable((p) => !p);\n      if (enable) {\n        animate.pause();\n      } else {\n        animate.play();\n      }\n    }, [animate, enable]);\n\n    return (\n      <div>\n        <button onClick={onClick}>{enable ? "stop" : "start"}</button>\n        <div>{time.toFixed(6)}</div>\n      </div>\n    );\n  },\n};\n\nexport const Progress: StoryObj = {\n  render: () => {\n    const [value, setValue] = useState(0);\n    const animate = useAnimationFunction<{ start: number; end: number }>(\n      ({ progress }, arg) => {\n        setValue(arg.start * (1 - progress) + progress * arg.end);\n      },\n      {\n        duration: 600,\n        easing: "ease-in-out",\n      }\n    );\n    useEffect(() => {\n      animate.play({ args: { start: value, end: Math.random() * 100 } });\n    }, []);\n\n    return (\n      <>\n        <div>\n          <progress value={value} max={100} style={{ width: 600 }} />\n        </div>\n        <div>\n          <button\n            onClick={() => animate.play({ args: { start: value, end: 0 } })}\n          >\n            0%\n          </button>\n          <button\n            onClick={() => animate.play({ args: { start: value, end: 50 } })}\n          >\n            50%\n          </button>\n          <button\n            onClick={() => animate.play({ args: { start: value, end: 100 } })}\n          >\n            100%\n          </button>\n        </div>\n      </>\n    );\n  },\n};\n\nexport const Canvas: StoryObj = {\n  render: () => {\n    const ref = useRef<HTMLCanvasElement>(null);\n    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);\n    const width = 400;\n    const height = 400;\n    const animate = useAnimationFunction(\n      (timing) => {\n        if (!ref.current) return;\n        const ctx =\n          ctxRef.current || (ctxRef.current = ref.current.getContext("2d")!);\n        ctx.clearRect(0, 0, width, height);\n        const fillStyle = ["red", "blue", "green"][timing.currentIteration % 3];\n        ctx.fillStyle = fillStyle;\n        ctx.font = ctx.font.replace(\n          /\\d+px/,\n          `${Math.floor(timing.progress * 50)}px`\n        );\n        ctx.fillText(fillStyle, 40, 80);\n        ctx.beginPath();\n        ctx.arc(width / 2, height / 2, 50 * timing.progress, 0, Math.PI * 2);\n        ctx.fill();\n      },\n      {\n        easing: "ease-in-out",\n        duration: 1000,\n        iterations: Infinity,\n      }\n    );\n\n    useEffect(() => {\n      animate.play();\n    }, [animate]);\n\n    return <canvas ref={ref} width={width} height={height} />;\n  },\n};\n',locationsMap:{text:{startLoc:{col:30,line:7},endLoc:{col:1,line:43},startBody:{col:30,line:7},endBody:{col:1,line:43}},progress:{startLoc:{col:34,line:45},endLoc:{col:1,line:86},startBody:{col:34,line:45},endBody:{col:1,line:86}},canvas:{startLoc:{col:32,line:88},endLoc:{col:1,line:124},startBody:{col:32,line:88},endBody:{col:1,line:124}}}}},component:useAnimationFunction},Text={render:()=>{const[enable,setEnable]=(0,react.useState)(!0),[time,setTime]=(0,react.useState)(0),animate=useAnimationFunction((({progress})=>{setTime(progress)}),{duration:1e3,easing:"ease-in-out",iterations:1/0,direction:"alternate"});(0,react.useEffect)((()=>{animate.play()}),[animate]);const onClick=(0,react.useCallback)((()=>{setEnable((p=>!p)),enable?animate.pause():animate.play()}),[animate,enable]);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onClick,children:enable?"stop":"start"}),(0,jsx_runtime.jsx)("div",{children:time.toFixed(6)})]})}},Progress={render:()=>{const[value,setValue]=(0,react.useState)(0),animate=useAnimationFunction((({progress},arg)=>{setValue(arg.start*(1-progress)+progress*arg.end)}),{duration:600,easing:"ease-in-out"});return(0,react.useEffect)((()=>{animate.play({args:{start:value,end:100*Math.random()}})}),[]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("progress",{value,max:100,style:{width:600}})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onClick:()=>animate.play({args:{start:value,end:0}}),children:"0%"}),(0,jsx_runtime.jsx)("button",{onClick:()=>animate.play({args:{start:value,end:50}}),children:"50%"}),(0,jsx_runtime.jsx)("button",{onClick:()=>animate.play({args:{start:value,end:100}}),children:"100%"})]})]})}},Canvas={render:()=>{const ref=(0,react.useRef)(null),ctxRef=(0,react.useRef)(null),animate=useAnimationFunction((timing=>{if(!ref.current)return;const ctx=ctxRef.current||(ctxRef.current=ref.current.getContext("2d"));ctx.clearRect(0,0,400,400);const fillStyle=["red","blue","green"][timing.currentIteration%3];ctx.fillStyle=fillStyle,ctx.font=ctx.font.replace(/\d+px/,`${Math.floor(50*timing.progress)}px`),ctx.fillText(fillStyle,40,80),ctx.beginPath(),ctx.arc(200,200,50*timing.progress,0,2*Math.PI),ctx.fill()}),{easing:"ease-in-out",duration:1e3,iterations:1/0});return(0,react.useEffect)((()=>{animate.play()}),[animate]),(0,jsx_runtime.jsx)("canvas",{ref,width:400,height:400})}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/core/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Iq:()=>isSameObject,RR:()=>getKeys,ZT:()=>noop,bT:()=>isSameObjectArray,f0:()=>assign,qo:()=>toArray});const noop=()=>{},getKeys=Object.keys,assign=Object.assign,isArray=Array.isArray,getStyle=e=>getComputedStyle(e),isSameObject=(target={},prev={})=>{const keys=getKeys(target);return keys.length===getKeys(prev).length&&keys.every((k=>target[k]===prev[k]))},isSameObjectArray=(target,prev)=>target.length===prev.length&&target.every(((t,i)=>isSameObject(t,prev[i]))),toArray=items=>isArray(items)?items:[items]},"./src/core/waapi.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cz:()=>_finish,DR:()=>_waitFor,H9:()=>_cancel,K:()=>_setRate,KU:()=>_play,NU:()=>_pause,YQ:()=>_setTime,eo:()=>_reverse,ih:()=>createAnimation});const createAnimation=(el,keyframes,options)=>{const modifiedOptions={fill:"both",...options};try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions))}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=(animation,opts={})=>{animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,(p=>-p)),opts.restart&&_setTime(animation,0),animation.play()},_reverse=animation=>{animation&&animation.reverse()},_cancel=animation=>{animation&&animation.cancel()},_finish=animation=>{animation&&animation.finish()},_pause=animation=>{animation&&animation.pause()},_setTime=(animation,arg)=>{animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=(animation,arg)=>{animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=(animation,name)=>animation?new Promise((resolve=>{animation.onfinish=()=>{("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}})):Promise.resolve()},"./src/react/hooks/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/react/hooks/useLatestRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useLatestRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/react/hooks/useIsomorphicLayoutEffect.ts");const useLatestRef=value=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.L)((()=>{ref.current=value}),[value]),ref}},"./src/react/hooks/useStatic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useStatic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useStatic=init=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref.current||(ref.current=init())}}}]);