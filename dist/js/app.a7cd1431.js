(function(t){function e(e){for(var a,i,s=e[0],o=e[1],u=e[2],l=0,m=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(m.length)m.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r={app:0},c=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-07709945":"966e3bae","chunk-f146a138":"e5cc5382","chunk-aa8076b2":"e92c64e9","chunk-af1f06b6":"0ed918e0","chunk-1b42c010":"86849145","chunk-1f4e964e":"80f66341","chunk-4cd5675e":"9838df0a","chunk-35ae6184":"18f8069d","chunk-436e18c2":"5df40b99","chunk-7cde9796":"7e0df3cd","chunk-d4cb0fea":"71cf74ae","chunk-7a0b687c":"07551cd7","chunk-a34c1d52":"3cc9cb77","chunk-5f4c79e9":"83da46c3","chunk-49b20f4c":"8fc64250","chunk-4305a8be":"7bb7c911","chunk-8e9caf7e":"73b94c45","chunk-b279b0dc":"36d447ba"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-07709945":1,"chunk-f146a138":1,"chunk-aa8076b2":1,"chunk-af1f06b6":1,"chunk-1b42c010":1,"chunk-1f4e964e":1,"chunk-4cd5675e":1,"chunk-35ae6184":1,"chunk-436e18c2":1,"chunk-7cde9796":1,"chunk-d4cb0fea":1,"chunk-7a0b687c":1,"chunk-a34c1d52":1,"chunk-5f4c79e9":1,"chunk-49b20f4c":1,"chunk-4305a8be":1,"chunk-b279b0dc":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-07709945":"e0918c87","chunk-f146a138":"1575eb72","chunk-aa8076b2":"9a05ac9e","chunk-af1f06b6":"9a05ac9e","chunk-1b42c010":"ff3d539c","chunk-1f4e964e":"8db80aba","chunk-4cd5675e":"50941b76","chunk-35ae6184":"ea25f702","chunk-436e18c2":"a7337f73","chunk-7cde9796":"3d239011","chunk-d4cb0fea":"c3fa71db","chunk-7a0b687c":"a451a762","chunk-a34c1d52":"8ed19ad3","chunk-5f4c79e9":"ab1ef08c","chunk-49b20f4c":"b943bab1","chunk-4305a8be":"a4e5e3fb","chunk-8e9caf7e":"31d6cfe0","chunk-b279b0dc":"12e26f10"}[t]+".css",r=o.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return e()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){u=m[s],l=u.getAttribute("data-href");if(l===a||l===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete i[t],d.parentNode.removeChild(d),n(c)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){i[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t);var m=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",m.name="ChunkLoadError",m.type=a,m.request=i,n[1](m)}r[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var m=0;m<u.length;m++)e(u[m]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1510:function(t,e,n){},1698:function(t,e,n){"use strict";n("1510")},"3c61":function(t,e,n){},4951:function(t,e,n){"use strict";n("6732")},5331:function(t,e,n){t.exports=n.p+"img/logo.a1918669.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("ed09"),i=n("2b0e");i["default"].use(a["default"]);n("3c61");var r=n("6c42"),c=(n("da96"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.resolveLayout,{tag:"component"},[n("router-view")],1)}),s=[],o=(n("b0c0"),n("5530")),u=function(){var t=Object(a["getCurrentInstance"])().proxy,e=Object(a["reactive"])({route:t.$route});return Object(a["watch"])((function(){return t.$route}),(function(t){e.route=t})),Object(o["a"])(Object(o["a"])({},Object(a["toRefs"])(e)),{},{router:t.$router})},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("router-view")],1)],1)},m=[],d={},p=d,f=n("2877"),v=n("6544"),h=n.n(v),b=n("7496"),g=n("f6c4"),k=Object(f["a"])(p,l,m,!1,null,null,null),y=k.exports;h()(k,{VApp:b["a"],VMain:g["a"]});var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("vertical-nav-menu",{attrs:{"is-drawer-open":t.isDrawerOpen},on:{"update:isDrawerOpen":function(e){t.isDrawerOpen=e},"update:is-drawer-open":function(e){t.isDrawerOpen=e}}}),n("v-app-bar",{staticClass:"mx-auto app-bar-static app-bar",class:[{"px-5 app-bar-shinked":t.scrollY},{"bg-blur":t.scrollY}],attrs:{app:"",flat:"","elevate-on-scroll":!0,elevation:t.$vuetify.theme.isDark?4:3,color:"transparent"}},[n("div",{staticClass:"boxed-container w-full"},[n("div",{staticClass:"d-flex align-center"},[n("v-app-bar-nav-icon",{staticClass:"d-block d-lg-none me-2",on:{click:function(e){t.isDrawerOpen=!t.isDrawerOpen}}}),n("p",{staticClass:"ma-0 text-h5"},[t._v(t._s(t.$route.meta.name))]),n("v-spacer"),n("theme-switcher"),n("v-btn",{staticClass:"ms-3",attrs:{icon:"",small:""}},[n("v-icon",[t._v(" "+t._s(t.icons.mdiBellOutline)+" ")])],1),n("app-bar-user-menu")],1)])]),n("v-main",[n("div",{staticClass:"app-content-container boxed-container pa-6"},[t._t("default")],2)]),n("v-footer",{staticClass:"px-0",attrs:{app:"",inset:"",color:"transparent",absolute:"",height:"56"}},[n("div",{staticClass:"boxed-container w-full"},[n("div",{staticClass:"mx-6 d-flex justify-space-between"},[n("span",[t._v(" © 2021 "),n("a",{staticClass:"text-decoration-none",attrs:{href:"https://themeselection.com",target:"_blank"}},[t._v("ThemeSelection")])]),n("span",{staticClass:"d-sm-inline d-none"},[n("a",{staticClass:"me-6 text--secondary text-decoration-none",attrs:{href:"https://themeselection.com/products/category/download-free-admin-templates/",target:"_blank"}},[t._v("Freebies")]),n("a",{staticClass:"me-6 text--secondary text-decoration-none",attrs:{href:"https://themeselection.com/blog/",target:"_blank"}},[t._v("Blog")]),n("a",{staticClass:"text--secondary text-decoration-none",attrs:{href:"https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free/blob/main/LICENSE",target:"_blank"}},[t._v("MIT Licence")])])])])])],1)},C=[],O=n("94ed"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticClass:"app-navigation-menu",attrs:{value:t.isDrawerOpen,app:"",floating:"",width:"260",right:t.$vuetify.rtl},on:{input:function(e){return t.$emit("update:is-drawer-open",e)}}},[a("div",{staticClass:"vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2"},[a("router-link",{staticClass:"d-flex align-center text-decoration-none",attrs:{to:"/"}},[a("v-img",{staticClass:"app-logo me-3",attrs:{src:n("5331"),"max-height":"30px","max-width":"30px",alt:"logo",contain:"",eager:""}}),a("v-slide-x-transition",[a("h2",{staticClass:"app-title text--primary"},[t._v(" MATERIO ")])])],1)],1),a("v-list",{staticClass:"vertical-nav-menu-items pr-5",attrs:{expand:"",shaped:""}},[a("nav-menu-link",{attrs:{title:"Dashboard",to:{name:"dashboard"},icon:t.icons.mdiHomeOutline}}),a("nav-menu-group",{attrs:{title:"Catalog",icon:t.icons.mdiTagMultiple}},[a("nav-menu-link",{attrs:{title:"Brands",to:{name:"brands"}}}),a("nav-menu-link",{attrs:{title:"Categories",to:{name:"categories"}}}),a("nav-menu-link",{attrs:{title:"Products",to:{name:"images"}}})],1),a("nav-menu-link",{attrs:{title:"Account Settings",to:{name:"pages-account-settings"},icon:t.icons.mdiAccountCogOutline}}),a("nav-menu-link",{attrs:{title:"Images",to:{name:"images"},icon:t.icons.mdiAccountCogOutline}}),a("nav-menu-group",{attrs:{title:"Pages",icon:t.icons.mdiFileOutline}},[a("nav-menu-link",{attrs:{title:"Login",to:{name:"login"}}}),a("nav-menu-link",{attrs:{title:"Register",to:{name:"register"}}}),a("nav-menu-link",{attrs:{title:"Error",to:{name:"error-404"},target:"_blank"}})],1),a("nav-menu-section-title",{attrs:{title:"USER INTERFACE"}}),a("nav-menu-link",{attrs:{title:"Typography",to:{name:"typography"},icon:t.icons.mdiAlphaTBoxOutline}}),a("nav-menu-link",{attrs:{title:"Icons",to:{name:"icons"},icon:t.icons.mdiEyeOutline}}),a("nav-menu-link",{attrs:{title:"Cards",to:{name:"cards"},icon:t.icons.mdiCreditCardOutline}}),a("nav-menu-link",{attrs:{title:"Tables",to:{name:"simple-table"},icon:t.icons.mdiTable}}),a("nav-menu-link",{attrs:{title:"Form Layouts",to:{name:"form-layouts"},icon:t.icons.mdiFormSelect}})],1)],1)},w=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-subheader",[n("span",{staticClass:"title-wrapper"},[n("span",[t._v(t._s(t.title))])])])},V=[],L={props:{title:{type:String,required:!0}}},S=L,j=(n("c409"),n("e0c7")),P=Object(f["a"])(S,I,V,!1,null,"2fbbbcd0",null),A=P.exports;h()(P,{VSubheader:j["a"]});var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-group",{ref:"refVListGroup",staticClass:"vertical-nav-menu-group text--primary",scopedSlots:t._u([{key:"prependIcon",fn:function(){return[n("v-icon",{class:{"alternate-icon-small":!t.icon}},[t._v(" "+t._s(t.icon)+" ")])]},proxy:!0},{key:"activator",fn:function(){return[n("v-list-item-title",[t._v(" "+t._s(t.title)+" ")])]},proxy:!0}])},[t._t("default")],2)},T=[],F={props:{title:{type:String,required:!0},icon:{type:String,required:!0}},setup:function(){return{}}},B=F,$=(n("4951"),n("132d")),D=n("56b0"),M=n("5d23"),N=Object(f["a"])(B,E,T,!1,null,null,null),z=N.exports;h()(N,{VIcon:$["a"],VListGroup:D["a"],VListItemTitle:M["c"]});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",t._b({staticClass:"vertical-nav-menu-link",attrs:{"active-class":"bg-gradient-primary white--text"}},"v-list-item",t.$attrs,!1),[n("v-list-item-icon",[n("v-icon",{staticClass:"mx-auto",class:{"alternate-icon-small":!t.icon}},[t._v(" "+t._s(t.icon||t.alternateIcon)+" ")])],1),n("v-list-item-title",[t._v(" "+t._s(t.title)+" ")])],1)},q=[],H={props:{title:{type:String,required:!0},icon:{type:String,default:void 0}},setup:function(){return{alternateIcon:O["Q"]}}},U=H,G=(n("1698"),n("da13")),W=n("34c3"),J=Object(f["a"])(U,R,q,!1,null,"aafed2c8",null),Y=J.exports;h()(J,{VIcon:$["a"],VListItem:G["a"],VListItemIcon:W["a"],VListItemTitle:M["c"]});var K={components:{NavMenuSectionTitle:A,NavMenuGroup:z,NavMenuLink:Y},props:{isDrawerOpen:{type:Boolean,default:null}},setup:function(){return{icons:{mdiHomeOutline:O["yb"],mdiAlphaTBoxOutline:O["K"],mdiEyeOutline:O["nb"],mdiCreditCardOutline:O["db"],mdiTable:O["Ob"],mdiFileOutline:O["qb"],mdiFormSelect:O["tb"],mdiAccountCogOutline:O["z"],mdiTagMultiple:O["Pb"]}}}},Q=K,X=(n("a5c0"),n("adda")),Z=n("8860"),tt=n("f774"),et=n("0789"),nt=Object(f["a"])(Q,x,w,!1,null,null,null),at=nt.exports;h()(nt,{VImg:X["a"],VList:Z["a"],VNavigationDrawer:tt["a"],VSlideXTransition:et["d"]});var it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-fade-transition",{attrs:{mode:"out-in"}},[n("v-icon",{key:t.$vuetify.theme.dark,on:{click:function(e){t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[t._v(" "+t._s(t.$vuetify.theme.dark?t.icons.mdiWeatherSunny:t.icons.mdiWeatherNight)+" ")])],1)},rt=[],ct={setup:function(){return{icons:{mdiWeatherNight:O["Sb"],mdiWeatherSunny:O["Tb"]}}}},st=ct,ot=Object(f["a"])(st,it,rt,!1,null,null,null),ut=ot.exports;h()(ot,{VFadeTransition:et["c"],VIcon:$["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{"offset-y":"",left:"","nudge-bottom":"14","min-width":"230","content-class":"user-profile-menu-content"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[a("v-badge",{staticClass:"ms-4",attrs:{bottom:"",color:"success",overlap:"","offset-x":"12","offset-y":"12",dot:""}},[a("v-avatar",t._g(t._b({attrs:{size:"40px"}},"v-avatar",r,!1),i),[a("v-img",{attrs:{src:n("f7d6")}})],1)],1)]}}])},[a("v-list",[a("div",{staticClass:"pb-3 pt-2"},[a("v-badge",{staticClass:"ms-4",attrs:{bottom:"",color:"success",overlap:"","offset-x":"12","offset-y":"12",dot:""}},[a("v-avatar",{attrs:{size:"40px"}},[a("v-img",{attrs:{src:n("f7d6")}})],1)],1),a("div",{staticClass:"d-inline-flex flex-column justify-center ms-3",staticStyle:{"vertical-align":"middle"}},[a("span",{staticClass:"text--primary font-weight-semibold mb-n1"},[t._v(" John Doe ")]),a("small",{staticClass:"text--disabled text-capitalize"},[t._v("Admin")])])],1),a("v-divider"),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",{staticClass:"me-2"},[a("v-icon",{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiAccountOutline)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Profile")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",{staticClass:"me-2"},[a("v-icon",{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiEmailOutline)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Inbox")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",{staticClass:"me-2"},[a("v-icon",{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiChatOutline)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Chat")])],1),a("v-list-item-action",[a("v-badge",{attrs:{inline:"",color:"error",content:"2"}})],1)],1),a("v-divider",{staticClass:"my-2"}),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",{staticClass:"me-2"},[a("v-icon",{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiCogOutline)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Settings")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",{staticClass:"me-2"},[a("v-icon",{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiCurrencyUsd)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Pricing")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",{staticClass:"me-2"},[a("v-icon",{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiHelpCircleOutline)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("FAQ")])],1)],1),a("v-divider",{staticClass:"my-2"}),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",{staticClass:"me-2"},[a("v-icon",{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiLogoutVariant)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1)},mt=[],dt={setup:function(){return{icons:{mdiAccountOutline:O["B"],mdiEmailOutline:O["kb"],mdiCheckboxMarkedOutline:O["R"],mdiChatOutline:O["O"],mdiCogOutline:O["ab"],mdiCurrencyUsd:O["fb"],mdiHelpCircleOutline:O["xb"],mdiLogoutVariant:O["Gb"]}}}},pt=dt,ft=(n("cf72"),n("8212")),vt=n("4ca6"),ht=n("ce7e"),bt=n("1800"),gt=n("e449"),kt=Object(f["a"])(pt,lt,mt,!1,null,null,null),yt=kt.exports;h()(kt,{VAvatar:ft["a"],VBadge:vt["a"],VDivider:ht["a"],VIcon:$["a"],VImg:X["a"],VList:Z["a"],VListItem:G["a"],VListItemAction:bt["a"],VListItemContent:M["a"],VListItemIcon:W["a"],VListItemTitle:M["c"],VMenu:gt["a"]});var _t=n("2c28"),Ct={components:{VerticalNavMenu:at,ThemeSwitcher:ut,AppBarUserMenu:yt},setup:function(){var t=Object(a["ref"])(null),e=Object(_t["useWindowScroll"])(),n=e.y;return{isDrawerOpen:t,scrollY:n,icons:{mdiMagnify:O["Hb"],mdiBellOutline:O["L"],mdiGithub:O["ub"]}}}},Ot=Ct,xt=(n("af20"),n("40dc")),wt=n("5bc1"),It=n("8336"),Vt=n("553a"),Lt=n("2fa4"),St=Object(f["a"])(Ot,_,C,!1,null,"43918527",null),jt=St.exports;h()(St,{VApp:b["a"],VAppBar:xt["a"],VAppBarNavIcon:wt["a"],VBtn:It["a"],VFooter:Vt["a"],VIcon:$["a"],VMain:g["a"],VSpacer:Lt["a"]});var Pt=n("2f62"),At={components:{LayoutBlank:y,LayoutContent:jt},setup:function(){var t=u(),e=t.route,n=Object(a["computed"])((function(){return null===e.value.name?null:"blank"===e.value.meta.layout?"layout-blank":"layout-content"}));return{resolveLayout:n}},computed:Object(Pt["c"])({isLoggedIn:function(t){return t.auth.isLoggedIn}})},Et=At,Tt=Object(f["a"])(Et,c,s,!1,null,null,null),Ft=Tt.exports,Bt=n("f309");n("67de");var $t={theme:{themes:{light:{primary:"#9155FD",accent:"#0d6efd",secondary:"#8A8D93",success:"#56CA00",info:"#16B1FF",warning:"#FFB400",error:"#FF4C51"},dark:{primary:"#9155FD",accent:"#0d6efd",secondary:"#8A8D93",success:"#56CA00",info:"#16B1FF",warning:"#FFB400",error:"#FF4C51"}}}};i["default"].use(Bt["a"]);var Dt=new Bt["a"]({preset:$t,icons:{iconfont:"mdiSvg"},theme:{dark:!0,options:{customProperties:!0,variations:!1}}}),Mt=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));i["default"].use(Mt["a"]);var Nt=[{path:"/",redirect:"dashboard"},{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([n.e("chunk-4cd5675e"),n.e("chunk-07709945"),n.e("chunk-436e18c2"),n.e("chunk-a34c1d52")]).then(n.bind(null,"5c3a"))}},{path:"/typography",name:"typography",component:function(){return Promise.all([n.e("chunk-4cd5675e"),n.e("chunk-8e9caf7e")]).then(n.bind(null,"9699"))}},{path:"/icons",name:"icons",component:function(){return n.e("chunk-1f4e964e").then(n.bind(null,"af46"))}},{path:"/cards",name:"cards",component:function(){return Promise.all([n.e("chunk-4cd5675e"),n.e("chunk-35ae6184"),n.e("chunk-49b20f4c")]).then(n.bind(null,"85ca"))}},{path:"/simple-table",name:"simple-table",component:function(){return Promise.all([n.e("chunk-4cd5675e"),n.e("chunk-4305a8be")]).then(n.bind(null,"26b2"))}},{path:"/form-layouts",name:"form-layouts",component:function(){return Promise.all([n.e("chunk-4cd5675e"),n.e("chunk-07709945"),n.e("chunk-5f4c79e9")]).then(n.bind(null,"0a6d"))}},{path:"/images",name:"images",component:function(){return Promise.all([n.e("chunk-4cd5675e"),n.e("chunk-b279b0dc")]).then(n.bind(null,"ab55"))}},{path:"/brands",name:"brands",component:function(){return Promise.all([n.e("chunk-4cd5675e"),n.e("chunk-07709945"),n.e("chunk-35ae6184"),n.e("chunk-7a0b687c")]).then(n.bind(null,"2b91"))},meta:{name:"Brands"}},{path:"/categories",name:"categories",component:function(){return Promise.all([n.e("chunk-4cd5675e"),n.e("chunk-07709945"),n.e("chunk-35ae6184"),n.e("chunk-436e18c2"),n.e("chunk-7cde9796")]).then(n.bind(null,"952f"))},meta:{name:"Categories"}},{path:"/pages/account-settings",name:"pages-account-settings",component:function(){return Promise.all([n.e("chunk-4cd5675e"),n.e("chunk-07709945"),n.e("chunk-35ae6184"),n.e("chunk-436e18c2"),n.e("chunk-d4cb0fea")]).then(n.bind(null,"d250"))},meta:{name:"Account Settings"}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-f146a138"),n.e("chunk-af1f06b6")]).then(n.bind(null,"8b48"))},props:!0,meta:{layout:"blank"}},{path:"/register",name:"register",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-f146a138"),n.e("chunk-aa8076b2")]).then(n.bind(null,"aaf8"))},meta:{layout:"blank"}},{path:"/error-404",name:"error-404",component:function(){return n.e("chunk-1b42c010").then(n.bind(null,"dda8"))},meta:{layout:"blank"}},{path:"*",redirect:"error-404"}],zt=new Mt["a"]({mode:"history",base:"/dist/",routes:Nt}),Rt=zt,qt=n("1da1"),Ht=(n("96cf"),n("bc3a")),Ut=n.n(Ht);Ut.a.defaults.baseURL="http://a0604518.xsph.ru/api",Ut.a.interceptors.request.use((function(t){return t}),(function(t){return console.log(t),Promise.reject(t)})),Ut.a.interceptors.response.use((function(t){return t.data}),(function(t){return 401===t.response.status&&(Yt.$toast.error("Invalid values!"),localStorage.removeItem("access_token"),Jt.commit("setIsLoggedIn",!1),"/login"!==Rt.currentRoute.fullPath&&Rt.push("/login")),Promise.reject(t)}));var Gt=Ut.a,Wt={state:{isLoggedIn:!1},getters:{},mutations:{setIsLoggedIn:function(t,e){t.isLoggedIn=e}},actions:{logIn:function(t,e){return Object(qt["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.prev=1,n.next=4,Gt.post("/auth/login",e);case 4:i=n.sent,localStorage.setItem("access_token",i.access_token),a("setIsLoggedIn",!0),n.next=12;break;case 9:throw n.prev=9,n.t0=n["catch"](1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}}};i["default"].use(Pt["a"]);var Jt=new Pt["a"].Store({state:{},mutations:{},actions:{},modules:{auth:Wt}});i["default"].use(r["a"],{hideProgressBar:!0}),i["default"].config.productionTip=!1;var Yt=e["default"]=new i["default"]({router:Rt,store:Jt,vuetify:Dt,render:function(t){return t(Ft)}}).$mount("#app")},"5ccb":function(t,e,n){},6732:function(t,e,n){},"67de":function(t,e,n){},"924a":function(t,e,n){},9711:function(t,e,n){},a5c0:function(t,e,n){"use strict";n("924a")},af20:function(t,e,n){"use strict";n("5ccb")},b68c:function(t,e,n){},c409:function(t,e,n){"use strict";n("b68c")},cf72:function(t,e,n){"use strict";n("9711")},f7d6:function(t,e,n){t.exports=n.p+"img/1.e2938115.png"}});
//# sourceMappingURL=app.a7cd1431.js.map