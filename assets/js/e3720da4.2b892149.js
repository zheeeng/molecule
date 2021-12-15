"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7714],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=l,s=m["".concat(c,".").concat(u)]||m[u]||k[u]||r;return a?n.createElement(s,i(i({ref:t},d),{},{components:a})):n.createElement(s,i({ref:t},d))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8346:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],o={id:"molecule.ILocaleService",title:"Interface: ILocaleService",sidebar_label:"ILocaleService",custom_edit_url:null},c=void 0,p={unversionedId:"api/interfaces/molecule.ILocaleService",id:"api/interfaces/molecule.ILocaleService",isDocsHomePage:!1,title:"Interface: ILocaleService",description:"molecule.ILocaleService",source:"@site/docs/api/interfaces/molecule.ILocaleService.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/molecule.ILocaleService",permalink:"/molecule/docs/api/interfaces/molecule.ILocaleService",editUrl:null,tags:[],version:"current",frontMatter:{id:"molecule.ILocaleService",title:"Interface: ILocaleService",sidebar_label:"ILocaleService",custom_edit_url:null},sidebar:"api",previous:{title:"ILocale",permalink:"/molecule/docs/api/interfaces/molecule.ILocale"},next:{title:"ILocalizeProps",permalink:"/molecule/docs/api/interfaces/molecule.ILocalizeProps"}},d=[{value:"Implemented by",id:"implemented-by",children:[]},{value:"Methods",id:"methods",children:[{value:"addLocales",id:"addlocales",children:[]},{value:"getCurrentLocale",id:"getcurrentlocale",children:[]},{value:"getDefaultLocale",id:"getdefaultlocale",children:[]},{value:"getDefaultLocales",id:"getdefaultlocales",children:[]},{value:"getLocale",id:"getlocale",children:[]},{value:"getLocales",id:"getlocales",children:[]},{value:"initialize",id:"initialize",children:[]},{value:"localize",id:"localize",children:[]},{value:"onChange",id:"onchange",children:[]},{value:"removeLocale",id:"removelocale",children:[]},{value:"reset",id:"reset",children:[]},{value:"setCurrentLocale",id:"setcurrentlocale",children:[]}]}],k={toc:d};function m(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".ILocaleService"),(0,r.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../classes/molecule.LocaleService"},(0,r.kt)("inlineCode",{parentName:"a"},"LocaleService")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"addlocales"},"addLocales"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addLocales"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"locales"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Add multiple local languages"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"locales")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale")),"[]")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/i18n/localeService.ts#L51"},"src/i18n/localeService.ts:51")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcurrentlocale"},"getCurrentLocale"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getCurrentLocale"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale"))),(0,r.kt)("p",null,"Get the current locale language"),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/i18n/localeService.ts#L29"},"src/i18n/localeService.ts:29")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getdefaultlocale"},"getDefaultLocale"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getDefaultLocale"),"(): ",(0,r.kt)("a",{parentName:"p",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale"))),(0,r.kt)("p",null,"Get the default locale"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/i18n/localeService.ts#L42"},"src/i18n/localeService.ts:42")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getdefaultlocales"},"getDefaultLocales"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getDefaultLocales"),"(): ",(0,r.kt)("a",{parentName:"p",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale")),"[]"),(0,r.kt)("p",null,"Get the default locales;"),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale")),"[]"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/i18n/localeService.ts#L46"},"src/i18n/localeService.ts:46")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getlocale"},"getLocale"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getLocale"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale"))),(0,r.kt)("p",null,"Get a locale language by the id"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale"))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/i18n/localeService.ts#L38"},"src/i18n/localeService.ts:38")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getlocales"},"getLocales"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getLocales"),"(): ",(0,r.kt)("a",{parentName:"p",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale")),"[]"),(0,r.kt)("p",null,"Get All locale languages"),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale")),"[]"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/i18n/localeService.ts#L33"},"src/i18n/localeService.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initialize"},"initialize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"initialize"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"locales"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"localeId?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Initialize the locales data, and the default current locale language,\nthis method first uses the cached ",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," in localStorage, then use the\nlocaleId argument, if both the values are null, finally apply the built-in BuiltInZhCN"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"locales")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale")),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"localeId?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/i18n/localeService.ts#L20"},"src/i18n/localeService.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"localize"},"localize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"localize"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"sourceKey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue"),", ...",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Returns the international text located by source key\uff0cor the default value if it is not find\nFor examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"localize('id','default value'); // hello ${i}, ${i}\nlocalize('id','default value', 'world'); // hello world, ${i}\nlocalize('id','default value', 'world', 'molecule'); // hello world, molecule\n")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sourceKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The key value located in the source international text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"defaultValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The default value to be used when not find the international text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If provided, it will used as the values to be replaced in the international text")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/i18n/localeService.ts#L70"},"src/i18n/localeService.ts:70")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onchange"},"onChange"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"onChange"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Listen to the local language changed event"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"prev"),": ",(0,r.kt)("a",{parentName:"td",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale")),", ",(0,r.kt)("inlineCode",{parentName:"td"},"next"),": ",(0,r.kt)("a",{parentName:"td",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/i18n/localeService.ts#L79"},"src/i18n/localeService.ts:79")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removelocale"},"removeLocale"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"removeLocale"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale"))),(0,r.kt)("p",null,"Remove a locale language by the id"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"molecule.ILocale"},(0,r.kt)("inlineCode",{parentName:"a"},"ILocale"))),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/i18n/localeService.ts#L56"},"src/i18n/localeService.ts:56")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"reset"},"reset"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Reset the LocaleService to the initial state"),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/i18n/localeService.ts#L83"},"src/i18n/localeService.ts:83")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setcurrentlocale"},"setCurrentLocale"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setCurrentLocale"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Set the current locale language by id"),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/i18n/localeService.ts#L25"},"src/i18n/localeService.ts:25")))}m.isMDXComponent=!0}}]);