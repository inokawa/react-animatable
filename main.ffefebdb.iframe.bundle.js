(self.webpackChunkreact_animatable=self.webpackChunkreact_animatable||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./stories/useAnimation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Hello:()=>Hello,Path:()=>Path,Toggle:()=>Toggle,__namedExportsOrder:()=>useAnimation_stories_namedExportsOrder,default:()=>useAnimation_stories});__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),core=__webpack_require__("./src/hooks/core.ts");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var useAnimation=function useAnimation(keyframe,options){var keyframeRef=(0,react.useRef)(keyframe),optionsRef=(0,react.useRef)(options),_useState$=_slicedToArray((0,react.useState)((function(){var ref=(0,react.createRef)(),getKeyframes=function getKeyframes(){return keyframeRef.current},getOptions=function getOptions(){return optionsRef.current},handle=(0,core.UR)((0,core.Ko)((function(){return ref.current}))),externalHandle={play:function play(){return handle._play(getKeyframes(),getOptions()),externalHandle},replay:function replay(){return handle._replay(getKeyframes(),getOptions()),externalHandle},reverse:function reverse(){return handle._reverse(getKeyframes(),getOptions()),externalHandle},cancel:handle._cancel,finish:handle._finish,pause:handle._pause,setTime:handle._setTime,setPlaybackRate:handle._setRate,end:handle._end,ref};return[externalHandle,function(){handle._cancel()}]}))[0],2),animation=_useState$[0],cleanup=_useState$[1];return(0,react.useLayoutEffect)((function(){keyframeRef.current=keyframe,optionsRef.current=options})),(0,react.useEffect)((function(){return cleanup}),[]),animation},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return useAnimation_stories_arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||useAnimation_stories_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useAnimation_stories_slicedToArray(arr,i){return function useAnimation_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useAnimation_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||useAnimation_stories_unsupportedIterableToArray(arr,i)||function useAnimation_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useAnimation_stories_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return useAnimation_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?useAnimation_stories_arrayLikeToArray(o,minLen):void 0}}function useAnimation_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const useAnimation_stories={component:useAnimation};var Hello={render:function render(){var _useState2=useAnimation_stories_slicedToArray((0,react.useState)(2e3),2),duration=_useState2[0],setDuration=_useState2[1],_useState4=useAnimation_stories_slicedToArray((0,react.useState)(2),2),iteration=_useState4[0],setIteration=_useState4[1],_useState6=useAnimation_stories_slicedToArray((0,react.useState)("alternate"),2),direction=_useState6[0],setDirection=_useState6[1],_useState8=useAnimation_stories_slicedToArray((0,react.useState)("cubic-bezier"),2),easing=_useState8[0],setEasing=_useState8[1],_useState10=useAnimation_stories_slicedToArray((0,react.useState)([.65,0,.35,1]),2),cubicBezierValues=_useState10[0],setCubicBezierValues=_useState10[1],_useState12=useAnimation_stories_slicedToArray((0,react.useState)([20,"end"]),2),stepsValues=_useState12[0],setStepsValues=_useState12[1],_useState14=useAnimation_stories_slicedToArray((0,react.useState)(0),2),delay=_useState14[0],setDelay=_useState14[1],_useState16=useAnimation_stories_slicedToArray((0,react.useState)(0),2),endDelay=_useState16[0],setEndDelay=_useState16[1],animate=useAnimation([{transform:"translateX(0px)"},{transform:"translateX(-300px)",offset:.1},{transform:"rotate(0deg)",fill:"red",fontSize:"36px",offset:.75},{transform:"rotate(360deg)"}],{duration,easing:"cubic-bezier"===easing?"cubic-bezier("+cubicBezierValues.join(",")+")":"steps"===easing?"steps("+stepsValues.join(",")+")":easing,direction,iterations:iteration,delay,endDelay});return(0,react.useEffect)((function(){animate.play()}),[duration,easing,cubicBezierValues,stepsValues,iteration,direction,delay]),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("svg",{width:600,height:300,viewBox:"0 0 600 300",children:(0,jsx_runtime.jsx)("g",{transform:"translate(100, 100)",children:(0,jsx_runtime.jsx)("text",{ref:animate.ref,fontSize:"24px",fill:"lightblue",children:"Hello world"})})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onClick:function onClick(){animate.play()},children:"play"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){animate.pause()},children:"pause"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){animate.reverse()},children:"reverse"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){animate.finish()},children:"finish"})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("label",{children:["duration:",(0,jsx_runtime.jsx)("input",{type:"number",min:0,value:duration,onChange:function onChange(e){setDuration(Number(e.target.value))}}),"ms"]})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("label",{children:["iteration:",(0,jsx_runtime.jsx)("input",{type:"number",min:1,value:iteration,onChange:function onChange(e){setIteration(Number(e.target.value))}})]})}),(0,jsx_runtime.jsxs)("div",{children:["easing:",["linear","ease","ease-in","ease-out","ease-in-out"].map((function(v){return(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)("input",{type:"radio",value:v,checked:easing===v,onChange:function onChange(e){setEasing(e.target.value)}}),v]},v)})),(0,jsx_runtime.jsx)("input",{type:"radio",value:"cubic-bezier",checked:0===easing.indexOf("cubic-bezier"),onChange:function onChange(e){setEasing(e.target.value)}}),"cubic-bezier(",cubicBezierValues.map((function(v,i){return(0,jsx_runtime.jsx)("input",{value:v,type:"number",step:.01,min:0,max:1,onChange:function onChange(e){setEasing("cubic-bezier"),setCubicBezierValues((function(prev){var next=_toConsumableArray(prev);return next[i]=Number(e.target.value),next}))}},i)})).reduce((function(acc,v,i){return acc.push(v),i!==cubicBezierValues.length-1&&acc.push(","),acc}),[]),")",(0,jsx_runtime.jsx)("input",{type:"radio",value:"steps",checked:0===easing.indexOf("steps"),onChange:function onChange(e){setEasing(e.target.value)}}),"steps(",(0,jsx_runtime.jsx)("input",{type:"number",step:1,min:1,value:stepsValues[0],onChange:function onChange(e){setEasing("steps"),setStepsValues((function(prev){return[Number(e.target.value),prev[1]]}))}}),",",(0,jsx_runtime.jsx)("input",{value:stepsValues[1],onChange:function onChange(e){setEasing("steps"),setStepsValues((function(prev){return[prev[0],e.target.value]}))}}),")"]}),(0,jsx_runtime.jsxs)("div",{children:["direction:",["normal","reverse","alternate","alternate-reverse"].map((function(v){return(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)("input",{type:"radio",value:v,checked:direction===v,onChange:function onChange(e){setDirection(e.target.value)}}),v]},v)}))]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("label",{children:["delay:",(0,jsx_runtime.jsx)("input",{type:"number",min:0,value:delay,onChange:function onChange(e){setDelay(Number(e.target.value))}}),"ms"]})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("label",{children:["endDelay:",(0,jsx_runtime.jsx)("input",{type:"number",min:0,value:endDelay,onChange:function onChange(e){setEndDelay(Number(e.target.value))}}),"ms"]})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("label",{children:["time:",(0,jsx_runtime.jsx)("input",{type:"range",defaultValue:"0",min:0,max:duration,onChange:function onChange(e){animate.setTime(Number(e.target.value)*iteration)}}),"ms"]})})]})}},Toggle={render:function render(){var animate=useAnimation({transform:"translate3d(400px, 0, 0)"},{duration:800,easing:"ease-in-out"});(0,react.useEffect)((function(){animate.play()}),[animate]);var onClick=(0,react.useCallback)((function(){animate.reverse()}),[animate]);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onMouseDown:onClick,onTouchStart:onClick,children:"Toggle"}),(0,jsx_runtime.jsx)("div",{className:"rail",children:(0,jsx_runtime.jsx)("div",{ref:animate.ref,className:"block"})}),(0,jsx_runtime.jsx)("style",{children:"\n.rail {\n  border-radius: 4px;\n  background-color: rgb(240, 240, 232);\n  position: relative;\n  margin: 5px 3px 10px;\n  width: 450px;\n  height: 50px;\n}\n.block {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  border-radius: 4px;\n  background-color: rgb(130, 181, 198);\n}\n"})]})}},Path={render:function render(){var animate=useAnimation([{d:"path('M50,50L150,50L150,150L50,150z')"},{d:"path('M100,30L170,170L30,170L30,170z')"}],{duration:1e3,easing:"ease-in-out",iterations:1/0,direction:"alternate"});(0,react.useEffect)((function(){animate.play()}),[]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("svg",{width:400,height:300,viewBox:"0 0 400 300",children:(0,jsx_runtime.jsx)("path",{ref:animate.ref,fill:"orange"})})})}},useAnimation_stories_namedExportsOrder=["Hello","Toggle","Path"]},"./stories/useAnimationFunction.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Canvas:()=>Canvas,Text:()=>Text,__namedExportsOrder:()=>useAnimationFunction_stories_namedExportsOrder,default:()=>useAnimationFunction_stories});__webpack_require__("./node_modules/core-js/modules/es.number.to-fixed.js"),__webpack_require__("./node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),core=__webpack_require__("./src/hooks/core.ts");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var bindUpdateFunction=function bindUpdateFunction(animation,getUpdateFunction){animation.ready.then((function update(){var _animation$effect,timing=null===(_animation$effect=animation.effect)||void 0===_animation$effect?void 0:_animation$effect.getComputedTiming();timing&&(null!=timing.progress&&getUpdateFunction()(timing),"running"===animation.playState&&requestAnimationFrame(update))}))},useAnimationFunction=function useAnimationFunction(onUpdate,options){var onUpdateRef=(0,react.useRef)(onUpdate),optionsRef=(0,react.useRef)(options),_useState$=_slicedToArray((0,react.useState)((function(){var getOptions=function getOptions(){return optionsRef.current},handle=(0,core.UR)(function buildAnimationInitializer(getUpdateFunction){var cache;return function(_,options){if(cache){var _cache2=_slicedToArray(cache,2),prevAnimation=_cache2[0],prevOptions=_cache2[1];if((0,core.Iq)(options,prevOptions))return"running"!==prevAnimation.playState&&bindUpdateFunction(prevAnimation,getUpdateFunction),prevAnimation;prevAnimation.cancel()}var animation=(0,core.ih)(null,null,options);return bindUpdateFunction(animation,getUpdateFunction),cache=[animation,options],animation}}((function getOnUpdate(){return onUpdateRef.current}))),externalHandle={play:function play(){return handle._play([],getOptions()),externalHandle},replay:function replay(){return handle._replay([],getOptions()),externalHandle},reverse:function reverse(){return handle._reverse([],getOptions()),externalHandle},cancel:handle._cancel,finish:handle._finish,pause:handle._pause,setTime:handle._setTime,setPlaybackRate:handle._setRate,end:handle._end};return[externalHandle,function(){handle._cancel()}]}))[0],2),animation=_useState$[0],cleanup=_useState$[1];return(0,react.useLayoutEffect)((function(){onUpdateRef.current=onUpdate,optionsRef.current=options})),(0,react.useEffect)((function(){return cleanup}),[]),animation},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function useAnimationFunction_stories_slicedToArray(arr,i){return function useAnimationFunction_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useAnimationFunction_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function useAnimationFunction_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useAnimationFunction_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useAnimationFunction_stories_arrayLikeToArray(o,minLen)}(arr,i)||function useAnimationFunction_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useAnimationFunction_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const useAnimationFunction_stories={component:useAnimationFunction};var Text={render:function render(){var _useState2=useAnimationFunction_stories_slicedToArray((0,react.useState)(!0),2),enable=_useState2[0],setEnable=_useState2[1],_useState4=useAnimationFunction_stories_slicedToArray((0,react.useState)(0),2),time=_useState4[0],setTime=_useState4[1],animate=useAnimationFunction((function(_ref){var progress=_ref.progress;setTime(progress)}),{duration:1e3,easing:"ease-in-out",iterations:1/0,direction:"alternate"});(0,react.useEffect)((function(){animate.play()}),[animate]);var onClick=(0,react.useCallback)((function(){setEnable((function(p){return!p})),enable?animate.pause():animate.play()}),[animate,enable]);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onMouseDown:onClick,onTouchStart:onClick,children:enable?"stop":"start"}),(0,jsx_runtime.jsx)("div",{children:time.toFixed(6)})]})}},Canvas={render:function render(){var ref=(0,react.useRef)(null),ctxRef=(0,react.useRef)(null),animate=useAnimationFunction((function(timing){if(ref.current){var ctx=ctxRef.current||(ctxRef.current=ref.current.getContext("2d"));ctx.clearRect(0,0,400,400),ctx.beginPath(),ctx.arc(200,200,50*timing.progress,0,2*Math.PI),ctx.fillStyle=["red","blue","green"][timing.currentIteration%3],ctx.fill()}}),{easing:"ease-in-out",duration:1e3,iterations:1/0,fill:"both"});return(0,react.useEffect)((function(){animate.play()}),[animate]),(0,jsx_runtime.jsx)("canvas",{ref,width:400,height:400})}},useAnimationFunction_stories_namedExportsOrder=["Text","Canvas"]},"./src/hooks/core.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Iq:()=>isSameObject,Ko:()=>buildAnimationInitializer,UR:()=>createHandle,ih:()=>createAnimation});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.every.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var isSameObject=function isSameObject(){var target=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},prev=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},keys=Object.keys(target);return keys.length===Object.keys(prev).length&&keys.every((function(k){return target[k]===prev[k]}))},createAnimation=function createAnimation(el,keyframes,options){var effect=new KeyframeEffect(el,keyframes,Object.assign({fill:"forwards"},options));return new Animation(effect)},buildAnimationInitializer=function buildAnimationInitializer(getTarget){var cache;return function(kf,options){var el=getTarget();if(el){var keyframes=Array.isArray(kf)?kf:[kf];if(cache){var _cache2=_slicedToArray(cache,4),prevEl=_cache2[0],prevAnimation=_cache2[1],prevKeyframes=_cache2[2],prevOptions=_cache2[3];if(el===prevEl&&function isSameObjectArray(target,prev){return target.length===prev.length&&target.every((function(t,i){return isSameObject(t,prev[i])}))}(keyframes,prevKeyframes)&&isSameObject(options,prevOptions))return prevAnimation;prevAnimation.cancel()}var animation=createAnimation(el,keyframes,options);return cache=[el,animation,keyframes,options],animation}}},createHandle=function createHandle(initAnimations){var animation;return{_play:function _play(keyframes,options){(animation=initAnimations(keyframes,options))&&animation.play()},_replay:function _replay(keyframes,options){(animation=initAnimations(keyframes,options))&&(animation.currentTime=0,animation.play())},_reverse:function _reverse(keyframes,options){(animation=initAnimations(keyframes,options))&&animation.reverse()},_cancel:function _cancel(){animation&&animation.cancel()},_finish:function _finish(){animation&&animation.finish()},_pause:function _pause(){animation&&animation.pause()},_setTime:function _setTime(time){animation&&(animation.currentTime=time)},_setRate:function _setRate(arg){animation&&animation.updatePlaybackRate("function"==typeof arg?arg(animation.playbackRate):arg)},_end:function _end(){return animation?animation.finished.then((function(){})):Promise.resolve()}}}},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./useAnimation.stories.tsx":"./stories/useAnimation.stories.tsx","./useAnimationFunction.stories.tsx":"./stories/useAnimationFunction.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[890],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);