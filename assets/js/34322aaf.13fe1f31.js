"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[827],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),g=a,f=p["".concat(l,".").concat(g)]||p[g]||c[g]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},423:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={sidebar_label:"Getting Started",title:"Getting Started",sidebar_position:5.1},l=void 0,d={unversionedId:"BedWars1058/developers/getting-started",id:"BedWars1058/developers/getting-started",title:"Getting Started",description:"First step",source:"@site/docs/BedWars1058/developers/getting-started.md",sourceDirName:"BedWars1058/developers",slug:"/BedWars1058/developers/getting-started",permalink:"/docs/BedWars1058/developers/getting-started",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/BedWars1058/developers/getting-started.md",tags:[],version:"current",sidebarPosition:5.1,frontMatter:{sidebar_label:"Getting Started",title:"Getting Started",sidebar_position:5.1},sidebar:"tutorialSidebar",previous:{title:"Developers",permalink:"/docs/BedWars1058/developers/"},next:{title:"Maven",permalink:"/docs/BedWars1058/developers/maven"}},u=[{value:"First step",id:"first-step",children:[],level:2},{value:"Getting API Methods",id:"getting-api-methods",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2}],c={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"first-step"},"First step"),(0,i.kt)("p",null,"If you want to use the API make sure to load your plugin after ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/andrei1058/BedWars1058"},"BedWars1058"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add it as softdepend in ",(0,i.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/wiki/plugin-yml/"},"plugin.yml"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"softdepend: [BedWars1058]")),(0,i.kt)("li",{parentName:"ol"},"Check if ",(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/andrei1058/BedWars1058"},"BedWars1058")," is on the server:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Override\npublic void onEnable() {\n    //Disable if pl not found\n    if (Bukkit.getPluginManager().getPlugin("BedWars1058") == null) {\n            getLogger().severe("BedWars1058 was not found. Disabling...");\n            Bukkit.getPluginManager().disablePlugin(this);\n            return;\n    }\n}\n')),(0,i.kt)("h2",{id:"getting-api-methods"},"Getting API Methods"),(0,i.kt)("p",null,"Initializing the API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"BedWars bedwarsAPI = Bukkit.getServicesManager().getRegistration(BedWars .class).getProvider();\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://javadocs.andrei1058.com/BedWars1058/com/andrei1058/bedwars/api/GameAPI.html"},"Click here")," for JavaDocs."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"If you want to create a config file for your add-on, you should use our standars and create it in ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/BedWars1058/Addons/AddonName/config.yml"),"."))}p.isMDXComponent=!0}}]);