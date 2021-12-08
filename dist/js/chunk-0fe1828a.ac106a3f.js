(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fe1828a"],{"1f4f":function(t,e,s){"use strict";var r=s("5530"),a=(s("a9e3"),s("8b37"),s("80d2")),c=s("7560"),i=s("58df");e["a"]=Object(i["a"])(c["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(r["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"26b2":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-card",[s("v-card-title",[t._v("Basic")]),s("demo-simple-table-basic")],1)],1),s("v-col",{attrs:{cols:"12"}},[s("v-card",[s("v-card-title",[t._v("Dark")]),s("v-card-text",[t._v(" Use "),s("code",[t._v("dark")]),t._v(" prop to switch table to the dark theme. ")]),s("demo-simple-table-dark")],1)],1),s("v-col",{attrs:{cols:"12"}},[s("v-card",[s("v-card-title",[t._v("Dense")]),s("v-card-text",[t._v(" You can show a dense version of the table by using the "),s("code",[t._v("dense")]),t._v(" prop. ")]),s("demo-simple-table-dense")],1)],1),s("v-col",{attrs:{cols:"12"}},[s("v-card",[s("v-card-title",[t._v("Height")]),s("v-card-text",[t._v(" Use the "),s("code",[t._v("height")]),t._v(" prop to set the height of the table. ")]),s("demo-simple-table-height")],1)],1),s("v-col",{attrs:{cols:"12"}},[s("v-card",[s("v-card-title",[t._v("Fixed header")]),s("v-card-text",[t._v(" Use the "),s("code",[t._v("fixed-header")]),t._v(" prop together with the "),s("code",[t._v("height")]),t._v(" prop to fix the header to the top of the table. ")]),s("demo-simple-table-fixed-header")],1)],1)],1)},a=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-uppercase"},[t._v(" Dessert (100g serving) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Calories ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Fat (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Carbs (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Protein (g) ")])])]),s("tbody",t._l(t.desserts,(function(e){return s("tr",{key:e.dessert},[s("td",[t._v(t._s(e.dessert))]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.calories)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.fat)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.carbs)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.protein)+" ")])])})),0)]},proxy:!0}])})},i=[],n={setup:function(){var t=[{dessert:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{dessert:"Ice cream sandwich",calories:237,fat:6,carbs:24,protein:4},{dessert:"Eclair",calories:262,fat:6,carbs:24,protein:4},{dessert:"Cupcake",calories:305,fat:6,carbs:24,protein:4},{dessert:"Gingerbread",calories:356,fat:6,carbs:24,protein:4}];return{desserts:t}}},l=n,o=s("2877"),d=s("6544"),p=s.n(d),u=s("1f4f"),v=Object(o["a"])(l,c,i,!1,null,null,null),_=v.exports;p()(v,{VSimpleTable:u["a"]});var h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-simple-table",{attrs:{dark:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-uppercase text--primary"},[t._v(" Dessert (100g serving) ")]),s("th",{staticClass:"text-center text-uppercase text--primary"},[t._v(" Calories ")]),s("th",{staticClass:"text-center text-uppercase text--primary"},[t._v(" Fat (g) ")]),s("th",{staticClass:"text-center text-uppercase text--primary"},[t._v(" Carbs (g) ")]),s("th",{staticClass:"text-center text-uppercase text--primary"},[t._v(" Protein (g) ")])])]),s("tbody",t._l(t.desserts,(function(e){return s("tr",{key:e.dessert},[s("td",[t._v(t._s(e.dessert))]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.calories)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.fat)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.carbs)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.protein)+" ")])])})),0)]},proxy:!0}])})},b=[],f={setup:function(){var t=[{dessert:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{dessert:"Ice cream sandwich",calories:237,fat:6,carbs:24,protein:4},{dessert:"Eclair",calories:262,fat:6,carbs:24,protein:4},{dessert:"Cupcake",calories:305,fat:6,carbs:24,protein:4},{dessert:"Gingerbread",calories:356,fat:6,carbs:24,protein:4}];return{desserts:t}}},x=f,C=Object(o["a"])(x,h,b,!1,null,null,null),m=C.exports;p()(C,{VSimpleTable:u["a"]});var g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-uppercase"},[t._v(" Dessert (100g serving) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Calories ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Fat (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Carbs (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Protein (g) ")])])]),s("tbody",t._l(t.desserts,(function(e){return s("tr",{key:e.dessert},[s("td",[t._v(t._s(e.dessert))]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.calories)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.fat)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.carbs)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.protein)+" ")])])})),0)]},proxy:!0}])})},y=[],k={setup:function(){var t=[{dessert:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{dessert:"Ice cream sandwich",calories:237,fat:6,carbs:24,protein:4},{dessert:"Eclair",calories:262,fat:6,carbs:24,protein:4},{dessert:"Cupcake",calories:305,fat:6,carbs:24,protein:4},{dessert:"Gingerbread",calories:356,fat:6,carbs:24,protein:4}];return{desserts:t}}},w=k,j=Object(o["a"])(w,g,y,!1,null,null,null),S=j.exports;p()(j,{VSimpleTable:u["a"]});var D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-simple-table",{attrs:{height:"250"},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-uppercase"},[t._v(" Dessert (100g serving) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Calories ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Fat (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Carbs (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Protein (g) ")])])]),s("tbody",t._l(t.desserts,(function(e){return s("tr",{key:e.dessert},[s("td",[t._v(t._s(e.dessert))]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.calories)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.fat)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.carbs)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.protein)+" ")])])})),0)]},proxy:!0}])})},$=[],E={setup:function(){var t=[{dessert:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{dessert:"Ice cream sandwich",calories:237,fat:6,carbs:24,protein:4},{dessert:"Eclair",calories:262,fat:6,carbs:24,protein:4},{dessert:"Cupcake",calories:305,fat:6,carbs:24,protein:4},{dessert:"Gingerbread",calories:356,fat:6,carbs:24,protein:4}];return{desserts:t}}},O=E,F=Object(o["a"])(O,D,$,!1,null,null,null),T=F.exports;p()(F,{VSimpleTable:u["a"]});var V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-simple-table",{attrs:{height:"250","fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-uppercase"},[t._v(" Dessert (100g serving) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Calories ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Fat (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Carbs (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Protein (g) ")])])]),s("tbody",t._l(t.desserts,(function(e){return s("tr",{key:e.dessert},[s("td",[t._v(t._s(e.dessert))]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.calories)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.fat)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.carbs)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.protein)+" ")])])})),0)]},proxy:!0}])})},H=[],Y={setup:function(){var t=[{dessert:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{dessert:"Ice cream sandwich",calories:237,fat:6,carbs:24,protein:4},{dessert:"Eclair",calories:262,fat:6,carbs:24,protein:4},{dessert:"Cupcake",calories:305,fat:6,carbs:24,protein:4},{dessert:"Gingerbread",calories:356,fat:6,carbs:24,protein:4}];return{desserts:t}}},z=Y,G=Object(o["a"])(z,V,H,!1,null,null,null),I=G.exports;p()(G,{VSimpleTable:u["a"]});var P={components:{DemoSimpleTableBasic:_,DemoSimpleTableDark:m,DemoSimpleTableDense:S,DemoSimpleTableHeight:T,DemoSimpleTableFixedHeader:I},setup:function(){return{}}},B=P,U=s("b0af"),J=s("99d9"),W=s("62ad"),N=s("0fd9"),R=Object(o["a"])(B,r,a,!1,null,null,null);e["default"]=R.exports;p()(R,{VCard:U["a"],VCardText:J["c"],VCardTitle:J["d"],VCol:W["a"],VRow:N["a"]})},"8b37":function(t,e,s){},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return c})),s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"d",(function(){return l}));var r=s("b0af"),a=s("80d2"),c=Object(a["j"])("v-card__actions"),i=Object(a["j"])("v-card__subtitle"),n=Object(a["j"])("v-card__text"),l=Object(a["j"])("v-card__title");r["a"]}}]);
//# sourceMappingURL=chunk-0fe1828a.ac106a3f.js.map