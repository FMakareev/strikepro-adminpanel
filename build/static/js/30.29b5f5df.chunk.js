(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1150:function(e,t,a){"use strict";a.r(t);var n=a(210),r=a(211),o=a(213),c=a(212),s=a(214),i=a(0),u=a.n(i),l=a(915),d=a(953),m=a(900),g=a(901),p=a(907),f=a(905),h=a(997),b=a(998),v=a(914),E=a(910),P=a(916),j=a(152),y=a(918),O=a(8),N=function(e){var t=e.title,a=e.excerpt,n=e.id,r=e.status,o=e.onDelete;return u.a.createElement(p.a,null,u.a.createElement(f.a,null,u.a.createElement(h.a,null,t),u.a.createElement(b.a,null,a)),u.a.createElement(v.a,{className:"text-muted"},u.a.createElement(E.a,{color:"warning"},u.a.createElement(j.Link,{to:"/static-page/editor/".concat(n)},u.a.createElement(O.FormattedMessage,{id:"button.change",defaultMessage:"button.change"}))),u.a.createElement(y.a,{label:u.a.createElement(O.FormattedMessage,{id:"button.delete",defaultMessage:"Change"}),confirmMessage:u.a.createElement(O.FormattedMessage,{id:"confirmMessage.delete",defaultMessage:"Are you sure you want to delete?"}),onDelete:function(){return o(n)}}),u.a.createElement(P.a,{color:"success",className:"float-right"},u.a.createElement(O.FormattedMessage,{id:"publishStatus.".concat(r),defaultMessage:"publishStatus.".concat(r)}))))};a.d(t,"StaticPageList",function(){return M});var M=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(l.a,{header:u.a.createElement(O.FormattedMessage,{id:"staticPages.list.title",defaultMessage:"staticPages.list.title"}),GetList:d.e,isRetrieving:d.k,DeleteAction:d.b,GetAction:d.f,ListComponent:function(e){var t=e.data,a=e.onDelete;return console.log(t,a),u.a.createElement(m.a,null,t&&t.map(function(e,t){return u.a.createElement(g.a,{xs:"12",sm:"6",md:"4",key:t},u.a.createElement(N,Object.assign({},e,{onDelete:a})))}))}})}}]),t}(i.Component);t.default=M},896:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e,t){return!(!e||!t)&&Object.prototype.hasOwnProperty.call(e,t)}},897:function(e,t,a){"use strict";var n="";switch(window.location.hostname){case"localhost":case"admin.strikepro.ru":n="https://dev.strikepro.ru";break;case"strike.localhost":n="http://strike.localhost"}t.a={base:n,api:{login:"/dashboard/auth/login",logout:"/dashboard/auth/logout",posts:"/dashboard/blog/posts",post:"/dashboard/blog/post",categories:"/dashboard/blog/categories",category:"/dashboard/blog/category",slides:"/dashboard/slides",tiles:"/dashboard/mainfeeds",tile_types:"/dashboard/mainfeed/types",tile:"/dashboard/mainfeed",nomenclature:"/dashboard/nomenclature",nomenclatures:"/dashboard/nomenclatures",nomenclatureCharacteristic:"/dashboard/nomenclature/characteristic",typesOfNomenclature:"/dashboard/nomenclature/characteristic",fileupload:"/dashboard/fileupload",static_pages:"/dashboard/pages",url_alias:"/dashboard/url_alias",feedback:"/dashboard/feedback"}}},899:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return c}),a.d(t,"d",function(){return s});var n=a(215),r=function(e){return Object(n.a)({method:"POST",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}},e?{body:JSON.stringify(e)}:{})},o=function(){return{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},c=function(){return{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},s=function(e){return{method:"PUT",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}}},902:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(153),r=function(e){var t=e.status;return 401===t?(n.a.push("#/login"),window.location.reload(),e):404===t?(n.a.push("#/404"),window.location.reload(),e):e}},903:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(215),r=a(94),o=a(18),c=a(210),s=function e(t){var a=this;Object(c.a)(this,e),this.resourceName=null,this.mergeResourceAndPayload=function(e,t){return t.forEach(function(t){e[a.resourceName][a.resourceName][t.id]=t,e[a.resourceName].metadata={data:[].concat(Object(o.a)(e[a.resourceName].metadata.data),[t.id])}}),e},this.removePayloadFromResources=function(e,t){return t?(console.log("removePayloadFromResources: ",a,e,t),delete e[a.resourceName][a.resourceName][t],e[a.resourceName].metadata.data=e[a.resourceName].metadata.data.filter(function(e){return e!==t}),e):(console.warn("payloadID undefined"),e)},this.payloadToResource=function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c={entities:Object(r.a)({},a.resourceName,(t={},Object(r.a)(t,a.resourceName,{}),Object(r.a)(t,"metadata",{}),t)),result:[]};return e&&e.forEach(function(e){c.result.push(e.id),c.entities[a.resourceName][a.resourceName][e.id]=e}),c.entities[a.resourceName].metadata=Object(n.a)({},o,{data:c.result}),c},this.updateResource=function(e,t){return e[a.resourceName][a.resourceName][t.id]=t,e},this.normalizeError=function(e){return e.errors||(e.errors={}),{entities:Object(n.a)({},e,{message:[e.message]}),result:{errors:e}}},this.resourceName=t}},904:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(896);var n=function(e){return function(t,a,n){return t.errors?e.normalizeError(t):t?e.removePayloadFromResources(a,n.id):a}}},908:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(0),r=a.n(n),o=a(900),c=a(901),s=a(907),i=a(898),u=a(905),l=a(914),d=function(e){var t=e.header,a=e.children,n=e.footer;return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(o.a,null,r.a.createElement(c.a,{xs:"12"},r.a.createElement(s.a,null,t&&r.a.createElement(i.a,null,r.a.createElement("strong",null,t)),r.a.createElement(u.a,{className:"card-body"},a),n&&r.a.createElement(l.a,{className:"card-footer"},n)))))};t.b=d},915:function(e,t,a){"use strict";var n=a(215),r=a(210),o=a(211),c=a(213),s=a(212),i=a(214),u=a(0),l=a.n(u),d=a(75),m=a(216),g=a(967),p=a(968),f=a(901),h=a(966),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).onMovePageHistory=function(e){var t=a.props,n=t.match;return t.history.push("".concat(n.path,"?page=").concat(e)),e},a.onMovePage=function(e,t){e.preventDefault();var n=a.props,r=n.metaData;return(0,n.onMovePage)(r.current_page+t),a.onMovePageHistory(r.current_page+t),t},a.state=a.initialState,a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"onPagination",value:function(e){var t=this,a=e.last_page,n=[],r=this.state,o=r.page_min,c=r.page_max,s=r.current_page;s===c?c<a&&(c+=1,o+=1):s===o+1&&o>0&&(c-=1,o-=1),c!==this.state.page_max&&o!==this.state.page_max&&this.setState(c,o);for(var i=function(e){var a=e+1;a===s?n.push(l.a.createElement(g.a,{key:e,active:!0},l.a.createElement(p.a,{href:"#"},a))):n.push(l.a.createElement(g.a,{key:e},l.a.createElement(p.a,{onClick:function(e){e.preventDefault();var n=t.props.onMovePage;t.onMovePageHistory(a),n(a)}},a)))},u=o;u<a;u++)i(u);return n}},{key:"render",value:function(){var e=this,t=this.props.metaData;return t&&t&&t.last_page>1?l.a.createElement(f.a,{xs:"12"},l.a.createElement("nav",null,l.a.createElement(h.a,{className:"justify-content-center"},t.current_page>1&&l.a.createElement(g.a,null,l.a.createElement(p.a,{onClick:function(t){return e.onMovePage(t,-1)},previous:!0,href:"#"},"Prev")),this.onPagination(t),t.last_page>t.current_page&&l.a.createElement(g.a,null,l.a.createElement(p.a,{onClick:function(t){return e.onMovePage(t,1)},next:!0,href:"#"},"Next"))))):null}},{key:"initialState",get:function(){return{page_min:0,page_max:5}}}]),t}(u.Component),v=(b=Object(d.k)(b),a(908)),E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).getPaginationParam=function(){try{var e=a.props.location.search.match(/page=[0-9]/gi);return e&&e.length?e[0].match(/[0-9]/g)[0]:1}catch(t){return console.log("Error getPaginationParam: ",t),1}},a.onDelete=function(e){var t=a.props.DeleteAction;return t&&t({urlParams:{id:e}})},a.onGetList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=a.props.GetAction;return t&&t({query:{page:e}})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.onGetList(this.getPaginationParam())}},{key:"render",value:function(){var e=this.props,t=e.list,a=e.isRetrieving,n=e.ListComponent,r=e.header;if(a&&!t.length)return l.a.createElement("div",null,"Loading...");if(!t.length)return null;var o=Object.values(t[0]),c=t[1];return l.a.createElement(v.a,{header:r},n&&l.a.createElement(n,{data:o,metaData:c,onDelete:this.onDelete}),l.a.createElement(b,{metaData:c,onMovePage:this.onGetList}))}}]),t}(u.Component);E.defaultProps={header:null,list:[],DeleteAction:function(){return null},GetAction:function(){return null},ListComponent:function(){return l.a.createElement("div",null,"empty")}};E=Object(m.a)(function(e,t){var a=t.GetList,r=t.isRetrieving;return a||console.log("GetList in undefined"),Object(n.a)({},a?{list:a(e,t)}:{},r?{isRetrieving:r(e,t)}:{})},function(e,t){var a=t.DeleteAction,r=t.GetAction;return a||console.log("DeleteAction in undefined"),r||console.log("GetAction in undefined"),Object(n.a)({},a?{DeleteAction:function(t){return e(a(t))}}:{},r?{GetAction:function(t){return e(r(t))}}:{})})(E),E=Object(d.k)(E);t.a=E},916:function(e,t,a){"use strict";var n=a(14),r=a(76),o=a(0),c=a.n(o),s=a(10),i=a.n(s),u=a(27),l=a.n(u),d=a(891),m={color:i.a.string,pill:i.a.bool,tag:d.q,innerRef:i.a.oneOfType([i.a.object,i.a.func,i.a.string]),children:i.a.node,className:i.a.string,cssModule:i.a.object},g=function(e){var t=e.className,a=e.cssModule,o=e.color,s=e.innerRef,i=e.pill,u=e.tag,m=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),g=Object(d.m)(l()(t,"badge","badge-"+o,!!i&&"badge-pill"),a);return m.href&&"span"===u&&(u="a"),c.a.createElement(u,Object(n.a)({},m,{className:g,ref:s}))};g.propTypes=m,g.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=g},918:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(910),c=function(e){var t=e.onDelete,a=e.label,n=e.confirmMessage;return r.a.createElement(o.a,{color:"danger",onClick:function(){window.confirm(n)&&t()}},a)};c.defaultProps={label:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",confirmMessage:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?"},t.a=c},953:function(e,t,a){"use strict";a.d(t,"g",function(){return l}),a.d(t,"a",function(){return p}),a.d(t,"b",function(){return f}),a.d(t,"c",function(){return h}),a.d(t,"f",function(){return b}),a.d(t,"h",function(){return v}),a.d(t,"j",function(){return k}),a.d(t,"k",function(){return w}),a.d(t,"e",function(){return j}),a.d(t,"d",function(){return y}),a.d(t,"l",function(){return D}),a.d(t,"i",function(){return N});var n=a(216),r=a(903),o=a(897),c=a(902),s=a(899),i=a(904),u=a(896),l="staticPage",d=new r.a(l),m=Object(n.b)(l)({createStaticPage:{method:"POST",url:"".concat(o.a.base).concat(o.a.api.static_pages),normalizer:function(e,t,a){return e?e.errors||e.message?d.normalizeError(e):Object(u.a)(t,l)?d.mergeResourceAndPayload(t,[e]):d.payloadToResource([e]):null},networkHelpers:{handleStatusCode:c.a,requestPOST:s.c}},deleteStaticPage:{method:"DELETE",url:"".concat(o.a.base).concat(o.a.api.static_pages,"/::id"),normalizer:Object(i.a)(d),networkHelpers:{handleStatusCode:c.a,requestDELETE:s.a}},getStaticPage:{method:"GET",url:"".concat(o.a.base).concat(o.a.api.static_pages,"/::id"),normalizer:function(e){return console.log(e),d.payloadToResource([e])},networkHelpers:{handleStatusCode:c.a,requestGET:s.b}},getStaticPages:{method:"GET",url:"".concat(o.a.base).concat(o.a.api.static_pages),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?d.payloadToResource(e):d.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:c.a,requestGET:s.b}},updateStaticPage:{method:"PUT",url:"".concat(o.a.base).concat(o.a.api.static_pages,"/::id"),normalizer:function(e,t){return e.errors?d.normalizeError(e):e?d.updateResource(t,e):t},networkHelpers:{handleStatusCode:c.a,requestPUT:s.d}}}),g=m.actions,p=g.createStaticPage.perform,f=g.deleteStaticPage.perform,h=g.getStaticPage.perform,b=g.getStaticPages.perform,v=g.updateStaticPage.perform,E=m.selectors,P=E.resource,j=P.getResource,y=P.getResourceById,O=E.createStaticPage.request,N=(O.getResource,O.isPerforming),M=(E.deleteStaticPage.request.getResource,E.getStaticPage.request),k=(M.getResource,M.isPerforming),S=E.getStaticPages.request,w=(S.getResource,S.isPerforming),R=E.updateStaticPage.request,D=(R.getResource,R.isPerforming)},997:function(e,t,a){"use strict";var n=a(14),r=a(76),o=a(0),c=a.n(o),s=a(10),i=a.n(s),u=a(27),l=a.n(u),d=a(891),m={tag:d.q,className:i.a.string,cssModule:i.a.object},g=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.m)(l()(t,"card-title"),a);return c.a.createElement(o,Object(n.a)({},s,{className:i}))};g.propTypes=m,g.defaultProps={tag:"div"},t.a=g},998:function(e,t,a){"use strict";var n=a(14),r=a(76),o=a(0),c=a.n(o),s=a(10),i=a.n(s),u=a(27),l=a.n(u),d=a(891),m={tag:d.q,className:i.a.string,cssModule:i.a.object},g=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.m)(l()(t,"card-text"),a);return c.a.createElement(o,Object(n.a)({},s,{className:i}))};g.propTypes=m,g.defaultProps={tag:"p"},t.a=g}}]);
//# sourceMappingURL=30.29b5f5df.chunk.js.map