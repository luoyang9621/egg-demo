(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["demo6"],{"97cc":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"demo6"},[e._v("\n  内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\n  内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\n  "),i("van-button",{on:{click:e.toPage}},[e._v("下一页")]),i("div",{directives:[{name:"permission",rawName:"v-permission",value:"addList",expression:"'addList'"}]},[e._v("权限测试权限测试权限测试权限测试权限测试元素")]),i("div",{directives:[{name:"permission",rawName:"v-permission"}]},[e._v("22222222222222")]),i("div",{ref:"self"},[e._v("1111wqaw")]),i("ul",e._l(e.list,function(t){return i("li",{key:t},[e._v(e._s(t))])}),0)],1)},o=[],n=(i("2f62"),{name:"demo6",props:{live:{type:String,default:""}},computed:{myLive:function(){return this.live+" 哈哈"}},data:function(){return{list:[1]}},methods:{toPage:function(){this.$router.push({name:"demo7"})}},beforeCreate:function(){console.log("beforeCreate",this.list,this,this.myLive,this.$refs.self)},created:function(){console.log("created",this.list,this.live,this.myLive,this.$refs.self)},beforeMount:function(){console.log("beforeMount",this.list,this.live,this.myLive,this.$refs.self)},mounted:function(){var e=this;console.log("mounted",this.list,this.live,this.myLive,this.$refs.self),setTimeout(function(){e.list.push(2,3)},5e3)},beforeUpdate:function(){console.log("beforeUpdate",this.list,this.live,this.myLive,this.$refs.self)},updated:function(){console.log("updated",this.list,this.live,this.myLive,this.$refs.self)},beforeDestroy:function(){console.log("beforeDestroy",this.list,this.live,this.myLive,this.$refs.self)},destroyed:function(){console.log("destroyed",this.list,this.live,this.myLive,this.$refs.self)}}),l=n,r=(i("dbc4"),i("2877")),f=Object(r["a"])(l,s,o,!1,null,"789e6c8d",null);t["default"]=f.exports},d526:function(e,t,i){},dbc4:function(e,t,i){"use strict";var s=i("d526"),o=i.n(s);o.a}}]);