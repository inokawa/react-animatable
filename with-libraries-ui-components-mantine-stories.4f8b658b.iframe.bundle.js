"use strict";(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[32],{"./stories/with-libraries/ui-components/mantine.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mantine/core/esm/Button/Button.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/react/hooks/useAnimation.ts");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import { StoryObj } from "@storybook/react";\nimport React from "react";\nimport { MantineProvider, Button } from "@mantine/core";\nimport { useAnimation } from "../../../src";\n\nexport default { component: useAnimation };\n\nexport const Default: StoryObj = {\n  render: () => {\n    const animate = useAnimation(\n      [{ transform: "rotate(0deg)" }, { transform: "rotate(720deg)" }],\n      {\n        duration: 1000,\n        easing: "ease-in-out",\n      }\n    );\n\n    return (\n      <MantineProvider>\n        <Button\n          ref={animate}\n          onClick={() => {\n            animate.play();\n          }}\n        >\n          Click Me!\n        </Button>\n      </MantineProvider>\n    );\n  },\n};\n',locationsMap:{default:{startLoc:{col:33,line:8},endLoc:{col:1,line:31},startBody:{col:33,line:8},endBody:{col:1,line:31}}}}},component:_src__WEBPACK_IMPORTED_MODULE_1__._},Default={render:()=>{const animate=(0,_src__WEBPACK_IMPORTED_MODULE_1__._)([{transform:"rotate(0deg)"},{transform:"rotate(720deg)"}],{duration:1e3,easing:"ease-in-out"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Me,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.z,{ref:animate,onClick:()=>{animate.play()},children:"Click Me!"})})}}},"./src/core/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Iq:()=>isSameObject,RR:()=>getKeys,ZT:()=>noop,bT:()=>isSameObjectArray,f0:()=>assign,qo:()=>toArray});const noop=()=>{},getKeys=Object.keys,assign=Object.assign,isArray=Array.isArray,getStyle=e=>getComputedStyle(e),isSameObject=(target={},prev={})=>{const keys=getKeys(target);return keys.length===getKeys(prev).length&&keys.every((k=>target[k]===prev[k]))},isSameObjectArray=(target,prev)=>target.length===prev.length&&target.every(((t,i)=>isSameObject(t,prev[i]))),toArray=items=>isArray(items)?items:[items]},"./src/core/waapi.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cz:()=>_finish,DR:()=>_waitFor,H9:()=>_cancel,K:()=>_setRate,KU:()=>_play,NU:()=>_pause,YQ:()=>_setTime,eo:()=>_reverse,ih:()=>createAnimation});const createAnimation=(el,keyframes,options)=>{const modifiedOptions={fill:"both",...options};try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions))}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=(animation,opts={})=>{animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,(p=>-p)),opts.restart&&_setTime(animation,0),animation.play()},_reverse=animation=>{animation&&animation.reverse()},_cancel=animation=>{animation&&animation.cancel()},_finish=animation=>{animation&&animation.finish()},_pause=animation=>{animation&&animation.pause()},_setTime=(animation,arg)=>{animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=(animation,arg)=>{animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=(animation,name)=>animation?new Promise((resolve=>{animation.onfinish=()=>{("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}})):Promise.resolve()},"./src/react/hooks/useAnimation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>useAnimation});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_core_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core/utils.ts"),_core_waapi__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/core/waapi.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/react/hooks/useIsomorphicLayoutEffect.ts"),_useStatic__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/react/hooks/useStatic.ts");const normalizeKeyframe=(el,keyframe,args)=>"function"==typeof keyframe?keyframe((0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.C2)(el),args):(0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.qo)(keyframe);class AnimationState{_init(el,keyframes,options){if(this._active){if(this._isConditionSame(keyframes,options))return this._active._animation;this._active._animation.cancel()}return(this._active={_animation:(0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.ih)(el,keyframes,options),_keyframes:keyframes,_options:options})._animation}_isConditionSame(keyframes,options){return!!this._active&&((0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.bT)(keyframes,this._active._keyframes)&&(0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.Iq)(options,this._active._options))}_get(){var _a;return null==(_a=this._active)?void 0:_a._animation}_clear(){this._active&&(this._active._animation.cancel(),this._active=void 0)}}const useAnimation=(keyframe,options)=>{const keyframeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(keyframe),optionsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(options),[handle,s]=(0,_useStatic__WEBPACK_IMPORTED_MODULE_3__.T)((()=>{let target=null;const state=new AnimationState,externalHandle=(0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.f0)((ref=>{(target=ref)||state._clear()}),{play:(...opts)=>{if(!target)return externalHandle;const keyframes=normalizeKeyframe(target,keyframeRef.current,(opts[0]||{}).args);return(0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.KU)(state._init(target,keyframes,optionsRef.current),opts[0]),externalHandle},reverse:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.eo)(state._get()),externalHandle),cancel:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.H9)(state._get()),externalHandle),finish:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.Cz)(state._get()),externalHandle),pause:()=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.NU)(state._get()),externalHandle),setTime:time=>{let animation=state._get();if(!animation){if(!target||"function"==typeof keyframeRef.current)return externalHandle;const keyframes=normalizeKeyframe(target,keyframeRef.current,void 0);animation=state._init(target,keyframes,optionsRef.current)}return(0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.YQ)(animation,time),externalHandle},setPlaybackRate:rate=>((0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.K)(state._get(),rate),externalHandle),waitFor:event=>(0,_core_waapi__WEBPACK_IMPORTED_MODULE_2__.DR)(state._get(),event).then((()=>externalHandle))});return[externalHandle,state]}));return(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__.L)((()=>{keyframeRef.current=keyframe,optionsRef.current=options,(null==options?void 0:options.autoPlay)&&"function"!=typeof keyframe&&!s._isConditionSame((0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.qo)(keyframe),options)&&handle.play()})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>{s._clear()}),[]),handle}},"./src/react/hooks/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/react/hooks/useStatic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useStatic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useStatic=init=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref.current||(ref.current=init())}}}]);