(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["demo3"],{"55bb":function(t,e,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var o=n("bd86"),r=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach(function(e){Object(o["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var a={data:function(){return{$commonData1:"aa",$commonData2:"bb"}},computed:i({},Object(r["d"])({$_list:function(t){return t.moduleB.keepAliveList}})),created:function(){var t=this;console.log("mixin create完成",this.$data),0===this.$_list.length&&this.commitList().then(function(){t.$toast("action完成了")})},mounted:function(){console.log("mixin mounter完成",this.$data)},methods:i({$myF1:function(){console.log("mixin里面的myf1函数")}},Object(r["b"])({commitList:"moduleB/commitList"}))};e["a"]=a},c293:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo3"},[n("van-button",{attrs:{type:"primary"},on:{click:function(e){return t.$router.push({name:"demo4"})}}},[t._v("前进")]),n("van-button",{attrs:{type:"default"},on:{click:function(e){return t.$router.back()}}},[t._v("后退")]),n("van-button",{attrs:{type:"default"},on:{click:function(e){return t.updateP2(14324)}}},[t._v("触发p2改变")])],1)},r=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62"),a=n("55bb");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var p={name:"demo3",mixins:[a["a"]],computed:s({},Object(i["d"])({p2:function(t){return t.moduleA.p2}})),watch:{p2:function(t){console.log(111,t)}},created:function(){console.log("demo3组件内完成 create")},mounted:function(){console.log("demo3组件内完成 mounted",this.$data.$commonData1),this.$myF1()},methods:s({},Object(i["c"])({updateP2:"moduleA/updateP2"}))},l=p,f=n("2877"),m=Object(f["a"])(l,o,r,!1,null,"6271652c",null);e["default"]=m.exports}}]);