"use strict";(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[973],{"./stories/with-libraries/css-in-js/styled-components.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js")),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/react/hooks/useAnimation.ts"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_3__._},Comp=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
  border: solid 0.1rem #135569;
  height: 6rem;
  width: 6rem;
  margin: 2rem 0 2rem 2rem;
`,Default={render:()=>{const animate=(0,_src__WEBPACK_IMPORTED_MODULE_3__._)([{transform:"rotate(0deg)",borderRadius:"1rem"},{transform:"rotate(360deg)",borderRadius:"50%"},{transform:"rotate(720deg)",borderRadius:"1rem"}],{duration:1e3,iterations:1/0,easing:"ease-in-out"});return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{animate.play()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp,{ref:animate,onMouseEnter:()=>{animate.pause()},onMouseLeave:()=>{animate.play()}})}};Default.parameters={...Default.parameters,storySource:{source:'{\n  render: () => {\n    const animate = useAnimation([{\n      transform: "rotate(0deg)",\n      borderRadius: "1rem"\n    }, {\n      transform: "rotate(360deg)",\n      borderRadius: "50%"\n    }, {\n      transform: "rotate(720deg)",\n      borderRadius: "1rem"\n    }], {\n      duration: 1000,\n      iterations: Infinity,\n      easing: "ease-in-out"\n    });\n    useEffect(() => {\n      animate.play();\n    }, []);\n    return <Comp ref={animate} onMouseEnter={() => {\n      animate.pause();\n    }} onMouseLeave={() => {\n      animate.play();\n    }} />;\n  }\n}',...null==(_a=Default.parameters)?void 0:_a.storySource}}},"./src/core/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Iq:()=>isSameObject,RR:()=>getKeys,ZT:()=>noop,bT:()=>isSameObjectArray,f0:()=>assign,qo:()=>toArray});const noop=()=>{},getKeys=Object.keys,assign=Object.assign,isArray=Array.isArray,getStyle=e=>getComputedStyle(e),isSameObject=(target={},prev={})=>{const keys=getKeys(target);return keys.length===getKeys(prev).length&&keys.every((k=>target[k]===prev[k]))},isSameObjectArray=(target,prev)=>target.length===prev.length&&target.every(((t,i)=>isSameObject(t,prev[i]))),toArray=items=>isArray(items)?items:[items]},"./src/core/waapi.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cz:()=>_finish,DR:()=>_waitFor,H9:()=>_cancel,K:()=>_setRate,KU:()=>_play,NU:()=>_pause,YQ:()=>_setTime,eo:()=>_reverse,ih:()=>createAnimation,m7:()=>normalizeKeyframe});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/utils.ts");const normalizeKeyframe=(el,keyframe,args)=>"function"==typeof keyframe?keyframe((0,_utils__WEBPACK_IMPORTED_MODULE_0__.C2)(el),args):(0,_utils__WEBPACK_IMPORTED_MODULE_0__.qo)(keyframe),createAnimation=(el,keyframes,options)=>{const modifiedOptions={fill:"both",...options};try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions))}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=(animation,opts={})=>{animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,(p=>-p)),opts.restart&&_setTime(animation,0),animation.play()},_reverse=animation=>{animation&&animation.reverse()},_cancel=animation=>{animation&&animation.cancel()},_finish=animation=>{animation&&animation.finish()},_pause=animation=>{animation&&animation.pause()},_setTime=(animation,arg)=>{animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=(animation,arg)=>{animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=(animation,name)=>animation?new Promise((resolve=>{animation.onfinish=()=>{("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}})):Promise.resolve()},"./src/react/hooks/useAnimation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>useAnimation});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/core/utils.ts"),_core_waapi__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core/waapi.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/react/hooks/useIsomorphicLayoutEffect.ts");const useAnimation=(keyframe,options)=>{const keyframeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(keyframe),optionsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(options),[animation,cleanup]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>{let cache,target=null;const getAnimation=()=>null==cache?void 0:cache[0],externalHandle=(0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.f0)((ref=>{(target=ref)||(cache=void 0)}),{play:(...opts)=>target?((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.KU)(((el,opts={})=>{const keyframes=(0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.m7)(el,keyframeRef.current,opts.args),options2=optionsRef.current;if(cache){const[prevAnimation,prevKeyframes,prevOptions]=cache;if((0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.bT)(keyframes,prevKeyframes)&&(0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.Iq)(options2,prevOptions))return prevAnimation;prevAnimation.cancel()}const animation2=(0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.ih)(el,keyframes,options2);return cache=[animation2,keyframes,options2],animation2})(target,opts[0]),opts[0]),externalHandle):externalHandle,reverse:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.eo)(getAnimation()),externalHandle),cancel:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.H9)(getAnimation()),externalHandle),finish:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.Cz)(getAnimation()),externalHandle),pause:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.NU)(getAnimation()),externalHandle),setTime:time=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.YQ)(getAnimation(),time),externalHandle),setPlaybackRate:rate=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.K)(getAnimation(),rate),externalHandle),waitFor:event=>(0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.DR)(getAnimation(),event).then((()=>externalHandle))});return[externalHandle,externalHandle.cancel]}))[0];return(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.L)((()=>{keyframeRef.current=keyframe,optionsRef.current=options})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>cleanup),[]),animation}},"./src/react/hooks/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect}}]);
//# sourceMappingURL=with-libraries-css-in-js-styled-components-stories.2f90cf58.iframe.bundle.js.map