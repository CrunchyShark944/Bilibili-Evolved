!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/av-url"]=o():e["video/av-url"]=o()}(self,(function(){return function(){"use strict";var e={d:function(o,n){for(var t in n)e.o(n,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:n[t]})},o:function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}},o={};e.d(o,{component:function(){return s}});var n=coreApis.componentApis.define,t=coreApis.lifeCycle,r=coreApis.observer,i=coreApis.spinQuery,c=coreApis.utils.urls;const s=(0,n.defineComponentMetadata)({name:"avUrl",displayName:"网址AV号转换",description:{"zh-CN":"当视频的链接是BV号时, 自动转换为AV号. 请注意这会导致浏览器历史记录出现重复的标题 (分别是转换前后的网址), 并可能导致后退要多退几次."},entry:()=>{(0,t.fullyLoaded)((()=>{(0,r.urlChange)((async()=>{const e=await(0,i.select)((()=>unsafeWindow.aid));if(!e)return;if(document.URL.includes("videocard_series"))return void console.log("skip video series");const o=document.URL.replace(/\/(video|bangumi)\/(BV[\w]+)/i,((o,n)=>`/${n}/av${e}`));document.URL!==o&&window.history.replaceState(history.state,"",o)}))}))},tags:[componentsTags.video,componentsTags.utils],urlInclude:c.videoUrls,commitHash:"d8dd1116163cf72b4b88081e0b3ed38ec4a619c3",coreVersion:"2.5.0"});return o=o.component}()}));