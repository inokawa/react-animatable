"use strict";(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[920],{"./stories/with-libraries/ui-components/Chakra UI.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,_b,_c,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@chakra-ui/react/dist/chunk-BOJQWC4N.mjs")),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-6ZQPWYNL.mjs"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/react/hooks/useAnimation.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_3__._},Default={render:()=>{const animate=(0,_src__WEBPACK_IMPORTED_MODULE_3__._)([{transform:"rotate(0deg)"},{transform:"rotate(720deg)"}],{duration:1e3,easing:"ease-in-out"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.x,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.z,{ref:animate,colorScheme:"teal",onClick:()=>{animate.play()},children:"Click Me!"})})}};Default.parameters={...Default.parameters,docs:{...null==(_a=Default.parameters)?void 0:_a.docs,source:{originalSource:'{\n  render: () => {\n    const animate = useAnimation([{\n      transform: "rotate(0deg)"\n    }, {\n      transform: "rotate(720deg)"\n    }], {\n      duration: 1000,\n      easing: "ease-in-out"\n    });\n    return <ChakraProvider>\n        <Button ref={animate} colorScheme="teal" onClick={() => {\n        animate.play();\n      }}>\n          Click Me!\n        </Button>\n      </ChakraProvider>;\n  }\n}',...null==(_c=null==(_b=Default.parameters)?void 0:_b.docs)?void 0:_c.source}}}},"./src/core/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Iq:()=>isSameObject,RR:()=>getKeys,ZT:()=>noop,bT:()=>isSameObjectArray,f0:()=>assign,qo:()=>toArray});const noop=()=>{},getKeys=Object.keys,assign=Object.assign,isArray=Array.isArray,getStyle=e=>getComputedStyle(e),isSameObject=(target={},prev={})=>{const keys=getKeys(target);return keys.length===getKeys(prev).length&&keys.every((k=>target[k]===prev[k]))},isSameObjectArray=(target,prev)=>target.length===prev.length&&target.every(((t,i)=>isSameObject(t,prev[i]))),toArray=items=>isArray(items)?items:[items]},"./src/core/waapi.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cz:()=>_finish,DR:()=>_waitFor,H9:()=>_cancel,K:()=>_setRate,KU:()=>_play,NU:()=>_pause,YQ:()=>_setTime,eo:()=>_reverse,ih:()=>createAnimation,m7:()=>normalizeKeyframe});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/utils.ts");const normalizeKeyframe=(el,keyframe,args)=>"function"==typeof keyframe?keyframe((0,_utils__WEBPACK_IMPORTED_MODULE_0__.C2)(el),args):(0,_utils__WEBPACK_IMPORTED_MODULE_0__.qo)(keyframe),createAnimation=(el,keyframes,options)=>{const modifiedOptions={fill:"both",...options};try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions))}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=(animation,opts={})=>{animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,(p=>-p)),opts.restart&&_setTime(animation,0),animation.play()},_reverse=animation=>{animation&&animation.reverse()},_cancel=animation=>{animation&&animation.cancel()},_finish=animation=>{animation&&animation.finish()},_pause=animation=>{animation&&animation.pause()},_setTime=(animation,arg)=>{animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=(animation,arg)=>{animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=(animation,name)=>animation?new Promise((resolve=>{animation.onfinish=()=>{("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}})):Promise.resolve()},"./src/react/hooks/useAnimation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>useAnimation});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/core/utils.ts"),_core_waapi__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core/waapi.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/react/hooks/useIsomorphicLayoutEffect.ts");const useAnimation=(keyframe,options)=>{const keyframeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(keyframe),optionsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(options),handleRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[handle,cleanup]=handleRef.current||(handleRef.current=(()=>{let cache,target=null;const getAnimation=()=>null==cache?void 0:cache[0],externalHandle=(0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.f0)((ref=>{(target=ref)||(cache=void 0)}),{play:opts=>target?((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.KU)(((el,args)=>{const keyframes=(0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.m7)(el,keyframeRef.current,args),options2=optionsRef.current;if(cache){const[prevAnimation,prevKeyframes,prevOptions]=cache;if((0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.bT)(keyframes,prevKeyframes)&&(0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.Iq)(options2,prevOptions))return prevAnimation;prevAnimation.cancel()}const animation=(0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.ih)(el,keyframes,options2);return cache=[animation,keyframes,options2],animation})(target,opts.args),opts),externalHandle):externalHandle,reverse:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.eo)(getAnimation()),externalHandle),cancel:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.H9)(getAnimation()),externalHandle),finish:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.Cz)(getAnimation()),externalHandle),pause:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.NU)(getAnimation()),externalHandle),setTime:time=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.YQ)(getAnimation(),time),externalHandle),setPlaybackRate:rate=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.K)(getAnimation(),rate),externalHandle),waitFor:event=>(0,_core_waapi__WEBPACK_IMPORTED_MODULE_1__.DR)(getAnimation(),event).then((()=>externalHandle))});return[externalHandle,externalHandle.cancel]})());return(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.L)((()=>{keyframeRef.current=keyframe,optionsRef.current=options})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>cleanup),[]),handle}},"./src/react/hooks/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect}}]);