(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{542:function(e,a,l){"use strict";l.d(a,"p",function(){return m}),l.d(a,"j",function(){return s}),l.d(a,"g",function(){return i}),l.d(a,"m",function(){return d}),l.d(a,"n",function(){return u}),l.d(a,"o",function(){return E}),l.d(a,"s",function(){return h}),l.d(a,"h",function(){return b}),l.d(a,"a",function(){return p}),l.d(a,"r",function(){return x}),l.d(a,"q",function(){return N}),l.d(a,"e",function(){return k}),l.d(a,"c",function(){return v}),l.d(a,"d",function(){return g}),l.d(a,"l",function(){return O}),l.d(a,"b",function(){return y}),l.d(a,"f",function(){return w}),l.d(a,"k",function(){return C}),l.d(a,"i",function(){return P});var t,c=l(545),r=l.n(c),n=l(24),o=l.n(n);function m(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function i(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var a=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),a}(),a=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],l=a?parseInt(a.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&m(l+e)}function d(e,a){return void 0===e&&(e=""),void 0===a&&(a=t),a?e.split(" ").map(function(e){return a[e]||e}).join(" "):e}function u(e,a){var l={};return Object.keys(e).forEach(function(t){-1===a.indexOf(t)&&(l[t]=e[t])}),l}function E(e,a){for(var l,t=Array.isArray(a)?a:[a],c=t.length,r={};c>0;)r[l=t[c-=1]]=e[l];return r}var f={};function h(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}function b(e,a){return function(l,t,c){null!==l[t]&&"undefined"!==typeof l[t]&&h('"'+t+'" property of "'+c+'" has been deprecated.\n'+a);for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.apply(void 0,[l,t,c].concat(n))}}function p(e,a,l){if(!(e[a]instanceof Element))return new Error("Invalid prop `"+a+"` supplied to `"+l+"`. Expected prop to be an instance of Element. Validation failed.")}var x=o.a.oneOfType([o.a.string,o.a.func,p,o.a.shape({current:o.a.any})]),N=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),k={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],g={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},O={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},y=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],w=!("undefined"===typeof window||!window.document||!window.document.createElement);function j(e){return null!==e&&(Array.isArray(e)||w&&"number"===typeof e.length)}function C(e){var a=function(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(r()(e))return e();if("string"===typeof e&&w){var a=document.querySelectorAll(e);if(a.length||(a=document.querySelectorAll("#"+e)),!a.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return a}return e}(e);return j(a)?a[0]:a}var P=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},544:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},545:function(e,a,l){(function(a){var l="[object AsyncFunction]",t="[object Function]",c="[object GeneratorFunction]",r="[object Null]",n="[object Proxy]",o="[object Undefined]",m="object"==typeof a&&a&&a.Object===Object&&a,s="object"==typeof self&&self&&self.Object===Object&&self,i=m||s||Function("return this")(),d=Object.prototype,u=d.hasOwnProperty,E=d.toString,f=i.Symbol,h=f?f.toStringTag:void 0;function b(e){return null==e?void 0===e?o:r:h&&h in Object(e)?function(e){var a=u.call(e,h),l=e[h];try{e[h]=void 0;var t=!0}catch(r){}var c=E.call(e);t&&(a?e[h]=l:delete e[h]);return c}(e):function(e){return E.call(e)}(e)}e.exports=function(e){if(!function(e){var a=typeof e;return null!=e&&("object"==a||"function"==a)}(e))return!1;var a=b(e);return a==t||a==c||a==l||a==n}}).call(this,l(57))},546:function(e,a,l){"use strict";var t=l(9),c=l(20),r=l(0),n=l.n(r),o=l(24),m=l.n(o),s=l(40),i=l.n(s),d=l(542),u={tag:d.q,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},E=function(e){var a=e.className,l=e.cssModule,r=e.innerRef,o=e.tag,m=Object(c.a)(e,["className","cssModule","innerRef","tag"]),s=Object(d.m)(i()(a,"card-body"),l);return n.a.createElement(o,Object(t.a)({},m,{className:s,ref:r}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},548:function(e,a,l){"use strict";var t=l(9),c=l(20),r=l(0),n=l.n(r),o=l(24),m=l.n(o),s=l(40),i=l.n(s),d=l(542),u={tag:d.q,noGutters:m.a.bool,className:m.a.string,cssModule:m.a.object,form:m.a.bool},E=function(e){var a=e.className,l=e.cssModule,r=e.noGutters,o=e.tag,m=e.form,s=Object(c.a)(e,["className","cssModule","noGutters","tag","form"]),u=Object(d.m)(i()(a,r?"no-gutters":null,m?"form-row":"row"),l);return n.a.createElement(o,Object(t.a)({},s,{className:u}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},549:function(e,a,l){"use strict";var t=l(9),c=l(20),r=l(544),n=l.n(r),o=l(0),m=l.n(o),s=l(24),i=l.n(s),d=l(40),u=l.n(d),E=l(542),f=i.a.oneOfType([i.a.number,i.a.string]),h=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),push:Object(E.h)(f,'Please use the prop "order"'),pull:Object(E.h)(f,'Please use the prop "order"'),order:f,offset:f})]),b={tag:E.q,xs:h,sm:h,md:h,lg:h,xl:h,className:i.a.string,cssModule:i.a.object,widths:i.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},x=function(e,a,l){return!0===l||""===l?e?"col":"col-"+a:"auto"===l?e?"col-auto":"col-"+a+"-auto":e?"col-"+l:"col-"+a+"-"+l},N=function(e){var a=e.className,l=e.cssModule,r=e.widths,o=e.tag,s=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach(function(a,t){var c=e[a];if(delete s[a],c||""===c){var r=!t;if(n()(c)){var o,m=r?"-":"-"+a+"-",d=x(r,a,c.size);i.push(Object(E.m)(u()(((o={})[d]=c.size||""===c.size,o["order"+m+c.order]=c.order||0===c.order,o["offset"+m+c.offset]=c.offset||0===c.offset,o)),l))}else{var f=x(r,a,c);i.push(f)}}}),i.length||i.push("col");var d=Object(E.m)(u()(a,i),l);return m.a.createElement(o,Object(t.a)({},s,{className:d}))};N.propTypes=b,N.defaultProps=p,a.a=N},550:function(e,a,l){"use strict";var t=l(9),c=l(20),r=l(0),n=l.n(r),o=l(24),m=l.n(o),s=l(40),i=l.n(s),d=l(542),u={tag:d.q,inverse:m.a.bool,color:m.a.string,block:Object(d.h)(m.a.bool,'Please use the props "body"'),body:m.a.bool,outline:m.a.bool,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},E=function(e){var a=e.className,l=e.cssModule,r=e.color,o=e.block,m=e.body,s=e.inverse,u=e.outline,E=e.tag,f=e.innerRef,h=Object(c.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),b=Object(d.m)(i()(a,"card",!!s&&"text-white",!(!o&&!m)&&"card-body",!!r&&(u?"border":"bg")+"-"+r),l);return n.a.createElement(E,Object(t.a)({},h,{className:b,ref:f}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},551:function(e,a,l){"use strict";var t=l(9),c=l(20),r=l(0),n=l.n(r),o=l(24),m=l.n(o),s=l(40),i=l.n(s),d=l(542),u={tag:d.q,className:m.a.string,cssModule:m.a.object},E=function(e){var a=e.className,l=e.cssModule,r=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),m=Object(d.m)(i()(a,"card-header"),l);return n.a.createElement(r,Object(t.a)({},o,{className:m}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},579:function(e,a,l){"use strict";var t=l(9),c=l(20),r=l(0),n=l.n(r),o=l(24),m=l.n(o),s=l(40),i=l.n(s),d=l(542),u={className:m.a.string,cssModule:m.a.object,size:m.a.string,bordered:m.a.bool,borderless:m.a.bool,striped:m.a.bool,inverse:Object(d.h)(m.a.bool,'Please use the prop "dark"'),dark:m.a.bool,hover:m.a.bool,responsive:m.a.oneOfType([m.a.bool,m.a.string]),tag:d.q,responsiveTag:d.q,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])},E=function(e){var a=e.className,l=e.cssModule,r=e.size,o=e.bordered,m=e.borderless,s=e.striped,u=e.inverse,E=e.dark,f=e.hover,h=e.responsive,b=e.tag,p=e.responsiveTag,x=e.innerRef,N=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),k=Object(d.m)(i()(a,"table",!!r&&"table-"+r,!!o&&"table-bordered",!!m&&"table-borderless",!!s&&"table-striped",!(!E&&!u)&&"table-dark",!!f&&"table-hover"),l),v=n.a.createElement(b,Object(t.a)({},N,{ref:x,className:k}));if(h){var g=!0===h?"table-responsive":"table-responsive-"+h;return n.a.createElement(p,{className:g},v)}return v};E.propTypes=u,E.defaultProps={tag:"table",responsiveTag:"div"},a.a=E},800:function(e,a,l){"use strict";l.r(a);var t=l(185),c=l(186),r=l(188),n=l(187),o=l(189),m=l(0),s=l.n(m),i=l(548),d=l(549),u=l(550),E=l(551),f=l(546),h=l(579),b=l(606),p=function(e){function a(){return Object(t.a)(this,a),Object(r.a)(this,Object(n.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(i.a,null,s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch default"),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",color:"primary",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"secondary",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"success",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"warning",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"info",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"danger",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"light",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"dark",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"primary",disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch pills"),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"secondary",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"success",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"warning",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"info",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"danger",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"light",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"dark",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"primary",defaultChecked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"secondary",defaultChecked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"success",defaultChecked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"warning",defaultChecked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"info",defaultChecked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"danger",defaultChecked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"light",defaultChecked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"dark",defaultChecked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"primary"})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,"disabled"))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"primary",checked:!0,disabled:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"secondary",checked:!0,disabled:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"success",checked:!0,disabled:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"warning",checked:!0,disabled:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"info",checked:!0,disabled:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"danger",checked:!0,disabled:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"light",checked:!0,disabled:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"dark",checked:!0,disabled:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"primary",disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,'outline="alt"'))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"primary",checked:!0,outline:"alt"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"secondary",checked:!0,outline:"alt"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"success",checked:!0,outline:"alt"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"warning",checked:!0,outline:"alt"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"info",checked:!0,outline:"alt"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"danger",checked:!0,outline:"alt"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"light",checked:!0,outline:"alt"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"dark",checked:!0,outline:"alt"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"primary",outline:"alt",disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,"label"))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"primary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"secondary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"success",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"warning",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"info",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"danger",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"light",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"dark",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"primary",label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,'outline="alt" label'))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"secondary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"success",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"warning",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"info",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"danger",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"light",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"dark",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,'outline="alt" label'))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",defaultChecked:!0,label:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"secondary",defaultChecked:!0,label:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"success",defaultChecked:!0,label:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"warning",defaultChecked:!0,label:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"info",defaultChecked:!0,label:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"danger",defaultChecked:!0,label:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"light",defaultChecked:!0,label:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"dark",defaultChecked:!0,label:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",label:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",color:"primary",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"secondary",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"success",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"warning",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"info",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"danger",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"light",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"dark",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"primary",outline:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"success",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"warning",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"info",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"danger",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"light",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"dark",outline:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",outline:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline alternative"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",color:"primary",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"secondary",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"success",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"warning",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"info",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"danger",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"light",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"dark",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"primary",outline:"alt",disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline alternative - pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"success",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"info",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"light",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",color:"primary",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"secondary",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"success",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"warning",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"info",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"danger",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"light",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"dark",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"primary",label:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"secondary",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"success",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"warning",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"info",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"danger",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"light",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"dark",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",label:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",color:"primary",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"secondary",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"success",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"warning",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"info",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"danger",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"light",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"dark",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"primary",outline:!0,label:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"success",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"warning",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"info",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"danger",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"light",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"dark",outline:!0,label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",outline:!0,label:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"secondary",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"success",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"warning",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"info",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"danger",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"light",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"dark",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",color:"primary",outline:"alt",label:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"success",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"info",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"light",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",label:!0,checked:!0}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,disabled:!0})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",color:"primary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"secondary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"success",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"warning",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"info",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"danger",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"light",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"dark",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"primary",outline:!0,disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"success",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"warning",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"info",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"danger",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"light",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"dark",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",outline:!0,disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",color:"primary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"secondary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"success",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"warning",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"info",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"danger",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"light",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"dark",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",color:"primary",outline:"alt",disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(d.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(f.a,null,s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"success",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"info",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"light",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(b.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(d.a,{xs:"12"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Sizes"),s.a.createElement(f.a,{className:"p-0"},s.a.createElement(h.a,{hover:!0,striped:!0,className:"table-align-middle mb-0"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Size"),s.a.createElement("th",null,"Example"),s.a.createElement("th",null,"Props"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Large"),s.a.createElement("td",null,s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"primary",checked:!0,size:"lg"})),s.a.createElement("td",null,"Add ",s.a.createElement("code",null,"size=","lg"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Normal"),s.a.createElement("td",null,s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"primary",checked:!0})),s.a.createElement("td",null,"-")),s.a.createElement("tr",null,s.a.createElement("td",null,"Small"),s.a.createElement("td",null,s.a.createElement(b.l,{className:"mx-1",variant:"3d",color:"primary",checked:!0,size:"sm"})),s.a.createElement("td",null,"Add ",s.a.createElement("code",null,"size=","sm"))))))))))}}]),a}(m.Component);a.default=p}}]);
//# sourceMappingURL=46.1150a589.chunk.js.map