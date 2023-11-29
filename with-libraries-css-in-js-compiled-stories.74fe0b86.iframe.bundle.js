/*! For license information please see with-libraries-css-in-js-compiled-stories.74fe0b86.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[759],{"./stories/with-libraries/css-in-js/compiled.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>compiled_stories});var react=__webpack_require__("./node_modules/react/index.js"),process=__webpack_require__("./node_modules/process/browser.js");const isServerEnvironment=()=>"undefined"==typeof window||void 0!==process&&null!=process.versions&&null!=process.versions.node||!("nodejs"!==window.name&&!(null===navigator||void 0===navigator?void 0:navigator.userAgent.includes("Node.js"))&&!(null===navigator||void 0===navigator?void 0:navigator.userAgent.includes("jsdom"))),Cache=isServerEnvironment()?(0,react.createContext)(null):{};if(!isServerEnvironment()){const ssrStyles=document.querySelectorAll("style[data-cmpld]");for(let i=0;i<ssrStyles.length;i++)document.head.appendChild(ssrStyles[i])}const useCache=()=>isServerEnvironment()?(0,react.useContext)(Cache)||{}:Cache,style_cache=props=>{if(isServerEnvironment()){const inserted=useCache();return react.createElement(Cache.Provider,{value:inserted},props.children)}return props.children},styleBucketOrdering=["","l","v","w","f","i","h","a","m"],styleBucketsInHead={},pseudosMap={k:"l",ited:"v","us-within":"w",us:"f","us-visible":"i",er:"h",ive:"a"};const getStyleBucketName=sheet=>64===sheet.charCodeAt(0)?"m":58===sheet.charCodeAt(10)&&pseudosMap[sheet.slice(14,sheet.indexOf("{"))]||"";function insertRule(css,opts){const style=function lazyAddStyleBucketToHead(bucketName,opts){if(!styleBucketsInHead[bucketName]){let currentBucketIndex=styleBucketOrdering.indexOf(bucketName)+1,nextBucketFromCache=null;for(;currentBucketIndex<styleBucketOrdering.length;currentBucketIndex++){const nextBucket=styleBucketsInHead[styleBucketOrdering[currentBucketIndex]];if(nextBucket){nextBucketFromCache=nextBucket;break}}const tag=document.createElement("style");opts.nonce&&tag.setAttribute("nonce",opts.nonce),tag.appendChild(document.createTextNode("")),document.head.insertBefore(tag,nextBucketFromCache),styleBucketsInHead[bucketName]=tag}return styleBucketsInHead[bucketName]}(getStyleBucketName(css),opts);{const sheet=style.sheet;try{sheet.insertRule(css,sheet.cssRules.length)}catch(_a){}}}function Style(props){const inserted=useCache();if(props.children.length){if(isServerEnvironment()){const bucketedSheets={};let hasSheets=!1;for(let i=0;i<props.children.length;i++){const sheet=props.children[i];if(inserted[sheet])continue;inserted[sheet]=!0,hasSheets=!0;const bucketName=getStyleBucketName(sheet);bucketedSheets[bucketName]=(bucketedSheets[bucketName]||"")+sheet}return hasSheets?react.createElement("style",{"data-cmpld":!0,nonce:props.nonce,dangerouslySetInnerHTML:{__html:styleBucketOrdering.map((bucket=>bucketedSheets[bucket])).join("")}}):null}for(let i=0;i<props.children.length;i++){const sheet=props.children[i];inserted[sheet]||(inserted[sheet]=!0,insertRule(sheet,props))}}return null}function ax(classNames){if(classNames.length<=1&&(!classNames[0]||-1===classNames[0].indexOf(" ")))return classNames[0]||void 0;const atomicGroups={};for(let i=0;i<classNames.length;i++){const cls=classNames[i];if(!cls)continue;const groups=cls.split(" ");for(let x=0;x<groups.length;x++){const atomic=groups[x];atomicGroups[atomic.slice(0,95===atomic.charCodeAt(0)?5:void 0)]=atomic}}let str="";for(const key in atomicGroups){str+=atomicGroups[key]+" "}return str.slice(0,-1)}var src=__webpack_require__("./src/index.ts");const compiled_stories={parameters:{storySource:{source:'/* compiled.stories.tsx generated by @compiled/babel-plugin v0.17.1 */\nimport { forwardRef } from \'react\';\nimport { ax, ix, CC, CS } from "@compiled/react/runtime";\nimport { StoryObj } from "@storybook/react";\nimport React, { useEffect } from "react";\nimport { useAnimation } from "../../../src";\nconst _7 = "._18u0viql{margin-left:2rem}";\nconst _6 = "._otyrviql{margin-bottom:2rem}";\nconst _5 = "._2hwxidpf{margin-right:0}";\nconst _4 = "._19pkviql{margin-top:2rem}";\nconst _3 = "._1bsbmxpn{width:6rem}";\nconst _2 = "._4t3imxpn{height:6rem}";\nconst _ = "._19it2jul{border:.1rem solid #135569}";\nexport default {\n  component: useAnimation\n};\nconst Comp = forwardRef(({\n  as: C = "div",\n  style: __cmpls,\n  ...__cmplp\n}, __cmplr) => {\n  return <CC>\n        <CS>{[_, _2, _3, _4, _5, _6, _7]}</CS>\n        <C {...__cmplp} style={__cmpls} ref={__cmplr} className={ax(["_19it2jul _4t3imxpn _1bsbmxpn _19pkviql _2hwxidpf _otyrviql _18u0viql", __cmplp.className])} />\n      </CC>;\n});\nif (process.env.NODE_ENV !== \'production\') {\n  Comp.displayName = \'Comp\';\n}\nexport const Default: StoryObj = {\n  render: () => {\n    const animate = useAnimation([{\n      transform: "rotate(0deg)",\n      borderRadius: "1rem"\n    }, {\n      transform: "rotate(360deg)",\n      borderRadius: "50%"\n    }, {\n      transform: "rotate(720deg)",\n      borderRadius: "1rem"\n    }], {\n      duration: 1000,\n      iterations: Infinity,\n      easing: "ease-in-out"\n    });\n    useEffect(() => {\n      animate.play();\n    }, []);\n    return <Comp ref={animate} onMouseEnter={() => {\n      animate.pause();\n    }} onMouseLeave={() => {\n      animate.play();\n    }} />;\n  }\n};',locationsMap:{default:{startLoc:{col:33,line:30},endLoc:{col:1,line:55},startBody:{col:33,line:30},endBody:{col:1,line:55}}}}},component:src.useAnimation},Comp=(0,react.forwardRef)((({as:C="div",style:__cmpls,...__cmplp},__cmplr)=>react.createElement(style_cache,null,react.createElement(Style,null,["._19it2jul{border:.1rem solid #135569}","._4t3imxpn{height:6rem}","._1bsbmxpn{width:6rem}","._19pkviql{margin-top:2rem}","._2hwxidpf{margin-right:0}","._otyrviql{margin-bottom:2rem}","._18u0viql{margin-left:2rem}"]),react.createElement(C,{...__cmplp,style:__cmpls,ref:__cmplr,className:ax(["_19it2jul _4t3imxpn _1bsbmxpn _19pkviql _2hwxidpf _otyrviql _18u0viql",__cmplp.className])}))));const Default={render:()=>{const animate=(0,src.useAnimation)([{transform:"rotate(0deg)",borderRadius:"1rem"},{transform:"rotate(360deg)",borderRadius:"50%"},{transform:"rotate(720deg)",borderRadius:"1rem"}],{duration:1e3,iterations:1/0,easing:"ease-in-out"});return(0,react.useEffect)((()=>{animate.play()}),[]),react.createElement(Comp,{ref:animate,onMouseEnter:()=>{animate.pause()},onMouseLeave:()=>{animate.play()}})}},__namedExportsOrder=["Default"]},"./node_modules/process/browser.js":module=>{var cachedSetTimeout,cachedClearTimeout,process=module.exports={};function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(fun){if(cachedSetTimeout===setTimeout)return setTimeout(fun,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(fun,0);try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e2){return cachedSetTimeout.call(this,fun,0)}}}!function(){try{cachedSetTimeout="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){cachedSetTimeout=defaultSetTimout}try{cachedClearTimeout="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){cachedClearTimeout=defaultClearTimeout}}();var currentQueue,queue=[],draining=!1,queueIndex=-1;function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var timeout=runTimeout(cleanUpNextTick);draining=!0;for(var len=queue.length;len;){for(currentQueue=queue,queue=[];++queueIndex<len;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,len=queue.length}currentQueue=null,draining=!1,function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout)return clearTimeout(marker);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(marker);try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e2){return cachedClearTimeout.call(this,marker)}}}(timeout)}}function Item(fun,array){this.fun=fun,this.array=array}function noop(){}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)args[i-1]=arguments[i];queue.push(new Item(fun,args)),1!==queue.length||draining||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.prependListener=noop,process.prependOnceListener=noop,process.listeners=function(name){return[]},process.binding=function(name){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(dir){throw new Error("process.chdir is not supported")},process.umask=function(){return 0}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/core/index.ts":()=>{},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{TransitionGroup:()=>_react__WEBPACK_IMPORTED_MODULE_1__.TransitionGroup,useAnimation:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useAnimation,useAnimationFunction:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useAnimationFunction,useScrollTimeline:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useScrollTimeline,useTransitionAnimation:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useTransitionAnimation,useViewTimeline:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useViewTimeline});var _core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/index.ts");__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"TransitionGroup")&&__webpack_require__.d(__webpack_exports__,{TransitionGroup:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useAnimation")&&__webpack_require__.d(__webpack_exports__,{useAnimation:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useAnimation}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useAnimationFunction")&&__webpack_require__.d(__webpack_exports__,{useAnimationFunction:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useAnimationFunction}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useScrollTimeline")&&__webpack_require__.d(__webpack_exports__,{useScrollTimeline:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useScrollTimeline}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useTransitionAnimation")&&__webpack_require__.d(__webpack_exports__,{useTransitionAnimation:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useTransitionAnimation}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useViewTimeline")&&__webpack_require__.d(__webpack_exports__,{useViewTimeline:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useViewTimeline}});var _react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/react/index.ts")},"./src/react/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{TransitionGroup:()=>TransitionGroup,useAnimation:()=>useAnimation,useAnimationFunction:()=>useAnimationFunction,useScrollTimeline:()=>useScrollTimeline,useTransitionAnimation:()=>useTransitionAnimation,useViewTimeline:()=>useViewTimeline});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");const noop=()=>{},utils_getKeys=Object.keys,utils_assign=Object.assign,isArray=Array.isArray,isSameObject=(target={},prev={})=>{const keys=utils_getKeys(target);return keys.length===utils_getKeys(prev).length&&keys.every((k=>target[k]===prev[k]))},toMap=elements=>elements.reduce(((acc,e,i)=>(acc[e.key||i]=e,acc)),{}),TransitionStateContext=(0,react.createContext)("update"),TransitionNotifierContext=(0,react.createContext)(noop),Provider=({_state:state,_element:element})=>{const[show,setShow]=(0,react.useState)(!0),hasExitRef=(0,react.useRef)(!1),showChildren="exit"!==state||!!hasExitRef.current&&show;return(0,react.useEffect)((()=>{"enter"===state&&setShow(!0)}),[state]),(0,jsx_runtime.jsx)(TransitionStateContext.Provider,{value:state,children:(0,jsx_runtime.jsx)(TransitionNotifierContext.Provider,{value:(0,react.useCallback)((s=>{2===s?setShow(!1):hasExitRef.current=1===s}),[]),children:showChildren?element:null})})},TransitionGroup=({children})=>{const elemsRef=(0,react.useRef)(null),prevElems=elemsRef.current||[],elems=react.Children.map(children,(c=>c));(0,react.useEffect)((()=>{elemsRef.current=elems}));const elemsByKey=toMap(elems),prevElemsByKey=toMap(prevElems),res=[];return prevElems.forEach(((v,i)=>{const key=v.key||i;elemsByKey[key]?res.push((0,jsx_runtime.jsx)(Provider,{_state:"update",_element:elemsByKey[key]},key)):res.push((0,jsx_runtime.jsx)(Provider,{_state:"exit",_element:v},key))})),elems.forEach(((v,i)=>{const key=v.key||i;prevElemsByKey[key]||res.push((0,jsx_runtime.jsx)(Provider,{_state:"enter",_element:v},key))})),(0,jsx_runtime.jsx)(react.Fragment,{children:res})},createAnimation=(el,keyframes,options,timeline)=>{const modifiedOptions={fill:"both",...options};try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions),timeline)}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=(animation,opts={})=>{animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,(p=>-p)),opts.restart&&_setTime(animation,0),animation.play()},_reverse=animation=>{animation&&animation.reverse()},_cancel=animation=>{animation&&animation.cancel()},_finish=animation=>{animation&&animation.finish()},_pause=animation=>{animation&&animation.pause()},_setTime=(animation,arg)=>{animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=(animation,arg)=>{animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=(animation,name)=>animation?new Promise((resolve=>{animation.onfinish=()=>{("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}})):Promise.resolve(),useStatic=init=>{const ref=(0,react.useRef)();return ref.current||(ref.current=init())},useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect,useLatestRef=value=>{const ref=(0,react.useRef)(value);return useIsomorphicLayoutEffect((()=>{ref.current=value}),[value]),ref},animations=new WeakMap,getAnimation=target=>animations.get(target),isEqual=(a,b)=>{return target=a._keyframes,prev=b._keyframes,target.length===prev.length&&target.every(((t,i)=>isSameObject(t,prev[i])))&&isSameObject(a._options,b._options);var target,prev},normalizeKeyframe=(el,keyframe,args)=>{return"function"==typeof keyframe?keyframe(getComputedStyle(el),args):isArray(items=keyframe)?items:[items];var items},useAnimation=(...args)=>{const argsRef=useLatestRef(args),[handle,mount]=useStatic((()=>{let _active,_target=null;const init=args2=>{if(!_target)return;const[keyframe,_options={}]=argsRef.current,{timeline,...options}=_options,prevActive=_active;return((el,target,prevTarget)=>{const prevAnimation=prevTarget&&getAnimation(prevTarget);if(prevAnimation){if(animations.delete(prevTarget),isEqual(target,prevTarget))return animations.set(target,prevAnimation),prevAnimation;prevAnimation.cancel()}const animation=createAnimation(el,target._keyframes,target._options,target._timeline);return animations.set(target,animation),animation})(_target,_active={_keyframes:normalizeKeyframe(_target,keyframe,args2),_options:options,_timeline:timeline?._get()},prevActive)},clean=()=>{var target;_active&&(target=_active,getAnimation(target)?.cancel(),animations.delete(target))},externalHandle=utils_assign((ref=>{(_target=ref)||clean()}),{play:(...opts)=>{const animation=init((opts[0]||{}).args);return animation&&_play(animation),externalHandle},reverse:()=>(_active&&_reverse(getAnimation(_active)),externalHandle),cancel:()=>(_active&&_cancel(getAnimation(_active)),externalHandle),finish:()=>(_active&&_finish(getAnimation(_active)),externalHandle),pause:()=>(_active&&_pause(getAnimation(_active)),externalHandle),setTime:time=>{let animation=_active&&getAnimation(_active);if(!animation){const[keyframe]=argsRef.current;if("function"==typeof keyframe)return externalHandle;animation=init(void 0)}return _setTime(animation,time),externalHandle},setPlaybackRate:rate=>(_active&&_setRate(getAnimation(_active),rate),externalHandle),waitFor:event=>_waitFor(_active&&getAnimation(_active),event).then((()=>externalHandle))});return[externalHandle,()=>clean]}));return(0,react.useEffect)(mount,[]),handle},bindUpdateFunction=(animation,getUpdateFunction,args)=>{const update=()=>{const timing=animation.effect?.getComputedTiming();if(!timing)return;null!=timing.progress&&getUpdateFunction()(timing,args),"running"===animation.playState&&requestAnimationFrame(update)};animation.ready.then(update)},useAnimationFunction=(onUpdate,options)=>{const onUpdateRef=useLatestRef(onUpdate),optionsRef=useLatestRef(options),[handle,cleanup]=useStatic((()=>{const getOnUpdate=()=>onUpdateRef.current;let cache;const initAnimation=(opts={})=>{const options2=optionsRef.current;if(cache){const[prevAnimation,prevOptions]=cache;if(isSameObject(options2,prevOptions))return"running"!==prevAnimation.playState&&bindUpdateFunction(prevAnimation,getOnUpdate,opts.args),prevAnimation;prevAnimation.cancel()}const animation=createAnimation(null,null,options2);return bindUpdateFunction(animation,getOnUpdate,opts.args),cache=[animation,options2],animation},getAnimation=()=>cache?.[0],externalHandle={play:(...opts)=>(_play(initAnimation(opts[0]),opts[0]),externalHandle),reverse:()=>(_reverse(initAnimation()),externalHandle),cancel:()=>(_cancel(getAnimation()),externalHandle),finish:()=>(_finish(getAnimation()),externalHandle),pause:()=>(_pause(getAnimation()),externalHandle),setTime:time=>(_setTime(getAnimation(),time),externalHandle),setPlaybackRate:rate=>(_setRate(getAnimation(),rate),externalHandle),waitFor:event=>_waitFor(getAnimation(),event).then((()=>externalHandle))};return[externalHandle,externalHandle.cancel]}));return(0,react.useEffect)((()=>cleanup),[]),handle},useTransitionAnimation=keyframes=>{const keys=utils_getKeys(keyframes),animations=keys.reduce(((acc,k)=>{const def=keyframes[k];return def?(acc[k]=useAnimation(def[0],def[1]),acc):acc}),{}),animationsRef=useLatestRef(animations),[animation,cleanup]=useStatic((()=>{const forAllHandle=fn=>{utils_getKeys(animationsRef.current).forEach((name=>fn(animationsRef.current[name])))};return[ref=>{forAllHandle((h=>{h(ref)}))},()=>{forAllHandle((handle=>{handle.cancel()}))}]}));(0,react.useEffect)((()=>cleanup),[]);const currentState=(0,react.useContext)(TransitionStateContext),notify=(0,react.useContext)(TransitionNotifierContext);return useIsomorphicLayoutEffect((()=>{keys.includes("exit")?notify(1):notify(0)}),keys),useIsomorphicLayoutEffect((()=>{"update"===currentState&&animationsRef.current[currentState]?.play()})),useIsomorphicLayoutEffect((()=>{"update"!==currentState&&animationsRef.current[currentState]?.play().waitFor("finish").then((()=>{"exit"===currentState&&notify(2)})).catch(noop)}),[currentState]),animation},useScrollTimeline=(opts={})=>{const optsRef=useLatestRef(opts);return useStatic((()=>{let _target;return utils_assign((ref=>{_target=ref}),{_type:1,_get:()=>{const{axis}=optsRef.current;return new ScrollTimeline({source:_target||document.documentElement,axis})}})}))},useViewTimeline=(opts={})=>{const optsRef=useLatestRef(opts);return useStatic((()=>{let _target;return utils_assign((ref=>{_target=ref}),{_type:2,_get:()=>{const{axis,inset}=optsRef.current;return new ViewTimeline({subject:_target||document.documentElement,axis,inset})}})}))}}}]);