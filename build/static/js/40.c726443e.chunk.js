(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{542:function(e,t,a){"use strict";a.d(t,"p",function(){return l}),a.d(t,"j",function(){return i}),a.d(t,"g",function(){return u}),a.d(t,"m",function(){return d}),a.d(t,"n",function(){return f}),a.d(t,"o",function(){return m}),a.d(t,"s",function(){return p}),a.d(t,"h",function(){return g}),a.d(t,"a",function(){return y}),a.d(t,"r",function(){return h}),a.d(t,"q",function(){return v}),a.d(t,"e",function(){return j}),a.d(t,"c",function(){return E}),a.d(t,"d",function(){return O}),a.d(t,"l",function(){return N}),a.d(t,"b",function(){return w}),a.d(t,"f",function(){return x}),a.d(t,"k",function(){return M}),a.d(t,"i",function(){return P});var n,r=a(545),o=a.n(r),c=a(24),s=a.n(c);function l(e){document.body.style.paddingRight=e>0?e+"px":null}function i(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&l(a+e)}function d(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}function f(e,t){var a={};return Object.keys(e).forEach(function(n){-1===t.indexOf(n)&&(a[n]=e[n])}),a}function m(e,t){for(var a,n=Array.isArray(t)?t:[t],r=n.length,o={};r>0;)o[a=n[r-=1]]=e[a];return o}var b={};function p(e){b[e]||("undefined"!==typeof console&&console.error(e),b[e]=!0)}function g(e,t){return function(a,n,r){null!==a[n]&&"undefined"!==typeof a[n]&&p('"'+n+'" property of "'+r+'" has been deprecated.\n'+t);for(var o=arguments.length,c=new Array(o>3?o-3:0),s=3;s<o;s++)c[s-3]=arguments[s];return e.apply(void 0,[a,n,r].concat(c))}}function y(e,t,a){if(!(e[t]instanceof Element))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var h=s.a.oneOfType([s.a.string,s.a.func,y,s.a.shape({current:s.a.any})]),v=s.a.oneOfType([s.a.func,s.a.string,s.a.shape({$$typeof:s.a.symbol,render:s.a.func}),s.a.arrayOf(s.a.oneOfType([s.a.func,s.a.string,s.a.shape({$$typeof:s.a.symbol,render:s.a.func})]))]),j={Fade:150,Collapse:350,Modal:300,Carousel:600},E=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},N={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},w=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],x=!("undefined"===typeof window||!window.document||!window.document.createElement);function T(e){return null!==e&&(Array.isArray(e)||x&&"number"===typeof e.length)}function M(e){var t=function(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(o()(e))return e();if("string"===typeof e&&x){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}(e);return T(t)?t[0]:t}var P=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},544:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},545:function(e,t,a){(function(t){var a="[object AsyncFunction]",n="[object Function]",r="[object GeneratorFunction]",o="[object Null]",c="[object Proxy]",s="[object Undefined]",l="object"==typeof t&&t&&t.Object===Object&&t,i="object"==typeof self&&self&&self.Object===Object&&self,u=l||i||Function("return this")(),d=Object.prototype,f=d.hasOwnProperty,m=d.toString,b=u.Symbol,p=b?b.toStringTag:void 0;function g(e){return null==e?void 0===e?s:o:p&&p in Object(e)?function(e){var t=f.call(e,p),a=e[p];try{e[p]=void 0;var n=!0}catch(o){}var r=m.call(e);n&&(t?e[p]=a:delete e[p]);return r}(e):function(e){return m.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=g(e);return t==n||t==r||t==a||t==c}}).call(this,a(57))},546:function(e,t,a){"use strict";var n=a(9),r=a(20),o=a(0),c=a.n(o),s=a(24),l=a.n(s),i=a(40),u=a.n(i),d=a(542),f={tag:d.q,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,s=e.tag,l=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.m)(u()(t,"card-body"),a);return c.a.createElement(s,Object(n.a)({},l,{className:i,ref:o}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},548:function(e,t,a){"use strict";var n=a(9),r=a(20),o=a(0),c=a.n(o),s=a(24),l=a.n(s),i=a(40),u=a.n(i),d=a(542),f={tag:d.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},m=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,s=e.tag,l=e.form,i=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(d.m)(u()(t,o?"no-gutters":null,l?"form-row":"row"),a);return c.a.createElement(s,Object(n.a)({},i,{className:f}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},549:function(e,t,a){"use strict";var n=a(9),r=a(20),o=a(544),c=a.n(o),s=a(0),l=a.n(s),i=a(24),u=a.n(i),d=a(40),f=a.n(d),m=a(542),b=u.a.oneOfType([u.a.number,u.a.string]),p=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(m.h)(b,'Please use the prop "order"'),pull:Object(m.h)(b,'Please use the prop "order"'),order:b,offset:b})]),g={tag:m.q,xs:p,sm:p,md:p,lg:p,xl:p,className:u.a.string,cssModule:u.a.object,widths:u.a.array},y={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,o=e.widths,s=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),u=[];o.forEach(function(t,n){var r=e[t];if(delete i[t],r||""===r){var o=!n;if(c()(r)){var s,l=o?"-":"-"+t+"-",d=h(o,t,r.size);u.push(Object(m.m)(f()(((s={})[d]=r.size||""===r.size,s["order"+l+r.order]=r.order||0===r.order,s["offset"+l+r.offset]=r.offset||0===r.offset,s)),a))}else{var b=h(o,t,r);u.push(b)}}}),u.length||u.push("col");var d=Object(m.m)(f()(t,u),a);return l.a.createElement(s,Object(n.a)({},i,{className:d}))};v.propTypes=g,v.defaultProps=y,t.a=v},550:function(e,t,a){"use strict";var n=a(9),r=a(20),o=a(0),c=a.n(o),s=a(24),l=a.n(s),i=a(40),u=a.n(i),d=a(542),f={tag:d.q,inverse:l.a.bool,color:l.a.string,block:Object(d.h)(l.a.bool,'Please use the props "body"'),body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var t=e.className,a=e.cssModule,o=e.color,s=e.block,l=e.body,i=e.inverse,f=e.outline,m=e.tag,b=e.innerRef,p=Object(r.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),g=Object(d.m)(u()(t,"card",!!i&&"text-white",!(!s&&!l)&&"card-body",!!o&&(f?"border":"bg")+"-"+o),a);return c.a.createElement(m,Object(n.a)({},p,{className:g,ref:b}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},551:function(e,t,a){"use strict";var n=a(9),r=a(20),o=a(0),c=a.n(o),s=a(24),l=a.n(s),i=a(40),u=a.n(i),d=a(542),f={tag:d.q,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(t,"card-header"),a);return c.a.createElement(o,Object(n.a)({},s,{className:l}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},679:function(e,t,a){"use strict";var n=a(9),r=a(20),o=a(0),c=a.n(o),s=a(24),l=a.n(s),i=a(40),u=a.n(i),d=a(542),f={tag:d.q,active:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.active,s=e.tag,l=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(d.m)(u()(t,!!o&&"active","breadcrumb-item"),a);return c.a.createElement(s,Object(n.a)({},l,{className:i,"aria-current":o?"page":void 0}))};m.propTypes=f,m.defaultProps={tag:"li"},t.a=m},680:function(e,t,a){"use strict";var n=a(9),r=a(20),o=a(0),c=a.n(o),s=a(24),l=a.n(s),i=a(40),u=a.n(i),d=a(542),f={tag:d.q,listTag:d.q,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},m=function(e){var t=e.className,a=e.listClassName,o=e.cssModule,s=e.children,l=e.tag,i=e.listTag,f=e["aria-label"],m=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(d.m)(u()(t),o),p=Object(d.m)(u()("breadcrumb",a),o);return c.a.createElement(l,Object(n.a)({},m,{className:b,"aria-label":f}),c.a.createElement(i,{className:p},s))};m.propTypes=f,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=m},782:function(e,t,a){"use strict";a.r(t);var n=a(185),r=a(186),o=a(188),c=a(187),s=a(189),l=a(0),i=a.n(l),u=a(548),d=a(549),f=a(550),m=a(551),b=a(546),p=a(680),g=a(679),y=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(u.a,null,i.a.createElement(d.a,{xs:"12"},i.a.createElement(f.a,null,i.a.createElement(m.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Breadcrumbs"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement("a",{href:"https://reactstrap.github.io/components/breadcrumbs/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},i.a.createElement("small",{className:"text-muted"},"docs")))),i.a.createElement(b.a,null,i.a.createElement(p.a,null,i.a.createElement(g.a,{active:!0},"Home")),i.a.createElement(p.a,null,i.a.createElement(g.a,null,i.a.createElement("a",{href:"#"},"Home")),i.a.createElement(g.a,{active:!0},"Library")),i.a.createElement(p.a,null,i.a.createElement(g.a,null,i.a.createElement("a",{href:"#"},"Home")),i.a.createElement(g.a,null,i.a.createElement("a",{href:"#"},"Library")),i.a.createElement(g.a,{active:!0},"Data")),i.a.createElement(p.a,{tag:"nav"},i.a.createElement(g.a,{tag:"a",href:"#"},"Home"),i.a.createElement(g.a,{tag:"a",href:"#"},"Library"),i.a.createElement(g.a,{tag:"a",href:"#"},"Data"),i.a.createElement(g.a,{active:!0,tag:"span"},"Bootstrap")))))))}}]),t}(l.Component);t.default=y}}]);
//# sourceMappingURL=40.c726443e.chunk.js.map