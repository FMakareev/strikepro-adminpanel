(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{542:function(e,t,n){"use strict";n.d(t,"p",function(){return i}),n.d(t,"j",function(){return u}),n.d(t,"g",function(){return s}),n.d(t,"m",function(){return d}),n.d(t,"n",function(){return m}),n.d(t,"o",function(){return f}),n.d(t,"s",function(){return E}),n.d(t,"h",function(){return h}),n.d(t,"a",function(){return g}),n.d(t,"r",function(){return p}),n.d(t,"q",function(){return y}),n.d(t,"e",function(){return N}),n.d(t,"c",function(){return v}),n.d(t,"d",function(){return C}),n.d(t,"l",function(){return j}),n.d(t,"b",function(){return w}),n.d(t,"f",function(){return O}),n.d(t,"k",function(){return k}),n.d(t,"i",function(){return G});var a,r=n(545),l=n.n(r),o=n(24),c=n.n(o);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function u(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function s(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+e)}function d(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}function m(e,t){var n={};return Object.keys(e).forEach(function(a){-1===t.indexOf(a)&&(n[a]=e[a])}),n}function f(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,l={};r>0;)l[n=a[r-=1]]=e[n];return l}var b={};function E(e){b[e]||("undefined"!==typeof console&&console.error(e),b[e]=!0)}function h(e,t){return function(n,a,r){null!==n[a]&&"undefined"!==typeof n[a]&&E('"'+a+'" property of "'+r+'" has been deprecated.\n'+t);for(var l=arguments.length,o=new Array(l>3?l-3:0),c=3;c<l;c++)o[c-3]=arguments[c];return e.apply(void 0,[n,a,r].concat(o))}}function g(e,t,n){if(!(e[t]instanceof Element))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var p=c.a.oneOfType([c.a.string,c.a.func,g,c.a.shape({current:c.a.any})]),y=c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func}),c.a.arrayOf(c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func})]))]),N={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],C={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},j={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},w=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],O=!("undefined"===typeof window||!window.document||!window.document.createElement);function x(e){return null!==e&&(Array.isArray(e)||O&&"number"===typeof e.length)}function k(e){var t=function(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(l()(e))return e();if("string"===typeof e&&O){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}(e);return x(t)?t[0]:t}var G=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},545:function(e,t,n){(function(t){var n="[object AsyncFunction]",a="[object Function]",r="[object GeneratorFunction]",l="[object Null]",o="[object Proxy]",c="[object Undefined]",i="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,s=i||u||Function("return this")(),d=Object.prototype,m=d.hasOwnProperty,f=d.toString,b=s.Symbol,E=b?b.toStringTag:void 0;function h(e){return null==e?void 0===e?c:l:E&&E in Object(e)?function(e){var t=m.call(e,E),n=e[E];try{e[E]=void 0;var a=!0}catch(l){}var r=f.call(e);a&&(t?e[E]=n:delete e[E]);return r}(e):function(e){return f.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=h(e);return t==a||t==r||t==n||t==o}}).call(this,n(57))},818:function(e,t,n){"use strict";n.r(t);var a=n(185),r=n(186),l=n(188),o=n(187),c=n(189),i=n(0),u=n.n(i),s=n(62),d=n.n(s),m=n(40),f=n.n(m),b=n(549),E=n(548),h=n(659),g=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={bgColor:"rgb(255, 255, 255)"},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=d.a.findDOMNode(this).parentNode.firstChild,t=window.getComputedStyle(e).getPropertyValue("background-color");this.setState({bgColor:t||this.state.bgColor})}},{key:"render",value:function(){return u.a.createElement("table",{className:"w-100"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",{className:"text-muted"},"HEX:"),u.a.createElement("td",{className:"font-weight-bold"},Object(h.rgbToHex)(this.state.bgColor))),u.a.createElement("tr",null,u.a.createElement("td",{className:"text-muted"},"RGB:"),u.a.createElement("td",{className:"font-weight-bold"},this.state.bgColor))))}}]),t}(i.Component),p=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,a=f()(t,"theme-color w-75 rounded mb-3");return u.a.createElement(b.a,{xl:"2",md:"4",sm:"6",xs:"12",className:"mb-4"},u.a.createElement("div",{className:a,style:{paddingTop:"75%"}}),n,u.a.createElement(g,null))}}]),t}(i.Component),y=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-header"},u.a.createElement("i",{className:"icon-drop"})," Theme colors"),u.a.createElement("div",{className:"card-body"},u.a.createElement(E.a,null,u.a.createElement(p,{className:"bg-primary"},u.a.createElement("h6",null,"Brand Primary Color")),u.a.createElement(p,{className:"bg-secondary"},u.a.createElement("h6",null,"Brand Secondary Color")),u.a.createElement(p,{className:"bg-success"},u.a.createElement("h6",null,"Brand Success Color")),u.a.createElement(p,{className:"bg-danger"},u.a.createElement("h6",null,"Brand Danger Color")),u.a.createElement(p,{className:"bg-warning"},u.a.createElement("h6",null,"Brand Warning Color")),u.a.createElement(p,{className:"bg-info"},u.a.createElement("h6",null,"Brand Info Color")),u.a.createElement(p,{className:"bg-light"},u.a.createElement("h6",null,"Brand Light Color")),u.a.createElement(p,{className:"bg-dark"},u.a.createElement("h6",null,"Brand Dark Color"))))),u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-header"},u.a.createElement("i",{className:"icon-drop"})," Grays"),u.a.createElement("div",{className:"card-body"},u.a.createElement(E.a,{className:"mb-3"},u.a.createElement(p,{className:"bg-gray-100"},u.a.createElement("h6",null,"Gray 100 Color")),u.a.createElement(p,{className:"bg-gray-200"},u.a.createElement("h6",null,"Gray 200 Color")),u.a.createElement(p,{className:"bg-gray-300"},u.a.createElement("h6",null,"Gray 300 Color")),u.a.createElement(p,{className:"bg-gray-400"},u.a.createElement("h6",null,"Gray 400 Color")),u.a.createElement(p,{className:"bg-gray-500"},u.a.createElement("h6",null,"Gray 500 Color")),u.a.createElement(p,{className:"bg-gray-600"},u.a.createElement("h6",null,"Gray 600 Color")),u.a.createElement(p,{className:"bg-gray-700"},u.a.createElement("h6",null,"Gray 700 Color")),u.a.createElement(p,{className:"bg-gray-800"},u.a.createElement("h6",null,"Gray 800 Color")),u.a.createElement(p,{className:"bg-gray-900"},u.a.createElement("h6",null,"Gray 900 Color"))))),u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-header"},u.a.createElement("i",{className:"icon-drop"})," Additional colors"),u.a.createElement("div",{className:"card-body"},u.a.createElement(E.a,null,u.a.createElement(p,{className:"bg-blue"},u.a.createElement("h6",null,"Blue Color")),u.a.createElement(p,{className:"bg-light-blue"},u.a.createElement("h6",null,"Light Blue Color")),u.a.createElement(p,{className:"bg-indigo"},u.a.createElement("h6",null,"Indigo Color")),u.a.createElement(p,{className:"bg-purple"},u.a.createElement("h6",null,"Purple Color")),u.a.createElement(p,{className:"bg-pink"},u.a.createElement("h6",null,"Pink Color")),u.a.createElement(p,{className:"bg-red"},u.a.createElement("h6",null,"Red Color")),u.a.createElement(p,{className:"bg-orange"},u.a.createElement("h6",null,"Orange Color")),u.a.createElement(p,{className:"bg-yellow"},u.a.createElement("h6",null,"Yellow Color")),u.a.createElement(p,{className:"bg-green"},u.a.createElement("h6",null,"Green Color")),u.a.createElement(p,{className:"bg-teal"},u.a.createElement("h6",null,"Teal Color")),u.a.createElement(p,{className:"bg-cyan"},u.a.createElement("h6",null,"Cyan Color"))))))}}]),t}(i.Component);t.default=y}}]);
//# sourceMappingURL=67.767a72a7.chunk.js.map