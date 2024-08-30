/*! For license information please see 767.c34813d5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[767],{"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./src/core/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$r:()=>toArray,Gy:()=>isSameObject,gd:()=>getStyle,kp:()=>assign,lQ:()=>noop,xD:()=>getKeys,zD:()=>isSameObjectArray});var noop=function(){},getKeys=Object.keys,assign=Object.assign,isArray=Array.isArray,getStyle=function(e){return getComputedStyle(e)},isSameObject=function(){var target=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},prev=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},keys=getKeys(target);return keys.length===getKeys(prev).length&&keys.every((function(k){return target[k]===prev[k]}))},isSameObjectArray=function(target,prev){return target.length===prev.length&&target.every((function(t,i){return isSameObject(t,prev[i])}))},toArray=function(items){return isArray(items)?items:[items]}},"./src/core/waapi.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Gi:()=>_play,JI:()=>createAnimation,Ow:()=>_setRate,QK:()=>_waitFor,Yv:()=>_reverse,d8:()=>_finish,gJ:()=>_pause,nG:()=>_setTime,yw:()=>_cancel});var createAnimation=function(el,keyframes,options,timeline){var modifiedOptions=function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({fill:"both"},options);try{return new Animation(new KeyframeEffect(el,keyframes,modifiedOptions),timeline)}catch(e){return el.animate(keyframes,modifiedOptions)}},_play=function(animation){var opts=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};animation.playbackRate<0&&"finished"===animation.playState&&_setRate(animation,(function(p){return-p})),opts.restart&&_setTime(animation,0),animation.play()},_reverse=function(animation){animation&&animation.reverse()},_cancel=function(animation){animation&&animation.cancel()},_finish=function(animation){animation&&animation.finish()},_pause=function(animation){animation&&animation.pause()},_setTime=function(animation,arg){animation&&(animation.currentTime="function"==typeof arg?arg(animation.effect.getComputedTiming().endTime):arg)},_setRate=function(animation,arg){animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_waitFor=function(animation,name){return animation?new Promise((function(resolve){animation.onfinish=function(){("finish"===name&&animation.playbackRate>0||"reverseFinish"===name&&animation.playbackRate<0)&&resolve()}})):Promise.resolve()}},"./src/react/hooks/useAnimation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useAnimation});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/core/utils.ts"),waapi=__webpack_require__("./src/core/waapi.ts"),useStatic=__webpack_require__("./src/react/hooks/useStatic.ts"),useLatestRef=__webpack_require__("./src/react/hooks/useLatestRef.ts"),animations=new WeakMap,getAnimation=function(target){return animations.get(target)},initAnimation=function(el,target,prevTarget){var a,b,prevAnimation=prevTarget&&getAnimation(prevTarget);if(prevAnimation){if(animations.delete(prevTarget),a=target,b=prevTarget,(0,utils.zD)(a._keyframes,b._keyframes)&&(0,utils.Gy)(a._options,b._options))return animations.set(target,prevAnimation),prevAnimation;prevAnimation.cancel()}var animation=(0,waapi.JI)(el,target._keyframes,target._options,target._timeline);return animations.set(target,animation),animation};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var normalizeKeyframe=function(el,keyframe,args){return"function"==typeof keyframe?keyframe((0,utils.gd)(el),args):(0,utils.$r)(keyframe)},useAnimation=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var argsRef=(0,useLatestRef.S)(args),_useStatic=(0,useStatic.C)((function(){var _active,_target=null,init=function(args){if(_target){var _argsRef_current=_sliced_to_array(argsRef.current,2),keyframe=_argsRef_current[0],tmp=_argsRef_current[1],_options=void 0===tmp?{}:tmp,timeline=_options.timeline,options=_object_without_properties(_options,["timeline"]),prevActive=_active;return initAnimation(_target,_active={_keyframes:normalizeKeyframe(_target,keyframe,args),_options:options,_timeline:null==timeline?void 0:timeline._get()},prevActive)}},clean=function(){var target,_getAnimation;_active&&(null===(_getAnimation=getAnimation(target=_active))||void 0===_getAnimation||_getAnimation.cancel(),animations.delete(target))},externalHandle=(0,utils.kp)((function(ref){(_target=ref)||clean()}),{play:function(){for(var _len=arguments.length,opts=new Array(_len),_key=0;_key<_len;_key++)opts[_key]=arguments[_key];var animation=init((opts[0]||{}).args);return animation&&(0,waapi.Gi)(animation),externalHandle},reverse:function(){return _active&&(0,waapi.Yv)(getAnimation(_active)),externalHandle},cancel:function(){return _active&&(0,waapi.yw)(getAnimation(_active)),externalHandle},finish:function(){return _active&&(0,waapi.d8)(getAnimation(_active)),externalHandle},pause:function(){return _active&&(0,waapi.gJ)(getAnimation(_active)),externalHandle},setTime:function(time){var animation=_active&&getAnimation(_active);if(!animation){if("function"==typeof _sliced_to_array(argsRef.current,1)[0])return externalHandle;animation=init(void 0)}return(0,waapi.nG)(animation,time),externalHandle},setPlaybackRate:function(rate){return _active&&(0,waapi.Ow)(getAnimation(_active),rate),externalHandle},waitFor:function(event){return(0,waapi.QK)(_active&&getAnimation(_active),event).then((function(){return externalHandle}))}});return[externalHandle,function(){return clean}]})),_useStatic1=_sliced_to_array(_useStatic,2),handle=_useStatic1[0],mount=_useStatic1[1];return(0,react.useEffect)(mount,[]),handle}},"./src/react/hooks/useIsomorphicLayoutEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/react/hooks/useLatestRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>useLatestRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/react/hooks/useIsomorphicLayoutEffect.ts"),useLatestRef=function(value){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.E)((function(){ref.current=value}),[value]),ref}},"./src/react/hooks/useStatic.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>useStatic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useStatic=function(init){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref.current||(ref.current=init())}}}]);