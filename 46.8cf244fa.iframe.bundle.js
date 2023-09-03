/*! For license information please see 46.8cf244fa.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[46],{"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/core/index.ts":()=>{},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TransitionGroup:()=>_react__WEBPACK_IMPORTED_MODULE_1__.TransitionGroup,useAnimation:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useAnimation,useAnimationFunction:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useAnimationFunction,useTransitionAnimation:()=>_react__WEBPACK_IMPORTED_MODULE_1__.useTransitionAnimation});var _core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/index.ts");__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"TransitionGroup")&&__webpack_require__.d(__webpack_exports__,{TransitionGroup:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useAnimation")&&__webpack_require__.d(__webpack_exports__,{useAnimation:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useAnimation}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useAnimationFunction")&&__webpack_require__.d(__webpack_exports__,{useAnimationFunction:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useAnimationFunction}}),__webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_0__,"useTransitionAnimation")&&__webpack_require__.d(__webpack_exports__,{useTransitionAnimation:function(){return _core__WEBPACK_IMPORTED_MODULE_0__.useTransitionAnimation}});var _react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/react/index.ts")},"./src/react/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TransitionGroup:()=>TransitionGroup,useAnimation:()=>useAnimation,useAnimationFunction:()=>useAnimationFunction,useTransitionAnimation:()=>useTransitionAnimation});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");const utils_getKeys=Object.keys,utils_assign=Object.assign,isArray=Array.isArray,isSameObject=(target={},prev={})=>{const keys=utils_getKeys(target);return keys.length===utils_getKeys(prev).length&&keys.every((k=>target[k]===prev[k]))},toArray=items=>isArray(items)?items:[items],toMap=elements=>elements.reduce(((acc,e,i)=>(acc[e.key||i]=e,acc)),{}),TransitionStateContext=(0,react.createContext)("update"),TransitionNotifierContext=(0,react.createContext)((()=>{})),Provider=({_state:state,_element:element})=>{const[show,setShow]=(0,react.useState)(!0),hasExitRef=(0,react.useRef)(!1),showChildren="exit"!==state||!!hasExitRef.current&&show;return(0,react.useEffect)((()=>{"enter"===state&&setShow(!0)}),[state]),(0,jsx_runtime.jsx)(TransitionStateContext.Provider,{value:state,children:(0,jsx_runtime.jsx)(TransitionNotifierContext.Provider,{value:(0,react.useCallback)((s=>{2===s?setShow(!1):hasExitRef.current=1===s}),[]),children:showChildren?element:null})})},TransitionGroup=({children})=>{const elemsRef=(0,react.useRef)(null),prevElems=elemsRef.current||[],elems=react.Children.map(children,(c=>c));(0,react.useEffect)((()=>{elemsRef.current=elems}));const elemsByKey=toMap(elems),prevElemsByKey=toMap(prevElems),res=[];return prevElems.forEach(((v,i)=>{const key=v.key||i;elemsByKey[key]?res.push((0,jsx_runtime.jsx)(Provider,{_state:"update",_element:elemsByKey[key]},key)):res.push((0,jsx_runtime.jsx)(Provider,{_state:"exit",_element:v},key))})),elems.forEach(((v,i)=>{const key=v.key||i;prevElemsByKey[key]||res.push((0,jsx_runtime.jsx)(Provider,{_state:"enter",_element:v},key))})),(0,jsx_runtime.jsx)(react.Fragment,{children:res})},createAnimation=(el,keyframes,options)=>{const modifiedOptions={fill:"both",...options};try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions))}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=(animation,opts={})=>{animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,(p=>-p)),opts.restart&&_setTime(animation,0),animation.play()},_reverse=animation=>{animation&&animation.reverse()},_cancel=animation=>{animation&&animation.cancel()},_finish=animation=>{animation&&animation.finish()},_pause=animation=>{animation&&animation.pause()},_setTime=(animation,arg)=>{animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=(animation,arg)=>{animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=(animation,name)=>animation?new Promise((resolve=>{animation.onfinish=()=>{("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}})):Promise.resolve(),useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect,useStatic=init=>{const ref=(0,react.useRef)();return ref.current||(ref.current=init())},useLatestRef=value=>{const ref=(0,react.useRef)(value);return useIsomorphicLayoutEffect((()=>{ref.current=value}),[value]),ref},animations=new WeakMap,getAnimation=target=>animations.get(target),equal=(targetKeyframes,targetOptions,keyframes,options)=>{return prev=targetKeyframes,(target=keyframes).length===prev.length&&target.every(((t,i)=>isSameObject(t,prev[i])))&&isSameObject(options,targetOptions);var target,prev},normalizeKeyframe=(el,keyframe,args)=>"function"==typeof keyframe?keyframe(getComputedStyle(el),args):toArray(keyframe),useAnimation=(...args)=>{const argsRef=useLatestRef(args),[handle,effect,mount]=useStatic((()=>{let _active,_target=null;const init=args2=>{if(!_target)return;const[keyframe,options]=argsRef.current,prevActive=_active;return((el,target,prevTarget)=>{const animation=prevTarget&&getAnimation(prevTarget);if(animation){if(animations.delete(prevTarget),equal(target._keyframes,target._options,prevTarget._keyframes,prevTarget._options))return animations.set(target,animation),animation;animation.cancel()}const newAnimation=createAnimation(el,target._keyframes,target._options);return animations.set(target,newAnimation),newAnimation})(_target,_active={_keyframes:normalizeKeyframe(_target,keyframe,args2),_options:options},prevActive)},clean=()=>{var target;_active&&(target=_active,getAnimation(target)?.cancel(),animations.delete(target))},externalHandle=utils_assign((ref=>{(_target=ref)||clean()}),{play:(...opts)=>{const animation=init((opts[0]||{}).args);return animation&&_play(animation),externalHandle},reverse:()=>(_active&&_reverse(getAnimation(_active)),externalHandle),cancel:()=>(_active&&_cancel(getAnimation(_active)),externalHandle),finish:()=>(_active&&_finish(getAnimation(_active)),externalHandle),pause:()=>(_active&&_pause(getAnimation(_active)),externalHandle),setTime:time=>{if(_active){let animation=getAnimation(_active);if(!animation){const[keyframe]=argsRef.current;if("function"==typeof keyframe)return externalHandle;animation=init(void 0)}_setTime(animation,time)}return externalHandle},setPlaybackRate:rate=>(_active&&_setRate(getAnimation(_active),rate),externalHandle),waitFor:event=>_waitFor(_active&&getAnimation(_active),event).then((()=>externalHandle))});return[externalHandle,()=>{const[keyframe,options]=args;!options?.autoPlay||"function"==typeof keyframe||_active&&equal(toArray(keyframe),options,_active._keyframes,_active._options)||externalHandle.play()},()=>clean]}));return useIsomorphicLayoutEffect(effect),(0,react.useEffect)(mount,[]),handle},bindUpdateFunction=(animation,getUpdateFunction,args)=>{const update=()=>{const timing=animation.effect?.getComputedTiming();if(!timing)return;null!=timing.progress&&getUpdateFunction()(timing,args),"running"===animation.playState&&requestAnimationFrame(update)};animation.ready.then(update)},useAnimationFunction=(onUpdate,options)=>{const onUpdateRef=useLatestRef(onUpdate),optionsRef=useLatestRef(options),[handle,cleanup]=useStatic((()=>{const getOnUpdate=()=>onUpdateRef.current;let cache;const initAnimation=(opts={})=>{const options2=optionsRef.current;if(cache){const[prevAnimation,prevOptions]=cache;if(isSameObject(options2,prevOptions))return"running"!==prevAnimation.playState&&bindUpdateFunction(prevAnimation,getOnUpdate,opts.args),prevAnimation;prevAnimation.cancel()}const animation=createAnimation(null,null,options2);return bindUpdateFunction(animation,getOnUpdate,opts.args),cache=[animation,options2],animation},getAnimation=()=>cache?.[0],externalHandle={play:(...opts)=>(_play(initAnimation(opts[0]),opts[0]),externalHandle),reverse:()=>(_reverse(initAnimation()),externalHandle),cancel:()=>(_cancel(getAnimation()),externalHandle),finish:()=>(_finish(getAnimation()),externalHandle),pause:()=>(_pause(getAnimation()),externalHandle),setTime:time=>(_setTime(getAnimation(),time),externalHandle),setPlaybackRate:rate=>(_setRate(getAnimation(),rate),externalHandle),waitFor:event=>_waitFor(getAnimation(),event).then((()=>externalHandle))};return[externalHandle,externalHandle.cancel]}));return(0,react.useEffect)((()=>cleanup),[]),handle},useTransitionAnimation=keyframes=>{const keys=utils_getKeys(keyframes),animations=keys.reduce(((acc,k)=>{const def=keyframes[k];return def?(acc[k]=useAnimation(def[0],def[1]),acc):acc}),{}),animationsRef=useLatestRef(animations),[animation,cleanup]=useStatic((()=>{const forAllHandle=fn=>{utils_getKeys(animationsRef.current).forEach((name=>fn(animationsRef.current[name])))};return[ref=>{forAllHandle((h=>{h(ref)}))},()=>{forAllHandle((handle=>{handle.cancel()}))}]}));(0,react.useEffect)((()=>cleanup),[]);const currentState=(0,react.useContext)(TransitionStateContext),notify=(0,react.useContext)(TransitionNotifierContext);return useIsomorphicLayoutEffect((()=>{keys.includes("exit")?notify(1):notify(0)}),keys),useIsomorphicLayoutEffect((()=>{"update"===currentState&&animationsRef.current[currentState]?.play()})),useIsomorphicLayoutEffect((()=>{"update"!==currentState&&animationsRef.current[currentState]?.play().waitFor("finish").then((()=>{"exit"===currentState&&notify(2)})).catch((()=>{}))}),[currentState]),animation}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);