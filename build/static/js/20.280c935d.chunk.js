(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{547:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(558);function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Object(a.a)(e,t,n[t])})}return e}},548:function(e,t,n){"use strict";var a=n(11),r=n(67),o=n(0),i=n.n(o),c=n(24),s=n.n(c),u=n(40),l=n.n(u),d=n(542),f={tag:d.q,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},m=function(e){var t=e.className,n=e.cssModule,o=e.innerRef,c=e.tag,s=Object(r.a)(e,["className","cssModule","innerRef","tag"]),u=Object(d.m)(l()(t,"card-body"),n);return i.a.createElement(c,Object(a.a)({},s,{className:u,ref:o}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},549:function(e,t,n){"use strict";var a="";switch(window.location.hostname){case"localhost":case"admin.strikepro.ru":a="https://dev.strikepro.ru";break;case"strike.localhost":a="http://strike.localhost"}t.a={base:a,api:{login:"/dashboard/auth/login",logout:"/dashboard/auth/logout",posts:"/dashboard/blog/posts",post:"/dashboard/blog/post",categories:"/dashboard/blog/categories",category:"/dashboard/blog/category",slides:"/dashboard/slides",tiles:"/dashboard/mainfeeds",tile_types:"/dashboard/mainfeed/types",tile:"/dashboard/mainfeed",nomenclature:"/dashboard/nomenclature",nomenclatures:"/dashboard/nomenclatures",nomenclatureCharacteristic:"/dashboard/nomenclature/characteristic",typesOfNomenclature:"/dashboard/nomenclature/characteristic",fileupload:"/dashboard/fileupload",static_pages:"/dashboard/pages",url_alias:"/dashboard/url_alias"}}},550:function(e,t,n){"use strict";var a=n(11),r=n(67),o=n(0),i=n.n(o),c=n(24),s=n.n(c),u=n(40),l=n.n(u),d=n(542),f={tag:d.q,inverse:s.a.bool,color:s.a.string,block:Object(d.h)(s.a.bool,'Please use the props "body"'),body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},m=function(e){var t=e.className,n=e.cssModule,o=e.color,c=e.block,s=e.body,u=e.inverse,f=e.outline,m=e.tag,p=e.innerRef,h=Object(r.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),b=Object(d.m)(l()(t,"card",!!u&&"text-white",!(!c&&!s)&&"card-body",!!o&&(f?"border":"bg")+"-"+o),n);return i.a.createElement(m,Object(a.a)({},h,{className:b,ref:p}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},551:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"d",function(){return c});var a=n(547),r=function(e){return Object(a.a)({method:"POST",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}},e?{body:JSON.stringify(e)}:{})},o=function(){return{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},i=function(){return{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},c=function(e){return{method:"PUT",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}}},558:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return a})},561:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(0),r=n.n(a),o=n(699),i=n(700),c=n(573),s=n(574),u=n(562),l=n(616),d=n(581),f=function(e){var t=e.input,n=e.label,a=e.type,f=e.placeholder,m=e.required,p=e.icon,h=e.meta,b=h.touched,g=h.error;return r.a.createElement(o.a,{className:b?g?"":"was-validated":""},n&&r.a.createElement(i.a,null,n),r.a.createElement(c.a,{className:"mb-3"},p&&r.a.createElement(s.a,{addonType:"prepend"},r.a.createElement(u.a,null,r.a.createElement("i",{className:p}))),r.a.createElement(l.a,Object.assign({},t,{type:a,valid:!!b&&!g,className:b&&g?"form-control-warning is-invalid":"",placeholder:f||n,required:m})),r.a.createElement(d.a,{valid:!!b&&!g,className:"help-block"},g)))}},562:function(e,t,n){"use strict";var a=n(11),r=n(67),o=n(0),i=n.n(o),c=n(24),s=n.n(c),u=n(40),l=n.n(u),d=n(542),f={tag:d.q,className:s.a.string,cssModule:s.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),s=Object(d.m)(l()(t,"input-group-text"),n);return i.a.createElement(o,Object(a.a)({},c,{className:s}))};m.propTypes=f,m.defaultProps={tag:"span"},t.a=m},572:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){return e?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}},573:function(e,t,n){"use strict";var a=n(11),r=n(67),o=n(0),i=n.n(o),c=n(24),s=n.n(c),u=n(40),l=n.n(u),d=n(542),f={tag:d.q,size:s.a.string,className:s.a.string,cssModule:s.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=e.size,s=Object(r.a)(e,["className","cssModule","tag","size"]),u=Object(d.m)(l()(t,"input-group",c?"input-group-"+c:null),n);return i.a.createElement(o,Object(a.a)({},s,{className:u}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},574:function(e,t,n){"use strict";var a=n(11),r=n(67),o=n(0),i=n.n(o),c=n(24),s=n.n(c),u=n(40),l=n.n(u),d=n(542),f=n(562),m={tag:d.q,addonType:s.a.oneOf(["prepend","append"]).isRequired,children:s.a.node,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=e.addonType,s=e.children,u=Object(r.a)(e,["className","cssModule","tag","addonType","children"]),m=Object(d.m)(l()(t,"input-group-"+c),n);return"string"===typeof s?i.a.createElement(o,Object(a.a)({},u,{className:m}),i.a.createElement(f.a,{children:s})):i.a.createElement(o,Object(a.a)({},u,{className:m,children:s}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},581:function(e,t,n){"use strict";var a=n(11),r=n(67),o=n(0),i=n.n(o),c=n(24),s=n.n(c),u=n(40),l=n.n(u),d=n(542),f={children:s.a.node,tag:d.q,className:s.a.string,cssModule:s.a.object,valid:s.a.bool,tooltip:s.a.bool},m={tag:"div",valid:void 0},p=function(e){var t=e.className,n=e.cssModule,o=e.valid,c=e.tooltip,s=e.tag,u=Object(r.a)(e,["className","cssModule","valid","tooltip","tag"]),f=c?"tooltip":"feedback",m=Object(d.m)(l()(t,o?"valid-"+f:"invalid-"+f),n);return i.a.createElement(s,Object(a.a)({},u,{className:m}))};p.propTypes=f,p.defaultProps=m,t.a=p},590:function(e,t,n){"use strict";var a=n(11),r=n(67),o=n(0),i=n.n(o),c=n(24),s=n.n(c),u=n(40),l=n.n(u),d=n(542),f={tag:d.q,fluid:s.a.bool,className:s.a.string,cssModule:s.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.fluid,c=e.tag,s=Object(r.a)(e,["className","cssModule","fluid","tag"]),u=Object(d.m)(l()(t,o?"container-fluid":"container"),n);return i.a.createElement(c,Object(a.a)({},s,{className:u}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},615:function(e,t,n){"use strict";var a=n(185),r=n(186),o=n(188),i=n(187),c=n(189),s=n(288),u=n(66),l=n(0),d=n.n(l),f=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={pathname:null,unlisten:null},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=s.a.listen(function(t){e.state.pathname});this.setState({unlisten:t})}},{key:"componentWillUnmount",value:function(){this.state&&this.state.unlisten&&this.state.unlisten()}},{key:"componentWillReceiveProps",value:function(e){e.location.pathname!==this.props.location.pathname&&this.setState({pathname:null})}},{key:"render",value:function(){var e=this.state.pathname;return e?d.a.createElement(u.c,{to:e}):null}}]),t}(l.Component);f=Object(u.k)(f),t.a=f},666:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),r=n.n(a),o=n(548),i=n(542);function c(e){return Object(i.s)('The "CardBlock" component has been deprecated.\nPlease use component "CardBody".'),r.a.createElement(o.a,e)}},733:function(e,t,n){"use strict";var a=n(11),r=n(67),o=n(0),i=n.n(o),c=n(24),s=n.n(c),u=n(40),l=n.n(u),d=n(542),f={tag:d.q,className:s.a.string,cssModule:s.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),s=Object(d.m)(l()(t,"card-group"),n);return i.a.createElement(o,Object(a.a)({},c,{className:s}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},841:function(e,t,n){"use strict";n.r(t);var a=n(185),r=n(186),o=n(188),i=n(187),c=n(189),s=n(0),u=n.n(s),l=n(590),d=n(552),f=n(553),m=n(733),p=n(550),h=n(666),b=n(547),g=n(839),y=n(837),v=n(565),j=n(658),O=n(788),E=(n(296),n(190)),w=n(561),k=n(549);function N(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function S(e,t,n){return t&&N(e.prototype,t),n&&N(e,n),e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){A(e,t,n[t])})}return e}function _(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function z(e){return!(!e||"function"!==typeof e.hasOwnProperty||!(e.hasOwnProperty("__ownerID")||e._map&&e._map.hasOwnProperty("__ownerID")))}function M(e,t,n){return Object.keys(e).reduce(function(t,a){var r=""+a;return t.has(r)?t.set(r,n(t.get(r),e[r])):t},t)}var T=function(e){return function(t){return z(t)?t.get(e):t[e]}},q=function(){function e(e,t,n){if(void 0===t&&(t={}),void 0===n&&(n={}),!e||"string"!==typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var a=n,r=a.idAttribute,o=void 0===r?"id":r,i=a.mergeStrategy,c=void 0===i?function(e,t){return P({},e,t)}:i,s=a.processStrategy,u=void 0===s?function(e){return P({},e)}:s;this._key=e,this._getId="function"===typeof o?o:T(o),this._idAttribute=o,this._mergeStrategy=c,this._processStrategy=u,this.define(t)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce(function(t,n){var a,r=e[n];return P({},t,((a={})[n]=r,a))},this.schema||{})},t.getId=function(e,t,n){return this._getId(e,t,n)},t.merge=function(e,t){return this._mergeStrategy(e,t)},t.normalize=function(e,t,n,a,r,o){var i=this;if(o.some(function(t){return t===e}))return this.getId(e,t,n);o.push(e);var c=this._processStrategy(e,t,n);return Object.keys(this.schema).forEach(function(e){if(c.hasOwnProperty(e)&&"object"===typeof c[e]){var t=i.schema[e];c[e]=a(c[e],c,e,t,r,o)}}),r(this,c,e,t,n),this.getId(e,t,n)},t.denormalize=function(e,t){var n=this;return z(e)?M(this.schema,e,t):(Object.keys(this.schema).forEach(function(a){if(e.hasOwnProperty(a)){var r=n.schema[a];e[a]=t(e[a],r)}}),e)},S(e,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),e}(),x=function(){function e(e,t){t&&(this._schemaAttribute="string"===typeof t?function(e){return e[t]}:t),this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=e},t.getSchemaAttribute=function(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)},t.inferSchema=function(e,t,n){if(this.isSingleSchema)return this.schema;var a=this.getSchemaAttribute(e,t,n);return this.schema[a]},t.normalizeValue=function(e,t,n,a,r,o){var i=this.inferSchema(e,t,n);if(!i)return e;var c=a(e,t,n,i,r,o);return this.isSingleSchema||void 0===c||null===c?c:{id:c,schema:this.getSchemaAttribute(e,t,n)}},t.denormalizeValue=function(e,t){var n=z(e)?e.get("schema"):e.schema;return this.isSingleSchema||n?t((z(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):e},S(e,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),e}(),R=function(e){function t(t,n){if(!n)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return e.call(this,t,n)||this}_(t,e);var n=t.prototype;return n.normalize=function(e,t,n,a,r,o){return this.normalizeValue(e,t,n,a,r,o)},n.denormalize=function(e,t){return this.denormalizeValue(e,t)},t}(x),C=function(e){function t(){return e.apply(this,arguments)||this}_(t,e);var n=t.prototype;return n.normalize=function(e,t,n,a,r,o){var i=this;return Object.keys(e).reduce(function(t,n,c){var s,u=e[n];return void 0!==u&&null!==u?P({},t,((s={})[n]=i.normalizeValue(u,e,n,a,r,o),s)):t},{})},n.denormalize=function(e,t){var n=this;return Object.keys(e).reduce(function(a,r){var o,i=e[r];return P({},a,((o={})[r]=n.denormalizeValue(i,t),o))},{})},t}(x),L=function(e){if(Array.isArray(e)&&e.length>1)throw new Error("Expected schema definition to be a single schema, but found "+e.length+".");return e[0]},I=function(e){return Array.isArray(e)?e:Object.keys(e).map(function(t){return e[t]})},V=function(e,t,n,a,r,o,i){return e=L(e),I(t).map(function(t,c){return r(t,n,a,e,o,i)})},D=function(e){function t(){return e.apply(this,arguments)||this}_(t,e);var n=t.prototype;return n.normalize=function(e,t,n,a,r,o){var i=this;return I(e).map(function(e,c){return i.normalizeValue(e,t,n,a,r,o)}).filter(function(e){return void 0!==e&&null!==e})},n.denormalize=function(e,t){var n=this;return e&&e.map?e.map(function(e){return n.denormalizeValue(e,t)}):e},t}(x),J=function(e,t,n,a,r,o,i){var c=P({},t);return Object.keys(e).forEach(function(n){var a=e[n],s=r(t[n],t,n,a,o,i);void 0===s||null===s?delete c[n]:c[n]=s}),c},U=function(e,t,n){if(z(t))return M(e,t,n);var a=P({},t);return Object.keys(e).forEach(function(t){null!=a[t]&&(a[t]=n(a[t],e[t]))}),a},G=function e(t,n,a,r,o,i){return"object"===typeof t&&t?"object"!==typeof r||r.normalize&&"function"===typeof r.normalize?r.normalize(t,n,a,e,o,i):(Array.isArray(r)?V:J)(r,t,n,a,e,o,i):t},H={Array:D,Entity:q,Object:function(){function e(e){this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce(function(t,n){var a,r=e[n];return P({},t,((a={})[n]=r,a))},this.schema||{})},t.normalize=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return J.apply(void 0,[this.schema].concat(t))},t.denormalize=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return U.apply(void 0,[this.schema].concat(t))},e}(),Union:R,Values:C},W=new H.Entity("message"),B=new H.Entity("user"),F=new H.Entity("email"),K=new H.Entity("password"),Q=new H.Entity("errors",{email:[F],password:[K]},{idAttribute:function(){return"errors"}}),X=new H.Entity("message",{message:W,errors:Q},{idAttribute:function(){return"message"}}),Y=(new H.Entity("login",{response:X},{idAttribute:function(){return"login"}}),n(288)),Z=n(551),$=Object(E.b)("authResource")({login:{method:"POST",url:"".concat(k.a.base).concat(k.a.api.login),networkHelpers:{handleStatusCode:function(e){200===e.status&&(Y.a.push("/"),window.location.reload())},requestPOST:Z.c},normalizer:function(e){return e.errors?{entities:Object(b.a)({},e,{message:[e.message]}),result:{errors:e}}:function(e,t){if(!e||"object"!==typeof e)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+typeof e+'".');var n={},a=function(e){return function(t,n,a,r,o){var i=t.key,c=t.getId(a,r,o);i in e||(e[i]={});var s=e[i][c];e[i][c]=s?t.merge(s,n):n}}(n);return{entities:n,result:G(e,e,null,t,a,[])}}(e,B)},afterHook:function(e){e.user&&localStorage.setItem("user",JSON.stringify(e.user))}},logout:{method:"GET",url:"".concat(k.a.base).concat(k.a.api.logout),afterHook:function(){localStorage.clear()}}});console.log($);var ee=$.actions,te=ee.login.perform,ne=ee.logout.perform,ae=$.selectors,re=ae.resource.getResource,oe=ae.login.request.getResource,ie=(ae.logout.request.getResource,n(572)),ce=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).onLogin=function(e){return(0,n.props.LoginAction)({body:e}).then(function(e){var t=e.normalizedPayload;if(t&&t.errors)throw t}).catch(function(e){throw new O.a(Object(b.a)({_error:e.message?e.message[0]:null},e.errors&&e.errors.email?{email:e.errors.email[0]}:{},e.errors&&e.errors.password?{password:e.errors.password[0]}:{}))})},n.state=n.initialState,n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.onLogout()}},{key:"onLogout",value:function(){return(0,this.props.LogoutAction)()}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.handleSubmit,a=e.pristine,r=e.reset,o=e.submitting;return u.a.createElement("form",{onSubmit:n(this.onLogin)},u.a.createElement(g.a,{name:"email",component:w.a,label:"Email",validate:[ie.a],type:"text",icon:"icon-user"}),u.a.createElement(g.a,{name:"password",component:w.a,label:"\u041f\u0430\u0440\u043e\u043b\u044c",validate:[ie.a],type:"password",icon:"icon-lock"}),u.a.createElement(d.a,null,u.a.createElement(f.a,{xs:"8"},u.a.createElement(v.a,{color:"primary",type:"submit",className:"px-4",disabled:a||o},"\u0412\u043e\u0439\u0442\u0438")),u.a.createElement(f.a,{xs:"4",className:"text-right"},u.a.createElement(v.a,{block:!0,color:"link",type:"button",onClick:r},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443"))),t&&u.a.createElement(j.a,{color:"danger"},t))}},{key:"initialState",get:function(){return{redirect:!1}}}]),t}(s.Component);ce=Object(y.a)({form:"LoginForm"})(ce);var se=ce=Object(E.a)(function(e,t){return{LoginGetResource:oe(e,t),AuthGetResource:re(e,t)}},function(e){return{LoginAction:function(t){return e(te(t))},LogoutAction:function(t){return e(ne())}}})(ce),ue=n(615);n.d(t,"Login",function(){return le});var le=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"app flex-row align-items-center"},u.a.createElement(l.a,null,u.a.createElement(d.a,{className:"justify-content-center"},u.a.createElement(f.a,{md:"8"},u.a.createElement(m.a,{className:"mb-0"},u.a.createElement(p.a,{className:"p-4"},u.a.createElement(h.a,{className:"card-body"},u.a.createElement("h1",null,"\u0412\u0445\u043e\u0434"),u.a.createElement("p",{className:"text-muted"},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),u.a.createElement(se,null))))))),u.a.createElement(ue.a,null))}}]),t}(s.Component);t.default=le}}]);
//# sourceMappingURL=20.280c935d.chunk.js.map