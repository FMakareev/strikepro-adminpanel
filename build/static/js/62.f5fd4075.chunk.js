(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{541:function(e,t,n){"use strict";n.d(t,"p",function(){return c}),n.d(t,"j",function(){return l}),n.d(t,"g",function(){return s}),n.d(t,"m",function(){return d}),n.d(t,"n",function(){return f}),n.d(t,"o",function(){return p}),n.d(t,"s",function(){return h}),n.d(t,"h",function(){return b}),n.d(t,"a",function(){return y}),n.d(t,"r",function(){return v}),n.d(t,"q",function(){return g}),n.d(t,"e",function(){return E}),n.d(t,"c",function(){return j}),n.d(t,"d",function(){return O}),n.d(t,"l",function(){return w}),n.d(t,"b",function(){return x}),n.d(t,"f",function(){return k}),n.d(t,"k",function(){return N}),n.d(t,"i",function(){return S});var r,a=n(544),o=n.n(a),i=n(23),u=n.n(i);function c(e){document.body.style.paddingRight=e>0?e+"px":null}function l(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function s(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&c(n+e)}function d(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}function f(e,t){var n={};return Object.keys(e).forEach(function(r){-1===t.indexOf(r)&&(n[r]=e[r])}),n}function p(e,t){for(var n,r=Array.isArray(t)?t:[t],a=r.length,o={};a>0;)o[n=r[a-=1]]=e[n];return o}var m={};function h(e){m[e]||("undefined"!==typeof console&&console.error(e),m[e]=!0)}function b(e,t){return function(n,r,a){null!==n[r]&&"undefined"!==typeof n[r]&&h('"'+r+'" property of "'+a+'" has been deprecated.\n'+t);for(var o=arguments.length,i=new Array(o>3?o-3:0),u=3;u<o;u++)i[u-3]=arguments[u];return e.apply(void 0,[n,r,a].concat(i))}}function y(e,t,n){if(!(e[t]instanceof Element))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var v=u.a.oneOfType([u.a.string,u.a.func,y,u.a.shape({current:u.a.any})]),g=u.a.oneOfType([u.a.func,u.a.string,u.a.shape({$$typeof:u.a.symbol,render:u.a.func}),u.a.arrayOf(u.a.oneOfType([u.a.func,u.a.string,u.a.shape({$$typeof:u.a.symbol,render:u.a.func})]))]),E={Fade:150,Collapse:350,Modal:300,Carousel:600},j=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},w={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},x=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],k=!("undefined"===typeof window||!window.document||!window.document.createElement);function R(e){return null!==e&&(Array.isArray(e)||k&&"number"===typeof e.length)}function N(e){var t=function(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(o()(e))return e();if("string"===typeof e&&k){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}(e);return R(t)?t[0]:t}var S=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},544:function(e,t,n){(function(t){var n="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",o="[object Null]",i="[object Proxy]",u="[object Undefined]",c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype,f=d.hasOwnProperty,p=d.toString,m=s.Symbol,h=m?m.toStringTag:void 0;function b(e){return null==e?void 0===e?u:o:h&&h in Object(e)?function(e){var t=f.call(e,h),n=e[h];try{e[h]=void 0;var r=!0}catch(o){}var a=p.call(e);r&&(t?e[h]=n:delete e[h]);return a}(e):function(e){return p.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=b(e);return t==r||t==a||t==n||t==i}}).call(this,n(57))},551:function(e,t,n){"use strict";var r=n(28),a=Object(r.a)();t.a=a},589:function(e,t,n){"use strict";var r=n(11),a=n(67),o=n(0),i=n.n(o),u=n(23),c=n.n(u),l=n(40),s=n.n(l),d=n(541),f={tag:d.q,fluid:c.a.bool,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.fluid,u=e.tag,c=Object(a.a)(e,["className","cssModule","fluid","tag"]),l=Object(d.m)(s()(t,o?"container-fluid":"container"),n);return i.a.createElement(u,Object(r.a)({},c,{className:l}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},617:function(e,t,n){"use strict";var r=n(185),a=n(186),o=n(188),i=n(187),u=n(189),c=n(551),l=n(66),s=n(0),d=n.n(s),f=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(u)))).state={pathname:null,unlisten:null},n}return Object(u.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=c.a.listen(function(t){e.state.pathname});this.setState({unlisten:t})}},{key:"componentWillUnmount",value:function(){this.state&&this.state.unlisten&&this.state.unlisten()}},{key:"componentWillReceiveProps",value:function(e){e.location.pathname!==this.props.location.pathname&&this.setState({pathname:null})}},{key:"render",value:function(){var e=this.state.pathname;return e?d.a.createElement(l.c,{to:e}):null}}]),t}(s.Component);f=Object(l.k)(f),t.a=f},789:function(e,t,n){"use strict";n.r(t);var r=n(185),a=n(186),o=n(188),i=n(187),u=n(189),c=n(0),l=n.n(c),s=n(66),d=n(191),f=n(589),p=n(613),m=n(617),h=l.a.lazy(function(){return n.e(68).then(n.bind(null,784))}),b=l.a.lazy(function(){return n.e(66).then(n.bind(null,785))}),y=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(u)))).loading=function(){return l.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},n.combineBaseRouteWithRoutes=function(e,t){return Array.from(e,function(e){return Object.assign({},e)}).map(function(e){return e.url&&(e.url="".concat(t).concat(e.url)),e.children&&(e.children=n.combineBaseRouteWithRoutes(e.children,t)),e})},n}return Object(u.a)(t,e),Object(a.a)(t,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login")}},{key:"render",value:function(){var e=this,t=this.props,n=t.routes,r=t.baseRoute,a=t.navigation;return l.a.createElement("div",{className:"app"},l.a.createElement(p.c,{fixed:!0},l.a.createElement(c.Suspense,{fallback:this.loading()},l.a.createElement(b,{onLogout:function(t){return e.signOut(t)}}))),l.a.createElement("div",{className:"app-body"},l.a.createElement(p.e,{fixed:!0,display:"lg"},l.a.createElement(p.h,null),l.a.createElement(p.g,null),l.a.createElement(c.Suspense,null,l.a.createElement(p.j,Object.assign({baseRoute:r,navConfig:{items:this.combineBaseRouteWithRoutes(a.items,r)}},this.props,{router:d}))),l.a.createElement(p.f,null),l.a.createElement(p.i,null)),l.a.createElement("main",{className:"main"},l.a.createElement(p.a,{appRoutes:n,router:d}),l.a.createElement(f.a,{fluid:!0},l.a.createElement(c.Suspense,{fallback:this.loading()},l.a.createElement(s.g,null,n.map(function(e,t){return e.component?l.a.createElement(s.d,{key:t,path:r+e.path,exact:e.exact,name:e.name,render:function(t){return l.a.createElement(e.component,t)}}):null}),l.a.createElement(s.c,{from:"/",to:"/dashboard"})))))),l.a.createElement(p.b,null,l.a.createElement(c.Suspense,{fallback:this.loading()},l.a.createElement(h,null))),l.a.createElement(m.a,null))}}]),t}(c.Component);t.default=y}}]);
//# sourceMappingURL=62.f5fd4075.chunk.js.map