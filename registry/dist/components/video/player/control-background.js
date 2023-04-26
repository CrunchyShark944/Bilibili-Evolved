!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/player/control-background"]=e():o["video/player/control-background"]=e()}(globalThis,(()=>(()=>{var o,e,r={727:(o,e,r)=>{var t=r(355)((function(o){return o[1]}));t.push([o.id,'.bilibili-player-video-control-mask {\n  background: transparent !important;\n}\n.bilibili-player-video-control .bilibili-player-video-control-bottom::before {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  height: calc(100% - 5px);\n  width: 100%;\n  background-color: rgba(0, 0, 0, var(--video-control-opacity));\n  z-index: -1;\n}\nbody.player-mode-webfullscreen .bilibili-player-video-control .bilibili-player-video-control-bottom::before, body.player-fullscreen-fix .bilibili-player-video-control .bilibili-player-video-control-bottom::before, body.player-full-win .bilibili-player-video-control .bilibili-player-video-control-bottom::before {\n  height: calc(100% + 2px);\n}\n\n.bpx-player-control-mask {\n  background: transparent !important;\n}\n.bpx-player-control-bottom::before {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  height: calc(100% - 17px);\n  width: 100%;\n  background-color: rgba(0, 0, 0, var(--video-control-opacity));\n  z-index: -1;\n}\nbody.player-mode-webfullscreen .bpx-player-control-bottom::before, body.player-fullscreen-fix .bpx-player-control-bottom::before, body.player-full-win .bpx-player-control-bottom::before {\n  height: calc(100% - 11px);\n}\n.playlist-container .bpx-player-control-bottom::before, .video-container-v1 .bpx-player-control-bottom::before {\n  height: calc(100% - 5px);\n}\nbody.player-mode-webfullscreen .playlist-container .bpx-player-control-bottom::before, body.player-fullscreen-fix .playlist-container .bpx-player-control-bottom::before, body.player-full-win .playlist-container .bpx-player-control-bottom::before, body.player-mode-webfullscreen .video-container-v1 .bpx-player-control-bottom::before, body.player-fullscreen-fix .video-container-v1 .bpx-player-control-bottom::before, body.player-full-win .video-container-v1 .bpx-player-control-bottom::before {\n  height: calc(100% + 1px);\n}\n\nbody.video-control-progress-background .squirtle-progress-bar:not(.squirtle-progress-buffer):not(.squirtle-progress-timeline):not(.squirtle-progress-dot-container),\nbody.video-control-progress-background .bpx-player-progress-schedule {\n  background-color: transparent !important;\n}\nbody.video-control-progress-background .bpx-player-progress,\nbody.video-control-progress-background .squirtle-progress-dot-container,\nbody.video-control-progress-background .bui-track-video-progress .bui-bar-wrap {\n  background: rgba(0, 0, 0, var(--video-control-opacity)) !important;\n}',""]),o.exports=t},355:o=>{"use strict";
// eslint-disable-next-line func-names
o.exports=function(o){var e=[];return e.toString=function(){return this.map((function(e){var r=o(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},
// eslint-disable-next-line func-names
e.i=function(o,r,t){"string"==typeof o&&(
// eslint-disable-next-line no-param-reassign
o=[[null,o,""]]);var n={};if(t)for(var l=0;l<this.length;l++){
// eslint-disable-next-line prefer-destructuring
var i=this[l][0];null!=i&&(n[i]=!0)}for(var a=0;a<o.length;a++){var c=[].concat(o[a]);t&&n[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},150:(o,e,r)=>{var t=r(727);t&&t.__esModule&&(t=t.default),o.exports="string"==typeof t?t:t.toString()},986:o=>{"use strict";o.exports=coreApis.settings}},t={};function n(o){var e=t[o];if(void 0!==e)return e.exports;var l=t[o]={id:o,exports:{}};return r[o](l,l.exports,n),l.exports}e=Object.getPrototypeOf?o=>Object.getPrototypeOf(o):o=>o.__proto__,n.t=function(r,t){if(1&t&&(r=this(r)),8&t)return r;if("object"==typeof r&&r){if(4&t&&r.__esModule)return r;if(16&t&&"function"==typeof r.then)return r}var l=Object.create(null);n.r(l);var i={};o=o||[null,e({}),e([]),e(e)];for(var a=2&t&&r;"object"==typeof a&&!~o.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((o=>i[o]=()=>r[o]));return i.default=()=>r,n.d(l,i),l},n.d=(o,e)=>{for(var r in e)n.o(e,r)&&!n.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},n.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),n.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var l={};return(()=>{"use strict";n.d(l,{component:()=>t});const o=coreApis.componentApis.define,e=coreApis.utils.urls,r=(0,o.defineOptionsMetadata)({opacity:{displayName:"不透明度(%)",defaultValue:64,slider:{}},includeProgress:{displayName:"包括进度条",defaultValue:!0}}),t=(0,o.defineComponentMetadata)({name:"playerControlBackground",displayName:"播放器控制栏背景色",tags:[componentsTags.video,componentsTags.style],description:{"zh-CN":"给视频播放器控制栏附上半透明的黑色, 代替原来的阴影."},entry:async o=>{let{metadata:e}=o;const{addComponentListener:r}=await Promise.resolve().then(n.t.bind(n,986,23));r(`${e.name}.includeProgress`,(o=>{document.body.classList.toggle("video-control-progress-background",o)}),!0),r(`${e.name}.opacity`,lodash.debounce((o=>{document.documentElement.style.setProperty("--video-control-opacity",(o/100).toString())}),200),!0)},instantStyles:[{name:"playerControlBackground",style:()=>Promise.resolve().then(n.t.bind(n,150,23))}],urlInclude:e.playerUrls,options:r,commitHash:"abadc5e0fabce190ff43f4213017387b88a9b319",coreVersion:"2.7.1"})})(),l=l.component})()));