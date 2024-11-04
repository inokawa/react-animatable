"use strict";(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[314],{"./stories/with-libraries/css-in-js/styled-components.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/react/hooks/useAnimation.ts"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.s},Comp=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div`
  border: solid 0.1rem #135569;
  height: 6rem;
  width: 6rem;
  margin: 2rem 0 2rem 2rem;
`,Default={render:()=>{const animate=(0,_src__WEBPACK_IMPORTED_MODULE_2__.s)([{transform:"rotate(0deg)",borderRadius:"1rem"},{transform:"rotate(360deg)",borderRadius:"50%"},{transform:"rotate(720deg)",borderRadius:"1rem"}],{duration:1e3,iterations:1/0,easing:"ease-in-out"});return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{animate.play()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp,{ref:animate,onMouseEnter:()=>{animate.pause()},onMouseLeave:()=>{animate.play()}})}},__namedExportsOrder=["Default"]},"./src/core/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$r:()=>toArray,Gy:()=>isSameObject,gd:()=>getStyle,kp:()=>assign,lQ:()=>noop,xD:()=>getKeys,zD:()=>isSameObjectArray});const noop=()=>{},getKeys=Object.keys,assign=Object.assign,isArray=Array.isArray,getStyle=e=>getComputedStyle(e),isSameObject=(target={},prev={})=>{const keys=getKeys(target);return keys.length===getKeys(prev).length&&keys.every((k=>target[k]===prev[k]))},isSameObjectArray=(target,prev)=>target.length===prev.length&&target.every(((t,i)=>isSameObject(t,prev[i]))),toArray=items=>isArray(items)?items:[items]},"./src/core/waapi.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gi:()=>_play,JI:()=>createAnimation,Ow:()=>_setRate,QK:()=>_waitFor,Yv:()=>_reverse,d8:()=>_finish,gJ:()=>_pause,nG:()=>_setTime,yw:()=>_cancel});const createAnimation=(el,keyframes,options,timeline)=>{const modifiedOptions={fill:"both",...options};try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions),timeline)}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=(animation,opts={})=>{animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,(p=>-p)),opts.restart&&_setTime(animation,0),animation.play()},_reverse=animation=>{animation&&animation.reverse()},_cancel=animation=>{animation&&animation.cancel()},_finish=animation=>{animation&&animation.finish()},_pause=animation=>{animation&&animation.pause()},_setTime=(animation,arg)=>{animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=(animation,arg)=>{animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=(animation,name)=>animation?new Promise((resolve=>{animation.onfinish=()=>{("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}})):Promise.resolve()},"./src/react/hooks/useAnimation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useAnimation});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/core/utils.ts"),waapi=__webpack_require__("./src/core/waapi.ts"),useStatic=__webpack_require__("./src/react/hooks/useStatic.ts"),useLatestRef=__webpack_require__("./src/react/hooks/useLatestRef.ts");const animations=new WeakMap,getAnimation=target=>animations.get(target),initAnimation=(el,target,prevTarget)=>{const prevAnimation=prevTarget&&getAnimation(prevTarget);if(prevAnimation){if(animations.delete(prevTarget),a=target,b=prevTarget,(0,utils.zD)(a._keyframes,b._keyframes)&&(0,utils.Gy)(a._options,b._options))return animations.set(target,prevAnimation),prevAnimation;prevAnimation.cancel()}var a,b;const animation=(0,waapi.JI)(el,target._keyframes,target._options,target._timeline);return animations.set(target,animation),animation},normalizeKeyframe=(el,keyframe,args)=>"function"==typeof keyframe?keyframe((0,utils.gd)(el),args):(0,utils.$r)(keyframe),useAnimation=(...args)=>{const argsRef=(0,useLatestRef.S)(args),[handle,mount]=(0,useStatic.C)((()=>{let _active,_target=null;const init=args=>{if(!_target)return;const[keyframe,_options={}]=argsRef.current,{timeline,...options}=_options,prevActive=_active;return initAnimation(_target,_active={_keyframes:normalizeKeyframe(_target,keyframe,args),_options:options,_timeline:timeline?._get()},prevActive)},clean=()=>{var target;_active&&(target=_active,getAnimation(target)?.cancel(),animations.delete(target))},externalHandle=(0,utils.kp)((ref=>{(_target=ref)||clean()}),{play:(...opts)=>{const animation=init((opts[0]||{}).args);return animation&&(0,waapi.Gi)(animation),externalHandle},reverse:()=>(_active&&(0,waapi.Yv)(getAnimation(_active)),externalHandle),cancel:()=>(_active&&(0,waapi.yw)(getAnimation(_active)),externalHandle),finish:()=>(_active&&(0,waapi.d8)(getAnimation(_active)),externalHandle),pause:()=>(_active&&(0,waapi.gJ)(getAnimation(_active)),externalHandle),setTime:time=>{let animation=_active&&getAnimation(_active);if(!animation){const[keyframe]=argsRef.current;if("function"==typeof keyframe)return externalHandle;animation=init(void 0)}return(0,waapi.nG)(animation,time),externalHandle},setPlaybackRate:rate=>(_active&&(0,waapi.Ow)(getAnimation(_active),rate),externalHandle),waitFor:event=>(0,waapi.QK)(_active&&getAnimation(_active),event).then((()=>externalHandle))});return[externalHandle,()=>clean]}));return(0,react.useEffect)(mount,[]),handle}},"./src/react/hooks/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/react/hooks/useLatestRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>useLatestRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/react/hooks/useIsomorphicLayoutEffect.ts");const useLatestRef=value=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.E)((()=>{ref.current=value}),[value]),ref}},"./src/react/hooks/useStatic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>useStatic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useStatic=init=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref.current||(ref.current=init())}}}]);
//# sourceMappingURL=with-libraries-css-in-js-styled-components-stories.bd7968b8.iframe.bundle.js.map