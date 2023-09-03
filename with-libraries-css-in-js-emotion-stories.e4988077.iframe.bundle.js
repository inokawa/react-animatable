"use strict";(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[681],{"./stories/with-libraries/css-in-js/emotion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>emotion_stories});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./src/index.ts"),emotion_cache_browser_esm=__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),emotion_serialize_browser_esm=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),emotion_utils_browser_esm=__webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");function insertWithoutScoping(cache,serialized){if(void 0===cache.inserted[serialized.name])return cache.insert("",serialized,cache.sheet,!0)}function merge(registered,css,className){var registeredStyles=[],rawClassName=(0,emotion_utils_browser_esm.fp)(registered,registeredStyles,className);return registeredStyles.length<2?className:rawClassName+css(registeredStyles)}var classnames=function classnames2(args){for(var cls="",i=0;i<args.length;i++){var arg=args[i];if(null!=arg){var toAdd=void 0;switch(typeof arg){case"boolean":break;case"object":if(Array.isArray(arg))toAdd=classnames2(arg);else for(var k in toAdd="",arg)arg[k]&&k&&(toAdd&&(toAdd+=" "),toAdd+=k);break;default:toAdd=arg}toAdd&&(cls&&(cls+=" "),cls+=toAdd)}}return cls};const emotion_css_create_instance_esm=function createEmotion2(options){var cache=(0,emotion_cache_browser_esm.Z)(options);cache.sheet.speedy=function(value){this.isSpeedy=value},cache.compat=!0;var css=function css2(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var serialized=(0,emotion_serialize_browser_esm.O)(args,cache.registered,void 0);return(0,emotion_utils_browser_esm.My)(cache,serialized,!1),cache.key+"-"+serialized.name};return{css,cx:function cx2(){for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++)args[_key4]=arguments[_key4];return merge(cache.registered,css,classnames(args))},injectGlobal:function injectGlobal2(){for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++)args[_key3]=arguments[_key3];var serialized=(0,emotion_serialize_browser_esm.O)(args,cache.registered);insertWithoutScoping(cache,serialized)},keyframes:function keyframes2(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];var serialized=(0,emotion_serialize_browser_esm.O)(args,cache.registered),animation="animation-"+serialized.name;return insertWithoutScoping(cache,{name:serialized.name,styles:"@keyframes "+animation+"{"+serialized.styles+"}"}),animation},hydrate:function hydrate(ids){ids.forEach((function(key){cache.inserted[key]=!0}))},flush:function flush(){cache.registered={},cache.inserted={},cache.sheet.flush()},sheet:cache.sheet,cache,getRegisteredStyles:emotion_utils_browser_esm.fp.bind(null,cache.registered),merge:merge.bind(null,cache.registered,css)}};var _createEmotion=emotion_css_create_instance_esm({key:"css"}),css=(_createEmotion.flush,_createEmotion.hydrate,_createEmotion.cx,_createEmotion.merge,_createEmotion.getRegisteredStyles,_createEmotion.injectGlobal,_createEmotion.keyframes,_createEmotion.css);_createEmotion.sheet,_createEmotion.cache;const emotion_stories={parameters:{storySource:{source:'import { StoryObj } from "@storybook/react";\nimport React, { useEffect } from "react";\nimport { useAnimation } from "../../../src";\nimport { css } from "@emotion/css";\n\nexport default { component: useAnimation };\n\nexport const Default: StoryObj = {\n  render: () => {\n    const animate = useAnimation(\n      [\n        { transform: "rotate(0deg)", borderRadius: "1rem" },\n        { transform: "rotate(360deg)", borderRadius: "50%" },\n        { transform: "rotate(720deg)", borderRadius: "1rem" },\n      ],\n      {\n        duration: 1000,\n        iterations: Infinity,\n        easing: "ease-in-out",\n      }\n    );\n\n    useEffect(() => {\n      animate.play();\n    }, []);\n\n    return (\n      <div\n        ref={animate}\n        className={css({\n          border: "solid 0.1rem #135569",\n          height: "6rem",\n          width: "6rem",\n          margin: "2rem 0 2rem 2rem",\n        })}\n        onMouseEnter={() => {\n          animate.pause();\n        }}\n        onMouseLeave={() => {\n          animate.play();\n        }}\n      />\n    );\n  },\n};\n',locationsMap:{default:{startLoc:{col:33,line:8},endLoc:{col:1,line:45},startBody:{col:33,line:8},endBody:{col:1,line:45}}}}},component:src.useAnimation},Default={render:()=>{const animate=(0,src.useAnimation)([{transform:"rotate(0deg)",borderRadius:"1rem"},{transform:"rotate(360deg)",borderRadius:"50%"},{transform:"rotate(720deg)",borderRadius:"1rem"}],{duration:1e3,iterations:1/0,easing:"ease-in-out"});return(0,react.useEffect)((()=>{animate.play()}),[]),react.createElement("div",{ref:animate,className:css({border:"solid 0.1rem #135569",height:"6rem",width:"6rem",margin:"2rem 0 2rem 2rem"}),onMouseEnter:()=>{animate.pause()},onMouseLeave:()=>{animate.play()}})}}},"./src/core/index.ts":()=>{},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TransitionGroup:()=>_react__WEBPACK_IMPORTED_MODULE_1__.TransitionGroup,useAnimation:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useAnimation,useAnimationFunction:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useAnimationFunction,useTransitionAnimation:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useTransitionAnimation});var _core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/index.ts");__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"TransitionGroup")&&__webpack_require__.d(__webpack_exports__,{TransitionGroup:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useAnimation")&&__webpack_require__.d(__webpack_exports__,{useAnimation:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useAnimation}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useAnimationFunction")&&__webpack_require__.d(__webpack_exports__,{useAnimationFunction:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useAnimationFunction}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useTransitionAnimation")&&__webpack_require__.d(__webpack_exports__,{useTransitionAnimation:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useTransitionAnimation}});var _react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/react/index.ts")},"./src/react/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TransitionGroup:()=>TransitionGroup,useAnimation:()=>useAnimation,useAnimationFunction:()=>useAnimationFunction,useTransitionAnimation:()=>useTransitionAnimation});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");const utils_getKeys=Object.keys,utils_assign=Object.assign,isArray=Array.isArray,isSameObject=(target={},prev={})=>{const keys=utils_getKeys(target);return keys.length===utils_getKeys(prev).length&&keys.every((k=>target[k]===prev[k]))},toMap=elements=>elements.reduce(((acc,e,i)=>(acc[e.key||i]=e,acc)),{}),TransitionStateContext=(0,react.createContext)("update"),TransitionNotifierContext=(0,react.createContext)((()=>{})),Provider=({_state:state,_element:element})=>{const[show,setShow]=(0,react.useState)(!0),hasExitRef=(0,react.useRef)(!1),showChildren="exit"!==state||!!hasExitRef.current&&show;return(0,react.useEffect)((()=>{"enter"===state&&setShow(!0)}),[state]),(0,jsx_runtime.jsx)(TransitionStateContext.Provider,{value:state,children:(0,jsx_runtime.jsx)(TransitionNotifierContext.Provider,{value:(0,react.useCallback)((s=>{2===s?setShow(!1):hasExitRef.current=1===s}),[]),children:showChildren?element:null})})},TransitionGroup=({children})=>{const elemsRef=(0,react.useRef)(null),prevElems=elemsRef.current||[],elems=react.Children.map(children,(c=>c));(0,react.useEffect)((()=>{elemsRef.current=elems}));const elemsByKey=toMap(elems),prevElemsByKey=toMap(prevElems),res=[];return prevElems.forEach(((v,i)=>{const key=v.key||i;elemsByKey[key]?res.push((0,jsx_runtime.jsx)(Provider,{_state:"update",_element:elemsByKey[key]},key)):res.push((0,jsx_runtime.jsx)(Provider,{_state:"exit",_element:v},key))})),elems.forEach(((v,i)=>{const key=v.key||i;prevElemsByKey[key]||res.push((0,jsx_runtime.jsx)(Provider,{_state:"enter",_element:v},key))})),(0,jsx_runtime.jsx)(react.Fragment,{children:res})},createAnimation=(el,keyframes,options)=>{const modifiedOptions={fill:"both",...options};try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions))}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=(animation,opts={})=>{animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,(p=>-p)),opts.restart&&_setTime(animation,0),animation.play()},_reverse=animation=>{animation&&animation.reverse()},_cancel=animation=>{animation&&animation.cancel()},_finish=animation=>{animation&&animation.finish()},_pause=animation=>{animation&&animation.pause()},_setTime=(animation,arg)=>{animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=(animation,arg)=>{animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=(animation,name)=>animation?new Promise((resolve=>{animation.onfinish=()=>{("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}})):Promise.resolve(),useStatic=init=>{const ref=(0,react.useRef)();return ref.current||(ref.current=init())},useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect,useLatestRef=value=>{const ref=(0,react.useRef)(value);return useIsomorphicLayoutEffect((()=>{ref.current=value}),[value]),ref},animations=new WeakMap,getAnimation=target=>animations.get(target),isEqual=(targetKeyframes,targetOptions,keyframes,options)=>{return prev=targetKeyframes,(target=keyframes).length===prev.length&&target.every(((t,i)=>isSameObject(t,prev[i])))&&isSameObject(options,targetOptions);var target,prev},normalizeKeyframe=(el,keyframe,args)=>{return"function"==typeof keyframe?keyframe(getComputedStyle(el),args):isArray(items=keyframe)?items:[items];var items},useAnimation=(...args)=>{const argsRef=useLatestRef(args),[handle,mount]=useStatic((()=>{let _active,_target=null;const init=args2=>{if(!_target)return;const[keyframe,options]=argsRef.current,prevActive=_active;return((el,target,prevTarget)=>{const animation=prevTarget&&getAnimation(prevTarget);if(animation){if(animations.delete(prevTarget),isEqual(target._keyframes,target._options,prevTarget._keyframes,prevTarget._options))return animations.set(target,animation),animation;animation.cancel()}const newAnimation=createAnimation(el,target._keyframes,target._options);return animations.set(target,newAnimation),newAnimation})(_target,_active={_keyframes:normalizeKeyframe(_target,keyframe,args2),_options:options},prevActive)},clean=()=>{var target;_active&&(target=_active,getAnimation(target)?.cancel(),animations.delete(target))},externalHandle=utils_assign((ref=>{(_target=ref)||clean()}),{play:(...opts)=>{const animation=init((opts[0]||{}).args);return animation&&_play(animation),externalHandle},reverse:()=>(_active&&_reverse(getAnimation(_active)),externalHandle),cancel:()=>(_active&&_cancel(getAnimation(_active)),externalHandle),finish:()=>(_active&&_finish(getAnimation(_active)),externalHandle),pause:()=>(_active&&_pause(getAnimation(_active)),externalHandle),setTime:time=>{if(_active){let animation=getAnimation(_active);if(!animation){const[keyframe]=argsRef.current;if("function"==typeof keyframe)return externalHandle;animation=init(void 0)}_setTime(animation,time)}return externalHandle},setPlaybackRate:rate=>(_active&&_setRate(getAnimation(_active),rate),externalHandle),waitFor:event=>_waitFor(_active&&getAnimation(_active),event).then((()=>externalHandle))});return[externalHandle,()=>clean]}));return(0,react.useEffect)(mount,[]),handle},bindUpdateFunction=(animation,getUpdateFunction,args)=>{const update=()=>{const timing=animation.effect?.getComputedTiming();if(!timing)return;null!=timing.progress&&getUpdateFunction()(timing,args),"running"===animation.playState&&requestAnimationFrame(update)};animation.ready.then(update)},useAnimationFunction=(onUpdate,options)=>{const onUpdateRef=useLatestRef(onUpdate),optionsRef=useLatestRef(options),[handle,cleanup]=useStatic((()=>{const getOnUpdate=()=>onUpdateRef.current;let cache;const initAnimation=(opts={})=>{const options2=optionsRef.current;if(cache){const[prevAnimation,prevOptions]=cache;if(isSameObject(options2,prevOptions))return"running"!==prevAnimation.playState&&bindUpdateFunction(prevAnimation,getOnUpdate,opts.args),prevAnimation;prevAnimation.cancel()}const animation=createAnimation(null,null,options2);return bindUpdateFunction(animation,getOnUpdate,opts.args),cache=[animation,options2],animation},getAnimation=()=>cache?.[0],externalHandle={play:(...opts)=>(_play(initAnimation(opts[0]),opts[0]),externalHandle),reverse:()=>(_reverse(initAnimation()),externalHandle),cancel:()=>(_cancel(getAnimation()),externalHandle),finish:()=>(_finish(getAnimation()),externalHandle),pause:()=>(_pause(getAnimation()),externalHandle),setTime:time=>(_setTime(getAnimation(),time),externalHandle),setPlaybackRate:rate=>(_setRate(getAnimation(),rate),externalHandle),waitFor:event=>_waitFor(getAnimation(),event).then((()=>externalHandle))};return[externalHandle,externalHandle.cancel]}));return(0,react.useEffect)((()=>cleanup),[]),handle},useTransitionAnimation=keyframes=>{const keys=utils_getKeys(keyframes),animations=keys.reduce(((acc,k)=>{const def=keyframes[k];return def?(acc[k]=useAnimation(def[0],def[1]),acc):acc}),{}),animationsRef=useLatestRef(animations),[animation,cleanup]=useStatic((()=>{const forAllHandle=fn=>{utils_getKeys(animationsRef.current).forEach((name=>fn(animationsRef.current[name])))};return[ref=>{forAllHandle((h=>{h(ref)}))},()=>{forAllHandle((handle=>{handle.cancel()}))}]}));(0,react.useEffect)((()=>cleanup),[]);const currentState=(0,react.useContext)(TransitionStateContext),notify=(0,react.useContext)(TransitionNotifierContext);return useIsomorphicLayoutEffect((()=>{keys.includes("exit")?notify(1):notify(0)}),keys),useIsomorphicLayoutEffect((()=>{"update"===currentState&&animationsRef.current[currentState]?.play()})),useIsomorphicLayoutEffect((()=>{"update"!==currentState&&animationsRef.current[currentState]?.play().waitFor("finish").then((()=>{"exit"===currentState&&notify(2)})).catch((()=>{}))}),[currentState]),animation}}}]);