(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{546:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e,t){return!(!e||!t)&&Object.prototype.hasOwnProperty.call(e,t)}},549:function(e,t,a){"use strict";var n="";switch(window.location.hostname){case"localhost":case"admin.strikepro.ru":n="https://dev.strikepro.ru";break;case"strike.localhost":n="http://strike.localhost"}t.a={base:n,api:{login:"/dashboard/auth/login",logout:"/dashboard/auth/logout",posts:"/dashboard/blog/posts",post:"/dashboard/blog/post",categories:"/dashboard/blog/categories",category:"/dashboard/blog/category",slides:"/dashboard/slides",tiles:"/dashboard/mainfeeds",tile_types:"/dashboard/mainfeed/types",tile:"/dashboard/mainfeed",nomenclature:"/dashboard/nomenclature",nomenclatures:"/dashboard/nomenclatures",nomenclatureCharacteristic:"/dashboard/nomenclature/characteristic",typesOfNomenclature:"/dashboard/nomenclature/characteristic",fileupload:"/dashboard/fileupload",static_pages:"/dashboard/pages",url_alias:"/dashboard/url_alias",feedback:"/dashboard/feedback"}}},551:function(e,t,a){"use strict";var n=a(28),r=Object(n.a)();t.a=r},552:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return c}),a.d(t,"d",function(){return s});var n=a(547),r=function(e){return Object(n.a)({method:"POST",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}},e?{body:JSON.stringify(e)}:{})},o=function(){return{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},c=function(){return{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"}}},s=function(e){return{method:"PUT",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}}},556:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(551),r=function(e){var t=e.status;return 401===t?(n.a.push("#/login"),window.location.reload(),e):404===t?(n.a.push("#/404"),window.location.reload(),e):e}},557:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(547),r=a(560),o=a(18),c=a(185),s=function e(t){var a=this;Object(c.a)(this,e),this.resourceName=null,this.mergeResourceAndPayload=function(e,t){return t.forEach(function(t){e[a.resourceName][a.resourceName][t.id]=t,e[a.resourceName].metadata={data:[].concat(Object(o.a)(e[a.resourceName].metadata.data),[t.id])}}),e},this.removePayloadFromResources=function(e,t){return t?(console.log("removePayloadFromResources: ",a,e,t),delete e[a.resourceName][a.resourceName][t],e[a.resourceName].metadata.data=e[a.resourceName].metadata.data.filter(function(e){return e!==t}),e):(console.warn("payloadID undefined"),e)},this.payloadToResource=function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c={entities:Object(r.a)({},a.resourceName,(t={},Object(r.a)(t,a.resourceName,{}),Object(r.a)(t,"metadata",{}),t)),result:[]};return e&&e.forEach(function(e){c.result.push(e.id),c.entities[a.resourceName][a.resourceName][e.id]=e}),c.entities[a.resourceName].metadata=Object(n.a)({},o,{data:c.result}),c},this.updateResource=function(e,t){return e[a.resourceName][a.resourceName][t.id]=t,e},this.normalizeError=function(e){return e.errors||(e.errors={}),{entities:Object(n.a)({},e,{message:[e.message]}),result:{errors:e}}},this.resourceName=t}},558:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(546);var n=function(e){return function(t,a,n){return t.errors?e.normalizeError(t):t?e.removePayloadFromResources(a,n.id):a}}},562:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(0),r=a.n(n),o=a(553),c=a(554),s=a(550),i=a(555),u=a(548),l=a(566),d=function(e){var t=e.header,a=e.children,n=e.footer;return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(o.a,null,r.a.createElement(c.a,{xs:"12"},r.a.createElement(s.a,null,t&&r.a.createElement(i.a,null,r.a.createElement("strong",null,t)),r.a.createElement(u.a,{className:"card-body"},a),n&&r.a.createElement(l.a,{className:"card-footer"},n)))))};t.b=d},567:function(e,t,a){"use strict";var n=a(547),r=a(185),o=a(186),c=a(188),s=a(187),i=a(189),u=a(0),l=a.n(u),d=a(66),m=a(190),p=a(639),f=a(640),g=a(554),h=a(638),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).onMovePageHistory=function(e){var t=a.props,n=t.match;return t.history.push("".concat(n.path,"?page=").concat(e)),e},a.onMovePage=function(e,t){e.preventDefault();var n=a.props,r=n.metaData;return(0,n.onMovePage)(r.current_page+t),a.onMovePageHistory(r.current_page+t),t},a.state=a.initialState,a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"onPagination",value:function(e){var t=this,a=e.last_page,n=[],r=this.state,o=r.page_min,c=r.page_max,s=r.current_page;s===c?c<a&&(c+=1,o+=1):s===o+1&&o>0&&(c-=1,o-=1),c!==this.state.page_max&&o!==this.state.page_max&&this.setState(c,o);for(var i=function(e){var a=e+1;a===s?n.push(l.a.createElement(p.a,{key:e,active:!0},l.a.createElement(f.a,{href:"#"},a))):n.push(l.a.createElement(p.a,{key:e},l.a.createElement(f.a,{onClick:function(e){e.preventDefault();var n=t.props.onMovePage;t.onMovePageHistory(a),n(a)}},a)))},u=o;u<a;u++)i(u);return n}},{key:"render",value:function(){var e=this,t=this.props.metaData;return t&&t&&t.last_page>1?l.a.createElement(g.a,{xs:"12"},l.a.createElement("nav",null,l.a.createElement(h.a,{className:"justify-content-center"},t.current_page>1&&l.a.createElement(p.a,null,l.a.createElement(f.a,{onClick:function(t){return e.onMovePage(t,-1)},previous:!0,href:"#"},"Prev")),this.onPagination(t),t.last_page>t.current_page&&l.a.createElement(p.a,null,l.a.createElement(f.a,{onClick:function(t){return e.onMovePage(t,1)},next:!0,href:"#"},"Next"))))):null}},{key:"initialState",get:function(){return{page_min:0,page_max:5}}}]),t}(u.Component),v=(b=Object(d.k)(b),a(562)),j=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).getPaginationParam=function(){try{var e=a.props.location.search.match(/page=[0-9]/gi);return e&&e.length?e[0].match(/[0-9]/g)[0]:1}catch(t){return console.log("Error getPaginationParam: ",t),1}},a.onDelete=function(e){var t=a.props.DeleteAction;return t&&t({urlParams:{id:e}})},a.onGetList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=a.props.GetAction;return t&&t({query:{page:e}})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.onGetList(this.getPaginationParam())}},{key:"render",value:function(){var e=this.props,t=e.list,a=e.isRetrieving,n=e.ListComponent,r=e.header;if(a&&!t.length)return l.a.createElement("div",null,"Loading...");if(!t.length)return null;var o=Object.values(t[0]),c=t[1];return l.a.createElement(v.a,{header:r},n&&l.a.createElement(n,{data:o,metaData:c,onDelete:this.onDelete}),l.a.createElement(b,{metaData:c,onMovePage:this.onGetList}))}}]),t}(u.Component);j.defaultProps={header:null,list:[],DeleteAction:function(){return null},GetAction:function(){return null},ListComponent:function(){return l.a.createElement("div",null,"empty")}};j=Object(m.a)(function(e,t){var a=t.GetList,r=t.isRetrieving;return a||console.log("GetList in undefined"),Object(n.a)({},a?{list:a(e,t)}:{},r?{isRetrieving:r(e,t)}:{})},function(e,t){var a=t.DeleteAction,r=t.GetAction;return a||console.log("DeleteAction in undefined"),r||console.log("GetAction in undefined"),Object(n.a)({},a?{DeleteAction:function(t){return e(a(t))}}:{},r?{GetAction:function(t){return e(r(t))}}:{})})(j),j=Object(d.k)(j);t.a=j},568:function(e,t,a){"use strict";var n=a(11),r=a(67),o=a(0),c=a.n(o),s=a(23),i=a.n(s),u=a(40),l=a.n(u),d=a(541),m={color:i.a.string,pill:i.a.bool,tag:d.q,innerRef:i.a.oneOfType([i.a.object,i.a.func,i.a.string]),children:i.a.node,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.color,s=e.innerRef,i=e.pill,u=e.tag,m=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(d.m)(l()(t,"badge","badge-"+o,!!i&&"badge-pill"),a);return m.href&&"span"===u&&(u="a"),c.a.createElement(u,Object(n.a)({},m,{className:p,ref:s}))};p.propTypes=m,p.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=p},571:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(565),c=function(e){var t=e.onDelete,a=e.label,n=e.confirmMessage;return r.a.createElement(o.a,{color:"danger",onClick:function(){window.confirm(n)&&t()}},a)};c.defaultProps={label:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",confirmMessage:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?"},t.a=c},607:function(e,t,a){"use strict";a.d(t,"a",function(){return p}),a.d(t,"b",function(){return f}),a.d(t,"c",function(){return g}),a.d(t,"f",function(){return h}),a.d(t,"g",function(){return b}),a.d(t,"i",function(){return k}),a.d(t,"j",function(){return w}),a.d(t,"e",function(){return E}),a.d(t,"d",function(){return P}),a.d(t,"h",function(){return y});var n=a(190),r=a(549),o=a(556),c=a(552),s=a(557),i=a(558),u=a(546),l=new s.a("posts"),d=Object(n.b)("posts")({createPost:{method:"POST",url:"".concat(r.a.base).concat(r.a.api.post),normalizer:function(e,t,a){return console.log("createPost: ",e,t,a),e?e.errors||e.message?l.normalizeError(e):Object(u.a)(t,"posts")?l.mergeResourceAndPayload(t,[e]):l.payloadToResource([e]):null},networkHelpers:{handleStatusCode:o.a,requestPOST:c.c}},deletePost:{method:"DELETE",url:"".concat(r.a.base).concat(r.a.api.post,"/::id"),normalizer:Object(i.a)(l),networkHelpers:{handleStatusCode:o.a,requestDELETE:c.a}},getPost:{method:"GET",url:"".concat(r.a.base).concat(r.a.api.post,"/::id"),normalizer:function(e){return l.payloadToResource([e])},networkHelpers:{handleStatusCode:o.a,requestGET:c.b}},getPosts:{method:"GET",url:"".concat(r.a.base).concat(r.a.api.posts),normalizer:function(e){return!e&&e.error?null:Array.isArray(e)?l.payloadToResource(e):l.payloadToResource(e.data,e)},networkHelpers:{handleStatusCode:o.a,requestGET:c.b}},updatePost:{method:"PUT",url:"".concat(r.a.base).concat(r.a.api.post,"/::id"),normalizer:function(e,t){return e.errors?l.normalizeError(e):e?l.updateResource(t,e):t},networkHelpers:{handleStatusCode:o.a,requestPUT:c.d}}}),m=d.actions,p=m.createPost.perform,f=m.deletePost.perform,g=m.getPost.perform,h=m.getPosts.perform,b=m.updatePost.perform,v=d.selectors,j=v.resource,E=j.getResource,P=j.getResourceById,O=v.createPost.request,y=(O.getResource,O.isPerforming),N=(v.deletePost.request.getResource,v.getPost.request),k=(N.getResource,N.isPerforming),R=v.getPosts.request,w=(R.getResource,R.isPerforming),D=v.updatePost.request;D.getResource,D.isPerforming},673:function(e,t,a){"use strict";var n=a(11),r=a(67),o=a(0),c=a.n(o),s=a(23),i=a.n(s),u=a(40),l=a.n(u),d=a(541),m={tag:d.q,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.m)(l()(t,"card-title"),a);return c.a.createElement(o,Object(n.a)({},s,{className:i}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},674:function(e,t,a){"use strict";var n=a(11),r=a(67),o=a(0),c=a.n(o),s=a(23),i=a.n(s),u=a(40),l=a.n(u),d=a(541),m={tag:d.q,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.m)(l()(t,"card-text"),a);return c.a.createElement(o,Object(n.a)({},s,{className:i}))};p.propTypes=m,p.defaultProps={tag:"p"},t.a=p},851:function(e,t,a){"use strict";a.r(t);var n=a(185),r=a(186),o=a(188),c=a(187),s=a(189),i=a(0),u=a.n(i),l=a(553),d=a(554),m=a(190),p=a(607),f=a(550),g=a(548),h=a(673),b=a(674),v=a(566),j=a(565),E=a(568),P=a(191),O=a(571),y=function(e){var t=e.title,a=e.excerpt,n=e.id,r=e.status,o=e.onDelete;return u.a.createElement(f.a,null,u.a.createElement(g.a,null,u.a.createElement(h.a,null,t),u.a.createElement(b.a,null,a)),u.a.createElement(v.a,{className:"text-muted"},u.a.createElement(j.a,{color:"warning"},u.a.createElement(P.Link,{to:"/post-editor/".concat(n)},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")),u.a.createElement(O.a,{onDelete:function(){return o(n)}}),u.a.createElement(E.a,{color:"success",className:"float-right"},r)))},N=a(567),k=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(N.a,{header:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446",DeleteAction:p.b,GetAction:p.f,GetList:p.e,isRetrieving:p.j,ListComponent:function(e){var t=e.data,a=e.onDelete;return u.a.createElement(l.a,null,t&&t.map(function(e,t){return u.a.createElement(d.a,{xs:"12",sm:"6",md:"4",key:t},u.a.createElement(y,Object.assign({},e,{onDelete:a})))}))}})}}]),t}(i.Component);k=Object(m.a)(function(e,t){return{posts:Object(p.e)(e,t),isRetrievingGetPosts:Object(p.j)(e,t)}},function(e){return{DeletePostAction:function(t){return e(Object(p.b)(t))},GetPostsAction:function(t){return e(Object(p.f)(t))}}})(k);t.default=k}}]);
//# sourceMappingURL=26.96b83ce2.chunk.js.map