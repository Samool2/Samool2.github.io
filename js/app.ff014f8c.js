(function(e){function t(t){for(var r,i,u=t[0],s=t[1],l=t[2],d=0,b=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);a&&a(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var a=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01a1":function(e,t,n){},"081c":function(e,t,n){"use strict";n("4bcb")},1677:function(e,t,n){},"40ac":function(e,t,n){"use strict";n("9389")},"41c7":function(e,t,n){},"4bcb":function(e,t,n){},"4c1b":function(e,t,n){"use strict";n("ae41")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,o,i){var u=Object(r["p"])("the-header"),s=Object(r["p"])("the-resources");return Object(r["k"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(u,{title:"Learning Resources"}),Object(r["i"])(s)],64)}function o(e,t,n,c,o,i){return Object(r["k"])(),Object(r["f"])("header",null,[Object(r["g"])("h1",null,Object(r["r"])(n.title),1)])}var i={props:["title"]},u=(n("8be7"),n("6b0d")),s=n.n(u);const l=s()(i,[["render",o],["__scopeId","data-v-db675710"]]);var a=l,d=Object(r["h"])("Stored Resources"),b=Object(r["h"])("Add Resources");function f(e,t,n,c,o,i){var u=Object(r["p"])("base-button"),s=Object(r["p"])("base-card");return Object(r["k"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(s,null,{default:Object(r["s"])((function(){return[Object(r["i"])(u,{onClick:t[0]||(t[0]=function(e){return i.setSelectedTab("stored-resources")}),mode:i.setStoredResButton},{default:Object(r["s"])((function(){return[d]})),_:1},8,["mode"]),Object(r["i"])(u,{onClick:t[1]||(t[1]=function(e){return i.setSelectedTab("add-resource")}),mode:i.setAddResButton},{default:Object(r["s"])((function(){return[b]})),_:1},8,["mode"])]})),_:1}),(Object(r["k"])(),Object(r["d"])(r["b"],null,[(Object(r["k"])(),Object(r["d"])(Object(r["q"])(o.selectedTab)))],1024))],64)}n("c740"),n("a434");var p=function(e){return Object(r["m"])("data-v-5b42242b"),e=e(),Object(r["l"])(),e},j=p((function(){return Object(r["g"])("p",null,"Every field requires at least a few characters!",-1)})),O=Object(r["h"])("OK"),v={class:"form-control"},h=p((function(){return Object(r["g"])("label",{for:"title"},"Title",-1)})),g={id:"title",name:"title",type:"text",ref:"titleInput"},m={class:"form-control"},k=p((function(){return Object(r["g"])("label",{for:"description"},"Description",-1)})),_={name:"description",id:"description",ref:"descriptionInput",rows:"3"},y={class:"form-control"},I=p((function(){return Object(r["g"])("label",{for:"link"},"Link",-1)})),R={id:"link",name:"Link",ref:"linkInput",type:"url"},S=Object(r["h"])("Add Resource");function T(e,t,n,c,o,i){var u=Object(r["p"])("base-button"),s=Object(r["p"])("base-dialog"),l=Object(r["p"])("base-card");return Object(r["k"])(),Object(r["f"])(r["a"],null,[o.inputIsInvalid?(Object(r["k"])(),Object(r["d"])(s,{key:0,title:"Invalid input."},{default:Object(r["s"])((function(){return[j]})),actions:Object(r["s"])((function(){return[Object(r["i"])(u,{onClick:i.confirmError},{default:Object(r["s"])((function(){return[O]})),_:1},8,["onClick"])]})),_:1})):Object(r["e"])("",!0),Object(r["i"])(l,null,{default:Object(r["s"])((function(){return[Object(r["g"])("form",{onSubmit:t[0]||(t[0]=Object(r["t"])((function(){}),["prevent"]))},[Object(r["g"])("div",v,[h,Object(r["g"])("input",g,null,512)]),Object(r["g"])("div",m,[k,Object(r["g"])("textarea",_,null,512)]),Object(r["g"])("div",y,[I,Object(r["g"])("input",R,null,512)]),Object(r["g"])("div",null,[Object(r["i"])(u,{type:"submit",onClick:i.submitData},{default:Object(r["s"])((function(){return[S]})),_:1},8,["onClick"])])],32)]})),_:1})],64)}n("498a");var w=function(e){return Object(r["m"])("data-v-5d487ef6"),e=e(),Object(r["l"])(),e},$=w((function(){return Object(r["g"])("div",null,null,-1)})),x={open:""};function C(e,t,n,c,o,i){return Object(r["k"])(),Object(r["f"])(r["a"],null,[$,Object(r["g"])("dialog",x,[Object(r["g"])("header",null,[Object(r["o"])(e.$slots,"header",{},(function(){return[Object(r["g"])("h2",null,Object(r["r"])(n.title),1)]}),!0)]),Object(r["g"])("section",null,[Object(r["o"])(e.$slots,"default",{},void 0,!0)]),Object(r["g"])("menu",null,[Object(r["o"])(e.$slots,"actions",{},void 0,!0)])])],64)}var P={props:{title:{type:String,required:!1}}};n("a87d");const D=s()(P,[["render",C],["__scopeId","data-v-5d487ef6"]]);var A=D,B={components:{BaseDialog:A},inject:["addResource"],data:function(){return{inputIsInvalid:!1}},methods:{submitData:function(){var e=this.$refs.titleInput.value,t=this.$refs.descriptionInput.value,n=this.$refs.linkInput.value;""!=e.trim()||""!=t.trim()||""!=n.trim()?(this.addResource(e,t,n),this.$refs.titleInput.value="",this.$refs.descriptionInput.value="",this.$refs.linkInput.value=""):(console.warn("Text required in all fields."),this.inputIsInvalid=!0)},confirmError:function(){this.inputIsInvalid=!1}},provide:function(){return{}}};n("be59");const M=s()(B,[["render",T],["__scopeId","data-v-5b42242b"]]);var q=M;n("a4d3"),n("e01a"),n("9911");function L(e,t,n,c,o,i){var u=Object(r["p"])("list-item");return Object(r["k"])(),Object(r["f"])("ul",null,[(Object(r["k"])(!0),Object(r["f"])(r["a"],null,Object(r["n"])(i.resources,(function(e){return Object(r["k"])(),Object(r["d"])(u,{id:e.id,key:e.id,title:e.title,description:e.description,link:e.link},null,8,["id","title","description","link"])})),128))])}var E=Object(r["h"])("Delete"),G=["href"];function J(e,t,n,c,o,i){var u=Object(r["p"])("base-button"),s=Object(r["p"])("base-card");return Object(r["k"])(),Object(r["f"])("li",null,[Object(r["i"])(s,null,{default:Object(r["s"])((function(){return[Object(r["g"])("header",null,[Object(r["g"])("h3",null,Object(r["r"])(n.title),1),Object(r["i"])(u,{onClick:t[0]||(t[0]=function(e){return i.removeResource(n.id)}),class:"flat"},{default:Object(r["s"])((function(){return[E]})),_:1})]),Object(r["g"])("p",null,Object(r["r"])(n.description),1),Object(r["g"])("nav",null,[Object(r["g"])("a",{href:n.link},"View Resource",8,G)])]})),_:1})])}var V={inject:["removeResource"],props:["id","title","description","link"],methods:{deleteMethod:function(){}}};n("081c");const H=s()(V,[["render",J],["__scopeId","data-v-c2658826"]]);var K=H,z={components:{ListItem:K},inject:["resources"]};n("40ac");const F=s()(z,[["render",L],["__scopeId","data-v-339638fa"]]);var N=F,Q={data:function(){return{selectedTab:"stored-resources",storedResources:[{id:"official-guide",title:"Official Guide",description:"The official Vue.js docs.",link:"https://vuejs.org"},{id:"google",title:"Google",description:"Super useful for learning anything.",link:"https://google.com"}]}},provide:function(){return{resources:this.storedResources,addResource:this.addResource,removeResource:this.removeResource}},methods:{setSelectedTab:function(e){this.selectedTab=e},addResource:function(e,t,n){var r={id:(new Date).toISOString(),title:e,description:t,link:n};this.storedResources.unshift(r),this.selectedTab="stored-resources"},removeResource:function(e){var t=this.storedResources.findIndex((function(t){return t.id===e}));this.storedResources.splice(t,1)}},computed:{setStoredResButton:function(){return"stored-resources"===this.selectedTab?null:"flat"},setAddResButton:function(){return"add-resource"===this.selectedTab?null:"flat"}},components:{AddResource:q,StoredResources:N}};n("a2df");const U=s()(Q,[["render",f],["__scopeId","data-v-6e900ea4"]]);var W=U,X={components:{TheHeader:a,TheResources:W}};n("a48f");const Y=s()(X,[["render",c]]);var Z=Y;function ee(e,t,n,c,o,i){return Object(r["k"])(),Object(r["f"])("div",null,[Object(r["o"])(e.$slots,"default",{},void 0,!0)])}var te={};n("4c1b");const ne=s()(te,[["render",ee],["__scopeId","data-v-72ab83f9"]]);var re=ne,ce=["type"];function oe(e,t,n,c,o,i){return Object(r["k"])(),Object(r["f"])("button",{type:n.type,class:Object(r["j"])(n.mode)},[Object(r["o"])(e.$slots,"default",{},void 0,!0)],10,ce)}var ie={props:["type","mode"]};n("6ada");const ue=s()(ie,[["render",oe],["__scopeId","data-v-3fc568b1"]]);var se=ue,le=Object(r["c"])(Z);le.component("base-card",re),le.component("base-button",se),le.component("base-dialog",A),le.mount("#app")},"6ada":function(e,t,n){"use strict";n("886f")},"886f":function(e,t,n){},"8be7":function(e,t,n){"use strict";n("e468")},9389:function(e,t,n){},a2df:function(e,t,n){"use strict";n("1677")},a48f:function(e,t,n){"use strict";n("41c7")},a87d:function(e,t,n){"use strict";n("c3a6")},ae41:function(e,t,n){},be59:function(e,t,n){"use strict";n("01a1")},c3a6:function(e,t,n){},e468:function(e,t,n){}});
//# sourceMappingURL=app.ff014f8c.js.map