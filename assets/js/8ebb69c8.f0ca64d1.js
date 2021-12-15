"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6035],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return s}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),s=o,k=u["".concat(d,".").concat(s)]||u[s]||c[s]||a;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7098:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={id:"molecule.model.EditorModel",title:"Class: EditorModel",sidebar_label:"EditorModel",custom_edit_url:null},d=void 0,p={unversionedId:"api/classes/molecule.model.EditorModel",id:"api/classes/molecule.model.EditorModel",isDocsHomePage:!1,title:"Class: EditorModel",description:"molecule.model.EditorModel",source:"@site/docs/api/classes/molecule.model.EditorModel.md",sourceDirName:"api/classes",slug:"/api/classes/molecule.model.EditorModel",permalink:"/molecule/docs/api/classes/molecule.model.EditorModel",editUrl:null,tags:[],version:"current",frontMatter:{id:"molecule.model.EditorModel",title:"Class: EditorModel",sidebar_label:"EditorModel",custom_edit_url:null},sidebar:"api",previous:{title:"EditorGroupModel",permalink:"/molecule/docs/api/classes/molecule.model.EditorGroupModel"},next:{title:"EditorTree",permalink:"/molecule/docs/api/classes/molecule.model.EditorTree"}},m=[{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"current",id:"current",children:[]},{value:"editorOptions",id:"editoroptions",children:[]},{value:"entry",id:"entry",children:[]},{value:"groups",id:"groups",children:[]}]}],c={toc:m};function u(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".",(0,a.kt)("a",{parentName:"p",href:"../namespaces/molecule.model"},"model"),".EditorModel"),(0,a.kt)("h2",{id:"implements"},"Implements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../interfaces/molecule.model.IEditor"},(0,a.kt)("inlineCode",{parentName:"a"},"IEditor")))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new EditorModel"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"current?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"groups?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"entry"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"editorOptions?"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"current")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"../interfaces/molecule.model.IEditorGroup"},(0,a.kt)("inlineCode",{parentName:"a"},"IEditorGroup")),"<",(0,a.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"null"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"groups")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../interfaces/molecule.model.IEditorGroup"},(0,a.kt)("inlineCode",{parentName:"a"},"IEditorGroup")),"<",(0,a.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">","[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"entry")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"editorOptions")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../namespaces/molecule.model#ieditoroptions"},(0,a.kt)("inlineCode",{parentName:"a"},"IEditorOptions"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/model/workbench/editor.ts#L110"},"src/model/workbench/editor.ts:110")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"current"},"current"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"current"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"../interfaces/molecule.model.IEditorGroup"},(0,a.kt)("inlineCode",{parentName:"a"},"IEditorGroup")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("p",null,"Current editor group"),(0,a.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../interfaces/molecule.model.IEditor"},"IEditor"),".",(0,a.kt)("a",{parentName:"p",href:"../interfaces/molecule.model.IEditor#current"},"current")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/model/workbench/editor.ts#L105"},"src/model/workbench/editor.ts:105")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"editoroptions"},"editorOptions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"editorOptions"),": ",(0,a.kt)("a",{parentName:"p",href:"../namespaces/molecule.model#ieditoroptions"},(0,a.kt)("inlineCode",{parentName:"a"},"IEditorOptions"))),(0,a.kt)("p",null,"Built-in editor options, there is main apply it to monaco-editor"),(0,a.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../interfaces/molecule.model.IEditor"},"IEditor"),".",(0,a.kt)("a",{parentName:"p",href:"../interfaces/molecule.model.IEditor#editoroptions"},"editorOptions")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/model/workbench/editor.ts#L108"},"src/model/workbench/editor.ts:108")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"entry"},"entry"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"entry"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactNode")),(0,a.kt)("p",null,"The welcome page of editor bench"),(0,a.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../interfaces/molecule.model.IEditor"},"IEditor"),".",(0,a.kt)("a",{parentName:"p",href:"../interfaces/molecule.model.IEditor#entry"},"entry")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/model/workbench/editor.ts#L107"},"src/model/workbench/editor.ts:107")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"groups"},"groups"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"groups"),": ",(0,a.kt)("a",{parentName:"p",href:"../interfaces/molecule.model.IEditorGroup"},(0,a.kt)("inlineCode",{parentName:"a"},"IEditorGroup")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,a.kt)("p",null,"Editor Groups"),(0,a.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../interfaces/molecule.model.IEditor"},"IEditor"),".",(0,a.kt)("a",{parentName:"p",href:"../interfaces/molecule.model.IEditor#groups"},"groups")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/model/workbench/editor.ts#L106"},"src/model/workbench/editor.ts:106")))}u.isMDXComponent=!0}}]);