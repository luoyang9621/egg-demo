(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{b3a9:function(e,t,n){},d046:function(e,t,n){"use strict";var s=n("b3a9"),o=n.n(s);o.a},dd7b:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("van-cell-group",{staticClass:"form"},[n("van-field",{attrs:{required:"",clearable:"",label:"用户名","right-icon":"question-o",placeholder:"请输入用户名"},on:{"click-right-icon":function(t){return e.$toast("question")}},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),n("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),n("div",{staticClass:"submit-btn"},[n("van-button",{attrs:{type:"info"},on:{click:e.submit}},[e._v("登录")])],1)],1)],1)},o=[],a={name:"login",data:function(){return{form:{username:"",password:""}}},mounted:function(){},methods:{submit:function(){var e=this,t=this.$toast.loading({duration:0});setTimeout(function(){t.clear();var n=[{permission:"p1"},{permission:"s2"},{permission:"m1"},{permission:"n2"}];localStorage.token="qae234erf234123434534ref3",localStorage.setItem("permission",JSON.stringify(n)),e.$router.push({name:"s1"})},2e3)}}},r=a,i=(n("d046"),n("2877")),l=Object(i["a"])(r,s,o,!1,null,"093fe79a",null);t["default"]=l.exports}}]);