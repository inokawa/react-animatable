(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./stories/useAnimation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Hello:()=>Hello,Path:()=>Path,Toggle:()=>Toggle,__namedExportsOrder:()=>useAnimation_stories_namedExportsOrder,default:()=>useAnimation_stories});__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js");var react=__webpack_require__("./node_modules/react/index.js"),react_merge_refs_esm=(__webpack_require__("./node_modules/core-js/modules/es.set.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.map.js"),__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),element_createProxy=function createProxy(obj,targets){var elementCache=new Map;return new Proxy(obj,{get:function get(target,prop){if(target[prop])return target[prop];if(elementCache.has(prop))return elementCache.get(prop);var component=function createComponent(Element,targets){return(0,react.forwardRef)((function(props,propRef){var ref=(0,react.useRef)(null);return(0,react.useLayoutEffect)((function(){var el=ref.current;if(el)return targets.add(el),function(){targets.delete(el)}}),[]),(0,jsx_runtime.jsx)(Element,Object.assign({ref:(0,react.useMemo)((function(){return(0,react_merge_refs_esm.Z)([ref,propRef])}),[ref,propRef])},props))}))}(prop,targets);return elementCache.set(prop,component),component}})};__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.every.js"),__webpack_require__("./node_modules/core-js/modules/es.weak-map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var isSameObject=function isSameObject(){var target=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},prev=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},keys=Object.keys(target);return keys.length===Object.keys(prev).length&&keys.every((function(k){return target[k]===prev[k]}))},core_buildAnimationInitializer=function buildAnimationInitializer(getTargets){var cache=new WeakMap;return function(keyframes,options){return getTargets().map((function(el){if(cache.has(el)){var _ref2=_slicedToArray(cache.get(el),3),prevAnimation=_ref2[0],prevKeyframes=_ref2[1],prevOptions=_ref2[2];if(function isSameObjectArray(target,prev){return target.length===prev.length&&target.every((function(t,i){return isSameObject(t,prev[i])}))}(keyframes,prevKeyframes)&&isSameObject(options,prevOptions))return prevAnimation;prevAnimation.cancel()}var effect=new KeyframeEffect(el,keyframes,Object.assign({fill:"forwards"},options)),animation=new Animation(effect);return cache.set(el,[animation,keyframes,options]),animation}))}},core_createHandle=function createHandle(initAnimations){var animations=[];return{play:function play(keyframes,options){return(animations=initAnimations(keyframes,options)).forEach((function(a){return a.play()})),Promise.all(animations.map((function(a){return a.finished})))},replay:function replay(keyframes,options){return(animations=initAnimations(keyframes,options)).forEach((function(a){a.currentTime=0,a.play()})),Promise.all(animations.map((function(a){return a.finished})))},reverse:function reverse(keyframes,options){return(animations=initAnimations(keyframes,options)).forEach((function(a){return a.reverse()})),Promise.all(animations.map((function(a){return a.finished})))},cancel:function cancel(){animations.forEach((function(a){return a.cancel()}))},finish:function finish(){animations.forEach((function(a){return a.finish()}))},pause:function pause(){animations.forEach((function(a){return a.pause()}))},setTime:function setTime(time){animations.forEach((function(a){a.currentTime=time}))},setPlaybackRate:function setPlaybackRate(arg){animations.forEach((function(a){a.updatePlaybackRate("function"==typeof arg?arg(a.playbackRate):arg)}))}}};try{core_buildAnimationInitializer.displayName="buildAnimationInitializer",core_buildAnimationInitializer.__docgenInfo={description:"",displayName:"buildAnimationInitializer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/core.tsx#buildAnimationInitializer"]={docgenInfo:core_buildAnimationInitializer.__docgenInfo,name:"buildAnimationInitializer",path:"src/hooks/core.tsx#buildAnimationInitializer"})}catch(__react_docgen_typescript_loader_error){}try{core_createHandle.displayName="createHandle",core_createHandle.__docgenInfo={description:"",displayName:"createHandle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/core.tsx#createHandle"]={docgenInfo:core_createHandle.__docgenInfo,name:"createHandle",path:"src/hooks/core.tsx#createHandle"})}catch(__react_docgen_typescript_loader_error){}function useAnimation_slicedToArray(arr,i){return function useAnimation_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useAnimation_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function useAnimation_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useAnimation_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useAnimation_arrayLikeToArray(o,minLen)}(arr,i)||function useAnimation_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useAnimation_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var useAnimation=function useAnimation(keyframe,options){var keyframeRef=(0,react.useRef)(keyframe),optionsRef=(0,react.useRef)(options),_useState$=useAnimation_slicedToArray((0,react.useState)((function(){var targets=new Set,getKeyframes=function getKeyframes(){var kf=keyframeRef.current||[];return Array.isArray(kf)?kf:[kf]},getOptions=function getOptions(){return optionsRef.current},handle=core_createHandle(core_buildAnimationInitializer((function(){return Array.from(targets)}))),externalHandle={play:function play(){return handle.play(getKeyframes(),getOptions()).then((function(){return externalHandle}))},replay:function replay(){return handle.replay(getKeyframes(),getOptions()).then((function(){return externalHandle}))},reverse:function reverse(){return handle.reverse(getKeyframes(),getOptions()).then((function(){return externalHandle}))},cancel:handle.cancel,finish:handle.finish,pause:handle.pause,setTime:handle.setTime,setPlaybackRate:handle.setPlaybackRate};return[element_createProxy(externalHandle,targets),function(){targets.clear()}]}))[0],2),animation=_useState$[0],cleanup=_useState$[1];return(0,react.useLayoutEffect)((function(){keyframeRef.current=keyframe,optionsRef.current=options})),(0,react.useEffect)((function(){return cleanup}),[]),animation};const useAnimation_stories={component:useAnimation};var Hello={render:function render(){var animate=useAnimation([{transform:"translateX(-300px)"},{transform:"rotate(360deg)",fill:"red",fontSize:"36px",offset:.75},{transform:"rotate(0deg)"}],{duration:2e3,easing:"ease-in-out"});return(0,react.useEffect)((function(){animate.play()}),[]),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("svg",{width:600,height:300,viewBox:"0 0 600 300",children:(0,jsx_runtime.jsx)("g",{transform:"translate(100, 100)",children:(0,jsx_runtime.jsx)(animate.text,{fontSize:"24px",fill:"lightblue",children:"Hello world"})})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onClick:function onClick(){animate.play()},children:"play"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){animate.pause()},children:"pause"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){animate.reverse()},children:"reverse"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){animate.finish()},children:"finish"}),(0,jsx_runtime.jsx)("input",{type:"range",defaultValue:"0",min:0,max:2e3,onChange:function onChange(e){animate.setTime(Number(e.target.value))}})]})]})}},Toggle={render:function render(){var animate=useAnimation({transform:"translate3d(400px, 0, 0)"},{duration:800,easing:"ease-in-out"});(0,react.useEffect)((function(){animate.play()}),[animate]);var onClick=(0,react.useCallback)((function(){animate.reverse()}),[animate]);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onMouseDown:onClick,onTouchStart:onClick,children:"Toggle"}),(0,jsx_runtime.jsx)("div",{className:"rail",children:(0,jsx_runtime.jsx)(animate.div,{className:"block"})}),(0,jsx_runtime.jsx)("style",{children:"\n.rail {\n  border-radius: 4px;\n  background-color: rgb(240, 240, 232);\n  position: relative;\n  margin: 5px 3px 10px;\n  width: 450px;\n  height: 50px;\n}\n.block {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  border-radius: 4px;\n  background-color: rgb(130, 181, 198);\n}\n"})]})}},Path={render:function render(){var animate=useAnimation([{d:"path('M50,50L150,50L150,150L50,150z')"},{d:"path('M100,30L170,170L30,170L30,170z')"}],{duration:1e3,easing:"ease-in-out",iterations:1/0,direction:"alternate"});(0,react.useEffect)((function(){animate.play()}),[]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("svg",{width:400,height:300,viewBox:"0 0 400 300",children:(0,jsx_runtime.jsx)(animate.path,{fill:"orange"})})})}},useAnimation_stories_namedExportsOrder=["Hello","Toggle","Path"]},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./useAnimation.stories.tsx":"./stories/useAnimation.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[215],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);