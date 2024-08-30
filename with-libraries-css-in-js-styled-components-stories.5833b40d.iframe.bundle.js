"use strict";(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[314],{"./stories/with-libraries/css-in-js/styled-components.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/react/hooks/useAnimation.ts"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  border: solid 0.1rem #135569;\n  height: 6rem;\n  width: 6rem;\n  margin: 2rem 0 2rem 2rem;\n"]);return _templateObject=function _templateObject(){return data},data}const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.s};var Comp=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject()),Default={render:function(){var animate=(0,_src__WEBPACK_IMPORTED_MODULE_2__.s)([{transform:"rotate(0deg)",borderRadius:"1rem"},{transform:"rotate(360deg)",borderRadius:"50%"},{transform:"rotate(720deg)",borderRadius:"1rem"}],{duration:1e3,iterations:1/0,easing:"ease-in-out"});return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){animate.play()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp,{ref:animate,onMouseEnter:function(){animate.pause()},onMouseLeave:function(){animate.play()}})}};const __namedExportsOrder=["Default"]},"./src/core/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$r:()=>toArray,Gy:()=>isSameObject,gd:()=>getStyle,kp:()=>assign,lQ:()=>noop,xD:()=>getKeys,zD:()=>isSameObjectArray});var noop=function(){},getKeys=Object.keys,assign=Object.assign,isArray=Array.isArray,getStyle=function(e){return getComputedStyle(e)},isSameObject=function(){var target=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},prev=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},keys=getKeys(target);return keys.length===getKeys(prev).length&&keys.every((function(k){return target[k]===prev[k]}))},isSameObjectArray=function(target,prev){return target.length===prev.length&&target.every((function(t,i){return isSameObject(t,prev[i])}))},toArray=function(items){return isArray(items)?items:[items]}},"./src/core/waapi.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Gi:()=>_play,JI:()=>createAnimation,Ow:()=>_setRate,QK:()=>_waitFor,Yv:()=>_reverse,d8:()=>_finish,gJ:()=>_pause,nG:()=>_setTime,yw:()=>_cancel});var createAnimation=function(el,keyframes,options,timeline){var modifiedOptions=function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({fill:"both"},options);try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions),timeline)}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=function(animation){var opts=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,(function(p){return-p})),opts.restart&&_setTime(animation,0),animation.play()},_reverse=function(animation){animation&&animation.reverse()},_cancel=function(animation){animation&&animation.cancel()},_finish=function(animation){animation&&animation.finish()},_pause=function(animation){animation&&animation.pause()},_setTime=function(animation,arg){animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=function(animation,arg){animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=function(animation,name){return animation?new Promise((function(resolve){animation.onfinish=function(){("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}})):Promise.resolve()}},"./src/react/hooks/useAnimation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useAnimation});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/core/utils.ts"),waapi=__webpack_require__("./src/core/waapi.ts"),useStatic=__webpack_require__("./src/react/hooks/useStatic.ts"),useLatestRef=__webpack_require__("./src/react/hooks/useLatestRef.ts"),animations=new WeakMap,getAnimation=function(target){return animations.get(target)},initAnimation=function(el,target,prevTarget){var a,b,prevAnimation=prevTarget&&getAnimation(prevTarget);if(prevAnimation){if(animations.delete(prevTarget),a=target,b=prevTarget,(0,utils.zD)(a._keyframes,b._keyframes)&&(0,utils.Gy)(a._options,b._options))return animations.set(target,prevAnimation),prevAnimation;prevAnimation.cancel()}var animation=(0,waapi.JI)(el,target._keyframes,target._options,target._timeline);return animations.set(target,animation),animation};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var normalizeKeyframe=function(el,keyframe,args){return"function"==typeof keyframe?keyframe((0,utils.gd)(el),args):(0,utils.$r)(keyframe)},useAnimation=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var argsRef=(0,useLatestRef.S)(args),_useStatic=(0,useStatic.C)((function(){var _active,_target=null,init=function(args){if(_target){var _argsRef_current=_sliced_to_array(argsRef.current,2),keyframe=_argsRef_current[0],tmp=_argsRef_current[1],_options=void 0===tmp?{}:tmp,timeline=_options.timeline,options=_object_without_properties(_options,["timeline"]),prevActive=_active;return initAnimation(_target,_active={_keyframes:normalizeKeyframe(_target,keyframe,args),_options:options,_timeline:null==timeline?void 0:timeline._get()},prevActive)}},clean=function(){var target,_getAnimation;_active&&(null===(_getAnimation=getAnimation(target=_active))||void 0===_getAnimation||_getAnimation.cancel(),animations.delete(target))},externalHandle=(0,utils.kp)((function(ref){(_target=ref)||clean()}),{play:function(){for(var _len=arguments.length,opts=new Array(_len),_key=0;_key<_len;_key++)opts[_key]=arguments[_key];var animation=init((opts[0]||{}).args);return animation&&(0,waapi.Gi)(animation),externalHandle},reverse:function(){return _active&&(0,waapi.Yv)(getAnimation(_active)),externalHandle},cancel:function(){return _active&&(0,waapi.yw)(getAnimation(_active)),externalHandle},finish:function(){return _active&&(0,waapi.d8)(getAnimation(_active)),externalHandle},pause:function(){return _active&&(0,waapi.gJ)(getAnimation(_active)),externalHandle},setTime:function(time){var animation=_active&&getAnimation(_active);if(!animation){if("function"==typeof _sliced_to_array(argsRef.current,1)[0])return externalHandle;animation=init(void 0)}return(0,waapi.nG)(animation,time),externalHandle},setPlaybackRate:function(rate){return _active&&(0,waapi.Ow)(getAnimation(_active),rate),externalHandle},waitFor:function(event){return(0,waapi.QK)(_active&&getAnimation(_active),event).then((function(){return externalHandle}))}});return[externalHandle,function(){return clean}]})),_useStatic1=_sliced_to_array(_useStatic,2),handle=_useStatic1[0],mount=_useStatic1[1];return(0,react.useEffect)(mount,[]),handle}},"./src/react/hooks/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/react/hooks/useLatestRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>useLatestRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/react/hooks/useIsomorphicLayoutEffect.ts"),useLatestRef=function(value){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.E)((function(){ref.current=value}),[value]),ref}},"./src/react/hooks/useStatic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>useStatic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useStatic=function(init){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref.current||(ref.current=init())}}}]);