(window.webpackJsonp=window.webpackJsonp||[]).push([[29,38],{553:function(e,t,a){"use strict";var r="";switch(window.location.hostname){case"localhost":case"admin.strikepro.ru":r="https://dev.strikepro.ru";break;case"strike.localhost":r="http://strike.localhost"}t.a={base:r,api:{login:"/dashboard/auth/login",logout:"/dashboard/auth/logout",posts:"/dashboard/blog/posts",post:"/dashboard/blog/post",categories:"/dashboard/blog/categories",category:"/dashboard/blog/category",slides:"/dashboard/slides",tiles:"/dashboard/mainfeeds",tile_types:"/dashboard/mainfeed/types",tile:"/dashboard/mainfeed",nomenclature:"/dashboard/nomenclature",nomenclatures:"/dashboard/nomenclatures",nomenclatureCharacteristic:"/dashboard/nomenclature/characteristic",typesOfNomenclature:"/dashboard/nomenclature/characteristic",fileupload:"/dashboard/fileupload",static_pages:"/dashboard/pages"}}},554:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return c}),a.d(t,"d",function(){return s});var r=a(547),n=function(e){return Object(r.a)({method:"POST",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}},e?{body:JSON.stringify(e)}:{})},o=function(){return{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},c=function(){return{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},s=function(e){return{method:"PUT",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}}},556:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a(193),n=function(e){var t=e.status;return 401===t?(r.a.push("#/login"),window.location.reload(),e):404===t?(r.a.push("#/404"),window.location.reload(),e):e}},557:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var r=a(547),n=a(555),o=a(20),c=a(185),s=function e(t){var a=this;Object(c.a)(this,e),this.resourceName=null,this.mergeResourceAndPayload=function(e,t){return t.forEach(function(t){e[a.resourceName][a.resourceName][t.id]=t,e[a.resourceName].metadata={data:[].concat(Object(o.a)(e[a.resourceName].metadata.data),[t.id])}}),e},this.removePayloadFromResources=function(e,t){return t?(console.log("removePayloadFromResources: ",a,e,t),delete e[a.resourceName][a.resourceName][t],e[a.resourceName].metadata.data=e[a.resourceName].metadata.data.filter(function(e){return e!==t}),e):(console.warn("payloadID undefined"),e)},this.payloadToResource=function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c={entities:Object(n.a)({},a.resourceName,(t={},Object(n.a)(t,a.resourceName,{}),Object(n.a)(t,"metadata",{}),t)),result:[]};return e&&e.forEach(function(e){c.result.push(e.id),c.entities[a.resourceName][a.resourceName][e.id]=e}),c.entities[a.resourceName].metadata=Object(r.a)({},o,{data:c.result}),c},this.updateResource=function(e,t){return e[a.resourceName][a.resourceName][t.id]=t,e},this.normalizeError=function(e){return e.errors||(e.errors={}),{entities:Object(r.a)({},e,{message:[e.message]}),result:{errors:e}}},this.resourceName=t}},558:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e){return function(t,a,r){return t.errors?e.normalizeError(t):t?e.removePayloadFromResources(a,r.id):a}}},560:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a(0),n=a.n(r),o=a(550),c=a(551),s=a(549),u=a(552),i=a(548),l=a(563),d=function(e){var t=e.header,a=e.children,r=e.footer;return n.a.createElement("div",{className:"animated fadeIn"},n.a.createElement(o.a,null,n.a.createElement(c.a,{xs:"12"},n.a.createElement(s.a,null,t&&n.a.createElement(u.a,null,n.a.createElement("strong",null,t)),n.a.createElement(i.a,{className:"card-body"},a),r&&n.a.createElement(l.a,{className:"card-footer"},r)))))};t.b=d},564:function(e,t,a){"use strict";var r=a(11),n=a(67),o=a(0),c=a.n(o),s=a(24),u=a.n(s),i=a(40),l=a.n(i),d=a(542),m={color:u.a.string,pill:u.a.bool,tag:d.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),children:u.a.node,className:u.a.string,cssModule:u.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.color,s=e.innerRef,u=e.pill,i=e.tag,m=Object(n.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(d.m)(l()(t,"badge","badge-"+o,!!u&&"badge-pill"),a);return m.href&&"span"===i&&(i="a"),c.a.createElement(i,Object(r.a)({},m,{className:p,ref:s}))};p.propTypes=m,p.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=p},568:function(e,t,a){"use strict";var r=a(547),n=a(185),o=a(186),c=a(188),s=a(187),u=a(189),i=a(0),l=a.n(i),d=a(66),m=a(190),p=a(661),f=a(662),g=a(551),h=a(660),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).onMovePageHistory=function(e){var t=a.props,r=t.match;return t.history.push("".concat(r.path,"?page=").concat(e)),e},a.onMovePage=function(e,t){e.preventDefault();var r=a.props,n=r.metaData;return(0,r.onMovePage)(n.current_page+t),a.onMovePageHistory(n.current_page+t),t},a.state=a.initialState,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onPagination",value:function(e){var t=this,a=e.last_page,r=[],n=this.state,o=n.page_min,c=n.page_max,s=n.current_page;s===c?c<a&&(c+=1,o+=1):s===o+1&&o>0&&(c-=1,o-=1),c!==this.state.page_max&&o!==this.state.page_max&&this.setState(c,o);for(var u=function(e){var a=e+1;a===s?r.push(l.a.createElement(p.a,{key:e,active:!0},l.a.createElement(f.a,{href:"#"},a))):r.push(l.a.createElement(p.a,{key:e},l.a.createElement(f.a,{onClick:function(e){e.preventDefault();var r=t.props.onMovePage;t.onMovePageHistory(a),r(a)}},a)))},i=o;i<a;i++)u(i);return r}},{key:"render",value:function(){var e=this,t=this.props.metaData;return t&&t&&t.last_page>1?l.a.createElement(g.a,{xs:"12"},l.a.createElement("nav",null,l.a.createElement(h.a,{className:"justify-content-center"},t.current_page>1&&l.a.createElement(p.a,null,l.a.createElement(f.a,{onClick:function(t){return e.onMovePage(t,-1)},previous:!0,href:"#"},"Prev")),this.onPagination(t),t.last_page>t.current_page&&l.a.createElement(p.a,null,l.a.createElement(f.a,{onClick:function(t){return e.onMovePage(t,1)},next:!0,href:"#"},"Next"))))):null}},{key:"initialState",get:function(){return{page_min:0,page_max:5}}}]),t}(i.Component),v=(b=Object(d.k)(b),a(560)),E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).getPaginationParam=function(){try{var e=a.props.location.search.match(/page=[0-9]/gi);return e&&e.length?e[0].match(/[0-9]/g)[0]:1}catch(t){return console.log("Error getPaginationParam: ",t),1}},a.onDelete=function(e){var t=a.props.DeleteAction;return t&&t({urlParams:{id:e}})},a.onGetList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=a.props.GetAction;return t&&t({query:{page:e}})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.onGetList(this.getPaginationParam())}},{key:"render",value:function(){var e=this.props,t=e.list,a=e.isRetrieving,r=e.ListComponent,n=e.header;if(a&&!t.length)return l.a.createElement("div",null,"Loading...");if(!t.length)return null;var o=Object.values(t[0]),c=t[1];return l.a.createElement(v.a,{header:n},r&&l.a.createElement(r,{data:o,metaData:c,onDelete:this.onDelete}),l.a.createElement(b,{metaData:c,onMovePage:this.onGetList}))}}]),t}(i.Component);E.defaultProps={header:null,list:[],DeleteAction:function(){return null},GetAction:function(){return null},ListComponent:function(){return l.a.createElement("div",null,"empty")}};E=Object(m.a)(function(e,t){var a=t.GetList,n=t.isRetrieving;return a||console.log("GetList in undefined"),Object(r.a)({},a?{list:a(e,t)}:{},n?{isRetrieving:n(e,t)}:{})},function(e,t){var a=t.DeleteAction,n=t.GetAction;return a||console.log("DeleteAction in undefined"),n||console.log("GetAction in undefined"),Object(r.a)({},a?{DeleteAction:function(t){return e(a(t))}}:{},n?{GetAction:function(t){return e(n(t))}}:{})})(E),E=Object(d.k)(E);t.a=E},582:function(e,t,a){"use strict";a.d(t,"a",function(){return m}),a.d(t,"b",function(){return p}),a.d(t,"c",function(){return f}),a.d(t,"f",function(){return g}),a.d(t,"g",function(){return h}),a.d(t,"i",function(){return N}),a.d(t,"j",function(){return T}),a.d(t,"e",function(){return E}),a.d(t,"d",function(){return j}),a.d(t,"h",function(){return P});var r=a(190),n=a(553),o=a(556),c=a(554),s=a(557),u=a(558),i=new s.a("posts"),l=Object(r.b)("posts")({createPost:{method:"POST",url:"".concat(n.a.base).concat(n.a.api.post),normalizer:function(e,t,a){return console.log("createPost: ",e,t,a),e?e.errors||e.message?i.normalizeError(e):t.hasOwnProperty("posts")?i.mergeResourceAndPayload(t,[e]):i.payloadToResource([e]):null},networkHelpers:{handleStatusCode:o.a,requestPOST:c.c}},deletePost:{method:"DELETE",url:"".concat(n.a.base).concat(n.a.api.post,"/::id"),normalizer:Object(u.a)(i),networkHelpers:{handleStatusCode:o.a,requestDELETE:c.a}},getPost:{method:"GET",url:"".concat(n.a.base).concat(n.a.api.post,"/::id"),normalizer:function(e){return i.payloadToResource([e])},networkHelpers:{handleStatusCode:o.a,requestGET:c.b}},getPosts:{method:"GET",url:"".concat(n.a.base).concat(n.a.api.posts),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?i.payloadToResource(e):i.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:o.a,requestGET:c.b}},updatePost:{method:"PUT",url:"".concat(n.a.base).concat(n.a.api.post,"/::id"),normalizer:function(e,t){return e.errors?i.normalizeError(e):e?i.updateResource(t,e):t},networkHelpers:{handleStatusCode:o.a,requestPUT:c.d}}}),d=l.actions,m=d.createPost.perform,p=d.deletePost.perform,f=d.getPost.perform,g=d.getPosts.perform,h=d.updatePost.perform,b=l.selectors,v=b.resource,E=v.getResource,j=v.getResourceById,O=b.createPost.request,P=(O.getResource,O.isPerforming),y=(b.deletePost.request.getResource,b.getPost.request),N=(y.getResource,y.isPerforming),R=b.getPosts.request,T=(R.getResource,R.isPerforming),k=b.updatePost.request;k.getResource,k.isPerforming},633:function(e,t,a){"use strict";var r=a(11),n=a(67),o=a(0),c=a.n(o),s=a(24),u=a.n(s),i=a(40),l=a.n(i),d=a(542),m={tag:d.q,className:u.a.string,cssModule:u.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),u=Object(d.m)(l()(t,"card-title"),a);return c.a.createElement(o,Object(r.a)({},s,{className:u}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},636:function(e,t,a){"use strict";var r=a(11),n=a(67),o=a(0),c=a.n(o),s=a(24),u=a.n(s),i=a(40),l=a.n(i),d=a(542),m={tag:d.q,className:u.a.string,cssModule:u.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),u=Object(d.m)(l()(t,"card-text"),a);return c.a.createElement(o,Object(r.a)({},s,{className:u}))};p.propTypes=m,p.defaultProps={tag:"p"},t.a=p},639:function(e,t,a){"use strict";a.d(t,"a",function(){return m}),a.d(t,"b",function(){return p}),a.d(t,"e",function(){return f}),a.d(t,"f",function(){return O}),a.d(t,"g",function(){return y}),a.d(t,"d",function(){return b}),a.d(t,"c",function(){return v});var r=a(190),n=a(553),o=a(556),c=a(554),s=a(557),u=a(558),i=new s.a("nomenclatures"),l=Object(r.b)("nomenclatures")({createNomenclature:{method:"POST",url:"".concat(n.a.base).concat(n.a.api.nomenclature),normalizer:function(e,t,a){return console.log("createNomenclature: ",e,t,a),e?e.errors?i.normalizeError(e):t.hasOwnProperty("nomenclatures")?i.mergeResourceAndPayload(t,[e]):i.payloadToResource([e]):null},networkHelpers:{handleStatusCode:o.a,requestPOST:c.c}},deleteNomenclature:{method:"DELETE",url:"".concat(n.a.base).concat(n.a.api.nomenclature,"/::id"),normalizer:Object(u.a)(i),networkHelpers:{handleStatusCode:o.a,requestDELETE:c.a}},getNomenclature:{method:"GET",url:"".concat(n.a.base).concat(n.a.api.nomenclature,"/::id"),normalizer:function(e){return i.payloadToResource([e])},networkHelpers:{handleStatusCode:o.a,requestGET:c.b}},getNomenclatures:{method:"GET",url:"".concat(n.a.base).concat(n.a.api.nomenclatures),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?i.payloadToResource(e):i.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:o.a,requestGET:c.b}},updateNomenclature:{method:"PUT",url:"".concat(n.a.base).concat(n.a.api.nomenclature,"/::id"),normalizer:function(e,t){return e.errors?i.normalizeError(e):e?i.updateResource(t,e):t},networkHelpers:{handleStatusCode:o.a,requestPUT:c.d}}}),d=l.actions,m=(d.createNomenclature.perform,d.deleteNomenclature.perform),p=d.getNomenclature.perform,f=d.getNomenclatures.perform,g=(d.updateNomenclature.perform,l.selectors),h=g.resource,b=h.getResource,v=h.getResourceById,E=g.createNomenclature.request,j=(E.getResource,E.isPerforming,g.deleteNomenclature.request.getResource,g.getNomenclature.request),O=(j.getResource,j.isPerforming),P=g.getNomenclatures.request,y=(P.getResource,P.isPerforming),N=g.updateNomenclature.request;N.getResource,N.isPerforming},683:function(e,t,a){"use strict";a.r(t);var r=a(185),n=a(186),o=a(188),c=a(187),s=a(189),u=a(0),i=a.n(u),l=a(550),d=a(551),m=a(190),p=a(582),f=a(549),g=a(548),h=a(633),b=a(636),v=a(563),E=a(565),j=a(564),O=a(191),P=function(e){var t=e.title,a=e.excerpt,r=e.id,n=e.status,o=e.onDelete;return i.a.createElement(f.a,null,i.a.createElement(g.a,null,i.a.createElement(h.a,null,t),i.a.createElement(b.a,null,a)),i.a.createElement(v.a,{className:"text-muted"},i.a.createElement(E.a,{color:"warning"},i.a.createElement(O.Link,{to:"/post-editor/".concat(r)},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")),i.a.createElement(E.a,{color:"danger",onClick:function(){return o(r)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),i.a.createElement(j.a,{color:"success",className:"float-right"},n)))},y=a(568),N=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(y.a,{header:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446",DeleteAction:p.b,GetAction:p.f,GetList:p.e,isRetrieving:p.j,ListComponent:function(e){var t=e.data,a=e.onDelete;return i.a.createElement(l.a,null,t&&t.map(function(e,t){return i.a.createElement(d.a,{xs:"12",sm:"6",md:"4",key:t},i.a.createElement(P,Object.assign({},e,{onDelete:a})))}))}})}}]),t}(u.Component);N=Object(m.a)(function(e,t){return{posts:Object(p.e)(e,t),isRetrievingGetPosts:Object(p.j)(e,t)}},function(e){return{DeletePostAction:function(t){return e(Object(p.b)(t))},GetPostsAction:function(t){return e(Object(p.f)(t))}}})(N);t.default=N},825:function(e,t,a){"use strict";a.r(t),a.d(t,"NomenclatureList",function(){return f});var r=a(185),n=a(186),o=a(188),c=a(187),s=a(189),u=a(0),i=a.n(u),l=a(560),d=a(190),m=a(639),p=a(683),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),u=0;u<n;u++)s[u]=arguments[u];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).onGetNomenclaturesAction=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.props.GetNomenclaturesAction({query:{page:e}})},a.onDeleteNomenclatureAction=function(e){return a.props.DeleteNomenclatureAction({urlParams:{id:e}})},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentWillMount",value:function(){this.onGetNomenclaturesAction()}},{key:"render",value:function(){var e=this.props,t=e.nomenclatures;if(e.isRetrievingGetNomenclatures&&!t)return i.a.createElement("div",null,"Loading...");if(!t.length)return null;console.log(this.props);Object.values(t[0]);var a=t[1];return i.a.createElement(l.a,{header:"title"},i.a.createElement(p.default,{metaData:a,onMovePage:this.onDeleteNomenclatureAction}))}}]),t}(u.Component);f=Object(d.a)(function(e,t){return{nomenclatures:Object(m.d)(e,t),isRetrievingGetNomenclatures:Object(m.g)(e,t)}},function(e){return{GetNomenclaturesAction:function(t){return e(Object(m.e)(t))},DeleteNomenclatureAction:function(t){return e(Object(m.a)(t))}}})(f),t.default=f}}]);
//# sourceMappingURL=29.450661fe.chunk.js.map