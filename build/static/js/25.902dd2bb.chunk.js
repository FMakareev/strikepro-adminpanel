(window.webpackJsonp=window.webpackJsonp||[]).push([[25,29],{546:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e,t){return!(!e||!t)&&Object.prototype.hasOwnProperty.call(e,t)}},549:function(e,t,a){"use strict";var n="";switch(window.location.hostname){case"localhost":case"admin.strikepro.ru":n="https://dev.strikepro.ru";break;case"strike.localhost":n="http://strike.localhost"}t.a={base:n,api:{login:"/dashboard/auth/login",logout:"/dashboard/auth/logout",posts:"/dashboard/blog/posts",post:"/dashboard/blog/post",categories:"/dashboard/blog/categories",category:"/dashboard/blog/category",slides:"/dashboard/slides",tiles:"/dashboard/mainfeeds",tile_types:"/dashboard/mainfeed/types",tile:"/dashboard/mainfeed",nomenclature:"/dashboard/nomenclature",nomenclatures:"/dashboard/nomenclatures",nomenclatureCharacteristic:"/dashboard/nomenclature/characteristic",typesOfNomenclature:"/dashboard/nomenclature/characteristic",fileupload:"/dashboard/fileupload",static_pages:"/dashboard/pages",url_alias:"/dashboard/url_alias"}}},551:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return c}),a.d(t,"d",function(){return s});var n=a(547),r=function(e){return Object(n.a)({method:"POST",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}},e?{body:JSON.stringify(e)}:{})},o=function(){return{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},c=function(){return{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},s=function(e){return{method:"PUT",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}}},555:function(e,t,a){"use strict";var n=a(28),r=Object(n.a)();t.a=r},556:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(555),r=function(e){var t=e.status;return 401===t?(n.a.push("#/login"),window.location.reload(),e):404===t?(n.a.push("#/404"),window.location.reload(),e):e}},557:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(547),r=a(559),o=a(18),c=a(185),s=function e(t){var a=this;Object(c.a)(this,e),this.resourceName=null,this.mergeResourceAndPayload=function(e,t){return t.forEach(function(t){e[a.resourceName][a.resourceName][t.id]=t,e[a.resourceName].metadata={data:[].concat(Object(o.a)(e[a.resourceName].metadata.data),[t.id])}}),e},this.removePayloadFromResources=function(e,t){return t?(console.log("removePayloadFromResources: ",a,e,t),delete e[a.resourceName][a.resourceName][t],e[a.resourceName].metadata.data=e[a.resourceName].metadata.data.filter(function(e){return e!==t}),e):(console.warn("payloadID undefined"),e)},this.payloadToResource=function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c={entities:Object(r.a)({},a.resourceName,(t={},Object(r.a)(t,a.resourceName,{}),Object(r.a)(t,"metadata",{}),t)),result:[]};return e&&e.forEach(function(e){c.result.push(e.id),c.entities[a.resourceName][a.resourceName][e.id]=e}),c.entities[a.resourceName].metadata=Object(n.a)({},o,{data:c.result}),c},this.updateResource=function(e,t){return e[a.resourceName][a.resourceName][t.id]=t,e},this.normalizeError=function(e){return e.errors||(e.errors={}),{entities:Object(n.a)({},e,{message:[e.message]}),result:{errors:e}}},this.resourceName=t}},558:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(546);var n=function(e){return function(t,a,n){return t.errors?e.normalizeError(t):t?e.removePayloadFromResources(a,n.id):a}}},560:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(0),r=a.n(n),o=a(552),c=a(553),s=a(550),u=a(554),i=a(548),l=a(564),d=function(e){var t=e.header,a=e.children,n=e.footer;return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(o.a,null,r.a.createElement(c.a,{xs:"12"},r.a.createElement(s.a,null,t&&r.a.createElement(u.a,null,r.a.createElement("strong",null,t)),r.a.createElement(i.a,{className:"card-body"},a),n&&r.a.createElement(l.a,{className:"card-footer"},n)))))};t.b=d},566:function(e,t,a){"use strict";var n=a(11),r=a(67),o=a(0),c=a.n(o),s=a(23),u=a.n(s),i=a(40),l=a.n(i),d=a(541),m={color:u.a.string,pill:u.a.bool,tag:d.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),children:u.a.node,className:u.a.string,cssModule:u.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.color,s=e.innerRef,u=e.pill,i=e.tag,m=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(d.m)(l()(t,"badge","badge-"+o,!!u&&"badge-pill"),a);return m.href&&"span"===i&&(i="a"),c.a.createElement(i,Object(n.a)({},m,{className:p,ref:s}))};p.propTypes=m,p.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=p},568:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(567),c=function(e){var t=e.onDelete,a=e.label,n=e.confirmMessage;return r.a.createElement(o.a,{color:"danger",onClick:function(){window.confirm(n)&&t()}},a)};c.defaultProps={label:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",confirmMessage:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?"},t.a=c},570:function(e,t,a){"use strict";var n=a(547),r=a(185),o=a(186),c=a(188),s=a(187),u=a(189),i=a(0),l=a.n(i),d=a(66),m=a(190),p=a(670),f=a(671),g=a(553),h=a(669),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).onMovePageHistory=function(e){var t=a.props,n=t.match;return t.history.push("".concat(n.path,"?page=").concat(e)),e},a.onMovePage=function(e,t){e.preventDefault();var n=a.props,r=n.metaData;return(0,n.onMovePage)(r.current_page+t),a.onMovePageHistory(r.current_page+t),t},a.state=a.initialState,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onPagination",value:function(e){var t=this,a=e.last_page,n=[],r=this.state,o=r.page_min,c=r.page_max,s=r.current_page;s===c?c<a&&(c+=1,o+=1):s===o+1&&o>0&&(c-=1,o-=1),c!==this.state.page_max&&o!==this.state.page_max&&this.setState(c,o);for(var u=function(e){var a=e+1;a===s?n.push(l.a.createElement(p.a,{key:e,active:!0},l.a.createElement(f.a,{href:"#"},a))):n.push(l.a.createElement(p.a,{key:e},l.a.createElement(f.a,{onClick:function(e){e.preventDefault();var n=t.props.onMovePage;t.onMovePageHistory(a),n(a)}},a)))},i=o;i<a;i++)u(i);return n}},{key:"render",value:function(){var e=this,t=this.props.metaData;return t&&t&&t.last_page>1?l.a.createElement(g.a,{xs:"12"},l.a.createElement("nav",null,l.a.createElement(h.a,{className:"justify-content-center"},t.current_page>1&&l.a.createElement(p.a,null,l.a.createElement(f.a,{onClick:function(t){return e.onMovePage(t,-1)},previous:!0,href:"#"},"Prev")),this.onPagination(t),t.last_page>t.current_page&&l.a.createElement(p.a,null,l.a.createElement(f.a,{onClick:function(t){return e.onMovePage(t,1)},next:!0,href:"#"},"Next"))))):null}},{key:"initialState",get:function(){return{page_min:0,page_max:5}}}]),t}(i.Component),v=(b=Object(d.k)(b),a(560)),j=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).getPaginationParam=function(){try{var e=a.props.location.search.match(/page=[0-9]/gi);return e&&e.length?e[0].match(/[0-9]/g)[0]:1}catch(t){return console.log("Error getPaginationParam: ",t),1}},a.onDelete=function(e){var t=a.props.DeleteAction;return t&&t({urlParams:{id:e}})},a.onGetList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=a.props.GetAction;return t&&t({query:{page:e}})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.onGetList(this.getPaginationParam())}},{key:"render",value:function(){var e=this.props,t=e.list,a=e.isRetrieving,n=e.ListComponent,r=e.header;if(a&&!t.length)return l.a.createElement("div",null,"Loading...");if(!t.length)return null;var o=Object.values(t[0]),c=t[1];return l.a.createElement(v.a,{header:r},n&&l.a.createElement(n,{data:o,metaData:c,onDelete:this.onDelete}),l.a.createElement(b,{metaData:c,onMovePage:this.onGetList}))}}]),t}(i.Component);j.defaultProps={header:null,list:[],DeleteAction:function(){return null},GetAction:function(){return null},ListComponent:function(){return l.a.createElement("div",null,"empty")}};j=Object(m.a)(function(e,t){var a=t.GetList,r=t.isRetrieving;return a||console.log("GetList in undefined"),Object(n.a)({},a?{list:a(e,t)}:{},r?{isRetrieving:r(e,t)}:{})},function(e,t){var a=t.DeleteAction,r=t.GetAction;return a||console.log("DeleteAction in undefined"),r||console.log("GetAction in undefined"),Object(n.a)({},a?{DeleteAction:function(t){return e(a(t))}}:{},r?{GetAction:function(t){return e(r(t))}}:{})})(j),j=Object(d.k)(j);t.a=j},588:function(e,t,a){"use strict";a.d(t,"a",function(){return p}),a.d(t,"b",function(){return f}),a.d(t,"c",function(){return g}),a.d(t,"f",function(){return h}),a.d(t,"g",function(){return b}),a.d(t,"i",function(){return R}),a.d(t,"j",function(){return k}),a.d(t,"e",function(){return E}),a.d(t,"d",function(){return O}),a.d(t,"h",function(){return y});var n=a(190),r=a(549),o=a(556),c=a(551),s=a(557),u=a(558),i=a(546),l=new s.a("posts"),d=Object(n.b)("posts")({createPost:{method:"POST",url:"".concat(r.a.base).concat(r.a.api.post),normalizer:function(e,t,a){return console.log("createPost: ",e,t,a),e?e.errors||e.message?l.normalizeError(e):Object(i.a)(t,"posts")?l.mergeResourceAndPayload(t,[e]):l.payloadToResource([e]):null},networkHelpers:{handleStatusCode:o.a,requestPOST:c.c}},deletePost:{method:"DELETE",url:"".concat(r.a.base).concat(r.a.api.post,"/::id"),normalizer:Object(u.a)(l),networkHelpers:{handleStatusCode:o.a,requestDELETE:c.a}},getPost:{method:"GET",url:"".concat(r.a.base).concat(r.a.api.post,"/::id"),normalizer:function(e){return l.payloadToResource([e])},networkHelpers:{handleStatusCode:o.a,requestGET:c.b}},getPosts:{method:"GET",url:"".concat(r.a.base).concat(r.a.api.posts),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?l.payloadToResource(e):l.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:o.a,requestGET:c.b}},updatePost:{method:"PUT",url:"".concat(r.a.base).concat(r.a.api.post,"/::id"),normalizer:function(e,t){return e.errors?l.normalizeError(e):e?l.updateResource(t,e):t},networkHelpers:{handleStatusCode:o.a,requestPUT:c.d}}}),m=d.actions,p=m.createPost.perform,f=m.deletePost.perform,g=m.getPost.perform,h=m.getPosts.perform,b=m.updatePost.perform,v=d.selectors,j=v.resource,E=j.getResource,O=j.getResourceById,P=v.createPost.request,y=(P.getResource,P.isPerforming),N=(v.deletePost.request.getResource,v.getPost.request),R=(N.getResource,N.isPerforming),T=v.getPosts.request,k=(T.getResource,T.isPerforming),A=v.updatePost.request;A.getResource,A.isPerforming},639:function(e,t,a){"use strict";var n=a(11),r=a(67),o=a(0),c=a.n(o),s=a(23),u=a.n(s),i=a(40),l=a.n(i),d=a(541),m={tag:d.q,className:u.a.string,cssModule:u.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),u=Object(d.m)(l()(t,"card-title"),a);return c.a.createElement(o,Object(n.a)({},s,{className:u}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},642:function(e,t,a){"use strict";var n=a(11),r=a(67),o=a(0),c=a.n(o),s=a(23),u=a.n(s),i=a(40),l=a.n(i),d=a(541),m={tag:d.q,className:u.a.string,cssModule:u.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),u=Object(d.m)(l()(t,"card-text"),a);return c.a.createElement(o,Object(n.a)({},s,{className:u}))};p.propTypes=m,p.defaultProps={tag:"p"},t.a=p},647:function(e,t,a){"use strict";a.d(t,"a",function(){return p}),a.d(t,"b",function(){return f}),a.d(t,"e",function(){return g}),a.d(t,"f",function(){return P}),a.d(t,"g",function(){return N}),a.d(t,"d",function(){return v}),a.d(t,"c",function(){return j});var n=a(190),r=a(549),o=a(556),c=a(551),s=a(557),u=a(558),i=a(546),l=new s.a("nomenclatures"),d=Object(n.b)("nomenclatures")({createNomenclature:{method:"POST",url:"".concat(r.a.base).concat(r.a.api.nomenclature),normalizer:function(e,t,a){return console.log("createNomenclature: ",e,t,a),e?e.errors?l.normalizeError(e):Object(i.a)(t,"nomenclatures")?l.mergeResourceAndPayload(t,[e]):l.payloadToResource([e]):null},networkHelpers:{handleStatusCode:o.a,requestPOST:c.c}},deleteNomenclature:{method:"DELETE",url:"".concat(r.a.base).concat(r.a.api.nomenclature,"/::id"),normalizer:Object(u.a)(l),networkHelpers:{handleStatusCode:o.a,requestDELETE:c.a}},getNomenclature:{method:"GET",url:"".concat(r.a.base).concat(r.a.api.nomenclature,"/::id"),normalizer:function(e){return l.payloadToResource([e])},networkHelpers:{handleStatusCode:o.a,requestGET:c.b}},getNomenclatures:{method:"GET",url:"".concat(r.a.base).concat(r.a.api.nomenclatures),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?l.payloadToResource(e):l.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:o.a,requestGET:c.b}},updateNomenclature:{method:"PUT",url:"".concat(r.a.base).concat(r.a.api.nomenclature,"/::id"),normalizer:function(e,t){return e.errors?l.normalizeError(e):e?l.updateResource(t,e):t},networkHelpers:{handleStatusCode:o.a,requestPUT:c.d}}}),m=d.actions,p=(m.createNomenclature.perform,m.deleteNomenclature.perform),f=m.getNomenclature.perform,g=m.getNomenclatures.perform,h=(m.updateNomenclature.perform,d.selectors),b=h.resource,v=b.getResource,j=b.getResourceById,E=h.createNomenclature.request,O=(E.getResource,E.isPerforming,h.deleteNomenclature.request.getResource,h.getNomenclature.request),P=(O.getResource,O.isPerforming),y=h.getNomenclatures.request,N=(y.getResource,y.isPerforming),R=h.updateNomenclature.request;R.getResource,R.isPerforming},691:function(e,t,a){"use strict";a.r(t);var n=a(185),r=a(186),o=a(188),c=a(187),s=a(189),u=a(0),i=a.n(u),l=a(552),d=a(553),m=a(190),p=a(588),f=a(550),g=a(548),h=a(639),b=a(642),v=a(564),j=a(567),E=a(566),O=a(191),P=a(568),y=function(e){var t=e.title,a=e.excerpt,n=e.id,r=e.status,o=e.onDelete;return i.a.createElement(f.a,null,i.a.createElement(g.a,null,i.a.createElement(h.a,null,t),i.a.createElement(b.a,null,a)),i.a.createElement(v.a,{className:"text-muted"},i.a.createElement(j.a,{color:"warning"},i.a.createElement(O.Link,{to:"/post-editor/".concat(n)},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")),i.a.createElement(P.a,{onDelete:function(){return o(n)}}),i.a.createElement(E.a,{color:"success",className:"float-right"},r)))},N=a(570),R=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(N.a,{header:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446",DeleteAction:p.b,GetAction:p.f,GetList:p.e,isRetrieving:p.j,ListComponent:function(e){var t=e.data,a=e.onDelete;return i.a.createElement(l.a,null,t&&t.map(function(e,t){return i.a.createElement(d.a,{xs:"12",sm:"6",md:"4",key:t},i.a.createElement(y,Object.assign({},e,{onDelete:a})))}))}})}}]),t}(u.Component);R=Object(m.a)(function(e,t){return{posts:Object(p.e)(e,t),isRetrievingGetPosts:Object(p.j)(e,t)}},function(e){return{DeletePostAction:function(t){return e(Object(p.b)(t))},GetPostsAction:function(t){return e(Object(p.f)(t))}}})(R);t.default=R},834:function(e,t,a){"use strict";a.r(t),a.d(t,"NomenclatureList",function(){return f});var n=a(185),r=a(186),o=a(188),c=a(187),s=a(189),u=a(0),i=a.n(u),l=a(560),d=a(190),m=a(647),p=a(691),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),u=0;u<r;u++)s[u]=arguments[u];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).onGetNomenclaturesAction=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.props.GetNomenclaturesAction({query:{page:e}})},a.onDeleteNomenclatureAction=function(e){return a.props.DeleteNomenclatureAction({urlParams:{id:e}})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.onGetNomenclaturesAction()}},{key:"render",value:function(){var e=this.props,t=e.nomenclatures;if(e.isRetrievingGetNomenclatures&&!t)return i.a.createElement("div",null,"Loading...");if(!t.length)return null;console.log(this.props);Object.values(t[0]);var a=t[1];return i.a.createElement(l.a,{header:"title"},i.a.createElement(p.default,{metaData:a,onMovePage:this.onDeleteNomenclatureAction}))}}]),t}(u.Component);f=Object(d.a)(function(e,t){return{nomenclatures:Object(m.d)(e,t),isRetrievingGetNomenclatures:Object(m.g)(e,t)}},function(e){return{GetNomenclaturesAction:function(t){return e(Object(m.e)(t))},DeleteNomenclatureAction:function(t){return e(Object(m.a)(t))}}})(f),t.default=f}}]);
//# sourceMappingURL=25.902dd2bb.chunk.js.map