!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["settings-panel/recent-components"]=t():e["settings-panel/recent-components"]=t()}(self,(function(){return function(){"use strict";var e,t,n={986:function(e){e.exports=coreApis.settings}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){a[e]=function(){return n[e]}}));return a.default=function(){return n},r.d(i,a),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){r.d(i,{plugin:function(){return e}});const e={name:"settingsPanel.tagFilters.recentComponents",displayName:'设置面板 - "最近使用" 类别',description:'在设置面板中添加 "最近使用" 类别, 方便检索最近操作过的组件.',setup:e=>{let{addData:t,addHook:n}=e;const o=async()=>{const{getGeneralSettings:e}=await Promise.resolve().then(r.t.bind(r,986,23)),t=e();return t.recentComponents||(t.recentComponents={}),t.recentComponents};n("settingsPanel.componentDetail.open",{after:async e=>{(await o())[e]=Number(new Date)}}),n("userComponents.add",{after:async(e,t,n)=>{(await o())[n.name]=Number(new Date)}}),n("userComponents.remove",{after:async e=>{delete(await o())[e.name]}}),t("settingsPanel.tagFilters",(async e=>{const t=await o();e.unshift((e=>{let{renderedComponents:n}=e;return{name:"recent",displayName:"最近",color:"inherit",icon:"mdi-clock-outline",order:0,count:n.length,filter:e=>lodash.sortBy(e,(e=>t[e.name]??0)).reverse()}}))}))},commitHash:"d8dd1116163cf72b4b88081e0b3ed38ec4a619c3",coreVersion:"2.5.0"}}(),i=i.plugin}()}));