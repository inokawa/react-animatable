"use strict";(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[10],{"./stories/with-libraries/ui-components/Fluent UI.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/react/lib/components/Button/PrimaryButton/PrimaryButton.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/react/hooks/useAnimation.ts");let __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import { StoryObj } from "@storybook/react";\nimport React from "react";\nimport { PrimaryButton } from "@fluentui/react";\nimport { useAnimation } from "../../../src";\n\nexport default { component: useAnimation };\n\nexport const Default: StoryObj = {\n  render: () => {\n    const animate = useAnimation(\n      [{ transform: "rotate(0deg)" }, { transform: "rotate(720deg)" }],\n      {\n        duration: 1000,\n        easing: "ease-in-out",\n      }\n    );\n\n    return (\n      <PrimaryButton\n        elementRef={animate}\n        onClick={() => {\n          animate.play();\n        }}\n      >\n        Click Me!\n      </PrimaryButton>\n    );\n  },\n};\n',locationsMap:{default:{startLoc:{col:33,line:8},endLoc:{col:1,line:29},startBody:{col:33,line:8},endBody:{col:1,line:29}}}}},component:_src__WEBPACK_IMPORTED_MODULE_2__._};var Default={render:function(){var animate=(0,_src__WEBPACK_IMPORTED_MODULE_2__._)([{transform:"rotate(0deg)"},{transform:"rotate(720deg)"}],{duration:1e3,easing:"ease-in-out"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.K,{elementRef:animate,onClick:function(){animate.play()},children:"Click Me!"})}};let __namedExportsOrder=["Default"]},"./src/core/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C2:()=>getStyle,Iq:()=>isSameObject,RR:()=>getKeys,ZT:()=>noop,bT:()=>isSameObjectArray,f0:()=>assign,qo:()=>toArray});var noop=function(){},getKeys=Object.keys,assign=Object.assign,isArray=Array.isArray,getStyle=function(e){return getComputedStyle(e)},isSameObject=function(){var target=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},prev=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},keys=getKeys(target);return keys.length===getKeys(prev).length&&keys.every(function(k){return target[k]===prev[k]})},isSameObjectArray=function(target,prev){return target.length===prev.length&&target.every(function(t,i){return isSameObject(t,prev[i])})},toArray=function(items){return isArray(items)?items:[items]}},"./src/core/waapi.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cz:()=>_finish,DR:()=>_waitFor,H9:()=>_cancel,K:()=>_setRate,KU:()=>_play,NU:()=>_pause,YQ:()=>_setTime,eo:()=>_reverse,ih:()=>createAnimation});var createAnimation=function(el,keyframes,options,timeline){var modifiedOptions=function(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){var value;value=source[key],key in target?Object.defineProperty(target,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):target[key]=value})}return target}({fill:"both"},options);try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions),timeline)}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=function(animation){var opts=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,function(p){return-p}),opts.restart&&_setTime(animation,0),animation.play()},_reverse=function(animation){animation&&animation.reverse()},_cancel=function(animation){animation&&animation.cancel()},_finish=function(animation){animation&&animation.finish()},_pause=function(animation){animation&&animation.pause()},_setTime=function(animation,arg){animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=function(animation,arg){animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=function(animation,name){return animation?new Promise(function(resolve){animation.onfinish=function(){("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}}):Promise.resolve()}},"./src/react/hooks/useAnimation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>useAnimation});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/core/utils.ts"),waapi=__webpack_require__("./src/core/waapi.ts"),useStatic=__webpack_require__("./src/react/hooks/useStatic.ts"),useLatestRef=__webpack_require__("./src/react/hooks/useLatestRef.ts"),animations=new WeakMap,getAnimation=function(target){return animations.get(target)},deleteAnimation=function(target){var _getAnimation;null===(_getAnimation=getAnimation(target))||void 0===_getAnimation||_getAnimation.cancel(),animations.delete(target)},initAnimation=function(el,target,prevTarget){var prevAnimation=prevTarget&&getAnimation(prevTarget);if(prevAnimation){if(animations.delete(prevTarget),(0,utils.bT)(target._keyframes,prevTarget._keyframes)&&(0,utils.Iq)(target._options,prevTarget._options))return animations.set(target,prevAnimation),prevAnimation;prevAnimation.cancel()}var animation=(0,waapi.ih)(el,target._keyframes,target._options,target._timeline);return animations.set(target,animation),animation};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function(arr){if(Array.isArray(arr))return arr}(arr)||function(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}(arr,i)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var useAnimation=function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var argsRef=(0,useLatestRef.I)(args),_useStatic=(0,useStatic.T)(function(){var _active,_target=null,init=function(args){if(_target){var el,_argsRef_current=_sliced_to_array(argsRef.current,2),keyframe=_argsRef_current[0],tmp=_argsRef_current[1],_options=void 0===tmp?{}:tmp,timeline=_options.timeline,options=function(source,excluded){if(null==source)return{};var key,i,target=function(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}(_options,["timeline"]),prevActive=_active;return initAnimation(_target,_active={_keyframes:(el=_target,"function"==typeof keyframe?keyframe((0,utils.C2)(el),args):(0,utils.qo)(keyframe)),_options:options,_timeline:null==timeline?void 0:timeline._get()},prevActive)}},clean=function(){_active&&deleteAnimation(_active)},externalHandle=(0,utils.f0)(function(ref){(_target=ref)||clean()},{play:function(){for(var _len=arguments.length,opts=Array(_len),_key=0;_key<_len;_key++)opts[_key]=arguments[_key];var animation=init((opts[0]||{}).args);return animation&&(0,waapi.KU)(animation),externalHandle},reverse:function(){return _active&&(0,waapi.eo)(getAnimation(_active)),externalHandle},cancel:function(){return _active&&(0,waapi.H9)(getAnimation(_active)),externalHandle},finish:function(){return _active&&(0,waapi.Cz)(getAnimation(_active)),externalHandle},pause:function(){return _active&&(0,waapi.NU)(getAnimation(_active)),externalHandle},setTime:function(time){var animation=_active&&getAnimation(_active);if(!animation){if("function"==typeof _sliced_to_array(argsRef.current,1)[0])return externalHandle;animation=init(void 0)}return(0,waapi.YQ)(animation,time),externalHandle},setPlaybackRate:function(rate){return _active&&(0,waapi.K)(getAnimation(_active),rate),externalHandle},waitFor:function(event){return(0,waapi.DR)(_active&&getAnimation(_active),event).then(function(){return externalHandle})}});return[externalHandle,function(){return clean}]}),_useStatic1=_sliced_to_array(_useStatic,2),handle=_useStatic1[0],mount=_useStatic1[1];return(0,react.useEffect)(mount,[]),handle}},"./src/react/hooks/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/react/hooks/useLatestRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useLatestRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/react/hooks/useIsomorphicLayoutEffect.ts"),useLatestRef=function(value){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.L)(function(){ref.current=value},[value]),ref}},"./src/react/hooks/useStatic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useStatic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useStatic=function(init){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref.current||(ref.current=init())}}}]);