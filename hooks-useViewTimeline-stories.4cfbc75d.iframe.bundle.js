/*! For license information please see hooks-useViewTimeline-stories.4cfbc75d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[565],{"./stories/hooks/useViewTimeline.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Document:()=>Document,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import { StoryObj } from "@storybook/react";\nimport React, { useEffect } from "react";\nimport { useAnimation, useViewTimeline } from "../../src";\n\nexport default { component: useViewTimeline };\n\nexport const Document: StoryObj = {\n  render: () => {\n    const animate = useAnimation(\n      [\n        { opacity: 0, transform: "scaleX(0)" },\n        { opacity: 1, transform: "scaleX(1)" },\n      ],\n      {\n        duration: 200,\n        timeline: useViewTimeline(),\n      }\n    );\n    useEffect(() => {\n      animate.play();\n    }, []);\n\n    return (\n      <div style={{ width: 200 }}>\n        <h1>Content</h1>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis\n          varius quam quisque id. Et ligula ullamcorper malesuada proin libero\n          nunc consequat interdum varius. Elit ullamcorper dignissim cras\n          tincidunt lobortis feugiat vivamus at augue.\n        </p>\n        <p>\n          Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam\n          vulputate dignissim. Tortor aliquam nulla facilisi cras. A erat nam at\n          lectus urna duis convallis convallis. Nibh ipsum consequat nisl vel\n          pretium lectus. Sagittis aliquam malesuada bibendum arcu vitae\n          elementum. Malesuada bibendum arcu vitae elementum curabitur vitae\n          nunc sed velit.\n        </p>\n        <div\n          ref={animate}\n          style={{\n            width: 300,\n            height: 200,\n            margin: "0 auto",\n            backgroundColor: "deeppink",\n          }}\n        />\n        <p>\n          Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac.\n          Arcu cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus\n          sit amet dictum. Augue neque gravida in fermentum et. Gravida rutrum\n          quisque non tellus orci ac auctor augue mauris. Risus quis varius quam\n          quisque id diam vel quam elementum. Nibh praesent tristique magna sit\n          amet purus gravida quis. Duis ultricies lacus sed turpis tincidunt id\n          aliquet. In egestas erat imperdiet sed euismod nisi. Eget egestas\n          purus viverra accumsan in nisl nisi scelerisque. Netus et malesuada\n          fames ac.\n        </p>\n      </div>\n    );\n  },\n};\n',locationsMap:{document:{startLoc:{col:34,line:7},endLoc:{col:1,line:64},startBody:{col:34,line:7},endBody:{col:1,line:64}}}}},component:_src__WEBPACK_IMPORTED_MODULE_1__.useViewTimeline},Document={render:()=>{const animate=(0,_src__WEBPACK_IMPORTED_MODULE_1__.useAnimation)([{opacity:0,transform:"scaleX(0)"},{opacity:1,transform:"scaleX(1)"}],{duration:200,timeline:(0,_src__WEBPACK_IMPORTED_MODULE_1__.useViewTimeline)()});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{animate.play()}),[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:200}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Content"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus. Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:animate,style:{width:300,height:200,margin:"0 auto",backgroundColor:"deeppink"}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam vel quam elementum. Nibh praesent tristique magna sit amet purus gravida quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Netus et malesuada fames ac."))}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/core/index.ts":()=>{},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TransitionGroup:()=>_react__WEBPACK_IMPORTED_MODULE_1__.TransitionGroup,useAnimation:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useAnimation,useAnimationFunction:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useAnimationFunction,useScrollTimeline:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useScrollTimeline,useTransitionAnimation:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useTransitionAnimation,useViewTimeline:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useViewTimeline});var _core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/index.ts");__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"TransitionGroup")&&__webpack_require__.d(__webpack_exports__,{TransitionGroup:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useAnimation")&&__webpack_require__.d(__webpack_exports__,{useAnimation:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useAnimation}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useAnimationFunction")&&__webpack_require__.d(__webpack_exports__,{useAnimationFunction:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useAnimationFunction}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useScrollTimeline")&&__webpack_require__.d(__webpack_exports__,{useScrollTimeline:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useScrollTimeline}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useTransitionAnimation")&&__webpack_require__.d(__webpack_exports__,{useTransitionAnimation:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useTransitionAnimation}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useViewTimeline")&&__webpack_require__.d(__webpack_exports__,{useViewTimeline:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useViewTimeline}});var _react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/react/index.ts")},"./src/react/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TransitionGroup:()=>TransitionGroup,useAnimation:()=>useAnimation,useAnimationFunction:()=>useAnimationFunction,useScrollTimeline:()=>useScrollTimeline,useTransitionAnimation:()=>useTransitionAnimation,useViewTimeline:()=>useViewTimeline});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");const utils_getKeys=Object.keys,utils_assign=Object.assign,isArray=Array.isArray,isSameObject=(target={},prev={})=>{const keys=utils_getKeys(target);return keys.length===utils_getKeys(prev).length&&keys.every((k=>target[k]===prev[k]))},toMap=elements=>elements.reduce(((acc,e,i)=>(acc[e.key||i]=e,acc)),{}),TransitionStateContext=(0,react.createContext)("update"),TransitionNotifierContext=(0,react.createContext)((()=>{})),Provider=({_state:state,_element:element})=>{const[show,setShow]=(0,react.useState)(!0),hasExitRef=(0,react.useRef)(!1),showChildren="exit"!==state||!!hasExitRef.current&&show;return(0,react.useEffect)((()=>{"enter"===state&&setShow(!0)}),[state]),(0,jsx_runtime.jsx)(TransitionStateContext.Provider,{value:state,children:(0,jsx_runtime.jsx)(TransitionNotifierContext.Provider,{value:(0,react.useCallback)((s=>{2===s?setShow(!1):hasExitRef.current=1===s}),[]),children:showChildren?element:null})})},TransitionGroup=({children})=>{const elemsRef=(0,react.useRef)(null),prevElems=elemsRef.current||[],elems=react.Children.map(children,(c=>c));(0,react.useEffect)((()=>{elemsRef.current=elems}));const elemsByKey=toMap(elems),prevElemsByKey=toMap(prevElems),res=[];return prevElems.forEach(((v,i)=>{const key=v.key||i;elemsByKey[key]?res.push((0,jsx_runtime.jsx)(Provider,{_state:"update",_element:elemsByKey[key]},key)):res.push((0,jsx_runtime.jsx)(Provider,{_state:"exit",_element:v},key))})),elems.forEach(((v,i)=>{const key=v.key||i;prevElemsByKey[key]||res.push((0,jsx_runtime.jsx)(Provider,{_state:"enter",_element:v},key))})),(0,jsx_runtime.jsx)(react.Fragment,{children:res})},createAnimation=(el,keyframes,options,timeline)=>{const modifiedOptions={fill:"both",...options};try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions),timeline)}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=(animation,opts={})=>{animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,(p=>-p)),opts.restart&&_setTime(animation,0),animation.play()},_reverse=animation=>{animation&&animation.reverse()},_cancel=animation=>{animation&&animation.cancel()},_finish=animation=>{animation&&animation.finish()},_pause=animation=>{animation&&animation.pause()},_setTime=(animation,arg)=>{animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=(animation,arg)=>{animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=(animation,name)=>animation?new Promise((resolve=>{animation.onfinish=()=>{("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}})):Promise.resolve(),useStatic=init=>{const ref=(0,react.useRef)();return ref.current||(ref.current=init())},useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect,useLatestRef=value=>{const ref=(0,react.useRef)(value);return useIsomorphicLayoutEffect((()=>{ref.current=value}),[value]),ref},animations=new WeakMap,getAnimation=target=>animations.get(target),isEqual=(a,b)=>{return target=a._keyframes,prev=b._keyframes,target.length===prev.length&&target.every(((t,i)=>isSameObject(t,prev[i])))&&isSameObject(a._options,b._options);var target,prev},normalizeKeyframe=(el,keyframe,args)=>{return"function"==typeof keyframe?keyframe(getComputedStyle(el),args):isArray(items=keyframe)?items:[items];var items},useAnimation=(...args)=>{const argsRef=useLatestRef(args),[handle,mount]=useStatic((()=>{let _active,_target=null;const init=args2=>{if(!_target)return;const[keyframe,_options={}]=argsRef.current,{timeline,...options}=_options,prevActive=_active;return((el,target,prevTarget)=>{const prevAnimation=prevTarget&&getAnimation(prevTarget);if(prevAnimation){if(animations.delete(prevTarget),isEqual(target,prevTarget))return animations.set(target,prevAnimation),prevAnimation;prevAnimation.cancel()}const animation=createAnimation(el,target._keyframes,target._options,target._timeline);return animations.set(target,animation),animation})(_target,_active={_keyframes:normalizeKeyframe(_target,keyframe,args2),_options:options,_timeline:timeline?._get()},prevActive)},clean=()=>{var target;_active&&(target=_active,getAnimation(target)?.cancel(),animations.delete(target))},externalHandle=utils_assign((ref=>{(_target=ref)||clean()}),{play:(...opts)=>{const animation=init((opts[0]||{}).args);return animation&&_play(animation),externalHandle},reverse:()=>(_active&&_reverse(getAnimation(_active)),externalHandle),cancel:()=>(_active&&_cancel(getAnimation(_active)),externalHandle),finish:()=>(_active&&_finish(getAnimation(_active)),externalHandle),pause:()=>(_active&&_pause(getAnimation(_active)),externalHandle),setTime:time=>{let animation=_active&&getAnimation(_active);if(!animation){const[keyframe]=argsRef.current;if("function"==typeof keyframe)return externalHandle;animation=init(void 0)}return _setTime(animation,time),externalHandle},setPlaybackRate:rate=>(_active&&_setRate(getAnimation(_active),rate),externalHandle),waitFor:event=>_waitFor(_active&&getAnimation(_active),event).then((()=>externalHandle))});return[externalHandle,()=>clean]}));return(0,react.useEffect)(mount,[]),handle},bindUpdateFunction=(animation,getUpdateFunction,args)=>{const update=()=>{const timing=animation.effect?.getComputedTiming();if(!timing)return;null!=timing.progress&&getUpdateFunction()(timing,args),"running"===animation.playState&&requestAnimationFrame(update)};animation.ready.then(update)},useAnimationFunction=(onUpdate,options)=>{const onUpdateRef=useLatestRef(onUpdate),optionsRef=useLatestRef(options),[handle,cleanup]=useStatic((()=>{const getOnUpdate=()=>onUpdateRef.current;let cache;const initAnimation=(opts={})=>{const options2=optionsRef.current;if(cache){const[prevAnimation,prevOptions]=cache;if(isSameObject(options2,prevOptions))return"running"!==prevAnimation.playState&&bindUpdateFunction(prevAnimation,getOnUpdate,opts.args),prevAnimation;prevAnimation.cancel()}const animation=createAnimation(null,null,options2);return bindUpdateFunction(animation,getOnUpdate,opts.args),cache=[animation,options2],animation},getAnimation=()=>cache?.[0],externalHandle={play:(...opts)=>(_play(initAnimation(opts[0]),opts[0]),externalHandle),reverse:()=>(_reverse(initAnimation()),externalHandle),cancel:()=>(_cancel(getAnimation()),externalHandle),finish:()=>(_finish(getAnimation()),externalHandle),pause:()=>(_pause(getAnimation()),externalHandle),setTime:time=>(_setTime(getAnimation(),time),externalHandle),setPlaybackRate:rate=>(_setRate(getAnimation(),rate),externalHandle),waitFor:event=>_waitFor(getAnimation(),event).then((()=>externalHandle))};return[externalHandle,externalHandle.cancel]}));return(0,react.useEffect)((()=>cleanup),[]),handle},useTransitionAnimation=keyframes=>{const keys=utils_getKeys(keyframes),animations=keys.reduce(((acc,k)=>{const def=keyframes[k];return def?(acc[k]=useAnimation(def[0],def[1]),acc):acc}),{}),animationsRef=useLatestRef(animations),[animation,cleanup]=useStatic((()=>{const forAllHandle=fn=>{utils_getKeys(animationsRef.current).forEach((name=>fn(animationsRef.current[name])))};return[ref=>{forAllHandle((h=>{h(ref)}))},()=>{forAllHandle((handle=>{handle.cancel()}))}]}));(0,react.useEffect)((()=>cleanup),[]);const currentState=(0,react.useContext)(TransitionStateContext),notify=(0,react.useContext)(TransitionNotifierContext);return useIsomorphicLayoutEffect((()=>{keys.includes("exit")?notify(1):notify(0)}),keys),useIsomorphicLayoutEffect((()=>{"update"===currentState&&animationsRef.current[currentState]?.play()})),useIsomorphicLayoutEffect((()=>{"update"!==currentState&&animationsRef.current[currentState]?.play().waitFor("finish").then((()=>{"exit"===currentState&&notify(2)})).catch((()=>{}))}),[currentState]),animation},useScrollTimeline=(opts={})=>{const optsRef=useLatestRef(opts);return useStatic((()=>{let _target;return utils_assign((ref=>{_target=ref}),{_type:1,_get:()=>{const{axis}=optsRef.current;return new ScrollTimeline({source:_target||document.documentElement,axis})}})}))},useViewTimeline=(opts={})=>{const optsRef=useLatestRef(opts);return useStatic((()=>{let _target;return utils_assign((ref=>{_target=ref}),{_type:2,_get:()=>{const{axis,inset}=optsRef.current;return new ViewTimeline({subject:_target||document.documentElement,axis,inset})}})}))}}}]);